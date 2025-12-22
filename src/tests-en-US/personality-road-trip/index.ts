// Your Road Trip Personality
// Highway adventures and gas station snacks

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-road-trip',
  title: 'What\'s Your Road Trip Personality?',
  description: 'Windows down, playlist on, snacks ready. Find out what kind of road tripper you really are!',
  category: 'personality',
  emoji: '🚗',
  color: 'from-blue-500 to-cyan-600',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'Your ideal role in the car is:',
      options: [
        { text: 'Driver - I need to be in control', type: 'A' },
        { text: 'DJ - the playlist is sacred', type: 'B' },
        { text: 'Navigator - I\'ve got the map and snacks', type: 'C' },
        { text: 'Backseat viber - napping and chilling', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Gas station stop means:',
      options: [
        { text: 'Quick bathroom break, back on schedule', type: 'A' },
        { text: 'Time to curate the perfect snack selection', type: 'B' },
        { text: 'Stretch legs, check the map, grab road trip essentials', type: 'C' },
        { text: 'Full shopping spree - hot dog, slushie, weird local snacks', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your road trip playlist is:',
      options: [
        { text: 'Podcasts and audiobooks - productive driving time', type: 'A' },
        { text: 'Meticulously curated for every mood and mile', type: 'B' },
        { text: 'A mix of everyone\'s favorites - democracy rules', type: 'C' },
        { text: 'Vibes only - we\'re singing at full volume', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'There\'s a quirky roadside attraction (World\'s Biggest Ball of Yarn). You:',
      options: [
        { text: 'We\'re making good time - can\'t stop now', type: 'A' },
        { text: 'Quick photo for the aesthetic, then back on the road', type: 'B' },
        { text: 'This is what road trips are about! Let\'s explore', type: 'C' },
        { text: 'Already pulling over and buying a souvenir', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your road trip snack game is:',
      options: [
        { text: 'Healthy options packed from home', type: 'A' },
        { text: 'A perfectly balanced mix of sweet and salty', type: 'B' },
        { text: 'Whatever catches my eye at the gas station', type: 'C' },
        { text: 'Chaos - trail mix, candy, chips, beef jerky, all of it', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'The GPS says there\'s traffic ahead. You:',
      options: [
        { text: 'Already checking alternate routes before it\'s a problem', type: 'A' },
        { text: 'Frustrated but trust the GPS to reroute', type: 'B' },
        { text: 'Take the scenic detour - might find something cool', type: 'C' },
        { text: 'Traffic means more time for car karaoke!', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your ideal road trip destination is:',
      options: [
        { text: 'A planned destination with reservations made', type: 'A' },
        { text: 'Somewhere photogenic - beaches, mountains, or both', type: 'B' },
        { text: 'Wherever the road takes us - flexible itinerary', type: 'C' },
        { text: 'The journey IS the destination!', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Someone needs a bathroom break. Again. Your reaction:',
      options: [
        { text: 'Internally screaming but pulling over', type: 'A' },
        { text: 'Fine, but we\'re not stopping at every exit', type: 'B' },
        { text: 'No worries - I could stretch my legs too', type: 'C' },
        { text: 'Yes! Another chance to explore a random gas station', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your road trip photos are mostly:',
      options: [
        { text: 'Photos? I\'m focused on driving', type: 'A' },
        { text: 'Curated shots of the scenery and aesthetic moments', type: 'B' },
        { text: 'A mix of everything - landscapes, people, random signs', type: 'C' },
        { text: 'Chaotic - blurry selfies, feet on dashboard, weird food pics', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'After a long drive, you\'re feeling:',
      options: [
        { text: 'Accomplished - we made great time', type: 'A' },
        { text: 'Content - good vibes, good memories', type: 'B' },
        { text: 'Happy - the journey was as good as the destination', type: 'C' },
        { text: 'Already planning the next road trip', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Efficiency Expert',
      emoji: '⏱️',
      description: 'Time is miles, and miles are everything. You\'ve got a schedule to keep, and "making good time" is your love language. Bathroom breaks are strategic, and detours are emergencies only. Your friends rely on you to get there safely and on time.',
      traits: ['Organized', 'Punctual', 'Reliable', 'Goal-oriented'],
      strengths: ['Always arrives on schedule', 'Great at planning logistics', 'Keeps the trip on track', 'Responsible driver'],
      weaknesses: ['May miss spontaneous fun', 'Can stress others out', 'Needs to relax sometimes'],
      tips: ['Try one unplanned stop per trip', 'The journey matters too', 'Let someone else drive occasionally'],
    },
    B: {
      type: 'B',
      title: 'The Aesthetic Cruiser',
      emoji: '📸',
      description: 'You\'ve got the perfect playlist, the cutest car snacks, and golden hour is your copilot. Every trip is an opportunity for content and memories. Your road trip aesthetic is immaculate, and your Spotify wrapped shows it.',
      traits: ['Creative', 'Detail-oriented', 'Mood-conscious', 'Instagram-ready'],
      strengths: ['Creates amazing memories', 'Great taste in music', 'Sets the perfect vibe', 'Captures beautiful moments'],
      weaknesses: ['Might prioritize photos over experience', 'Playlist control is non-negotiable', 'Sometimes too focused on aesthetics'],
      tips: ['Put the phone down sometimes', 'Let others pick some music', 'Imperfect moments are memories too'],
    },
    C: {
      type: 'C',
      title: 'The Adventure Seeker',
      emoji: '🗺️',
      description: 'The best parts of road trips are the unexpected ones. You\'re down for detours, weird attractions, and whatever interesting thing is off the beaten path. Flexible, curious, and always ready for the next discovery.',
      traits: ['Spontaneous', 'Curious', 'Flexible', 'Open-minded'],
      strengths: ['Finds hidden gems', 'Makes trips memorable', 'Goes with the flow', 'Great travel companion'],
      weaknesses: ['Sometimes loses track of time', 'May not always have a plan B', 'Can be indecisive'],
      tips: ['Balance spontaneity with some structure', 'Download offline maps', 'Your vibe is contagious'],
    },
    D: {
      type: 'D',
      title: 'The Chaotic Road Warrior',
      emoji: '🎉',
      description: 'Road trips with you are legendary. Car karaoke hits different, snack game is unmatched, and every gas station is an adventure. You\'re the energy the car needs, and honestly, you make memories people never forget.',
      traits: ['Enthusiastic', 'Fun-loving', 'Spontaneous', 'Energetic'],
      strengths: ['Life of the road trip', 'Makes everything fun', 'Unmatched energy', 'Creates unforgettable moments'],
      weaknesses: ['May forget practical things', 'Sugar crash incoming', 'Navigation is not your strength'],
      tips: ['Maybe let someone else handle logistics', 'Hydrate between slushies', 'Your energy is a gift'],
    },
  },
};

export default testData;
