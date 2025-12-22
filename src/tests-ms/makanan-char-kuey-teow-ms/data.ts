export const makananCharKueyTeowMs = {
  id: 'makanan-char-kuey-teow-ms',
  title: 'Char Kuey Teow Personality',
  description: 'Gaya makan char kuey teow reveal personality kau!',
  questions: [
    {
      id: 1,
      text: 'Char kuey teow preference kau:',
      options: [
        { id: 'a', text: 'Penang style, wok hei power!', type: 'A' },
        { id: 'b', text: 'KL style, ada twist sendiri', type: 'B' },
        { id: 'c', text: 'Mana-mana pun sedap', type: 'C' },
        { id: 'd', text: 'Homemade atau cafe style', type: 'D' }
      ]
    },
    {
      id: 2,
      text: 'Topping wajib kau:',
      options: [
        { id: 'a', text: 'Kerang besar-besar, banyak!', type: 'A' },
        { id: 'b', text: 'Udang yang fresh', type: 'B' },
        { id: 'c', text: 'Taugeh crispy', type: 'C' },
        { id: 'd', text: 'Telur extra, kuning meleleh', type: 'D' }
      ]
    },
    {
      id: 3,
      text: 'Pedas level untuk CKT:',
      options: [
        { id: 'a', text: 'Extra pedas, sampai berpeluh!', type: 'A' },
        { id: 'b', text: 'Standard pedas, balance', type: 'B' },
        { id: 'c', text: 'Tak pedas, mild', type: 'C' },
        { id: 'd', text: 'Pedas asingkan', type: 'D' }
      ]
    },
    {
      id: 4,
      text: 'Bila tunggu CKT lama kat hawker:',
      options: [
        { id: 'a', text: 'Worth it, quality takes time', type: 'A' },
        { id: 'b', text: 'Understand, tapi check progress', type: 'B' },
        { id: 'c', text: 'Order lain dulu sambil tunggu', type: 'C' },
        { id: 'd', text: 'Next time datang off-peak', type: 'D' }
      ]
    },
    {
      id: 5,
      text: 'Wok hei (smoky flavor) penting tak:',
      options: [
        { id: 'a', text: 'Critical! Tak ada bukan CKT', type: 'A' },
        { id: 'b', text: 'Nice to have, tapi takde ok', type: 'B' },
        { id: 'c', text: 'Tak perasan sangat', type: 'C' },
        { id: 'd', text: 'Depends on overall taste', type: 'D' }
      ]
    },
    {
      id: 6,
      text: 'CKT makan dengan apa:',
      options: [
        { id: 'a', text: 'Just CKT, pure experience', type: 'A' },
        { id: 'b', text: 'Dengan air limau ais', type: 'B' },
        { id: 'c', text: 'Dengan side dishes lain', type: 'C' },
        { id: 'd', text: 'Dengan sambal extra', type: 'D' }
      ]
    },
    {
      id: 7,
      text: 'Bila orang kritik favorite CKT stall kau:',
      options: [
        { id: 'a', text: 'Defend sampai habis!', type: 'A' },
        { id: 'b', text: 'Explain kenapa kau suka', type: 'B' },
        { id: 'c', text: '"Ok, taste masing-masing"', type: 'C' },
        { id: 'd', text: 'Maybe suggest try again', type: 'D' }
      ]
    },
    {
      id: 8,
      text: 'CKT instant/frozen:',
      options: [
        { id: 'a', text: 'Never! Tak sama langsung', type: 'A' },
        { id: 'b', text: 'Emergency situation boleh lah', type: 'B' },
        { id: 'c', text: 'Ok what, convenient', type: 'C' },
        { id: 'd', text: 'Add own toppings, sedap juga', type: 'D' }
      ]
    },
    {
      id: 9,
      text: 'Best time makan CKT:',
      options: [
        { id: 'a', text: 'Bila craving, tak kira waktu', type: 'A' },
        { id: 'b', text: 'Lunch atau dinner time', type: 'B' },
        { id: 'c', text: 'Lepak malam dengan kawan', type: 'C' },
        { id: 'd', text: 'Weekend outing', type: 'D' }
      ]
    },
    {
      id: 10,
      text: 'Kalau CKT sold out:',
      options: [
        { id: 'a', text: 'Devastating! Kecewa gila', type: 'A' },
        { id: 'b', text: 'Sedih tapi ada backup plan', type: 'B' },
        { id: 'c', text: 'Takpe, makan lain je', type: 'C' },
        { id: 'd', text: 'Remember untuk datang awal next time', type: 'D' }
      ]
    }
  ],
  results: {
    A: {
      title: 'CKT Purist',
      description: 'Kau CKT purist! Wok hei wajib, kerang besar wajib, Penang style atau nothing. Passionate pasal authentic CKT dan tak tolerate compromise. Kawan-kawan trust recommendation CKT kau sebab standard kau tinggi!'
    },
    B: {
      title: 'CKT Connoisseur',
      description: 'Sophisticated CKT lover! Kau appreciate good CKT tapi reasonable. Ada standards tapi flexible. Balance antara passion dan practicality. Orang suka pergi makan CKT dengan kau sebab kau fun tapi tak extreme!'
    },
    C: {
      title: 'CKT Casual Fan',
      description: 'Laid back CKT enjoyer! Tak fussy, mana-mana pun boleh. Social eating lebih penting dari perfect CKT. Easy-going attitude - hidup pun macam tu. Tak stress, just enjoy!'
    },
    D: {
      title: 'CKT Strategist',
      description: 'Smart CKT eater! Kau plan bila nak makan, macam mana nak optimize experience. Practical approach tapi still enjoy. Methodical dalam life - timing penting, preparation penting!'
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
