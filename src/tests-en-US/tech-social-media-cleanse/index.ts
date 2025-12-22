// Do You Need a Social Media Cleanse?
// Find out if it's time to log off for a while!

import { TestData } from '@/types';

const testData: TestData = {
  id: 'tech-social-media-cleanse',
  title: 'Do You Need a Social Media Cleanse?',
  description: 'Be honest with yourself - is it time to take a break from the timeline?',
  category: 'tech',
  emoji: '🧹',
  color: 'from-green-500 to-teal-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'How do you feel after 30 minutes of scrolling?',
      options: [
        { text: 'Fine, entertained, no big deal', type: 'A' },
        { text: 'A little drained but whatever', type: 'B' },
        { text: 'Anxious, comparing myself to everyone', type: 'C' },
        { text: 'Existential dread and self-loathing', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'You see a friend post about their amazing vacation. Your first thought:',
      options: [
        { text: 'Happy for them! Looks beautiful', type: 'A' },
        { text: 'Nice! *continues scrolling*', type: 'B' },
        { text: 'Why isn\'t MY life that exciting?', type: 'C' },
        { text: 'Spiraling into why I\'m such a failure', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'How often do you check social media?',
      options: [
        { text: 'A few times a day, intentionally', type: 'A' },
        { text: 'Whenever I\'m bored, pretty often', type: 'B' },
        { text: 'Constantly - it\'s always open', type: 'C' },
        { text: 'I don\'t even close the apps anymore', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'When you can\'t check your phone for a few hours:',
      options: [
        { text: 'Don\'t even notice, enjoying real life', type: 'A' },
        { text: 'Slightly curious what I missed', type: 'B' },
        { text: 'Anxious about missing something important', type: 'C' },
        { text: 'Full FOMO panic attack', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'How often do you compare yourself to people online?',
      options: [
        { text: 'Rarely - I know it\'s all curated', type: 'A' },
        { text: 'Sometimes, but I catch myself', type: 'B' },
        { text: 'More than I\'d like to admit', type: 'C' },
        { text: 'Every single scroll session', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your sleep schedule since joining social media:',
      options: [
        { text: 'Same as always - I put the phone away at night', type: 'A' },
        { text: 'Slightly worse, some late-night scrolling', type: 'B' },
        { text: 'Significantly worse, can\'t stop scrolling in bed', type: 'C' },
        { text: 'What is sleep? TikTok needs me.', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'How do you feel about your posting habits?',
      options: [
        { text: 'I post what I genuinely want to share', type: 'A' },
        { text: 'Sometimes overthink it but mostly authentic', type: 'B' },
        { text: 'Anxious about engagement and perception', type: 'C' },
        { text: 'My self-worth is tied to likes at this point', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'When you see drama/negative content online:',
      options: [
        { text: 'Scroll past, not my circus', type: 'A' },
        { text: 'Might read comments but don\'t engage', type: 'B' },
        { text: 'Fall down the rabbit hole for hours', type: 'C' },
        { text: 'Can\'t look away, it consumes my day', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Does social media affect your real-life relationships?',
      options: [
        { text: 'No, I maintain healthy boundaries', type: 'A' },
        { text: 'Occasionally a distraction but manageable', type: 'B' },
        { text: 'I\'m more connected online than IRL', type: 'C' },
        { text: 'What real-life relationships?', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Have you ever thought about quitting social media?',
      options: [
        { text: 'Not really, it\'s fine in moderation', type: 'A' },
        { text: 'Crossed my mind a few times', type: 'B' },
        { text: 'Constantly think about it but can\'t', type: 'C' },
        { text: 'Every day, but I\'m trapped', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'You\'re Fine, Actually',
      emoji: '😌',
      description: 'Congrats! You have a healthy relationship with social media. You use it as a tool for connection and entertainment without letting it control you. You\'re the unicorn that tech companies don\'t understand.',
      traits: ['Balanced', 'Self-aware', 'Healthy boundaries', 'Present'],
      strengths: ['Doesn\'t compare to others', 'Sleeps well', 'Actually lives life'],
      weaknesses: ['None related to social media tbh'],
      tips: ['Keep doing what you\'re doing', 'Help your friends learn balance', 'You\'re living the dream'],
    },
    B: {
      type: 'B',
      title: 'Light Cleanse Recommended',
      emoji: '🌱',
      description: 'You\'re mostly fine but there are some yellow flags. Maybe a weekend off would do you good? You\'re not addicted but you\'re on the border of "this is becoming a problem." A mini detox couldn\'t hurt.',
      traits: ['Somewhat dependent', 'Self-aware', 'Manageable', 'Could be better'],
      strengths: ['Recognizes when it\'s too much', 'Can put it down sometimes'],
      weaknesses: ['Occasionally loses hours scrolling', 'Some comparison tendencies'],
      tips: ['Try a weekend without apps', 'Set daily time limits', 'Delete apps from home screen'],
    },
    C: {
      type: 'C',
      title: 'Cleanse Urgently Needed',
      emoji: '⚠️',
      description: 'Okay, we need to talk. Social media is affecting your mental health, sleep, and self-esteem. The algorithm has you in a chokehold. A cleanse isn\'t optional at this point - it\'s self-care. Please log off.',
      traits: ['Dependent', 'Comparing constantly', 'Anxious', 'Sleep-deprived'],
      strengths: ['At least you\'re aware there\'s a problem'],
      weaknesses: ['FOMO is real', 'Self-worth tied to engagement', 'Doom scrolling daily'],
      tips: ['Delete apps for a week minimum', 'Turn off all notifications', 'Seek real-life connections', 'Talk to someone about it'],
    },
    D: {
      type: 'D',
      title: 'Emergency Digital Detox Required',
      emoji: '🆘',
      description: 'This is your sign. Your wake-up call. An intervention in quiz form. Social media has become harmful to your wellbeing and you know it. Please, for your own sake, take a serious break. Your mental health is begging.',
      traits: ['Addicted', 'Anxious', 'Depressed', 'Isolated'],
      strengths: ['Still breathing and took this quiz'],
      weaknesses: ['Everything social media related', 'Lost sense of reality', 'Mental health suffering'],
      tips: ['Delete everything for at least 30 days', 'Consider professional help', 'Replace scrolling with literally anything else', 'This is serious - please take care of yourself'],
    },
  },
};

export default testData;
