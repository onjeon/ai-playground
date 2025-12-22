export const personalidalidshopeephData = {
  id: 'personalidad-shopee-ph',
  title: 'Shopee Personality Mo',
  description: 'Alamin kung anong klaseng Shopee shopper ka based sa mga shopping habits mo',
  questions: [
    {
      id: 1,
      question: 'Pag may Shopee sale, ano ginagawa mo?',
      options: [
        { type: 'A', text: 'Add to cart ng madami days before para ready sa checkout!' },
        { type: 'B', text: 'Browse muna, bili ng kailangan lang' },
        { type: 'C', text: 'Window shopping lang, tignan kung may magustuhan' },
        { type: 'D', text: 'Di ako nanonood ng sale dates eh' }
      ]
    },
    {
      id: 2,
      question: 'Gaano mo ka-check ang reviews bago bumili?',
      options: [
        { type: 'A', text: 'Super basa ng lahat ng reviews with pictures!' },
        { type: 'B', text: 'Overall rating lang tsaka top reviews' },
        { type: 'C', text: 'Skim lang, kung maraming stars okay na' },
        { type: 'D', text: 'YOLO! Di na nagbabasa' }
      ]
    },
    {
      id: 3,
      question: 'Anong preferred mong payment method?',
      options: [
        { type: 'A', text: 'ShopeePay para may cashback!' },
        { type: 'B', text: 'Credit card installment kung mahal' },
        { type: 'C', text: 'COD ako always, safety first' },
        { type: 'D', text: 'Kahit ano basta ma-checkout' }
      ]
    },
    {
      id: 4,
      question: 'Kapag may free shipping voucher:',
      options: [
        { type: 'A', text: 'Mag-compute ng exact para pasok sa minimum!' },
        { type: 'B', text: 'Add small item para abot ang minimum' },
        { type: 'C', text: 'Kung sakto, okay. Kung hindi, bayaran na lang' },
        { type: 'D', text: 'Hindi ko masyado alam mga voucher eh' }
      ]
    },
    {
      id: 5,
      question: 'Pag hindi mo gusto yung dumating na item:',
      options: [
        { type: 'A', text: 'Return/refund agad! Picture lahat ng defects' },
        { type: 'B', text: 'Chat muna seller baka may resolution' },
        { type: 'C', text: 'Low rating na lang sa review' },
        { type: 'D', text: 'Tiis na lang, nakakatamad mag-return' }
      ]
    },
    {
      id: 6,
      question: 'Ano madalas mo i-order sa Shopee?',
      options: [
        { type: 'A', text: 'Tech gadgets at electronics' },
        { type: 'B', text: 'Fashion - clothes, shoes, bags' },
        { type: 'C', text: 'Home essentials at groceries' },
        { type: 'D', text: 'Random stuff na nakita ko sa feed' }
      ]
    },
    {
      id: 7,
      question: 'Gaano kadalas ka mag-check ng Shopee app?',
      options: [
        { type: 'A', text: 'Araw-araw! Baka may flash sale' },
        { type: 'B', text: 'Pag may notification or kailangan' },
        { type: 'C', text: 'Pag payday or sale season lang' },
        { type: 'D', text: 'Once in a blue moon' }
      ]
    },
    {
      id: 8,
      question: 'Sa Shopee Live at games:',
      options: [
        { type: 'A', text: 'Player ng Shopee Shake at lahat ng games!' },
        { type: 'B', text: 'Paminsan-minsan pag may oras' },
        { type: 'C', text: 'Di ko trip, bili na lang direkta' },
        { type: 'D', text: 'Anong Shopee Live?' }
      ]
    },
    {
      id: 9,
      question: 'Pag may add to cart ka na matagal na:',
      options: [
        { type: 'A', text: 'Wait for best price bago checkout' },
        { type: 'B', text: 'Check out pag ready na budget' },
        { type: 'C', text: 'Eventually ma-delete din yan' },
        { type: 'D', text: 'Nakalimutan ko na yan andun pala' }
      ]
    },
    {
      id: 10,
      question: 'Ano reaction mo pag dumating ang parcel?',
      options: [
        { type: 'A', text: 'Super excited! Unboxing video agad' },
        { type: 'B', text: 'Check kung tama lahat, saka review' },
        { type: 'C', text: 'Normal lang, expected naman' },
        { type: 'D', text: 'Nakalimutan ko na in-order ko yan' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Ang Shopee Addict',
      description: 'Living for Shopee ka! Alam mo lahat ng sale dates, vouchers, at tricks para makatipid. Cart mo laging puno at excited ka lagi sa mga parcel. Shopee Shake expert ka at walang flash sale na lulusot sayo!'
    },
    B: {
      title: 'Ang Smart Shopper',
      description: 'Practical at wise ang shopping style mo! Di ka impulse buyer at alam mo kung kailan ang perfect time para bumili. Binabasa mo reviews at compared prices bago checkout. Matino ang spending habits mo!'
    },
    C: {
      title: 'Ang Casual Browser',
      description: 'Chill ang approach mo sa online shopping! Di ka obsessed pero bumibili ka naman kapag may talagang kailangan. Hindi ka stress sa sale dates at peaceful ang relationship mo sa Shopee. Window shopping expert!'
    },
    D: {
      title: 'Ang Offline Human',
      description: 'Di ka masyado into online shopping at mas prefer mo pa rin ang physical stores. Pag nag-Shopee ka man, basic purchases lang. Nakaka-miss ka ng sales pero okay lang sayo. Old school but gold!'
    }
  },
  calculateResult: (answers: string[]) => {
    const counts = { A: 0, B: 0, C: 0, D: 0 };
    answers.forEach(answer => counts[answer as keyof typeof counts]++);
    const max = Math.max(counts.A, counts.B, counts.C, counts.D);
    if (counts.A === max) return 'A';
    if (counts.B === max) return 'B';
    if (counts.C === max) return 'C';
    return 'D';
  }
};
