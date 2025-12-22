// Your Role in the Group Chat
// What do you bring to the conversation?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-group-chat',
  title: 'What\'s Your Role in the Group Chat?',
  description: 'Every group chat has its characters. The meme dealer, the planner, the lurker - discover which one you are!',
  category: 'personality',
  emoji: '💬',
  color: 'from-green-500 to-teal-600',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'A message comes in. Your response time is usually:',
      options: [
        { text: 'Immediate - I\'m always online', type: 'A' },
        { text: 'Pretty quick if it\'s interesting', type: 'B' },
        { text: 'Hours later when I finally check', type: 'C' },
        { text: 'I read it, react, maybe respond... eventually', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your typical contribution to the group chat is:',
      options: [
        { text: 'Memes, TikToks, and chaotic energy', type: 'A' },
        { text: 'Hot takes and conversation starters', type: 'B' },
        { text: 'Logistics and planning messages', type: 'C' },
        { text: 'Reactions and occasional "lol"', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Drama unfolds in the group chat. You:',
      options: [
        { text: 'Add fuel to the fire with commentary', type: 'A' },
        { text: 'Share your opinion and take sides', type: 'B' },
        { text: 'Try to mediate and calm things down', type: 'C' },
        { text: 'Watch silently, maybe screenshot', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Someone asks a question in the chat. You:',
      options: [
        { text: 'Respond with a meme that may or may not be helpful', type: 'A' },
        { text: 'Answer if I know, or speculate loudly', type: 'B' },
        { text: 'Google it and provide a real answer', type: 'C' },
        { text: 'Wait for someone else to answer', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Planning an event via group chat, you:',
      options: [
        { text: 'Express enthusiasm with minimal helpful input', type: 'A' },
        { text: 'Suggest ideas and discuss options', type: 'B' },
        { text: 'Create the When2Meet and organize everything', type: 'C' },
        { text: '"Whatever works for everyone"', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your notification settings for the group chat:',
      options: [
        { text: 'Full notifications - I don\'t want to miss anything', type: 'A' },
        { text: 'Sound on, vibrate, I\'m engaged', type: 'B' },
        { text: 'Muted but I check regularly', type: 'C' },
        { text: 'Muted and I check when I remember', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'The chat has been quiet for a while. You:',
      options: [
        { text: 'Send something random to revive it', type: 'A' },
        { text: 'Start a new topic or ask a question', type: 'B' },
        { text: 'Let it be - silence is okay', type: 'C' },
        { text: 'Didn\'t notice until now', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'When someone shares personal news in the chat:',
      options: [
        { text: 'React with emojis and jokes', type: 'A' },
        { text: 'Engage with questions and genuine interest', type: 'B' },
        { text: 'Thoughtful response and support', type: 'C' },
        { text: 'Heart react, keep scrolling', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your message style is typically:',
      options: [
        { text: 'Multiple rapid-fire messages in a row', type: 'A' },
        { text: 'Full thoughts but engaging', type: 'B' },
        { text: 'Clear, organized, to the point', type: 'C' },
        { text: 'Brief or just reactions', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'If the group chat had a "most active" award, you\'d be:',
      options: [
        { text: 'Definitely winning it', type: 'A' },
        { text: 'In the top 3', type: 'B' },
        { text: 'Middle of the pack', type: 'C' },
        { text: 'Not even nominated', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Chaos Agent',
      emoji: '🔥',
      description: 'You keep the group chat alive and chaotic. Memes fly, jokes never stop, and you\'re always online. The chat would be boring without you. Sometimes you\'re too much, but mostly you\'re exactly what the chat needs.',
      traits: ['Entertaining', 'Always online', 'Chaotic energy', 'Content creator'],
      strengths: ['Never a dull moment', 'Great meme game', 'Keeps energy up', 'Everyone knows you\'re there'],
      weaknesses: ['Can be overwhelming', 'Sometimes derails conversations', 'May need to read the room'],
      tips: ['Let serious convos breathe', 'Your energy is a gift', 'Maybe mute at night for your own sake'],
    },
    B: {
      type: 'B',
      title: 'The Conversation Driver',
      emoji: '🗣️',
      description: 'You keep the discussions flowing. Hot takes, interesting topics, genuine engagement - you\'re the one who makes group chats actually interesting. People want to respond when you message.',
      traits: ['Engaging', 'Opinionated', 'Interesting', 'Social'],
      strengths: ['Great at starting convos', 'People engage with you', 'Brings substance', 'Balanced participation'],
      weaknesses: ['Might dominate discussions', 'Not everyone wants your opinion', 'Can be too much sometimes'],
      tips: ['Let others lead sometimes', 'Your input is valued', 'Keep bringing the good content'],
    },
    C: {
      type: 'C',
      title: 'The Group Chat Glue',
      emoji: '📋',
      description: 'You\'re the reason plans actually happen. You create the polls, suggest the times, and make sure everyone\'s on the same page. Without you, the group would just talk about hanging out but never do it.',
      traits: ['Organized', 'Reliable', 'Helpful', 'The planner'],
      strengths: ['Makes things happen', 'Keeps group connected', 'Dependable', 'Actual answers to questions'],
      weaknesses: ['Can feel like a manager', 'Might carry too much weight', 'Everyone takes you for granted'],
      tips: ['Let someone else plan sometimes', 'Your effort is noticed', 'You\'re essential to the group'],
    },
    D: {
      type: 'D',
      title: 'The Strategic Lurker',
      emoji: '👀',
      description: 'You\'re there. You\'re reading. You\'re just... not responding. Heart reacts are your signature move, and "lol" is your thesis statement. You see everything but say little. Chaotic neutral energy.',
      traits: ['Observer', 'Low-maintenance', 'Selective', 'Present but quiet'],
      strengths: ['No one can quote you on anything', 'Knows all the tea', 'Low drama', 'Unbothered'],
      weaknesses: ['Friends wonder if you\'re alive', 'May seem uninterested', 'Miss out on making plans'],
      tips: ['Throw in a message occasionally', 'Your friends want to hear from you', 'You\'re funnier than your silence suggests'],
    },
  },
};

export default testData;
