/**
 * Malaysia Tests Cleanup Script
 * 
 * This script will:
 * 1. Remove duplicate tests (keep the best version)
 * 2. Map all tests to the 6 standard categories
 * 3. Rename folders to use standard prefixes
 * 4. Reduce from 543 tests to ~300 tests
 */

const fs = require('fs');
const path = require('path');

const TESTS_DIR = path.join(__dirname, 'src/tests-ms');

// ============================================
// CATEGORY MAPPING
// ============================================
// Map current prefixes to standard 6 categories
const CATEGORY_MAPPING = {
  // Already correct
  'personaliti': 'personality',
  'psikologi': 'psychology',
  'kerjaya': 'career',
  'fun': 'fun',
  'kecerdasan': 'iq',
  
  // Need mapping
  'cinta': 'relationship',      // Love topics
  'hubungan': 'relationship',   // Relationship topics
  'perhubungan': 'relationship', // Relationship topics
  
  'kerja': 'career',            // Work topics
  'student': 'career',          // Student/education -> career
  'belajar': 'career',          // Learning -> career
  'kewangan': 'career',         // Finance -> career
  
  'hiburan': 'fun',             // Entertainment
  'makanan': 'fun',             // Food -> fun
  'minuman': 'fun',             // Drinks -> fun
  'budaya': 'fun',              // Culture -> fun
  'tradisi': 'fun',             // Tradition -> fun
  'perayaan': 'fun',            // Celebrations -> fun
  'negeri': 'fun',              // States -> fun
  'pelancongan': 'fun',         // Tourism -> fun
  'hobi': 'fun',                // Hobbies -> fun
  'sukan': 'fun',               // Sports -> fun
  'fesyen': 'fun',              // Fashion -> fun
  'gaya': 'fun',                // Style -> fun
  'lifestyle': 'fun',           // Lifestyle -> fun
  'sosial': 'fun',              // Social -> fun
  'sosmed': 'fun',              // Social media -> fun
  'random': 'fun',              // Random -> fun
  'jenaka': 'fun',              // Jokes -> fun
  'keseronokan': 'fun',         // Entertainment -> fun
  'kehidupan': 'fun',           // Life -> fun
  'keluarga': 'fun',            // Family -> fun
  'nilai': 'fun',               // Values -> fun
  'moden': 'fun',               // Modern -> fun
  'teknologi': 'fun',           // Tech -> fun
  'pengangkutan': 'fun',        // Transport -> fun
  'membeli': 'fun',             // Shopping -> fun
  'komunikasi': 'psychology',   // Communication -> psychology
  'kesihatan': 'psychology',    // Health -> psychology
  
  // Standalone/misc
  'mamak': 'fun',
  'kopitiam': 'fun',
  'pasar': 'fun',
  'raya': 'fun',
  'cuaca': 'fun',
  'jam': 'fun',
  'jiran': 'fun',
  'rakan': 'fun',
  'tetamu': 'fun',
  'pelajar': 'career',
};

// ============================================
// DUPLICATES TO REMOVE
// ============================================
// Keep the first one, delete the rest
const DUPLICATES_TO_DELETE = [
  // Karaoke - keep hiburan-karaoke-ms
  'hiburan-karaoke-bar',
  'personaliti-karaoke-ms',
  
  // Gym - keep sukan-gym-ms
  'personaliti-gym-ms',
  'sosial-gym-ms',
  
  // Badminton - keep sukan-badminton-ms
  'personaliti-badminton-ms',
  
  // Gotong-royong - keep budaya-gotong-royong-ms
  'nilai-gotong-royong',
  'tradisi-gotong-royong',
  
  // E-wallet - keep teknologi-e-wallet
  'moden-e-wallet',
  
  // Satay - keep makanan-satay-ms
  'makanan-satay',
  'personaliti-satay',
  
  // Roti canai - keep makanan-roti-canai-ms
  'makanan-roti-canai',
  'personaliti-roti-canai',
  
  // Laksa - keep makanan-laksa-ms
  'makanan-laksa',
  'personaliti-laksa',
  
  // Char kuey teow - keep makanan-char-kuey-teow-ms
  'makanan-char-kuey-teow',
  'personaliti-char-kuey-teow',
  
  // Kenduri - keep keluarga-kenduri-ms
  'budaya-kenduri-ms',
  'keluarga-kenduri',
  
  // Balik kampung - keep keluarga-balik-kampung-ms
  'budaya-balik-kampung-ms',
  'keluarga-balik-kampung',
  
  // Facebook - keep sosmed-facebook-ms
  'personaliti-facebook-ms',
  'sosial-facebook-ms',
  
  // Raya - keep budaya-raya-ms
  'personaliti-raya',
  'raya-celebration',
  
  // Similar duplicates
  'keluarga-anak-sulung-ms', // keep keluarga-anak-ms
  'keluarga-gathering', // keep keluarga-gathering-ms
  'hiburan-drama-ms', // keep hiburan-drama-melayu
  'psikologi-emosi', // keep psikologi-emosi-ms
  'psikologi-overthink-ms', // keep psikologi-overthinking-ms
  'psikologi-optimis-ms', // keep psikologi-optimist-ms
  'hobi-memasak', // keep hobi-memasak-ms
  'gaya-hidup-hujung-minggu-ms', // keep kehidupan-hujung-minggu
  'personaliti-minum-ms', // keep minuman- tests
  'sosial-twitter-ms', // keep sosmed-twitter-ms
  'sosial-youtube-ms', // keep sosmed-youtube-ms
  'sosial-telegram-ms', // keep sosmed-telegram-ms
  'sosial-instagram-ms', // keep sosmed-instagram-ms (but personaliti-instagram-ms exists too)
  'personaliti-instagram-ms', // duplicate of sosmed
  'personaliti-whatsapp-ms', // keep komunikasi-whatsapp-ms
  'personaliti-tiktok-ms', // keep fun-tiktok-malaysia
  'personaliti-shopee-ms', // keep fun-shopee-addict
  'personaliti-grab-ms', // keep fun-grab-driver-rating
  'personaliti-netflix-ms', // generic
  'personaliti-drama-ms', // keep hiburan-drama-melayu
  'psikologi-perfeksionis', // keep psikologi-perfectionist-ms
  'psikologi-fokus', // keep psikologi-focus-ms or kecerdasan-fokus-ms
  'psikologi-kreatif', // keep psikologi-creative-ms
  'kecerdasan-kreatif-ms', // keep psikologi-creative-ms
  'psikologi-sosial', // generic
  'psikologi-spontan', // generic
  'psikologi-tegas', // generic
  'psikologi-tekanan', // keep psikologi-stress-ms
  'kecerdasan-analytical-ms', // keep kecerdasan-analitik-ms
  'kecerdasan-problem-ms', // keep kecerdasan-penyelesaian-ms
  'kerjaya-deadline-ms', // keep kerja-deadline-ms
  'kerjaya-interview-ms', // keep kerja-interview-ms
  'kerjaya-meeting-ms', // keep kerja-meeting-ms
  'kerjaya-networking-ms', // keep kerja-networking-ms
  'kerjaya-promotion-ms', // keep kerja-promotion-ms
  'kerjaya-wfh-ms', // keep kerja-wfh-ms
  'kerjaya-work-life-ms', // keep kerja-work-life-ms
  'hubungan-dating-ms', // keep cinta-dating-style-ms
  'hubungan-flirting-ms', // keep cinta-flirting-ms
  'hubungan-jealous-ms', // keep cinta-jealousy-ms
  'hubungan-ldr-ms', // keep cinta-long-distance-ms
  'hubungan-romantic-ms', // keep cinta-romantic-ms
  'hubungan-breakup-ms', // keep cinta-breakup-ms
  'hubungan-commitment-ms', // keep cinta-commitment-ms
  'hubungan-trust-ms', // keep psikologi-trust-ms
  'perhubungan-cemburu', // keep cinta-jealousy-ms
  'perhubungan-jarak-jauh', // keep cinta-long-distance-ms
  'perhubungan-romantik', // keep cinta-romantic-ms
  'perhubungan-putus', // keep cinta-breakup-ms
  'perhubungan-komitmen', // keep cinta-commitment-ms
  'perhubungan-kepercayaan', // keep psikologi-trust-ms
  
  // Less useful tests (too niche or redundant)
  'negeri-johor', 'negeri-kedah', 'negeri-kelantan', 'negeri-kuala-lumpur',
  'negeri-labuan', 'negeri-melaka', 'negeri-negeri-sembilan', 'negeri-pahang',
  'negeri-penang', 'negeri-perak', 'negeri-perlis', 'negeri-sabah',
  'negeri-sarawak', 'negeri-selangor', 'negeri-terengganu', // 15 state tests - too many
  
  // Very similar/redundant lifestyle tests
  'gaya-hidup-cuti-ms', // similar to fun-public-holiday
  'gaya-hidup-exercise-ms', // similar to kesihatan-senaman
  'gaya-hidup-fashion-ms', // similar to fesyen-casual
  'gaya-hidup-hangout-ms', // similar to fun-mamak-session
  'gaya-hidup-hobi-ms', // too generic
  'gaya-hidup-malam-ms', // similar to kehidupan-malam-ms
  'gaya-hidup-pagi-ms', // similar to kehidupan-pagi-ms
  'gaya-hidup-self-care-ms', // similar to lifestyle-skincare
  'gaya-hidup-skincare-ms', // similar to lifestyle-skincare
  
  // Very specific mall tests
  'membeli-belah-1utama',
  'membeli-belah-mid-valley',
  'membeli-belah-night-market', // keep pasar-malam
  'membeli-belah-pasar-borong',
  'membeli-belah-pavilion',
  
  // Too similar food tests
  'makanan-mee-ms', // keep makanan-mee-goreng
  'makanan-air-ms', // too generic
  'makanan-kuih-ms', // keep hiburan-kuih
  'makanan-mamak-order-ms', // keep fun-mamak-session
  'makanan-sambal-ms', // too niche
  'makanan-nasi-lemak-ms', // keep fun-nasi-lemak-lover or personaliti-nasi-lemak
  'personaliti-nasi-lemak', // duplicate
  
  // Duplicate entertainment
  'keseronokan-bermain-game', // keep hiburan-gaming-ms
  'keseronokan-jalan-jalan', // keep pelancongan tests
  'keseronokan-menari', // keep hobi-menari
  'keseronokan-menonton-tv', // keep hiburan-binge-ms
  'keseronokan-menyanyi', // keep hobi-menyanyi
  
  // More duplicates
  'personaliti-johor-ms', // keep fun test or remove
  'personaliti-penang-ms', // keep fun test or remove
  'personaliti-kl-ms', // redundant
  
  // Psychology duplicates
  'psikologi-kebimbangan', // keep psikologi-anxiety-ms
  'psikologi-keyakinan', // keep psikologi-confidence-ms
  'psikologi-humor', // keep jenaka tests
  'psikologi-marah-ms', // keep psikologi-anger-ms
  'psikologi-malu-ms', // similar to budaya-malu-ms
  'psikologi-sabar-ms', // keep psikologi-patience-ms
  'psikologi-sedih-ms', // too generic
  'psikologi-takut-ms', // keep psikologi-fear-ms
  'psikologi-konflik-ms', // similar to hubungan-conflict-ms
  'psikologi-empati-ms', // keep psikologi-empathy-ms
  'psikologi-gembira-ms', // keep psikologi-happiness-ms
  
  // Career duplicates
  'kerja-akauntan', 'kerja-cikgu', 'kerja-doktor', 'kerja-jurutera', 'kerja-peguam', // specific jobs - too niche
  'kerja-kaki-bodek-ms', // negative/unprofessional
  
  // Relationship duplicates
  'hubungan-attachment-ms', // keep psikologi-attachment-ms
  'hubungan-boundaries-ms', // keep psikologi-boundary-ms
  'hubungan-communication-ms', // keep psikologi-communication-ms
  'hubungan-compatibility-ms', // generic
  'hubungan-conflict-ms', // keep psikologi-konflik-ms
  'hubungan-ideal-partner-ms', // keep cinta-partner-type-ms
  'hubungan-love-language-ms', // keep psikologi-love-language-ms
  'perhubungan-bahasa-cinta', // keep psikologi-love-language-ms
  'perhubungan-date-ms', // keep cinta-dating-style-ms
  'perhubungan-komunikasi-ms', // keep psikologi-communication-ms
  'perhubungan-pasangan-ideal', // keep cinta-partner-type-ms
];

// ============================================
// MAIN FUNCTIONS
// ============================================

function getAllTestFolders() {
  return fs.readdirSync(TESTS_DIR).filter(f => {
    const fullPath = path.join(TESTS_DIR, f);
    return fs.statSync(fullPath).isDirectory();
  });
}

function getPrefix(folderName) {
  const parts = folderName.split('-');
  return parts[0];
}

function getNewCategoryPrefix(folderName) {
  const prefix = getPrefix(folderName);
  return CATEGORY_MAPPING[prefix] || 'fun'; // default to fun
}

function getNewFolderName(folderName) {
  const prefix = getPrefix(folderName);
  const newPrefix = CATEGORY_MAPPING[prefix] || 'fun';
  const rest = folderName.substring(prefix.length + 1); // +1 for the hyphen
  return `${newPrefix}-${rest}`;
}

// Analysis mode
function analyzeTests() {
  const folders = getAllTestFolders();
  console.log(`\nTotal tests: ${folders.length}`);
  console.log(`Duplicates to delete: ${DUPLICATES_TO_DELETE.length}`);
  console.log(`Estimated after cleanup: ${folders.length - DUPLICATES_TO_DELETE.length}`);
  
  // Check which duplicates exist
  const existing = DUPLICATES_TO_DELETE.filter(d => folders.includes(d));
  const missing = DUPLICATES_TO_DELETE.filter(d => !folders.includes(d));
  
  console.log(`\nDuplicates found: ${existing.length}`);
  console.log(`Duplicates not found: ${missing.length}`);
  
  if (missing.length > 0) {
    console.log('\nMissing duplicates:');
    missing.forEach(m => console.log(`  - ${m}`));
  }
  
  // Show category distribution after mapping
  const categoryCount = {};
  folders.forEach(f => {
    if (!DUPLICATES_TO_DELETE.includes(f)) {
      const cat = getNewCategoryPrefix(f);
      categoryCount[cat] = (categoryCount[cat] || 0) + 1;
    }
  });
  
  console.log('\nCategory distribution after cleanup:');
  Object.entries(categoryCount).sort((a, b) => b[1] - a[1]).forEach(([cat, count]) => {
    console.log(`  ${cat}: ${count}`);
  });
}

// Delete duplicates
function deleteDuplicates(dryRun = true) {
  const folders = getAllTestFolders();
  let deleted = 0;
  
  DUPLICATES_TO_DELETE.forEach(folderName => {
    const folderPath = path.join(TESTS_DIR, folderName);
    if (fs.existsSync(folderPath)) {
      if (dryRun) {
        console.log(`[DRY RUN] Would delete: ${folderName}`);
      } else {
        fs.rmSync(folderPath, { recursive: true });
        console.log(`Deleted: ${folderName}`);
      }
      deleted++;
    }
  });
  
  console.log(`\n${dryRun ? 'Would delete' : 'Deleted'}: ${deleted} folders`);
}

// Main
const args = process.argv.slice(2);
const command = args[0] || 'analyze';

switch (command) {
  case 'analyze':
    analyzeTests();
    break;
  case 'delete-dry':
    deleteDuplicates(true);
    break;
  case 'delete':
    deleteDuplicates(false);
    break;
  default:
    console.log('Usage: node cleanup_ms_tests.js [analyze|delete-dry|delete]');
}
