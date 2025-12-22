// What's Your Aura Color?
// Discover the color of your energy!

import { TestData } from '@/types';

const testData: TestData = {
  id: 'random-aura-color',
  title: 'What\'s Your Aura Color?',
  description: 'Everyone has an energy field! What color is YOUR aura radiating right now?',
  category: 'random',
  emoji: '✨',
  color: 'from-violet-500 to-purple-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'What energy do people feel from you?',
      options: [
        { text: 'Calm, peaceful, healing presence', type: 'A' },
        { text: 'Warm, loving, nurturing vibes', type: 'B' },
        { text: 'Bright, creative, inspiring energy', type: 'C' },
        { text: 'Powerful, grounded, protective force', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'In a room full of people, you naturally:',
      options: [
        { text: 'Create a sense of peace and calm', type: 'A' },
        { text: 'Make people feel loved and welcomed', type: 'B' },
        { text: 'Bring excitement and creative spark', type: 'C' },
        { text: 'Command attention and respect', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your intuitive strength:',
      options: [
        { text: 'Sensing what others need emotionally', type: 'A' },
        { text: 'Feeling love and connection deeply', type: 'B' },
        { text: 'Seeing possibilities and potential', type: 'C' },
        { text: 'Reading situations and energy shifts', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'What draws people to you?',
      options: [
        { text: 'My ability to help them feel at peace', type: 'A' },
        { text: 'My warmth and unconditional acceptance', type: 'B' },
        { text: 'My ideas and creative energy', type: 'C' },
        { text: 'My strength and groundedness', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'When you\'re at your best, you feel:',
      options: [
        { text: 'Serene, balanced, spiritually connected', type: 'A' },
        { text: 'Loving, open-hearted, compassionate', type: 'B' },
        { text: 'Alive, inspired, full of ideas', type: 'C' },
        { text: 'Powerful, stable, unshakeable', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your healing gift:',
      options: [
        { text: 'Bringing calm to chaos', type: 'A' },
        { text: 'Loving people through their pain', type: 'B' },
        { text: 'Helping others see new possibilities', type: 'C' },
        { text: 'Grounding and protecting others', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Nature element that resonates with you:',
      options: [
        { text: 'Water - flowing, deep, cleansing', type: 'A' },
        { text: 'Air - soft, gentle, life-giving', type: 'B' },
        { text: 'Fire - bright, warm, transformative', type: 'C' },
        { text: 'Earth - solid, reliable, nurturing', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'When stressed, your energy shifts to:',
      options: [
        { text: 'Withdrawn, needing solitude to recharge', type: 'A' },
        { text: 'Giving too much, depleting myself', type: 'B' },
        { text: 'Scattered, too many ideas at once', type: 'C' },
        { text: 'Heavy, carrying too much weight', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your life purpose feels connected to:',
      options: [
        { text: 'Spiritual growth and inner peace', type: 'A' },
        { text: 'Love, relationships, and heart healing', type: 'B' },
        { text: 'Creation, expression, and inspiration', type: 'C' },
        { text: 'Building, protecting, and leading', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'The energy you want to radiate:',
      options: [
        { text: 'Tranquil, wise, spiritually elevated', type: 'A' },
        { text: 'Loving, warm, heart-centered', type: 'B' },
        { text: 'Vibrant, creative, magnetic', type: 'C' },
        { text: 'Strong, grounded, safe', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Blue Aura',
      emoji: '💙',
      description: 'Your aura glows a beautiful, serene BLUE. You\'re a natural healer and peace-bringer. Your energy is calming, wise, and spiritually connected. People feel safe around you, and you have deep intuitive abilities.',
      traits: ['Peaceful', 'Intuitive', 'Healing', 'Spiritually connected'],
      strengths: ['Natural healer', 'Creates calm', 'Deep wisdom', 'Strong intuition'],
      weaknesses: ['May withdraw too much', 'Can absorb others\' emotions'],
      tips: ['Protect your energy', 'Your peace is your power', 'Ground yourself in nature'],
    },
    B: {
      type: 'B',
      title: 'Pink Aura',
      emoji: '💗',
      description: 'Your aura radiates a warm, loving PINK. You\'re heart-centered, compassionate, and full of unconditional love. People feel loved and accepted around you. Your energy heals through pure love.',
      traits: ['Loving', 'Compassionate', 'Nurturing', 'Heart-centered'],
      strengths: ['Unconditional love', 'Makes others feel valued', 'Deep emotional connection'],
      weaknesses: ['May give too much', 'Boundaries needed'],
      tips: ['Love yourself first', 'Your heart is huge - protect it', 'Receiving is also love'],
    },
    C: {
      type: 'C',
      title: 'Yellow Aura',
      emoji: '💛',
      description: 'Your aura shines a brilliant, vibrant YELLOW. You\'re creative, inspiring, and full of light. Your energy lifts people up and sparks ideas. You bring sunshine wherever you go.',
      traits: ['Creative', 'Inspiring', 'Optimistic', 'Magnetic'],
      strengths: ['Lights up any room', 'Endless ideas', 'Brings joy', 'Natural inspirer'],
      weaknesses: ['Energy can scatter', 'May burn bright then crash'],
      tips: ['Channel your light', 'Your creativity needs focus', 'Rest to keep shining'],
    },
    D: {
      type: 'D',
      title: 'Red Aura',
      emoji: '❤️',
      description: 'Your aura pulses a powerful, grounded RED. You\'re strong, stable, and protective. Your energy is about power, survival, and being fully present in the physical world. People feel safe and protected around you.',
      traits: ['Powerful', 'Grounded', 'Protective', 'Physical'],
      strengths: ['Creates safety', 'Strong boundaries', 'Leads naturally', 'Fiercely loyal'],
      weaknesses: ['May carry too much', 'Can block vulnerability'],
      tips: ['Your strength is a gift', 'Let others help you too', 'Ground yourself in earth'],
    },
  },
};

export default testData;
