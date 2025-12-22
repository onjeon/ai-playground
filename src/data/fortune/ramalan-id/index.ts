// Ramalan Zodiak Indonesia 2025
// Indonesian Zodiac Fortune Data

export type Zodiak = 
  | 'aries' | 'taurus' | 'gemini' | 'cancer' 
  | 'leo' | 'virgo' | 'libra' | 'scorpio'
  | 'sagitarius' | 'capricorn' | 'aquarius' | 'pisces';

export interface RamalanData {
  id: Zodiak;
  name: string;
  namaIndonesia: string;
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

export const RAMALAN_2025: Record<Zodiak, RamalanData> = {
  // ♈ Aries (21 Maret ~ 19 April)
  aries: {
    id: 'aries',
    name: 'Aries',
    namaIndonesia: 'Aries',
    emoji: '♈',
    period: '21 Maret - 19 April',
    element: 'Api',
    keywords: ['Semangat', 'Kepemimpinan', 'Keberanian'],
    luckyScore: 4,
    overview: 'Tahun 2025 adalah tahun penuh semangat dan tantangan bagi Aries! Neptunus memasuki zodiak Anda, membuat intuisi semakin tajam. Paruh pertama tahun membawa peluang baru, dan tindakan berani akan membuahkan hasil besar. Tapi hindari keputusan impulsif.',
    categories: {
      love: 'Musim semi membawa pertemuan yang ditakdirkan. Jangan ragu untuk mendekati orang yang Anda sukai. Pasangan akan semakin dekat. September waspada cemburu.',
      money: 'Fokus pada pekerjaan utama. Paruh pertama ada pendapatan tak terduga, paruh kedua kelola pengeluaran. Pembelian besar perlu pertimbangan matang.',
      work: 'Proyek baru membutuhkan kepemimpinan Anda. Ada peluang promosi. Mei adalah waktu krusial untuk menunjukkan kemampuan.',
      health: 'Waspada kelelahan. Sakit kepala dan insomnia mungkin terjadi. Olahraga teratur untuk mengurangi stres.',
      family: 'Ikatan keluarga semakin erat. Waktu yang tepat untuk berbakti pada orang tua. Liburan keluarga di musim panas sangat baik.',
    },
    monthly: [
      'Januari: Waktu terbaik menetapkan target tahun baru. Mulai pola hidup sehat.',
      'Februari: Romantisme meningkat. Kejutan di Hari Valentine akan berkesan.',
      'Maret: Bulan kelahiran! Energi di puncak. Mulai hal baru.',
      'April: Keuangan membaik. Pertimbangkan investasi.',
      'Mei: Pengakuan di tempat kerja. Promosi atau kenaikan gaji mungkin terjadi.',
      'Juni: Cinta sedang naik daun. Berani ambil langkah.',
      'Juli: Kesehatan perlu perhatian. Jangan memaksakan diri.',
      'Agustus: Perjalanan membawa keberuntungan. Waktu refreshing.',
      'September: Hubungan sosial berkembang. Jaringan baru jadi aset.',
      'Oktober: Keputusan penting menanti. Pertimbangkan baik-baik.',
      'November: Rejeki tak terduga. Kemungkinan bonus.',
      'Desember: Penutup tahun yang meriah. Rayakan pencapaian.',
    ],
    lucky: {
      numbers: [3, 9, 21],
      colors: ['Merah', 'Oranye'],
      day: 'Selasa',
      direction: 'Timur',
    },
    advice: {
      do: 'Berani mengambil tantangan baru. Keberanian Anda akan terbayar tahun ini.',
      dont: 'Hindari tindakan impulsif. Terutama di April dan Juli, hati-hati.',
    },
    bloodTypeCompatibility: {
      A: 'Golongan A yang hati-hati bisa menahan keimpulsifan Anda. Partner yang baik.',
      B: 'Sama-sama bebas, bisa bentrok. Tapi hubungan yang menarik.',
      O: 'Kecocokan terbaik! Saling mendukung dan memotivasi.',
      AB: 'Perlu waktu untuk saling memahami, tapi bisa jadi ikatan yang dalam.',
    },
  },

  // ♉ Taurus (20 April ~ 20 Mei)
  taurus: {
    id: 'taurus',
    name: 'Taurus',
    namaIndonesia: 'Taurus',
    emoji: '♉',
    period: '20 April - 20 Mei',
    element: 'Tanah',
    keywords: ['Stabilitas', 'Ketekunan', 'Kemakmuran'],
    luckyScore: 4,
    overview: 'Tahun 2025 adalah tahun stabilitas dan hasil panen bagi Taurus. Pengaruh Uranus membawa perubahan tak terduga, tapi ini peluang untuk berkembang. Paruh kedua tahun usaha Anda akan berbuah.',
    categories: {
      love: 'Tahun yang baik untuk hubungan serius. Peluang pernikahan meningkat. Cinta masa lalu mungkin kembali.',
      money: 'Tahun yang baik untuk menabung dan investasi. Properti dan investasi jangka panjang menguntungkan. Hindari jadi penjamin utang.',
      work: 'Karir stabil. Mungkin perlu belajar teknologi baru. Paruh kedua ada kemungkinan kenaikan gaji.',
      health: 'Perhatikan leher dan bahu. Pijat sangat membantu. Hindari makan berlebihan.',
      family: 'Keharmonisan keluarga. Waktu yang baik untuk renovasi atau pindah rumah. Ikatan keluarga menguat.',
    },
    monthly: [
      'Januari: Buat rencana keuangan tahun ini. Tetapkan target tabungan.',
      'Februari: Bulan romantis. Manfaatkan Valentine dengan baik.',
      'Maret: Pekerjaan mulai sibuk. Jaga stamina.',
      'April: Bulan kelahiran! Manjakan diri sedikit.',
      'Mei: Waktu untuk keluarga. Rayakan Hari Ibu.',
      'Juni: Perlu istirahat dan refreshing.',
      'Juli: Komunikasi keluarga penting. Jaga hubungan baik.',
      'Agustus: Peluang baru datang. Bersiaplah.',
      'September: Waktunya medical check-up. Pencegahan lebih baik.',
      'Oktober: Romantisme meningkat. Pertemuan menarik mungkin terjadi.',
      'November: Keuangan membaik. Hasil investasi mulai terlihat.',
      'Desember: Akhir tahun yang stabil. Buat rencana tahun depan.',
    ],
    lucky: {
      numbers: [2, 6, 15],
      colors: ['Hijau', 'Pink'],
      day: 'Jumat',
      direction: 'Tenggara',
    },
    advice: {
      do: 'Investasi jangka panjang. Ketekunan akan terbayar.',
      dont: 'Jangan terlalu keras kepala. Fleksibilitas juga penting.',
    },
    bloodTypeCompatibility: {
      A: 'Sama-sama stabil, kecocokan luar biasa. Hubungan harmonis.',
      B: 'Perbedaan ritme bisa membingungkan. Butuh pengertian.',
      O: 'Saling mendukung dengan baik.',
      AB: 'Percakapan intelektual menyenangkan. Hubungan menarik.',
    },
  },

  // ♊ Gemini (21 Mei ~ 20 Juni)
  gemini: {
    id: 'gemini',
    name: 'Gemini',
    namaIndonesia: 'Gemini',
    emoji: '♊',
    period: '21 Mei - 20 Juni',
    element: 'Udara',
    keywords: ['Komunikasi', 'Kecerdasan', 'Fleksibilitas'],
    luckyScore: 5,
    overview: 'Tahun 2025 adalah tahun terbaik untuk Gemini! Berkah Jupiter membawa energi ekspansi dan pertumbuhan. Peluang melimpah, aktivitas sosial membawa keberuntungan besar.',
    categories: {
      love: 'Daya tarik meledak! Peluang pertemuan banyak. Pasangan akan semakin dekat dan hubungan makin dalam.',
      money: 'Pendapatan dari berbagai sumber. Kreativitas menghasilkan uang. Waspada belanja impulsif.',
      work: 'Cemerlang di bidang komunikasi, pemasaran, dan media. Perubahan karir juga menguntungkan.',
      health: 'Secara umum baik. Jaga sistem saraf. Tingkatkan kualitas tidur.',
      family: 'Komunikasi keluarga aktif. Hubungan dengan saudara menguat.',
    },
    monthly: [
      'Januari: Tetapkan target dengan jelas. Tulis dan visualisasikan.',
      'Februari: Jaringan sosial berkembang. Hargai pertemuan baru.',
      'Maret: Keuangan naik! Waktu baik untuk investasi atau usaha sampingan.',
      'April: Kerja diakui. Percaya diri.',
      'Mei: Bulan kelahiran! Momentum terbaik. Mulai apa saja.',
      'Juni: Kekuatan matahari musim panas mendukung. Romantisme meningkat.',
      'Juli: Perjalanan membawa keberuntungan. Traveling luar negeri direkomendasikan.',
      'Agustus: Jaga kesehatan. Jangan memaksakan diri.',
      'September: Kontrak dan negosiasi sukses.',
      'Oktober: Waspada mood swing musim gugur. Hobi untuk refresh.',
      'November: Atur keuangan. Rencanakan pengeluaran akhir tahun.',
      'Desember: Akhir tahun yang meriah. Tampil bersinar di acara sosial.',
    ],
    lucky: {
      numbers: [5, 14, 23],
      colors: ['Kuning', 'Biru Muda'],
      day: 'Rabu',
      direction: 'Barat',
    },
    advice: {
      do: 'Sampaikan ide-ide Anda. Tahun ini suara Anda memiliki kekuatan.',
      dont: 'Jangan terlalu banyak fokus. Kehilangan konsentrasi bisa melewatkan peluang.',
    },
    bloodTypeCompatibility: {
      A: 'Percakapan intelektual mengalir. Partner yang baik.',
      B: 'Kecocokan terbaik! Saling menghargai kebebasan.',
      O: 'Hubungan energetik. Menarik.',
      AB: 'Dua kepribadian yang menikmati perubahan. Tidak membosankan.',
    },
  },

  // ♋ Cancer (21 Juni ~ 22 Juli)
  cancer: {
    id: 'cancer',
    name: 'Cancer',
    namaIndonesia: 'Cancer',
    emoji: '♋',
    period: '21 Juni - 22 Juli',
    element: 'Air',
    keywords: ['Keluarga', 'Kasih Sayang', 'Intuisi'],
    luckyScore: 4,
    overview: 'Tahun 2025 fokus pada keluarga dan pertumbuhan batin untuk Cancer. Jupiter berpindah ke Cancer di paruh kedua, meningkatkan keberuntungan. Mungkin ada kabar baik tentang keluarga atau properti.',
    categories: {
      love: 'Tahun mencari hubungan hangat seperti keluarga. Waktu serius untuk pernikahan atau tinggal bersama.',
      money: 'Keberuntungan properti bagus. Pindah rumah, jual beli, renovasi menguntungkan. Dukungan keluarga juga datang.',
      work: 'Bekerja dari rumah atau freelance menguntungkan. Pekerjaan kreatif membuahkan hasil.',
      health: 'Perhatikan pencernaan. Stres mudah memengaruhi tubuh. Makanan hangat dan istirahat cukup.',
      family: 'Ikatan keluarga menguat. Mungkin ada acara penting. Isu perawatan orang tua bisa muncul.',
    },
    monthly: [
      'Januari: Waktu keluarga penting. Kumpul tahun baru menghangatkan.',
      'Februari: Emosi mungkin naik turun. Jaga diri.',
      'Maret: Periksa keuangan. Kurangi pemborosan.',
      'April: Hubungan sosial berkembang. Pertemanan baru.',
      'Mei: Kemungkinan perubahan pekerjaan. Fleksibel merespons.',
      'Juni: Awal bulan kelahiran. Manjakan diri.',
      'Juli: Jupiter masuk! Keberuntungan melonjak. Semua berjalan lancar.',
      'Agustus: Bulan romantis. Pertemuan manis.',
      'September: Keuangan naik. Pertimbangkan investasi atau usaha sampingan.',
      'Oktober: Kabar baik tentang keluarga.',
      'November: Titik balik karir. Bersiaplah.',
      'Desember: Akhir tahun hangat. Hargai waktu keluarga.',
    ],
    lucky: {
      numbers: [2, 7, 22],
      colors: ['Putih', 'Perak'],
      day: 'Senin',
      direction: 'Utara',
    },
    advice: {
      do: 'Investasi untuk keluarga dan rumah. Kebahagiaan Anda ada di sana.',
      dont: 'Jangan terbawa emosi. Keputusan penting harus tenang.',
    },
    bloodTypeCompatibility: {
      A: 'Mirip dan nyaman. Kecocokan luar biasa.',
      B: 'B yang bebas bisa membuat bingung. Butuh pengertian.',
      O: 'Bisa diandalkan. Hubungan stabil.',
      AB: 'Stimulasi intelektual. Bisa jadi ikatan yang dalam.',
    },
  },

  // ♌ Leo (23 Juli ~ 22 Agustus)
  leo: {
    id: 'leo',
    name: 'Leo',
    namaIndonesia: 'Leo',
    emoji: '♌',
    period: '23 Juli - 22 Agustus',
    element: 'Api',
    keywords: ['Kreativitas', 'Kepercayaan Diri', 'Karisma'],
    luckyScore: 3,
    overview: 'Tahun 2025 adalah tahun ekspresi diri dan kreativitas bersinar untuk Leo. Namun pengaruh Pluto meminta perubahan dan pertumbuhan batin. Fokus pada perkembangan internal daripada kesuksesan eksternal akan membawa hasil lebih baik.',
    categories: {
      love: 'Tahun romansa dan gairah. Tapi ego bisa menghalangi. Belajar mengalah.',
      money: 'Pendapatan stabil. Siapkan tabungan untuk pengeluaran tak terduga. Investasi aman lebih baik dari spekulasi.',
      work: 'Proyek kreatif mendapat perhatian. Hindari terlibat perebutan kekuasaan.',
      health: 'Perhatikan jantung dan tekanan darah. Manajemen stres penting. Meditasi atau yoga direkomendasikan.',
      family: 'Jadi pusat perhatian keluarga. Jangan pelit dukungan. Keponakan bisa jadi penghibur.',
    },
    monthly: [
      'Januari: Mulai rendah hati. Waktu menyusun rencana.',
      'Februari: Bulan romantis. Buat kencan spesial.',
      'Maret: Mungkin stres di tempat kerja. Butuh kesabaran.',
      'April: Ide kreatif bermunculan. Catat.',
      'Mei: Masalah kecil dalam hubungan. Dialog untuk menyelesaikan.',
      'Juni: Waktunya medical check-up. Deteksi dini penting.',
      'Juli: Bulan kelahiran! Kepercayaan diri naik, keberuntungan meningkat.',
      'Agustus: Keuangan membaik. Kemungkinan pendapatan sampingan.',
      'September: Perjalanan membawa keberuntungan. Waktu refreshing.',
      'Oktober: Keputusan penting. Ikuti intuisi.',
      'November: Jaringan sosial berguna. Aktif networking.',
      'Desember: Akhir tahun bersinar. Banyak momen jadi pusat perhatian.',
    ],
    lucky: {
      numbers: [1, 8, 19],
      colors: ['Emas', 'Oranye'],
      day: 'Minggu',
      direction: 'Selatan',
    },
    advice: {
      do: 'Fokus pada proyek kreatif. Jangan takut mengekspresikan diri.',
      dont: 'Jangan biarkan ego merugikan. Kerjasama dan kompromi juga diperlukan.',
    },
    bloodTypeCompatibility: {
      A: 'A yang serius mendukung Anda. Partner yang baik.',
      B: 'Hubungan menyenangkan tapi bisa bentrok. Saling menghormati.',
      O: 'Kecocokan terbaik! Saling membuat bersinar.',
      AB: 'Stimulasi intelektual. Hubungan menarik.',
    },
  },

  // ♍ Virgo (23 Agustus ~ 22 September)
  virgo: {
    id: 'virgo',
    name: 'Virgo',
    namaIndonesia: 'Virgo',
    emoji: '♍',
    period: '23 Agustus - 22 September',
    element: 'Tanah',
    keywords: ['Ketelitian', 'Kesehatan', 'Pelayanan'],
    luckyScore: 4,
    overview: 'Tahun 2025 fokus pada kesehatan dan perbaikan kehidupan sehari-hari untuk Virgo. Perhatian pada detail dihargai dan diakui di tempat kerja. Sedikit melonggarkan perfeksionisme akan membawa hasil lebih baik.',
    categories: {
      love: 'Tahun mencari cinta praktis. Kemungkinan pertemuan di kantor atau gym. Pasangan membangun kebiasaan sehat bersama.',
      money: 'Tabungan konsisten membuahkan hasil. Pendapatan sampingan juga diharapkan. September mungkin ada bonus.',
      work: 'Efisiensi dihargai. Fokus pada peningkatan kemampuan daripada promosi. Waktu yang baik untuk sertifikasi.',
      health: 'Tahun terbaik untuk memperbaiki kebiasaan sehat. Diet dan rutinitas olahraga sukses. Perhatikan sistem pencernaan.',
      family: 'Jadi perencana acara keluarga. Jangan terlalu kritis.',
    },
    monthly: [
      'Januari: Tetapkan target kesehatan tahun baru. Waktu terbaik mulai olahraga.',
      'Februari: Pekerjaan mulai sibuk. Jaga stamina.',
      'Maret: Periksa keuangan. Atur langganan yang tidak perlu.',
      'April: Waktu evaluasi hubungan. Kenali teman sejati.',
      'Mei: Peluang bagus belajar skill baru. Ikut kursus.',
      'Juni: Waktunya medical check-up. Pencegahan lebih baik.',
      'Juli: Perjalanan membawa keberuntungan. Liburan aktif.',
      'Agustus: Bulan kelahiran! Manjakan diri.',
      'September: Hasil kerja terlihat. Percaya diri.',
      'Oktober: Romantisme naik. Pertemuan baru mungkin terjadi.',
      'November: Keuangan membaik. Kemungkinan bonus atau pendapatan sampingan.',
      'Desember: Bulan bersih-bersih. Rapikan untuk menyambut tahun baru.',
    ],
    lucky: {
      numbers: [5, 14, 23],
      colors: ['Navy', 'Beige'],
      day: 'Rabu',
      direction: 'Barat Daya',
    },
    advice: {
      do: 'Bangun kebiasaan sehat. Perbaikan kecil membawa perubahan besar.',
      dont: 'Jangan terlalu perfeksionis. Kadang 80% sudah cukup.',
    },
    bloodTypeCompatibility: {
      A: 'Sama-sama teliti, kecocokan luar biasa. Hubungan stabil.',
      B: 'Perbedaan ritme bisa melelahkan. Butuh kesabaran.',
      O: 'O yang santai menenangkan. Hubungan seimbang.',
      AB: 'Percakapan intelektual menyenangkan. Menarik.',
    },
  },

  // ♎ Libra (23 September ~ 22 Oktober)
  libra: {
    id: 'libra',
    name: 'Libra',
    namaIndonesia: 'Libra',
    emoji: '♎',
    period: '23 September - 22 Oktober',
    element: 'Udara',
    keywords: ['Keseimbangan', 'Harmoni', 'Keindahan'],
    luckyScore: 4,
    overview: 'Tahun 2025 berpusat pada hubungan dan kemitraan untuk Libra. Ikatan penting semakin dalam, dan selera estetika bersinar. Jangan menunda keputusan, kadang pilihan berani diperlukan.',
    categories: {
      love: 'Keberuntungan cinta terbaik! Peluang pernikahan, pertunangan, lamaran melimpah. Kemungkinan besar bertemu pasangan ideal.',
      money: 'Pendapatan dari kemitraan. Peluang investasi bersama atau bisnis. Periksa kontrak dengan teliti.',
      work: 'Sukses dengan kerja tim. Kemampuan negosiasi dan mediasi terbukti. Bisnis dengan partner menguntungkan.',
      health: 'Perhatikan pinggang dan ginjal. Minum air yang cukup. Waspadai masalah kulit karena stres.',
      family: 'Hubungan keluarga harmonis. Jadi mediator konflik. Mungkin ada acara keluarga penting.',
    },
    monthly: [
      'Januari: Buat rencana tahun baru bersama partner.',
      'Februari: Valentine jadi spesial. Waktu romantis.',
      'Maret: Negosiasi sukses.',
      'April: Mulai proyek kreatif.',
      'Mei: Kemungkinan masalah hubungan. Tetap netral.',
      'Juni: Keberuntungan kecantikan naik. Waktu yang baik untuk ganti penampilan.',
      'Juli: Perjalanan membawa keberuntungan. Traveling pasangan.',
      'Agustus: Kerja tim dibutuhkan.',
      'September: Awal bulan kelahiran! Pesona bersinar.',
      'Oktober: Keputusan penting. Buang keraguan.',
      'November: Keuangan naik. Pendapatan dari kemitraan.',
      'Desember: Akhir tahun penuh cinta. Waktu hangat.',
    ],
    lucky: {
      numbers: [6, 15, 24],
      colors: ['Pink Pastel', 'Lavender'],
      day: 'Jumat',
      direction: 'Barat',
    },
    advice: {
      do: 'Investasi pada hubungan. Kemitraan memperkuat Anda.',
      dont: 'Jangan menunda keputusan. Kadang pilihan berani diperlukan.',
    },
    bloodTypeCompatibility: {
      A: 'Dua yang menghargai harmoni. Hubungan tenang.',
      B: 'Tertarik pada B yang bebas. Hubungan menarik.',
      O: 'O yang bisa diandalkan, kecocokan bagus.',
      AB: 'Berbagi selera estetika. Pasangan ideal.',
    },
  },

  // ♏ Scorpio (23 Oktober ~ 21 November)
  scorpio: {
    id: 'scorpio',
    name: 'Scorpio',
    namaIndonesia: 'Scorpio',
    emoji: '♏',
    period: '23 Oktober - 21 November',
    element: 'Air',
    keywords: ['Transformasi', 'Kedalaman', 'Regenerasi'],
    luckyScore: 3,
    overview: 'Tahun 2025 adalah tahun transformasi dan regenerasi mendalam untuk Scorpio. Lepaskan masa lalu dan energi kelahiran kembali kuat. Melepas keterikatan akan membawa keberuntungan tak terduga.',
    categories: {
      love: 'Tahun mengalami hubungan yang dalam dan serius. Kemungkinan pertemuan takdir. Pasangan di titik balik hubungan.',
      money: 'Keberuntungan terkait warisan, asuransi, uang dari orang lain. Waktu yang baik untuk mengatur keuangan dan melunasi utang.',
      work: 'Kemungkinan perubahan dalam organisasi. Fleksibilitas akan jadi peluang. Aktif di bidang riset dan analisis.',
      health: 'Perhatikan sistem reproduksi. Detoks direkomendasikan. Konseling psikologi juga efektif.',
      family: 'Rahasia keluarga mungkin terungkap. Waktu menyembuhkan luka lama. Mungkin ada kejadian terkait leluhur.',
    },
    monthly: [
      'Januari: Rapikan masa lalu, tetapkan target baru.',
      'Februari: Periksa keuangan. Temukan pengeluaran tersembunyi.',
      'Maret: Kebenaran terungkap dalam hubungan.',
      'April: Kesehatan perlu perhatian. Kelola stres.',
      'Mei: Kemungkinan perubahan pekerjaan. Jadikan peluang.',
      'Juni: Waktu penyembuhan mental.',
      'Juli: Keuangan membaik. Pertimbangkan investasi.',
      'Agustus: Perjalanan atau istirahat diperlukan. Refreshing.',
      'September: Intuisi penting datang. Jangan lewatkan.',
      'Oktober: Awal bulan kelahiran! Energi transformasi di puncak.',
      'November: Bulan awal baru. Lahir kembali.',
      'Desember: Refleksi setahun, tutup dengan syukur.',
    ],
    lucky: {
      numbers: [8, 17, 26],
      colors: ['Merah Marun', 'Hitam'],
      day: 'Selasa',
      direction: 'Barat Laut',
    },
    advice: {
      do: 'Lahir kembali dengan melepaskan. Kekuatan transformasi adalah keunggulan Anda.',
      dont: 'Jangan terlalu melekat. Memaafkan akan membebaskan Anda.',
    },
    bloodTypeCompatibility: {
      A: 'Bisa membangun ikatan yang dalam. Hubungan saling memahami.',
      B: 'Bergairah tapi bisa bentrok. Hormati kebebasan masing-masing.',
      O: 'Pasangan yang kuat. Saling meningkatkan.',
      AB: 'Tertarik pada pesona misterius.',
    },
  },

  // ♐ Sagitarius (22 November ~ 21 Desember)
  sagitarius: {
    id: 'sagitarius',
    name: 'Sagitarius',
    namaIndonesia: 'Sagitarius',
    emoji: '♐',
    period: '22 November - 21 Desember',
    element: 'Api',
    keywords: ['Petualangan', 'Optimisme', 'Kebebasan'],
    luckyScore: 4,
    overview: 'Tahun 2025 adalah tahun petualangan dan ekspansi untuk Sagitarius. Perjalanan dan pembelajaran membawa pertumbuhan besar. Energi optimis menginspirasi sekitar dan menarik peluang baru.',
    categories: {
      love: 'Romantisme mungkin di perjalanan atau tempat belajar. Waspada hubungan jarak jauh. Hubungan yang menghargai kebebasan menguntungkan.',
      money: 'Keberuntungan dalam permainan atau spekulasi. Tapi jangan terlalu percaya diri. Kemungkinan pendapatan terkait luar negeri.',
      work: 'Peluang di pekerjaan terkait luar negeri atau proyek ekspansi. Bidang pendidikan, penerbitan, media menguntungkan.',
      health: 'Perhatikan paha dan hati. Kurangi makan dan minum berlebihan. Aktivitas outdoor menguntungkan.',
      family: 'Hubungan dengan kerabat jauh. Nikmati perbedaan budaya. Bagikan kesenangan traveling pada keluarga.',
    },
    monthly: [
      'Januari: Buat rencana perjalanan tahun baru.',
      'Februari: Semangat belajar meningkat. Pelajari hal baru.',
      'Maret: Keuangan naik. Waktu yang baik untuk investasi atau usaha sampingan.',
      'April: Jaringan sosial berkembang. Aktif networking.',
      'Mei: Koneksi luar negeri menguat.',
      'Juni: Jaga kesehatan. Waspada makan berlebihan.',
      'Juli: Petualangan musim panas! Traveling atau pengalaman baru.',
      'Agustus: Waktu kreatif. Ekspresikan diri.',
      'September: Ujian atau presentasi sukses.',
      'Oktober: Ikatan keluarga menguat.',
      'November: Awal bulan kelahiran! Semangat petualangan penuh.',
      'Desember: Bulan kelahiran dan Natal. Rayakan dobel.',
    ],
    lucky: {
      numbers: [3, 12, 21],
      colors: ['Ungu', 'Turquoise'],
      day: 'Kamis',
      direction: 'Tenggara',
    },
    advice: {
      do: 'Terjun ke pengalaman baru. Perjalanan dan pembelajaran akan menumbuhkan Anda.',
      dont: 'Jangan terlalu banyak janji. Rencana realistis juga diperlukan.',
    },
    bloodTypeCompatibility: {
      A: 'A yang teguh membantu membumi.',
      B: 'Kecocokan terbaik! Dua yang menikmati kebebasan.',
      O: 'Pasangan aktif. Berbagi petualangan.',
      AB: 'Percakapan intelektual menyenangkan. Hubungan tidak membosankan.',
    },
  },

  // ♑ Capricorn (22 Desember ~ 19 Januari)
  capricorn: {
    id: 'capricorn',
    name: 'Capricorn',
    namaIndonesia: 'Capricorn',
    emoji: '♑',
    period: '22 Desember - 19 Januari',
    element: 'Tanah',
    keywords: ['Ambisi', 'Tanggung Jawab', 'Kesuksesan'],
    luckyScore: 5,
    overview: 'Tahun 2025 adalah tahun panen dan sukses untuk Capricorn! Pluto berpindah ke Aquarius, membebaskan dari tekanan bertahun-tahun. Usaha terbayar, waktu mendapat pengakuan sosial.',
    categories: {
      love: 'Tahun mencari cinta stabil. Peluang pernikahan atau pertunangan. Kemungkinan pertemuan di acara kerja.',
      money: 'Keberuntungan finansial luar biasa. Kenaikan gaji, bonus, pengakuan. Investasi jangka panjang membuahkan hasil.',
      work: 'Puncak karir. Menuju posisi kepemimpinan. Usaha bertahun-tahun terbayar.',
      health: 'Perhatikan tulang, lutut, dan gigi. Konsumsi kalsium. Stres berkurang, kondisi membaik.',
      family: 'Peran sebagai pilar keluarga. Tanggung jawab dan warisan menyertai. Acara keluarga yang memuaskan.',
    },
    monthly: [
      'Januari: Bulan kelahiran! Keberuntungan sukses di puncak. Target besar.',
      'Februari: Romantisme naik. Cinta stabil.',
      'Maret: Proyek besar bergerak di tempat kerja.',
      'April: Evaluasi dan pengakuan diterima.',
      'Mei: Investasi membuahkan hasil.',
      'Juni: Istirahat juga penting. Refreshing.',
      'Juli: Liburan musim panas yang terencana.',
      'Agustus: Kembali produktif. Target baru.',
      'September: Kepemimpinan karir terbukti.',
      'Oktober: Bulan yang memuaskan.',
      'November: Persiapan akhir tahun.',
      'Desember: Finish terbaik dengan bulan kelahiran.',
    ],
    lucky: {
      numbers: [4, 13, 22],
      colors: ['Hitam', 'Abu-abu Tua'],
      day: 'Sabtu',
      direction: 'Utara',
    },
    advice: {
      do: 'Nikmati pencapaian. Anda layak mendapatkannya.',
      dont: 'Jangan terlalu keras bekerja. Menikmati hidup juga penting.',
    },
    bloodTypeCompatibility: {
      A: 'Sama-sama serius, kecocokan terbaik. Hubungan terpercaya.',
      B: 'B yang bebas bisa menjengkelkan. Butuh pengertian.',
      O: 'Partner yang bisa diandalkan. Hubungan stabil.',
      AB: 'Stimulasi intelektual. Bagus juga sebagai partner bisnis.',
    },
  },

  // ♒ Aquarius (20 Januari ~ 18 Februari)
  aquarius: {
    id: 'aquarius',
    name: 'Aquarius',
    namaIndonesia: 'Aquarius',
    emoji: '♒',
    period: '20 Januari - 18 Februari',
    element: 'Udara',
    keywords: ['Inovasi', 'Kebebasan', 'Kemanusiaan'],
    luckyScore: 5,
    overview: 'Tahun 2025 adalah tahun revolusioner untuk Aquarius! Pluto resmi menetap di Aquarius, memulai transformasi besar dalam hidup. Anda berada di garis depan zaman.',
    categories: {
      love: 'Tahun mencari hubungan tidak konvensional. Kemungkinan pertemuan online atau di komunitas. Hubungan yang menghargai kebebasan menguntungkan.',
      money: 'Pendapatan dari teknologi dan inovasi. Keberuntungan di cryptocurrency atau investasi futuristik. Tapi jaga juga stabilitas.',
      work: 'Aktif di bidang teknologi, startup, perubahan sosial. Kerja remote atau fleksibel cocok.',
      health: 'Perhatikan sistem saraf dan pergelangan kaki. Digital detox diperlukan. Pengobatan alternatif juga efektif.',
      family: 'Keluarga pilihan juga penting. Peran mengubah tradisi. Bantu orang lain lebih terbuka.',
    },
    monthly: [
      'Januari: Awal bulan kelahiran! Revolusi pribadi.',
      'Februari: Bulan kelahiran dan Valentine. Rayakan dengan cara unik.',
      'Maret: Ide inovatif terwujud.',
      'April: Investasi di teknologi dan masa depan.',
      'Mei: Komunitas dan teman jadi penting.',
      'Juni: Energi untuk aktivitas sosial.',
      'Juli: Liburan unik. Pengalaman yang berbeda dari orang lain.',
      'Agustus: Perubahan pekerjaan. Jadikan peluang.',
      'September: Romantisme naik. Pertemuan unik.',
      'Oktober: Mulai proyek inovatif.',
      'November: Atur keuangan. Tinjau portofolio investasi.',
      'Desember: Akhir tahun dengan gaya sendiri.',
    ],
    lucky: {
      numbers: [7, 16, 25],
      colors: ['Biru Elektrik', 'Perak'],
      day: 'Sabtu',
      direction: 'Barat Laut',
    },
    advice: {
      do: 'Jangan takut perubahan, pimpin dari depan. Masa depan milik Anda.',
      dont: 'Perubahan terlalu radikal bisa mengejutkan sekitar. Bertahap.',
    },
    bloodTypeCompatibility: {
      A: 'Bentrok dengan A tradisional. Butuh usaha saling memahami.',
      B: 'Sama-sama bebas, kecocokan luar biasa! Hubungan menarik.',
      O: 'Pasangan energetik.',
      AB: 'Kecocokan terbaik! Berbagi inovasi dan kecerdasan.',
    },
  },

  // ♓ Pisces (19 Februari ~ 20 Maret)
  pisces: {
    id: 'pisces',
    name: 'Pisces',
    namaIndonesia: 'Pisces',
    emoji: '♓',
    period: '19 Februari - 20 Maret',
    element: 'Air',
    keywords: ['Intuisi', 'Kreativitas', 'Spiritualitas'],
    luckyScore: 4,
    overview: 'Tahun 2025 adalah tahun spiritualitas dan kreativitas untuk Pisces. Saturnus tinggal di Pisces, memberi kekuatan mewujudkan mimpi. Percaya intuisi dan bertindak akan membawa hasil luar biasa.',
    categories: {
      love: 'Mengalami cinta romantis dan dalam. Kemungkinan pertemuan takdir. Tapi jangan terlalu mengidealkan.',
      money: 'Pendapatan dari kreativitas. Seni, musik, fotografi, dll. Investasi intuitif sukses. Tapi waspada penipuan.',
      work: 'Pekerjaan artistik dan spiritual berkembang. Pekerjaan membantu orang lain juga menguntungkan. Wujudkan mimpi jadi pekerjaan.',
      health: 'Perhatikan kaki dan sistem imun. Tidur sangat penting. Meditasi seefektif obat. Kurangi alkohol.',
      family: 'Terhubung emosional mendalam dengan keluarga. Waktu menyembuhkan luka lama. Merasakan bimbingan leluhur.',
    },
    monthly: [
      'Januari: Tetapkan target intuitif untuk tahun baru.',
      'Februari: Awal bulan kelahiran! Penuh inspirasi.',
      'Maret: Bulan kelahiran dan equinox musim semi. Waktu kelahiran kembali.',
      'April: Keuangan naik. Pendapatan tak terduga juga.',
      'Mei: Merasakan koneksi mendalam dalam hubungan.',
      'Juni: Jaga kesehatan. Istirahat cukup.',
      'Juli: Perjalanan ke air membawa keberuntungan. Ke laut atau kolam.',
      'Agustus: Bergerak menuju mimpi.',
      'September: Musim gugur romantis. Cinta semakin dalam.',
      'Oktober: Intuisi penting datang. Jangan lewatkan.',
      'November: Atur keuangan. Berbagi atau donasi juga baik.',
      'Desember: Akhir tahun spiritual. Tutup dengan syukur.',
    ],
    lucky: {
      numbers: [7, 12, 21],
      colors: ['Hijau Laut', 'Lavender'],
      day: 'Kamis',
      direction: 'Timur Laut',
    },
    advice: {
      do: 'Percaya intuisi. Mimpi akan menjadi kenyataan.',
      dont: 'Jangan melarikan diri dari kenyataan. Hadapi apa yang harus dihadapi.',
    },
    bloodTypeCompatibility: {
      A: 'Sama-sama sensitif, saling memahami. Hubungan lembut.',
      B: 'Mungkin dipermainkan oleh B yang bebas. Tapi menarik.',
      O: 'Bisa diandalkan. Hubungan nyaman.',
      AB: 'Koneksi spiritual. Ikatan yang dalam.',
    },
  },
};

// Fungsi utilitas
export function getRamalan(zodiak: Zodiak): RamalanData {
  return RAMALAN_2025[zodiak];
}

export function getZodiakByDate(month: number, day: number): Zodiak {
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'aries';
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'taurus';
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'gemini';
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'cancer';
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'leo';
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'virgo';
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'libra';
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'scorpio';
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'sagitarius';
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'capricorn';
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'aquarius';
  return 'pisces';
}

export function getAllZodiak(): Zodiak[] {
  return ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 
          'libra', 'scorpio', 'sagitarius', 'capricorn', 'aquarius', 'pisces'];
}
