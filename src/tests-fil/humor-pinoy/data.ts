export const humorPinoyData = {
  id: 'humor-pinoy',
  title: 'Anong Pinoy Humor Style Mo?',
  description: 'Alamin kung anong klase ng Filipino humor ang sa iyo',
  questions: [
    {
      id: 1,
      question: 'Anong jokes ang natawa ka?',
      options: [
        { type: 'A', text: 'Puns at wordplay! Bato-bato sa langit' },
        { type: 'B', text: 'Slapstick! Physical comedy' },
        { type: 'C', text: 'Dark humor! Savage jokes' },
        { type: 'D', text: 'Wholesome! Clean jokes' }
      ]
    },
    {
      id: 2,
      question: 'Sa memes, ano bet mo?',
      options: [
        { type: 'A', text: 'Tagalog memes! Relatable' },
        { type: 'B', text: 'Visual memes! Naka-picture' },
        { type: 'C', text: 'Roast memes! Savage' },
        { type: 'D', text: 'Wholesome memes! Kilig' }
      ]
    },
    {
      id: 3,
      question: 'Paano ka mag-joke sa friends?',
      options: [
        { type: 'A', text: 'Witty remarks! Quick minded' },
        { type: 'B', text: 'Funny actions! Pa-cute' },
        { type: 'C', text: 'Roasting! Pang-aasar' },
        { type: 'D', text: 'Storytelling! May kwento' }
      ]
    },
    {
      id: 4,
      question: 'Pag nag-roast sayo:',
      options: [
        { type: 'A', text: 'Comeback agad! May pa-banat' },
        { type: 'B', text: 'Natawa! Good sport' },
        { type: 'C', text: 'Roast back! Double savage' },
        { type: 'D', text: 'Offended! Hindi funny' }
      ]
    },
    {
      id: 5,
      question: 'Anong comedy shows bet mo?',
      options: [
        { type: 'A', text: 'Bubble Gang! Classic' },
        { type: 'B', text: 'Goin Bulilit! Cute kids' },
        { type: 'C', text: 'Late night shows! Witty' },
        { type: 'D', text: 'Sitcoms! Family-friendly' }
      ]
    },
    {
      id: 6,
      question: 'Sa "Knock knock" jokes:',
      options: [
        { type: 'A', text: 'Love ko yan! Classic' },
        { type: 'B', text: 'Corny pero cute' },
        { type: 'C', text: 'Cringe! Outdated' },
        { type: 'D', text: 'Okay lang! Wholesome' }
      ]
    },
    {
      id: 7,
      question: 'Paano ka sa "Kalokohan" type humor?',
      options: [
        { type: 'A', text: 'Hindi! Puro kalokohan lang' },
        { type: 'B', text: 'Funny naman! Napapanood ko' },
        { type: 'C', text: 'Sometimes OA pero okay' },
        { type: 'D', text: 'Family show! Safe' }
      ]
    },
    {
      id: 8,
      question: 'Sa double meaning jokes:',
      options: [
        { type: 'A', text: 'Expert! Nakakaget ako agad' },
        { type: 'B', text: 'Gets ko pero hindi ko gagawin' },
        { type: 'C', text: 'Love it! Green minded' },
        { type: 'D', text: 'Not appropriate! Skip' }
      ]
    },
    {
      id: 9,
      question: 'Anong comedian bet mo?',
      options: [
        { type: 'A', text: 'Vice Ganda! Witty queen' },
        { type: 'B', text: 'Dolphy! King of comedy' },
        { type: 'C', text: 'KaladKaren! Savage' },
        { type: 'D', text: 'Michael V! Versatile' }
      ]
    },
    {
      id: 10,
      question: 'Pag may nakakatawang nangyari sayo:',
      options: [
        { type: 'A', text: 'Kuwento ko! Story time' },
        { type: 'B', text: 'Post sa socmed! Share' },
        { type: 'C', text: 'Laugh at myself! Self-deprecating' },
        { type: 'D', text: 'Keep sa sarili! Private' }
      ]
    },
    {
      id: 11,
      question: 'Sa "Banat" culture:',
      options: [
        { type: 'A', text: 'Master! May stock ako' },
        { type: 'B', text: 'Okay lang! Pag may naisip' },
        { type: 'C', text: 'Savage mode! Walang preno' },
        { type: 'D', text: 'Not my thing! Tahimik' }
      ]
    },
    {
      id: 12,
      question: 'Overall humor style:',
      options: [
        { type: 'A', text: 'Intellectual! Witty' },
        { type: 'B', text: 'Physical! Visual' },
        { type: 'C', text: 'Savage! Dark' },
        { type: 'D', text: 'Wholesome! Clean' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Ang Witty - The Wordsmith',
      description: 'Ikaw ay master ng wordplay at puns! Quick-witted ka at mabilis mag-isip ng clever comebacks. Intellectual ang humor mo pero relatable pa rin. May laman ang jokes mo. You are the punmaster!'
    },
    B: {
      title: 'Ang Slapstick - The Physical Comedian',
      description: 'Physical comedy ang forte mo! Facial expressions, actions, at visual gags. Classic Pinoy comedy style! Light-hearted ka at family-friendly. You make people laugh with your antics!'
    },
    C: {
      title: 'Ang Savage - The Roaster',
      description: 'Dark humor at roasting ang specialty mo! Walang preno at savage ang jokes. Hindi ka para sa sensitive. Brutal pero funny ka. Strong sense of humor mo! You push boundaries!'
    },
    D: {
      title: 'Ang Wholesome - The Clean Comedian',
      description: 'Wholesome at family-friendly ang humor mo! No green jokes, walang harmful content. Sweet ka at considerate. Lahat ay pwedeng maka-appreciate ng jokes mo. You spread joy, not offense!'
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
