export const pagkainLechonData = {
  id: 'pagkain-lechon',
  title: 'Ano ang Lechon Personality Mo?',
  description: 'Alamin kung anong parte ng lechon ang kumakatawan sa iyong personality',
  questions: [
    {
      id: 1,
      question: 'Sa party, ikaw ay:',
      options: [
        { type: 'A', text: 'Star of the show! Lahat nakatingin sa akin' },
        { type: 'B', text: 'Crunchy at memorable presence' },
        { type: 'C', text: 'Soft and approachable' },
        { type: 'D', text: 'Nasa loob ang kulo' }
      ]
    },
    {
      id: 2,
      question: 'Paano ka sa first impression?',
      options: [
        { type: 'A', text: 'Shiny at eye-catching agad' },
        { type: 'B', text: 'Crispy at may dating' },
        { type: 'C', text: 'Warm at inviting' },
        { type: 'D', text: 'Kelangan pa kilalanin ng maigi' }
      ]
    },
    {
      id: 3,
      question: 'Anong layer ng personality mo ang pinakapowerful?',
      options: [
        { type: 'A', text: 'Yung panlabas - ang hitsura' },
        { type: 'B', text: 'Yung texture - ang personality' },
        { type: 'C', text: 'Yung substance - ang values' },
        { type: 'D', text: 'Yung essence - ang heart' }
      ]
    },
    {
      id: 4,
      question: 'Sa kainan, ikaw ay:',
      options: [
        { type: 'A', text: 'Always the highlight' },
        { type: 'B', text: 'Yung pinaka-favorite ng lahat' },
        { type: 'C', text: 'Reliable comfort food' },
        { type: 'D', text: 'Hidden gem na specialty' }
      ]
    },
    {
      id: 5,
      question: 'Paano ka tumatanggap ng compliments?',
      options: [
        { type: 'A', text: 'Shiny ako naturally!' },
        { type: 'B', text: 'Crispy pa rin kahit may edad na' },
        { type: 'C', text: 'Thank you, warm naman ako talaga' },
        { type: 'D', text: 'Shy, pero appreciated' }
      ]
    },
    {
      id: 6,
      question: 'Anong oras ka best?',
      options: [
        { type: 'A', text: 'Fresh from the roast!' },
        { type: 'B', text: 'Peak crunchiness' },
        { type: 'C', text: 'Anytime, consistent ako' },
        { type: 'D', text: 'Mas masarap pag mainit pa' }
      ]
    },
    {
      id: 7,
      question: 'Sa group, ano ang role mo?',
      options: [
        { type: 'A', text: 'Centerpiece, main attraction' },
        { type: 'B', text: 'Yung favorite ng lahat' },
        { type: 'C', text: 'Yung mabait at madaling lapitan' },
        { type: 'D', text: 'Yung may depth at substance' }
      ]
    },
    {
      id: 8,
      question: 'Paano ka sa stress?',
      options: [
        { type: 'A', text: 'Natatakpan ng golden exterior' },
        { type: 'B', text: 'Mas lumalabas ang character' },
        { type: 'C', text: 'Nananatiling soft at gentle' },
        { type: 'D', text: 'Nasa loob ang kulo' }
      ]
    },
    {
      id: 9,
      question: 'Ano ang best quality mo?',
      options: [
        { type: 'A', text: 'Presentation at aesthetics' },
        { type: 'B', text: 'Personality at charm' },
        { type: 'C', text: 'Consistency at reliability' },
        { type: 'D', text: 'Depth at authenticity' }
      ]
    },
    {
      id: 10,
      question: 'Paano ka sa bagong kakilala?',
      options: [
        { type: 'A', text: 'Agad nakaka-attract' },
        { type: 'B', text: 'Memorable first meeting' },
        { type: 'C', text: 'Easy to like' },
        { type: 'D', text: 'Slow burn, pero lasting' }
      ]
    },
    {
      id: 11,
      question: 'Sa special occasions, ikaw ay:',
      options: [
        { type: 'A', text: 'Must-have! Hindi pwedeng wala' },
        { type: 'B', text: 'Yung pinaka-abangan' },
        { type: 'C', text: 'Reliable crowd pleaser' },
        { type: 'D', text: 'Special treat' }
      ]
    },
    {
      id: 12,
      question: 'Ano ang legacy mo?',
      options: [
        { type: 'A', text: 'Unforgettable presence' },
        { type: 'B', text: 'Perfect execution' },
        { type: 'C', text: 'Warmth and comfort' },
        { type: 'D', text: 'Genuine substance' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Lechon Skin - Ang Balat',
      description: 'Ikaw ang golden, crispy skin ng lechon! Ang first impression mo ay sobrang ganda at naka-attract agad. Shiny ka, attention-grabbing, at nakaka-wow! Pero hindi lang panlabas ang meron ka - may substance din sa loob. Ikaw yung tipo ng tao na unforgettable ang presence!'
    },
    B: {
      title: 'Lechon Meat - Ang Karne',
      description: 'Ikaw ang perfectly cooked meat ng lechon! May tamang texture, flavor, at character. Hindi ka OA pero hindi rin boring. Balanced ang lahat ng qualities mo. Ikaw yung reliable favorite na palaging sinasabing "perfect!" Consistent ka at always delivers!'
    },
    C: {
      title: 'Lechon Belly - Ang Liempo',
      description: 'Ikaw ang soft, tender belly part! Warm, approachable, at comforting ang presence mo. Hindi ka harsh o intimidating. Easy to love at easy to be with. Ikaw yung tipo ng tao na parang home - comfortable, safe, at masarap kasama.'
    },
    D: {
      title: 'Lechon Stuffing - Ang Relleno',
      description: 'Ikaw ang flavorful stuffing sa loob! Hindi obvious agad ang galing mo, pero pag nkilala ka na, sobrang saya! May depth ka, may surprise elements, at full of hidden flavors. Ikaw yung tipo ng taong kailangan kilalanin ng maigi bago ma-appreciate ang tunay mong halaga!'
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
