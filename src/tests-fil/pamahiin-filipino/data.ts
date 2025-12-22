export const pamahinFilipinoData = {
  id: 'pamahiin-filipino',
  title: 'Gaano Ka Ka-Superstitious?',
  description: 'Alamin kung gaano ka naniniwala sa Filipino superstitions',
  questions: [
    {
      id: 1,
      question: 'Pag umuwi ka galing libing:',
      options: [
        { type: 'A', text: 'Pagpag muna! Hindi diretso' },
        { type: 'B', text: 'Just in case, sumunod na rin' },
        { type: 'C', text: 'Minsan lang, pag naalala' },
        { type: 'D', text: 'Hindi ko ginagawa, hindi totoo' }
      ]
    },
    {
      id: 2,
      question: 'Pag may pusang itim na tumatawid:',
      options: [
        { type: 'A', text: 'Bawal! Ibang daan ako' },
        { type: 'B', text: 'Nag-iisip pero tatawid pa rin' },
        { type: 'C', text: 'Cute lang ng pusa!' },
        { type: 'D', text: 'Walang pakialam' }
      ]
    },
    {
      id: 3,
      question: 'Pag Friday the 13th:',
      options: [
        { type: 'A', text: 'Extra careful! Malas talaga' },
        { type: 'B', text: 'Aware pero normal day lang' },
        { type: 'C', text: 'Alam ko pero di ko iniisip' },
        { type: 'D', text: 'Ano meron?' }
      ]
    },
    {
      id: 4,
      question: 'Pag buntis ang kasama:',
      options: [
        { type: 'A', text: 'Dami bawal! Alam ko lahat' },
        { type: 'B', text: 'Alam ko ilan, paalala ko' },
        { type: 'C', text: 'Sila bahala' },
        { type: 'D', text: 'Old wives tales lang yan' }
      ]
    },
    {
      id: 5,
      question: 'Pag nagpupunta ng new place:',
      options: [
        { type: 'A', text: 'Tabi tabi po! Palaging sinasabi' },
        { type: 'B', text: 'Minsan, pag naaalala' },
        { type: 'C', text: 'Hindi na uso yan' },
        { type: 'D', text: 'Never ko ginagawa' }
      ]
    },
    {
      id: 6,
      question: 'Sa pagsusuklay ng gabi:',
      options: [
        { type: 'A', text: 'Bawal! Baka mamatay parent' },
        { type: 'B', text: 'Naririnig ko pero ginagawa ko pa rin' },
        { type: 'C', text: 'First time ko marinig' },
        { type: 'D', text: 'Nonsense pamahiin' }
      ]
    },
    {
      id: 7,
      question: 'Pag may nalaglag na kubyertos:',
      options: [
        { type: 'A', text: 'May bisita! Alam ko meaning' },
        { type: 'B', text: 'Sinasabi ko pero joke lang' },
        { type: 'C', text: 'Napulot ko lang' },
        { type: 'D', text: 'Nalaglag lang talaga' }
      ]
    },
    {
      id: 8,
      question: 'Sa pagkain ng balut:',
      options: [
        { type: 'A', text: 'Bawal malapit sa buntis!' },
        { type: 'B', text: 'Alam ko pero di sigurado' },
        { type: 'C', text: 'Kain lang! Masarap e' },
        { type: 'D', text: 'Walang konek dun' }
      ]
    },
    {
      id: 9,
      question: 'Pag naglilipat ng bahay:',
      options: [
        { type: 'A', text: 'May rituals! Coins, bigas, etc.' },
        { type: 'B', text: 'Ginawa para sigurado' },
        { type: 'C', text: 'Naririnig ko lang' },
        { type: 'D', text: 'Hindi kelangan' }
      ]
    },
    {
      id: 10,
      question: 'Sa usong balde:',
      options: [
        { type: 'A', text: 'May usong balde talaga sa CR!' },
        { type: 'B', text: 'Oo, pero for water lang' },
        { type: 'C', text: 'Anong kinalaman ng uso?' },
        { type: 'D', text: 'Practical reason lang yan' }
      ]
    },
    {
      id: 11,
      question: 'Pag nangangati ang palad:',
      options: [
        { type: 'A', text: 'May darating na pera!' },
        { type: 'B', text: 'Sana nga! Hopeful' },
        { type: 'C', text: 'Coincidence lang naman' },
        { type: 'D', text: 'Allergic reaction lang' }
      ]
    },
    {
      id: 12,
      question: 'Overall sa pamahiin:',
      options: [
        { type: 'A', text: 'Naniniwala! Better safe than sorry' },
        { type: 'B', text: 'Alam ko pero flexible' },
        { type: 'C', text: 'Aware pero di sumusunod' },
        { type: 'D', text: 'Hindi naniniwala sa lahat' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Super Superstitious',
      description: 'Sobrang naniniwala ka sa pamahiin! Alam mo lahat ng Filipino superstitions at sinusunod mo. Better safe than sorry ang motto mo. Traditional ka at respeto mo ang beliefs ng nakakaraan. You carry Filipino culture through beliefs!'
    },
    B: {
      title: 'Cautiously Superstitious',
      description: 'Alam mo ang pamahiin at minsan sumusunod ka. Hindi ka hardcore believer pero respect mo pa rin. "Baka totoo" ang mindset mo. Balanced ka between tradition and modernity!'
    },
    C: {
      title: 'Modern Skeptic',
      description: 'Alam mo ang pamahiin pero di ka naniniwala. Modern ang mindset mo at science-based. Respect mo lang ang elders pero di mo sinusunod. You\'re moving forward while respecting the past!'
    },
    D: {
      title: 'Total Non-Believer',
      description: 'Zero belief ka sa pamahiin! Para sayo, lahat ay may logical explanation. Hindi ka takot at walang superstitious bone sa body mo. Purely rational ang approach mo sa buhay!'
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
