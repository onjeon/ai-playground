// Are You a Stress Eater?
// What's your relationship with food when stressed?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'health-stress-eater',
  title: 'Are You a Stress Eater?',
  description: 'Does stress send you straight to the fridge? Let\'s explore your eating patterns!',
  category: 'health',
  emoji: '🍕',
  color: 'from-amber-500 to-orange-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'After a stressful day, you:',
      options: [
        { text: 'Eat my normal meals, stress doesn\'t affect appetite', type: 'A' },
        { text: 'Might have a small treat but nothing crazy', type: 'B' },
        { text: 'Definitely reaching for comfort food', type: 'C' },
        { text: 'Eating everything in sight', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'When anxious or worried:',
      options: [
        { text: 'Actually lose my appetite', type: 'A' },
        { text: 'Eat about the same as usual', type: 'B' },
        { text: 'Find myself snacking more', type: 'C' },
        { text: 'Can\'t stop eating, it soothes me', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your relationship with "comfort food":',
      options: [
        { text: 'Food is fuel, not comfort', type: 'A' },
        { text: 'Enjoy it sometimes, in moderation', type: 'B' },
        { text: 'Definitely use food for emotional comfort', type: 'C' },
        { text: 'My main coping mechanism honestly', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Late night eating:',
      options: [
        { text: 'Don\'t eat late, kitchen is closed after dinner', type: 'A' },
        { text: 'Occasional snack but not often', type: 'B' },
        { text: 'Often find myself snacking at night', type: 'C' },
        { text: 'Night is prime eating time for me', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'When bored, you:',
      options: [
        { text: 'Find something to do, eating doesn\'t occur to me', type: 'A' },
        { text: 'Might grab a snack while figuring out what to do', type: 'B' },
        { text: 'Definitely eat when bored', type: 'C' },
        { text: 'Boredom eating is basically a hobby', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'How aware are you of why you\'re eating?',
      options: [
        { text: 'Always eat intentionally when hungry', type: 'A' },
        { text: 'Usually aware, sometimes mindless', type: 'B' },
        { text: 'Often catch myself eating without thinking', type: 'C' },
        { text: 'Barely notice until I\'ve finished', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'After an argument or conflict:',
      options: [
        { text: 'Food is the last thing on my mind', type: 'A' },
        { text: 'Might eat normally, no major change', type: 'B' },
        { text: 'Could definitely use some comfort food', type: 'C' },
        { text: 'Ice cream (the whole pint) here I come', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'How often do you eat past fullness?',
      options: [
        { text: 'Stop when satisfied, pretty tuned in', type: 'A' },
        { text: 'Sometimes overeat at special occasions', type: 'B' },
        { text: 'Regularly eat until uncomfortable', type: 'C' },
        { text: 'Fullness? I eat through that signal', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your emotional state affects your eating:',
      options: [
        { text: 'Barely - I eat based on hunger, not feelings', type: 'A' },
        { text: 'Slightly - might eat a bit more when stressed', type: 'B' },
        { text: 'Significantly - emotions drive eating', type: 'C' },
        { text: 'Completely - food is how I process feelings', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'How do you feel after emotional eating?',
      options: [
        { text: 'I don\'t emotionally eat, so N/A', type: 'A' },
        { text: 'Fine, it\'s occasional and harmless', type: 'B' },
        { text: 'Guilty but it happens anyway', type: 'C' },
        { text: 'Shame spiral, eat more to cope with that too', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Intuitive Eater',
      emoji: '🥗',
      description: 'You eat when you\'re hungry, stop when you\'re full, and emotions don\'t send you to the fridge. Food is fuel for you, not a coping mechanism. You have what nutritionists dream about - a genuinely healthy relationship with food.',
      traits: ['Mindful', 'In tune with hunger', 'Healthy relationship', 'Emotionally balanced'],
      strengths: ['No emotional eating', 'Clear hunger signals', 'Healthy habits'],
      weaknesses: ['Might not understand others\' struggles'],
      tips: ['You\'re doing great', 'Maintain this awareness', 'Share your wisdom gently'],
    },
    B: {
      type: 'B',
      title: 'Mostly Mindful',
      emoji: '🍎',
      description: 'You\'re human! Occasional comfort eating happens, but it\'s not your main coping strategy. You generally eat mindfully with some slip-ups during stressful times. This is a healthy, normal relationship with food.',
      traits: ['Balanced', 'Human', 'Mostly aware', 'Reasonable'],
      strengths: ['Not controlled by emotional eating', 'Good awareness'],
      weaknesses: ['Occasional stress eating'],
      tips: ['You\'re in a good place', 'Notice when stress affects eating', 'Have non-food coping tools ready'],
    },
    C: {
      type: 'C',
      title: 'Stress Snacker',
      emoji: '🍪',
      description: 'Let\'s be real - stress, boredom, sadness... they all lead to eating for you. Food has become a go-to comfort mechanism. You\'re aware it happens but struggle to stop. The snack drawer knows your stress schedule.',
      traits: ['Emotional eater', 'Comfort-seeking', 'Stress-triggered', 'Aware but struggling'],
      strengths: ['Self-aware about the pattern'],
      weaknesses: ['Using food to cope', 'Eating past fullness', 'Guilt cycle'],
      tips: ['Find other coping mechanisms', 'Pause before eating and ask why', 'Self-compassion matters', 'Consider talking to someone'],
    },
    D: {
      type: 'D',
      title: 'Emotional Eater',
      emoji: '🍦',
      description: 'Food is your primary coping mechanism for... everything. Stress, sadness, boredom, anxiety - they all lead to eating. It\'s a cycle that\'s hard to break and often comes with guilt. This pattern deserves attention and care.',
      traits: ['Dependent on food for comfort', 'Emotional regulation through eating', 'Caught in a cycle', 'Needs support'],
      strengths: ['Honest about the struggle'],
      weaknesses: ['Food is the main coping tool', 'Guilt/shame cycle', 'Potentially harmful pattern'],
      tips: ['This is common and treatable', 'Consider professional support', 'Underlying emotions need addressing', 'You deserve help with this'],
    },
  },
};

export default testData;
