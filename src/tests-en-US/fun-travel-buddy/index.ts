// What Kind of Travel Buddy Are You?
// Find out your travel personality and who you should (or shouldn't) travel with!

import { TestData } from '@/types';

const testData: TestData = {
  id: 'fun-travel-buddy',
  title: 'What Kind of Travel Buddy Are You?',
  description: 'Discover your travel style and whether your friends should invite you on trips!',
  category: 'fun',
  emoji: '✈️',
  color: 'from-sky-500 to-blue-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'It\'s trip planning time. You\'re the one who:',
      options: [
        { text: 'Creates a detailed itinerary with reservations', type: 'A' },
        { text: 'Suggests we just go with the flow', type: 'B' },
        { text: 'Researches the best photo spots and restaurants', type: 'C' },
        { text: 'Just agrees to whatever everyone else wants', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your packing style:',
      options: [
        { text: 'Checklist, packing cubes, everything planned', type: 'A' },
        { text: 'Throw stuff in last minute - we\'ll figure it out', type: 'B' },
        { text: 'Outfit planning for every photo opportunity', type: 'C' },
        { text: 'Pack light and buy what I need there', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'The flight is delayed 3 hours. You:',
      options: [
        { text: 'Already adjusting the itinerary for the delay', type: 'A' },
        { text: 'No worries! Airport bar time!', type: 'B' },
        { text: 'Taking airport aesthetic photos for the journey', type: 'C' },
        { text: 'Napping until someone wakes me for boarding', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'When it comes to activities:',
      options: [
        { text: 'We need to see ALL the main attractions', type: 'A' },
        { text: 'Let\'s just wander and see what happens', type: 'B' },
        { text: 'The hidden gems and Instagrammable spots', type: 'C' },
        { text: 'Whatever the group decides is fine with me', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your approach to vacation eating:',
      options: [
        { text: 'I\'ve researched the best restaurants and made reservations', type: 'A' },
        { text: 'Let\'s find random local spots!', type: 'B' },
        { text: 'Trendy cafes and aesthetic brunch spots', type: 'C' },
        { text: 'I\'m easy - whatever everyone else wants', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Group disagreement on what to do today. You:',
      options: [
        { text: 'Pull out the schedule to remind everyone of the plan', type: 'A' },
        { text: 'Suggest we split up and meet later', type: 'B' },
        { text: 'Advocate for the activity with best photo ops', type: 'C' },
        { text: 'Go with whoever needs company', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your vacation budget approach:',
      options: [
        { text: 'Spreadsheet tracking every expense', type: 'A' },
        { text: 'I\'ll worry about money when I get home', type: 'B' },
        { text: 'Will splurge on experiences worth remembering', type: 'C' },
        { text: 'Split everything evenly, it\'ll work out', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Wake-up time on vacation:',
      options: [
        { text: 'Early! We have so much to see!', type: 'A' },
        { text: 'Whenever I naturally wake up', type: 'B' },
        { text: 'Golden hour waits for no one', type: 'C' },
        { text: 'Whatever time everyone else gets up', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Something goes wrong (missed bus, closed attraction). You:',
      options: [
        { text: 'Slightly stressed but already have backup plans', type: 'A' },
        { text: 'Adventure! This will be a great story later', type: 'B' },
        { text: 'Document the chaos for content', type: 'C' },
        { text: 'Just roll with it, things happen', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Post-trip, you\'re the friend who:',
      options: [
        { text: 'Sends everyone the organized photo album and expense split', type: 'A' },
        { text: 'Still talking about that random adventure', type: 'B' },
        { text: 'Posting aesthetically for the next month', type: 'C' },
        { text: 'Just happy we all had fun together', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Planner',
      emoji: '📋',
      description: 'You\'re the friend everyone NEEDS on a trip but might find slightly stressful. Every reservation is made, every attraction researched, every minute scheduled. Thanks to you, no one misses anything - but they might need a vacation from the vacation.',
      traits: ['Organized', 'Reliable', 'Type-A', 'Detail-oriented'],
      strengths: ['Nothing gets missed', 'No wasted time', 'Reservations secured', 'Group herder'],
      weaknesses: ['Rigid', 'Stressed when plans change', 'Might exhaust everyone'],
      tips: ['Build in free time', 'Unexpected moments are memories too', 'Let go a little'],
    },
    B: {
      type: 'B',
      title: 'The Free Spirit',
      emoji: '🦋',
      description: 'Itinerary? Never heard of her. You\'re about the VIBES and the spontaneous adventures. You\'ll find the random local bar, make friends with strangers, and have stories no one planned for. Planners might stress traveling with you, though.',
      traits: ['Spontaneous', 'Adventurous', 'Flexible', 'Fun'],
      strengths: ['Best stories', 'Goes with the flow', 'Finds hidden gems', 'Low stress'],
      weaknesses: ['Might miss key attractions', 'Frustrates planners', 'Sometimes no plan IS a problem'],
      tips: ['Some planning is okay', 'Popular things need reservations', 'Meet the planners halfway'],
    },
    C: {
      type: 'C',
      title: 'The Content Creator',
      emoji: '📸',
      description: 'If it\'s not on Instagram, did it even happen? You\'ve researched every aesthetic cafe, sunrise spot, and hidden photo location. Your feed will be FIRE, but your friends might be tired of holding your camera.',
      traits: ['Aesthetic-focused', 'Trend-aware', 'Creative', 'Documenter'],
      strengths: ['Amazing photos', 'Finds beautiful spots', 'Captures memories', 'Great taste'],
      weaknesses: ['Too focused on content', 'Friends become photographers', 'Might miss the moment'],
      tips: ['Put the phone down sometimes', 'Live in the moment too', 'Not everything needs to be posted'],
    },
    D: {
      type: 'D',
      title: 'The Easy-Going One',
      emoji: '😊',
      description: 'You\'re just happy to be there! No strong opinions, no stress, no drama. You\'re the perfect companion because you\'ll do anything. The downside? You might not advocate for what you actually want.',
      traits: ['Flexible', 'Agreeable', 'Low-maintenance', 'Chill'],
      strengths: ['No conflict', 'Easy to travel with', 'Goes with everything', 'Peaceful energy'],
      weaknesses: ['Might be a doormat', 'Doesn\'t voice preferences', 'Could secretly resent plans'],
      tips: ['Your opinions matter too', 'Speak up for what you want', 'It\'s okay to have preferences'],
    },
  },
};

export default testData;
