// Your Road Trip Style
// How do you travel the open road?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-road-trip-style',
  title: 'What\'s Your Road Trip Personality?',
  description: 'Discover if you\'re the planner, the DJ, the snack master, or the spontaneous adventurer on road trips.',
  category: 'personality',
  emoji: '🚗',
  color: 'from-sky-500 to-blue-600',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'You\'re planning a road trip. Your first step is:',
      options: [
        { text: 'Create a detailed itinerary with all stops mapped out', type: 'A' },
        { text: 'Make a killer playlist for the drive', type: 'B' },
        { text: 'Research the best food spots along the way', type: 'C' },
        { text: 'Just pick a direction and go!', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your role in the car is usually:',
      options: [
        { text: 'The navigator - I know exactly where we\'re going', type: 'A' },
        { text: 'The entertainer - music, games, conversation', type: 'B' },
        { text: 'The comfort captain - snacks, pillows, vibes', type: 'C' },
        { text: 'The one saying "let\'s take this random exit!"', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'You see a sign for "World\'s Largest Ball of Yarn - 2 miles." You:',
      options: [
        { text: 'Check if it fits the schedule, probably skip it', type: 'A' },
        { text: 'Take a quick photo for social media', type: 'B' },
        { text: 'Stop if everyone else wants to', type: 'C' },
        { text: 'OBVIOUSLY we\'re going! This is why we road trip!', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your road trip snack game is:',
      options: [
        { text: 'Pre-portioned healthy options I packed beforehand', type: 'A' },
        { text: 'Whatever the coolest gas station has', type: 'B' },
        { text: 'I brought everyone\'s favorites - I\'m prepared', type: 'C' },
        { text: 'Gas station hot dog and mystery snacks', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'The GPS says there\'s traffic ahead. You:',
      options: [
        { text: 'Already have an alternate route planned', type: 'A' },
        { text: 'Time for a car karaoke session!', type: 'B' },
        { text: 'Suggest we stop somewhere until it clears', type: 'C' },
        { text: 'Perfect excuse to explore back roads', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'When it comes to hotel bookings:',
      options: [
        { text: 'Reserved months in advance with confirmation emails printed', type: 'A' },
        { text: 'Booked something cute I saw on Instagram', type: 'B' },
        { text: 'Found a comfortable, well-reviewed place', type: 'C' },
        { text: 'We\'ll figure it out when we get there', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your ideal road trip length is:',
      options: [
        { text: 'Exactly as long as the itinerary allows', type: 'A' },
        { text: 'Long enough to visit all the cool spots', type: 'B' },
        { text: 'Whatever feels comfortable for everyone', type: 'C' },
        { text: 'Open-ended - why put a limit on adventure?', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'You\'re in charge of music. The aux cord plays:',
      options: [
        { text: 'A carefully curated road trip playlist', type: 'A' },
        { text: 'Top 40 hits and singalong classics', type: 'B' },
        { text: 'A mix of everyone\'s favorites', type: 'C' },
        { text: 'Whatever mood strikes - could be anything', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'The car breaks down in a small town. Your reaction:',
      options: [
        { text: 'Call AAA and the rental company - I have all the numbers', type: 'A' },
        { text: 'Document the adventure for the story later', type: 'B' },
        { text: 'Find a cozy spot to wait and make the best of it', type: 'C' },
        { text: 'This is the BEST part of the trip! Local experience!', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'At the end of the trip, you:',
      options: [
        { text: 'Feel satisfied that everything went according to plan', type: 'A' },
        { text: 'Can\'t wait to post all the photos and videos', type: 'B' },
        { text: 'Are happy everyone had a good time', type: 'C' },
        { text: 'Already planning the next spontaneous adventure', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Master Planner',
      emoji: '🗺️',
      description: 'You\'re the reason road trips actually happen! Your organizational skills ensure nothing is forgotten, every reservation is made, and the trip runs smoothly. You find joy in the planning process itself.',
      traits: ['Organized', 'Reliable', 'Detail-oriented', 'Prepared'],
      strengths: ['Nothing gets forgotten', 'Efficient use of time', 'Stress-free travel', 'Great backup plans'],
      weaknesses: ['May miss spontaneous moments', 'Can be rigid', 'Stress when plans change'],
      tips: ['Leave buffer time for surprises', 'Let go of one planned thing', 'The best memories are often unplanned'],
    },
    B: {
      type: 'B',
      title: 'The Vibe Curator',
      emoji: '🎵',
      description: 'You turn every drive into an experience! Whether it\'s the perfect playlist, the best photo ops, or keeping energy high, you make sure the journey is just as memorable as the destination.',
      traits: ['Creative', 'Energetic', 'Social', 'Fun-loving'],
      strengths: ['Great atmosphere creator', 'Keeps everyone entertained', 'Makes memories', 'Brings the fun'],
      weaknesses: ['May prioritize aesthetics over practicality', 'Phone battery always dying', 'Can get distracted'],
      tips: ['Enjoy moments without documenting them', 'Bring a portable charger', 'Sometimes silence is nice too'],
    },
    C: {
      type: 'C',
      title: 'The Comfort Captain',
      emoji: '🧸',
      description: 'You\'re the heart of the road trip! You make sure everyone is fed, comfortable, and happy. You\'re adaptable and always thinking about others\' needs before your own.',
      traits: ['Caring', 'Thoughtful', 'Adaptable', 'Nurturing'],
      strengths: ['Everyone feels taken care of', 'Prevents hangry situations', 'Keeps peace in the car', 'Always prepared'],
      weaknesses: ['May neglect your own preferences', 'Can be too accommodating', 'Sometimes forgets what YOU want'],
      tips: ['Speak up about what you want to see', 'Let others take care of you sometimes', 'Your opinion matters too'],
    },
    D: {
      type: 'D',
      title: 'The Spontaneous Spirit',
      emoji: '🌟',
      description: 'Adventure is your middle name! You believe the best experiences come from saying yes to the unexpected. You turn detours into destinations and mishaps into memories.',
      traits: ['Adventurous', 'Flexible', 'Optimistic', 'Free-spirited'],
      strengths: ['Embraces the unexpected', 'Creates unique experiences', 'Never boring', 'Positive attitude'],
      weaknesses: ['May cause stress for planners', 'Can be unreliable', 'Sometimes impractical'],
      tips: ['A little planning can enhance spontaneity', 'Respect others\' comfort zones', 'Have a backup plan occasionally'],
    },
  },
};

export default testData;
