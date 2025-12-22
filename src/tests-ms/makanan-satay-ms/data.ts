export const makananSatayMs = {
  id: 'makanan-satay-ms',
  title: 'Jenis Pencinta Satay',
  description: 'Discover your satay personality! Kau jenis pencinta satay yang macam mana?',
  questions: [
    {
      id: 1,
      text: 'Bila order satay, portion kau:',
      options: [
        { id: 'a', text: '30 cucuk minimum, baru puas!', type: 'A' },
        { id: 'b', text: '10-15 cucuk, reasonable portion', type: 'B' },
        { id: 'c', text: 'Order sikit dulu, tambah kalau sedap', type: 'C' },
        { id: 'd', text: 'Share dengan orang, try sikit je', type: 'D' }
      ]
    },
    {
      id: 2,
      text: 'Kuah kacang level kau:',
      options: [
        { id: 'a', text: 'Extra kuah, tenggelam satay!', type: 'A' },
        { id: 'b', text: 'Standard amount, balance', type: 'B' },
        { id: 'c', text: 'Celup sikit-sikit je', type: 'C' },
        { id: 'd', text: 'Without kuah pun ok', type: 'D' }
      ]
    },
    {
      id: 3,
      text: 'Satay preference kau:',
      options: [
        { id: 'a', text: 'Daging! Rich dan substantial', type: 'A' },
        { id: 'b', text: 'Ayam, classic choice', type: 'B' },
        { id: 'c', text: 'Campur semua jenis', type: 'C' },
        { id: 'd', text: 'Try exotic ones - perut, hati', type: 'D' }
      ]
    },
    {
      id: 4,
      text: 'Bila satay sampai:',
      options: [
        { id: 'a', text: 'Attack! Makan cepat-cepat', type: 'A' },
        { id: 'b', text: 'Enjoy properly, one by one', type: 'B' },
        { id: 'c', text: 'Share-share dengan orang dulu', type: 'C' },
        { id: 'd', text: 'Photo first, then makan', type: 'D' }
      ]
    },
    {
      id: 5,
      text: 'Nasi impit dan ketupat:',
      options: [
        { id: 'a', text: 'Wajib ada, carbs penting!', type: 'A' },
        { id: 'b', text: 'Ada bagus, takde pun ok', type: 'B' },
        { id: 'c', text: 'Makan sikit je', type: 'C' },
        { id: 'd', text: 'Skip, satay saja cukup', type: 'D' }
      ]
    },
    {
      id: 6,
      text: 'Timun dan bawang:',
      options: [
        { id: 'a', text: 'Makan sekali dengan satay', type: 'A' },
        { id: 'b', text: 'Makan as palate cleanser', type: 'B' },
        { id: 'c', text: 'Kadang-kadang makan', type: 'C' },
        { id: 'd', text: 'Never touch, satay only', type: 'D' }
      ]
    },
    {
      id: 7,
      text: 'Best satay stall criteria kau:',
      options: [
        { id: 'a', text: 'Portion besar, value for money', type: 'A' },
        { id: 'b', text: 'Taste authentic dan traditional', type: 'B' },
        { id: 'c', text: 'Kawan recommend, social proof', type: 'C' },
        { id: 'd', text: 'Unique twist atau presentation', type: 'D' }
      ]
    },
    {
      id: 8,
      text: 'Bila kawan tak suka satay:',
      options: [
        { id: 'a', text: '"Apa?! Rugi!" very passionate', type: 'A' },
        { id: 'b', text: '"Ok, masing-masing ada taste"', type: 'B' },
        { id: 'c', text: '"Takpe, kita makan lain sama"', type: 'C' },
        { id: 'd', text: '"Maybe you tried wrong place"', type: 'D' }
      ]
    },
    {
      id: 9,
      text: 'Satay makan bila:',
      options: [
        { id: 'a', text: 'Anytime! Craving tak kira waktu', type: 'A' },
        { id: 'b', text: 'Special occasions, family gathering', type: 'B' },
        { id: 'c', text: 'Social events, makan ramai-ramai', type: 'C' },
        { id: 'd', text: 'Random bila terserempak', type: 'D' }
      ]
    },
    {
      id: 10,
      text: 'Satay Kajang vs Satay biasa:',
      options: [
        { id: 'a', text: 'Worth the drive untuk yang best!', type: 'A' },
        { id: 'b', text: 'Ada difference, tapi nearby ok', type: 'B' },
        { id: 'c', text: 'Depends siapa pergi sekali', type: 'C' },
        { id: 'd', text: 'Explore different places best', type: 'D' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Satay Fanatic',
      description: 'Kau hardcore satay lover! Portion besar, kuah banyak, passion lebih. Bila cakap pasal satay, mata kau bersinar. Sanggup drive jauh untuk satay terbaik. Orang tahu kalau nak makan satay, ajak kau - kau tahu semua hidden gems!'
    },
    B: {
      title: 'Satay Traditionalist',
      description: 'Classic satay appreciator! Kau value authenticity dan proper way of enjoying satay. Tak extreme tapi genuine appreciation. Kau type yang introduce orang lain pada real good satay - cultured taste!'
    },
    C: {
      title: 'Satay Social Eater',
      description: 'Untuk kau, satay is about the experience dan company! Makan ramai-ramai adalah best. Tak obsessed dengan satay itself tapi love the bonding time. Social butterfly yang buat makan satay jadi memorable!'
    },
    D: {
      title: 'Satay Explorer',
      description: 'Adventurous satay eater! Kau suka try different places, different styles. Open minded dan tak stick to one spot. Explorer mentality - always looking for something new dan interesting!'
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
