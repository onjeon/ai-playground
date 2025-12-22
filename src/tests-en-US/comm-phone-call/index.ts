// Phone Call Personality
// What's your relationship with phone calls?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'comm-phone-call',
  title: 'Phone Call Personality',
  description: 'Do you answer calls or let them go to voicemail? Let\'s see your phone call personality!',
  category: 'communication',
  emoji: '📞',
  color: 'from-green-500 to-teal-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your phone rings with an unexpected call. You:',
      options: [
        { text: 'Answer immediately! Might be important', type: 'A' },
        { text: 'Check who it is first, decide from there', type: 'B' },
        { text: 'Stare at it ringing, hoping it stops', type: 'C' },
        { text: 'Decline and text "what\'s up?"', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'How do you feel about making phone calls?',
      options: [
        { text: 'Fine, natural way to communicate', type: 'A' },
        { text: 'Okay when necessary', type: 'B' },
        { text: 'Will avoid if texting/email is an option', type: 'C' },
        { text: 'Absolutely dread it, cause me anxiety', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'When you need to make a business call:',
      options: [
        { text: 'Just dial, no big deal', type: 'A' },
        { text: 'Might rehearse what I\'ll say, then call', type: 'B' },
        { text: 'Procrastinate for hours, prepare extensively', type: 'C' },
        { text: 'See if there\'s ANY other option first', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'A friend calls instead of texting. Your thought:',
      options: [
        { text: 'Great! Nice to hear their voice', type: 'A' },
        { text: 'Must be something important', type: 'B' },
        { text: 'Why didn\'t they just text??', type: 'C' },
        { text: 'Immediate anxiety, what\'s wrong?', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Unknown number calling:',
      options: [
        { text: 'Answer it, could be anything', type: 'A' },
        { text: 'Let it go to voicemail, call back if important', type: 'B' },
        { text: 'Never answer unknown numbers', type: 'C' },
        { text: 'Blocked and reported for spam', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your voicemail situation:',
      options: [
        { text: 'Set up properly, check regularly', type: 'A' },
        { text: 'Set up, check occasionally', type: 'B' },
        { text: 'Full and never checked', type: 'C' },
        { text: 'Never set up, voicemail doesn\'t exist', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Ordering food by phone vs. app:',
      options: [
        { text: 'Either is fine', type: 'A' },
        { text: 'App preferred but will call if needed', type: 'B' },
        { text: 'App only unless absolutely necessary', type: 'C' },
        { text: 'Will literally go hungry before calling', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'On a phone call, you:',
      options: [
        { text: 'Chat naturally, enjoy the conversation', type: 'A' },
        { text: 'Get through it efficiently', type: 'B' },
        { text: 'Pace around, feel awkward, want it to end', type: 'C' },
        { text: 'Completely awkward, forget how to talk', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Someone says "let\'s talk on the phone":',
      options: [
        { text: '"Sure, call anytime!"', type: 'A' },
        { text: '"Okay, when works for you?"', type: 'B' },
        { text: '"Can we just text about it?"', type: 'C' },
        { text: '*visible panic*', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your honest relationship with phone calls:',
      options: [
        { text: 'Like them, prefer them for real conversations', type: 'A' },
        { text: 'Neutral, they\'re just a tool', type: 'B' },
        { text: 'Dislike them, avoid when possible', type: 'C' },
        { text: 'Genuine phone anxiety, avoid at all costs', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Phone Lover',
      emoji: '☎️',
      description: 'You actually LIKE phone calls! In a world of texters and email-only people, you\'re rare. You answer unknown numbers, call to chat, and prefer voice communication. Your phone is actually used as a phone!',
      traits: ['Phone-friendly', 'Voice-preferring', 'Answers calls', 'Old school'],
      strengths: ['Builds connection through voice', 'Efficient for complex topics', 'Not ruled by phone anxiety'],
      weaknesses: ['Might call people who hate calls'],
      tips: ['Your comfort is rare and valuable', 'Just know others might not share it', 'Keep being you'],
    },
    B: {
      type: 'B',
      title: 'The Phone Neutral',
      emoji: '📱',
      description: 'Calls are fine. You don\'t love them, don\'t hate them. You\'ll answer when appropriate, make calls when needed, and handle phone communication like a normal adult. Balanced and functional.',
      traits: ['Neutral', 'Practical', 'Functional', 'Balanced'],
      strengths: ['Handles calls when needed', 'Not anxious', 'Reasonable relationship'],
      weaknesses: ['None major'],
      tips: ['You\'re doing fine', 'Keep the balance', 'Nothing to worry about here'],
    },
    C: {
      type: 'C',
      title: 'The Call Avoider',
      emoji: '🙈',
      description: 'Phone calls are... not your thing. You\'ll text, email, send a carrier pigeon before calling. When your phone rings, you watch it. Voicemail is piling up. You\'re part of a whole generation like this.',
      traits: ['Phone-averse', 'Text-preferring', 'Avoider', 'Modern'],
      strengths: ['Great at written communication'],
      weaknesses: ['Misses calls that matter', 'Harder to resolve complex issues', 'Phone anxiety is limiting'],
      tips: ['Some things require calls', 'Practice makes it easier', 'Your avoidance is common but limiting'],
    },
    D: {
      type: 'D',
      title: 'Phone Anxiety Max',
      emoji: '😰',
      description: 'Phone calls fill you with genuine dread. Making calls is torture, receiving them is panic-inducing, and voicemail is the enemy. This is real phone anxiety and it affects your life. You\'re not alone in this.',
      traits: ['Anxious', 'Avoidant', 'Stressed', 'Phone-phobic'],
      strengths: ['Self-aware about the issue'],
      weaknesses: ['Real limitation', 'Misses opportunities', 'Causes extra stress'],
      tips: ['Phone anxiety is real and valid', 'Start small - one uncomfortable call a week', 'It can get better with exposure', 'Many people share this struggle'],
    },
  },
};

export default testData;
