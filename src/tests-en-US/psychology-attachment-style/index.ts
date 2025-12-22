// What's Your Attachment Style?
// Discover how you connect in relationships

import { TestData } from '@/types';

const testData: TestData = {
  id: 'psychology-attachment-style',
  title: 'What\'s Your Attachment Style?',
  description: 'Find out how you bond, connect, and navigate relationships based on your attachment patterns.',
  category: 'psychology',
  emoji: '💝',
  color: 'from-rose-400 to-pink-600',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'When you start dating someone new, you typically:',
      options: [
        { text: 'Feel comfortable getting close and sharing openly', type: 'A' },
        { text: 'Worry they might not like you as much as you like them', type: 'B' },
        { text: 'Keep some emotional distance just in case', type: 'C' },
        { text: 'Feel torn between wanting closeness and needing space', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your partner hasn\'t texted back in a few hours. You:',
      options: [
        { text: 'Assume they\'re busy and continue your day', type: 'A' },
        { text: 'Start wondering if you did something wrong', type: 'B' },
        { text: 'Appreciate the space and enjoy your alone time', type: 'C' },
        { text: 'Feel anxious but also relieved for the break', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'How do you feel about depending on others?',
      options: [
        { text: 'I\'m comfortable with mutual dependence', type: 'A' },
        { text: 'I wish people would let me depend on them more', type: 'B' },
        { text: 'I prefer to be self-sufficient', type: 'C' },
        { text: 'Part of me wants to, part of me is scared to', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'When someone gets too close too fast, you:',
      options: [
        { text: 'Enjoy the connection if it feels right', type: 'A' },
        { text: 'Love it - finally someone who matches my energy!', type: 'B' },
        { text: 'Feel suffocated and need to pull back', type: 'C' },
        { text: 'Feel excited but also want to run away', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'After an argument with your partner, you usually:',
      options: [
        { text: 'Work to resolve it and reconnect', type: 'A' },
        { text: 'Need lots of reassurance that everything\'s okay', type: 'B' },
        { text: 'Need space before you can talk about it', type: 'C' },
        { text: 'Swing between wanting to fix it and wanting to leave', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your biggest fear in relationships is:',
      options: [
        { text: 'I don\'t have major relationship fears', type: 'A' },
        { text: 'Being abandoned or not being enough', type: 'B' },
        { text: 'Losing my independence or being trapped', type: 'C' },
        { text: 'Both being abandoned AND losing myself', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'How easily do you express your emotions to a partner?',
      options: [
        { text: 'Pretty easily - vulnerability is part of intimacy', type: 'A' },
        { text: 'Very easily, sometimes too easily', type: 'B' },
        { text: 'I struggle with it - feels uncomfortable', type: 'C' },
        { text: 'It depends on my mood and the situation', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'When your partner is going through a hard time:',
      options: [
        { text: 'I\'m supportive and present for them', type: 'A' },
        { text: 'I\'m there 100% - maybe even over-functioning', type: 'B' },
        { text: 'I offer support but give them space to handle it', type: 'C' },
        { text: 'I want to help but sometimes feel overwhelmed', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your exes would probably say you were:',
      options: [
        { text: 'A great partner who was emotionally available', type: 'A' },
        { text: 'Loving but sometimes needed a lot of reassurance', type: 'B' },
        { text: 'Great but emotionally distant at times', type: 'C' },
        { text: 'Hot and cold - hard to read', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your view on relationships in general:',
      options: [
        { text: 'They\'re an important part of a fulfilling life', type: 'A' },
        { text: 'They\'re everything - I don\'t feel complete without one', type: 'B' },
        { text: 'They\'re nice but I don\'t need one to be happy', type: 'C' },
        { text: 'I want them but they always seem complicated', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Secure Attachment',
      emoji: '🌟',
      description: 'You have a healthy, balanced approach to relationships! You\'re comfortable with intimacy and independence. You can depend on others while maintaining your own identity. This is the relationship sweet spot!',
      traits: ['Emotionally available', 'Trusting', 'Independent yet connected', 'Good communicator'],
      strengths: ['Handles conflict well', 'Creates stable relationships', 'Comfortable with vulnerability', 'Maintains healthy boundaries'],
      weaknesses: ['May not understand partners with other styles', 'Could take stability for granted'],
      tips: ['Keep doing what you\'re doing', 'Help partners feel safe', 'Model healthy attachment for others'],
    },
    B: {
      type: 'B',
      title: 'Anxious Attachment',
      emoji: '💫',
      description: 'You love deeply and crave closeness! You\'re incredibly attuned to your relationships and partner\'s moods. Sometimes you worry about being too much or not enough. Your capacity for love is beautiful - just remember to love yourself too.',
      traits: ['Deeply loving', 'Sensitive to rejection', 'Emotionally expressive', 'Highly attuned to partners'],
      strengths: ['Passionate lover', 'Great at emotional intimacy', 'Committed to relationships', 'Picks up on subtle cues'],
      weaknesses: ['Can be clingy', 'Needs lots of reassurance', 'May people-please', 'Prone to relationship anxiety'],
      tips: ['Build self-worth outside relationships', 'Notice when anxiety speaks', 'Communicate needs calmly', 'Practice self-soothing'],
    },
    C: {
      type: 'C',
      title: 'Avoidant Attachment',
      emoji: '🏔️',
      description: 'You value your independence and don\'t like to feel tied down. Emotional vulnerability feels risky, so you maintain some distance. You\'re self-reliant and don\'t need others to feel complete. Just remember - some vulnerability is how we truly connect.',
      traits: ['Independent', 'Self-reliant', 'Values freedom', 'Emotionally guarded'],
      strengths: ['Doesn\'t lose self in relationships', 'Low relationship drama', 'Strong sense of identity', 'Not clingy'],
      weaknesses: ['May push people away', 'Struggles with intimacy', 'Can seem cold or distant', 'Avoids difficult conversations'],
      tips: ['Practice small vulnerabilities', 'Notice when you\'re pulling away', 'Intimacy doesn\'t mean losing yourself', 'Let people in slowly'],
    },
    D: {
      type: 'D',
      title: 'Fearful-Avoidant Attachment',
      emoji: '🌊',
      description: 'You\'re caught in a push-pull dynamic - wanting closeness but fearing it too. You might send mixed signals because your own feelings are mixed. Relationships feel complicated because part of you wants in while part wants out.',
      traits: ['Complex emotions', 'Hot and cold', 'Intense connections', 'Conflicted about intimacy'],
      strengths: ['Deep capacity for love', 'Can understand multiple perspectives', 'Intense emotional experiences', 'Self-protective'],
      weaknesses: ['Confusing to partners', 'Struggles with consistency', 'May self-sabotage', 'Difficulty trusting'],
      tips: ['Therapy can be super helpful', 'Recognize your patterns', 'Go slow in relationships', 'Work on healing old wounds'],
    },
  },
};

export default testData;
