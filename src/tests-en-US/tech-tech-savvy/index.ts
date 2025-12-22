// How Tech Savvy Are You?
// Test your tech knowledge and skills!

import { TestData } from '@/types';

const testData: TestData = {
  id: 'tech-tech-savvy',
  title: 'How Tech Savvy Are You?',
  description: 'Can you fix the family computer, or do you call someone when the WiFi blinks? Let\'s find out!',
  category: 'tech',
  emoji: '🖥️',
  color: 'from-gray-600 to-slate-700',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Something isn\'t working on your computer. First move:',
      options: [
        { text: 'Troubleshoot myself, I know what I\'m doing', type: 'A' },
        { text: 'Google the problem, follow instructions', type: 'B' },
        { text: 'Turn it off and on again, hope for the best', type: 'C' },
        { text: 'Immediately ask someone else for help', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Someone asks you to help with their tech problem:',
      options: [
        { text: 'Happy to help, I actually enjoy this', type: 'A' },
        { text: 'Can probably figure it out', type: 'B' },
        { text: 'Nervous but I\'ll try', type: 'C' },
        { text: 'I am not the person to ask', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your comfort level with settings/configurations:',
      options: [
        { text: 'Customize everything to my exact preferences', type: 'A' },
        { text: 'Adjust important settings, leave most default', type: 'B' },
        { text: 'Rarely change anything, scared to break it', type: 'C' },
        { text: 'Don\'t touch settings, ever', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'When a new gadget arrives:',
      options: [
        { text: 'Set it up easily, maybe explore advanced features', type: 'A' },
        { text: 'Follow the instructions, get it working', type: 'B' },
        { text: 'Struggle through setup, probably need help', type: 'C' },
        { text: 'Hand it to someone else to figure out', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your knowledge of how things work "under the hood":',
      options: [
        { text: 'Solid understanding of how tech actually works', type: 'A' },
        { text: 'General idea, enough to get by', type: 'B' },
        { text: 'It\'s basically magic to me', type: 'C' },
        { text: 'I don\'t even want to know', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'How do you feel about software updates?',
      options: [
        { text: 'Read changelogs, update strategically', type: 'A' },
        { text: 'Update when convenient', type: 'B' },
        { text: 'Click update and hope nothing breaks', type: 'C' },
        { text: 'Updates scare me, avoid as long as possible', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Smart home devices:',
      options: [
        { text: 'Have a full setup I configured myself', type: 'A' },
        { text: 'Have some, they mostly work', type: 'B' },
        { text: 'Tried one, couldn\'t get it to work right', type: 'C' },
        { text: 'Too complicated, not interested', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your file organization on devices:',
      options: [
        { text: 'Logical folder structure, everything findable', type: 'A' },
        { text: 'Somewhat organized, use search when needed', type: 'B' },
        { text: 'Random chaos, things get lost', type: 'C' },
        { text: 'Files? I just... don\'t really know where anything is', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Learning new software:',
      options: [
        { text: 'Enjoy exploring, pick it up quickly', type: 'A' },
        { text: 'Can figure it out with some time', type: 'B' },
        { text: 'Need tutorials and a lot of patience', type: 'C' },
        { text: 'Avoid new software at all costs', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'In your social circle, you\'re the person who:',
      options: [
        { text: 'Everyone calls for tech help', type: 'A' },
        { text: 'Can handle my own stuff', type: 'B' },
        { text: 'Needs to ask others for help', type: 'C' },
        { text: 'Has given up and pays for tech support', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Tech Wizard',
      emoji: '🧙‍♂️',
      description: 'You ARE the IT department. Troubleshooting comes naturally, you actually enjoy solving tech problems, and you\'re the first call when anything electronic stops working. You probably have opinions about operating systems.',
      traits: ['Tech expert', 'Problem-solver', 'Self-sufficient', 'Always learning'],
      strengths: ['Can fix almost anything', 'Never needs help', 'Everyone\'s go-to tech person'],
      weaknesses: ['Everyone always asks you for help', 'Might be too much of a power user'],
      tips: ['Your skills are valuable', 'Consider teaching others', 'Don\'t let people take advantage'],
    },
    B: {
      type: 'B',
      title: 'Comfortably Capable',
      emoji: '💡',
      description: 'You\'re not a tech genius but you\'re far from helpless. Can Google your way out of most problems, set up your own devices, and generally handle technology without stress. Solid, functional tech skills.',
      traits: ['Capable', 'Resourceful', 'Independent', 'Functional'],
      strengths: ['Can solve most problems', 'Good balance of skills', 'Self-sufficient'],
      weaknesses: ['Complex issues might stump you'],
      tips: ['You\'re in a good place', 'Keep learning', 'YouTube tutorials are your friend'],
    },
    C: {
      type: 'C',
      title: 'Tech Nervous',
      emoji: '😬',
      description: 'Technology makes you a little nervous. You can do the basics but anything beyond that feels scary. "Have you tried turning it off and on again?" is your main troubleshooting strategy. Complex settings? No thanks.',
      traits: ['Hesitant', 'Basic user', 'Cautious', 'Help-dependent'],
      strengths: ['Know your limits', 'Careful with technology'],
      weaknesses: ['Easily frustrated', 'Dependent on others for help', 'Avoids complex features'],
      tips: ['Tech is less scary than you think', 'Try following some tutorials', 'You can learn more than you realize'],
    },
    D: {
      type: 'D',
      title: 'Certified Tech Challenged',
      emoji: '🆘',
      description: 'You and technology have a complicated relationship (you avoid it, it confuses you). You\'ve accepted that some people are just not tech people, and that\'s you. You have someone on speed dial for any tech issues.',
      traits: ['Tech-averse', 'Confused', 'Dependent', 'Avoidant'],
      strengths: ['Honest about limitations', 'Job security for IT people'],
      weaknesses: ['Completely dependent on others', 'Basic tasks are challenging', 'Technology is stressful'],
      tips: ['It\'s okay to learn basics', 'Modern tech is pretty user-friendly', 'Your tech-savvy friends still love you'],
    },
  },
};

export default testData;
