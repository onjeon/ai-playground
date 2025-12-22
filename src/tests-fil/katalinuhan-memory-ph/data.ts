export const katalinuhanMemoryPhData = {
  id: 'katalinuhan-memory-ph',
  title: 'Test ng Memory',
  description: 'Sukatin ang iyong memory at recall ability',
  questions: [
    {
      id: 1,
      question: 'Maalala mo pa ba ang first day mo sa school? Gaano ka-clear ang memory?',
      options: [
        { type: 'A', text: 'Very clear! Nakikita ko pa lahat' },
        { type: 'B', text: 'Medyo clear, may mga detalye' },
        { type: 'C', text: 'Malabo na, konti lang naalala' },
        { type: 'D', text: 'Wala na akong maalala' }
      ]
    },
    {
      id: 2,
      question: 'Pag may sinabi sayong phone number, gaano katagal mo naalala?',
      options: [
        { type: 'A', text: 'Matagal, naka-memorize ko agad' },
        { type: 'B', text: 'Ilang oras to ilang araw' },
        { type: 'C', text: 'Ilang minuto lang' },
        { type: 'D', text: 'Kailangan ko agad isulat' }
      ]
    },
    {
      id: 3,
      question: 'Kapag nag-grocery, naaalala mo ba lahat ng bibilhin without list?',
      options: [
        { type: 'A', text: 'Oo! Lahat naalala ko' },
        { type: 'B', text: 'Karamihan, may ilan lang nakakalimutan' },
        { type: 'C', text: 'Kalahati lang naalala' },
        { type: 'D', text: 'Kailangan talaga ng lista' }
      ]
    },
    {
      id: 4,
      question: 'Maalala mo pa ba ang mga lyrics ng paborito mong kanta nung bata ka?',
      options: [
        { type: 'A', text: 'Oo! Word for word!' },
        { type: 'B', text: 'Chorus at ilang parts' },
        { type: 'C', text: 'Konting lyrics lang' },
        { type: 'D', text: 'Nakalimutan ko na' }
      ]
    },
    {
      id: 5,
      question: 'Kapag nakilala mo ang bagong tao, naalala mo ba agad ang pangalan?',
      options: [
        { type: 'A', text: 'Oo, first meeting pa lang' },
        { type: 'B', text: 'After 2-3 meetings' },
        { type: 'C', text: 'Matagal bago maalala' },
        { type: 'D', text: 'Sobrang hirap, lagi kong nakakalimutan' }
      ]
    },
    {
      id: 6,
      question: 'Naalala mo ba kung saan mo nilagay ang susi kahapon?',
      options: [
        { type: 'A', text: 'Oo, same spot lagi' },
        { type: 'B', text: 'Usually naalala ko' },
        { type: 'C', text: 'Minsan nakakalimutan' },
        { type: 'D', text: 'Laging nawawala!' }
      ]
    },
    {
      id: 7,
      question: 'Gaano karami ang mga important dates na naalala mo (birthdays, anniversary)?',
      options: [
        { type: 'A', text: '10+ dates naka-memorize' },
        { type: 'B', text: '5-9 dates' },
        { type: 'C', text: '2-4 dates' },
        { type: 'D', text: 'Kailangan ng calendar reminder' }
      ]
    },
    {
      id: 8,
      question: 'Naalala mo pa ba ang mga childhood crush mo?',
      options: [
        { type: 'A', text: 'Lahat! With full details pa' },
        { type: 'B', text: 'Oo, mga major crush' },
        { type: 'C', text: 'Ilan lang' },
        { type: 'D', text: 'Nakalimutan ko na' }
      ]
    },
    {
      id: 9,
      question: 'Pag nag-study ka, gaano kabilis mo nare-retain ang information?',
      options: [
        { type: 'A', text: 'Mabilis! Photographic memory' },
        { type: 'B', text: 'Okay naman, kelangan lang ng review' },
        { type: 'C', text: 'Kailangan paulit-ulit' },
        { type: 'D', text: 'Mahirap mag-retain ng info' }
      ]
    },
    {
      id: 10,
      question: 'Naalala mo ba ang dreams mo pag gising?',
      options: [
        { type: 'A', text: 'Oo, detailed pa!' },
        { type: 'B', text: 'Mga major parts' },
        { type: 'C', text: 'Bits and pieces lang' },
        { type: 'D', text: 'Nakakalimutan ko agad' }
      ]
    },
    {
      id: 11,
      question: 'Memorized mo ba ang iyong mga passwords?',
      options: [
        { type: 'A', text: 'Lahat! Without password manager' },
        { type: 'B', text: 'Yung mga important accounts' },
        { type: 'C', text: 'Ilan lang' },
        { type: 'D', text: 'Laging naka-save lang' }
      ]
    },
    {
      id: 12,
      question: 'Naalala mo pa ba ang childhood home address mo?',
      options: [
        { type: 'A', text: 'Oo! Complete address' },
        { type: 'B', text: 'Yes, pero hindi complete' },
        { type: 'C', text: 'Konti lang' },
        { type: 'D', text: 'Hindi na maalala' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Photographic Memory',
      description: 'Grabe ang memory mo! Halos lahat ay naalala mo with vivid details. Bihira ang may ganito kahusay na memory. Treasure mo yan!'
    },
    B: {
      title: 'Excellent Memory',
      description: 'Napakahusay ng memory mo! Mabilis kang mag-recall ng information at detalye. Above average ka sa memory retention.'
    },
    C: {
      title: 'Average Memory',
      description: 'Normal lang ang memory mo. May mga bagay na naalala mo at may mga nakakalimutan. Okay lang yan, karamihan ng tao ganyan!'
    },
    D: {
      title: 'Creative Forgetter',
      description: 'Mahina ang memory mo, pero ibig sabihin nun ay focused ka sa present! Hindi ka masyadong nagbabalik-tanaw. Live in the moment ka!'
    }
  },
  calculateResult: (answers: string[]) => {
    const counts = { A: 0, B: 0, C: 0, D: 0 };
    answers.forEach(answer => counts[answer as keyof typeof counts]++);
    
    if (counts.A >= 8) return 'A';
    if (counts.A + counts.B >= 8) return 'B';
    if (counts.D >= 6) return 'D';
    return 'C';
  }
};
