// कुंडली (Kundli) - 인도 출생 차트 기본 정보
// Vedic Birth Chart Overview

export interface Bhava {
  id: number;
  name: string;
  nameEn: string;
  meaning: string;
  aspects: string[];
}

export interface Graha {
  id: string;
  name: string;
  nameEn: string;
  symbol: string;
  nature: string;
  signifies: string[];
  exaltation: string;
  debilitation: string;
  friendlyPlanets: string[];
  enemyPlanets: string[];
}

export interface Dosha {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  effects: string[];
  remedies: string[];
}

export interface KundliData {
  bhavas: Bhava[];
  grahas: Graha[];
  doshas: Dosha[];
}

export const kundliData: KundliData = {
  // 12 भाव (Houses)
  bhavas: [
    {
      id: 1,
      name: 'प्रथम भाव (लग्न)',
      nameEn: 'First House (Ascendant)',
      meaning: 'आत्म, व्यक्तित्व, शारीरिक रूप',
      aspects: ['स्वास्थ्य', 'व्यक्तित्व', 'जीवन दृष्टिकोण', 'प्रथम प्रभाव'],
    },
    {
      id: 2,
      name: 'द्वितीय भाव',
      nameEn: 'Second House',
      meaning: 'धन, परिवार, वाणी',
      aspects: ['आय', 'बचत', 'परिवार', 'भोजन', 'वाक्पटुता'],
    },
    {
      id: 3,
      name: 'तृतीय भाव',
      nameEn: 'Third House',
      meaning: 'साहस, भाई-बहन, संचार',
      aspects: ['भाई-बहन', 'छोटी यात्राएं', 'संचार कौशल', 'साहस'],
    },
    {
      id: 4,
      name: 'चतुर्थ भाव',
      nameEn: 'Fourth House',
      meaning: 'माता, घर, सुख',
      aspects: ['माता', 'संपत्ति', 'वाहन', 'शिक्षा', 'मानसिक शांति'],
    },
    {
      id: 5,
      name: 'पंचम भाव',
      nameEn: 'Fifth House',
      meaning: 'संतान, बुद्धि, प्रेम',
      aspects: ['संतान', 'रचनात्मकता', 'प्रेम संबंध', 'शिक्षा', 'मनोरंजन'],
    },
    {
      id: 6,
      name: 'षष्ठ भाव',
      nameEn: 'Sixth House',
      meaning: 'शत्रु, रोग, ऋण',
      aspects: ['स्वास्थ्य समस्याएं', 'शत्रु', 'ऋण', 'दैनिक कार्य', 'सेवा'],
    },
    {
      id: 7,
      name: 'सप्तम भाव',
      nameEn: 'Seventh House',
      meaning: 'विवाह, साझेदारी, व्यापार',
      aspects: ['जीवनसाथी', 'विवाह', 'व्यापार साझेदारी', 'कानूनी मामले'],
    },
    {
      id: 8,
      name: 'अष्टम भाव',
      nameEn: 'Eighth House',
      meaning: 'आयु, रहस्य, परिवर्तन',
      aspects: ['दीर्घायु', 'विरासत', 'रहस्य', 'तांत्रिक ज्ञान', 'परिवर्तन'],
    },
    {
      id: 9,
      name: 'नवम भाव',
      nameEn: 'Ninth House',
      meaning: 'भाग्य, धर्म, गुरु',
      aspects: ['भाग्य', 'पिता', 'धर्म', 'लंबी यात्राएं', 'उच्च शिक्षा'],
    },
    {
      id: 10,
      name: 'दशम भाव',
      nameEn: 'Tenth House',
      meaning: 'कर्म, व्यवसाय, प्रतिष्ठा',
      aspects: ['करियर', 'प्रतिष्ठा', 'सामाजिक स्थिति', 'सरकारी मामले'],
    },
    {
      id: 11,
      name: 'एकादश भाव',
      nameEn: 'Eleventh House',
      meaning: 'लाभ, मित्र, इच्छापूर्ति',
      aspects: ['आय', 'लाभ', 'मित्र', 'बड़े भाई-बहन', 'इच्छाओं की पूर्ति'],
    },
    {
      id: 12,
      name: 'द्वादश भाव',
      nameEn: 'Twelfth House',
      meaning: 'व्यय, मोक्ष, विदेश',
      aspects: ['खर्च', 'हानि', 'मोक्ष', 'विदेश यात्रा', 'अध्यात्म'],
    },
  ],

  // 9 ग्रह (Navagraha)
  grahas: [
    {
      id: 'surya',
      name: 'सूर्य',
      nameEn: 'Sun',
      symbol: '☉',
      nature: 'शुभ',
      signifies: ['आत्मा', 'पिता', 'राजा', 'सरकार', 'स्वास्थ्य', 'प्रतिष्ठा'],
      exaltation: 'मेष',
      debilitation: 'तुला',
      friendlyPlanets: ['चंद्र', 'मंगल', 'गुरु'],
      enemyPlanets: ['शनि', 'शुक्र'],
    },
    {
      id: 'chandra',
      name: 'चंद्र',
      nameEn: 'Moon',
      symbol: '☽',
      nature: 'शुभ',
      signifies: ['मन', 'माता', 'भावनाएं', 'जल', 'यात्रा'],
      exaltation: 'वृषभ',
      debilitation: 'वृश्चिक',
      friendlyPlanets: ['सूर्य', 'बुध'],
      enemyPlanets: ['राहु', 'केतु'],
    },
    {
      id: 'mangal',
      name: 'मंगल',
      nameEn: 'Mars',
      symbol: '♂',
      nature: 'पाप',
      signifies: ['साहस', 'भाई', 'संपत्ति', 'युद्ध', 'ऊर्जा'],
      exaltation: 'मकर',
      debilitation: 'कर्क',
      friendlyPlanets: ['सूर्य', 'चंद्र', 'गुरु'],
      enemyPlanets: ['बुध'],
    },
    {
      id: 'budh',
      name: 'बुध',
      nameEn: 'Mercury',
      symbol: '☿',
      nature: 'मिश्रित',
      signifies: ['बुद्धि', 'व्यापार', 'संचार', 'मित्र', 'गणित'],
      exaltation: 'कन्या',
      debilitation: 'मीन',
      friendlyPlanets: ['सूर्य', 'शुक्र'],
      enemyPlanets: ['चंद्र'],
    },
    {
      id: 'guru',
      name: 'गुरु (बृहस्पति)',
      nameEn: 'Jupiter',
      symbol: '♃',
      nature: 'शुभ',
      signifies: ['ज्ञान', 'गुरु', 'संतान', 'धर्म', 'भाग्य', 'विस्तार'],
      exaltation: 'कर्क',
      debilitation: 'मकर',
      friendlyPlanets: ['सूर्य', 'चंद्र', 'मंगल'],
      enemyPlanets: ['बुध', 'शुक्र'],
    },
    {
      id: 'shukra',
      name: 'शुक्र',
      nameEn: 'Venus',
      symbol: '♀',
      nature: 'शुभ',
      signifies: ['प्रेम', 'विवाह', 'सौंदर्य', 'वाहन', 'कला', 'विलासिता'],
      exaltation: 'मीन',
      debilitation: 'कन्या',
      friendlyPlanets: ['बुध', 'शनि'],
      enemyPlanets: ['सूर्य', 'चंद्र'],
    },
    {
      id: 'shani',
      name: 'शनि',
      nameEn: 'Saturn',
      symbol: '♄',
      nature: 'पाप',
      signifies: ['कर्म', 'न्याय', 'अनुशासन', 'दीर्घायु', 'कठिनाई', 'सेवक'],
      exaltation: 'तुला',
      debilitation: 'मेष',
      friendlyPlanets: ['बुध', 'शुक्र'],
      enemyPlanets: ['सूर्य', 'चंद्र', 'मंगल'],
    },
    {
      id: 'rahu',
      name: 'राहु',
      nameEn: 'Rahu (North Node)',
      symbol: '☊',
      nature: 'पाप',
      signifies: ['भ्रम', 'विदेश', 'आधुनिकता', 'अचानक घटनाएं', 'महत्वाकांक्षा'],
      exaltation: 'वृषभ',
      debilitation: 'वृश्चिक',
      friendlyPlanets: ['शुक्र', 'शनि'],
      enemyPlanets: ['सूर्य', 'चंद्र', 'मंगल'],
    },
    {
      id: 'ketu',
      name: 'केतु',
      nameEn: 'Ketu (South Node)',
      symbol: '☋',
      nature: 'पाप',
      signifies: ['मोक्ष', 'आध्यात्मिकता', 'पूर्व जन्म', 'वैराग्य', 'रहस्य'],
      exaltation: 'वृश्चिक',
      debilitation: 'वृषभ',
      friendlyPlanets: ['मंगल', 'शुक्र', 'शनि'],
      enemyPlanets: ['सूर्य', 'चंद्र'],
    },
  ],

  // मुख्य दोष
  doshas: [
    {
      id: 'manglik',
      name: 'मांगलिक दोष',
      nameEn: 'Manglik Dosha',
      description: 'जब मंगल 1, 2, 4, 7, 8 या 12वें भाव में हो',
      effects: ['विवाह में देरी', 'वैवाहिक समस्याएं', 'जीवनसाथी के स्वास्थ्य पर प्रभाव'],
      remedies: [
        'मांगलिक से विवाह करें',
        'कुंभ विवाह करें',
        'हनुमान चालीसा पढ़ें',
        'मंगलवार को व्रत रखें',
        'मूंगा धारण करें',
      ],
    },
    {
      id: 'kalsarp',
      name: 'कालसर्प दोष',
      nameEn: 'Kalsarp Dosha',
      description: 'जब सभी ग्रह राहु-केतु के बीच हों',
      effects: ['जीवन में बाधाएं', 'अचानक समस्याएं', 'मानसिक तनाव'],
      remedies: [
        'कालसर्प पूजा करवाएं',
        'नागपंचमी पर पूजा करें',
        'महामृत्युंजय मंत्र जाप करें',
        'गोमेद धारण करें',
      ],
    },
    {
      id: 'pitru',
      name: 'पितृ दोष',
      nameEn: 'Pitru Dosha',
      description: 'पूर्वजों के कर्मों का प्रभाव',
      effects: ['संतान में समस्या', 'आर्थिक बाधाएं', 'पारिवारिक कलह'],
      remedies: [
        'श्राद्ध कर्म करें',
        'पितृ पक्ष में तर्पण करें',
        'गया में पिंडदान करें',
        'ब्राह्मणों को भोजन कराएं',
      ],
    },
    {
      id: 'shani-sade-sati',
      name: 'शनि साढ़े साती',
      nameEn: 'Shani Sade Sati',
      description: 'शनि का चंद्र राशि पर 7.5 वर्ष का प्रभाव',
      effects: ['कठिनाइयां', 'स्वास्थ्य समस्याएं', 'आर्थिक तनाव', 'संबंधों में समस्याएं'],
      remedies: [
        'शनिवार को हनुमान जी की पूजा करें',
        'तेल का दान करें',
        'काले कपड़े/लोहा दान करें',
        'नीलम या लोहे की अंगूठी पहनें',
        'शनि मंत्र जाप करें',
      ],
    },
  ],
};

// 유틸리티 함수
export function getBhavaById(id: number): Bhava | undefined {
  return kundliData.bhavas.find(b => b.id === id);
}

export function getGrahaById(id: string): Graha | undefined {
  return kundliData.grahas.find(g => g.id === id);
}

export function getDoshaById(id: string): Dosha | undefined {
  return kundliData.doshas.find(d => d.id === id);
}
