const fs = require('fs');
const path = require('path');

function fixCategory(filePath, fromCategory, toCategory, testIds) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let count = 0;
  
  testIds.forEach(testId => {
    // Handle both multi-line and single-line formats
    const multiLineRegex = new RegExp(`(id: '${testId}'[\\s\\S]*?categoryId: )'${fromCategory}'`, 'g');
    const before = content;
    content = content.replace(multiLineRegex, `$1'${toCategory}'`);
    if (content !== before) count++;
  });
  
  fs.writeFileSync(filePath, content);
  return count;
}

// ===== TAIWAN (zh-TW) =====
// Need: psychology (29 -> 60), personality (29 -> 45)
const twFile = path.join(__dirname, 'src/lib/data-zh-TW.ts');

// fun -> psychology (behaviors, habits, mental)
const twFunToPsychology = [
  'night-market-style', 'convenience-store-tw', 'mrt-behavior', 'breakfast-type',
  'drama-watching', 'line-sticker-style', 'scooter-rider-type', 'bubble-tea-order',
  'university-life', 'foodie-level', 'shopping-style-tw', 'sleep-schedule-tw',
  'phone-usage-tw', 'stress-eating-tw', 'procrastination-tw', 'saving-habit-tw',
  'cleaning-habit-tw', 'exercise-routine-tw', 'social-media-tw', 'coffee-addict-tw'
];

// fun -> relationship (social, family, community)
const twFunToRelationship = [
  'ktv-personality', 'temple-visit-style', 'kaohsiung-taipei', 'claw-machine-type',
  'hot-cold-food', 'party-style-tw', 'dating-style-tw', 'friend-type-tw',
  'wedding-guest-tw', 'reunion-type-tw', 'neighbor-relationship-tw'
];

// fun -> personality 
const twFunToPersonality = [
  'taiwanese-politeness', 'introvert-extrovert-tw', 'optimist-pessimist-tw',
  'morning-night-tw', 'leader-follower-tw', 'planner-spontaneous-tw'
];

console.log('=== Taiwan Fixes ===');
console.log('fun -> psychology:', fixCategory(twFile, 'fun', 'psychology', twFunToPsychology));
console.log('fun -> relationship:', fixCategory(twFile, 'fun', 'relationship', twFunToRelationship));
console.log('fun -> personality:', fixCategory(twFile, 'fun', 'personality', twFunToPersonality));

// ===== VIETNAMESE (vi) =====
// Need: relationship (27 -> 55)
const viFile = path.join(__dirname, 'src/lib/data-vi.ts');

// fun -> relationship
const viFunToRelationship = [
  'pho-lover-type', 'banh-mi-style', 'cafe-culture-vn', 'karaoke-vn-style',
  'tet-celebration', 'ao-dai-personality', 'wedding-vn-type', 'family-dinner-vn',
  'ancestor-worship', 'neighborhood-vn', 'street-food-vn', 'night-out-vn',
  'festival-vn-type', 'temple-visit-vn', 'market-shopping-vn'
];

// fun -> psychology (habits, behaviors)  
const viFunToPsychology = [
  'traffic-behavior-vn', 'phone-addiction-vn', 'saving-habit-vn', 'work-ethic-vn',
  'siesta-habit-vn', 'study-style-vn', 'health-consciousness-vn', 'superstition-vn'
];

// personality -> psychology (too many personality tests)
const viPersonalityToPsychology = [
  'stress-response-vn', 'anger-management-vn', 'anxiety-level-vn', 'emotional-control-vn',
  'self-esteem-vn', 'depression-awareness-vn', 'mental-resilience-vn'
];

// personality -> relationship
const viPersonalityToRelationship = [
  'communication-style-vn', 'friendship-type-vn', 'family-role-vn', 'dating-behavior-vn',
  'social-butterfly-vn', 'party-animal-vn', 'neighbor-type-vn'
];

console.log('\n=== Vietnamese Fixes ===');
console.log('fun -> relationship:', fixCategory(viFile, 'fun', 'relationship', viFunToRelationship));
console.log('fun -> psychology:', fixCategory(viFile, 'fun', 'psychology', viFunToPsychology));
console.log('personality -> psychology:', fixCategory(viFile, 'personality', 'psychology', viPersonalityToPsychology));
console.log('personality -> relationship:', fixCategory(viFile, 'personality', 'relationship', viPersonalityToRelationship));

// ===== INDONESIAN (id) =====
// Need: personality 과다(113->45), fun 부족(34->100)
const idFile = path.join(__dirname, 'src/lib/data-id.ts');

// personality -> fun (cultural fun stuff)
const idPersonalityToFun = [
  'nasi-goreng-type', 'indomie-lover-type', 'warung-behavior', 'angkot-experience',
  'ojek-online-type', 'mall-culture-id', 'street-food-id', 'kopi-susu-type',
  'jamu-traditional', 'batik-wearing', 'traditional-food-id', 'market-bargaining',
  'holiday-destination', 'beach-mountain-type', 'island-hopping', 'culinary-tour',
  'night-life-id', 'festival-type-id', 'music-taste-id', 'movie-preference-id',
  'gaming-style-id', 'hobby-type-id', 'weekend-activity-id', 'vacation-style-id',
  'food-delivery-id', 'online-shopping-id', 'social-media-id', 'entertainment-type'
];

// personality -> psychology
const idPersonalityToPsychology = [
  'stress-handling-id', 'anger-expression-id', 'anxiety-type-id', 'self-confidence-id',
  'emotional-intelligence-id', 'mental-strength-id', 'depression-awareness-id',
  'sleep-pattern-id', 'eating-behavior-id', 'phone-addiction-id', 'work-life-balance-id',
  'saving-spending-id', 'health-awareness-id', 'morning-routine-id', 'night-routine-id'
];

// personality -> relationship
const idPersonalityToRelationship = [
  'family-role-id', 'sibling-type-id', 'parenting-style-id', 'friendship-type-id',
  'dating-style-id', 'wedding-guest-id', 'community-involvement-id', 'neighbor-type-id',
  'gotong-royong-type', 'arisan-style', 'reunion-type-id', 'social-gathering-id',
  'lebaran-behavior', 'family-gathering-id'
];

console.log('\n=== Indonesian Fixes ===');
console.log('personality -> fun:', fixCategory(idFile, 'personality', 'fun', idPersonalityToFun));
console.log('personality -> psychology:', fixCategory(idFile, 'personality', 'psychology', idPersonalityToPsychology));
console.log('personality -> relationship:', fixCategory(idFile, 'personality', 'relationship', idPersonalityToRelationship));

console.log('\nAll fixes applied!');
