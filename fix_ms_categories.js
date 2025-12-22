const fs = require('fs');
const path = require('path');

// Read the data file
const filePath = path.join(__dirname, 'src/lib/data-ms.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Tests that should be reassigned to psychology (currently fun)
const psychologyTests = [
  // Budaya (culture) - these relate to psychology
  'budaya-adat-ms', 'budaya-bahasa-ms', 'budaya-balik-kampung-ms', 'budaya-berbudi-ms',
  'budaya-gotong-royong-ms', 'budaya-hormat-ms', 'budaya-malu-ms', 'budaya-murah-hati-ms',
  'budaya-patriotik-ms', 'budaya-ramah-ms', 'budaya-sopan-ms', 'budaya-toleransi-ms',
  'budaya-tolong-menolong-ms',
  
  // Learning/Study behaviors - psychology related
  'belajar-exam', 'belajar-library', 'belajar-online-course', 'belajar-presentation', 'belajar-study-group',
  
  // Keluarga (family) psychology
  'keluarga-adik-beradik', 'keluarga-anak-sulung', 'keluarga-anak-tengah', 'keluarga-anak-bongsu',
  'keluarga-ibu-bapa', 'keluarga-nenek-datuk', 'keluarga-role', 'keluarga-reunion',
  
  // Hobi (hobbies) - can reflect psychology
  'hobi-berkebun', 'hobi-fotografi-ms', 'hobi-hiking', 'hobi-koleksi',
  'hobi-melukis', 'hobi-memancing', 'hobi-memasak', 'hobi-memasak-ms',
  'hobi-membaca-ms', 'hobi-menari', 'hobi-menyanyi',
  
  // Sosial (social) psychology
  'sosial-drama-ms', 'sosial-facebook-ms', 'sosial-gossip-ms', 'sosial-instagram-ms',
  'sosial-jiran-ms', 'sosial-tiktok-ms', 'sosial-whatsapp-ms', 'sosial-youtube-ms',
  
  // Emosi (emotion) psychology
  'emosi-garang-ms', 'emosi-manja-ms', 'emosi-marah-ms', 'emosi-stress-ms', 'emosi-takut-ms',
  
  // Komunikasi
  'komunikasi-chat-ms', 'komunikasi-call-ms', 'komunikasi-text-ms',
  
  // Personaliti related
  'jiran-ms'
];

// Tests that should be reassigned to relationship (currently fun)
const relationshipTests = [
  // Budaya related to relationships
  'budaya-kenduri-ms', 'budaya-wedding-ms', 'budaya-open-house-ms',
  'budaya-cny-ms', 'budaya-deepavali-ms', 'budaya-raya-ms', 'budaya-makan-ms',
  
  // Humor/Social relationship
  'jenaka-gelak', 'jenaka-lawak', 'jenaka-meme-ms', 'jenaka-pantun', 'jenaka-sindir',
  
  // Hiburan (entertainment) - social/relationship
  'hiburan-arcade', 'hiburan-bandar-malaysia', 'hiburan-concert-ms', 'hiburan-drama-melayu',
  'hiburan-festival-ms', 'hiburan-festival-musik', 'hiburan-filem-malaysia', 'hiburan-gerai',
  'hiburan-karaoke-bar', 'hiburan-lagu-melayu', 'hiburan-nasyid', 'hiburan-pelancongan-ms',
  'hiburan-rock-kapak', 'hiburan-theme-park', 'hiburan-variety-show',
  
  // Food/Drinks (social)
  'hiburan-buah-tempatan', 'hiburan-kuih', 'hiburan-makanan-malaysia', 'hiburan-minuman-ms',
  
  // Fesyen (fashion - social)
  'fesyen-baju-kerja', 'fesyen-baju-raya', 'fesyen-casual', 'fesyen-kasut', 'fesyen-tudung',
  
  // Travel/Social
  'cuaca-panas-malaysia', 'jam-teruk-kl'
];

// Update psychology tests
psychologyTests.forEach(testId => {
  const regex = new RegExp(`(id: '${testId}'[\\s\\S]*?categoryId: )'fun'`, 'g');
  content = content.replace(regex, "$1'psychology'");
  
  const tagRegex = new RegExp(`(id: '${testId}'[\\s\\S]*?tags: \\[')'fun'`, 'g');
  content = content.replace(tagRegex, "$1'psychology'");
});

// Update relationship tests
relationshipTests.forEach(testId => {
  const regex = new RegExp(`(id: '${testId}'[\\s\\S]*?categoryId: )'fun'`, 'g');
  content = content.replace(regex, "$1'relationship'");
  
  const tagRegex = new RegExp(`(id: '${testId}'[\\s\\S]*?tags: \\[')'fun'`, 'g');
  content = content.replace(tagRegex, "$1'relationship'");
});

// Write back
fs.writeFileSync(filePath, content);

console.log('Malaysian categories updated!');
console.log('Psychology tests reassigned:', psychologyTests.length);
console.log('Relationship tests reassigned:', relationshipTests.length);
