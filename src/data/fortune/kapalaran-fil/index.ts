// Kapalaran 2025 - Horoscope ng 12 Zodiac Signs
// Filipino Horoscope/Zodiac Fortune Data

export type ZodiacSign = 
  | 'aries' | 'taurus' | 'gemini' | 'cancer' 
  | 'leo' | 'virgo' | 'libra' | 'scorpio'
  | 'sagittarius' | 'capricorn' | 'aquarius' | 'pisces';

export interface KapalaranData {
  id: ZodiacSign;
  name: string;
  tagalogName: string;
  emoji: string;
  period: string;
  element: 'Apoy' | 'Lupa' | 'Hangin' | 'Tubig';
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

export const KAPALARAN_2025: Record<ZodiacSign, KapalaranData> = {
  // ♈ Aries (Marso 21 ~ Abril 19)
  'aries': {
    id: 'aries',
    name: 'Aries',
    tagalogName: 'Tupa',
    emoji: '♈',
    period: 'Marso 21 ~ Abril 19',
    element: 'Apoy',
    keywords: ['Tapang', 'Liderato', 'Pagsisimula'],
    luckyScore: 4,
    overview: '2025 ay taon ng bagong simula at pagkakataon para sa Aries! Ang Neptune ay papasok sa Aries, kaya ang iyong intuition ay magiging malakas. Sa unang kalahati ng taon, maraming bagong oportunidad ang darating. Maging matapang sa iyong mga desisyon!',
    categories: {
      love: 'Sa tagsibol, posibleng makakilala ng espesyal na tao. Maging aktibo sa paglapit. Para sa mga may partner, mas lalim ang relasyon. Ingat sa selos tuwing Setyembre.',
      money: 'Magfocus sa pangunahing trabaho para sa mabuting resulta. Sa unang kalahati ng taon, posibleng may unexpected income. Sa ikalawang kalahati, mag-manage ng gastos.',
      work: 'May pagkakataon na ipakita ang leadership skills sa bagong proyekto. Mataas ang tsansa ng promotion. Mayo ang pinakaimportanteng buwan.',
      health: 'Ingat sa sobrang trabaho. Maaaring makaranas ng sakit ng ulo at insomnia. Mag-exercise regularly para mabawasan ang stress.',
      family: 'Mas magiging malapit ang pamilya ngayong taon. Magandang oras para mag-bond. Family trip sa tag-init ay highly recommended.',
    },
    monthly: [
      'Enero: Magandang oras para magtakda ng New Year goals. Simulan ang healthy lifestyle.',
      'Pebrero: Mataas ang love luck. Maghanda ng surprise para sa Valentine\'s Day.',
      'Marso: Birthday month! Peak ang swerte. Subukan ang bagong bagay.',
      'Abril: Financial luck ay mabuti. Pwedeng mag-consider ng investment.',
      'Mayo: Makikilala ang achievements sa trabaho. Tsansa ng promotion o raise.',
      'Hunyo: Mataas ang love luck. Maging proactive.',
      'Hulyo: Kailangan ng health check. Huwag mag-overwork.',
      'Agosto: Magandang travel luck. Oras para magpahinga.',
      'Setyembre: Expand ang network. Bagong connections ay magiging assets.',
      'Oktubre: Importante ang decision-making. Maging maingat.',
      'Nobyembre: Financial luck ay mataas. Posibleng may bonus.',
      'Disyembre: Magandang pagtatapos ng taon. Year-end party ay magdadala ng swerte.',
    ],
    lucky: {
      numbers: [3, 9, 21],
      colors: ['Pula', 'Orange'],
      day: 'Martes',
      direction: 'Silangan',
    },
    advice: {
      do: 'Maging matapang na subukan ang bagong bagay. Ang iyong courage ay magbibigay ng rewards ngayong taon.',
      dont: 'Iwasan ang impulsive na desisyon. Lalo na sa Abril at Hulyo, mag-ingat.',
    },
    bloodTypeCompatibility: {
      A: 'Type A na maingat ay makakatulong sa self-control mo. Magandang partner.',
      B: 'Pareho kayong free-spirited kaya posibleng may conflict. Pero exciting.',
      O: 'Perfect match! Pwedeng magtagumpay together.',
      AB: 'Kailangan ng oras para magkaintindihan, pero pwedeng maging deep relationship.',
    },
  },

  // ♉ Taurus (Abril 20 ~ Mayo 20)
  'taurus': {
    id: 'taurus',
    name: 'Taurus',
    tagalogName: 'Toro',
    emoji: '♉',
    period: 'Abril 20 ~ Mayo 20',
    element: 'Lupa',
    keywords: ['Katatagan', 'Kasaganaan', 'Pasensya'],
    luckyScore: 4,
    overview: '2025 ay taon ng stability at harvest para sa Taurus. May unexpected changes dahil sa Uranus, pero ito ay oportunidad para sa growth. Sa ikalawang kalahati ng taon, makikita ang resulta ng iyong efforts.',
    categories: {
      love: 'Magandang taon para sa serious relationship. Mataas ang marriage luck. Posibleng bumalik ang dating karelasyon.',
      money: 'Magandang taon para mag-save at mag-invest. Real estate o long-term investments ay favorable. Iwasan ang guarantor sa utang.',
      work: 'Maintain ang stable career. Posibleng kailangan matuto ng bagong technology. Sa ikalawang kalahati ng taon, posibleng may raise.',
      health: 'Ingat sa neck at shoulder pain. Massage ay effective. Ingat din sa overeating.',
      family: 'Harmonya sa pamilya. Magandang oras para lumipat o mag-renovate. Mas lalim ang family bonds.',
    },
    monthly: [
      'Enero: Mag-set ng financial plan para sa taon. Itakda ang savings goal.',
      'Pebrero: Romantic month. Celebrate ang Valentine\'s Day.',
      'Marso: Mas busy sa trabaho. Alagaan ang kalusugan.',
      'Abril: Birthday month! Mag-treat ng sarili.',
      'Mayo: Mother\'s Day, focus sa pamilya.',
      'Hunyo: Kailangan ng travel o pahinga. Refresh.',
      'Hulyo: Family time ay importante. Communicate more.',
      'Agosto: Bagong oportunidad ay darating. Maging ready.',
      'Setyembre: Health check-up ang recommended. Prevention is better than cure.',
      'Oktubre: Love luck ay mataas. Posibleng makakilala ng special person.',
      'Nobyembre: Financial luck ay good. Expect investment returns.',
      'Disyembre: Stable na ending ng taon. Planuhin ang susunod na taon.',
    ],
    lucky: {
      numbers: [2, 6, 15],
      colors: ['Berde', 'Pink'],
      day: 'Biyernes',
      direction: 'Timog-Silangan',
    },
    advice: {
      do: 'Mag-invest o mag-save na may long-term vision. Patience ay rewarded.',
      dont: 'Huwag maging masyadong matigas. Flexibility ay importante rin.',
    },
    bloodTypeCompatibility: {
      A: 'Pareho kayong stable-oriented kaya very compatible. Peaceful relationship.',
      B: 'Different pace of life ay challenging. Need understanding.',
      O: 'Magandang support system para sa isa\'t isa.',
      AB: 'Interesting conversations. Intellectually stimulating.',
    },
  },

  // ♊ Gemini (Mayo 21 ~ Hunyo 21)
  'gemini': {
    id: 'gemini',
    name: 'Gemini',
    tagalogName: 'Kambal',
    emoji: '♊',
    period: 'Mayo 21 ~ Hunyo 21',
    element: 'Hangin',
    keywords: ['Komunikasyon', 'Curiosity', 'Versatility'],
    luckyScore: 5,
    overview: '2025 ay best year para sa Gemini! Jupiter ay nagbibigay ng blessings, expansive at growth energy ay puno. Tuloy-tuloy ang bagong oportunidad, at social activities ay magdadala ng big luck.',
    categories: {
      love: 'Explosive charm ngayong taon! Maraming chances to meet people. Couples ay mas magkakaroon ng quality time together, deeper relationship.',
      money: 'Multiple income streams. Creativity ay magbibigay ng pera. Pero ingat sa impulsive shopping.',
      work: 'Shine sa communications, marketing, media fields. Job change ay favorable rin.',
      health: 'Generally good. Nervous system needs care. Improve sleep quality.',
      family: 'Active communication with family. Bonding with siblings ay mas lalim.',
    },
    monthly: [
      'Enero: Set clear goals for the year. Write them down.',
      'Pebrero: Expand network. Treasure new connections.',
      'Marso: Financial luck is high! Good time for investment o side hustle.',
      'Abril: Work achievements recognized. Be confident.',
      'Mayo: Birthday month! Peak luck. Everything goes well.',
      'Hunyo: Summer Solstice energy supports you. Love premonition.',
      'Hulyo: Good travel luck. Recommended overseas trip.',
      'Agosto: Health management needed. Don\'t overwork.',
      'Setyembre: Important contracts and negotiations will succeed.',
      'Oktubre: Ingat sa autumn blues. Find hobbies to change mood.',
      'Nobyembre: Financial organization month. Plan year-end spending.',
      'Disyembre: Brilliant year-end. Shine sa parties.',
    ],
    lucky: {
      numbers: [5, 14, 23],
      colors: ['Dilaw', 'Light Blue'],
      day: 'Miyerkules',
      direction: 'Kanluran',
    },
    advice: {
      do: 'Share your ideas. Your voice has power this year.',
      dont: 'Don\'t do too many things at once. Distraction will miss good chances.',
    },
    bloodTypeCompatibility: {
      A: 'Lively intellectual conversations. Good partner.',
      B: 'Perfect match! Mutual respect for freedom.',
      O: 'Dynamic relationship. Exciting.',
      AB: 'Both like change. Never get bored.',
    },
  },

  // ♋ Cancer (Hunyo 22 ~ Hulyo 22)
  'cancer': {
    id: 'cancer',
    name: 'Cancer',
    tagalogName: 'Alimango',
    emoji: '♋',
    period: 'Hunyo 22 ~ Hulyo 22',
    element: 'Tubig',
    keywords: ['Pamilya', 'Emosyon', 'Proteksyon'],
    luckyScore: 4,
    overview: '2025 ay taon ng family focus at inner growth para sa Cancer. Jupiter ay papasok sa Cancer sa ikalawang kalahati ng taon, increasing luck. Posibleng may good news tungkol sa family o property.',
    categories: {
      love: 'Looking for warm, family-like love. Good time to seriously think about marriage o living together.',
      money: 'Property luck is good. Favorable for buying, selling, moving, renovating. Family support possible.',
      work: 'Work from home o freelance ay favorable. Creative work will have results.',
      health: 'Digestive system needs attention. Stress easily affects body. Warm food and proper rest.',
      family: 'Family bonding year. May have important family events. Parent care issue may arise.',
    },
    monthly: [
      'Enero: Family time. New Year gathering strengthens bonds.',
      'Pebrero: Emotions may fluctuate. Self-care important.',
      'Marso: Financial review month. Check unnecessary spending.',
      'Abril: Expand network. Meet new friends.',
      'Mayo: Work changes possible. Flexible response needed.',
      'Hunyo: Birthday month starts. Treat yourself.',
      'Hulyo: Jupiter enters! Luck soars. Everything favorable.',
      'Agosto: Romantic month. Sweet meeting predicted.',
      'Setyembre: Financial luck high. Consider investment o side business.',
      'Oktubre: Good family news coming.',
      'Nobyembre: Career turning point. Be prepared.',
      'Disyembre: Warm year-end. Treasure family time.',
    ],
    lucky: {
      numbers: [2, 7, 22],
      colors: ['Puti', 'Silver'],
      day: 'Lunes',
      direction: 'Hilaga',
    },
    advice: {
      do: 'Invest in family at home. Your happiness is there.',
      dont: 'Don\'t let emotions rule. Important decisions need calm thinking.',
    },
    bloodTypeCompatibility: {
      A: 'Similar so reassuring. Very compatible.',
      B: 'Free-spirited Type B may confuse you. Need understanding.',
      O: 'Reliable. Stable relationship possible.',
      AB: 'Intellectually stimulating. Deep relationship possible.',
    },
  },

  // ♌ Leo (Hulyo 23 ~ Agosto 22)
  'leo': {
    id: 'leo',
    name: 'Leo',
    tagalogName: 'Leon',
    emoji: '♌',
    period: 'Hulyo 23 ~ Agosto 22',
    element: 'Apoy',
    keywords: ['Creativity', 'Confidence', 'Expression'],
    luckyScore: 3,
    overview: '2025 ay taon ng creativity at self-expression para sa Leo. Pero Pluto\'s influence requires inner growth at change. Focus on inner development ay mas magbibigay ng resulta kaysa outer success.',
    categories: {
      love: 'Romantic at passionate year. Pero pride ay pwedeng maging obstacle. Learn to compromise.',
      money: 'Stable income. Prepare for unexpected expenses through savings. Safe investments over speculation.',
      work: 'Recognized in creative projects. Avoid power struggles.',
      health: 'Heart at blood pressure needs attention. Stress management important. Meditation o yoga recommended.',
      family: 'Center of attention sa family. Don\'t hesitate to support. Grandchildren will bring joy.',
    },
    monthly: [
      'Enero: Year starts gently. Planning time.',
      'Pebrero: Romantic month. Plan special date.',
      'Marso: Work may be stressful. Patience needed.',
      'Abril: Creative ideas emerge. Write them down.',
      'Mayo: Small relationship issues possible. Solve through dialogue.',
      'Hunyo: Health check recommended. Prevention important.',
      'Hulyo: Birthday month! Confidence high, luck increases.',
      'Agosto: Financial luck good. Side income possible.',
      'Setyembre: Good travel luck. Refresh through vacation.',
      'Oktubre: Important decision time. Trust intuition.',
      'Nobyembre: Social connections beneficial. Networking.',
      'Disyembre: Brilliant year-end. Many chances to shine.',
    ],
    lucky: {
      numbers: [1, 8, 19],
      colors: ['Gold', 'Orange'],
      day: 'Linggo',
      direction: 'Timog',
    },
    advice: {
      do: 'Focus on creative projects. Don\'t be afraid to express yourself.',
      dont: 'Don\'t let pride cause damage. Cooperation at compromise also needed.',
    },
    bloodTypeCompatibility: {
      A: 'Serious Type A will support you. Good partner.',
      B: 'Fun relationship but conflicts possible. Respect each other.',
      O: 'Perfect match! Help each other shine.',
      AB: 'Intellectually stimulating. Interesting relationship.',
    },
  },

  // ♍ Virgo (Agosto 23 ~ Setyembre 22)
  'virgo': {
    id: 'virgo',
    name: 'Virgo',
    tagalogName: 'Dalaga',
    emoji: '♍',
    period: 'Agosto 23 ~ Setyembre 22',
    element: 'Lupa',
    keywords: ['Pagsusuri', 'Kalusugan', 'Perpeksyon'],
    luckyScore: 4,
    overview: '2025 ay taon ng health focus at daily life improvement para sa Virgo. Your attention to detail ay highly valued, work recognized. Less perfectionism ay magbibigay ng mas magandang resulta.',
    categories: {
      love: 'Practical love search year. Possible to meet someone at work o gym. Couples should create healthy habits together.',
      money: 'Consistent saving will have results. Side income also expected. September may have bonus.',
      work: 'Highly valued efficiency. Focus on skill improvement over promotion. Good time for certification.',
      health: 'Best year to improve health habits. Diet, exercise will succeed. Watch digestive system.',
      family: 'Role of organizing family events. Don\'t criticize too much.',
    },
    monthly: [
      'Enero: Set health goals for new year. Good time to start exercising.',
      'Pebrero: Work gets busier. Manage health.',
      'Marso: Financial review month. Cancel unnecessary subscriptions.',
      'Abril: Time to review relationships. Identify true friends.',
      'Mayo: Good chance to learn new skills. Take a course.',
      'Hunyo: Health check recommended. Prevention important.',
      'Hulyo: Good travel luck. Active vacation.',
      'Agosto: Birthday month! Treat yourself.',
      'Setyembre: Work bears fruit. Be confident.',
      'Oktubre: Love luck rises. New meeting predicted.',
      'Nobyembre: Financial luck good. Expect bonus o side income.',
      'Disyembre: Organizing at cleaning month. Welcome new year neatly.',
    ],
    lucky: {
      numbers: [5, 14, 23],
      colors: ['Navy Blue', 'Beige'],
      day: 'Miyerkules',
      direction: 'Timog-Kanluran',
    },
    advice: {
      do: 'Build healthy habits. Small improvements make big changes.',
      dont: 'Don\'t demand too much perfection. Sometimes 80% is enough.',
    },
    bloodTypeCompatibility: {
      A: 'Both meticulous so very compatible. Stable relationship.',
      B: 'Different pace challenging. Need patience.',
      O: 'Easy-going Type O helps you. Good balance.',
      AB: 'Interesting intellectual conversations. Stimulating.',
    },
  },

  // ♎ Libra (Setyembre 23 ~ Oktubre 22)
  'libra': {
    id: 'libra',
    name: 'Libra',
    tagalogName: 'Timbangan',
    emoji: '♎',
    period: 'Setyembre 23 ~ Oktubre 22',
    element: 'Hangin',
    keywords: ['Balance', 'Harmonya', 'Kagandahan'],
    luckyScore: 4,
    overview: '2025 ay taon ng relationships at partnerships para sa Libra. Important relationships will deepen, aesthetic sense shines. Don\'t postpone decisions, sometimes bold choices needed.',
    categories: {
      love: 'Peak love luck! Many chances for marriage, engagement, proposal. High possibility to meet ideal person.',
      money: 'Income from partnerships. Investment o joint business opportunities. Check contracts carefully.',
      work: 'Success through teamwork. Shine in negotiation o mediation roles. Joint business favorable.',
      health: 'Watch back at kidney health. Drink enough water. Skin issues from stress possible.',
      family: 'Harmonious family relations. Role of mediating conflicts. Important family events possible.',
    },
    monthly: [
      'Enero: Plan new year with partner.',
      'Pebrero: Special Valentine\'s Day. Romantic time.',
      'Marso: Negotiations easily succeed.',
      'Abril: Start creative project.',
      'Mayo: Small relationship issues possible. Stay neutral.',
      'Hunyo: Beauty luck high. Good time for image change.',
      'Hulyo: Good travel luck. Couple trip.',
      'Agosto: Work requires teamwork.',
      'Setyembre: Birthday month starts! Charm shines.',
      'Oktubre: Important decision time. Drop indecision.',
      'Nobyembre: Financial luck increases. Income from partnerships.',
      'Disyembre: Year-end full of love. Warm time.',
    ],
    lucky: {
      numbers: [6, 15, 24],
      colors: ['Pastel Pink', 'Lavender'],
      day: 'Biyernes',
      direction: 'Kanluran',
    },
    advice: {
      do: 'Invest in relationships. Partners will make you stronger.',
      dont: 'Don\'t postpone decisions. Sometimes bold choices needed.',
    },
    bloodTypeCompatibility: {
      A: 'Both value harmony. Peaceful relationship.',
      B: 'Attracted to Type B\'s freedom. Interesting relationship.',
      O: 'Reliable partner. Good compatibility.',
      AB: 'Share aesthetic sense. Ideal couple.',
    },
  },

  // ♏ Scorpio (Oktubre 23 ~ Nobyembre 21)
  'scorpio': {
    id: 'scorpio',
    name: 'Scorpio',
    tagalogName: 'Alakdan',
    emoji: '♏',
    period: 'Oktubre 23 ~ Nobyembre 21',
    element: 'Tubig',
    keywords: ['Pagbabago', 'Lalim', 'Muling Pagsilang'],
    luckyScore: 3,
    overview: '2025 ay taon ng deep transformation at rebirth para sa Scorpio. Let go of the past, powerful renewal energy. If you release attachments, unexpected luck will come.',
    categories: {
      love: 'Year of deep at serious relationships. May have fateful meeting. Couples at relationship turning point.',
      money: 'Luck with inheritance, insurance, money from others. Good time to organize finances at pay debts.',
      work: 'Organizational changes possible. Flexible response turns into opportunity. Active in research o analysis fields.',
      health: 'Reproductive health needs attention. Detox recommended. Counseling also effective.',
      family: 'Family secrets may be revealed. Time to heal old wounds. Feel ancestral connections.',
    },
    monthly: [
      'Enero: Organize past, set new goals.',
      'Pebrero: Financial review. Find hidden expenses.',
      'Marso: Truth revealed in relationships.',
      'Abril: Health needs attention. Stress management.',
      'Mayo: Work changes possible. Turn into opportunity.',
      'Hunyo: Time for mental healing.',
      'Hulyo: Financial luck good. Consider investments.',
      'Agosto: Need travel o rest. Refresh.',
      'Setyembre: Important intuition comes. Don\'t miss it.',
      'Oktubre: Birthday month starts! Peak transformation energy.',
      'Nobyembre: Month of new beginnings. Rebirth.',
      'Disyembre: Look back on the year, end with gratitude.',
    ],
    lucky: {
      numbers: [8, 17, 26],
      colors: ['Maroon', 'Black'],
      day: 'Martes',
      direction: 'Hilagang-Kanluran',
    },
    advice: {
      do: 'Rebirth through letting go. Transformation power is your strength.',
      dont: 'Don\'t hold on. Forgiveness will free you.',
    },
    bloodTypeCompatibility: {
      A: 'Can build deep relationship. Understanding each other.',
      B: 'Passionate but conflicts possible. Respect each other\'s freedom.',
      O: 'Powerful couple. Can grow together.',
      AB: 'Attracted to each other\'s mystery.',
    },
  },

  // ♐ Sagittarius (Nobyembre 22 ~ Disyembre 21)
  'sagittarius': {
    id: 'sagittarius',
    name: 'Sagittarius',
    tagalogName: 'Mamamana',
    emoji: '♐',
    period: 'Nobyembre 22 ~ Disyembre 21',
    element: 'Apoy',
    keywords: ['Pakikipagsapalaran', 'Optimismo', 'Pilosopiya'],
    luckyScore: 4,
    overview: '2025 ay taon ng adventure at expansion para sa Sagittarius. Travel at learning will bring great growth. Optimistic energy inspires those around at attracts new opportunities.',
    categories: {
      love: 'Romantic premonition during travel o study. Attention to long-distance love. Relationship respecting freedom will work.',
      money: 'Luck in gambling o speculation. But don\'t be overconfident. Income related to overseas possible.',
      work: 'Opportunities in international work o expansion projects. Education, publishing, media fields favorable.',
      health: 'Watch thigh at liver health. Avoid overeating. Outdoor activities beneficial.',
      family: 'Exchange with distant relatives. Enjoy cultural differences. Share travel joy with family.',
    },
    monthly: [
      'Enero: Plan travels for the year.',
      'Pebrero: Learning motivation high. Study something new.',
      'Marso: Financial luck increases. Good time for investment o side business.',
      'Abril: Network expansion. Networking.',
      'Mayo: Stronger international connections.',
      'Hunyo: Health management needed. Avoid overeating.',
      'Hulyo: Summer adventure! Travel o new experience.',
      'Agosto: Creative period. Express yourself.',
      'Setyembre: Exams o presentations will succeed.',
      'Oktubre: Family bonds deepen.',
      'Nobyembre: Birthday month starts! Peak adventurous spirit.',
      'Disyembre: Birthday at Christmas. Double celebration.',
    ],
    lucky: {
      numbers: [3, 12, 21],
      colors: ['Purple', 'Turquoise'],
      day: 'Huwebes',
      direction: 'Timog-Silangan',
    },
    advice: {
      do: 'Jump into new experiences. Travel at learning will help you grow.',
      dont: 'Don\'t promise too much. Realistic planning also needed.',
    },
    bloodTypeCompatibility: {
      A: 'Steady Type A helps you stay grounded.',
      B: 'Perfect match! Enjoy freedom together.',
      O: 'Dynamic couple. Can share adventures.',
      AB: 'Interesting intellectual conversations. Never boring.',
    },
  },

  // ♑ Capricorn (Disyembre 22 ~ Enero 19)
  'capricorn': {
    id: 'capricorn',
    name: 'Capricorn',
    tagalogName: 'Kambing-Dagat',
    emoji: '♑',
    period: 'Disyembre 22 ~ Enero 19',
    element: 'Lupa',
    keywords: ['Ambisyon', 'Responsibilidad', 'Tagumpay'],
    luckyScore: 5,
    overview: '2025 ay taon ng harvest at success para sa Capricorn! Pluto moves to Aquarius, freeing you from years of pressure. Efforts rewarded, time for social recognition.',
    categories: {
      love: 'Year for stable love search. Marriage o engagement chances. May meet someone at work-related events.',
      money: 'Excellent financial luck. Raise, bonus, recognition. Long-term investments bear fruit.',
      work: 'Career peak. Leadership position. Years of effort rewarded.',
      health: 'Watch bone, knee, at tooth health. Take calcium. Stress decreases, health improves.',
      family: 'Role as family pillar. May involve inheritance o responsibilities. Family goals achieved.',
    },
    monthly: [
      'Enero: Birthday month! Peak success luck. Big goals.',
      'Pebrero: Romantic luck rises. Stable love.',
      'Marso: Big project starts at work.',
      'Abril: Evaluation at recognition.',
      'Mayo: Investments bear fruit.',
      'Hunyo: Rest also important. Refresh.',
      'Hulyo: Planned summer vacation.',
      'Agosto: Back to work efficiently. New goals.',
      'Setyembre: Career leadership shines.',
      'Oktubre: Achievement month.',
      'Nobyembre: Prepare for year-end.',
      'Disyembre: Excellent ending with birthday month.',
    ],
    lucky: {
      numbers: [4, 13, 22],
      colors: ['Black', 'Dark Gray'],
      day: 'Sabado',
      direction: 'Hilaga',
    },
    advice: {
      do: 'Enjoy achievements. You deserve it.',
      dont: 'Don\'t overwork. Enjoying life also important.',
    },
    bloodTypeCompatibility: {
      A: 'Both serious so very compatible. Reliable relationship.',
      B: 'Free-spirited Type B may frustrate you. Need understanding.',
      O: 'Reliable partner. Stable relationship.',
      AB: 'Intellectually stimulating. Good business partners too.',
    },
  },

  // ♒ Aquarius (Enero 20 ~ Pebrero 18)
  'aquarius': {
    id: 'aquarius',
    name: 'Aquarius',
    tagalogName: 'Tagapagbuhos ng Tubig',
    emoji: '♒',
    period: 'Enero 20 ~ Pebrero 18',
    element: 'Hangin',
    keywords: ['Inobasyon', 'Kalayaan', 'Makataong-gawa'],
    luckyScore: 5,
    overview: '2025 ay taon ng revolution para sa Aquarius! Pluto fully settles in Aquarius, starting major life changes. You are a pioneer of the times.',
    categories: {
      love: 'Year for unconventional relationships. Online o community meetings. Freedom-respecting relationships work.',
      money: 'Income from technology o innovation. Luck with cryptocurrency o future investments. But also maintain stability.',
      work: 'Active in tech, startup, social change fields. Remote work o flexible style suits.',
      health: 'Watch nervous system at ankle health. Need digital detox. Alternative medicine also effective.',
      family: 'Chosen family also important. Role of changing traditions. Help others be more open-minded.',
    },
    monthly: [
      'Enero: Birthday month starts! Personal revolution.',
      'Pebrero: Birthday at Valentine\'s. Celebrate uniquely.',
      'Marso: Innovative ideas take shape.',
      'Abril: Invest in technology at future.',
      'Mayo: Community at friends important.',
      'Hunyo: Energy for social activities.',
      'Hulyo: Unique vacation. Different experience.',
      'Agosto: Work changes. Turn into opportunity.',
      'Setyembre: Love luck rises. Unique meeting.',
      'Oktubre: Start innovative project.',
      'Nobyembre: Financial organization. Review portfolio.',
      'Disyembre: End year your own style.',
    ],
    lucky: {
      numbers: [7, 16, 25],
      colors: ['Electric Blue', 'Silver'],
      day: 'Sabado',
      direction: 'Hilagang-Kanluran',
    },
    advice: {
      do: 'Don\'t fear change, be a pioneer. The future belongs to you.',
      dont: 'Too radical changes will surprise others. Take it slowly.',
    },
    bloodTypeCompatibility: {
      A: 'Traditional Type A may clash. Effort to understand needed.',
      B: 'Both free so very compatible! Interesting relationship.',
      O: 'Dynamic couple.',
      AB: 'Perfect match! Share innovation at intellect.',
    },
  },

  // ♓ Pisces (Pebrero 19 ~ Marso 20)
  'pisces': {
    id: 'pisces',
    name: 'Pisces',
    tagalogName: 'Isda',
    emoji: '♓',
    period: 'Pebrero 19 ~ Marso 20',
    element: 'Tubig',
    keywords: ['Intuisyon', 'Awa', 'Panaginip'],
    luckyScore: 4,
    overview: '2025 ay taon ng spirituality at creativity para sa Pisces. Saturn ay nasa Pisces, giving power to make dreams reality. Trust intuition at act for wonderful results.',
    categories: {
      love: 'Experience romantic at deep love. May have fateful meeting. But be careful not to over-idealize.',
      money: 'Income from creativity. Art, music, photography, etc. Intuitive investments succeed. But beware of scams.',
      work: 'Artistic, spiritual work thrives. Helping others work also good. Make dreams into work.',
      health: 'Watch feet at immune system. Sleep important. Meditation as medicine. Limit alcohol.',
      family: 'Deep emotional connection with family. Heal old wounds. Feel ancestral guidance.',
    },
    monthly: [
      'Enero: Set intuitive goals for new year.',
      'Pebrero: Birthday month starts! Full of inspiration.',
      'Marso: Birthday at Spring Equinox. Rebirth time.',
      'Abril: Financial luck increases. Unexpected income possible.',
      'Mayo: Feel deep connections in relationships.',
      'Hunyo: Health management needed. Get enough rest.',
      'Hulyo: Ocean trips beneficial. Go to beach o pool.',
      'Agosto: Action to realize dreams.',
      'Setyembre: Romantic autumn. Love deepens.',
      'Oktubre: Important intuition comes. Don\'t miss it.',
      'Nobyembre: Financial organization. Charity o sharing also good.',
      'Disyembre: Spiritual year-end. End with gratitude.',
    ],
    lucky: {
      numbers: [7, 12, 21],
      colors: ['Sea Blue', 'Lavender'],
      day: 'Huwebes',
      direction: 'Hilagang-Silangan',
    },
    advice: {
      do: 'Trust your intuition. Dreams will become reality.',
      dont: 'Don\'t escape reality. Face what needs facing.',
    },
    bloodTypeCompatibility: {
      A: 'Both sensitive so understand each other. Gentle relationship.',
      B: 'Free-spirited Type B may confuse you. But interesting.',
      O: 'Reliable. Reassuring relationship.',
      AB: 'Spiritual connection. Deep relationship.',
    },
  },
};

// Utility functions
export function getKapalaran(sign: ZodiacSign): KapalaranData {
  return KAPALARAN_2025[sign];
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
