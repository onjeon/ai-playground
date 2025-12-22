// Your Role in the Friend Group
// What archetype are you in your squad?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'social-friend-group-role',
  title: 'Your Role in the Friend Group',
  description: 'Every friend group has the planner, the chaos agent, the therapist, and more. Which one are you? Find out your official role.',
  category: 'social',
  emoji: '👥',
  color: 'from-blue-500 to-indigo-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'The group chat is making plans. You:',
      options: [
        { text: 'Take charge - send dates, times, reservations', type: 'A' },
        { text: 'Offer suggestions but let others decide', type: 'B' },
        { text: 'React with emojis and say "down for whatever"', type: 'C' },
        { text: 'Miss the planning, show up confused but present', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'A friend is going through something tough:',
      options: [
        { text: 'Organize support - check-ins, help, solutions', type: 'A' },
        { text: 'Deep listening, emotional support, validation', type: 'B' },
        { text: 'Lighten the mood, distraction, make them laugh', type: 'C' },
        { text: 'Show up with snacks and presence', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'There\'s drama in the friend group:',
      options: [
        { text: 'I mediate and try to solve it', type: 'A' },
        { text: 'I listen to everyone, help them understand each other', type: 'B' },
        { text: 'I stay out of it or make jokes to defuse', type: 'C' },
        { text: 'Wait, there\'s drama? What happened?', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'When the group hangs out, you\'re usually:',
      options: [
        { text: 'Making sure everything runs smoothly', type: 'A' },
        { text: 'Having deep conversations with one or two people', type: 'B' },
        { text: 'Making everyone laugh, keeping things fun', type: 'C' },
        { text: 'Just happy to be there, going with the flow', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your friends would call you for:',
      options: [
        { text: 'Advice, recommendations, getting things done', type: 'A' },
        { text: 'Emotional support, to vent, to process feelings', type: 'B' },
        { text: 'A fun time, laughs, spontaneous adventures', type: 'C' },
        { text: 'Hanging out, company, chill vibes', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'In group photos, you\'re typically:',
      options: [
        { text: 'The one taking the photo or organizing the pose', type: 'A' },
        { text: 'Genuinely smiling, arm around someone', type: 'B' },
        { text: 'Making a funny face or doing something chaotic', type: 'C' },
        { text: 'Just in there somewhere, slightly surprised', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your role in group decisions:',
      options: [
        { text: 'Final decider - someone has to pick', type: 'A' },
        { text: 'Make sure everyone\'s voice is heard', type: 'B' },
        { text: 'Throw in wild suggestions, keep it fun', type: 'C' },
        { text: 'Whatever everyone else wants is fine', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'When someone new joins the friend group:',
      options: [
        { text: 'Brief them on group dynamics and inside jokes', type: 'A' },
        { text: 'Make sure they feel welcome and included', type: 'B' },
        { text: 'Immediately adopt them as my new best friend', type: 'C' },
        { text: 'Observe quietly, warm up over time', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your contribution to the friend group vibe:',
      options: [
        { text: 'Structure, reliability, making things happen', type: 'A' },
        { text: 'Emotional depth, meaningful connections', type: 'B' },
        { text: 'Energy, laughs, chaotic good vibes', type: 'C' },
        { text: 'Steady presence, no drama, calm energy', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'If your friend group was a team, you\'d be:',
      options: [
        { text: 'The captain or manager', type: 'A' },
        { text: 'The heart or emotional core', type: 'B' },
        { text: 'The wildcard or mascot', type: 'C' },
        { text: 'The reliable teammate who shows up', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Mom Friend / Planner',
      emoji: '📋',
      description: 'You hold things together. Reservations, schedules, reminders, and making sure everyone\'s okay - that\'s your territory. Without you, the group would never do anything because no one would plan it.',
      traits: ['Organized', 'Responsible', 'Caring', 'Reliable'],
      strengths: ['Group functions because of you', 'Always has the plan', 'Takes care of details', 'Natural leader'],
      weaknesses: ['Can take on too much', 'Might feel unappreciated', 'Need to let others step up'],
      tips: ['Delegate sometimes', 'Your effort is noticed', 'Let someone else plan occasionally'],
    },
    B: {
      type: 'B',
      title: 'The Therapist Friend',
      emoji: '💝',
      description: 'You\'re the emotional anchor of the group. Everyone comes to you to process, vent, and feel heard. Your emotional intelligence holds the group together in ways that aren\'t always visible but are always felt.',
      traits: ['Empathetic', 'Good listener', 'Wise', 'Supportive'],
      strengths: ['Everyone trusts you', 'Creates emotional safety', 'Gives great advice', 'Holds space'],
      weaknesses: ['Can be emotionally drained', 'Others lean on you heavily', 'Who supports you?'],
      tips: ['Set boundaries with your energy', 'You deserve support too', 'Your empathy is a gift'],
    },
    C: {
      type: 'C',
      title: 'The Chaos Agent / Hype',
      emoji: '🎪',
      description: 'You\'re the fun one. The spontaneous ideas, the jokes, the energy that makes hanging out actually entertaining. When things get too serious, you break the tension. Every group needs a you.',
      traits: ['Fun', 'Spontaneous', 'Energetic', 'Memorable'],
      strengths: ['Makes everything more fun', 'Lifts the mood', 'Creates memories', 'Good vibes only'],
      weaknesses: ['Might avoid serious moments', 'Can be too much sometimes', 'Depth is also important'],
      tips: ['Serious conversations matter too', 'Your energy is valued', 'Balance chaos with depth'],
    },
    D: {
      type: 'D',
      title: 'The Steady Presence',
      emoji: '🌿',
      description: 'You\'re the chill one who\'s always there. No drama, no fuss, just reliable presence. You might not be the loudest but your steady energy is essential. The group feels complete when you\'re there.',
      traits: ['Calm', 'Reliable', 'Low-maintenance', 'Present'],
      strengths: ['Drama-free zone', 'Always shows up', 'Calming presence', 'Easy to be around'],
      weaknesses: ['Might be overlooked', 'Could speak up more', 'Voice matters too'],
      tips: ['Your presence is valued', 'Share your opinions more', 'Steady doesn\'t mean invisible'],
    },
  },
};

export default testData;
