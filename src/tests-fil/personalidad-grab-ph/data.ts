export const personalidalidgrabphData = {
  id: 'personalidad-grab-ph',
  title: 'Paano Ka Mag-Grab?',
  description: 'Alamin ang Grab personality mo batay sa kung paano ka gumamit ng ride-hailing app',
  questions: [
    {
      id: 1,
      question: 'Kapag nag-book ka ng Grab, gaano ka kaaga?',
      options: [
        { type: 'A', text: '30 minutes before pa lang, naka-book na' },
        { type: 'B', text: 'Tama-tama lang, mga 15 mins before' },
        { type: 'C', text: 'Pag ready na ako, saka lang mag-book' },
        { type: 'D', text: 'Last minute booking lagi!' }
      ]
    },
    {
      id: 2,
      question: 'Pag walang available na Grab, ano reaction mo?',
      options: [
        { type: 'A', text: 'Chill lang, wait ko hanggang may available' },
        { type: 'B', text: 'Try different pick-up points baka may mahanap' },
        { type: 'C', text: 'Inis! Lipat sa ibang app' },
        { type: 'D', text: 'Bahala na, mag-jeep na lang!' }
      ]
    },
    {
      id: 3,
      question: 'Anong rating mo usually sa mga drivers?',
      options: [
        { type: 'A', text: '5 stars lagi! Bait ko sa rating' },
        { type: 'B', text: 'Depende sa service, fair naman ako' },
        { type: 'C', text: 'Madalas 4 stars, reserved ang 5' },
        { type: 'D', text: 'Minsan nakakalimutan ko mag-rate eh' }
      ]
    },
    {
      id: 4,
      question: 'Pag surge pricing, ano ginagawa mo?',
      options: [
        { type: 'A', text: 'Okay lang, bayaran ko na' },
        { type: 'B', text: 'Wait konti baka bumaba pa' },
        { type: 'C', text: 'No way! Hanap ibang option' },
        { type: 'D', text: 'Mag-lakad na lang malapit naman' }
      ]
    },
    {
      id: 5,
      question: 'Kumusta ka sa pakikipag-usap sa driver?',
      options: [
        { type: 'A', text: 'Chikahan! Kwentuhan hanggang destination' },
        { type: 'B', text: 'Small talk lang, friendly naman' },
        { type: 'C', text: 'Hi at thank you lang' },
        { type: 'D', text: 'Earphones in, own world' }
      ]
    },
    {
      id: 6,
      question: 'Pag nagkamali ng route ang driver, ano reaction mo?',
      options: [
        { type: 'A', text: 'Okay lang sir, kahit saan po' },
        { type: 'B', text: 'Politely correct ko, may waze naman' },
        { type: 'C', text: 'Lowkey inis pero tahimik lang' },
        { type: 'D', text: 'Report agad sa app!' }
      ]
    },
    {
      id: 7,
      question: 'Ano preferred mo na sasakyan?',
      options: [
        { type: 'A', text: 'GrabCar Premium! Aircon malamig' },
        { type: 'B', text: 'Regular GrabCar lang okay na' },
        { type: 'C', text: 'GrabShare para tipid' },
        { type: 'D', text: 'GrabBike para walang traffic!' }
      ]
    },
    {
      id: 8,
      question: 'Sa GrabFood orders mo:',
      options: [
        { type: 'A', text: 'Self pick-up para mas mura' },
        { type: 'B', text: 'Delivery pero wait ko ng promo' },
        { type: 'C', text: 'Order agad kapag gutom na' },
        { type: 'D', text: 'Group order with friends para hatian delivery fee' }
      ]
    },
    {
      id: 9,
      question: 'Pag late ang Grab mo para sa appointment:',
      options: [
        { type: 'A', text: 'Kinakabahan pero cool lang sa labas' },
        { type: 'B', text: 'Nag-update sa pupuntahan na late ako' },
        { type: 'C', text: 'Cancel tapos hanap ibang way' },
        { type: 'D', text: 'Normal lang, sanay na sa Filipino time' }
      ]
    },
    {
      id: 10,
      question: 'Ano ginagawa mo habang nasa Grab?',
      options: [
        { type: 'A', text: 'Scroll sa social media, chill time' },
        { type: 'B', text: 'Work emails or text replies' },
        { type: 'C', text: 'Tulog na tulog! Pahinga time' },
        { type: 'D', text: 'Watch the scenery, zen moment' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Ang Premium Passenger',
      description: 'Generous at chill ka sa Grab experience! Hindi ka mahirap kasama ng drivers at willing ka mag-spend para sa comfort. May patience ka at bait sa service providers. Ang daming biyahe mo pero never ka nagrereklamo!'
    },
    B: {
      title: 'Ang Practical Commuter',
      description: 'Smart at balanced ang approach mo sa Grab! Alam mo kung kailan mag-book at paano mag-maximize ng experience. Fair ka sa ratings at tipid pero hindi kuripot. The perfect grab user!'
    },
    C: {
      title: 'Ang Tipid Master',
      description: 'Alam mo ang lahat ng tricks para makatipid sa Grab! Promo codes, GrabShare, self pick-up - expert ka! Minsan choosy ka pero practical naman. Diskarte talaga ang labas mo!'
    },
    D: {
      title: 'Ang Bahala Na Rider',
      description: 'Spontaneous at go-with-the-flow ka! Hindi ka picky at adaptable sa kahit anong sitwasyon. Kung walang Grab, may plan B ka lagi. Chill lang ang buhay mo at walang stress sa commute!'
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
