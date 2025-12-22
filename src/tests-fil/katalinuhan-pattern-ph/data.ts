export const katalinuhanPatternPhData = {
  id: 'katalinuhan-pattern-ph',
  title: 'Test ng Pattern Recognition',
  description: 'Sukatin ang iyong kakayahan sa pag-recognize ng patterns at sequences',
  questions: [
    {
      id: 1,
      question: 'Anong susunod: Lunes, Miyerkules, Biyernes, ___?',
      options: [
        { type: 'A', text: 'Sabado' },
        { type: 'B', text: 'Linggo' },
        { type: 'C', text: 'Martes' },
        { type: 'D', text: 'Huwebes' }
      ]
    },
    {
      id: 2,
      question: 'Pattern: 🌞 🌙 🌞 🌙 🌞 ___',
      options: [
        { type: 'A', text: '🌞' },
        { type: 'B', text: '🌙' },
        { type: 'C', text: '⭐' },
        { type: 'D', text: '☁️' }
      ]
    },
    {
      id: 3,
      question: 'Anong numero ang susunod: 5, 10, 20, 40, ___?',
      options: [
        { type: 'A', text: '60' },
        { type: 'B', text: '80' },
        { type: 'C', text: '100' },
        { type: 'D', text: '70' }
      ]
    },
    {
      id: 4,
      question: 'Letra pattern: A, C, F, J, ___?',
      options: [
        { type: 'A', text: 'M' },
        { type: 'B', text: 'N' },
        { type: 'C', text: 'O' },
        { type: 'D', text: 'P' }
      ]
    },
    {
      id: 5,
      question: 'Anong shape ang naiiba: ○ △ □ ○ △ ○',
      options: [
        { type: 'A', text: 'May pattern na alternating' },
        { type: 'B', text: 'Walang pattern' },
        { type: 'C', text: 'Square ang naiiba' },
        { type: 'D', text: 'Lahat ay pareho' }
      ]
    },
    {
      id: 6,
      question: 'Sequence: 1, 1, 2, 3, 5, 8, ___? (Fibonacci)',
      options: [
        { type: 'A', text: '11' },
        { type: 'B', text: '12' },
        { type: 'C', text: '13' },
        { type: 'D', text: '14' }
      ]
    },
    {
      id: 7,
      question: 'Anong pattern: RED, YELLOW, BLUE, RED, YELLOW, ___?',
      options: [
        { type: 'A', text: 'RED' },
        { type: 'B', text: 'BLUE' },
        { type: 'C', text: 'YELLOW' },
        { type: 'D', text: 'GREEN' }
      ]
    },
    {
      id: 8,
      question: 'Number pattern: 100, 90, 81, 73, ___?',
      options: [
        { type: 'A', text: '65' },
        { type: 'B', text: '66' },
        { type: 'C', text: '67' },
        { type: 'D', text: '68' }
      ]
    },
    {
      id: 9,
      question: 'Anong susunod: JAN, MAR, MAY, ___?',
      options: [
        { type: 'A', text: 'JUN' },
        { type: 'B', text: 'JUL' },
        { type: 'C', text: 'AUG' },
        { type: 'D', text: 'SEP' }
      ]
    },
    {
      id: 10,
      question: 'Pattern: 2, 6, 12, 20, 30, ___?',
      options: [
        { type: 'A', text: '40' },
        { type: 'B', text: '42' },
        { type: 'C', text: '44' },
        { type: 'D', text: '46' }
      ]
    },
    {
      id: 11,
      question: 'Letra: Z, Y, X, W, ___?',
      options: [
        { type: 'A', text: 'U' },
        { type: 'B', text: 'V' },
        { type: 'C', text: 'T' },
        { type: 'D', text: 'S' }
      ]
    },
    {
      id: 12,
      question: 'Time pattern: 1:00, 2:30, 4:00, 5:30, ___?',
      options: [
        { type: 'A', text: '6:00' },
        { type: 'B', text: '6:30' },
        { type: 'C', text: '7:00' },
        { type: 'D', text: '7:30' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Pattern Master',
      description: 'Sobrang husay mo sa pag-recognize ng patterns! Napakatalino mo at madali mong nakikita ang mga pattern na hindi makita ng iba. Perfect ka sa analytics!'
    },
    B: {
      title: 'Pattern Expert',
      description: 'Mahusay ka sa pattern recognition! Mabilis mong nahahanap ang logic at sequence ng mga bagay. Analytical ang utak mo.'
    },
    C: {
      title: 'Average Pattern Skills',
      description: 'Okay naman ang pattern recognition skills mo. May mga pattern na nakikita mo agad, pero may iba na kailangan ng konting tulong.'
    },
    D: {
      title: 'Creative Thinker',
      description: 'Hindi mo masyadong priority ang mga pattern. Mas creative ka at mas gusto mo ng spontaneity kaysa predictable patterns.'
    }
  },
  calculateResult: (answers: string[]) => {
    const correctAnswers = ['B', 'B', 'B', 'C', 'C', 'C', 'B', 'B', 'B', 'B', 'B', 'C'];
    let score = 0;
    answers.forEach((answer, index) => {
      if (answer === correctAnswers[index]) score++;
    });
    
    if (score >= 10) return 'A';
    if (score >= 7) return 'B';
    if (score >= 4) return 'C';
    return 'D';
  }
};
