export const shoppingSmData = {
  id: 'shopping-sm',
  title: 'Anong SM Shopper Ka?',
  description: 'Alamin kung anong tipo ka ng SM mall shopper',
  questions: [
    {
      id: 1,
      question: 'Bakit ka pumupunta sa SM?',
      options: [
        { type: 'A', text: 'Shopping talaga! May bibilhin' },
        { type: 'B', text: 'Foodtrip! Dami kainan' },
        { type: 'C', text: 'Tambay! May aircon' },
        { type: 'D', text: 'Grocery at errands' }
      ]
    },
    {
      id: 2,
      question: 'Saan ka first pumupunta sa SM?',
      options: [
        { type: 'A', text: 'Department store! Tingnan bagong items' },
        { type: 'B', text: 'Food court! Gutom na' },
        { type: 'C', text: 'Cyberzone! Gadgets' },
        { type: 'D', text: 'Supermarket! May listahan' }
      ]
    },
    {
      id: 3,
      question: 'Gaano katagal ka sa SM?',
      options: [
        { type: 'A', text: 'Buong araw! From open to close' },
        { type: 'B', text: '3-4 hours! Solid mall time' },
        { type: 'C', text: '1-2 hours! Quick lang' },
        { type: 'D', text: 'Exact time lang ng kailangan' }
      ]
    },
    {
      id: 4,
      question: 'Paano ka sa sale at discount?',
      options: [
        { type: 'A', text: 'Expert! Alam ko lahat ng sale season' },
        { type: 'B', text: 'Excited! Namimili talaga' },
        { type: 'C', text: 'Tingin lang, bihira bumili' },
        { type: 'D', text: 'Not interested, regular price lang' }
      ]
    },
    {
      id: 5,
      question: 'Kasama mo sa SM:',
      options: [
        { type: 'A', text: 'Barkada! Group outing' },
        { type: 'B', text: 'Family! Quality time' },
        { type: 'C', text: 'Solo! Me time' },
        { type: 'D', text: 'Partner! Date sa mall' }
      ]
    },
    {
      id: 6,
      question: 'Sa department store fitting room:',
      options: [
        { type: 'A', text: 'Susukat ng madami!' },
        { type: 'B', text: 'Selected items lang' },
        { type: 'C', text: 'Tingin lang, di susukat' },
        { type: 'D', text: 'Bili agad pag swak ang size' }
      ]
    },
    {
      id: 7,
      question: 'Pag gutom na sa SM:',
      options: [
        { type: 'A', text: 'Fine dining! Resto sa top floor' },
        { type: 'B', text: 'Food court favorites' },
        { type: 'C', text: 'Street food sa labas' },
        { type: 'D', text: 'Supermarket deli o snacks' }
      ]
    },
    {
      id: 8,
      question: 'Sa comfort room breaks:',
      options: [
        { type: 'A', text: 'Strategic! Alam ko pinaka-malinis' },
        { type: 'B', text: 'Kung saan malapit' },
        { type: 'C', text: 'Hold lang hanggang uwian' },
        { type: 'D', text: 'VIP! Department store CRs' }
      ]
    },
    {
      id: 9,
      question: 'Pag naliligaw sa SM:',
      options: [
        { type: 'A', text: 'Imposible! Kabisado ko layout' },
        { type: 'B', text: 'Minsan pero mahahanap din' },
        { type: 'C', text: 'Lagi! Lakas makaligaw' },
        { type: 'D', text: 'Hindi ako nag-eexplore' }
      ]
    },
    {
      id: 10,
      question: 'Sa parking:',
      options: [
        { type: 'A', text: 'Malapit sa entrance! Matiyaga' },
        { type: 'B', text: 'Unang nakitang slot' },
        { type: 'C', text: 'Commute! Walang kotse' },
        { type: 'D', text: 'Drop off lang' }
      ]
    },
    {
      id: 11,
      question: 'Sa pauwi na:',
      options: [
        { type: 'A', text: 'Dami ko shopping bags!' },
        { type: 'B', text: 'May konting bili' },
        { type: 'C', text: 'Wala, tambay lang' },
        { type: 'D', text: 'Grocery bags lang' }
      ]
    },
    {
      id: 12,
      question: 'Overall SM experience:',
      options: [
        { type: 'A', text: 'Favorite ko! Weekly routine' },
        { type: 'B', text: 'Okay naman, convenient' },
        { type: 'C', text: 'Occasional lang' },
        { type: 'D', text: 'Kung kailangan lang' }
      ]
    }
  ],
  results: {
    A: {
      title: 'SM Loyalist',
      description: 'SM is life para sa iyo! Kabisado mo lahat ng floor, sale schedules, at best spots. Weekly routine mo ang SM at expert ka na sa lahat. Para sayo, SM is more than a mall - it\'s your second home!'
    },
    B: {
      title: 'Mall Enthusiast',
      description: 'Fan ka ng SM! Enjoy mo ang mall experience - shopping, eating, hanging out. SM is your go-to for entertainment and needs. You make the most of mall time!'
    },
    C: {
      title: 'Casual Visitor',
      description: 'Pumupunta ka ng SM pero hindi mo priority. Occasional lang ang visits mo at specific purpose lang. May aircon kasi at convenient. You use the mall practically!'
    },
    D: {
      title: 'Errand Runner',
      description: 'SM is purely functional for you. Grocery, bills, necessities lang. In and out ka agad walang tambay. Efficient ang approach mo - get what you need and go!'
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
