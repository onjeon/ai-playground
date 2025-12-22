export const kecerdasanCorakMs = {
  id: 'kecerdasan-corak-ms',
  title: 'Ujian Corak',
  description: 'Uji keupayaan anda mengenal pasti corak dan urutan',
  questions: [
    {
      id: 1,
      text: 'Apakah nombor seterusnya? 2, 4, 8, 16, 32, ?',
      options: [
        { id: 'a', text: '64', type: 'A' },
        { id: 'b', text: '48', type: 'B' },
        { id: 'c', text: '56', type: 'C' },
        { id: 'd', text: '40', type: 'D' }
      ]
    },
    {
      id: 2,
      text: 'Corak: ○●○●○●?, apakah yang seterusnya?',
      options: [
        { id: 'a', text: '○', type: 'A' },
        { id: 'b', text: '●', type: 'B' },
        { id: 'c', text: '○○', type: 'C' },
        { id: 'd', text: '●●', type: 'D' }
      ]
    },
    {
      id: 3,
      text: 'A, C, E, G, I, ?',
      options: [
        { id: 'a', text: 'K', type: 'A' },
        { id: 'b', text: 'J', type: 'B' },
        { id: 'c', text: 'L', type: 'C' },
        { id: 'd', text: 'M', type: 'D' }
      ]
    },
    {
      id: 4,
      text: '1, 4, 9, 16, 25, ?',
      options: [
        { id: 'a', text: '36', type: 'A' },
        { id: 'b', text: '30', type: 'B' },
        { id: 'c', text: '35', type: 'C' },
        { id: 'd', text: '40', type: 'D' }
      ]
    },
    {
      id: 5,
      text: 'Corak warna: Merah, Biru, Hijau, Merah, Biru, ?',
      options: [
        { id: 'a', text: 'Hijau', type: 'A' },
        { id: 'b', text: 'Merah', type: 'B' },
        { id: 'c', text: 'Biru', type: 'C' },
        { id: 'd', text: 'Kuning', type: 'D' }
      ]
    },
    {
      id: 6,
      text: '5, 10, 20, 40, 80, ?',
      options: [
        { id: 'a', text: '160', type: 'A' },
        { id: 'b', text: '120', type: 'B' },
        { id: 'c', text: '140', type: 'C' },
        { id: 'd', text: '100', type: 'D' }
      ]
    },
    {
      id: 7,
      text: 'Z, Y, X, W, V, ?',
      options: [
        { id: 'a', text: 'U', type: 'A' },
        { id: 'b', text: 'T', type: 'B' },
        { id: 'c', text: 'S', type: 'C' },
        { id: 'd', text: 'R', type: 'D' }
      ]
    },
    {
      id: 8,
      text: '3, 6, 12, 24, 48, ?',
      options: [
        { id: 'a', text: '96', type: 'A' },
        { id: 'b', text: '72', type: 'B' },
        { id: 'c', text: '84', type: 'C' },
        { id: 'd', text: '60', type: 'D' }
      ]
    },
    {
      id: 9,
      text: 'Isnin, Rabu, Jumaat, ?',
      options: [
        { id: 'a', text: 'Ahad', type: 'A' },
        { id: 'b', text: 'Sabtu', type: 'B' },
        { id: 'c', text: 'Khamis', type: 'C' },
        { id: 'd', text: 'Selasa', type: 'D' }
      ]
    },
    {
      id: 10,
      text: '100, 95, 90, 85, 80, ?',
      options: [
        { id: 'a', text: '75', type: 'A' },
        { id: 'b', text: '70', type: 'B' },
        { id: 'c', text: '78', type: 'C' },
        { id: 'd', text: '72', type: 'D' }
      ]
    },
    {
      id: 11,
      text: '1, 3, 6, 10, 15, ?',
      options: [
        { id: 'a', text: '21', type: 'A' },
        { id: 'b', text: '20', type: 'B' },
        { id: 'c', text: '18', type: 'C' },
        { id: 'd', text: '22', type: 'D' }
      ]
    },
    {
      id: 12,
      text: 'AA, BB, CC, DD, ?',
      options: [
        { id: 'a', text: 'EE', type: 'A' },
        { id: 'b', text: 'FF', type: 'B' },
        { id: 'c', text: 'AB', type: 'C' },
        { id: 'd', text: 'DE', type: 'D' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Pakar Corak',
      description: 'Luar biasa! Anda sangat mahir mengenal pasti corak. Otak anda cemerlang dalam pengenalan pola dan urutan!'
    },
    B: {
      title: 'Pengesan Corak Baik',
      description: 'Hebat! Anda mempunyai keupayaan yang baik dalam mengenalpasti corak dan membuat ramalan.'
    },
    C: {
      title: 'Pemerhati Corak',
      description: 'Anda boleh mengenal pasti corak asas dengan baik. Terus berlatih untuk tingkatkan kemahiran!'
    },
    D: {
      title: 'Pemikir Bebas',
      description: 'Corak mungkin bukan kekuatan anda, tetapi pemikiran spontan anda sangat unik dan bernilai!'
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
