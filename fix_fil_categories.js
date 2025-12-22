const fs = require('fs');
const path = require('path');

// Read the data file
const filePath = path.join(__dirname, 'src/lib/data-fil.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Target distribution (based on Korean reference)
// fun: 107 (35%), psychology: 61 (20%), relationship: 57 (19%), personality: 43 (14%), career: 34 (11%), iq: 10 (3%)
// For 300 tests: fun: 100, psychology: 60, relationship: 55, personality: 45, career: 30, iq: 10

// Tests that should be reassigned to psychology (currently fun)
const psychologyTests = [
  'pamilya-achiever', 'pamilya-black-sheep', 'pamilya-breadwinner', 'pamilya-bunso',
  'pamilya-comedian', 'pamilya-favorite', 'pamilya-gitnang-anak', 'pamilya-golden-child',
  'pamilya-kapatid', 'pamilya-lola-lolo', 'pamilya-lolo-lola', 'pamilya-magulang',
  'pamilya-mediator', 'pamilya-only-child', 'pamilya-pabigat', 'pamilya-panganay',
  'pamilya-rebel', 'pamilya-role', 'pamilya-tita-tito', 'pamilya-tito-tita',
  'hiya-culture', 'bayanihan-spirit', 'pakikisama', 'lambing-level',
  'diskarte-pinoy', 'diskarte-sa-buhay', 'filipino-time',
  'communication-call', 'communication-chat', 'communication-text',
  'estudyante-barkada', 'estudyante-exam', 'estudyante-org', 'estudyante-review', 'estudyante-thesis',
  'lifestyle-gabi', 'lifestyle-tamad-umaga', 'lifestyle-umaga',
  'social-drama', 'social-networking', 'social-party',
  'student-attendance', 'student-group-project', 'student-notes',
  'pera-gastador', 'pera-savings', 'pera-utang',
  'hobbies-exercise', 'hobbies-gaming', 'hobbies-reading'
];

// Tests that should be reassigned to relationship (currently fun)
const relationshipTests = [
  'ligaw-harana', 'ligaw-modern', 'ligaw-online-ph', 'ligaw-torpe', 'ligaw-traditional',
  'relationship-clingy', 'relationship-jealous', 'relationship-sweet', 'relationship-tampo',
  'kultura-bisita', 'kultura-fiesta-role', 'kultura-mano', 'kultura-mano-po',
  'kultura-pakikisama', 'kultura-pasalubong', 'kultura-salu-salo', 'kultura-utang-na-loob',
  'panlipunan-funeral', 'panlipunan-wedding', 'panlipunan-reunion',
  'pamahiin-kasal',
  'humor-memes', 'humor-pinoy', 'humor-puns',
  'social-facebook-ph', 'social-instagram-ph', 'social-tiktok-ph', 'social-twitter-ph', 'social-youtube-ph',
  'music-hugot', 'music-karaoke', 'music-opm',
  'panlipunan-bar', 'panlipunan-beach', 'panlipunan-church', 'panlipunan-cinema',
  'panlipunan-coffee-shop', 'panlipunan-concert', 'panlipunan-gym', 'panlipunan-mall',
  'panlipunan-mountain', 'panlipunan-party', 'panlipunan-resort', 'panlipunan-restaurant'
];

// Update psychology tests
psychologyTests.forEach(testId => {
  // Match the test entry and change its category
  const regex = new RegExp(`(id: '${testId}'[\\s\\S]*?categoryId: )'fun'`, 'g');
  content = content.replace(regex, "$1'psychology'");
  
  // Also update tags
  const tagRegex = new RegExp(`(id: '${testId}'[\\s\\S]*?tags: \\[')'fun'`, 'g');
  content = content.replace(tagRegex, "$1'psychology'");
  
  // Also update description
  const descRegex = new RegExp(`(id: '${testId}'[\\s\\S]*?description: ')Masayang test tungkol sa`, 'g');
  content = content.replace(descRegex, "$1Alamin ang iyong sikolohiya sa");
});

// Update relationship tests
relationshipTests.forEach(testId => {
  const regex = new RegExp(`(id: '${testId}'[\\s\\S]*?categoryId: )'fun'`, 'g');
  content = content.replace(regex, "$1'relationship'");
  
  // Also update tags
  const tagRegex = new RegExp(`(id: '${testId}'[\\s\\S]*?tags: \\[')'fun'`, 'g');
  content = content.replace(tagRegex, "$1'relationship'");
  
  // Also update description
  const descRegex = new RegExp(`(id: '${testId}'[\\s\\S]*?description: ')Masayang test tungkol sa`, 'g');
  content = content.replace(descRegex, "$1Alamin ang iyong relasyon sa");
});

// Write back
fs.writeFileSync(filePath, content);

console.log('Filipino categories updated!');
console.log('Psychology tests reassigned:', psychologyTests.length);
console.log('Relationship tests reassigned:', relationshipTests.length);
