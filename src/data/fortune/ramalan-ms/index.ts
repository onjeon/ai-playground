// Ramalan Bintang 2025 - Horoskop 12 Zodiak
// Malaysian Horoscope/Zodiac Fortune Data

export type ZodiacSign = 
  | 'aries' | 'taurus' | 'gemini' | 'cancer' 
  | 'leo' | 'virgo' | 'libra' | 'scorpio'
  | 'sagittarius' | 'capricorn' | 'aquarius' | 'pisces';

export interface RamalanData {
  id: ZodiacSign;
  name: string;
  namaMelayu: string;
  emoji: string;
  period: string;
  element: 'Api' | 'Tanah' | 'Udara' | 'Air';
  keywords: string[];
  luckyScore: number;
  overview: string;
  categories: {
    love: string;
    money: string;
    work: string;
    health: string;
    family: string;
  };
  monthly: string[];
  lucky: {
    numbers: number[];
    colors: string[];
    day: string;
    direction: string;
  };
  advice: {
    do: string;
    dont: string;
  };
  bloodTypeCompatibility: {
    A: string;
    B: string;
    O: string;
    AB: string;
  };
}

export const RAMALAN_2025: Record<ZodiacSign, RamalanData> = {
  // ♈ Aries (21 Mac ~ 19 April)
  'aries': {
    id: 'aries',
    name: 'Aries',
    namaMelayu: 'Biri-Biri',
    emoji: '♈',
    period: '21 Mac ~ 19 April',
    element: 'Api',
    keywords: ['Keberanian', 'Kepimpinan', 'Permulaan'],
    luckyScore: 4,
    overview: '2025 adalah tahun peluang dan permulaan baru untuk Aries! Neptune memasuki Aries, intuisi anda akan menjadi sangat tajam. Separuh pertama tahun akan membawa banyak peluang baru. Bertindak berani akan membawa kejayaan!',
    categories: {
      love: 'Musim bunga mungkin bertemu cinta sejati. Aktif mendekati akan membawa hasil. Pasangan akan mempunyai hubungan yang lebih mendalam. Berhati-hati dengan cemburu pada September.',
      money: 'Fokus pada pekerjaan utama akan menguntungkan. Separuh pertama tahun mungkin ada pendapatan tidak dijangka. Separuh kedua perlu urus perbelanjaan.',
      work: 'Peluang untuk tunjukkan kepimpinan dalam projek baru. Peluang kenaikan pangkat tinggi. Mei adalah bulan paling penting.',
      health: 'Berhati-hati dengan kerja berlebihan. Mungkin mengalami sakit kepala dan insomnia. Bersenam secara tetap untuk kurangkan tekanan.',
      family: 'Hubungan keluarga akan lebih rapat tahun ini. Masa yang baik untuk berkumpul. Percutian keluarga pada musim panas sangat digalakkan.',
    },
    monthly: [
      'Januari: Masa yang baik untuk tetapkan matlamat tahun baru. Mulakan gaya hidup sihat.',
      'Februari: Nasib cinta tinggi. Sediakan kejutan untuk Valentine\'s Day.',
      'Mac: Bulan lahir! Nasib di puncak. Cuba perkara baru.',
      'April: Nasib kewangan baik. Boleh pertimbangkan pelaburan.',
      'Mei: Pencapaian kerja diiktiraf. Peluang kenaikan pangkat atau gaji.',
      'Jun: Nasib cinta tinggi. Jadilah proaktif.',
      'Julai: Perlu perhatikan kesihatan. Jangan bekerja berlebihan.',
      'Ogos: Nasib perjalanan baik. Masa untuk berehat.',
      'September: Perluas rangkaian. Kenalan baru akan menjadi aset.',
      'Oktober: Masa membuat keputusan penting. Berhati-hati.',
      'November: Nasib kewangan tinggi. Mungkin ada bonus.',
      'Disember: Penghujung tahun yang baik. Parti akhir tahun membawa tuah.',
    ],
    lucky: {
      numbers: [3, 9, 21],
      colors: ['Merah', 'Oren'],
      day: 'Selasa',
      direction: 'Timur',
    },
    advice: {
      do: 'Berani mencuba perkara baru. Keberanian anda akan diberi ganjaran tahun ini.',
      dont: 'Elakkan keputusan terburu-buru. Berhati-hati terutama pada April dan Julai.',
    },
    bloodTypeCompatibility: {
      A: 'Type A yang berhati-hati akan membantu kawalan diri anda. Pasangan yang baik.',
      B: 'Kedua-dua bebas jadi mungkin ada konflik. Tapi menarik.',
      O: 'Padanan sempurna! Boleh berjaya bersama.',
      AB: 'Perlu masa untuk faham antara satu sama lain, tapi hubungan mendalam mungkin.',
    },
  },

  // ♉ Taurus (20 April ~ 20 Mei)
  'taurus': {
    id: 'taurus',
    name: 'Taurus',
    namaMelayu: 'Lembu Jantan',
    emoji: '♉',
    period: '20 April ~ 20 Mei',
    element: 'Tanah',
    keywords: ['Kestabilan', 'Kemakmuran', 'Kesabaran'],
    luckyScore: 4,
    overview: '2025 adalah tahun kestabilan dan hasil untuk Taurus. Pengaruh Uranus mungkin membawa perubahan tidak dijangka, tetapi ini adalah peluang untuk berkembang. Separuh kedua tahun akan lihat hasil usaha anda.',
    categories: {
      love: 'Tahun yang baik untuk hubungan serius. Nasib perkahwinan tinggi. Bekas kekasih mungkin kembali.',
      money: 'Tahun yang baik untuk menyimpan dan melabur. Hartanah atau pelaburan jangka panjang menguntungkan. Elakkan jamin hutang.',
      work: 'Kekal kerjaya stabil. Mungkin perlu belajar teknologi baru. Separuh kedua tahun mungkin ada kenaikan gaji.',
      health: 'Berhati-hati dengan sakit leher dan bahu. Urut berkesan. Juga perhatikan makan berlebihan.',
      family: 'Keluarga harmoni. Masa yang baik untuk pindah atau ubah suai. Ikatan keluarga akan lebih mendalam.',
    },
    monthly: [
      'Januari: Tetapkan pelan kewangan tahun baru. Tetapkan matlamat simpanan.',
      'Februari: Bulan romantik. Raikan Valentine\'s Day.',
      'Mac: Kerja lebih sibuk. Jaga kesihatan.',
      'April: Bulan lahir! Hadiahkan diri sendiri.',
      'Mei: Hari Ibu, fokus pada keluarga.',
      'Jun: Perlu perjalanan atau rehat. Segar semula.',
      'Julai: Masa keluarga penting. Lebih berkomunikasi.',
      'Ogos: Peluang baru akan datang. Bersedia.',
      'September: Pemeriksaan kesihatan disyorkan. Pencegahan lebih baik dari mengubati.',
      'Oktober: Nasib cinta tinggi. Mungkin bertemu orang istimewa.',
      'November: Nasib kewangan baik. Jangkakan pulangan pelaburan.',
      'Disember: Penghujung tahun stabil. Rancang tahun depan.',
    ],
    lucky: {
      numbers: [2, 6, 15],
      colors: ['Hijau', 'Merah Jambu'],
      day: 'Jumaat',
      direction: 'Tenggara',
    },
    advice: {
      do: 'Melabur atau menyimpan dengan visi jangka panjang. Kesabaran akan diberi ganjaran.',
      dont: 'Jangan terlalu degil. Fleksibiliti juga penting.',
    },
    bloodTypeCompatibility: {
      A: 'Kedua-dua berorientasikan kestabilan jadi sangat serasi. Hubungan aman.',
      B: 'Rentak hidup berbeza mungkin mencabar. Perlu memahami.',
      O: 'Sistem sokongan yang baik untuk satu sama lain.',
      AB: 'Perbualan menarik. Merangsang intelektual.',
    },
  },

  // ♊ Gemini (21 Mei ~ 21 Jun)
  'gemini': {
    id: 'gemini',
    name: 'Gemini',
    namaMelayu: 'Kembar',
    emoji: '♊',
    period: '21 Mei ~ 21 Jun',
    element: 'Udara',
    keywords: ['Komunikasi', 'Rasa Ingin Tahu', 'Serba Boleh'],
    luckyScore: 5,
    overview: '2025 adalah tahun terbaik untuk Gemini! Jupiter memberkati, tenaga pengembangan dan pertumbuhan penuh. Peluang baru terus datang, aktiviti sosial akan membawa nasib besar.',
    categories: {
      love: 'Daya tarikan meletup tahun ini! Banyak peluang untuk bertemu orang. Pasangan akan lebih banyak masa berkualiti, hubungan lebih mendalam.',
      money: 'Pelbagai sumber pendapatan. Kreativiti akan membawa wang. Tapi berhati-hati dengan membeli-belah impulsif.',
      work: 'Bersinar dalam bidang komunikasi, pemasaran, media. Tukar kerja juga baik.',
      health: 'Umumnya baik. Sistem saraf perlu penjagaan. Tingkatkan kualiti tidur.',
      family: 'Komunikasi aktif dengan keluarga. Ikatan adik-beradik akan lebih mendalam.',
    },
    monthly: [
      'Januari: Tetapkan matlamat jelas untuk tahun. Tuliskan.',
      'Februari: Perluas rangkaian. Hargai kenalan baru.',
      'Mac: Nasib kewangan tinggi! Masa baik untuk pelaburan atau perniagaan sampingan.',
      'April: Pencapaian kerja diiktiraf. Yakin diri.',
      'Mei: Bulan lahir! Nasib puncak. Semua berjalan lancar.',
      'Jun: Tenaga Summer Solstice menyokong anda. Petanda cinta.',
      'Julai: Nasib perjalanan baik. Disyorkan trip luar negara.',
      'Ogos: Perlu urus kesihatan. Jangan bekerja berlebihan.',
      'September: Kontrak dan rundingan penting akan berjaya.',
      'Oktober: Berhati-hati dengan kesedihan musim luruh. Cari hobi untuk ubah mood.',
      'November: Bulan susun kewangan. Rancang perbelanjaan akhir tahun.',
      'Disember: Penghujung tahun cemerlang. Bersinar di parti.',
    ],
    lucky: {
      numbers: [5, 14, 23],
      colors: ['Kuning', 'Biru Muda'],
      day: 'Rabu',
      direction: 'Barat',
    },
    advice: {
      do: 'Kongsi idea anda. Suara anda berkuasa tahun ini.',
      dont: 'Jangan buat terlalu banyak perkara sekaligus. Terganggu akan terlepas peluang baik.',
    },
    bloodTypeCompatibility: {
      A: 'Perbualan intelektual meriah. Pasangan baik.',
      B: 'Padanan sempurna! Hormat kebebasan masing-masing.',
      O: 'Hubungan dinamik. Menarik.',
      AB: 'Kedua-dua suka perubahan. Tidak pernah bosan.',
    },
  },

  // ♋ Cancer (22 Jun ~ 22 Julai)
  'cancer': {
    id: 'cancer',
    name: 'Cancer',
    namaMelayu: 'Ketam',
    emoji: '♋',
    period: '22 Jun ~ 22 Julai',
    element: 'Air',
    keywords: ['Keluarga', 'Emosi', 'Perlindungan'],
    luckyScore: 4,
    overview: '2025 adalah tahun fokus keluarga dan pertumbuhan dalaman untuk Cancer. Jupiter memasuki Cancer pada separuh kedua tahun, meningkatkan nasib. Mungkin ada berita baik tentang keluarga atau hartanah.',
    categories: {
      love: 'Mencari cinta hangat seperti keluarga. Masa yang baik untuk serius memikirkan perkahwinan atau tinggal bersama.',
      money: 'Nasib hartanah baik. Baik untuk membeli, menjual, berpindah, mengubah suai. Sokongan keluarga mungkin.',
      work: 'Kerja dari rumah atau freelance akan baik. Kerja kreatif akan ada hasil.',
      health: 'Sistem penghadaman perlu perhatian. Tekanan mudah menjejaskan badan. Makanan hangat dan rehat cukup.',
      family: 'Tahun ikatan keluarga. Mungkin ada acara keluarga penting. Isu penjagaan ibu bapa mungkin timbul.',
    },
    monthly: [
      'Januari: Masa keluarga. Perhimpunan Tahun Baru mengukuhkan ikatan.',
      'Februari: Emosi mungkin turun naik. Jaga diri penting.',
      'Mac: Bulan semak kewangan. Semak perbelanjaan tidak perlu.',
      'April: Perluas rangkaian. Bertemu kawan baru.',
      'Mei: Perubahan kerja mungkin. Respons fleksibel diperlukan.',
      'Jun: Bulan lahir bermula. Hadiahkan diri sendiri.',
      'Julai: Jupiter masuk! Nasib melambung. Semua baik.',
      'Ogos: Bulan romantik. Pertemuan manis dijangkakan.',
      'September: Nasib kewangan tinggi. Pertimbangkan pelaburan atau perniagaan sampingan.',
      'Oktober: Berita keluarga baik akan datang.',
      'November: Titik perubahan kerjaya. Bersedia.',
      'Disember: Penghujung tahun hangat. Hargai masa keluarga.',
    ],
    lucky: {
      numbers: [2, 7, 22],
      colors: ['Putih', 'Perak'],
      day: 'Isnin',
      direction: 'Utara',
    },
    advice: {
      do: 'Labur dalam keluarga dan rumah. Kebahagiaan anda di situ.',
      dont: 'Jangan biar emosi memerintah. Keputusan penting perlu pemikiran tenang.',
    },
    bloodTypeCompatibility: {
      A: 'Sama jadi meyakinkan. Sangat serasi.',
      B: 'Type B bebas mungkin mengelirukan anda. Perlu memahami.',
      O: 'Boleh dipercayai. Hubungan stabil mungkin.',
      AB: 'Merangsang intelektual. Hubungan mendalam mungkin.',
    },
  },

  // ♌ Leo (23 Julai ~ 22 Ogos)
  'leo': {
    id: 'leo',
    name: 'Leo',
    namaMelayu: 'Singa',
    emoji: '♌',
    period: '23 Julai ~ 22 Ogos',
    element: 'Api',
    keywords: ['Kreativiti', 'Keyakinan', 'Ekspresi'],
    luckyScore: 3,
    overview: '2025 adalah tahun kreativiti dan ekspresi diri untuk Leo. Tetapi pengaruh Pluto memerlukan pertumbuhan dan perubahan dalaman. Fokus pada pembangunan dalaman akan memberi hasil lebih baik daripada kejayaan luaran.',
    categories: {
      love: 'Tahun romantik dan penuh ghairah. Tetapi keangkuhan boleh menjadi halangan. Belajar berkompromi.',
      money: 'Pendapatan stabil. Sediakan untuk perbelanjaan tidak dijangka melalui simpanan. Pelaburan selamat lebih baik dari spekulasi.',
      work: 'Diiktiraf dalam projek kreatif. Elakkan perebutan kuasa.',
      health: 'Perhatikan kesihatan jantung dan tekanan darah. Pengurusan tekanan penting. Meditasi atau yoga disyorkan.',
      family: 'Pusat perhatian dalam keluarga. Jangan kedekut memberi sokongan. Cucu akan membawa kegembiraan.',
    },
    monthly: [
      'Januari: Tahun bermula perlahan. Masa merancang.',
      'Februari: Bulan romantik. Rancang tarikh istimewa.',
      'Mac: Kerja mungkin tertekan. Perlu kesabaran.',
      'April: Idea kreatif muncul. Tuliskan.',
      'Mei: Isu hubungan kecil mungkin. Selesai melalui dialog.',
      'Jun: Pemeriksaan kesihatan disyorkan. Pencegahan penting.',
      'Julai: Bulan lahir! Keyakinan tinggi, nasib meningkat.',
      'Ogos: Nasib kewangan baik. Pendapatan sampingan mungkin.',
      'September: Nasib perjalanan baik. Segar semula melalui percutian.',
      'Oktober: Masa keputusan penting. Percaya intuisi.',
      'November: Hubungan sosial bermanfaat. Jaringan.',
      'Disember: Penghujung tahun cemerlang. Banyak peluang bersinar.',
    ],
    lucky: {
      numbers: [1, 8, 19],
      colors: ['Emas', 'Oren'],
      day: 'Ahad',
      direction: 'Selatan',
    },
    advice: {
      do: 'Fokus pada projek kreatif. Jangan takut untuk ekspresikan diri.',
      dont: 'Jangan biar keangkuhan merosakkan. Kerjasama dan kompromi juga diperlukan.',
    },
    bloodTypeCompatibility: {
      A: 'Type A serius akan menyokong anda. Pasangan baik.',
      B: 'Hubungan seronok tapi konflik mungkin. Hormat satu sama lain.',
      O: 'Padanan sempurna! Bantu satu sama lain bersinar.',
      AB: 'Merangsang intelektual. Hubungan menarik.',
    },
  },

  // ♍ Virgo (23 Ogos ~ 22 September)
  'virgo': {
    id: 'virgo',
    name: 'Virgo',
    namaMelayu: 'Dara',
    emoji: '♍',
    period: '23 Ogos ~ 22 September',
    element: 'Tanah',
    keywords: ['Analisis', 'Kesihatan', 'Kesempurnaan'],
    luckyScore: 4,
    overview: '2025 adalah tahun fokus kesihatan dan penambahbaikan kehidupan harian untuk Virgo. Perhatian kepada butiran anda sangat dihargai, kerja diiktiraf. Kurang kesempurnaan akan memberi hasil lebih baik.',
    categories: {
      love: 'Tahun mencari cinta praktikal. Mungkin bertemu seseorang di tempat kerja atau gym. Pasangan patut cipta tabiat sihat bersama.',
      money: 'Simpanan konsisten akan ada hasil. Pendapatan sampingan juga dijangka. September mungkin ada bonus.',
      work: 'Kecekapan sangat dihargai. Fokus pada peningkatan kemahiran lebih dari kenaikan pangkat. Masa yang baik untuk pensijilan.',
      health: 'Tahun terbaik untuk tingkatkan tabiat kesihatan. Diet, senaman akan berjaya. Perhatikan sistem penghadaman.',
      family: 'Peranan mengatur acara keluarga. Jangan terlalu mengkritik.',
    },
    monthly: [
      'Januari: Tetapkan matlamat kesihatan tahun baru. Masa yang baik untuk mula bersenam.',
      'Februari: Kerja lebih sibuk. Urus kesihatan.',
      'Mac: Bulan semak kewangan. Batalkan langganan tidak perlu.',
      'April: Masa untuk semak hubungan. Kenal pasti kawan sejati.',
      'Mei: Peluang baik untuk belajar kemahiran baru. Ambil kursus.',
      'Jun: Pemeriksaan kesihatan disyorkan. Pencegahan penting.',
      'Julai: Nasib perjalanan baik. Percutian aktif.',
      'Ogos: Bulan lahir! Hadiahkan diri sendiri.',
      'September: Kerja berbuah. Yakin diri.',
      'Oktober: Nasib cinta naik. Pertemuan baru dijangkakan.',
      'November: Nasib kewangan baik. Jangkakan bonus atau pendapatan sampingan.',
      'Disember: Bulan mengatur dan membersih. Sambut tahun baru dengan kemas.',
    ],
    lucky: {
      numbers: [5, 14, 23],
      colors: ['Biru Tua', 'Krim'],
      day: 'Rabu',
      direction: 'Barat Daya',
    },
    advice: {
      do: 'Bina tabiat sihat. Penambahbaikan kecil buat perubahan besar.',
      dont: 'Jangan tuntut kesempurnaan berlebihan. Kadang-kadang 80% sudah cukup.',
    },
    bloodTypeCompatibility: {
      A: 'Kedua-dua teliti jadi sangat serasi. Hubungan stabil.',
      B: 'Rentak berbeza mencabar. Perlu kesabaran.',
      O: 'Type O santai membantu anda. Keseimbangan baik.',
      AB: 'Perbualan intelektual menarik. Merangsang.',
    },
  },

  // ♎ Libra (23 September ~ 22 Oktober)
  'libra': {
    id: 'libra',
    name: 'Libra',
    namaMelayu: 'Neraca',
    emoji: '♎',
    period: '23 September ~ 22 Oktober',
    element: 'Udara',
    keywords: ['Keseimbangan', 'Harmoni', 'Kecantikan'],
    luckyScore: 4,
    overview: '2025 adalah tahun hubungan dan perkongsian untuk Libra. Hubungan penting akan lebih mendalam, rasa estetik bersinar. Jangan tangguh keputusan, kadang-kadang pilihan berani diperlukan.',
    categories: {
      love: 'Nasib cinta puncak! Banyak peluang perkahwinan, pertunangan, lamaran. Kemungkinan tinggi bertemu orang ideal.',
      money: 'Pendapatan dari perkongsian. Peluang pelaburan atau perniagaan bersama. Semak kontrak dengan teliti.',
      work: 'Kejayaan melalui kerja berpasukan. Bersinar dalam peranan perundingan atau mediasi. Perniagaan bersama baik.',
      health: 'Perhatikan kesihatan belakang dan buah pinggang. Minum air cukup. Masalah kulit dari tekanan mungkin.',
      family: 'Hubungan keluarga harmoni. Peranan mediasi konflik. Acara keluarga penting mungkin.',
    },
    monthly: [
      'Januari: Rancang tahun baru dengan pasangan.',
      'Februari: Valentine\'s Day istimewa. Masa romantik.',
      'Mac: Perundingan mudah berjaya.',
      'April: Mulakan projek kreatif.',
      'Mei: Isu hubungan kecil mungkin. Kekal neutral.',
      'Jun: Nasib kecantikan tinggi. Masa yang baik untuk tukar imej.',
      'Julai: Nasib perjalanan baik. Trip pasangan.',
      'Ogos: Kerja memerlukan kerja berpasukan.',
      'September: Bulan lahir bermula! Daya tarikan bersinar.',
      'Oktober: Masa keputusan penting. Buang keraguan.',
      'November: Nasib kewangan meningkat. Pendapatan dari perkongsian.',
      'Disember: Penghujung tahun penuh cinta. Masa hangat.',
    ],
    lucky: {
      numbers: [6, 15, 24],
      colors: ['Merah Jambu Pastel', 'Lavender'],
      day: 'Jumaat',
      direction: 'Barat',
    },
    advice: {
      do: 'Labur dalam hubungan. Pasangan akan jadikan anda lebih kuat.',
      dont: 'Jangan tangguh keputusan. Kadang-kadang pilihan berani diperlukan.',
    },
    bloodTypeCompatibility: {
      A: 'Kedua-dua hargai harmoni. Hubungan aman.',
      B: 'Tertarik dengan kebebasan Type B. Hubungan menarik.',
      O: 'Pasangan boleh dipercayai. Serasi baik.',
      AB: 'Kongsi rasa estetik. Pasangan ideal.',
    },
  },

  // ♏ Scorpio (23 Oktober ~ 21 November)
  'scorpio': {
    id: 'scorpio',
    name: 'Scorpio',
    namaMelayu: 'Kala Jengking',
    emoji: '♏',
    period: '23 Oktober ~ 21 November',
    element: 'Air',
    keywords: ['Transformasi', 'Kedalaman', 'Kelahiran Semula'],
    luckyScore: 3,
    overview: '2025 adalah tahun transformasi mendalam dan kelahiran semula untuk Scorpio. Lepaskan masa lalu, tenaga pembaharuan kuat. Jika lepaskan keterikatan, nasib tidak dijangka akan datang.',
    categories: {
      love: 'Tahun hubungan mendalam dan serius. Mungkin ada pertemuan takdir. Pasangan di titik perubahan hubungan.',
      money: 'Nasib dengan warisan, insurans, wang dari orang lain. Masa yang baik untuk susun kewangan dan bayar hutang.',
      work: 'Perubahan organisasi mungkin. Respons fleksibel menjadi peluang. Aktif dalam bidang penyelidikan atau analisis.',
      health: 'Kesihatan reproduktif perlu perhatian. Detoks disyorkan. Kaunseling juga berkesan.',
      family: 'Rahsia keluarga mungkin terbongkar. Masa untuk menyembuhkan luka lama. Rasa hubungan nenek moyang.',
    },
    monthly: [
      'Januari: Susun masa lalu, tetapkan matlamat baru.',
      'Februari: Semak kewangan. Cari perbelanjaan tersembunyi.',
      'Mac: Kebenaran terbongkar dalam hubungan.',
      'April: Kesihatan perlu perhatian. Urus tekanan.',
      'Mei: Perubahan kerja mungkin. Jadikan peluang.',
      'Jun: Masa penyembuhan mental.',
      'Julai: Nasib kewangan baik. Pertimbangkan pelaburan.',
      'Ogos: Perlu perjalanan atau rehat. Segar semula.',
      'September: Intuisi penting datang. Jangan terlepas.',
      'Oktober: Bulan lahir bermula! Tenaga transformasi puncak.',
      'November: Bulan permulaan baru. Lahir semula.',
      'Disember: Pandang semula tahun, tamat dengan kesyukuran.',
    ],
    lucky: {
      numbers: [8, 17, 26],
      colors: ['Merah Wain', 'Hitam'],
      day: 'Selasa',
      direction: 'Barat Laut',
    },
    advice: {
      do: 'Lahir semula dengan melepaskan. Kuasa transformasi adalah kekuatan anda.',
      dont: 'Jangan berpegang. Pengampunan akan membebaskan anda.',
    },
    bloodTypeCompatibility: {
      A: 'Boleh bina hubungan mendalam. Faham satu sama lain.',
      B: 'Penuh ghairah tapi konflik mungkin. Hormat kebebasan masing-masing.',
      O: 'Pasangan kuat. Boleh berkembang bersama.',
      AB: 'Tertarik dengan misteri masing-masing.',
    },
  },

  // ♐ Sagittarius (22 November ~ 21 Disember)
  'sagittarius': {
    id: 'sagittarius',
    name: 'Sagittarius',
    namaMelayu: 'Pemanah',
    emoji: '♐',
    period: '22 November ~ 21 Disember',
    element: 'Api',
    keywords: ['Pengembaraan', 'Optimisme', 'Falsafah'],
    luckyScore: 4,
    overview: '2025 adalah tahun pengembaraan dan pengembangan untuk Sagittarius. Perjalanan dan pembelajaran akan membawa pertumbuhan besar. Tenaga optimis memberi inspirasi kepada orang sekeliling dan menarik peluang baru.',
    categories: {
      love: 'Petanda romantik semasa perjalanan atau belajar. Perhatian pada cinta jarak jauh. Hubungan yang menghormati kebebasan akan berjaya.',
      money: 'Nasib dalam perjudian atau spekulasi. Tapi jangan terlalu yakin. Pendapatan berkaitan luar negara mungkin.',
      work: 'Peluang dalam kerja antarabangsa atau projek pengembangan. Bidang pendidikan, penerbitan, media baik.',
      health: 'Perhatikan kesihatan peha dan hati. Elakkan makan berlebihan. Aktiviti luar bermanfaat.',
      family: 'Pertukaran dengan saudara jauh. Nikmati perbezaan budaya. Kongsi kegembiraan perjalanan dengan keluarga.',
    },
    monthly: [
      'Januari: Rancang perjalanan untuk tahun.',
      'Februari: Motivasi belajar tinggi. Pelajari sesuatu yang baru.',
      'Mac: Nasib kewangan meningkat. Masa yang baik untuk pelaburan atau perniagaan sampingan.',
      'April: Perluas rangkaian. Jaringan.',
      'Mei: Hubungan antarabangsa lebih kuat.',
      'Jun: Perlu urus kesihatan. Elakkan makan berlebihan.',
      'Julai: Pengembaraan musim panas! Perjalanan atau pengalaman baru.',
      'Ogos: Tempoh kreatif. Ekspresikan diri.',
      'September: Peperiksaan atau pembentangan akan berjaya.',
      'Oktober: Ikatan keluarga lebih mendalam.',
      'November: Bulan lahir bermula! Semangat pengembaraan puncak.',
      'Disember: Hari lahir dan Krismas. Sambutan berganda.',
    ],
    lucky: {
      numbers: [3, 12, 21],
      colors: ['Ungu', 'Turquoise'],
      day: 'Khamis',
      direction: 'Tenggara',
    },
    advice: {
      do: 'Terjun ke dalam pengalaman baru. Perjalanan dan pembelajaran akan membantu anda berkembang.',
      dont: 'Jangan janji terlalu banyak. Perancangan realistik juga diperlukan.',
    },
    bloodTypeCompatibility: {
      A: 'Type A teguh membantu anda kekal stabil.',
      B: 'Padanan sempurna! Nikmati kebebasan bersama.',
      O: 'Pasangan dinamik. Boleh kongsi pengembaraan.',
      AB: 'Perbualan intelektual menarik. Tidak pernah bosan.',
    },
  },

  // ♑ Capricorn (22 Disember ~ 19 Januari)
  'capricorn': {
    id: 'capricorn',
    name: 'Capricorn',
    namaMelayu: 'Kambing Laut',
    emoji: '♑',
    period: '22 Disember ~ 19 Januari',
    element: 'Tanah',
    keywords: ['Cita-cita', 'Tanggungjawab', 'Kejayaan'],
    luckyScore: 5,
    overview: '2025 adalah tahun hasil dan kejayaan untuk Capricorn! Pluto bergerak ke Aquarius, membebaskan anda dari tekanan bertahun-tahun. Usaha diberi ganjaran, masa untuk pengiktirafan sosial.',
    categories: {
      love: 'Tahun untuk mencari cinta stabil. Peluang perkahwinan atau pertunangan. Mungkin bertemu seseorang di acara berkaitan kerja.',
      money: 'Nasib kewangan cemerlang. Kenaikan gaji, bonus, pengiktirafan. Pelaburan jangka panjang berbuah.',
      work: 'Puncak kerjaya. Jawatan kepimpinan. Usaha bertahun-tahun diberi ganjaran.',
      health: 'Perhatikan kesihatan tulang, lutut, dan gigi. Ambil kalsium. Tekanan berkurang, kesihatan bertambah baik.',
      family: 'Peranan sebagai tiang keluarga. Mungkin melibatkan warisan atau tanggungjawab. Matlamat keluarga tercapai.',
    },
    monthly: [
      'Januari: Bulan lahir! Nasib kejayaan puncak. Matlamat besar.',
      'Februari: Nasib romantik naik. Cinta stabil.',
      'Mac: Projek besar bermula di tempat kerja.',
      'April: Penilaian dan pengiktirafan.',
      'Mei: Pelaburan berbuah.',
      'Jun: Rehat juga penting. Segar semula.',
      'Julai: Percutian musim panas yang terancang.',
      'Ogos: Kembali bekerja dengan cekap. Matlamat baru.',
      'September: Kepimpinan kerjaya bersinar.',
      'Oktober: Bulan pencapaian.',
      'November: Sediakan untuk akhir tahun.',
      'Disember: Penghujung cemerlang dengan bulan lahir.',
    ],
    lucky: {
      numbers: [4, 13, 22],
      colors: ['Hitam', 'Kelabu Gelap'],
      day: 'Sabtu',
      direction: 'Utara',
    },
    advice: {
      do: 'Nikmati pencapaian. Anda layak mendapatnya.',
      dont: 'Jangan bekerja berlebihan. Menikmati kehidupan juga penting.',
    },
    bloodTypeCompatibility: {
      A: 'Kedua-dua serius jadi sangat serasi. Hubungan boleh dipercayai.',
      B: 'Type B bebas mungkin mengecewakan anda. Perlu memahami.',
      O: 'Pasangan boleh dipercayai. Hubungan stabil.',
      AB: 'Merangsang intelektual. Pasangan perniagaan yang baik juga.',
    },
  },

  // ♒ Aquarius (20 Januari ~ 18 Februari)
  'aquarius': {
    id: 'aquarius',
    name: 'Aquarius',
    namaMelayu: 'Pembawa Air',
    emoji: '♒',
    period: '20 Januari ~ 18 Februari',
    element: 'Udara',
    keywords: ['Inovasi', 'Kebebasan', 'Kemanusiaan'],
    luckyScore: 5,
    overview: '2025 adalah tahun revolusi untuk Aquarius! Pluto sepenuhnya menetap di Aquarius, memulakan perubahan besar dalam kehidupan. Anda adalah pelopor zaman.',
    categories: {
      love: 'Tahun untuk hubungan tidak konvensional. Pertemuan dalam talian atau komuniti. Hubungan menghormati kebebasan akan berjaya.',
      money: 'Pendapatan dari teknologi atau inovasi. Nasib dengan matawang kripto atau pelaburan masa depan. Tapi kekal stabil juga.',
      work: 'Aktif dalam bidang teknologi, startup, perubahan sosial. Kerja jarak jauh atau gaya fleksibel sesuai.',
      health: 'Perhatikan sistem saraf dan buku lali. Perlu detoks digital. Perubatan alternatif juga berkesan.',
      family: 'Keluarga pilihan juga penting. Peranan mengubah tradisi. Bantu orang lain lebih terbuka.',
    },
    monthly: [
      'Januari: Bulan lahir bermula! Revolusi peribadi.',
      'Februari: Hari lahir dan Valentine. Sambut secara unik.',
      'Mac: Idea inovatif terbentuk.',
      'April: Labur dalam teknologi dan masa depan.',
      'Mei: Komuniti dan kawan-kawan penting.',
      'Jun: Tenaga untuk aktiviti sosial.',
      'Julai: Percutian unik. Pengalaman berbeza.',
      'Ogos: Perubahan di tempat kerja. Jadikan peluang.',
      'September: Nasib cinta naik. Pertemuan unik.',
      'Oktober: Mulakan projek inovatif.',
      'November: Susun kewangan. Semak portfolio.',
      'Disember: Tamatkan tahun dengan gaya sendiri.',
    ],
    lucky: {
      numbers: [7, 16, 25],
      colors: ['Biru Elektrik', 'Perak'],
      day: 'Sabtu',
      direction: 'Barat Laut',
    },
    advice: {
      do: 'Jangan takut perubahan, jadilah pelopor. Masa depan milik anda.',
      dont: 'Perubahan terlalu radikal akan mengejutkan orang lain. Perlahan-lahan.',
    },
    bloodTypeCompatibility: {
      A: 'Type A tradisional mungkin bertembung. Usaha untuk memahami diperlukan.',
      B: 'Kedua-dua bebas jadi sangat serasi! Hubungan menarik.',
      O: 'Pasangan dinamik.',
      AB: 'Padanan sempurna! Kongsi inovasi dan intelek.',
    },
  },

  // ♓ Pisces (19 Februari ~ 20 Mac)
  'pisces': {
    id: 'pisces',
    name: 'Pisces',
    namaMelayu: 'Ikan',
    emoji: '♓',
    period: '19 Februari ~ 20 Mac',
    element: 'Air',
    keywords: ['Intuisi', 'Belas Kasihan', 'Impian'],
    luckyScore: 4,
    overview: '2025 adalah tahun kerohanian dan kreativiti untuk Pisces. Saturn berada di Pisces, memberi kuasa untuk jadikan impian kenyataan. Percaya intuisi dan bertindak akan memberi hasil hebat.',
    categories: {
      love: 'Alami cinta romantik dan mendalam. Mungkin ada pertemuan takdir. Tapi berhati-hati jangan terlalu mengidealkan.',
      money: 'Pendapatan dari kreativiti. Seni, muzik, fotografi, dll. Pelaburan intuitif berjaya. Tapi berhati-hati dengan penipuan.',
      work: 'Kerja artistik, rohani berkembang. Kerja membantu orang lain juga baik. Jadikan impian kerja.',
      health: 'Perhatikan kaki dan sistem imun. Tidur penting. Meditasi seperti ubat. Hadkan alkohol.',
      family: 'Hubungan emosi mendalam dengan keluarga. Sembuhkan luka lama. Rasa bimbingan nenek moyang.',
    },
    monthly: [
      'Januari: Tetapkan matlamat intuitif untuk tahun baru.',
      'Februari: Bulan lahir bermula! Penuh inspirasi.',
      'Mac: Hari lahir dan Ekuinoks Musim Bunga. Masa kelahiran semula.',
      'April: Nasib kewangan meningkat. Pendapatan tidak dijangka mungkin.',
      'Mei: Rasa hubungan mendalam dalam perhubungan.',
      'Jun: Perlu urus kesihatan. Rehat cukup.',
      'Julai: Perjalanan laut bermanfaat. Pergi ke pantai atau kolam.',
      'Ogos: Bertindak untuk realisasikan impian.',
      'September: Musim luruh romantik. Cinta lebih mendalam.',
      'Oktober: Intuisi penting datang. Jangan terlepas.',
      'November: Susun kewangan. Derma atau berkongsi juga baik.',
      'Disember: Penghujung tahun rohani. Tamat dengan kesyukuran.',
    ],
    lucky: {
      numbers: [7, 12, 21],
      colors: ['Biru Laut', 'Lavender'],
      day: 'Khamis',
      direction: 'Timur Laut',
    },
    advice: {
      do: 'Percaya intuisi anda. Impian akan menjadi kenyataan.',
      dont: 'Jangan lari dari realiti. Hadapi apa yang perlu dihadapi.',
    },
    bloodTypeCompatibility: {
      A: 'Kedua-dua sensitif jadi faham satu sama lain. Hubungan lembut.',
      B: 'Type B bebas mungkin mengelirukan anda. Tapi menarik.',
      O: 'Boleh dipercayai. Hubungan meyakinkan.',
      AB: 'Hubungan rohani. Hubungan mendalam.',
    },
  },
};

// Fungsi utiliti
export function getRamalan(sign: ZodiacSign): RamalanData {
  return RAMALAN_2025[sign];
}

export function getSignByDate(month: number, day: number): ZodiacSign {
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'aries';
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'taurus';
  if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) return 'gemini';
  if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) return 'cancer';
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'leo';
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'virgo';
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'libra';
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'scorpio';
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'sagittarius';
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'capricorn';
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'aquarius';
  return 'pisces';
}

export function getAllSigns(): ZodiacSign[] {
  return ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 
          'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'];
}
