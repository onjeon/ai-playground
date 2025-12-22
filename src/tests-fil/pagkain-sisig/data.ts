export const pagkainSisigData = {
  id: 'pagkain-sisig',
  title: 'Anong Sisig Style Mo?',
  description: 'Alamin kung anong klase ng sisig ang personality mo',
  questions: [
    {
      id: 1,
      question: 'Paano ka sa buhay?',
      options: [
        { type: 'A', text: 'Spicy! May excitement lagi' },
        { type: 'B', text: 'Sizzling hot! Always active' },
        { type: 'C', text: 'Creamy smooth! Easy going' },
        { type: 'D', text: 'Classic! Traditional ako' }
      ]
    },
    {
      id: 2,
      question: 'Sa challenges, ikaw ay:',
      options: [
        { type: 'A', text: 'Bring it on! The spicier, the better' },
        { type: 'B', text: 'Hot-headed pero mabilis maka-recover' },
        { type: 'C', text: 'Smooth sa approach, hindi nagmamadali' },
        { type: 'D', text: 'Tried and tested methods' }
      ]
    },
    {
      id: 3,
      question: 'Anong tipo ng pulutan ka?',
      options: [
        { type: 'A', text: 'Yung nakaka-challenge sa dila' },
        { type: 'B', text: 'Yung mainit pa, sizzling' },
        { type: 'C', text: 'Yung may mayo, smooth' },
        { type: 'D', text: 'Yung puro baboy, authentic' }
      ]
    },
    {
      id: 4,
      question: 'Sa personality, ikaw ay:',
      options: [
        { type: 'A', text: 'May kick! Memorable agad' },
        { type: 'B', text: 'Energetic at palakaibigan' },
        { type: 'C', text: 'Mellow at easy to get along with' },
        { type: 'D', text: 'Old school pero solid' }
      ]
    },
    {
      id: 5,
      question: 'Paano ka sa relationships?',
      options: [
        { type: 'A', text: 'Passionate! May fire' },
        { type: 'B', text: 'Exciting! Never boring' },
        { type: 'C', text: 'Smooth sailing! Chill lang' },
        { type: 'D', text: 'Traditional! Matino' }
      ]
    },
    {
      id: 6,
      question: 'Sa parties, ikaw ay:',
      options: [
        { type: 'A', text: 'Yung wild! Nag-spice up ng event' },
        { type: 'B', text: 'Yung hyper! Always may energy' },
        { type: 'C', text: 'Yung chill! Tambay lang' },
        { type: 'D', text: 'Yung classic! Matino at respetado' }
      ]
    },
    {
      id: 7,
      question: 'Anong klase ng flavor ang personality mo?',
      options: [
        { type: 'A', text: 'Bold at intense' },
        { type: 'B', text: 'Savory at rich' },
        { type: 'C', text: 'Mild at balanced' },
        { type: 'D', text: 'Pure at authentic' }
      ]
    },
    {
      id: 8,
      question: 'Sa inuman, ikaw ay:',
      options: [
        { type: 'A', text: 'Game sa lahat! Walang atras' },
        { type: 'B', text: 'Active participant! Life of the party' },
        { type: 'C', text: 'Chill lang! Social drinker' },
        { type: 'D', text: 'Matino! Alam ang limit' }
      ]
    },
    {
      id: 9,
      question: 'Paano ka mag-express ng feelings?',
      options: [
        { type: 'A', text: 'Intense! Ramdam na ramdam' },
        { type: 'B', text: 'Loud! Hindi tinago' },
        { type: 'C', text: 'Subtle! Mellow approach' },
        { type: 'D', text: 'Direct! Simple lang' }
      ]
    },
    {
      id: 10,
      question: 'Sa trabaho, ikaw ay:',
      options: [
        { type: 'A', text: 'Risk-taker! Aggressive' },
        { type: 'B', text: 'Go-getter! Always moving' },
        { type: 'C', text: 'Smooth operator! Strategic' },
        { type: 'D', text: 'Reliable! Proven methods' }
      ]
    },
    {
      id: 11,
      question: 'Anong texture ang personality mo?',
      options: [
        { type: 'A', text: 'Rough! May character' },
        { type: 'B', text: 'Crispy! May crunch' },
        { type: 'C', text: 'Creamy! Smooth' },
        { type: 'D', text: 'Chunky! Solid' }
      ]
    },
    {
      id: 12,
      question: 'Pag may bagong trend, ikaw ay:',
      options: [
        { type: 'A', text: 'Game! The wilder the better' },
        { type: 'B', text: 'Excited! Early adopter' },
        { type: 'C', text: 'Open-minded! Pag okay lang' },
        { type: 'D', text: 'Skeptical! Old ways are better' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Spicy Sisig',
      description: 'Ikaw ay Spicy Sisig! Puno ka ng passion at excitement! Hindi ka takot mag-take ng risks at gusto mo ng thrill sa buhay. May kick ang personality mo at memorable ka agad. Hindi ka para sa mahihina ang sikmura - kailangan strong ang kayang makakasama mo! You live life with intensity!'
    },
    B: {
      title: 'Sizzling Sisig',
      description: 'Ikaw ay Sizzling Sisig! Mainit ang dugo mo at puno ng energy! Always active at exciting ka kasama. Hindi ka tumitigil at laging may ginagawa. Life of the party ka at palaging may ingay pag nandyan ka. You keep things hot and exciting!'
    },
    C: {
      title: 'Sisig with Mayo',
      description: 'Ikaw ay Creamy Sisig! Smooth and easy-going ka! Hindi ka masyadong aggressive at chill lang ang approach mo sa buhay. Balanced ka at easy to get along with. Perfect ka para sa mga taong ayaw ng drama at hassle. You make life smoother for everyone!'
    },
    D: {
      title: 'Classic Pampanga Sisig',
      description: 'Ikaw ay Classic Authentic Sisig! Traditional at proven ka na! Hindi ka sumusunod sa trends at solid ang values mo. Respetado ka dahil totoo ka at walang halong iba. Old school pero timeless ang dating. You represent the real deal!'
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
