export const filipinotimeData = {
  id: 'filipino-time',
  title: 'Gaano Ka Sa Filipino Time?',
  description: 'Sukatin ang punctuality mo',
  questions: [
    {
      id: 1,
      question: 'Sa sitwasyong mahirap, ano ginagawa mo?',
      options: [
        { type: 'A', text: 'Madiskarte! May solusyon agad' },
        { type: 'B', text: 'Nag-iisip ng paraan' },
        { type: 'C', text: 'Hingi ng tulong' },
        { type: 'D', text: 'Bahala na mentality' }
      ]
    },
    {
      id: 2,
      question: 'Paano ka sa challenges?',
      options: [
        { type: 'A', text: 'Bring it on! Ready ako' },
        { type: 'B', text: 'Kaya naman' },
        { type: 'C', text: 'Kinakabahan pero try' },
        { type: 'D', text: 'Iwas sa hassle' }
      ]
    },
    {
      id: 3,
      question: 'Anong approach mo sa buhay?',
      options: [
        { type: 'A', text: 'Aggressive! Go-getter' },
        { type: 'B', text: 'Balanced! Strategic' },
        { type: 'C', text: 'Passive! Chill lang' },
        { type: 'D', text: 'Bahala na si Batman' }
      ]
    },
    {
      id: 4,
      question: 'Sa pagharap ng problema:',
      options: [
        { type: 'A', text: 'Head on! Diretso' },
        { type: 'B', text: 'Think first bago action' },
        { type: 'C', text: 'Slowly pero surely' },
        { type: 'D', text: 'Iniiwasan' }
      ]
    },
    {
      id: 5,
      question: 'Gaano ka ka-flexible?',
      options: [
        { type: 'A', text: 'Super flexible! Adaptive' },
        { type: 'B', text: 'Okay naman, nakaka-adjust' },
        { type: 'C', text: 'Mahirap pero kaya' },
        { type: 'D', text: 'Mahirap ako mag-adjust' }
      ]
    },
    {
      id: 6,
      question: 'Sa innovation at creativity:',
      options: [
        { type: 'A', text: 'Inventor! May idea lagi' },
        { type: 'B', text: 'Creative naman' },
        { type: 'C', text: 'Limited creativity' },
        { type: 'D', text: 'Traditional lang ako' }
      ]
    },
    {
      id: 7,
      question: 'Paano ka mag-handle ng stress?',
      options: [
        { type: 'A', text: 'Thriving under pressure!' },
        { type: 'B', text: 'Kaya naman manage' },
        { type: 'C', text: 'Nahihirapan pero okay' },
        { type: 'D', text: 'Takot sa stress' }
      ]
    },
    {
      id: 8,
      question: 'Sa decision making:',
      options: [
        { type: 'A', text: 'Decisive! Mabilis' },
        { type: 'B', text: 'Careful pero decided' },
        { type: 'C', text: 'Slow to decide' },
        { type: 'D', text: 'Indecisive' }
      ]
    },
    {
      id: 9,
      question: 'Anong energy level mo?',
      options: [
        { type: 'A', text: 'High energy lagi!' },
        { type: 'B', text: 'Medium energy' },
        { type: 'C', text: 'Low energy pero okay' },
        { type: 'D', text: 'Tamad mode' }
      ]
    },
    {
      id: 10,
      question: 'Sa pagtulong sa iba:',
      options: [
        { type: 'A', text: 'Always willing! Generous' },
        { type: 'B', text: 'Tumutulong pag kaya' },
        { type: 'C', text: 'Selectively tumutulong' },
        { type: 'D', text: 'Sarili muna' }
      ]
    },
    {
      id: 11,
      question: 'Paano ka sa goals?',
      options: [
        { type: 'A', text: 'Driven! Goal-oriented' },
        { type: 'B', text: 'May goals at plan' },
        { type: 'C', text: 'Vague lang ang goals' },
        { type: 'D', text: 'Go with the flow' }
      ]
    },
    {
      id: 12,
      question: 'Overall personality:',
      options: [
        { type: 'A', text: 'Alpha! Leader type' },
        { type: 'B', text: 'Balanced! Steady' },
        { type: 'C', text: 'Chill! Relaxed' },
        { type: 'D', text: 'Easy-going! Carefree' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Ang Madiskarte',
      description: 'Sobrang galing mo sa diskarte! Natural problem solver ka at mabilis mag-isip ng solusyon. Strong personality mo at leader ka. You thrive in challenges!'
    },
    B: {
      title: 'Ang Matalino',
      description: 'Balanced at strategic ka! Hindi ka nagmamadali pero may plano ka lagi. Smart ang approach mo sa buhay. You think before you act!'
    },
    C: {
      title: 'Ang Tahimik',
      description: 'Chill at low-key ka! Hindi ka aggressive pero kaya mo naman. Slow and steady wins the race ang motto mo. You prefer peace over chaos!'
    },
    D: {
      title: 'Ang Relaxed',
      description: 'Super chill mo! Bahala na mentality mo pero okay lang yan. Hindi ka stress at peaceful ang buhay mo. You live life simply!'
    }
  },
  calculateResult: (answers: string[]) => {
    const counts = { A: 0, B: 0, C: 0, D: 0 };
    answers.forEach(answer => counts[answer as keyof typeof counts]++);
    const max = Math.max(counts.A, counts.B, counts.C, counts.D);
    if (counts.A === max) return 'A';
    if (counts.B === max) return 'B';
    if (counts.C === max) return 'C';
    return 'D';
  }
};
