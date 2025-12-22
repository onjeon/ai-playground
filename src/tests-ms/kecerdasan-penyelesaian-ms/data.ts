export const kecerdasanPenyelesaianMs = {
  id: 'kecerdasan-penyelesaian-ms',
  title: 'Ujian Penyelesaian Masalah',
  description: 'Uji keupayaan menyelesaikan masalah dengan kreatif dan efektif',
  questions: [
    {
      id: 1,
      text: 'WiFi rumah tiba-tiba tak boleh guna. Anda:',
      options: [
        { id: 'a', text: 'Troubleshoot systematically: restart router, check cables, test devices, call ISP', type: 'A' },
        { id: 'b', text: 'Restart router dan tunggu', type: 'B' },
        { id: 'c', text: 'Terus call support', type: 'C' },
        { id: 'd', text: 'Pakai data phone je', type: 'D' }
      ]
    },
    {
      id: 2,
      text: 'Projek group ada ahli yang tak contribute. Anda:',
      options: [
        { id: 'a', text: 'Address terus dengan solution-focused: meeting, assign clear tasks, set deadline', type: 'A' },
        { id: 'b', text: 'Cakap dengan dia personally', type: 'B' },
        { id: 'c', text: 'Report pada lecturer', type: 'C' },
        { id: 'd', text: 'Buat kerja dia sekali', type: 'D' }
      ]
    },
    {
      id: 3,
      text: 'Kereta rosak tengah jalan. Anda:',
      options: [
        { id: 'a', text: 'Check basic (fuel, engine, tyre), call mechanic, arrange alternative transport', type: 'A' },
        { id: 'b', text: 'Terus call mechanic', type: 'B' },
        { id: 'c', text: 'Tunggu bantuan', type: 'C' },
        { id: 'd', text: 'Panic dulu', type: 'D' }
      ]
    },
    {
      id: 4,
      text: 'Deadline assignment esok tapi banyak lagi tak siap. Anda:',
      options: [
        { id: 'a', text: 'Prioritize tasks, buat yang paling penting dulu, skip yang minor, ask for help', type: 'A' },
        { id: 'b', text: 'Buat semalam suntuk', type: 'B' },
        { id: 'c', text: 'Minta extension', type: 'C' },
        { id: 'd', text: 'Submit apa yang ada', type: 'D' }
      ]
    },
    {
      id: 5,
      text: 'Phone terjatuh dalam air. Anda:',
      options: [
        { id: 'a', text: 'Off immediately, keringkan, masuk dalam beras/silica, tunggu 24 jam, baru on', type: 'A' },
        { id: 'b', text: 'Keringkan dan try on', type: 'B' },
        { id: 'c', text: 'Terus bawa kedai', type: 'C' },
        { id: 'd', text: 'Try on tengok boleh guna ke tak', type: 'D' }
      ]
    },
    {
      id: 6,
      text: 'Bajet bulanan habis seminggu awal. Anda:',
      options: [
        { id: 'a', text: 'Analyze spending, identify leaks, create new budget, find ways to earn extra', type: 'A' },
        { id: 'b', text: 'Kurangkan spending untuk minggu depan', type: 'B' },
        { id: 'c', text: 'Pinjam dari kawan', type: 'C' },
        { id: 'd', text: 'Pakai kad kredit', type: 'D' }
      ]
    },
    {
      id: 7,
      text: 'Website yang anda develop ada bug. User complain ramai. Anda:',
      options: [
        { id: 'a', text: 'Isolate issue, reproduce bug, fix systematically, test, deploy, communicate with users', type: 'A' },
        { id: 'b', text: 'Cuba fix based on complaint', type: 'B' },
        { id: 'c', text: 'Restart server', type: 'C' },
        { id: 'd', text: 'Tunggu complaint berkurang', type: 'D' }
      ]
    },
    {
      id: 8,
      text: 'Presentation slide rosak 30 minit sebelum present. Anda:',
      options: [
        { id: 'a', text: 'Stay calm, backup plan: present from memory, use whiteboard, or recreate key slides', type: 'A' },
        { id: 'b', text: 'Cuba repair file', type: 'B' },
        { id: 'c', text: 'Minta tangguh', type: 'C' },
        { id: 'd', text: 'Panic', type: 'D' }
      ]
    },
    {
      id: 9,
      text: 'Rumah blackout masa malam. Anda:',
      options: [
        { id: 'a', text: 'Check meter, circuit breaker, contact TNB, prepare emergency light/candles', type: 'A' },
        { id: 'b', text: 'Tunggu elektrik balik', type: 'B' },
        { id: 'c', text: 'Pergi rumah kawan', type: 'C' },
        { id: 'd', text: 'Tidur je', type: 'D' }
      ]
    },
    {
      id: 10,
      text: 'Team conflict pasal direction projek. Anda:',
      options: [
        { id: 'a', text: 'Facilitate discussion, list pros/cons each option, vote democratically, commit to decision', type: 'A' },
        { id: 'b', text: 'Suggest compromise', type: 'B' },
        { id: 'c', text: 'Follow majority', type: 'C' },
        { id: 'd', text: 'Avoid conflict', type: 'D' }
      ]
    },
    {
      id: 11,
      text: 'Salah transfer duit ke akaun lain. Anda:',
      options: [
        { id: 'a', text: 'Contact bank immediately, file dispute, contact recipient, document everything', type: 'A' },
        { id: 'b', text: 'Contact bank', type: 'B' },
        { id: 'c', text: 'Harap recipient transfer balik', type: 'C' },
        { id: 'd', text: 'Accept je', type: 'D' }
      ]
    },
    {
      id: 12,
      text: 'Flight cancel last minute. Anda:',
      options: [
        { id: 'a', text: 'Check alternatives: next flight, other airlines, refund, accommodation, contact destination', type: 'A' },
        { id: 'b', text: 'Book next available flight', type: 'B' },
        { id: 'c', text: 'Complain pada airline', type: 'C' },
        { id: 'd', text: 'Balik rumah', type: 'D' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Problem Solver Genius',
      description: 'Wow! Anda seorang problem solver yang cemerlang! Anda systematically analyze masalah dan find solutions yang efektif. Setiap crisis adalah peluang untuk shine!'
    },
    B: {
      title: 'Solution Finder',
      description: 'Anda sangat baik dalam menyelesaikan masalah! Approach anda praktikal dan biasanya berkesan.'
    },
    C: {
      title: 'Steady Problem Manager',
      description: 'Anda boleh handle masalah dengan bantuan dan support. Kerja team adalah kekuatan anda!'
    },
    D: {
      title: 'Go With The Flow',
      description: 'Anda lebih suka avoid masalah dan adapt. Sometimes the best solution is to let things be!'
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
