export const basketballPhData = {
  id: 'basketball-ph',
  title: 'Anong Basketball Player Ka?',
  description: 'Alamin kung anong tipo ka ng basketball player sa Pilipinas',
  questions: [
    {
      id: 1,
      question: 'Anong position mo sa court?',
      options: [
        { type: 'A', text: 'Point Guard! Playmaker' },
        { type: 'B', text: 'Shooting Guard! Scorer' },
        { type: 'C', text: 'Forward! All-around' },
        { type: 'D', text: 'Center! Defense king' }
      ]
    },
    {
      id: 2,
      question: 'Sa liga/ligang labas, ikaw ay:',
      options: [
        { type: 'A', text: 'Star player! Asa sa akin' },
        { type: 'B', text: 'Reliable member ng team' },
        { type: 'C', text: 'Benchwarmer pero supportive' },
        { type: 'D', text: 'Fan lang! Manunuod' }
      ]
    },
    {
      id: 3,
      question: 'Anong shot mo specialty?',
      options: [
        { type: 'A', text: 'Three-point! Bomber' },
        { type: 'B', text: 'Layup! Drive to basket' },
        { type: 'C', text: 'Mid-range! Steady' },
        { type: 'D', text: 'Dunks! Pang-poster' }
      ]
    },
    {
      id: 4,
      question: 'Pag nalo-low shot mo:',
      options: [
        { type: 'A', text: 'Keep shooting! Mababalik din' },
        { type: 'B', text: 'Switch strategy, drive na lang' },
        { type: 'C', text: 'Pass muna, build confidence' },
        { type: 'D', text: 'Focus sa defense na lang' }
      ]
    },
    {
      id: 5,
      question: 'Sa trash talk:',
      options: [
        { type: 'A', text: 'Expert! Psychological warfare' },
        { type: 'B', text: 'Konti lang, pang-motivate' },
        { type: 'C', text: 'Silent killer! No talk, all action' },
        { type: 'D', text: 'Hindi ako nag-ttalk' }
      ]
    },
    {
      id: 6,
      question: 'Pag natatalo na:',
      options: [
        { type: 'A', text: 'Hindi sumusuko! Comeback pa' },
        { type: 'B', text: 'Try harder pero realistic' },
        { type: 'C', text: 'Acceptance mode na' },
        { type: 'D', text: 'Frustrated! Suko na' }
      ]
    },
    {
      id: 7,
      question: 'Sa foul calls:',
      options: [
        { type: 'A', text: 'Always protesting! Walang foul' },
        { type: 'B', text: 'Depende kung legit' },
        { type: 'C', text: 'Tanggapin na lang' },
        { type: 'D', text: 'Chill lang, laro lang' }
      ]
    },
    {
      id: 8,
      question: 'Anong PBA team mo?',
      options: [
        { type: 'A', text: 'San Miguel! Champion' },
        { type: 'B', text: 'Ginebra! Never say die' },
        { type: 'C', text: 'TNT! Solid team' },
        { type: 'D', text: 'Underdog teams! Loyal' }
      ]
    },
    {
      id: 9,
      question: 'Sa practice:',
      options: [
        { type: 'A', text: 'Everyday! Dedicated' },
        { type: 'B', text: 'Regular, consistent' },
        { type: 'C', text: 'Occasional lang' },
        { type: 'D', text: 'Game day lang' }
      ]
    },
    {
      id: 10,
      question: 'Pag may injury:',
      options: [
        { type: 'A', text: 'Laro pa rin! Tiis lang' },
        { type: 'B', text: 'Depends sa severity' },
        { type: 'C', text: 'Rest muna, safety first' },
        { type: 'D', text: 'Reason to skip' }
      ]
    },
    {
      id: 11,
      question: 'Sa team chemistry:',
      options: [
        { type: 'A', text: 'Leader! Team builder' },
        { type: 'B', text: 'Good teammate! Cooperative' },
        { type: 'C', text: 'Solo player minsan' },
        { type: 'D', text: 'Quiet member' }
      ]
    },
    {
      id: 12,
      question: 'Overall basketball life:',
      options: [
        { type: 'A', text: 'Passion ko! Life and love' },
        { type: 'B', text: 'Serious hobby ko' },
        { type: 'C', text: 'Casual player lang' },
        { type: 'D', text: 'Panglibang lang' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Ang Bida - The Star Player',
      description: 'Ikaw ang star ng team! Competitive ka at passionate sa basketball. Natural leader ka at clutch player. Lahat ng important plays dadaan sayo. You live and breathe basketball - true Pinoy hoops spirit!'
    },
    B: {
      title: 'Ang Reliable - The Team Player',
      description: 'Solid team player ka! Hindi ka bida pero crucial ka sa team. Consistent ang laro mo at maaasahan. Team-first ang mindset mo. You make your team better!'
    },
    C: {
      title: 'Ang Chill - The Casual Baller',
      description: 'Casual player ka lang! Enjoy mo ang laro pero hindi competitive. For fun lang at exercise. No pressure, chill vibes. You play for the love of the game!'
    },
    D: {
      title: 'Ang Supporter - The Superfan',
      description: 'Fan ka more than player! Mas enjoy mo manood at mag-cheer. Passionate ka pa rin sa basketball pero as spectator. Solid supporter ka ng teams mo. You appreciate the game from the stands!'
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
