export const bayanihanSpiritData = {
  id: 'bayanihan-spirit',
  title: 'Gaano Ka Ka-Bayanihan?',
  description: 'Sukatin ang iyong Filipino community spirit at willingness to help',
  questions: [
    {
      id: 1,
      question: 'Pag may kapitbahay na nag-lilipat:',
      options: [
        { type: 'A', text: 'Tumutulong agad! Buhat ng gamit' },
        { type: 'B', text: 'Nag-aalok ng tulong' },
        { type: 'C', text: 'Hi lang! Good luck' },
        { type: 'D', text: 'Deadma! Busy ako' }
      ]
    },
    {
      id: 2,
      question: 'Sa community clean-up drives:',
      options: [
        { type: 'A', text: 'Organizer! Nag-iinvite pa' },
        { type: 'B', text: 'Active participant lagi' },
        { type: 'C', text: 'Pag available lang' },
        { type: 'D', text: 'Never sumali' }
      ]
    },
    {
      id: 3,
      question: 'Pag may sakuna/calamity sa area:',
      options: [
        { type: 'A', text: 'First responder! Tumutulong agad' },
        { type: 'B', text: 'Nag-dodonate ng goods' },
        { type: 'C', text: 'Share sa socmed lang' },
        { type: 'D', text: 'Wala akong magawa' }
      ]
    },
    {
      id: 4,
      question: 'Sa barangay projects:',
      options: [
        { type: 'A', text: 'Volunteer lagi! Active' },
        { type: 'B', text: 'Tumutulong pag may time' },
        { type: 'C', text: 'Bayad lang ng fees' },
        { type: 'D', text: 'Not involved' }
      ]
    },
    {
      id: 5,
      question: 'Pag may kapitbahay na may emergency:',
      options: [
        { type: 'A', text: 'Susugod agad! Ano kailangan?' },
        { type: 'B', text: 'Mag-aalok ng assistance' },
        { type: 'C', text: 'Concerned pero di makatulong' },
        { type: 'D', text: 'Wala akong alam' }
      ]
    },
    {
      id: 6,
      question: 'Sa food sharing culture:',
      options: [
        { type: 'A', text: 'Always nag-share! "Kain kayo"' },
        { type: 'B', text: 'Nag-aalok pag marami' },
        { type: 'C', text: 'Pag special occasion lang' },
        { type: 'D', text: 'Sariling pagkain ko to' }
      ]
    },
    {
      id: 7,
      question: 'Pag may fund-raising sa community:',
      options: [
        { type: 'A', text: 'Malaking donation! Generous' },
        { type: 'B', text: 'May ambag! Kung ano kaya' },
        { type: 'C', text: 'Konti lang! Token' },
        { type: 'D', text: 'Pass! Wala budget' }
      ]
    },
    {
      id: 8,
      question: 'Sa helping strangers:',
      options: [
        { type: 'A', text: 'Always willing! Kapwa tao' },
        { type: 'B', text: 'Pag mukhang legit' },
        { type: 'C', text: 'Cautious pero may help' },
        { type: 'D', text: 'Iwas! Maraming scam' }
      ]
    },
    {
      id: 9,
      question: 'Pag may bagong kapitbahay:',
      options: [
        { type: 'A', text: 'Welcome! May dala pang food' },
        { type: 'B', text: 'Bumibisita! Nag-iintroduce' },
        { type: 'C', text: 'Hi wave lang' },
        { type: 'D', text: 'Wala! Privacy ko' }
      ]
    },
    {
      id: 10,
      question: 'Sa sharing of resources (tools, etc):',
      options: [
        { type: 'A', text: 'Open! Hiniram ko lang din yan before' },
        { type: 'B', text: 'Okay lang! Careful lang' },
        { type: 'C', text: 'Depende kung sino' },
        { type: 'D', text: 'Ayoko magpahiram! Sira' }
      ]
    },
    {
      id: 11,
      question: 'Pag may volunteer opportunities:',
      options: [
        { type: 'A', text: 'Always game! Lagi ako jan' },
        { type: 'B', text: 'Pag aligned sa advocacy' },
        { type: 'C', text: 'Occasional lang' },
        { type: 'D', text: 'Busy ako lagi' }
      ]
    },
    {
      id: 12,
      question: 'Overall community involvement:',
      options: [
        { type: 'A', text: 'Very active! Community first' },
        { type: 'B', text: 'Active! Tumutulong' },
        { type: 'C', text: 'Minimal! Present lang' },
        { type: 'D', text: 'Individualist! Sarili focus' }
      ]
    }
  ],
  results: {
    A: {
      title: 'True Bayanihan Spirit',
      description: 'Ikaw ay tunay na Filipino sa puso! Malakas ang bayanihan spirit mo. Always ready to help at community-oriented. Generous ka at caring sa kapwa. You embody the best of Filipino culture - the spirit of helping each other!'
    },
    B: {
      title: 'Active Community Member',
      description: 'Malaki ang bayanihan spirit mo! Willing ka tumulong at active sa community. Balanced ka - may sariling buhay pero present pa rin sa community needs. You contribute positively to your community!'
    },
    C: {
      title: 'Occasional Helper',
      description: 'May bayanihan spirit ka pero limited. Tumutulong ka pag may time or pag kailangan talaga. Practical ang approach mo. Willing ka pero may boundaries. You help when you can!'
    },
    D: {
      title: 'Independent Spirit',
      description: 'Individualist ka at focused sa sarili. Hindi priority ang community involvement. Modern mindset at self-sufficient. Mas gusto mo privacy at personal space. You value independence over collective action!'
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
