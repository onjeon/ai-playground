const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/lib/data-ms.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// More psychology tests (lifestyle, kesihatan, kehidupan)
const psychologyTests = [
  'kehidupan-cuti', 'kehidupan-hujan', 'kehidupan-hujung-minggu', 'kehidupan-malam-ms', 'kehidupan-pagi-ms',
  'kesihatan-diet', 'kesihatan-makan', 'kesihatan-mental-ms', 'kesihatan-senaman', 'kesihatan-tidur-ms',
  'lifestyle-morning-routine', 'lifestyle-night-owl', 'lifestyle-reading', 'lifestyle-writing',
  'lifestyle-skincare', 'lifestyle-fitness', 'lifestyle-photography',
  'kewangan-belanja', 'kewangan-hutang', 'kewangan-simpanan', 'kewangan-pelaburan',
  'komunikasi-email-ms', 'komunikasi-meeting-online', 'komunikasi-mesej', 'komunikasi-panggilan', 'komunikasi-whatsapp-ms'
];

// More relationship tests (hubungan, keluarga, social activities)
const relationshipTests = [
  // hubungan tests should be relationship
  'hubungan-attachment-ms', 'hubungan-boundaries-ms', 'hubungan-breakup-ms', 'hubungan-commitment-ms',
  'hubungan-communication-ms', 'hubungan-compatibility-ms', 'hubungan-conflict-ms', 'hubungan-dating-ms',
  'hubungan-flirting-ms', 'hubungan-ideal-partner-ms', 'hubungan-jealous-ms', 'hubungan-ldr-ms',
  'hubungan-love-language-ms', 'hubungan-romantic-ms', 'hubungan-trust-ms',
  
  // keluarga tests
  'keluarga-balik-kampung', 'keluarga-gathering', 'keluarga-kenduri', 'keluarga-siblings',
  
  // social entertainment
  'keseronokan-bermain-game', 'keseronokan-jalan-jalan', 'keseronokan-menari', 
  'keseronokan-menonton-tv', 'keseronokan-menyanyi',
  'lifestyle-coffee-lover', 'lifestyle-tea-lover', 'lifestyle-fashion',
  
  // mamak and kopitiam - social relationship
  'kopitiam-culture', 'mamak-culture',
  
  // shopping (social activity)
  'membeli-belah-1utama', 'membeli-belah-mid-valley', 'membeli-belah-night-market'
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

fs.writeFileSync(filePath, content);
console.log('More Malaysian categories updated!');
console.log('Psychology tests reassigned:', psychologyTests.length);
console.log('Relationship tests reassigned:', relationshipTests.length);
