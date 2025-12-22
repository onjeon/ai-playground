export const katalinuhanVerbalPhData = {
  id: 'katalinuhan-verbal-ph',
  title: 'Test ng Verbal Reasoning',
  description: 'Sukatin ang iyong verbal skills at linguistic intelligence',
  questions: [
    {
      id: 1,
      question: 'Ano ang ibig sabihin ng "Bahala na si Batman"?',
      options: [
        { type: 'A', text: 'Asa tayo kay Batman' },
        { type: 'B', text: 'Bahala na, go with the flow' },
        { type: 'C', text: 'Mag-superhero tayo' },
        { type: 'D', text: 'Manood ng Batman' }
      ]
    },
    {
      id: 2,
      question: 'Anong salita ang opposite ng "Maingay"?',
      options: [
        { type: 'A', text: 'Tahimik' },
        { type: 'B', text: 'Malakas' },
        { type: 'C', text: 'Masaya' },
        { type: 'D', text: 'Malungkot' }
      ]
    },
    {
      id: 3,
      question: 'Kumpleto ang sentence: "Ang hindi marunong lumingon sa pinanggalingan ay ___"',
      options: [
        { type: 'A', text: 'Mawawala' },
        { type: 'B', text: 'Hindi makakarating sa paroroonan' },
        { type: 'C', text: 'Masaya' },
        { type: 'D', text: 'Mag-abroad' }
      ]
    },
    {
      id: 4,
      question: 'Ano ang synonym ng "Matalino"?',
      options: [
        { type: 'A', text: 'Bobo' },
        { type: 'B', text: 'Marunong' },
        { type: 'C', text: 'Maganda' },
        { type: 'D', text: 'Mabait' }
      ]
    },
    {
      id: 5,
      question: 'Anong figure of speech: "Ikaw ang ilaw ng aking buhay"',
      options: [
        { type: 'A', text: 'Simile' },
        { type: 'B', text: 'Metaphor' },
        { type: 'C', text: 'Hyperbole' },
        { type: 'D', text: 'Personification' }
      ]
    },
    {
      id: 6,
      question: 'Ano ang tamang gamit ng "po at opo"?',
      options: [
        { type: 'A', text: 'Sa lahat ng tao' },
        { type: 'B', text: 'Sa mas matanda at respeto' },
        { type: 'C', text: 'Sa bata lang' },
        { type: 'D', text: 'Sa mga foreigner' }
      ]
    },
    {
      id: 7,
      question: 'Kumpleto: "Ang taong walang kibo, ___"',
      options: [
        { type: 'A', text: 'Walang sasabihin' },
        { type: 'B', text: 'Nasa loob ang kulo' },
        { type: 'C', text: 'Tahimik lang' },
        { type: 'D', text: 'Wala dito' }
      ]
    },
    {
      id: 8,
      question: 'Ano ang ibig sabihin ng "Nagpapakipot"?',
      options: [
        { type: 'A', text: 'Payat na' },
        { type: 'B', text: 'Nag-diet' },
        { type: 'C', text: 'Nagpapahirap kunin (romantic context)' },
        { type: 'D', text: 'Masikip ang damit' }
      ]
    },
    {
      id: 9,
      question: 'Anong uri ng pangungusap: "Pumunta ka sa tindahan!"',
      options: [
        { type: 'A', text: 'Pasalaysay' },
        { type: 'B', text: 'Patanong' },
        { type: 'C', text: 'Pautos' },
        { type: 'D', text: 'Padamdam' }
      ]
    },
    {
      id: 10,
      question: 'Ano ang plural ng "Bata"?',
      options: [
        { type: 'A', text: 'Batas' },
        { type: 'B', text: 'Mga bata' },
        { type: 'C', text: 'Batang' },
        { type: 'D', text: 'Bata-bata' }
      ]
    },
    {
      id: 11,
      question: 'Ano ang ibig sabihin ng "Petmalu"?',
      options: [
        { type: 'A', text: 'Pet dog' },
        { type: 'B', text: 'Nakakatawa' },
        { type: 'C', text: 'Malupet (cool/amazing)' },
        { type: 'D', text: 'Nakakasawa' }
      ]
    },
    {
      id: 12,
      question: 'Kumpleto ang sawikain: "Kapag may tiyaga, ___"',
      options: [
        { type: 'A', text: 'May nilaga' },
        { type: 'B', text: 'May pag-asa' },
        { type: 'C', text: 'Mauubos din' },
        { type: 'D', text: 'May taga' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Verbal Genius',
      description: 'Sobrang galing mo sa words! Natural linguist ka at madali mong naiintindihan ang ibig sabihin ng mga salita at expressions. Perfect ka sa communication!'
    },
    B: {
      title: 'Marunong sa Wika',
      description: 'Magaling ka sa Filipino language! Alam mo ang mga expressions at mabilis kang nakakaintindi. Above average ang verbal skills mo.'
    },
    C: {
      title: 'Average sa Verbal',
      description: 'Okay naman ang verbal reasoning mo. May mga expressions na alam mo, pero may iba na need pa ng tulong. Practice makes perfect!'
    },
    D: {
      title: 'Action Speaker',
      description: 'Hindi verbal ang strong suit mo, pero mas magaling ka sa actions! Mas expressive ka through deeds rather than words.'
    }
  },
  calculateResult: (answers: string[]) => {
    const correctAnswers = ['B', 'A', 'B', 'B', 'B', 'B', 'B', 'C', 'C', 'B', 'C', 'A'];
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
