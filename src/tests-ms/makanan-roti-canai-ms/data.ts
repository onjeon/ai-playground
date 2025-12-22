export const makananRotiCanaiMs = {
  id: 'makanan-roti-canai-ms',
  title: 'Gaya Makan Roti Canai',
  description: 'Cara kau makan roti canai reveal personality kau! Apa style kau?',
  questions: [
    {
      id: 1,
      text: 'Roti canai order kau biasanya:',
      options: [
        { id: 'a', text: 'Roti kosong, original best!', type: 'A' },
        { id: 'b', text: 'Roti telur, classic combination', type: 'B' },
        { id: 'c', text: 'Roti planta/bom, go big!', type: 'C' },
        { id: 'd', text: 'Roti tissue, style kena ada', type: 'D' }
      ]
    },
    {
      id: 2,
      text: 'Kuah untuk roti canai:',
      options: [
        { id: 'a', text: 'Dhal je cukup, pure', type: 'A' },
        { id: 'b', text: 'Kari ayam, substantial', type: 'B' },
        { id: 'c', text: 'Dua-dua, banyak lagi bagus', type: 'C' },
        { id: 'd', text: 'Gula dengan susu, sweet style', type: 'D' }
      ]
    },
    {
      id: 3,
      text: 'Cara kau koyak roti canai:',
      options: [
        { id: 'a', text: 'Kecil-kecil, neat dan precise', type: 'A' },
        { id: 'b', text: 'Medium pieces, practical', type: 'B' },
        { id: 'c', text: 'Besar-besar, one big scoop', type: 'C' },
        { id: 'd', text: 'Roll macam wrap style', type: 'D' }
      ]
    },
    {
      id: 4,
      text: 'Bila roti canai sampai:',
      options: [
        { id: 'a', text: 'Makan terus, panas best!', type: 'A' },
        { id: 'b', text: 'Tunggu sikit, arrange dulu', type: 'B' },
        { id: 'c', text: 'Snap gambar dulu!', type: 'C' },
        { id: 'd', text: 'Share dengan kawan, bagi sikit', type: 'D' }
      ]
    },
    {
      id: 5,
      text: 'Tempat makan roti canai ideal:',
      options: [
        { id: 'a', text: 'Mamak tepi jalan, authentic', type: 'A' },
        { id: 'b', text: 'Kedai yang selesa, ada aircond', type: 'B' },
        { id: 'c', text: 'Famous spot, walaupun jauh', type: 'C' },
        { id: 'd', text: 'Anywhere dengan good company', type: 'D' }
      ]
    },
    {
      id: 6,
      text: 'Bila abang mamak silap order:',
      options: [
        { id: 'a', text: 'Politely inform, minta tukar', type: 'A' },
        { id: 'b', text: 'Tak apa, makan je', type: 'B' },
        { id: 'c', text: 'Depends, kalau jauh sangat baru complain', type: 'C' },
        { id: 'd', text: 'Ok je, maybe this is better', type: 'D' }
      ]
    },
    {
      id: 7,
      text: 'Minum dengan roti canai:',
      options: [
        { id: 'a', text: 'Teh tarik panas, classic combo', type: 'A' },
        { id: 'b', text: 'Kopi O, simple dan strong', type: 'B' },
        { id: 'c', text: 'Milo ais/dinosaur, indulgent', type: 'C' },
        { id: 'd', text: 'Air kosong je, healthy', type: 'D' }
      ]
    },
    {
      id: 8,
      text: 'Berapa keping roti canai kau boleh makan?',
      options: [
        { id: 'a', text: 'Satu cukup, portion control', type: 'A' },
        { id: 'b', text: 'Dua standard, balance', type: 'B' },
        { id: 'c', text: 'Tiga ke atas, makan sampai puas', type: 'C' },
        { id: 'd', text: 'Depends on mood dan lapar', type: 'D' }
      ]
    },
    {
      id: 9,
      text: 'Roti canai terbaik adalah:',
      options: [
        { id: 'a', text: 'Yang crispy luar, lembut dalam', type: 'A' },
        { id: 'b', text: 'Yang tebal dan filling', type: 'B' },
        { id: 'c', text: 'Yang besar dan value for money', type: 'C' },
        { id: 'd', text: 'Yang buat dengan love', type: 'D' }
      ]
    },
    {
      id: 10,
      text: 'Bila tunggu roti canai lama:',
      options: [
        { id: 'a', text: 'Sabar, good things take time', type: 'A' },
        { id: 'b', text: 'Check dengan waiter status', type: 'B' },
        { id: 'c', text: 'Order lain dulu sambil tunggu', type: 'C' },
        { id: 'd', text: 'Borak dengan kawan, tak perasan', type: 'D' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Roti Kosong Purist',
      description: 'Kau macam roti kosong - simple, authentic, dan appreciate the basics. Tak payah complicated, yang original dah cukup best. Kau straightforward, honest, dan value simplicity dalam hidup. Orang respect kau sebab kau genuine dan tak pretentious!'
    },
    B: {
      title: 'Roti Telur Classic',
      description: 'Reliable macam roti telur! Kau balance antara practical dan enjoyment. Tak over tapi tak boring. Classic choice yang selalu work. Dalam hidup pun kau steady, dependable, dan consistent. Orang tahu apa expect dari kau - dan itu bagus!'
    },
    C: {
      title: 'Roti Bom/Planta',
      description: 'Go big or go home! Kau macam roti bom - indulgent, generous, dan suka enjoy life to the max. Tak kedekut dengan diri sendiri atau orang lain. Life is short, kau nak experience semua. Personality kau larger than life!'
    },
    D: {
      title: 'Roti Tissue Stylish',
      description: 'Kau ada style dan presentation matters! Macam roti tissue yang impressive bila sampai, kau pun tahu macam mana nak buat impression. Creative, aesthetic, dan ada flair. Orang ingat kau sebab kau memorable dan unique!'
    }
  },
  calculateResult: (answers: string[]) => {
    const counts = answers.reduce((acc, answer) => {
      acc[answer] = (acc[answer] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    return Object.entries(counts).reduce((a, b) => counts[a[0]] > counts[b[0]] ? a : b)[0];
  }
};
