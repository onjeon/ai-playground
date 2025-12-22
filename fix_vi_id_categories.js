const fs = require('fs');
const path = require('path');

function fixCategory(filePath, fromCategory, toCategory, testIds) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let count = 0;
  
  testIds.forEach(testId => {
    const regex = new RegExp(`(id: '${testId}'[\\s\\S]*?categoryId: )'${fromCategory}'`, 'g');
    const before = content;
    content = content.replace(regex, `$1'${toCategory}'`);
    if (content !== before) count++;
  });
  
  fs.writeFileSync(filePath, content);
  return count;
}

// ===== VIETNAMESE (vi) =====
const viFile = path.join(__dirname, 'src/lib/data-vi.ts');

// fun -> relationship (social, family activities)
const viFunToRelationship = [
  'an-vat-yeu-thich', 'bien-hay-nui', 'bun-hay-pho', 'ca-phe-den', 
  'ca-phe-sua-da', 'ca-phe-trung', 'che-yeu-thich', 'com-tam-hay-com-ga',
  'giao-tiep-ban-be', 'giai-tri-nhac', 'du-lich-da-lat', 'du-lich-da-nang',
  'du-lich-nha-trang', 'du-lich-phu-quoc', 'du-lich-sa-pa'
];

// fun -> psychology (behaviors, habits)
const viFunToPsychology = [
  'ca-phe-van-phong', 'cong-nghe-dien-thoai', 'cong-nghe-internet',
  'cong-nghe-may-tinh', 'cong-nghe-ung-dung', 'cong-nghe-ai',
  'giao-thong-xe-may', 'giao-thong-o-to', 'giao-thong-xe-bus',
  'giao-thong-metro', 'giao-thong-may-bay'
];

// personality -> relationship (too many personality)
const viPersonalityToRelationship = [];

// Get actual personality test IDs
let viContent = fs.readFileSync(viFile, 'utf-8');
const personalityMatches = viContent.match(/id: '([^']+)'[\s\S]*?categoryId: 'personality'/g) || [];
const personalityIds = personalityMatches.map(m => {
  const match = m.match(/id: '([^']+)'/);
  return match ? match[1] : null;
}).filter(Boolean);

console.log('Found personality tests:', personalityIds.length);

// Move some personality to relationship
const personalityToRelationship = personalityIds.slice(0, 15);
// Move some personality to psychology  
const personalityToPsychology = personalityIds.slice(15, 30);

console.log('\n=== Vietnamese Fixes ===');
console.log('fun -> relationship:', fixCategory(viFile, 'fun', 'relationship', viFunToRelationship));
console.log('fun -> psychology:', fixCategory(viFile, 'fun', 'psychology', viFunToPsychology));
console.log('personality -> relationship:', fixCategory(viFile, 'personality', 'relationship', personalityToRelationship));
console.log('personality -> psychology:', fixCategory(viFile, 'personality', 'psychology', personalityToPsychology));

// ===== INDONESIAN (id) =====
const idFile = path.join(__dirname, 'src/lib/data-id.ts');

// Get actual personality test IDs for Indonesian
let idContent = fs.readFileSync(idFile, 'utf-8');
const idPersonalityMatches = idContent.match(/id: '([^']+)'[\s\S]*?categoryId: 'personality'/g) || [];
const idPersonalityIds = idPersonalityMatches.map(m => {
  const match = m.match(/id: '([^']+)'/);
  return match ? match[1] : null;
}).filter(Boolean);

console.log('\nFound Indonesian personality tests:', idPersonalityIds.length);

// Move first 40 personality to fun
const idPersonalityToFun = idPersonalityIds.slice(0, 40);
// Move next 15 to psychology
const idPersonalityToPsychology = idPersonalityIds.slice(40, 55);
// Move next 10 to relationship
const idPersonalityToRelationship = idPersonalityIds.slice(55, 65);

console.log('\n=== Indonesian Fixes ===');
console.log('personality -> fun:', fixCategory(idFile, 'personality', 'fun', idPersonalityToFun));
console.log('personality -> psychology:', fixCategory(idFile, 'personality', 'psychology', idPersonalityToPsychology));
console.log('personality -> relationship:', fixCategory(idFile, 'personality', 'relationship', idPersonalityToRelationship));

console.log('\nAll fixes applied!');
