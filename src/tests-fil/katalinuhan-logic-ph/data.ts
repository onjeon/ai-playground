export const katalinuhanLogicPhData = {
  id: 'katalinuhan-logic-ph',
  title: 'Test ng Logic',
  description: 'Sukatin ang iyong kakayahan sa lohikal na pag-iisip at pangangatwiran',
  questions: [
    {
      id: 1,
      question: 'Kung ang lahat ng mangga ay prutas, at lahat ng prutas ay may buto, ano ang tama?',
      options: [
        { type: 'A', text: 'Lahat ng mangga ay may buto' },
        { type: 'B', text: 'Hindi lahat ng buto ay mangga' },
        { type: 'C', text: 'Walang kinalaman ang buto sa mangga' },
        { type: 'D', text: 'Pareho ang A at B' }
      ]
    },
    {
      id: 2,
      question: 'Si Ana ay mas matangkad kay Ben. Si Ben ay mas matangkad kay Carlo. Sino ang pinakamababa?',
      options: [
        { type: 'A', text: 'Ana' },
        { type: 'B', text: 'Ben' },
        { type: 'C', text: 'Carlo' },
        { type: 'D', text: 'Pareho lang silang tatlo' }
      ]
    },
    {
      id: 3,
      question: 'Anong numero ang susunod: 2, 4, 8, 16, __?',
      options: [
        { type: 'A', text: '24' },
        { type: 'B', text: '32' },
        { type: 'C', text: '20' },
        { type: 'D', text: '28' }
      ]
    },
    {
      id: 4,
      question: 'Kung bumaba ang ulan, babasa ang lupa. Basa ang lupa. Ano ang konklusyon?',
      options: [
        { type: 'A', text: 'Bumaba ang ulan' },
        { type: 'B', text: 'Posibleng bumaba ang ulan' },
        { type: 'C', text: 'Hindi bumaba ang ulan' },
        { type: 'D', text: 'Walang ugnayan' }
      ]
    },
    {
      id: 5,
      question: 'Tatlong mangga = 30 pesos. Ilan ang bayad sa anim na mangga?',
      options: [
        { type: 'A', text: '50 pesos' },
        { type: 'B', text: '60 pesos' },
        { type: 'C', text: '90 pesos' },
        { type: 'D', text: '45 pesos' }
      ]
    },
    {
      id: 6,
      question: 'Kung ang kahapon ay bukas, ano ang makalawa?',
      options: [
        { type: 'A', text: 'Kahapon' },
        { type: 'B', text: 'Bukas' },
        { type: 'C', text: 'Ngayon' },
        { type: 'D', text: 'Kaninang umaga' }
      ]
    },
    {
      id: 7,
      question: 'Aso : Tahol = Pusa : ?',
      options: [
        { type: 'A', text: 'Ungol' },
        { type: 'B', text: 'Ngiyaw' },
        { type: 'C', text: 'Huni' },
        { type: 'D', text: 'Sigaw' }
      ]
    },
    {
      id: 8,
      question: 'May 5 ibon sa puno. Binaril mo ang isa. Ilan ang natira?',
      options: [
        { type: 'A', text: '4 - lumipat ang iba' },
        { type: 'B', text: '5 - bumalik sila' },
        { type: 'C', text: '1 - yung namatay lang' },
        { type: 'D', text: '0 - tumakas lahat' }
      ]
    },
    {
      id: 9,
      question: 'Anong numero ang naiiba: 2, 4, 6, 8, 9, 10?',
      options: [
        { type: 'A', text: '2' },
        { type: 'B', text: '9' },
        { type: 'C', text: '10' },
        { type: 'D', text: '8' }
      ]
    },
    {
      id: 10,
      question: 'Kung 5 tao ay nakakatapos ng trabaho sa 5 araw, ilang tao ang kailangan para sa 1 araw?',
      options: [
        { type: 'A', text: '1 tao' },
        { type: 'B', text: '5 tao' },
        { type: 'C', text: '25 tao' },
        { type: 'D', text: '10 tao' }
      ]
    },
    {
      id: 11,
      question: 'Anong letra ang susunod: A, C, E, G, __?',
      options: [
        { type: 'A', text: 'H' },
        { type: 'B', text: 'I' },
        { type: 'C', text: 'J' },
        { type: 'D', text: 'K' }
      ]
    },
    {
      id: 12,
      question: 'May isang bahay na may 4 sulok. Lahat ng sulok ay nakaharap sa timog. May tigre. Saan nakaharap ang tigre?',
      options: [
        { type: 'A', text: 'Timog' },
        { type: 'B', text: 'Hilaga' },
        { type: 'C', text: 'Imposibleng scenario' },
        { type: 'D', text: 'Silangan' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Master ng Logic',
      description: 'Ikaw ay natural na lohikal na mag-isip! Madali mong nakikita ang pattern at koneksyon ng mga bagay. Mahusay ka sa problem-solving at decision making.'
    },
    B: {
      title: 'Praktikal na Thinker',
      description: 'Maayos ang iyong lohikal na pag-iisip. Hindi ka nagmamadali sa konklusyon at pinag-iisipan mo muna ang lahat ng anggulo bago magdesisyon.'
    },
    C: {
      title: 'Creative Thinker',
      description: 'Minsan hindi ka sumusunod sa traditional na logic dahil mas creative ang approach mo. May sarili kang paraan ng pag-unawa sa mga bagay.'
    },
    D: {
      title: 'Intuitive Thinker',
      description: 'Mas nagtitiwala ka sa instinct mo kaysa sa strict logic. Emotional at gut feeling ang base ng iyong mga desisyon, at okay lang yan!'
    }
  },
  calculateResult: (answers: string[]) => {
    const counts = { A: 0, B: 0, C: 0, D: 0 };
    answers.forEach(answer => counts[answer as keyof typeof counts]++);
    
    // Logic scoring
    const correctAnswers = ['D', 'C', 'B', 'B', 'B', 'C', 'B', 'D', 'B', 'C', 'B', 'C'];
    let score = 0;
    answers.forEach((answer, index) => {
      if (answer === correctAnswers[index]) score++;
    });
    
    if (score >= 10) return 'A';
    if (score >= 7) return 'B';
    if (score >= 4) return 'C';
    return 'D';
  }
};
