// How Much Do You Overthink?
// Discover your overthinking level

import { TestData } from '@/types';

const testData: TestData = {
  id: 'psychology-overthinking',
  title: 'How Much Do You Overthink?',
  description: 'Find out if your brain has an off switch or if it\'s running 24/7 on maximum analysis mode.',
  category: 'psychology',
  emoji: '🧠',
  color: 'from-purple-400 to-indigo-500',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'Someone sends you a text that just says "hey can we talk":',
      options: [
        { text: 'Reply and see what\'s up', type: 'A' },
        { text: 'Wonder briefly what it\'s about', type: 'B' },
        { text: 'Start mentally preparing for every scenario', type: 'C' },
        { text: 'Full panic - what did I do wrong?!', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'After making a decision, you typically:',
      options: [
        { text: 'Move on and trust my choice', type: 'A' },
        { text: 'Occasionally wonder if it was right', type: 'B' },
        { text: 'Replay it in my head questioning everything', type: 'C' },
        { text: 'Obsess over whether I made the wrong choice', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'When trying to fall asleep:',
      options: [
        { text: 'I fall asleep pretty easily', type: 'A' },
        { text: 'Sometimes my thoughts keep me up a bit', type: 'B' },
        { text: 'My brain decides it\'s analysis time', type: 'C' },
        { text: 'I relive every embarrassing moment since childhood', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'You said something awkward in a conversation:',
      options: [
        { text: 'Laugh it off and move on', type: 'A' },
        { text: 'Feel embarrassed briefly', type: 'B' },
        { text: 'Think about it for the rest of the day', type: 'C' },
        { text: 'Still cringing about it three years later', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Before a big event or meeting:',
      options: [
        { text: 'I prepare and feel ready', type: 'A' },
        { text: 'I think through it a few times', type: 'B' },
        { text: 'I rehearse every possible conversation', type: 'C' },
        { text: 'I create 47 backup plans for worst-case scenarios', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Someone doesn\'t reply to your message right away:',
      options: [
        { text: 'They\'ll get back to me when they can', type: 'A' },
        { text: 'I notice but don\'t worry too much', type: 'B' },
        { text: 'Did I say something wrong? Let me reread...', type: 'C' },
        { text: 'I\'ve already written their obituary and my apology', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'How many times do you rethink small decisions?',
      options: [
        { text: 'Rarely - I decide and move on', type: 'A' },
        { text: 'Sometimes for bigger things', type: 'B' },
        { text: 'Pretty often, even for small stuff', type: 'C' },
        { text: 'I\'m still thinking about what to have for lunch from three days ago', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'When something goes wrong:',
      options: [
        { text: 'Problem-solve and move forward', type: 'A' },
        { text: 'Think about it, then let it go', type: 'B' },
        { text: 'Analyze what I could have done differently', type: 'C' },
        { text: 'Create a detailed mental documentary of my failure', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your inner monologue is:',
      options: [
        { text: 'Pretty quiet actually', type: 'A' },
        { text: 'Active but manageable', type: 'B' },
        { text: 'A constant narrator analyzing everything', type: 'C' },
        { text: 'A panel of judges critiquing my every move', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'When someone says "we need to talk later":',
      options: [
        { text: 'I\'ll wait and find out then', type: 'A' },
        { text: 'I\'m curious what it\'s about', type: 'B' },
        { text: 'I\'ve already assumed the worst', type: 'C' },
        { text: 'I\'ve written my defense argument and planned my escape', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Zen Mind',
      emoji: '🧘',
      description: 'Your brain has a healthy off switch! You process things, make decisions, and move on without spiraling. You live in the present and don\'t torture yourself with endless what-ifs. Teach us your ways!',
      traits: ['Present-focused', 'Decisive', 'Low anxiety', 'Action-oriented'],
      strengths: ['Makes decisions efficiently', 'Doesn\'t dwell on past', 'Handles uncertainty well', 'Good sleep probably'],
      weaknesses: ['May miss some details', 'Could seem too relaxed to anxious people'],
      tips: ['Keep that balance', 'Stay open to reflection when needed', 'Help overthinkers calm down'],
    },
    B: {
      type: 'B',
      title: 'Thoughtful Processor',
      emoji: '💭',
      description: 'You think things through without going overboard. You reflect on decisions and situations but can also let go. Your brain is active but you\'re in control. This is a healthy balance!',
      traits: ['Reflective', 'Balanced', 'Thoughtful', 'Self-aware'],
      strengths: ['Processes without spiraling', 'Makes considered decisions', 'Learns from experiences', 'Healthy reflection'],
      weaknesses: ['Can slip into overthinking sometimes', 'May need to catch yourself'],
      tips: ['Notice when reflection becomes rumination', 'Trust your gut more', 'You think enough already'],
    },
    C: {
      type: 'C',
      title: 'Chronic Overthinker',
      emoji: '🔄',
      description: 'Welcome to the overthinking club! Your brain loves to analyze, replay, and worry about everything. You see problems before they exist and create scenarios that never happen. It\'s exhausting in there.',
      traits: ['Analytical to a fault', 'Anxious', 'Detail-obsessed', 'Future-focused worrier'],
      strengths: ['Prepared for everything', 'Notices details others miss', 'Thorough', 'Cares deeply'],
      weaknesses: ['Analysis paralysis', 'Exhausting mental energy', 'Creates unnecessary stress', 'Poor sleep'],
      tips: ['Set thinking time limits', 'Most worries never happen', 'Practice grounding techniques', 'Action beats analysis'],
    },
    D: {
      type: 'D',
      title: 'Maximum Overthinker',
      emoji: '🌀',
      description: 'Your brain is a 24/7 anxiety factory! You overthink the overthinking. Past, present, future - you\'ve analyzed them all and created worst-case scenarios for each. Your mind deserves a vacation.',
      traits: ['Extreme analysis', 'High anxiety', 'Catastrophizer', 'Mental exhaustion'],
      strengths: ['Never caught off guard', 'Incredibly thorough', 'Great at planning', 'Empathetic (you worry about everyone)'],
      weaknesses: ['Mentally exhausting', 'Creates problems that don\'t exist', 'Paralyzed by options', 'Sleep? What\'s that?'],
      tips: ['Seriously consider therapy', 'Journaling can help externalize', 'Your brain lies to you', 'Not every thought is true'],
    },
  },
};

export default testData;
