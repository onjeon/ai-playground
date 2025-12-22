export const sikolohiyaoptimistData = {
  id: 'sikolohiya-optimist',
  title: 'Optimista o Pessimista Ka Ba?',
  description: 'Alamin kung paano mo tinitingnan ang buhay - puno o kalahating baso ang tingin mo?',
  questions: [
    {
      id: 1,
      question: 'Pag may unexpected problema, ano unang pumasok sa isip mo?',
      options: [
        { type: 'A', text: 'May solusyon yan! Kaya natin to' },
        { type: 'B', text: 'Medyo challenging pero solve natin' },
        { type: 'C', text: 'Eto na naman, bakit ba lagi ganito' },
        { type: 'D', text: 'Worst case scenario agad ang iniisip' }
      ]
    },
    {
      id: 2,
      question: 'Sa Monday mornings:',
      options: [
        { type: 'A', text: 'Fresh start! New week, new opportunities' },
        { type: 'B', text: 'Okay na rin, trabaho lang naman' },
        { type: 'C', text: 'Ugh, Monday na naman' },
        { type: 'D', text: 'Dread ang buong linggo' }
      ]
    },
    {
      id: 3,
      question: 'Kapag di natuloy ang plans mo:',
      options: [
        { type: 'A', text: 'May better plan siguro ang universe!' },
        { type: 'B', text: 'Sayang pero okay lang, may next time' },
        { type: 'C', text: 'Disappointed at sira mood buong araw' },
        { type: 'D', text: 'Expected ko na, laging ganito' }
      ]
    },
    {
      id: 4,
      question: 'Sa future mo, ano tingin mo?',
      options: [
        { type: 'A', text: 'Bright! Maganda ang patutunguhan ko' },
        { type: 'B', text: 'Hopeful, basta magsikap' },
        { type: 'C', text: 'Uncertain, maraming pwedeng mangyari' },
        { type: 'D', text: 'Worried, parang mahirap ang ahead' }
      ]
    },
    {
      id: 5,
      question: 'Pag may nagawa kang achievement:',
      options: [
        { type: 'A', text: 'Celebrate! Deserve ko to!' },
        { type: 'B', text: 'Happy pero humble lang' },
        { type: 'C', text: 'Okay lang, swerte siguro' },
        { type: 'D', text: 'Baka fluke lang, di ko deserve' }
      ]
    },
    {
      id: 6,
      question: 'Sa mga news about world events:',
      options: [
        { type: 'A', text: 'May pag-asa pa! People are doing good things' },
        { type: 'B', text: 'Mixed feelings, pero hopeful pa rin' },
        { type: 'C', text: 'Nakakadown, puro negative' },
        { type: 'D', text: 'Di na ako nanunuod, toxic lang' }
      ]
    },
    {
      id: 7,
      question: 'Kapag may gustong mangyari na mahirap i-achieve:',
      options: [
        { type: 'A', text: 'Malay mo, nothing is impossible!' },
        { type: 'B', text: 'Try lang, baka sakaling mangyari' },
        { type: 'C', text: 'Realistic tayo, probably wont happen' },
        { type: 'D', text: 'Di na ako umaasa para di ma-disappoint' }
      ]
    },
    {
      id: 8,
      question: 'Pag nagkamali ka:',
      options: [
        { type: 'A', text: 'Learning experience! Gagaling ako dito' },
        { type: 'B', text: 'Move on, everyone makes mistakes' },
        { type: 'C', text: 'Self-criticize, dapat di ganun' },
        { type: 'D', text: 'Dwell sa mistake, ang bobo ko talaga' }
      ]
    },
    {
      id: 9,
      question: 'Sa relationships at friendships:',
      options: [
        { type: 'A', text: 'People are generally good and kind!' },
        { type: 'B', text: 'May good at bad, pero mostly good' },
        { type: 'C', text: 'Be careful, di lahat trustworthy' },
        { type: 'D', text: 'Guard up lagi, madami mapanloko' }
      ]
    },
    {
      id: 10,
      question: 'Pag umuulan ng malakas at may lakad ka:',
      options: [
        { type: 'A', text: 'Cozy vibes! Baka humina din mamaya' },
        { type: 'B', text: 'Umbrella ready, go pa rin' },
        { type: 'C', text: 'Sira na araw, baka ma-cancel na lang' },
        { type: 'D', text: 'Bakit ba laging ganito pag may lakad ako' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Ang Eternal Optimist',
      description: 'Sunshine ka! Laging positive ang outlook mo sa buhay. Nakikita mo ang silver lining sa lahat ng situation. Contagious ang energy mo at inspiring ka sa mga tao around you. Never lose that light!'
    },
    B: {
      title: 'Ang Realistic Optimist',
      description: 'Positive ka pero grounded! Hindi blind optimism ang meron ka kundi healthy hope na may preparation. Balanced ang view mo sa life - acknowledge challenges pero confident pa rin. Best of both worlds!'
    },
    C: {
      title: 'Ang Realistic Pessimist',
      description: 'Leaning towards negative ang default mo pero di naman totally hopeless. Maybe protective mechanism ito - prepare for worst para di ma-hurt. Try to balance with some positive thinking - baka ma-surprise ka!'
    },
    D: {
      title: 'Ang Certified Pessimist',
      description: 'Dark clouds ang default view mo sa life. Baka past disappointments ang cause nito. While healthy ang caution, too much negativity can be self-fulfilling. Try mo small positive thinking exercises - slowly lang!'
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
