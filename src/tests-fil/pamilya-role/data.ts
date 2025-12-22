export const pamilyaRoleData = {
  id: 'pamilya-role',
  title: 'Ano ang Papel Mo sa Pamilya?',
  description: 'Alamin kung anong role mo sa Filipino family dynamics',
  questions: [
    {
      id: 1,
      question: 'Pag may family gathering, ikaw ay:',
      options: [
        { type: 'A', text: 'Nag-oorganize at nag-aasikaso' },
        { type: 'B', text: 'Nag-eentertain ng mga bata' },
        { type: 'C', text: 'Tahimik lang sa sulok' },
        { type: 'D', text: 'Tumutulong sa kusina' }
      ]
    },
    {
      id: 2,
      question: 'Pag may problema sa pamilya, ano ginagawa mo?',
      options: [
        { type: 'A', text: 'Ako ang nag-sosolve at mediator' },
        { type: 'B', text: 'Nag-papasaya para kumalma' },
        { type: 'C', text: 'Nag-iisip ng solution sa sarili' },
        { type: 'D', text: 'Tumutulong sa practical needs' }
      ]
    },
    {
      id: 3,
      question: 'Sa financial matters ng pamilya:',
      options: [
        { type: 'A', text: 'Ako ang breadwinner/provider' },
        { type: 'B', text: 'Tumutulong pag kaya' },
        { type: 'C', text: 'Focused sa sariling family' },
        { type: 'D', text: 'Nag-mamaneho ng budget' }
      ]
    },
    {
      id: 4,
      question: 'Pag may sakit ang family member:',
      options: [
        { type: 'A', text: 'Ako nag-aasikaso ng lahat' },
        { type: 'B', text: 'Nag-papasaya at nag-bibisita' },
        { type: 'C', text: 'Emotional support from afar' },
        { type: 'D', text: 'Hands-on sa pag-aalaga' }
      ]
    },
    {
      id: 5,
      question: 'Sa family decisions, ikaw ay:',
      options: [
        { type: 'A', text: 'May final say, leader' },
        { type: 'B', text: 'Nag-lalighten ng mood' },
        { type: 'C', text: 'Sumunod na lang' },
        { type: 'D', text: 'Nag-aadvise based sa experience' }
      ]
    },
    {
      id: 6,
      question: 'Anong role mo sa family chat group?',
      options: [
        { type: 'A', text: 'Admin! Nag-aannounce ng lahat' },
        { type: 'B', text: 'Meme sender at jokester' },
        { type: 'C', text: 'Seen lang, bihira mag-reply' },
        { type: 'D', text: 'Nag-share ng useful info' }
      ]
    },
    {
      id: 7,
      question: 'Pag may away sa pamilya:',
      options: [
        { type: 'A', text: 'Ako ang nag-aayos ng gulo' },
        { type: 'B', text: 'Nag-jojoke para mawala tension' },
        { type: 'C', text: 'Umiiwas, ayaw ng drama' },
        { type: 'D', text: 'Neutral, nag-mamadiate' }
      ]
    },
    {
      id: 8,
      question: 'Sa family events planning:',
      options: [
        { type: 'A', text: 'Ako ang project manager' },
        { type: 'B', text: 'In charge ng entertainment' },
        { type: 'C', text: 'Attendee lang' },
        { type: 'D', text: 'Logistics and food prep' }
      ]
    },
    {
      id: 9,
      question: 'Pag may bagong kasapi sa pamilya:',
      options: [
        { type: 'A', text: 'Nag-wewelcome at nag-iintroduce' },
        { type: 'B', text: 'Nag-papaklose agad' },
        { type: 'C', text: 'Friendly pero reserved' },
        { type: 'D', text: 'Nag-aalaga at nag-aalok ng tulong' }
      ]
    },
    {
      id: 10,
      question: 'Sa traditions and values:',
      options: [
        { type: 'A', text: 'Ako ang tagapagbantay at enforcer' },
        { type: 'B', text: 'Modern approach pero respectful' },
        { type: 'C', text: 'Individualist, own beliefs' },
        { type: 'D', text: 'Traditional, old school' }
      ]
    },
    {
      id: 11,
      question: 'Pag may achievement ang family member:',
      options: [
        { type: 'A', text: 'Nag-oorganize ng celebration' },
        { type: 'B', text: 'Sobrang supportive cheerleader' },
        { type: 'C', text: 'Congratulations message lang' },
        { type: 'D', text: 'Proud pero humble celebration' }
      ]
    },
    {
      id: 12,
      question: 'Sa overall family structure:',
      options: [
        { type: 'A', text: 'Ako ang pillar, foundation' },
        { type: 'B', text: 'Ako ang sunshine, mood lifter' },
        { type: 'C', text: 'Independent satellite member' },
        { type: 'D', text: 'Silent strength, reliable support' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Ang Haligi - The Pillar',
      description: 'Ikaw ang pundasyon ng pamilya! Leader ka at provider. Ikaw ang tumatayo pag may problema at nag-oorganize ng lahat. Responsible ka at maaasahan. Mabigat ang dala mo pero kaya mo dahil mahal mo ang pamilya. You are the family\'s foundation!'
    },
    B: {
      title: 'Ang Sunshine - The Joy Bringer',
      description: 'Ikaw ang nagpapasaya ng pamilya! Pag nandyan ka, nawawala ang stress at negativity. Emotional support system ka at nagpapalakas ng loob ng lahat. You make family time fun and memorable. You are the family\'s happiness!'
    },
    C: {
      title: 'Ang Malaya - The Independent',
      description: 'Ikaw ay independent member ng pamilya. Mahal mo sila pero may sarili kang buhay. Hindi ka masyadong involved sa drama at focused ka sa personal goals. Present ka pero hindi dependent. You maintain healthy boundaries!'
    },
    D: {
      title: 'Ang Maaasahan - The Reliable One',
      description: 'Ikaw ang tahimik na lakas ng pamilya! Hindi ka maingay pero andyan ka lagi pag kailangan. Hands-on ka at practical ang approach. Traditional ang values mo at respetado ka ng lahat. You are the family\'s steady rock!'
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
