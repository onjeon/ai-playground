// 인도 라시 (별자리) 운세 - Vedic Astrology (Jyotish)
// 12 राशियाँ: मेष, वृषभ, मिथुन, कर्क, सिंह, कन्या, तुला, वृश्चिक, धनु, मकर, कुंभ, मीन

export interface Rashi {
  id: string;
  name: string;
  nameEn: string;
  symbol: string;
  element: string;
  elementEn: string;
  planet: string;
  planetEn: string;
  dates: string;
  traits: string[];
  traitsEn: string[];
  description: string;
  compatibility: string[];
  luckyGem: string;
  luckyColor: string;
  luckyNumber: number[];
  luckyDay: string;
  mantra: string;
}

export interface DailyMessage {
  positive: string[];
  neutral: string[];
  challenging: string[];
}

export interface RashiData {
  rashis: Rashi[];
  dailyMessages: {
    love: DailyMessage;
    career: DailyMessage;
    health: DailyMessage;
    finance: DailyMessage;
    spiritual: DailyMessage;
  };
  luckyElements: {
    colors: string[];
    numbers: number[];
    days: string[];
    gems: string[];
  };
}

export const rashiData: RashiData = {
  rashis: [
    {
      id: 'mesh',
      name: 'मेष राशि',
      nameEn: 'Aries',
      symbol: '♈',
      element: 'अग्नि',
      elementEn: 'Fire',
      planet: 'मंगल',
      planetEn: 'Mars',
      dates: 'मार्च 21 - अप्रैल 19',
      traits: ['साहसी', 'ऊर्जावान', 'नेतृत्व', 'उत्साही', 'आत्मविश्वासी'],
      traitsEn: ['Courageous', 'Energetic', 'Leadership', 'Enthusiastic', 'Confident'],
      description: 'मेष राशि के जातक साहसी और ऊर्जावान होते हैं। ये स्वाभाविक नेता होते हैं और नई चुनौतियों को स्वीकार करने में आगे रहते हैं।',
      compatibility: ['सिंह', 'धनु', 'मिथुन'],
      luckyGem: 'मूंगा',
      luckyColor: 'लाल',
      luckyNumber: [1, 8, 17],
      luckyDay: 'मंगलवार',
      mantra: 'ॐ क्रां क्रीं क्रौं सः भौमाय नमः',
    },
    {
      id: 'vrishabh',
      name: 'वृषभ राशि',
      nameEn: 'Taurus',
      symbol: '♉',
      element: 'पृथ्वी',
      elementEn: 'Earth',
      planet: 'शुक्र',
      planetEn: 'Venus',
      dates: 'अप्रैल 20 - मई 20',
      traits: ['धैर्यवान', 'विश्वसनीय', 'व्यावहारिक', 'समर्पित', 'जिम्मेदार'],
      traitsEn: ['Patient', 'Reliable', 'Practical', 'Devoted', 'Responsible'],
      description: 'वृषभ राशि के जातक धैर्यवान और विश्वसनीय होते हैं। ये स्थिरता और सुरक्षा को महत्व देते हैं।',
      compatibility: ['कन्या', 'मकर', 'कर्क'],
      luckyGem: 'हीरा',
      luckyColor: 'सफेद',
      luckyNumber: [2, 6, 15],
      luckyDay: 'शुक्रवार',
      mantra: 'ॐ द्रां द्रीं द्रौं सः शुक्राय नमः',
    },
    {
      id: 'mithun',
      name: 'मिथुन राशि',
      nameEn: 'Gemini',
      symbol: '♊',
      element: 'वायु',
      elementEn: 'Air',
      planet: 'बुध',
      planetEn: 'Mercury',
      dates: 'मई 21 - जून 20',
      traits: ['बुद्धिमान', 'जिज्ञासु', 'संवादी', 'अनुकूलनशील', 'बहुमुखी'],
      traitsEn: ['Intelligent', 'Curious', 'Communicative', 'Adaptable', 'Versatile'],
      description: 'मिथुन राशि के जातक बुद्धिमान और जिज्ञासु होते हैं। ये उत्कृष्ट संचारक होते हैं और नए विचारों के प्रति खुले रहते हैं।',
      compatibility: ['तुला', 'कुंभ', 'मेष'],
      luckyGem: 'पन्ना',
      luckyColor: 'हरा',
      luckyNumber: [3, 5, 14],
      luckyDay: 'बुधवार',
      mantra: 'ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः',
    },
    {
      id: 'kark',
      name: 'कर्क राशि',
      nameEn: 'Cancer',
      symbol: '♋',
      element: 'जल',
      elementEn: 'Water',
      planet: 'चंद्र',
      planetEn: 'Moon',
      dates: 'जून 21 - जुलाई 22',
      traits: ['भावुक', 'देखभाल करने वाला', 'सहज ज्ञान', 'वफादार', 'सुरक्षात्मक'],
      traitsEn: ['Emotional', 'Caring', 'Intuitive', 'Loyal', 'Protective'],
      description: 'कर्क राशि के जातक भावुक और देखभाल करने वाले होते हैं। ये अपने परिवार और प्रियजनों के प्रति बहुत समर्पित होते हैं।',
      compatibility: ['वृश्चिक', 'मीन', 'वृषभ'],
      luckyGem: 'मोती',
      luckyColor: 'सफेद',
      luckyNumber: [2, 4, 13],
      luckyDay: 'सोमवार',
      mantra: 'ॐ श्रां श्रीं श्रौं सः चंद्राय नमः',
    },
    {
      id: 'singh',
      name: 'सिंह राशि',
      nameEn: 'Leo',
      symbol: '♌',
      element: 'अग्नि',
      elementEn: 'Fire',
      planet: 'सूर्य',
      planetEn: 'Sun',
      dates: 'जुलाई 23 - अगस्त 22',
      traits: ['आत्मविश्वासी', 'उदार', 'रचनात्मक', 'गर्वित', 'प्रेरणादायक'],
      traitsEn: ['Confident', 'Generous', 'Creative', 'Proud', 'Inspiring'],
      description: 'सिंह राशि के जातक आत्मविश्वासी और उदार होते हैं। ये प्राकृतिक नेता हैं जो दूसरों को प्रेरित करते हैं।',
      compatibility: ['मेष', 'धनु', 'मिथुन'],
      luckyGem: 'माणिक',
      luckyColor: 'सुनहरा',
      luckyNumber: [1, 4, 19],
      luckyDay: 'रविवार',
      mantra: 'ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः',
    },
    {
      id: 'kanya',
      name: 'कन्या राशि',
      nameEn: 'Virgo',
      symbol: '♍',
      element: 'पृथ्वी',
      elementEn: 'Earth',
      planet: 'बुध',
      planetEn: 'Mercury',
      dates: 'अगस्त 23 - सितंबर 22',
      traits: ['विश्लेषणात्मक', 'व्यावहारिक', 'परिश्रमी', 'विनम्र', 'विस्तार-उन्मुख'],
      traitsEn: ['Analytical', 'Practical', 'Hardworking', 'Modest', 'Detail-oriented'],
      description: 'कन्या राशि के जातक विश्लेषणात्मक और व्यावहारिक होते हैं। ये पूर्णता की खोज में रहते हैं और विस्तार पर ध्यान देते हैं।',
      compatibility: ['वृषभ', 'मकर', 'कर्क'],
      luckyGem: 'पन्ना',
      luckyColor: 'हरा',
      luckyNumber: [5, 6, 14],
      luckyDay: 'बुधवार',
      mantra: 'ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः',
    },
    {
      id: 'tula',
      name: 'तुला राशि',
      nameEn: 'Libra',
      symbol: '♎',
      element: 'वायु',
      elementEn: 'Air',
      planet: 'शुक्र',
      planetEn: 'Venus',
      dates: 'सितंबर 23 - अक्टूबर 22',
      traits: ['संतुलित', 'न्यायप्रिय', 'सामाजिक', 'कूटनीतिक', 'सहकारी'],
      traitsEn: ['Balanced', 'Fair-minded', 'Social', 'Diplomatic', 'Cooperative'],
      description: 'तुला राशि के जातक संतुलन और सद्भाव को महत्व देते हैं। ये उत्कृष्ट मध्यस्थ और शांतिदूत होते हैं।',
      compatibility: ['मिथुन', 'कुंभ', 'सिंह'],
      luckyGem: 'हीरा',
      luckyColor: 'सफेद',
      luckyNumber: [6, 7, 15],
      luckyDay: 'शुक्रवार',
      mantra: 'ॐ द्रां द्रीं द्रौं सः शुक्राय नमः',
    },
    {
      id: 'vrishchik',
      name: 'वृश्चिक राशि',
      nameEn: 'Scorpio',
      symbol: '♏',
      element: 'जल',
      elementEn: 'Water',
      planet: 'मंगल',
      planetEn: 'Mars',
      dates: 'अक्टूबर 23 - नवंबर 21',
      traits: ['तीव्र', 'दृढ़निश्चयी', 'साहसी', 'रहस्यमय', 'वफादार'],
      traitsEn: ['Intense', 'Determined', 'Brave', 'Mysterious', 'Loyal'],
      description: 'वृश्चिक राशि के जातक तीव्र और दृढ़निश्चयी होते हैं। ये गहरी भावनाओं वाले और बहुत वफादार होते हैं।',
      compatibility: ['कर्क', 'मीन', 'कन्या'],
      luckyGem: 'मूंगा',
      luckyColor: 'लाल',
      luckyNumber: [8, 9, 18],
      luckyDay: 'मंगलवार',
      mantra: 'ॐ क्रां क्रीं क्रौं सः भौमाय नमः',
    },
    {
      id: 'dhanu',
      name: 'धनु राशि',
      nameEn: 'Sagittarius',
      symbol: '♐',
      element: 'अग्नि',
      elementEn: 'Fire',
      planet: 'बृहस्पति',
      planetEn: 'Jupiter',
      dates: 'नवंबर 22 - दिसंबर 21',
      traits: ['आशावादी', 'साहसी', 'दार्शनिक', 'स्वतंत्र', 'उदार'],
      traitsEn: ['Optimistic', 'Adventurous', 'Philosophical', 'Independent', 'Generous'],
      description: 'धनु राशि के जातक आशावादी और साहसी होते हैं। ये ज्ञान और सत्य की खोज में रहते हैं।',
      compatibility: ['मेष', 'सिंह', 'तुला'],
      luckyGem: 'पुखराज',
      luckyColor: 'पीला',
      luckyNumber: [3, 9, 12],
      luckyDay: 'गुरुवार',
      mantra: 'ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः',
    },
    {
      id: 'makar',
      name: 'मकर राशि',
      nameEn: 'Capricorn',
      symbol: '♑',
      element: 'पृथ्वी',
      elementEn: 'Earth',
      planet: 'शनि',
      planetEn: 'Saturn',
      dates: 'दिसंबर 22 - जनवरी 19',
      traits: ['महत्वाकांक्षी', 'अनुशासित', 'जिम्मेदार', 'धैर्यवान', 'व्यावहारिक'],
      traitsEn: ['Ambitious', 'Disciplined', 'Responsible', 'Patient', 'Practical'],
      description: 'मकर राशि के जातक महत्वाकांक्षी और अनुशासित होते हैं। ये कड़ी मेहनत और दृढ़ता से अपने लक्ष्य प्राप्त करते हैं।',
      compatibility: ['वृषभ', 'कन्या', 'वृश्चिक'],
      luckyGem: 'नीलम',
      luckyColor: 'नीला',
      luckyNumber: [4, 8, 17],
      luckyDay: 'शनिवार',
      mantra: 'ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः',
    },
    {
      id: 'kumbh',
      name: 'कुंभ राशि',
      nameEn: 'Aquarius',
      symbol: '♒',
      element: 'वायु',
      elementEn: 'Air',
      planet: 'शनि',
      planetEn: 'Saturn',
      dates: 'जनवरी 20 - फरवरी 18',
      traits: ['स्वतंत्र', 'मौलिक', 'प्रगतिशील', 'मानवतावादी', 'बौद्धिक'],
      traitsEn: ['Independent', 'Original', 'Progressive', 'Humanitarian', 'Intellectual'],
      description: 'कुंभ राशि के जातक स्वतंत्र और मौलिक विचारक होते हैं। ये मानवता की सेवा में रुचि रखते हैं।',
      compatibility: ['मिथुन', 'तुला', 'धनु'],
      luckyGem: 'नीलम',
      luckyColor: 'नीला',
      luckyNumber: [4, 7, 11],
      luckyDay: 'शनिवार',
      mantra: 'ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः',
    },
    {
      id: 'meen',
      name: 'मीन राशि',
      nameEn: 'Pisces',
      symbol: '♓',
      element: 'जल',
      elementEn: 'Water',
      planet: 'बृहस्पति',
      planetEn: 'Jupiter',
      dates: 'फरवरी 19 - मार्च 20',
      traits: ['दयालु', 'कल्पनाशील', 'संवेदनशील', 'सहज ज्ञानी', 'आध्यात्मिक'],
      traitsEn: ['Compassionate', 'Imaginative', 'Sensitive', 'Intuitive', 'Spiritual'],
      description: 'मीन राशि के जातक दयालु और कल्पनाशील होते हैं। ये आध्यात्मिक और कलात्मक प्रवृत्ति के होते हैं।',
      compatibility: ['कर्क', 'वृश्चिक', 'मकर'],
      luckyGem: 'पुखराज',
      luckyColor: 'पीला',
      luckyNumber: [3, 7, 12],
      luckyDay: 'गुरुवार',
      mantra: 'ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः',
    },
  ],

  dailyMessages: {
    love: {
      positive: [
        'आज प्रेम के मामले में शुभ दिन है। अपने साथी के साथ गहरी बातचीत करें।',
        'रोमांटिक संबंधों में मधुरता आएगी। अपनी भावनाएं व्यक्त करें।',
        'प्यार में नई शुरुआत का समय है। दिल खोलकर प्यार करें।',
        'आज का दिन साथी के साथ समय बिताने के लिए उत्तम है।',
        'प्रेम जीवन में खुशियां आएंगी। विश्वास बनाए रखें।',
        'आपके रिश्ते में गहराई आएगी। समझदारी से काम लें।',
        'आज प्यार का इजहार करने का सही समय है।',
        'संबंधों में सामंजस्य बढ़ेगा। धैर्य रखें।',
      ],
      neutral: [
        'प्रेम संबंधों में स्थिरता रहेगी। सामान्य दिन है।',
        'रिश्तों में धैर्य की जरूरत है। जल्दबाजी न करें।',
        'प्यार में संतुलन बनाए रखें। अति न करें।',
        'आज सामान्य दिन है प्रेम के लिए। अपेक्षाएं कम रखें।',
        'रिश्तों में शांति है। किसी बड़े बदलाव की उम्मीद न करें।',
      ],
      challenging: [
        'प्रेम संबंधों में कुछ तनाव हो सकता है। शांत रहें।',
        'गलतफहमियां हो सकती हैं। स्पष्ट संवाद करें।',
        'आज रिश्तों में सावधानी बरतें। भावनात्मक निर्णय न लें।',
        'प्यार में चुनौतियां आ सकती हैं। धैर्य से काम लें।',
        'संबंधों में दूरी महसूस हो सकती है। चिंता न करें, यह अस्थायी है।',
      ],
    },
    career: {
      positive: [
        'करियर में उन्नति के योग हैं। अपने काम पर ध्यान दें।',
        'व्यापार में लाभ होगा। नए अवसरों को पकड़ें।',
        'कार्यस्थल पर सम्मान मिलेगा। मेहनत का फल मिलेगा।',
        'नई नौकरी या पदोन्नति के अवसर हैं।',
        'आज के प्रयास सफलता लाएंगे। आत्मविश्वास बनाए रखें।',
        'व्यावसायिक मामलों में शुभ दिन है।',
        'टीम के साथ सहयोग से सफलता मिलेगी।',
        'रचनात्मक विचार काम में आएंगे।',
      ],
      neutral: [
        'कार्यक्षेत्र में सामान्य दिन है। रूटीन काम पर ध्यान दें।',
        'करियर में स्थिरता है। नई परियोजनाओं के लिए प्रतीक्षा करें।',
        'काम में मध्यम प्रगति होगी। धैर्य रखें।',
        'व्यापार में स्थिर स्थिति रहेगी।',
        'आज बड़े निर्णय टालना बेहतर होगा।',
      ],
      challenging: [
        'कार्यस्थल पर कुछ बाधाएं आ सकती हैं। शांत रहें।',
        'व्यापार में सावधानी बरतें। जोखिम से बचें।',
        'सहकर्मियों के साथ मतभेद हो सकते हैं। कूटनीति से काम लें।',
        'करियर में चुनौतियां हैं। हार न मानें।',
        'काम का बोझ बढ़ सकता है। प्राथमिकताएं तय करें।',
      ],
    },
    health: {
      positive: [
        'स्वास्थ्य उत्तम रहेगा। ऊर्जा का स्तर ऊंचा होगा।',
        'शारीरिक और मानसिक स्वास्थ्य में सुधार होगा।',
        'व्यायाम और योग से लाभ होगा। सक्रिय रहें।',
        'आज का दिन स्वास्थ्य के लिए अच्छा है।',
        'मन शांत और प्रसन्न रहेगा।',
        'नई स्वास्थ्य आदतें शुरू करने का अच्छा समय है।',
        'ध्यान और प्राणायाम से लाभ मिलेगा।',
      ],
      neutral: [
        'स्वास्थ्य सामान्य रहेगा। संतुलित आहार लें।',
        'शरीर में थोड़ी थकान हो सकती है। आराम करें।',
        'स्वास्थ्य स्थिर है। नियमित दिनचर्या बनाए रखें।',
        'सामान्य दिन है स्वास्थ्य के लिए।',
        'पर्याप्त नींद लें और पानी पिएं।',
      ],
      challenging: [
        'स्वास्थ्य पर ध्यान दें। लापरवाही न करें।',
        'तनाव से बचें। विश्राम जरूरी है।',
        'पाचन संबंधी समस्या हो सकती है। हल्का भोजन करें।',
        'सिरदर्द या थकान हो सकती है। आराम करें।',
        'पुरानी बीमारी पर ध्यान दें। डॉक्टर से सलाह लें।',
      ],
    },
    finance: {
      positive: [
        'धन लाभ के योग हैं। निवेश पर अच्छा रिटर्न मिलेगा।',
        'आर्थिक स्थिति मजबूत होगी। खर्चों पर नियंत्रण रखें।',
        'अप्रत्याशित धन प्राप्ति हो सकती है।',
        'व्यापार में लाभ होगा। नई आय के स्रोत खुलेंगे।',
        'आज का दिन आर्थिक निर्णयों के लिए शुभ है।',
        'पुराने कर्ज चुकाने का अवसर मिलेगा।',
        'संपत्ति संबंधी मामलों में लाभ होगा।',
      ],
      neutral: [
        'आर्थिक स्थिति सामान्य रहेगी। बचत पर ध्यान दें।',
        'धन के मामले में स्थिरता है। नए निवेश टालें।',
        'खर्च और आय में संतुलन रहेगा।',
        'आज बड़े वित्तीय निर्णय न लें।',
        'मितव्ययी रहें। अनावश्यक खर्च से बचें।',
      ],
      challenging: [
        'आर्थिक मामलों में सावधानी बरतें। अनावश्यक खर्च से बचें।',
        'निवेश में नुकसान हो सकता है। जोखिम से बचें।',
        'कर्ज लेने से बचें। वित्तीय योजना बनाएं।',
        'अप्रत्याशित खर्च हो सकता है। आपातकालीन फंड रखें।',
        'धन के मामले में तनाव हो सकता है। शांत रहें।',
      ],
    },
    spiritual: {
      positive: [
        'आध्यात्मिक उन्नति का समय है। ध्यान और पूजा में मन लगेगा।',
        'मंदिर दर्शन से मन को शांति मिलेगी।',
        'आज का दिन साधना के लिए उत्तम है।',
        'आंतरिक शांति और सुख का अनुभव होगा।',
        'पूर्वजों की कृपा प्राप्त होगी।',
        'मंत्र जाप से लाभ मिलेगा।',
        'आध्यात्मिक गुरु से मार्गदर्शन मिल सकता है।',
      ],
      neutral: [
        'आध्यात्मिक क्षेत्र में सामान्य दिन है।',
        'ध्यान के लिए समय निकालें।',
        'मन थोड़ा विचलित हो सकता है। शांत रहने का प्रयास करें।',
        'दैनिक पूजा पाठ जारी रखें।',
        'आध्यात्मिक पुस्तकें पढ़ने से लाभ होगा।',
      ],
      challenging: [
        'मन अशांत हो सकता है। ध्यान करें।',
        'नकारात्मक विचारों से बचें। सकारात्मक रहें।',
        'आध्यात्मिक कार्यों में व्यवधान हो सकता है।',
        'धार्मिक मतभेदों से दूर रहें।',
        'मन की शांति के लिए प्राणायाम करें।',
      ],
    },
  },

  luckyElements: {
    colors: [
      'लाल', 'नारंगी', 'पीला', 'हरा', 'नीला', 
      'बैंगनी', 'सफेद', 'गुलाबी', 'सुनहरा', 'चांदी',
    ],
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22],
    days: [
      'रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 
      'गुरुवार', 'शुक्रवार', 'शनिवार',
    ],
    gems: [
      'माणिक', 'मोती', 'मूंगा', 'पन्ना', 'पुखराज',
      'हीरा', 'नीलम', 'गोमेद', 'लहसुनिया',
    ],
  },
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
 * 라시 ID로 라시 데이터 가져오기
 */
export function getRashiById(rashiId: string): Rashi | undefined {
  return rashiData.rashis.find(r => r.id === rashiId);
}

/**
 * 모든 라시 목록 가져오기
 */
export function getAllRashis(): Rashi[] {
  return rashiData.rashis;
}

/**
 * 날짜로 라시 찾기 (양력 기준)
 */
export function getRashiByDate(date: Date): Rashi {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return rashiData.rashis[0]; // 메시
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return rashiData.rashis[1]; // 브리샤브
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return rashiData.rashis[2]; // 미툰
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return rashiData.rashis[3]; // 카르크
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return rashiData.rashis[4]; // 싱
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return rashiData.rashis[5]; // 칸야
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return rashiData.rashis[6]; // 툴라
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return rashiData.rashis[7]; // 브리쉬치크
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return rashiData.rashis[8]; // 다누
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return rashiData.rashis[9]; // 마카르
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return rashiData.rashis[10]; // 쿰브
  return rashiData.rashis[11]; // 민 (Pisces)
}

export interface DailyRashiFortune {
  rashi: Rashi;
  date: string;
  overallScore: number;
  categories: {
    love: { score: number; message: string };
    career: { score: number; message: string };
    health: { score: number; message: string };
    finance: { score: number; message: string };
    spiritual: { score: number; message: string };
  };
  luckyColor: string;
  luckyNumber: number;
  luckyTime: string;
  advice: string;
}

/**
 * 오늘의 라시 운세 생성
 */
export function getDailyRashiFortune(rashiId: string, date: Date = new Date()): DailyRashiFortune | null {
  const rashi = getRashiById(rashiId);
  if (!rashi) return null;

  const dateStr = date.toISOString().split('T')[0];
  const seed = hashString(rashiId + dateStr);
  const random = seededRandom(seed);

  // 카테고리별 점수와 메시지 생성
  const getScoreAndMessage = (category: keyof typeof rashiData.dailyMessages) => {
    const messages = rashiData.dailyMessages[category];
    const score = Math.floor(random() * 100) + 1;
    
    let messageList: string[];
    if (score >= 70) {
      messageList = messages.positive;
    } else if (score >= 40) {
      messageList = messages.neutral;
    } else {
      messageList = messages.challenging;
    }
    
    const messageIndex = Math.floor(random() * messageList.length);
    return { score, message: messageList[messageIndex] };
  };

  const love = getScoreAndMessage('love');
  const career = getScoreAndMessage('career');
  const health = getScoreAndMessage('health');
  const finance = getScoreAndMessage('finance');
  const spiritual = getScoreAndMessage('spiritual');

  const overallScore = Math.round(
    (love.score + career.score + health.score + finance.score + spiritual.score) / 5
  );

  // 럭키 요소 선택
  const colorIndex = Math.floor(random() * rashiData.luckyElements.colors.length);
  const luckyColor = rashiData.luckyElements.colors[colorIndex];
  
  const luckyNumber = rashi.luckyNumber[Math.floor(random() * rashi.luckyNumber.length)];
  
  const hours = [6, 9, 12, 15, 18, 21];
  const luckyHour = hours[Math.floor(random() * hours.length)];
  const luckyTime = `${luckyHour}:00 - ${luckyHour + 2}:00`;

  // 종합 조언 생성
  const advices = [
    `आज ${rashi.planet} ग्रह आपके पक्ष में है। ${rashi.mantra} का जाप करें।`,
    `${rashi.luckyGem} धारण करने से शुभ फल मिलेगा।`,
    `आज ${rashi.luckyDay} जैसा शुभ दिन है। महत्वपूर्ण कार्य करें।`,
    `${rashi.luckyColor} रंग पहनने से सौभाग्य बढ़ेगा।`,
    `ध्यान और प्राणायाम से दिन की शुरुआत करें।`,
    `परिवार के साथ समय बिताएं। शांति मिलेगी।`,
    `आज नए कार्यों की शुरुआत के लिए शुभ है।`,
  ];
  const adviceIndex = Math.floor(random() * advices.length);

  return {
    rashi,
    date: dateStr,
    overallScore,
    categories: { love, career, health, finance, spiritual },
    luckyColor,
    luckyNumber,
    luckyTime,
    advice: advices[adviceIndex],
  };
}

/**
 * 라시 호환성 검사
 */
export function checkRashiCompatibility(rashi1Id: string, rashi2Id: string): {
  score: number;
  description: string;
  aspects: {
    emotional: number;
    intellectual: number;
    physical: number;
    spiritual: number;
  };
} | null {
  const rashi1 = getRashiById(rashi1Id);
  const rashi2 = getRashiById(rashi2Id);
  
  if (!rashi1 || !rashi2) return null;

  // 호환성 계산 로직
  let baseScore = 50;
  
  // 같은 원소면 호환성 증가
  if (rashi1.element === rashi2.element) {
    baseScore += 20;
  }
  
  // 호환되는 원소들
  const compatibleElements: Record<string, string[]> = {
    'अग्नि': ['वायु'],
    'पृथ्वी': ['जल'],
    'वायु': ['अग्नि'],
    'जल': ['पृथ्वी'],
  };
  
  if (compatibleElements[rashi1.element]?.includes(rashi2.element)) {
    baseScore += 15;
  }
  
  // 직접 호환 목록에 있으면 점수 증가
  if (rashi1.compatibility.includes(rashi2.name.split(' ')[0]) ||
      rashi2.compatibility.includes(rashi1.name.split(' ')[0])) {
    baseScore += 25;
  }

  const seed = hashString(rashi1Id + rashi2Id);
  const random = seededRandom(seed);
  
  const emotional = Math.min(100, baseScore + Math.floor(random() * 20) - 10);
  const intellectual = Math.min(100, baseScore + Math.floor(random() * 20) - 10);
  const physical = Math.min(100, baseScore + Math.floor(random() * 20) - 10);
  const spiritual = Math.min(100, baseScore + Math.floor(random() * 20) - 10);
  
  const finalScore = Math.round((emotional + intellectual + physical + spiritual) / 4);

  let description: string;
  if (finalScore >= 80) {
    description = `${rashi1.name} और ${rashi2.name} की जोड़ी उत्कृष्ट है! यह एक आदर्श संबंध हो सकता है।`;
  } else if (finalScore >= 60) {
    description = `${rashi1.name} और ${rashi2.name} में अच्छी समझ है। थोड़े प्रयास से संबंध मजबूत होगा।`;
  } else if (finalScore >= 40) {
    description = `${rashi1.name} और ${rashi2.name} को एक दूसरे को समझने में समय लगेगा। धैर्य रखें।`;
  } else {
    description = `${rashi1.name} और ${rashi2.name} का मिलन चुनौतीपूर्ण हो सकता है। अधिक प्रयास की जरूरत है।`;
  }

  return {
    score: finalScore,
    description,
    aspects: { emotional, intellectual, physical, spiritual },
  };
}

/**
 * 주간 운세 생성
 */
export function getWeeklyRashiFortune(rashiId: string, startDate: Date = new Date()): DailyRashiFortune[] {
  const weekFortunes: DailyRashiFortune[] = [];
  
  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    const fortune = getDailyRashiFortune(rashiId, date);
    if (fortune) {
      weekFortunes.push(fortune);
    }
  }
  
  return weekFortunes;
}
