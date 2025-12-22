export const katalinuhanMathPhData = {
  id: 'katalinuhan-math-ph',
  title: 'Test ng Matematika',
  description: 'Sukatin ang iyong mathematical ability at numerical reasoning',
  questions: [
    {
      id: 1,
      question: 'Kung ang tindahan ay nagbebenta ng 3 itlog sa halagang P15, magkano ang 12 itlog?',
      options: [
        { type: 'A', text: 'P45' },
        { type: 'B', text: 'P60' },
        { type: 'C', text: 'P50' },
        { type: 'D', text: 'P55' }
      ]
    },
    {
      id: 2,
      question: 'Ano ang 15% ng 200?',
      options: [
        { type: 'A', text: '20' },
        { type: 'B', text: '25' },
        { type: 'C', text: '30' },
        { type: 'D', text: '35' }
      ]
    },
    {
      id: 3,
      question: 'Kung ang jeep fare ay P12 at sumakay ka ng 5 beses sa isang araw, magkano ang gastos mo?',
      options: [
        { type: 'A', text: 'P50' },
        { type: 'B', text: 'P55' },
        { type: 'C', text: 'P60' },
        { type: 'D', text: 'P65' }
      ]
    },
    {
      id: 4,
      question: 'Anong numero ang 2x + 5 = 15?',
      options: [
        { type: 'A', text: '3' },
        { type: 'B', text: '4' },
        { type: 'C', text: '5' },
        { type: 'D', text: '6' }
      ]
    },
    {
      id: 5,
      question: 'May P1,000 ka. Bumili ka ng pagkain worth P350 at pamasahe P150. Magkano ang natira?',
      options: [
        { type: 'A', text: 'P400' },
        { type: 'B', text: 'P450' },
        { type: 'C', text: 'P500' },
        { type: 'D', text: 'P550' }
      ]
    },
    {
      id: 6,
      question: 'Kung ang 1 kilo ng bigas ay P50, magkano ang 2.5 kilos?',
      options: [
        { type: 'A', text: 'P100' },
        { type: 'B', text: 'P115' },
        { type: 'C', text: 'P125' },
        { type: 'D', text: 'P150' }
      ]
    },
    {
      id: 7,
      question: 'Ano ang average ng 80, 85, 90?',
      options: [
        { type: 'A', text: '83' },
        { type: 'B', text: '85' },
        { type: 'C', text: '87' },
        { type: 'D', text: '88' }
      ]
    },
    {
      id: 8,
      question: 'Kung ang iyong sweldo ay P15,000 at tumaas ng 10%, ano na ang bago mong sweldo?',
      options: [
        { type: 'A', text: 'P16,000' },
        { type: 'B', text: 'P16,500' },
        { type: 'C', text: 'P17,000' },
        { type: 'D', text: 'P17,500' }
      ]
    },
    {
      id: 9,
      question: 'Ano ang square root ng 144?',
      options: [
        { type: 'A', text: '10' },
        { type: 'B', text: '11' },
        { type: 'C', text: '12' },
        { type: 'D', text: '13' }
      ]
    },
    {
      id: 10,
      question: 'Kung bumili ka ng item na P500 with 20% discount, magkano ang babayaran mo?',
      options: [
        { type: 'A', text: 'P350' },
        { type: 'B', text: 'P400' },
        { type: 'C', text: 'P450' },
        { type: 'D', text: 'P480' }
      ]
    },
    {
      id: 11,
      question: 'Ano ang product ng 12 x 15?',
      options: [
        { type: 'A', text: '160' },
        { type: 'B', text: '170' },
        { type: 'C', text: '180' },
        { type: 'D', text: '190' }
      ]
    },
    {
      id: 12,
      question: 'Kung may 24 na oras sa isang araw, ilang minuto iyon?',
      options: [
        { type: 'A', text: '1,200' },
        { type: 'B', text: '1,440' },
        { type: 'C', text: '1,480' },
        { type: 'D', text: '1,500' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Math Genius',
      description: 'Ikaw ay napakahusay sa matematika! Natural na calculator ang utak mo at mabilis kang mag-compute ng mga numero. Perfect ka sa accounting o engineering!'
    },
    B: {
      title: 'Math Expert',
      description: 'Mahusay ka sa math at comfortable ka sa numbers. Marunong kang mag-mental math at madali mo lang naiintindihan ang mga problema.'
    },
    C: {
      title: 'Average sa Math',
      description: 'Okay naman ang math skills mo. Kaya mo naman ang basic calculations, pero kailangan mo ng practice sa mas complicated problems.'
    },
    D: {
      title: 'Need Practice',
      description: 'Mahirap para sa iyo ang math, pero okay lang yan! Practice lang ng practice at mag-improve ka rin. Hindi lahat ay natural na math wizard.'
    }
  },
  calculateResult: (answers: string[]) => {
    const correctAnswers = ['B', 'C', 'C', 'C', 'C', 'C', 'B', 'B', 'C', 'B', 'C', 'B'];
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
