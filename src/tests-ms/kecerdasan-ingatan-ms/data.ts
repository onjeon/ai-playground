export const kecerdasanIngatanMs = {
  id: 'kecerdasan-ingatan-ms',
  title: 'Ujian Ingatan',
  description: 'Uji keupayaan memori dan daya ingatan anda',
  questions: [
    {
      id: 1,
      text: 'Ingat senarai ini: Nasi, Ayam, Sayur, Ikan, Teh. Berapa item?',
      options: [
        { id: 'a', text: '5 item', type: 'A' },
        { id: 'b', text: '4 item', type: 'B' },
        { id: 'c', text: '6 item', type: 'C' },
        { id: 'd', text: '3 item', type: 'D' }
      ]
    },
    {
      id: 2,
      text: 'Nombor telefon: 012-345-6789. Apakah 4 digit terakhir?',
      options: [
        { id: 'a', text: '6789', type: 'A' },
        { id: 'b', text: '5678', type: 'B' },
        { id: 'c', text: '7890', type: 'C' },
        { id: 'd', text: '3456', type: 'D' }
      ]
    },
    {
      id: 3,
      text: 'Berapa kali huruf "A" muncul: MALAYSIA',
      options: [
        { id: 'a', text: '3 kali', type: 'A' },
        { id: 'b', text: '2 kali', type: 'B' },
        { id: 'c', text: '4 kali', type: 'C' },
        { id: 'd', text: '1 kali', type: 'D' }
      ]
    },
    {
      id: 4,
      text: 'Senarai warna: Merah, Biru, Hijau, Kuning, Hitam. Warna ketiga?',
      options: [
        { id: 'a', text: 'Hijau', type: 'A' },
        { id: 'b', text: 'Biru', type: 'B' },
        { id: 'c', text: 'Kuning', type: 'C' },
        { id: 'd', text: 'Merah', type: 'D' }
      ]
    },
    {
      id: 5,
      text: 'Ingat urutan: 7, 3, 9, 2, 5. Nombor pertama?',
      options: [
        { id: 'a', text: '7', type: 'A' },
        { id: 'b', text: '3', type: 'B' },
        { id: 'c', text: '9', type: 'C' },
        { id: 'd', text: '2', type: 'D' }
      ]
    },
    {
      id: 6,
      text: 'Nama: Ahmad bin Abdullah. Nama bapa?',
      options: [
        { id: 'a', text: 'Abdullah', type: 'A' },
        { id: 'b', text: 'Ahmad', type: 'B' },
        { id: 'c', text: 'Bin', type: 'C' },
        { id: 'd', text: 'Ali', type: 'D' }
      ]
    },
    {
      id: 7,
      text: 'Berapa perkataan dalam ayat: Saya suka makan nasi lemak',
      options: [
        { id: 'a', text: '5 perkataan', type: 'A' },
        { id: 'b', text: '4 perkataan', type: 'B' },
        { id: 'c', text: '6 perkataan', type: 'C' },
        { id: 'd', text: '3 perkataan', type: 'D' }
      ]
    },
    {
      id: 8,
      text: 'Senarai buah: Durian, Rambutan, Mangga, Pisang. Ada berapa?',
      options: [
        { id: 'a', text: '4 buah', type: 'A' },
        { id: 'b', text: '3 buah', type: 'B' },
        { id: 'c', text: '5 buah', type: 'C' },
        { id: 'd', text: '2 buah', type: 'D' }
      ]
    },
    {
      id: 9,
      text: 'Plat nombor: WXY 1234. Apakah huruf pertama?',
      options: [
        { id: 'a', text: 'W', type: 'A' },
        { id: 'b', text: 'X', type: 'B' },
        { id: 'c', text: 'Y', type: 'C' },
        { id: 'd', text: 'V', type: 'D' }
      ]
    },
    {
      id: 10,
      text: 'Hari ini Jumaat. Semalam hari apa?',
      options: [
        { id: 'a', text: 'Khamis', type: 'A' },
        { id: 'b', text: 'Rabu', type: 'B' },
        { id: 'c', text: 'Sabtu', type: 'C' },
        { id: 'd', text: 'Ahad', type: 'D' }
      ]
    },
    {
      id: 11,
      text: 'Password: ABC123XYZ. Berapa digit nombor?',
      options: [
        { id: 'a', text: '3 digit', type: 'A' },
        { id: 'b', text: '4 digit', type: 'B' },
        { id: 'c', text: '2 digit', type: 'C' },
        { id: 'd', text: '5 digit', type: 'D' }
      ]
    },
    {
      id: 12,
      text: 'Negeri: Johor, Kedah, Perak, Pahang. Negeri pertama?',
      options: [
        { id: 'a', text: 'Johor', type: 'A' },
        { id: 'b', text: 'Kedah', type: 'B' },
        { id: 'c', text: 'Perak', type: 'C' },
        { id: 'd', text: 'Pahang', type: 'D' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Ingatan Fotografik',
      description: 'Memori anda sangat kuat! Anda boleh mengingati maklumat dengan mudah dan tepat. Otak anda seperti hard disk berkualiti tinggi!'
    },
    B: {
      title: 'Ingatan Baik',
      description: 'Memori anda sangat baik dan boleh dipercayai. Anda jarang lupa perkara penting!'
    },
    C: {
      title: 'Ingatan Sederhana',
      description: 'Ingatan anda pada tahap yang boleh diterima. Kadang-kadang perlu reminder, tapi itu normal!'
    },
    D: {
      title: 'Hidup Pada Masa Kini',
      description: 'Ingatan jangka pendek mungkin mencabar, tetapi anda mahir hidup dalam detik sekarang. Spontan dan fresh!'
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
