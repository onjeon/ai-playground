const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/lib/data-th.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Tests to reassign to psychology (behavior, habits, beliefs, personal traits)
const psychologyTests = [
  // Behaviors and habits
  'thai-cleaning-habit', 'thai-sleeping-pattern', 'thai-snacking-habit', 'thai-saving-habit',
  'thai-exercise-habit', 'thai-morning-routine', 'thai-diet-style', 'thai-health-consciousness',
  'thai-phone-addiction', 'thai-subscription-habit', 'thai-impulse-buyer', 'thai-debt-attitude',
  'thai-leftovers-attitude', 'thai-review-writing', 'thai-tip-giving',
  
  // Personality and beliefs
  'thai-ghost-belief', 'thai-karma-belief', 'thai-superstition-level', 'thai-horoscope-belief',
  'thai-color-belief', 'thai-feng-shui', 'thai-lucky-number', 'thai-dream-interpretation',
  'thai-meditation-practice', 'thai-merit-making', 'thai-temple-connection',
  
  // Personal traits
  'thai-morning-night-person', 'thai-minimalist-maximalist', 'thai-home-lover',
  'thai-early-late-eater', 'thai-spicy-tolerance', 'thai-sweet-savory',
  'thai-eco-friendly', 'thai-eco-consumer', 'thai-environmental-action',
  'thai-local-supporter', 'thai-brand-loyalty',
  
  // Student/Work behavior
  'thai-student-type', 'thai-school-experience', 'thai-university-life',
  'thai-communication-preference', 'thai-technology-adoption',
  
  // Media consumption
  'thai-news-consumption', 'thai-news-source', 'thai-podcast-listener',
  'thai-book-reading', 'thai-netflix-binger', 'thai-youtube-watcher'
];

// Tests to reassign to relationship (social, family, community)
const relationshipTests = [
  // Family and traditions
  'thai-family-dinner', 'thai-family-gathering', 'thai-filial-piety', 'thai-elder-respect',
  'thai-funeral-tradition', 'thai-housewarming', 'thai-ordination-ceremony',
  'thai-graduation-celebration', 'thai-birthday-celebration', 'thai-milestone-celebration',
  'thai-charity-giving', 'thai-community-involvement',
  
  // Social activities
  'thai-party-personality', 'thai-karaoke-style', 'thai-concert-goer',
  'thai-drinking-behavior', 'thai-bargaining-skill',
  
  // Social media and communication
  'thai-facebook-behavior', 'thai-instagram-usage', 'thai-line-chat-style',
  'thai-tiktok-personality', 'thai-social-media', 'thai-selfie-style',
  
  // Food social
  'thai-food-delivery', 'thai-grab-food-order', 'thai-restaurant-chooser',
  'thai-home-cooking-vs-eating-out', 'thai-food-photography',
  
  // Travel social
  'thai-travel-buddy', 'thai-travel-photography', 'thai-travel-planning',
  'thai-domestic-travel', 'thai-abroad-travel', 'thai-hotel-booking',
  'thai-souvenir-buying', 'thai-flight-experience'
];

// Update psychology tests
let psychologyCount = 0;
psychologyTests.forEach(testId => {
  const regex = new RegExp(`(id: '${testId}'[\\s\\S]*?categoryId: )'fun'`, 'g');
  const before = content;
  content = content.replace(regex, "$1'psychology'");
  if (content !== before) psychologyCount++;
});

// Update relationship tests
let relationshipCount = 0;
relationshipTests.forEach(testId => {
  const regex = new RegExp(`(id: '${testId}'[\\s\\S]*?categoryId: )'fun'`, 'g');
  const before = content;
  content = content.replace(regex, "$1'relationship'");
  if (content !== before) relationshipCount++;
});

fs.writeFileSync(filePath, content);
console.log('Thai categories updated!');
console.log('Psychology tests reassigned:', psychologyCount);
console.log('Relationship tests reassigned:', relationshipCount);
