// How Much Do You Avoid Conflict?
// Discover your relationship with confrontation

import { TestData } from '@/types';

const testData: TestData = {
  id: 'social-conflict-avoider',
  title: 'How Much Do You Avoid Conflict?',
  description: 'Peace-keeper or confrontation king? Find out how you handle (or don\'t handle) disagreements and difficult conversations.',
  category: 'social',
  emoji: '🕊️',
  color: 'from-slate-500 to-gray-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Someone says something that bothers you:',
      options: [
        { text: 'Address it directly and immediately', type: 'A' },
        { text: 'Bring it up later, calmly', type: 'B' },
        { text: 'Hint at it and hope they get it', type: 'C' },
        { text: 'Let it go and probably never mention it', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'A friend does something that upsets you:',
      options: [
        { text: 'Have a direct conversation about it', type: 'A' },
        { text: 'Find a gentle way to address it', type: 'B' },
        { text: 'Distance myself quietly', type: 'C' },
        { text: 'Pretend it didn\'t happen and move on', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your food order comes out wrong at a restaurant:',
      options: [
        { text: 'Send it back immediately, it\'s their mistake', type: 'A' },
        { text: 'Politely point it out and ask for a fix', type: 'B' },
        { text: 'Eat it anyway, it\'s fine', type: 'C' },
        { text: 'Eat it and complain to my friend after', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'You disagree with someone\'s opinion:',
      options: [
        { text: 'Share my view clearly, healthy debate', type: 'A' },
        { text: 'Express disagreement diplomatically', type: 'B' },
        { text: 'Nod along even if I disagree', type: 'C' },
        { text: 'Stay quiet, not worth the potential conflict', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'When you think of confrontation:',
      options: [
        { text: 'Necessary and often healthy', type: 'A' },
        { text: 'Uncomfortable but sometimes required', type: 'B' },
        { text: 'Avoid if possible', type: 'C' },
        { text: 'Anxiety spiral', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Someone cuts in line in front of you:',
      options: [
        { text: 'Call them out immediately', type: 'A' },
        { text: 'Politely point out the line', type: 'B' },
        { text: 'Annoyed but say nothing', type: 'C' },
        { text: 'Pretend I didn\'t notice', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your strategy for difficult conversations:',
      options: [
        { text: 'Direct approach, say what needs to be said', type: 'A' },
        { text: 'Careful planning, choose words wisely', type: 'B' },
        { text: 'Procrastinate, maybe it\'ll resolve itself', type: 'C' },
        { text: 'Avoid at all costs, find another solution', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Two friends are fighting and want you to pick a side:',
      options: [
        { text: 'I\'ll be honest about my opinion', type: 'A' },
        { text: 'Try to help them understand each other', type: 'B' },
        { text: 'Stay out of it completely', type: 'C' },
        { text: 'Agree with whoever I\'m talking to', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'After avoiding a conflict, you feel:',
      options: [
        { text: 'I don\'t avoid conflicts', type: 'A' },
        { text: 'Guilty but relieved', type: 'B' },
        { text: 'Relieved, that was close', type: 'C' },
        { text: 'Resentful but peaceful externally', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your honest conflict style:',
      options: [
        { text: 'I face things head-on', type: 'A' },
        { text: 'I address things eventually', type: 'B' },
        { text: 'I avoid unless absolutely necessary', type: 'C' },
        { text: 'I would rather suffer than confront', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Direct Confronter',
      emoji: '⚡',
      description: 'You don\'t let things slide. Problems get addressed, opinions get shared, and you\'d rather have a difficult conversation than let something fester. Your directness is refreshing - but sometimes intimidating.',
      traits: ['Direct', 'Honest', 'Assertive', 'Clear'],
      strengths: ['Issues get resolved', 'People know where you stand', 'No passive-aggression', 'Clear boundaries'],
      weaknesses: ['Can be too intense', 'Might pick unnecessary fights', 'Could be more diplomatic'],
      tips: ['Not everything needs confronting', 'Diplomacy has its place', 'Your honesty is valuable'],
    },
    B: {
      type: 'B',
      title: 'The Diplomatic Addresser',
      emoji: '🎯',
      description: 'You handle conflict like an adult - addressing issues when needed, but thoughtfully and calmly. You\'ve found the balance between doormat and bulldozer. This is healthy conflict management.',
      traits: ['Balanced', 'Diplomatic', 'Thoughtful', 'Mature'],
      strengths: ['Handles issues well', 'Not aggressive or passive', 'Preserves relationships', 'Effective communication'],
      weaknesses: ['Might over-deliberate', 'Could act faster sometimes'],
      tips: ['You\'ve got this figured out', 'Your approach is healthy', 'Trust your instincts'],
    },
    C: {
      type: 'C',
      title: 'The Peace-Keeper',
      emoji: '☮️',
      description: 'You\'d rather keep the peace than rock the boat. Conflict feels uncomfortable and you\'ll go out of your way to avoid it. This keeps things smooth but sometimes things need addressing.',
      traits: ['Peaceful', 'Non-confrontational', 'Accommodating', 'Conflict-averse'],
      strengths: ['Keeps harmony', 'Doesn\'t create drama', 'Easy to get along with', 'Patient'],
      weaknesses: ['Issues go unresolved', 'Resentment builds', 'Might be walked over'],
      tips: ['Some conflict is healthy', 'Your needs matter too', 'Speaking up is sometimes necessary'],
    },
    D: {
      type: 'D',
      title: 'The Conflict Allergic',
      emoji: '🐚',
      description: 'Conflict? Never heard of her. You\'ll suffer in silence, agree when you don\'t, and let things go that probably shouldn\'t. The peace is kept but at what cost? (Your sanity, probably.)',
      traits: ['Avoidant', 'People-pleasing', 'Passive', 'Internally conflicted'],
      strengths: ['No one fights with you', 'Keeps external peace', 'Flexible with others', 'Non-threatening'],
      weaknesses: ['Gets walked over', 'Resentment accumulates', 'Needs aren\'t met', 'Might explode eventually'],
      tips: ['Your voice matters', 'Healthy conflict is okay', 'Small confrontations prevent big ones'],
    },
  },
};

export default testData;
