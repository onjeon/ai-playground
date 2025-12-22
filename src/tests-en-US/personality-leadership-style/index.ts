// Your Leadership Style
// Discover how you lead teams and projects!

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-leadership-style',
  title: 'What\'s Your Leadership Style?',
  description: 'Discover how you naturally lead teams, make decisions, and inspire others in the workplace.',
  category: 'personality',
  emoji: '👔',
  color: 'from-blue-500 to-indigo-600',
  duration: '3-5 min',
  questions: [
    {
      id: 1,
      question: 'How do you prefer to make important team decisions?',
      options: [
        { text: 'I make quick decisions on my own', type: 'A' },
        { text: 'I consult the team, then decide', type: 'B' },
        { text: 'I let the team decide together', type: 'C' },
        { text: 'I delegate to whoever has the most expertise', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'When a team member makes a mistake, you:',
      options: [
        { text: 'Correct them immediately and show how to do it right', type: 'A' },
        { text: 'Have a private conversation and offer guidance', type: 'B' },
        { text: 'Ask the team to discuss what happened', type: 'C' },
        { text: 'Let them learn from their own mistake', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'How do you motivate your team?',
      options: [
        { text: 'Set clear goals and hold people accountable', type: 'A' },
        { text: 'Recognize achievements and give regular feedback', type: 'B' },
        { text: 'Create a collaborative and inclusive environment', type: 'C' },
        { text: 'Give freedom and trust in their potential', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'In a team meeting, you usually:',
      options: [
        { text: 'Lead the meeting and set the agenda', type: 'A' },
        { text: 'Facilitate discussion and keep things on track', type: 'B' },
        { text: 'Encourage everyone to participate equally', type: 'C' },
        { text: 'Prefer to listen and only speak when necessary', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'When conflict arises in your team, you:',
      options: [
        { text: 'Resolve it quickly by determining who\'s right', type: 'A' },
        { text: 'Mediate the situation seeking a middle ground', type: 'B' },
        { text: 'Bring everyone together to solve it as a group', type: 'C' },
        { text: 'Let the parties resolve it themselves', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'How do you assign tasks to your team?',
      options: [
        { text: 'I distribute tasks according to my vision', type: 'A' },
        { text: 'I match skills with appropriate tasks', type: 'B' },
        { text: 'The team decides who does what', type: 'C' },
        { text: 'I let each person choose their own tasks', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Which phrase best describes your leadership philosophy?',
      options: [
        { text: 'Results speak louder than excuses', type: 'A' },
        { text: 'A good leader develops other leaders', type: 'B' },
        { text: 'Together we are stronger', type: 'C' },
        { text: 'Freedom creates responsibility', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'How do you handle tight deadlines?',
      options: [
        { text: 'Take control and assign urgent tasks', type: 'A' },
        { text: 'Reorganize priorities with the team', type: 'B' },
        { text: 'Ask for ideas on how we can speed up together', type: 'C' },
        { text: 'Trust that everyone will deliver their part', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'When giving negative feedback, you:',
      options: [
        { text: 'Am direct and objective about the problem', type: 'A' },
        { text: 'Balance criticism with positive points', type: 'B' },
        { text: 'Ask questions to help them reflect', type: 'C' },
        { text: 'Prefer to wait for the right moment', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'How do you celebrate team achievements?',
      options: [
        { text: 'Acknowledge publicly and move to the next challenge', type: 'A' },
        { text: 'Organize something special to value everyone', type: 'B' },
        { text: 'Let the team decide how they want to celebrate', type: 'C' },
        { text: 'Celebrate informally and spontaneously', type: 'D' },
      ],
    },
    {
      id: 11,
      question: 'What\'s your approach to innovation?',
      options: [
        { text: 'I set the direction and the team executes', type: 'A' },
        { text: 'I encourage ideas but validate before implementing', type: 'B' },
        { text: 'All ideas are discussed as a group', type: 'C' },
        { text: 'I give complete freedom for experimentation', type: 'D' },
      ],
    },
    {
      id: 12,
      question: 'What do you consider most important in a leader?',
      options: [
        { text: 'Clear vision and execution ability', type: 'A' },
        { text: 'Ability to develop people', type: 'B' },
        { text: 'Capacity to unite and inspire the group', type: 'C' },
        { text: 'Trust in team autonomy', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Commanding Leader',
      emoji: '👑',
      description: 'You\'re a decisive, results-oriented leader! You make quick decisions and have a clear vision of where you want to go. Your team knows exactly what you expect from them.',
      traits: ['Decisive', 'Focused', 'Determined', 'Direct'],
      strengths: ['Quick decision-making', 'Clear objectives', 'Effective in crises', 'Consistent results'],
      weaknesses: ['May seem inflexible', 'Risk of demotivating the team', 'Little room for others\' creativity'],
      tips: ['Listen more to your team', 'Delegate more responsibilities', 'Value individual contributions'],
    },
    B: {
      type: 'B',
      title: 'The Coach Leader',
      emoji: '🎯',
      description: 'You lead by developing people! You believe success comes from individual growth. You excellently balance guidance with autonomy.',
      traits: ['Mentoring', 'Patient', 'Strategic', 'Empathetic'],
      strengths: ['Develops talent', 'Constructive feedback', 'Strong relationships', 'Long-term vision'],
      weaknesses: ['May be slow in urgent decisions', 'Too much focus on individuals', 'Difficulty with poor performers'],
      tips: ['Be more assertive when needed', 'Balance development with results', 'Make faster decisions in crises'],
    },
    C: {
      type: 'C',
      title: 'The Democratic Leader',
      emoji: '🤝',
      description: 'You believe in the power of the collective! You value everyone\'s opinion and build consensus. Your team feels valued and engaged in decisions.',
      traits: ['Collaborative', 'Inclusive', 'Communicative', 'Fair'],
      strengths: ['High team engagement', 'Well-accepted decisions', 'Positive environment', 'Diversity of ideas'],
      weaknesses: ['Decisions may take time', 'Difficulty in urgent situations', 'Not everyone wants to participate'],
      tips: ['Be more decisive when needed', 'Not everything needs a vote', 'Take charge in crises'],
    },
    D: {
      type: 'D',
      title: 'The Delegative Leader',
      emoji: '🦅',
      description: 'You trust your team\'s autonomy! You give freedom and expect responsibility in return. Your team has space to grow and develop independently.',
      traits: ['Trusting', 'Flexible', 'Laid-back', 'Empowering'],
      strengths: ['Stimulates autonomy', 'Creative environment', 'Self-managing team', 'Low micromanagement'],
      weaknesses: ['May seem absent', 'Lack of clear direction', 'Risk of disorganization'],
      tips: ['Offer more initial guidance', 'Monitor progress regularly', 'Set clear expectations'],
    },
  },
};

export default testData;
