export const kecerdasanFokusMs = {
  id: 'kecerdasan-fokus-ms',
  title: 'Ujian Fokus',
  description: 'Uji keupayaan menumpukan perhatian dan konsentrasi anda',
  questions: [
    {
      id: 1,
      text: 'Bila buat kerja penting, anda check phone berapa kali sejam?',
      options: [
        { id: 'a', text: 'Jarang atau tak langsung', type: 'A' },
        { id: 'b', text: '1-2 kali', type: 'B' },
        { id: 'c', text: '3-5 kali', type: 'C' },
        { id: 'd', text: 'Lebih 5 kali', type: 'D' }
      ]
    },
    {
      id: 2,
      text: 'Berapa lama anda boleh fokus tanpa distraction?',
      options: [
        { id: 'a', text: 'Lebih 2 jam', type: 'A' },
        { id: 'b', text: '1-2 jam', type: 'B' },
        { id: 'c', text: '30 minit - 1 jam', type: 'C' },
        { id: 'd', text: 'Kurang 30 minit', type: 'D' }
      ]
    },
    {
      id: 3,
      text: 'Bila ada bunyi bising sekitar, anda:',
      options: [
        { id: 'a', text: 'Boleh block out dan fokus', type: 'A' },
        { id: 'b', text: 'Agak terganggu tapi boleh adapt', type: 'B' },
        { id: 'c', text: 'Terganggu sikit', type: 'C' },
        { id: 'd', text: 'Sangat terganggu, tak boleh fokus', type: 'D' }
      ]
    },
    {
      id: 4,
      text: 'Bila tengah baca buku, berapa kerap fikiran melayang?',
      options: [
        { id: 'a', text: 'Jarang, sentiasa fokus', type: 'A' },
        { id: 'b', text: 'Kadang-kadang', type: 'B' },
        { id: 'c', text: 'Kerap', type: 'C' },
        { id: 'd', text: 'Sangat kerap', type: 'D' }
      ]
    },
    {
      id: 5,
      text: 'Bila kena buat task yang membosankan:',
      options: [
        { id: 'a', text: 'Tetap fokus sampai habis', type: 'A' },
        { id: 'b', text: 'Fokus dengan break sikit', type: 'B' },
        { id: 'c', text: 'Struggle untuk fokus', type: 'C' },
        { id: 'd', text: 'Senang give up atau tangguh', type: 'D' }
      ]
    },
    {
      id: 6,
      text: 'Dalam meeting 1 jam, anda:',
      options: [
        { id: 'a', text: 'Fokus sepanjang masa', type: 'A' },
        { id: 'b', text: 'Fokus most of the time', type: 'B' },
        { id: 'c', text: 'Fokus separuh masa', type: 'C' },
        { id: 'd', text: 'Susah nak fokus', type: 'D' }
      ]
    },
    {
      id: 7,
      text: 'Bila buat assignment, anda:',
      options: [
        { id: 'a', text: 'Fokus sampai siap, one go', type: 'A' },
        { id: 'b', text: 'Fokus dengan short breaks', type: 'B' },
        { id: 'c', text: 'Buat sikit-sikit', type: 'C' },
        { id: 'd', text: 'Last minute baru focus', type: 'D' }
      ]
    },
    {
      id: 8,
      text: 'Berapa tab browser anda buka sekarang?',
      options: [
        { id: 'a', text: '1-3 tabs (sangat organized)', type: 'A' },
        { id: 'b', text: '4-10 tabs', type: 'B' },
        { id: 'c', text: '11-20 tabs', type: 'C' },
        { id: 'd', text: 'Lebih 20 tabs', type: 'D' }
      ]
    },
    {
      id: 9,
      text: 'Bila study, anda:',
      options: [
        { id: 'a', text: 'Deep focus mode, phone jauh', type: 'A' },
        { id: 'b', text: 'Fokus tapi phone nearby', type: 'B' },
        { id: 'c', text: 'Study sambil check social media', type: 'C' },
        { id: 'd', text: 'Multitask banyak benda', type: 'D' }
      ]
    },
    {
      id: 10,
      text: 'Bila orang cakap dengan anda, anda:',
      options: [
        { id: 'a', text: 'Full attention, ingat semua', type: 'A' },
        { id: 'b', text: 'Dengar dan ingat most points', type: 'B' },
        { id: 'c', text: 'Dengar tapi kadang lupa', type: 'C' },
        { id: 'd', text: 'Susah nak fokus dengar', type: 'D' }
      ]
    },
    {
      id: 11,
      text: 'Bila tengok movie, anda:',
      options: [
        { id: 'a', text: 'Fokus penuh, tak check phone', type: 'A' },
        { id: 'b', text: 'Fokus tapi pause sekali-sekala', type: 'B' },
        { id: 'c', text: 'Sambil buat benda lain', type: 'C' },
        { id: 'd', text: 'Check phone berkali-kali', type: 'D' }
      ]
    },
    {
      id: 12,
      text: 'Bila ada deadline esok, anda:',
      options: [
        { id: 'a', text: 'Super focus, block semua distraction', type: 'A' },
        { id: 'b', text: 'Fokus dengan strategic breaks', type: 'B' },
        { id: 'c', text: 'Fokus tapi banyak distraction', type: 'C' },
        { id: 'd', text: 'Panic mode, blur', type: 'D' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Laser Focus',
      description: 'Keupayaan fokus anda cemerlang! Anda boleh menumpukan perhatian seperti laser dan tidak mudah terganggu. Produktiviti anda pasti tinggi!'
    },
    B: {
      title: 'Fokus Kukuh',
      description: 'Anda mempunyai fokus yang sangat baik. Boleh concentrate lama dan manage distraction dengan baik.'
    },
    C: {
      title: 'Fokus Fleksibel',
      description: 'Fokus anda pada tahap sederhana. Mudah terganggu tapi boleh kembali fokus. Cuba Pomodoro technique!'
    },
    D: {
      title: 'Multitasker Hebat',
      description: 'Fokus single-task mungkin mencabar, tetapi anda hebat dalam juggling pelbagai benda serentak!'
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
