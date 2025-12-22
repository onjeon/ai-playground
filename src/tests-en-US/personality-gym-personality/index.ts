// Your Gym Personality Type
// What happens when you hit the gym

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-gym-personality',
  title: 'What\'s Your Gym Personality Type?',
  description: 'From cardio enthusiast to weights-only warrior - discover what your workout style says about you!',
  category: 'personality',
  emoji: '💪',
  color: 'from-red-500 to-orange-600',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'You walk into the gym. Your first move is:',
      options: [
        { text: 'Straight to my planned workout - no time to waste', type: 'A' },
        { text: 'Quick warm-up then whatever feels right', type: 'B' },
        { text: 'Scope out the scene, find the best equipment', type: 'C' },
        { text: 'Cardio machine while I figure out what to do', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your gym playlist situation:',
      options: [
        { text: 'Curated for maximum performance - every song has BPM purpose', type: 'A' },
        { text: 'A mix of favorites that keeps me motivated', type: 'B' },
        { text: 'Whatever podcast or audiobook I\'m into', type: 'C' },
        { text: 'I use the gym\'s music - it\'s fine', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'How do you track your workouts?',
      options: [
        { text: 'Detailed app with sets, reps, progressive overload tracking', type: 'A' },
        { text: 'Notes on my phone or mental tracking', type: 'B' },
        { text: 'I just go by how I feel that day', type: 'C' },
        { text: 'Track? I just try to break a sweat', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your gym outfit is:',
      options: [
        { text: 'Functional and performance-focused', type: 'A' },
        { text: 'Cute but practical - I want to look good', type: 'B' },
        { text: 'Whatever\'s clean and comfortable', type: 'C' },
        { text: 'I have one gym outfit and it\'s seen better days', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Someone asks to work in on your equipment. You:',
      options: [
        { text: '"Sure, I have 3 sets left, 90 second rests"', type: 'A' },
        { text: '"Of course!" - gym community vibes', type: 'B' },
        { text: 'Internally annoyed but say yes politely', type: 'C' },
        { text: '"I was just finishing anyway"', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your relationship with the mirror at the gym:',
      options: [
        { text: 'Form check only - it\'s a tool', type: 'A' },
        { text: 'Occasional glance - checking progress', type: 'B' },
        { text: 'Admiring the pump between sets', type: 'C' },
        { text: 'Avoiding eye contact with myself', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'How early do you arrive for your ideal equipment?',
      options: [
        { text: 'I know the exact times to avoid crowds', type: 'A' },
        { text: 'I go when I can and adapt my workout', type: 'B' },
        { text: 'Whenever works - I\'ll make it work', type: 'C' },
        { text: 'I avoid peak hours because anxiety', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your gym nutrition approach:',
      options: [
        { text: 'Pre-workout, protein timing, macros tracked', type: 'A' },
        { text: 'Try to eat well and have protein after', type: 'B' },
        { text: 'I eat when I\'m hungry, workout when I can', type: 'C' },
        { text: 'I reward myself with food after working out', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Post-gym selfie situation:',
      options: [
        { text: 'For progress tracking only', type: 'A' },
        { text: 'Occasional when the pump is good', type: 'B' },
        { text: 'Regular content - gotta document the journey', type: 'C' },
        { text: 'Never - I look too sweaty and tired', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Skipping the gym makes you feel:',
      options: [
        { text: 'Anxious - it throws off my whole schedule', type: 'A' },
        { text: 'A little guilty but rest days are needed', type: 'B' },
        { text: 'Fine - I\'ll go tomorrow probably', type: 'C' },
        { text: 'Relieved honestly', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Dedicated Athlete',
      emoji: '🏋️',
      description: 'You take your workouts seriously. Progressive overload, rest days, nutrition timing - you\'ve got a system and it works. The gym isn\'t a hobby, it\'s a lifestyle. Your gains are earned through discipline and dedication.',
      traits: ['Disciplined', 'Goal-oriented', 'Systematic', 'Committed'],
      strengths: ['Consistent progress', 'Great form', 'Excellent fitness knowledge', 'Never misses a workout'],
      weaknesses: ['Can be too rigid', 'Rest days feel wrong', 'Might intimidate beginners'],
      tips: ['Rest is part of the process', 'Flexibility helps long-term', 'Your discipline is impressive'],
    },
    B: {
      type: 'B',
      title: 'The Balanced Gym-Goer',
      emoji: '⚡',
      description: 'You\'ve found the sweet spot - consistent enough to see progress, flexible enough to enjoy life. The gym is part of your routine but doesn\'t consume your identity. This is sustainable fitness goals.',
      traits: ['Balanced', 'Consistent', 'Adaptable', 'Health-focused'],
      strengths: ['Sustainable routine', 'Good fitness level', 'Enjoys working out', 'Balanced lifestyle'],
      weaknesses: ['Progress might be slower', 'Could push harder sometimes', 'May plateau'],
      tips: ['Your approach is sustainable', 'Consider setting specific goals', 'Enjoy the journey'],
    },
    C: {
      type: 'C',
      title: 'The Social Gym Member',
      emoji: '🤝',
      description: 'The gym is as much about the vibes as the workout. You\'re there for fitness but also for the energy, the people, and the feeling of being active. Your workout is flexible and your attitude is positive.',
      traits: ['Social', 'Flexible', 'Positive', 'Community-oriented'],
      strengths: ['Enjoys the gym experience', 'Great gym buddy', 'Adapts to any situation', 'Makes working out fun'],
      weaknesses: ['Workouts may lack structure', 'Progress can be inconsistent', 'May get distracted'],
      tips: ['Try adding some structure', 'Goals can help motivation', 'Your energy is contagious'],
    },
    D: {
      type: 'D',
      title: 'The Reluctant Exerciser',
      emoji: '😅',
      description: 'You go to the gym, and honestly, that\'s a win. You\'re not in love with working out but you show up. Whether it\'s health reasons or general guilt, you\'re doing more than most people on their couch.',
      traits: ['Realistic', 'Honest', 'Persevering', 'Humble'],
      strengths: ['Shows up despite not wanting to', 'Honest with yourself', 'Does it anyway', 'No ego involved'],
      weaknesses: ['Motivation struggles', 'May not push hard', 'Could skip easily'],
      tips: ['Find what you actually enjoy', 'Classes might help motivation', 'Showing up IS the hard part'],
    },
  },
};

export default testData;
