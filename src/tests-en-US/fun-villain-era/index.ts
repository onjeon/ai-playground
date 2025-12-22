// Are You in Your Villain Era?
// Find out if you've embraced your inner villain

import { TestData } from '@/types';

const testData: TestData = {
  id: 'fun-villain-era',
  title: 'Are You in Your Villain Era?',
  description: 'Have you stopped people-pleasing and started putting yourself first? Or are you still too nice? Discover where you fall on the villain era spectrum.',
  category: 'fun',
  emoji: '😈',
  color: 'from-purple-600 to-black',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Someone asks you to do a favor you really don\'t want to do:',
      options: [
        { text: '"No." (no explanation needed)', type: 'A' },
        { text: '"Sorry, I can\'t right now" with a white lie', type: 'B' },
        { text: 'Say yes but resent them silently', type: 'C' },
        { text: 'Drop everything to help them', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your ex reaches out after months of silence:',
      options: [
        { text: 'Leave them on read forever', type: 'A' },
        { text: 'Polite but short response, then nothing', type: 'B' },
        { text: 'Reply eventually because it feels rude not to', type: 'C' },
        { text: 'Immediately respond and catch up', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Someone makes a rude comment about you:',
      options: [
        { text: 'Clap back immediately with something devastating', type: 'A' },
        { text: 'Note it mentally and adjust the relationship accordingly', type: 'B' },
        { text: 'Feel hurt but say nothing', type: 'C' },
        { text: 'Assume they didn\'t mean it and let it go', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your approach to setting boundaries:',
      options: [
        { text: 'Crystal clear, non-negotiable, enforced immediately', type: 'A' },
        { text: 'I set them but sometimes feel guilty', type: 'B' },
        { text: 'I try but often cave when pushed', type: 'C' },
        { text: 'Boundaries? I don\'t want to seem difficult', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'A friend keeps canceling plans last minute:',
      options: [
        { text: 'Stop inviting them - their loss', type: 'A' },
        { text: 'Call them out directly and set expectations', type: 'B' },
        { text: 'Get annoyed but keep making plans anyway', type: 'C' },
        { text: '"It\'s okay!" (while definitely not okay)', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your response to "we need to talk":',
      options: [
        { text: '"About what?" - not stressing until I know', type: 'A' },
        { text: 'Slightly anxious but confident I can handle it', type: 'B' },
        { text: 'Spiral a little, apologize preemptively', type: 'C' },
        { text: 'Full panic mode, assume the worst', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Someone takes credit for your work:',
      options: [
        { text: 'Correct the record publicly and professionally', type: 'A' },
        { text: 'Address it privately but firmly', type: 'B' },
        { text: 'Feel wronged but probably let it slide', type: 'C' },
        { text: 'Maybe I\'m overreacting, they probably forgot', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your thoughts on revenge (petty or otherwise):',
      options: [
        { text: 'Living well IS my revenge, and they\'ll see it', type: 'A' },
        { text: 'Not worth my energy, but karma exists', type: 'B' },
        { text: 'I fantasize about it but never act', type: 'C' },
        { text: 'I could never - I\'d feel too guilty', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'You realize a friendship is one-sided:',
      options: [
        { text: 'Stop putting in effort immediately', type: 'A' },
        { text: 'Gradually pull back and see if they notice', type: 'B' },
        { text: 'Keep trying because friendships take work', type: 'C' },
        { text: 'Blame yourself for not being a good enough friend', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your personal motto right now:',
      options: [
        { text: '"I\'m the main character and this is MY story"', type: 'A' },
        { text: '"Protect my peace at all costs"', type: 'B' },
        { text: '"Be kind but also stand up for yourself... sometimes"', type: 'C' },
        { text: '"Be nice to everyone, always"', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Full Villain Era Activated',
      emoji: '👑',
      description: 'You\'ve stopped apologizing for existing and started demanding what you deserve. Boundaries are iron-clad, energy is protected, and people-pleasing is DEAD. You\'re not actually a villain - you\'re just done being everyone\'s doormat.',
      traits: ['Unapologetic', 'Confident', 'Self-prioritizing', 'Direct'],
      strengths: ['No one takes advantage of you', 'Clear communication', 'Self-respect is thriving', 'Inspire others to do the same'],
      weaknesses: ['Might come across as cold', 'Could miss genuine connections', 'Balance is key'],
      tips: ['Stay confident but stay kind', 'Not everyone is out to get you', 'Your villain era served its purpose'],
    },
    B: {
      type: 'B',
      title: 'Villain Era in Progress',
      emoji: '😏',
      description: 'You\'re learning to put yourself first but haven\'t fully shed the nice person guilt. You set boundaries but sometimes feel bad about it. You\'re in your growth era - villain origin story actively loading.',
      traits: ['Growing', 'Balanced', 'Learning boundaries', 'Evolving'],
      strengths: ['Finding your voice', 'Healthy self-awareness', 'Can be firm AND kind', 'Making progress'],
      weaknesses: ['Guilt still creeps in', 'Might backslide occasionally', 'Still learning'],
      tips: ['Guilt means you\'re human, not wrong', 'Keep practicing boundaries', 'You\'re doing great'],
    },
    C: {
      type: 'C',
      title: 'Pre-Villain Era',
      emoji: '🤔',
      description: 'You know you should stand up for yourself more, but actually doing it? That\'s hard. You\'re aware of the need for change but still defaulting to people-pleasing. Your villain era is coming - you can feel it brewing.',
      traits: ['Self-aware', 'Conflict-avoidant', 'Wanting change', 'On the verge'],
      strengths: ['Kind-hearted', 'Good at maintaining peace', 'Recognizes the problem', 'Ready for growth'],
      weaknesses: ['Gets taken advantage of', 'Resentment builds up', 'Avoids necessary conflict'],
      tips: ['Start small - one boundary at a time', 'Your needs matter equally', 'The discomfort is worth it'],
    },
    D: {
      type: 'D',
      title: 'Hero Era (Maybe Too Nice)',
      emoji: '🥺',
      description: 'You\'re genuinely kind but possibly at your own expense. Saying no feels impossible, conflict is terrifying, and you\'d rather suffer than inconvenience someone. Your villain era hasn\'t started yet - but maybe it should?',
      traits: ['Kind', 'Self-sacrificing', 'Conflict-avoidant', 'People-pleasing'],
      strengths: ['Everyone loves you', 'Keeps the peace', 'Genuinely caring', 'Empathetic'],
      weaknesses: ['Burns out constantly', 'Gets walked over', 'Loses yourself helping others'],
      tips: ['Being nice shouldn\'t cost you everything', 'Start your villain era - just a small one', 'You deserve your own kindness too'],
    },
  },
};

export default testData;
