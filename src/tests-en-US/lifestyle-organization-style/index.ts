// Your Organization Style
// How do you keep (or not keep) your life together?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'lifestyle-organization-style',
  title: 'Your Organization Style',
  description: 'Color-coded perfection or beautiful chaos? Discover how you organize your life (or don\'t) and what it says about you.',
  category: 'lifestyle',
  emoji: '📋',
  color: 'from-teal-500 to-cyan-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your to-do list situation:',
      options: [
        { text: 'Detailed, categorized, checked off systematically', type: 'A' },
        { text: 'Basic list, gets the job done', type: 'B' },
        { text: 'Mental notes and occasional scribbles', type: 'C' },
        { text: 'What\'s a to-do list?', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your email inbox:',
      options: [
        { text: 'Zero or near-zero, folders for everything', type: 'A' },
        { text: 'Under control, checked regularly', type: 'B' },
        { text: 'Several hundred, I know what\'s important', type: 'C' },
        { text: 'Thousands unread, notifications off', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your digital files organization:',
      options: [
        { text: 'Folders, subfolders, naming conventions', type: 'A' },
        { text: 'Decent system, things are findable', type: 'B' },
        { text: 'Search bar is my filing system', type: 'C' },
        { text: 'Everything on the desktop or Downloads', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Planning events or trips:',
      options: [
        { text: 'Spreadsheets, itineraries, backup plans', type: 'A' },
        { text: 'Research and loose plan, flexible', type: 'B' },
        { text: 'Book the main things, figure out the rest', type: 'C' },
        { text: 'Show up and see what happens', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your closet/drawers:',
      options: [
        { text: 'Organized by type, color, season', type: 'A' },
        { text: 'Reasonably organized, I can find things', type: 'B' },
        { text: '"Organized chaos" - I know where things are', type: 'C' },
        { text: 'Floordrobe/drawer explosion situation', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'How do you remember important dates?',
      options: [
        { text: 'Calendar alerts, reminders, systems', type: 'A' },
        { text: 'Calendar plus I just remember most', type: 'B' },
        { text: 'Last-minute panic or someone reminds me', type: 'C' },
        { text: 'I don\'t, and I\'ve accepted this about myself', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your junk drawer situation:',
      options: [
        { text: 'Organized with dividers, everything has a place', type: 'A' },
        { text: 'A bit messy but functional', type: 'B' },
        { text: 'True junk drawer energy', type: 'C' },
        { text: 'Every drawer is a junk drawer', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'When you need to find something:',
      options: [
        { text: 'I know exactly where it is', type: 'A' },
        { text: 'Usually find it pretty quickly', type: 'B' },
        { text: 'Search party required sometimes', type: 'C' },
        { text: 'Assume it\'s lost forever', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your approach to routines:',
      options: [
        { text: 'Strong routines, same time every day', type: 'A' },
        { text: 'Loose routines that mostly work', type: 'B' },
        { text: 'Routines are suggestions', type: 'C' },
        { text: 'What routine?', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'How do you feel about your organizational style?',
      options: [
        { text: 'Proud - my systems work', type: 'A' },
        { text: 'Good enough - I function fine', type: 'B' },
        { text: 'Could be better but this works for me', type: 'C' },
        { text: 'I\'ve stopped trying', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The System Master',
      emoji: '📊',
      description: 'Your life is a well-oiled machine. Everything has a place, every task has a process, and chaos is the enemy. You\'re the friend people ask for organization tips and your spreadsheets are works of art.',
      traits: ['Systematic', 'Detail-oriented', 'Efficient', 'Structured'],
      strengths: ['Never loses anything', 'Maximum efficiency', 'Reliable', 'Stress-free systems'],
      weaknesses: ['Can be rigid', 'Might stress others out', 'Hard to adapt to chaos'],
      tips: ['Your systems serve you well', 'Flexibility is also a skill', 'Not everyone needs to be this organized'],
    },
    B: {
      type: 'B',
      title: 'The Functional Organizer',
      emoji: '✅',
      description: 'You\'re organized enough to function well without being obsessive. Things are findable, tasks get done, and you\'re not stressed about perfection. This is the sustainable middle ground.',
      traits: ['Practical', 'Efficient enough', 'Balanced', 'Functional'],
      strengths: ['Works without stress', 'Adaptable', 'Gets things done', 'Not rigid'],
      weaknesses: ['Room for improvement', 'Sometimes things slip'],
      tips: ['You\'ve found the sweet spot', 'Small improvements are optional', 'This is sustainable'],
    },
    C: {
      type: 'C',
      title: 'The Organized Chaos Agent',
      emoji: '🌀',
      description: 'Your system makes sense to you and that\'s what matters. Others might see chaos but you know where things are (usually). It\'s not pretty but it works (mostly). You\'re creative, not disorganized.',
      traits: ['Creative systems', 'Non-traditional', 'Functional chaos', 'Knows their mess'],
      strengths: ['Works for you', 'Not stressed about perfection', 'Creative solutions', 'Flexible'],
      weaknesses: ['Confuses others', 'Things get lost sometimes', 'Could be more efficient'],
      tips: ['If it works, it works', 'One small improvement might help', 'Your chaos is valid'],
    },
    D: {
      type: 'D',
      title: 'The Free Spirit',
      emoji: '💨',
      description: 'Organization is a construct and you\'ve rejected it. Things are where they are, deadlines are suggestions, and you\'re living in the moment. Either you\'re incredibly zen or slightly overwhelmed. Probably both.',
      traits: ['Free-flowing', 'Non-structured', 'Present-focused', 'Chaotic'],
      strengths: ['No stress about systems', 'Maximum freedom', 'Adaptable to anything', 'Living in the now'],
      weaknesses: ['Loses things constantly', 'Misses deadlines', 'Stresses others out'],
      tips: ['One small system might change your life', 'Future you would appreciate some structure', 'Chaos has costs'],
    },
  },
};

export default testData;
