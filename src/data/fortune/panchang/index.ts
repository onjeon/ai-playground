// 판창 (Panchang) - 인도 전통 달력 기반 운세
// पंचांग - भारतीय पारंपरिक कैलेंडर

export interface Tithi {
  id: string;
  number: number;
  name: string;
  nameEn: string;
  paksha: 'शुक्ल' | 'कृष्ण'; // Bright/Dark fortnight
  deity: string;
  description: string;
  auspicious: boolean;
  goodFor: string[];
  avoidFor: string[];
}

export interface Vara {
  id: string;
  name: string;
  nameEn: string;
  planet: string;
  planetEn: string;
  deity: string;
  color: string;
  gemstone: string;
  fasting: string;
  description: string;
  auspiciousActivities: string[];
  inauspiciousActivities: string[];
}

export interface Yoga {
  id: string;
  number: number;
  name: string;
  nameEn: string;
  nature: 'शुभ' | 'अशुभ' | 'मिश्रित';
  description: string;
  effects: string;
}

export interface Karana {
  id: string;
  number: number;
  name: string;
  nameEn: string;
  type: 'चर' | 'स्थिर'; // Movable/Fixed
  nature: 'शुभ' | 'अशुभ' | 'मिश्रित';
  description: string;
  effects: string;
}

export interface PanchangData {
  tithis: Tithi[];
  varas: Vara[];
  yogas: Yoga[];
  karanas: Karana[];
  muhurtas: {
    name: string;
    nameEn: string;
    duration: string;
    quality: 'शुभ' | 'अशुभ';
    description: string;
  }[];
}

export const panchangData: PanchangData = {
  tithis: [
    // शुक्ल पक्ष (Bright Fortnight)
    {
      id: 'pratipada-shukla',
      number: 1,
      name: 'प्रतिपदा',
      nameEn: 'Pratipada',
      paksha: 'शुक्ल',
      deity: 'अग्नि',
      description: 'नई शुरुआत के लिए शुभ तिथि। नए कार्य प्रारंभ करें।',
      auspicious: true,
      goodFor: ['नए कार्य', 'व्यापार', 'गृह प्रवेश', 'यात्रा'],
      avoidFor: ['विवाह', 'मुंडन'],
    },
    {
      id: 'dwitiya-shukla',
      number: 2,
      name: 'द्वितीया',
      nameEn: 'Dwitiya',
      paksha: 'शुक्ल',
      deity: 'ब्रह्मा',
      description: 'शुभ तिथि। सभी मांगलिक कार्यों के लिए उत्तम।',
      auspicious: true,
      goodFor: ['विवाह', 'गृह निर्माण', 'यात्रा', 'व्यापार'],
      avoidFor: [],
    },
    {
      id: 'tritiya-shukla',
      number: 3,
      name: 'तृतीया',
      nameEn: 'Tritiya',
      paksha: 'शुक्ल',
      deity: 'गौरी',
      description: 'अक्षय तृतीया सबसे शुभ तिथि। सभी कार्य शुभ।',
      auspicious: true,
      goodFor: ['सभी शुभ कार्य', 'विवाह', 'निवेश', 'सोना खरीदना'],
      avoidFor: [],
    },
    {
      id: 'chaturthi-shukla',
      number: 4,
      name: 'चतुर्थी',
      nameEn: 'Chaturthi',
      paksha: 'शुक्ल',
      deity: 'गणेश',
      description: 'गणेश पूजा के लिए विशेष तिथि। बाधाएं दूर होती हैं।',
      auspicious: true,
      goodFor: ['गणेश पूजा', 'नई शुरुआत', 'शिक्षा', 'व्यापार'],
      avoidFor: ['चंद्र दर्शन'],
    },
    {
      id: 'panchami-shukla',
      number: 5,
      name: 'पंचमी',
      nameEn: 'Panchami',
      paksha: 'शुक्ल',
      deity: 'नाग',
      description: 'शिक्षा और कला के लिए शुभ। सरस्वती पूजा करें।',
      auspicious: true,
      goodFor: ['शिक्षा', 'कला', 'संगीत', 'लेखन', 'उपनयन'],
      avoidFor: ['यात्रा'],
    },
    {
      id: 'shashthi-shukla',
      number: 6,
      name: 'षष्ठी',
      nameEn: 'Shashthi',
      paksha: 'शुक्ल',
      deity: 'कार्तिकेय',
      description: 'संतान संबंधी कार्यों के लिए शुभ।',
      auspicious: true,
      goodFor: ['संतान कार्य', 'व्रत', 'पूजा', 'स्वास्थ्य'],
      avoidFor: [],
    },
    {
      id: 'saptami-shukla',
      number: 7,
      name: 'सप्तमी',
      nameEn: 'Saptami',
      paksha: 'शुक्ल',
      deity: 'सूर्य',
      description: 'सूर्य पूजा के लिए विशेष। ऊर्जा और शक्ति मिलती है।',
      auspicious: true,
      goodFor: ['सूर्य पूजा', 'यात्रा', 'व्यापार', 'चिकित्सा'],
      avoidFor: [],
    },
    {
      id: 'ashtami-shukla',
      number: 8,
      name: 'अष्टमी',
      nameEn: 'Ashtami',
      paksha: 'शुक्ल',
      deity: 'दुर्गा',
      description: 'शक्ति पूजा के लिए महत्वपूर्ण। दुर्गा अष्टमी मनाई जाती है।',
      auspicious: true,
      goodFor: ['शक्ति पूजा', 'तंत्र साधना', 'व्रत'],
      avoidFor: ['विवाह', 'गृह प्रवेश'],
    },
    {
      id: 'navami-shukla',
      number: 9,
      name: 'नवमी',
      nameEn: 'Navami',
      paksha: 'शुक्ल',
      deity: 'दुर्गा',
      description: 'राम नवमी। धार्मिक कार्यों के लिए शुभ।',
      auspicious: true,
      goodFor: ['राम पूजा', 'धार्मिक कार्य', 'दान'],
      avoidFor: ['यात्रा', 'व्यापार'],
    },
    {
      id: 'dashami-shukla',
      number: 10,
      name: 'दशमी',
      nameEn: 'Dashami',
      paksha: 'शुक्ल',
      deity: 'यम',
      description: 'विजयादशमी। विजय और सफलता के लिए शुभ।',
      auspicious: true,
      goodFor: ['नई शुरुआत', 'शस्त्र पूजा', 'विजय कार्य', 'यात्रा'],
      avoidFor: [],
    },
    {
      id: 'ekadashi-shukla',
      number: 11,
      name: 'एकादशी',
      nameEn: 'Ekadashi',
      paksha: 'शुक्ल',
      deity: 'विष्णु',
      description: 'विष्णु भक्ति के लिए सर्वश्रेष्ठ। उपवास का दिन।',
      auspicious: true,
      goodFor: ['उपवास', 'विष्णु पूजा', 'ध्यान', 'आध्यात्मिक कार्य'],
      avoidFor: ['अन्न ग्रहण', 'भौतिक कार्य'],
    },
    {
      id: 'dwadashi-shukla',
      number: 12,
      name: 'द्वादशी',
      nameEn: 'Dwadashi',
      paksha: 'शुक्ल',
      deity: 'विष्णु',
      description: 'पारण का दिन। व्रत समाप्ति और दान के लिए शुभ।',
      auspicious: true,
      goodFor: ['पारण', 'दान', 'विष्णु पूजा', 'तीर्थ'],
      avoidFor: [],
    },
    {
      id: 'trayodashi-shukla',
      number: 13,
      name: 'त्रयोदशी',
      nameEn: 'Trayodashi',
      paksha: 'शुक्ल',
      deity: 'कामदेव',
      description: 'प्रदोष व्रत के लिए महत्वपूर्ण। शिव पूजा करें।',
      auspicious: true,
      goodFor: ['शिव पूजा', 'प्रदोष व्रत', 'विवाह', 'सौंदर्य कार्य'],
      avoidFor: [],
    },
    {
      id: 'chaturdashi-shukla',
      number: 14,
      name: 'चतुर्दशी',
      nameEn: 'Chaturdashi',
      paksha: 'शुक्ल',
      deity: 'शिव',
      description: 'शिव पूजा के लिए विशेष। तांत्रिक साधना के लिए उत्तम।',
      auspicious: true,
      goodFor: ['शिव पूजा', 'तंत्र साधना', 'पितृ कार्य'],
      avoidFor: ['विवाह', 'शुभ कार्य'],
    },
    {
      id: 'purnima',
      number: 15,
      name: 'पूर्णिमा',
      nameEn: 'Purnima',
      paksha: 'शुक्ल',
      deity: 'चंद्र',
      description: 'पूर्ण चंद्रमा। सभी शुभ कार्यों के लिए सर्वश्रेष्ठ।',
      auspicious: true,
      goodFor: ['सभी शुभ कार्य', 'सत्यनारायण कथा', 'दान', 'व्रत'],
      avoidFor: [],
    },
    // कृष्ण पक्ष (Dark Fortnight)
    {
      id: 'pratipada-krishna',
      number: 1,
      name: 'प्रतिपदा',
      nameEn: 'Pratipada',
      paksha: 'कृष्ण',
      deity: 'अग्नि',
      description: 'कृष्ण पक्ष की शुरुआत। सामान्य कार्यों के लिए उत्तम।',
      auspicious: true,
      goodFor: ['सामान्य कार्य', 'व्यापार'],
      avoidFor: ['विवाह', 'गृह प्रवेश'],
    },
    {
      id: 'dwitiya-krishna',
      number: 2,
      name: 'द्वितीया',
      nameEn: 'Dwitiya',
      paksha: 'कृष्ण',
      deity: 'ब्रह्मा',
      description: 'मिश्रित फल देने वाली तिथि।',
      auspicious: true,
      goodFor: ['यात्रा', 'व्यापार', 'पढ़ाई'],
      avoidFor: ['मांगलिक कार्य'],
    },
    {
      id: 'tritiya-krishna',
      number: 3,
      name: 'तृतीया',
      nameEn: 'Tritiya',
      paksha: 'कृष्ण',
      deity: 'गौरी',
      description: 'सामान्य तिथि। गौरी पूजा करें।',
      auspicious: true,
      goodFor: ['गौरी पूजा', 'सौंदर्य कार्य'],
      avoidFor: ['बड़े निर्णय'],
    },
    {
      id: 'chaturthi-krishna',
      number: 4,
      name: 'चतुर्थी',
      nameEn: 'Chaturthi',
      paksha: 'कृष्ण',
      deity: 'गणेश',
      description: 'संकष्टी चतुर्थी। गणेश व्रत के लिए महत्वपूर्ण।',
      auspicious: true,
      goodFor: ['गणेश पूजा', 'व्रत', 'बाधा निवारण'],
      avoidFor: ['चंद्र दर्शन'],
    },
    {
      id: 'panchami-krishna',
      number: 5,
      name: 'पंचमी',
      nameEn: 'Panchami',
      paksha: 'कृष्ण',
      deity: 'नाग',
      description: 'नाग पंचमी। नाग पूजा के लिए शुभ।',
      auspicious: true,
      goodFor: ['नाग पूजा', 'शिक्षा'],
      avoidFor: ['यात्रा'],
    },
    {
      id: 'shashthi-krishna',
      number: 6,
      name: 'षष्ठी',
      nameEn: 'Shashthi',
      paksha: 'कृष्ण',
      deity: 'कार्तिकेय',
      description: 'सामान्य तिथि।',
      auspicious: true,
      goodFor: ['संतान कार्य', 'स्वास्थ्य'],
      avoidFor: [],
    },
    {
      id: 'saptami-krishna',
      number: 7,
      name: 'सप्तमी',
      nameEn: 'Saptami',
      paksha: 'कृष्ण',
      deity: 'सूर्य',
      description: 'सूर्य पूजा के लिए शुभ।',
      auspicious: true,
      goodFor: ['सूर्य पूजा', 'चिकित्सा'],
      avoidFor: [],
    },
    {
      id: 'ashtami-krishna',
      number: 8,
      name: 'अष्टमी',
      nameEn: 'Ashtami',
      paksha: 'कृष्ण',
      deity: 'दुर्गा/कृष्ण',
      description: 'जन्माष्टमी। कृष्ण जन्म का पर्व।',
      auspicious: true,
      goodFor: ['कृष्ण पूजा', 'व्रत', 'भजन कीर्तन'],
      avoidFor: ['विवाह'],
    },
    {
      id: 'navami-krishna',
      number: 9,
      name: 'नवमी',
      nameEn: 'Navami',
      paksha: 'कृष्ण',
      deity: 'दुर्गा',
      description: 'धार्मिक कार्यों के लिए उत्तम।',
      auspicious: true,
      goodFor: ['धार्मिक कार्य', 'पूजा'],
      avoidFor: ['यात्रा'],
    },
    {
      id: 'dashami-krishna',
      number: 10,
      name: 'दशमी',
      nameEn: 'Dashami',
      paksha: 'कृष्ण',
      deity: 'यम',
      description: 'सामान्य तिथि।',
      auspicious: true,
      goodFor: ['सामान्य कार्य'],
      avoidFor: [],
    },
    {
      id: 'ekadashi-krishna',
      number: 11,
      name: 'एकादशी',
      nameEn: 'Ekadashi',
      paksha: 'कृष्ण',
      deity: 'विष्णु',
      description: 'विष्णु भक्ति और उपवास के लिए महत्वपूर्ण।',
      auspicious: true,
      goodFor: ['उपवास', 'विष्णु पूजा', 'ध्यान'],
      avoidFor: ['अन्न ग्रहण'],
    },
    {
      id: 'dwadashi-krishna',
      number: 12,
      name: 'द्वादशी',
      nameEn: 'Dwadashi',
      paksha: 'कृष्ण',
      deity: 'विष्णु',
      description: 'पारण का दिन।',
      auspicious: true,
      goodFor: ['पारण', 'दान'],
      avoidFor: [],
    },
    {
      id: 'trayodashi-krishna',
      number: 13,
      name: 'त्रयोदशी',
      nameEn: 'Trayodashi',
      paksha: 'कृष्ण',
      deity: 'शिव',
      description: 'प्रदोष व्रत। शिव पूजा के लिए विशेष।',
      auspicious: true,
      goodFor: ['शिव पूजा', 'प्रदोष व्रत', 'धन प्राप्ति'],
      avoidFor: [],
    },
    {
      id: 'chaturdashi-krishna',
      number: 14,
      name: 'चतुर्दशी',
      nameEn: 'Chaturdashi',
      paksha: 'कृष्ण',
      deity: 'शिव',
      description: 'महाशिवरात्रि। शिव की महापूजा।',
      auspicious: true,
      goodFor: ['शिव पूजा', 'जागरण', 'तंत्र साधना'],
      avoidFor: ['विवाह'],
    },
    {
      id: 'amavasya',
      number: 15,
      name: 'अमावस्या',
      nameEn: 'Amavasya',
      paksha: 'कृष्ण',
      deity: 'पितृ',
      description: 'पितृ तर्पण के लिए महत्वपूर्ण। पूर्वजों की आत्मा की शांति के लिए।',
      auspicious: false,
      goodFor: ['पितृ तर्पण', 'श्राद्ध', 'तंत्र साधना'],
      avoidFor: ['शुभ कार्य', 'विवाह', 'गृह प्रवेश', 'नए कार्य'],
    },
  ],

  varas: [
    {
      id: 'ravivaar',
      name: 'रविवार',
      nameEn: 'Sunday',
      planet: 'सूर्य',
      planetEn: 'Sun',
      deity: 'सूर्य देव',
      color: 'लाल/केसरी',
      gemstone: 'माणिक',
      fasting: 'सूर्य देव के लिए',
      description: 'रविवार सूर्य का दिन है। नेतृत्व, शक्ति और ऊर्जा का दिन।',
      auspiciousActivities: ['सूर्य पूजा', 'सरकारी काम', 'पिता से मिलना', 'स्वास्थ्य', 'नेतृत्व'],
      inauspiciousActivities: ['यात्रा (दक्षिण दिशा)', 'तेल लगाना'],
    },
    {
      id: 'somvaar',
      name: 'सोमवार',
      nameEn: 'Monday',
      planet: 'चंद्र',
      planetEn: 'Moon',
      deity: 'शिव/चंद्र',
      color: 'सफेद',
      gemstone: 'मोती',
      fasting: 'शिव जी के लिए',
      description: 'सोमवार चंद्रमा का दिन है। मन, भावनाओं और माता का दिन।',
      auspiciousActivities: ['शिव पूजा', 'माता से मिलना', 'जल संबंधी कार्य', 'कृषि', 'यात्रा'],
      inauspiciousActivities: ['बाल कटवाना', 'नाखून काटना'],
    },
    {
      id: 'mangalvaar',
      name: 'मंगलवार',
      nameEn: 'Tuesday',
      planet: 'मंगल',
      planetEn: 'Mars',
      deity: 'हनुमान/मंगल',
      color: 'लाल',
      gemstone: 'मूंगा',
      fasting: 'हनुमान जी के लिए',
      description: 'मंगलवार मंगल का दिन है। साहस, शक्ति और विजय का दिन।',
      auspiciousActivities: ['हनुमान पूजा', 'संपत्ति खरीद', 'शस्त्र पूजा', 'सेना/पुलिस कार्य'],
      inauspiciousActivities: ['विवाह', 'यात्रा शुरू करना', 'नए वस्त्र'],
    },
    {
      id: 'budhvaar',
      name: 'बुधवार',
      nameEn: 'Wednesday',
      planet: 'बुध',
      planetEn: 'Mercury',
      deity: 'विष्णु/बुध',
      color: 'हरा',
      gemstone: 'पन्ना',
      fasting: 'बुध ग्रह के लिए',
      description: 'बुधवार बुध का दिन है। व्यापार, संचार और बुद्धि का दिन।',
      auspiciousActivities: ['व्यापार', 'शिक्षा', 'लेखन', 'संचार', 'हिसाब-किताब'],
      inauspiciousActivities: ['शिलान्यास', 'गृह प्रवेश'],
    },
    {
      id: 'guruvaar',
      name: 'गुरुवार',
      nameEn: 'Thursday',
      planet: 'बृहस्पति',
      planetEn: 'Jupiter',
      deity: 'विष्णु/बृहस्पति',
      color: 'पीला',
      gemstone: 'पुखराज',
      fasting: 'बृहस्पति देव के लिए',
      description: 'गुरुवार बृहस्पति का दिन है। ज्ञान, धर्म और गुरु का दिन।',
      auspiciousActivities: ['विष्णु पूजा', 'गुरु मिलन', 'शिक्षा', 'विवाह', 'धार्मिक कार्य'],
      inauspiciousActivities: ['बाल धोना', 'कपड़े धोना'],
    },
    {
      id: 'shukravaar',
      name: 'शुक्रवार',
      nameEn: 'Friday',
      planet: 'शुक्र',
      planetEn: 'Venus',
      deity: 'लक्ष्मी/शुक्र',
      color: 'सफेद/गुलाबी',
      gemstone: 'हीरा',
      fasting: 'संतोषी माता के लिए',
      description: 'शुक्रवार शुक्र का दिन है। प्रेम, सौंदर्य और धन का दिन।',
      auspiciousActivities: ['लक्ष्मी पूजा', 'विवाह', 'सौंदर्य कार्य', 'कला', 'खरीदारी'],
      inauspiciousActivities: ['खट्टा खाना (व्रत में)'],
    },
    {
      id: 'shanivaar',
      name: 'शनिवार',
      nameEn: 'Saturday',
      planet: 'शनि',
      planetEn: 'Saturn',
      deity: 'शनि देव/हनुमान',
      color: 'काला/नीला',
      gemstone: 'नीलम',
      fasting: 'शनि देव के लिए',
      description: 'शनिवार शनि का दिन है। कर्म, न्याय और अनुशासन का दिन।',
      auspiciousActivities: ['शनि पूजा', 'तेल दान', 'लोहे की वस्तुएं दान', 'पितृ कार्य'],
      inauspiciousActivities: ['नए कार्य', 'विवाह', 'यात्रा', 'नए वस्त्र'],
    },
  ],

  yogas: [
    { id: 'vishkumbha', number: 1, name: 'विष्कुम्भ', nameEn: 'Vishkumbha', nature: 'अशुभ', description: 'बाधाओं का योग', effects: 'कार्यों में रुकावट, धैर्य रखें।' },
    { id: 'priti', number: 2, name: 'प्रीति', nameEn: 'Priti', nature: 'शुभ', description: 'प्रेम का योग', effects: 'प्रेम और सौहार्द बढ़ता है।' },
    { id: 'ayushman', number: 3, name: 'आयुष्मान', nameEn: 'Ayushman', nature: 'शुभ', description: 'दीर्घायु का योग', effects: 'स्वास्थ्य और आयु वृद्धि।' },
    { id: 'saubhagya', number: 4, name: 'सौभाग्य', nameEn: 'Saubhagya', nature: 'शुभ', description: 'सौभाग्य का योग', effects: 'भाग्य वृद्धि और सुख।' },
    { id: 'shobhana', number: 5, name: 'शोभन', nameEn: 'Shobhana', nature: 'शुभ', description: 'सुंदरता का योग', effects: 'सौंदर्य और आकर्षण बढ़ता है।' },
    { id: 'atiganda', number: 6, name: 'अतिगण्ड', nameEn: 'Atiganda', nature: 'अशुभ', description: 'कठिनाइयों का योग', effects: 'समस्याएं आ सकती हैं।' },
    { id: 'sukarma', number: 7, name: 'सुकर्मा', nameEn: 'Sukarma', nature: 'शुभ', description: 'शुभ कर्मों का योग', effects: 'अच्छे कार्यों में सफलता।' },
    { id: 'dhriti', number: 8, name: 'धृति', nameEn: 'Dhriti', nature: 'शुभ', description: 'धैर्य का योग', effects: 'धैर्य और स्थिरता मिलती है।' },
    { id: 'shoola', number: 9, name: 'शूल', nameEn: 'Shoola', nature: 'अशुभ', description: 'कष्टों का योग', effects: 'कष्ट और पीड़ा संभव।' },
    { id: 'ganda', number: 10, name: 'गण्ड', nameEn: 'Ganda', nature: 'अशुभ', description: 'विघ्नों का योग', effects: 'बाधाएं आ सकती हैं।' },
    { id: 'vriddhi', number: 11, name: 'वृद्धि', nameEn: 'Vriddhi', nature: 'शुभ', description: 'वृद्धि का योग', effects: 'धन और समृद्धि में वृद्धि।' },
    { id: 'dhruva', number: 12, name: 'ध्रुव', nameEn: 'Dhruva', nature: 'शुभ', description: 'स्थिरता का योग', effects: 'स्थायी कार्यों के लिए उत्तम।' },
    { id: 'vyaghata', number: 13, name: 'व्याघात', nameEn: 'Vyaghata', nature: 'अशुभ', description: 'विनाश का योग', effects: 'सावधानी बरतें।' },
    { id: 'harshana', number: 14, name: 'हर्षण', nameEn: 'Harshana', nature: 'शुभ', description: 'हर्ष का योग', effects: 'खुशी और आनंद मिलता है।' },
    { id: 'vajra', number: 15, name: 'वज्र', nameEn: 'Vajra', nature: 'मिश्रित', description: 'कठोरता का योग', effects: 'दृढ़ता से काम करें।' },
    { id: 'siddhi', number: 16, name: 'सिद्धि', nameEn: 'Siddhi', nature: 'शुभ', description: 'सिद्धि का योग', effects: 'कार्य सिद्धि और सफलता।' },
    { id: 'vyatipata', number: 17, name: 'व्यतीपात', nameEn: 'Vyatipata', nature: 'अशुभ', description: 'दुर्भाग्य का योग', effects: 'शुभ कार्य टालें।' },
    { id: 'variyan', number: 18, name: 'वरीयान', nameEn: 'Variyan', nature: 'शुभ', description: 'श्रेष्ठता का योग', effects: 'उत्कृष्ट परिणाम मिलते हैं।' },
    { id: 'parigha', number: 19, name: 'परिघ', nameEn: 'Parigha', nature: 'अशुभ', description: 'रुकावटों का योग', effects: 'बाधाएं आ सकती हैं।' },
    { id: 'shiva', number: 20, name: 'शिव', nameEn: 'Shiva', nature: 'शुभ', description: 'कल्याण का योग', effects: 'शुभ और मंगलकारी।' },
    { id: 'siddha', number: 21, name: 'सिद्ध', nameEn: 'Siddha', nature: 'शुभ', description: 'सफलता का योग', effects: 'सभी कार्यों में सफलता।' },
    { id: 'sadhya', number: 22, name: 'साध्य', nameEn: 'Sadhya', nature: 'शुभ', description: 'साधना का योग', effects: 'लक्ष्य प्राप्ति में सहायक।' },
    { id: 'shubha', number: 23, name: 'शुभ', nameEn: 'Shubha', nature: 'शुभ', description: 'शुभता का योग', effects: 'सब कुछ शुभ होता है।' },
    { id: 'shukla', number: 24, name: 'शुक्ल', nameEn: 'Shukla', nature: 'शुभ', description: 'पवित्रता का योग', effects: 'पवित्र और शुद्ध कार्य।' },
    { id: 'brahma', number: 25, name: 'ब्रह्म', nameEn: 'Brahma', nature: 'शुभ', description: 'ब्रह्मा का योग', effects: 'ज्ञान और रचनात्मकता।' },
    { id: 'indra', number: 26, name: 'ऐन्द्र', nameEn: 'Indra', nature: 'शुभ', description: 'इंद्र का योग', effects: 'शक्ति और विजय।' },
    { id: 'vaidhriti', number: 27, name: 'वैधृति', nameEn: 'Vaidhriti', nature: 'अशुभ', description: 'अनिश्चितता का योग', effects: 'सावधानी से कार्य करें।' },
  ],

  karanas: [
    { id: 'bava', number: 1, name: 'बव', nameEn: 'Bava', type: 'चर', nature: 'शुभ', description: 'सिंह आकृति', effects: 'व्यापार और यात्रा के लिए शुभ।' },
    { id: 'balava', number: 2, name: 'बालव', nameEn: 'Balava', type: 'चर', nature: 'शुभ', description: 'बाघ आकृति', effects: 'धार्मिक कार्यों के लिए उत्तम।' },
    { id: 'kaulava', number: 3, name: 'कौलव', nameEn: 'Kaulava', type: 'चर', nature: 'शुभ', description: 'सूअर आकृति', effects: 'मित्रता और सहयोग के लिए।' },
    { id: 'taitila', number: 4, name: 'तैतिल', nameEn: 'Taitila', type: 'चर', nature: 'शुभ', description: 'गधा आकृति', effects: 'परिवार कार्यों के लिए।' },
    { id: 'gara', number: 5, name: 'गर', nameEn: 'Gara', type: 'चर', nature: 'शुभ', description: 'हाथी आकृति', effects: 'कृषि और भूमि कार्यों के लिए।' },
    { id: 'vanija', number: 6, name: 'वणिज', nameEn: 'Vanija', type: 'चर', nature: 'शुभ', description: 'गाय आकृति', effects: 'व्यापार के लिए अत्यंत शुभ।' },
    { id: 'vishti', number: 7, name: 'विष्टि', nameEn: 'Vishti', type: 'चर', nature: 'अशुभ', description: 'भद्रा करण', effects: 'शुभ कार्य टालें। भद्रा काल।' },
    { id: 'shakuni', number: 8, name: 'शकुनि', nameEn: 'Shakuni', type: 'स्थिर', nature: 'मिश्रित', description: 'पक्षी आकृति', effects: 'विष और औषधि कार्यों के लिए।' },
    { id: 'chatushpada', number: 9, name: 'चतुष्पद', nameEn: 'Chatushpada', type: 'स्थिर', nature: 'शुभ', description: 'चौपाया आकृति', effects: 'पशु संबंधी कार्यों के लिए।' },
    { id: 'nagava', number: 10, name: 'नाग', nameEn: 'Nagava', type: 'स्थिर', nature: 'अशुभ', description: 'सर्प आकृति', effects: 'सावधानी बरतें।' },
    { id: 'kinstughna', number: 11, name: 'किंस्तुघ्न', nameEn: 'Kinstughna', type: 'स्थिर', nature: 'शुभ', description: 'रक्षात्मक करण', effects: 'सभी शुभ कार्यों के लिए उत्तम।' },
  ],

  muhurtas: [
    { name: 'ब्रह्म मुहूर्त', nameEn: 'Brahma Muhurta', duration: '4:00 AM - 5:30 AM', quality: 'शुभ', description: 'ध्यान, योग और आध्यात्मिक साधना के लिए सर्वोत्तम समय।' },
    { name: 'अभिजित मुहूर्त', nameEn: 'Abhijit Muhurta', duration: 'दोपहर 12:00 के आसपास', quality: 'शुभ', description: 'दिन का सबसे शुभ समय। सभी कार्यों के लिए उत्तम।' },
    { name: 'गोधूलि मुहूर्त', nameEn: 'Godhuli Muhurta', duration: 'सूर्यास्त के समय', quality: 'शुभ', description: 'विवाह और शुभ कार्यों के लिए उत्तम।' },
    { name: 'राहु काल', nameEn: 'Rahu Kaal', duration: 'दिन के आठवें भाग में', quality: 'अशुभ', description: 'शुभ कार्य न करें। राहु का अशुभ समय।' },
    { name: 'यमघंट', nameEn: 'Yamaganda', duration: 'दिन के पांचवें भाग में', quality: 'अशुभ', description: 'यात्रा और शुभ कार्य टालें।' },
    { name: 'गुलिक काल', nameEn: 'Gulika Kaal', duration: 'दिन के तीसरे भाग में', quality: 'अशुभ', description: 'नए कार्य न शुरू करें।' },
  ],
};

/**
 * 문자열 해시 함수
 */
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

/**
 * 시드 기반 난수 생성기
 */
function seededRandom(seed: number) {
  return function() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

/**
 * 오늘의 바라 (요일) 가져오기
 */
export function getTodayVara(date: Date = new Date()): Vara {
  const dayIndex = date.getDay(); // 0 = Sunday
  return panchangData.varas[dayIndex];
}

/**
 * ID로 티티 가져오기
 */
export function getTithiById(id: string): Tithi | undefined {
  return panchangData.tithis.find(t => t.id === id);
}

/**
 * 요가 ID로 가져오기
 */
export function getYogaById(id: string): Yoga | undefined {
  return panchangData.yogas.find(y => y.id === id);
}

/**
 * 카라나 ID로 가져오기
 */
export function getKaranaById(id: string): Karana | undefined {
  return panchangData.karanas.find(k => k.id === id);
}

export interface DailyPanchang {
  date: string;
  tithi: Tithi;
  vara: Vara;
  yoga: Yoga;
  karana: Karana;
  auspiciousTimes: string[];
  inauspiciousTimes: string[];
  overallAuspiciousness: number;
  advice: string;
}

/**
 * 오늘의 판창 정보 생성
 */
export function getDailyPanchang(date: Date = new Date()): DailyPanchang {
  const dateStr = date.toISOString().split('T')[0];
  const seed = hashString(dateStr);
  const random = seededRandom(seed);

  // 티티 선택 (날짜 기반으로 순환)
  const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000);
  const tithiIndex = dayOfYear % panchangData.tithis.length;
  const tithi = panchangData.tithis[tithiIndex];

  // 바라 (요일)
  const vara = getTodayVara(date);

  // 요가 선택
  const yogaIndex = Math.floor(random() * panchangData.yogas.length);
  const yoga = panchangData.yogas[yogaIndex];

  // 카라나 선택
  const karanaIndex = Math.floor(random() * panchangData.karanas.length);
  const karana = panchangData.karanas[karanaIndex];

  // 길한 시간
  const auspiciousTimes = [
    panchangData.muhurtas[0].duration, // 브라흐마 무후르타
    panchangData.muhurtas[1].duration, // 아비짓 무후르타
  ];

  // 흉한 시간
  const inauspiciousTimes: string[] = [];
  if (random() > 0.5) {
    inauspiciousTimes.push('राहु काल: 12:00 - 1:30 PM');
  }
  if (random() > 0.5) {
    inauspiciousTimes.push('यमघंट: 7:30 - 9:00 AM');
  }

  // 전체 길흉 점수 계산
  let overallAuspiciousness = 50;
  if (tithi.auspicious) overallAuspiciousness += 15;
  if (yoga.nature === 'शुभ') overallAuspiciousness += 15;
  else if (yoga.nature === 'अशुभ') overallAuspiciousness -= 15;
  if (karana.nature === 'शुभ') overallAuspiciousness += 10;
  else if (karana.nature === 'अशुभ') overallAuspiciousness -= 10;

  overallAuspiciousness = Math.min(100, Math.max(0, overallAuspiciousness));

  // 조언 생성
  const advices = [
    `आज ${tithi.name} तिथि है। ${tithi.description}`,
    `${vara.name} के अनुसार ${vara.auspiciousActivities[0]} के लिए शुभ दिन है।`,
    `${yoga.name} योग में ${yoga.effects}`,
    `आज ${vara.deity} की पूजा करें।`,
    `${vara.color} रंग के वस्त्र पहनें।`,
  ];
  const advice = advices[Math.floor(random() * advices.length)];

  return {
    date: dateStr,
    tithi,
    vara,
    yoga,
    karana,
    auspiciousTimes,
    inauspiciousTimes,
    overallAuspiciousness,
    advice,
  };
}

/**
 * 주간 판창 정보
 */
export function getWeeklyPanchang(startDate: Date = new Date()): DailyPanchang[] {
  const weekPanchang: DailyPanchang[] = [];
  
  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    weekPanchang.push(getDailyPanchang(date));
  }
  
  return weekPanchang;
}

/**
 * 특정 활동에 좋은 티티 찾기
 */
export function findAuspiciousTithisForActivity(activity: string): Tithi[] {
  return panchangData.tithis.filter(tithi => 
    tithi.goodFor.some(g => g.toLowerCase().includes(activity.toLowerCase()))
  );
}

/**
 * 특정 활동을 피해야 할 티티 찾기
 */
export function findInauspiciousTithisForActivity(activity: string): Tithi[] {
  return panchangData.tithis.filter(tithi => 
    tithi.avoidFor.some(a => a.toLowerCase().includes(activity.toLowerCase()))
  );
}
