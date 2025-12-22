const fs = require('fs');
const path = require('path');

const tests = [
  // Drinks
  { id: 'minuman-milo-ais', title: 'Gaya Milo Ais', desc: 'Jom tengok gaya anda dengan Milo ais!' },
  { id: 'minuman-sirap-bandung', title: 'Gaya Sirap Bandung', desc: 'Macam mana gaya anda minum sirap bandung?' },
  { id: 'minuman-air-kelapa', title: 'Gaya Air Kelapa', desc: 'Jom lihat personaliti anda dengan air kelapa!' },
  { id: 'minuman-teh-o-ais-limau', title: 'Gaya Teh O Ais Limau', desc: 'Macam mana style anda dengan teh O ais limau?' },
  
  // Shopping
  { id: 'membeli-belah-1utama', title: 'Gaya di 1Utama', desc: 'Jom tengok gaya shopping anda di 1Utama!' },
  { id: 'membeli-belah-mid-valley', title: 'Gaya di Mid Valley', desc: 'Macam mana anda bila shopping di Mid Valley?' },
  { id: 'membeli-belah-pavilion', title: 'Gaya di Pavilion', desc: 'Jom lihat style anda di Pavilion!' },
  { id: 'membeli-belah-pasar-borong', title: 'Gaya di Pasar Borong', desc: 'Macam mana gaya anda di pasar borong?' },
  { id: 'membeli-belah-night-market', title: 'Gaya di Night Market', desc: 'Jom tengok style anda di pasar malam!' },
  
  // More States
  { id: 'negeri-negeri-sembilan', title: 'Personaliti Negeri Sembilan', desc: 'Adakah anda seperti orang Negeri Sembilan?' },
  { id: 'negeri-perlis', title: 'Personaliti Perlis', desc: 'Adakah anda macam orang Perlis?' },
  { id: 'negeri-labuan', title: 'Personaliti Labuan', desc: 'Jom tengok personaliti Labuan dalam diri anda!' },
  
  // Celebrations
  { id: 'perayaan-raya-aidilfitri', title: 'Gaya Raya Aidilfitri', desc: 'Macam mana gaya anda celebrate Raya?' },
  { id: 'perayaan-cny-malaysia', title: 'Gaya CNY Malaysia', desc: 'Jom tengok gaya anda celebrate CNY!' },
  { id: 'perayaan-deepavali-malaysia', title: 'Gaya Deepavali', desc: 'Macam mana anda celebrate Deepavali?' },
  { id: 'perayaan-christmas-malaysia', title: 'Gaya Christmas', desc: 'Jom lihat gaya anda celebrate Christmas!' },
  { id: 'perayaan-merdeka', title: 'Gaya Hari Merdeka', desc: 'Macam mana anda celebrate Hari Merdeka?' },
  { id: 'perayaan-birthday-ms', title: 'Gaya Birthday', desc: 'Jom tengok gaya birthday anda!' },
  
  // Entertainment
  { id: 'hiburan-drama-melayu', title: 'Gaya Drama Melayu', desc: 'Macam mana anda tengok drama Melayu?' },
  { id: 'hiburan-variety-show', title: 'Gaya Variety Show', desc: 'Jom lihat gaya anda dengan variety show!' },
  { id: 'hiburan-nasyid', title: 'Gaya Nasyid', desc: 'Macam mana anda dengar nasyid?' },
  { id: 'hiburan-rock-kapak', title: 'Gaya Rock Kapak', desc: 'Jom tengok gaya anda dengan rock kapak!' },
  
  // Sports
  { id: 'sukan-badminton-ms', title: 'Gaya Main Badminton', desc: 'Macam mana gaya anda main badminton?' },
  { id: 'sukan-bola-sepak-ms', title: 'Gaya Tonton Bola Sepak', desc: 'Jom tengok gaya anda tonton bola!' },
  { id: 'sukan-jogging-ms', title: 'Gaya Jogging', desc: 'Macam mana style jogging anda?' },
  { id: 'sukan-renang-ms', title: 'Gaya Berenang', desc: 'Jom lihat gaya anda berenang!' },
  { id: 'sukan-gym-ms', title: 'Gaya Gym', desc: 'Macam mana gaya anda di gym?' },
  
  // Work
  { id: 'kerja-cikgu', title: 'Gaya Cikgu', desc: 'Jom tengok gaya anda sebagai cikgu!' },
  { id: 'kerja-doktor', title: 'Gaya Doktor', desc: 'Macam mana gaya anda sebagai doktor?' },
  { id: 'kerja-jurutera', title: 'Gaya Jurutera', desc: 'Jom lihat personaliti jurutera anda!' },
  { id: 'kerja-peguam', title: 'Gaya Peguam', desc: 'Macam mana gaya anda sebagai peguam?' },
  { id: 'kerja-akauntan', title: 'Gaya Akauntan', desc: 'Jom tengok gaya anda sebagai akauntan!' },
  
  // Technology
  { id: 'teknologi-smartphone-ms', title: 'Gaya Guna Smartphone', desc: 'Macam mana anda guna smartphone?' },
  { id: 'teknologi-laptop-ms', title: 'Gaya Guna Laptop', desc: 'Jom tengok gaya anda dengan laptop!' },
  { id: 'teknologi-internet-ms', title: 'Gaya Guna Internet', desc: 'Macam mana style anda online?' },
  { id: 'teknologi-e-wallet', title: 'Gaya Guna E-Wallet', desc: 'Jom lihat gaya anda guna e-wallet!' },
  { id: 'teknologi-online-banking', title: 'Gaya Online Banking', desc: 'Macam mana anda guna online banking?' },
  
  // Daily Life
  { id: 'kehidupan-pagi-ms', title: 'Gaya Pagi', desc: 'Jom tengok gaya pagi anda!' },
  { id: 'kehidupan-malam-ms', title: 'Gaya Malam', desc: 'Macam mana gaya malam anda?' },
  { id: 'kehidupan-hujung-minggu', title: 'Gaya Hujung Minggu', desc: 'Jom lihat gaya weekend anda!' },
  { id: 'kehidupan-cuti', title: 'Gaya Cuti', desc: 'Macam mana anda spend cuti?' },
  { id: 'kehidupan-hujan', title: 'Gaya Bila Hujan', desc: 'Jom tengok apa anda buat bila hujan!' },
  
  // Travel
  { id: 'pelancongan-cameron-highlands', title: 'Gaya di Cameron', desc: 'Macam mana gaya anda di Cameron Highlands?' },
  { id: 'pelancongan-langkawi', title: 'Gaya di Langkawi', desc: 'Jom tengok gaya anda di Langkawi!' },
  { id: 'pelancongan-perhentian', title: 'Gaya di Perhentian', desc: 'Macam mana anda di Pulau Perhentian?' },
  { id: 'pelancongan-tioman', title: 'Gaya di Tioman', desc: 'Jom lihat gaya anda di Tioman!' },
  { id: 'pelancongan-genting', title: 'Gaya di Genting', desc: 'Macam mana gaya anda di Genting?' },
  
  // Personality
  { id: 'personaliti-rajin', title: 'Tahap Rajin', desc: 'Jom ukur tahap rajin anda!' },
  { id: 'personaliti-malas-ms', title: 'Tahap Malas', desc: 'Macam mana tahap malas anda?' },
  { id: 'personaliti-cerewet', title: 'Tahap Cerewet', desc: 'Jom tengok berapa cerewet anda!' },
  { id: 'personaliti-pendiam-ms', title: 'Tahap Pendiam', desc: 'Macam mana tahap pendiam anda?' },
  { id: 'personaliti-garang', title: 'Tahap Garang', desc: 'Jom lihat berapa garang anda!' },
  
  // Communication
  { id: 'komunikasi-whatsapp-ms', title: 'Gaya Chat WhatsApp', desc: 'Macam mana gaya anda chat WhatsApp?' },
  { id: 'komunikasi-panggilan', title: 'Gaya Buat Panggilan', desc: 'Jom tengok gaya anda buat call!' },
  { id: 'komunikasi-mesej', title: 'Gaya Mesej', desc: 'Macam mana style messaging anda?' },
  { id: 'komunikasi-email-ms', title: 'Gaya Email', desc: 'Jom lihat gaya email anda!' },
  { id: 'komunikasi-meeting-online', title: 'Gaya Meeting Online', desc: 'Macam mana anda dalam online meeting?' },
  
  // Values
  { id: 'nilai-gotong-royong', title: 'Tahap Gotong Royong', desc: 'Jom ukur semangat gotong royong anda!' },
  { id: 'nilai-hormat', title: 'Tahap Hormat Orang Tua', desc: 'Macam mana tahap hormat anda?' },
  { id: 'nilai-tolong-menolong', title: 'Tahap Tolong Menolong', desc: 'Jom tengok semangat tolong menolong!' },
  { id: 'nilai-budi-bahasa', title: 'Tahap Budi Bahasa', desc: 'Macam mana budi bahasa anda?' },
  { id: 'nilai-bertolak-ansur', title: 'Tahap Bertolak Ansur', desc: 'Jom lihat tahap bertolak ansur anda!' },
  
  // Psychology
  { id: 'psikologi-marah-ms', title: 'Cara Marah', desc: 'Macam mana anda bila marah?' },
  { id: 'psikologi-sedih-ms', title: 'Cara Sedih', desc: 'Jom tengok cara anda bila sedih!' },
  { id: 'psikologi-gembira-ms', title: 'Cara Gembira', desc: 'Macam mana anda express gembira?' },
  { id: 'psikologi-takut-ms', title: 'Cara Hadapi Takut', desc: 'Jom lihat cara anda hadapi ketakutan!' },
  { id: 'psikologi-malu-ms', title: 'Tahap Malu', desc: 'Macam mana tahap malu anda?' },
  
  // Health
  { id: 'kesihatan-makan', title: 'Gaya Makan', desc: 'Jom tengok gaya makan anda!' },
  { id: 'kesihatan-senaman', title: 'Gaya Senaman', desc: 'Macam mana gaya senaman anda?' },
  { id: 'kesihatan-tidur-ms', title: 'Gaya Tidur', desc: 'Jom lihat sleeping pattern anda!' },
  { id: 'kesihatan-mental-ms', title: 'Gaya Jaga Mental Health', desc: 'Macam mana anda jaga mental health?' },
  { id: 'kesihatan-diet', title: 'Gaya Diet', desc: 'Jom tengok gaya diet anda!' },
  
  // Fashion
  { id: 'fesyen-baju-raya', title: 'Gaya Baju Raya', desc: 'Macam mana style baju raya anda?' },
  { id: 'fesyen-kasut', title: 'Gaya Kasut', desc: 'Jom lihat pilihan kasut anda!' },
  { id: 'fesyen-tudung', title: 'Gaya Tudung', desc: 'Macam mana gaya tudung anda?' },
  { id: 'fesyen-baju-kerja', title: 'Gaya Baju Kerja', desc: 'Jom tengok style baju kerja anda!' },
  { id: 'fesyen-casual', title: 'Gaya Casual', desc: 'Macam mana casual style anda?' },
  
  // Hobbies
  { id: 'hobi-membaca-ms', title: 'Gaya Membaca', desc: 'Jom tengok gaya membaca anda!' },
  { id: 'hobi-memasak-ms', title: 'Gaya Memasak', desc: 'Macam mana gaya masak anda?' },
  { id: 'hobi-fotografi-ms', title: 'Gaya Fotografi', desc: 'Jom lihat gaya fotografi anda!' },
  
  // Money
  { id: 'kewangan-simpanan', title: 'Gaya Simpan Duit', desc: 'Macam mana anda simpan duit?' },
  { id: 'kewangan-belanja', title: 'Gaya Belanja Duit', desc: 'Jom tengok spending habit anda!' },
  { id: 'kewangan-pelaburan', title: 'Gaya Melabur', desc: 'Macam mana gaya pelaburan anda?' },
  { id: 'kewangan-hutang', title: 'Cara Urus Hutang', desc: 'Jom lihat cara anda urus hutang!' },
  { id: 'kewangan-bisnes', title: 'Gaya Berbisnes', desc: 'Macam mana gaya bisnes anda?' },
  
  // Fun
  { id: 'keseronokan-jalan-jalan', title: 'Gaya Jalan-Jalan', desc: 'Jom tengok gaya anda jalan-jalan!' },
  { id: 'keseronokan-menyanyi', title: 'Gaya Menyanyi', desc: 'Macam mana gaya menyanyi anda?' },
  { id: 'keseronokan-menari', title: 'Gaya Menari', desc: 'Jom lihat gaya menari anda!' },
  { id: 'keseronokan-bermain-game', title: 'Gaya Main Game', desc: 'Macam mana gaya gaming anda?' },
  { id: 'keseronokan-menonton-tv', title: 'Gaya Tengok TV', desc: 'Jom tengok TV watching habit!' },
  
  // Humor
  { id: 'jenaka-lawak', title: 'Gaya Lawak', desc: 'Macam mana sense of humor anda?' },
  { id: 'jenaka-meme-ms', title: 'Gaya Meme', desc: 'Jom tengok meme style anda!' },
  { id: 'jenaka-pantun', title: 'Gaya Pantun', desc: 'Macam mana anda dengan pantun?' },
  { id: 'jenaka-sindir', title: 'Gaya Sindir', desc: 'Jom lihat gaya sindir anda!' },
  { id: 'jenaka-gelak', title: 'Gaya Gelak', desc: 'Macam mana gaya gelak anda?' },
  
  // Final
  { id: 'rakan-ms', title: 'Jenis Rakan', desc: 'Jom tengok jenis rakan anda!' },
  { id: 'jiran-ms', title: 'Jenis Jiran', desc: 'Macam mana jenis jiran anda?' },
  { id: 'tetamu-ms', title: 'Gaya Melayan Tetamu', desc: 'Jom lihat gaya anda melayan tetamu!' }
];

const template = (test) => `import { Test } from '@/types';

const ${test.id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}: Test = {
  id: '${test.id}',
  title: '${test.title}',
  description: '${test.desc}',
  questions: [
    {
      id: 1,
      question: 'Biasanya anda macam mana?',
      options: [
        { id: 'A', text: 'Sangat aktif', type: 'A' },
        { id: 'B', text: 'Sederhana', type: 'B' },
        { id: 'C', text: 'Santai', type: 'C' },
        { id: 'D', text: 'Bergantung mood', type: 'D' }
      ]
    },
    {
      id: 2,
      question: 'Pilihan utama anda?',
      options: [
        { id: 'A', text: 'Yang terbaik', type: 'A' },
        { id: 'B', text: 'Yang sesuai', type: 'B' },
        { id: 'C', text: 'Yang simple', type: 'C' },
        { id: 'D', text: 'Yang unik', type: 'D' }
      ]
    },
    {
      id: 3,
      question: 'Bila masa sesuai?',
      options: [
        { id: 'A', text: 'Pagi', type: 'A' },
        { id: 'B', text: 'Tengahari', type: 'B' },
        { id: 'C', text: 'Petang', type: 'C' },
        { id: 'D', text: 'Malam', type: 'D' }
      ]
    },
    {
      id: 4,
      question: 'Dengan siapa lebih best?',
      options: [
        { id: 'A', text: 'Sorang', type: 'A' },
        { id: 'B', text: 'Berdua', type: 'B' },
        { id: 'C', text: 'Berkumpulan kecil', type: 'C' },
        { id: 'D', text: 'Ramai-ramai', type: 'D' }
      ]
    },
    {
      id: 5,
      question: 'Berapa kerap?',
      options: [
        { id: 'A', text: 'Setiap hari', type: 'A' },
        { id: 'B', text: 'Beberapa kali seminggu', type: 'B' },
        { id: 'C', text: 'Sekali seminggu', type: 'C' },
        { id: 'D', text: 'Kadang-kadang je', type: 'D' }
      ]
    },
    {
      id: 6,
      question: 'Di mana suka?',
      options: [
        { id: 'A', text: 'Tempat popular', type: 'A' },
        { id: 'B', text: 'Tempat biasa', type: 'B' },
        { id: 'C', text: 'Tempat tersembunyi', type: 'C' },
        { id: 'D', text: 'Tak kisah tempat', type: 'D' }
      ]
    },
    {
      id: 7,
      question: 'Budget macam mana?',
      options: [
        { id: 'A', text: 'Jimat', type: 'A' },
        { id: 'B', text: 'Berpatutan', type: 'B' },
        { id: 'C', text: 'Moderate', type: 'C' },
        { id: 'D', text: 'Premium', type: 'D' }
      ]
    },
    {
      id: 8,
      question: 'Yang penting untuk anda?',
      options: [
        { id: 'A', text: 'Kualiti', type: 'A' },
        { id: 'B', text: 'Kepuasan', type: 'B' },
        { id: 'C', text: 'Pengalaman', type: 'C' },
        { id: 'D', text: 'Keseronokan', type: 'D' }
      ]
    },
    {
      id: 9,
      question: 'Gaya anda macam mana?',
      options: [
        { id: 'A', text: 'Terancang', type: 'A' },
        { id: 'B', text: 'Fleksibel', type: 'B' },
        { id: 'C', text: 'Spontan', type: 'C' },
        { id: 'D', text: 'Main redah', type: 'D' }
      ]
    },
    {
      id: 10,
      question: 'Bila ada masalah?',
      options: [
        { id: 'A', text: 'Selesaikan cepat', type: 'A' },
        { id: 'B', text: 'Cari penyelesaian', type: 'B' },
        { id: 'C', text: 'Minta pendapat', type: 'C' },
        { id: 'D', text: 'Ikut flow', type: 'D' }
      ]
    },
    {
      id: 11,
      question: 'Kenapa suka?',
      options: [
        { id: 'A', text: 'Memberi manfaat', type: 'A' },
        { id: 'B', text: 'Menenangkan', type: 'B' },
        { id: 'C', text: 'Menghiburkan', type: 'C' },
        { id: 'D', text: 'Mencabar', type: 'D' }
      ]
    },
    {
      id: 12,
      question: 'Harapan anda?',
      options: [
        { id: 'A', text: 'Mencapai matlamat', type: 'A' },
        { id: 'B', text: 'Dapat kepuasan', type: 'B' },
        { id: 'C', text: 'Enjoy the moment', type: 'C' },
        { id: 'D', text: 'Create memories', type: 'D' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Si Berdedikasi',
      description: 'Anda sangat serius dan komited! Anda ada matlamat yang jelas dan berusaha mencapainya. Fokus dan disiplin adalah kekuatan anda!'
    },
    B: {
      title: 'Si Seimbang',
      description: 'Anda tahu cara balance everything! Tak terlalu extreme, tapi tetap konsisten. Anda appreciate quality dan kepuasan!'
    },
    C: {
      title: 'Si Santai',
      description: 'Anda suka enjoy dan take it easy! Anda appreciate the experience lebih dari hasil. Life is about the journey untuk anda!'
    },
    D: {
      title: 'Si Fleksibel',
      description: 'Anda boleh adapt dengan apa sahaja! Easy going dan open minded. Anda suka variety dan pengalaman baru!'
    }
  },
  calculateResult: (answers: string[]) => {
    const counts = answers.reduce((acc, answer) => {
      acc[answer] = (acc[answer] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    return Object.keys(counts).reduce((a, b) => 
      counts[a] > counts[b] ? a : b
    );
  }
};

export default ${test.id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')};
`;

const basePath = '/mnt/c/Users/user/Desktop/coding/ai_playground/src/tests-ms';

tests.forEach(test => {
  const dirPath = path.join(basePath, test.id);
  const filePath = path.join(dirPath, 'index.ts');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  // Write file
  fs.writeFileSync(filePath, template(test));
  console.log(`Created: ${test.id}`);
});

console.log(`\nTotal created: ${tests.length} tests`);
