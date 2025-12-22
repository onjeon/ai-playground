export const sikolohiyatiwalaData = {
  id: 'sikolohiya-tiwala',
  title: 'Trust Issues Mo',
  description: 'Alamin kung gaano ka ka-trusting at kung paano mo binibigay ang tiwala mo sa iba',
  questions: [
    {
      id: 1,
      question: 'Pag may bagong kakilala ka:',
      options: [
        { type: 'A', text: 'Open agad! Trust until proven otherwise' },
        { type: 'B', text: 'Friendly pero reserved pa sa personal stuff' },
        { type: 'C', text: 'Observe muna, walls up' },
        { type: 'D', text: 'Suspicious agad, dont trust easily' }
      ]
    },
    {
      id: 2,
      question: 'Sa mga promises ng iba:',
      options: [
        { type: 'A', text: 'Naniniwala! Assume good intent naman' },
        { type: 'B', text: 'Hope na totoo pero may backup plan' },
        { type: 'C', text: 'See it to believe it mentality' },
        { type: 'D', text: 'Di nagtitiwala sa promises, actions speak' }
      ]
    },
    {
      id: 3,
      question: 'Kapag na-disappoint ka ng friend:',
      options: [
        { type: 'A', text: 'Forgive and move on, one mistake lang' },
        { type: 'B', text: 'Hurt pero willing to rebuild' },
        { type: 'C', text: 'Hard to trust again after' },
        { type: 'D', text: 'Done na. Cut off' }
      ]
    },
    {
      id: 4,
      question: 'Sa mga online transactions (Shopee sellers, FB marketplace):',
      options: [
        { type: 'A', text: 'Trust naman, may buyer protection naman' },
        { type: 'B', text: 'Check reviews muna bago trust' },
        { type: 'C', text: 'Super doubtful, scammer everywhere' },
        { type: 'D', text: 'Avoid online buying, di mapagkatiwalaan' }
      ]
    },
    {
      id: 5,
      question: 'Sa mga secrets:',
      options: [
        { type: 'A', text: 'Open ako! Share ko sa close friends' },
        { type: 'B', text: 'Select few lang ang alam ng secrets ko' },
        { type: 'C', text: 'Keep to myself mostly' },
        { type: 'D', text: 'Never share, walang trustworthy enough' }
      ]
    },
    {
      id: 6,
      question: 'Kapag may nagbibigay ng compliment sayo:',
      options: [
        { type: 'A', text: 'Accept with gratitude! Genuine siguro' },
        { type: 'B', text: 'Say thanks pero slight doubt inside' },
        { type: 'C', text: 'Wonder kung may hidden agenda' },
        { type: 'D', text: 'Suspicious! Ano kaya gusto nito?' }
      ]
    },
    {
      id: 7,
      question: 'Sa romantic relationships:',
      options: [
        { type: 'A', text: 'All in! Full trust sa partner' },
        { type: 'B', text: 'Trust pero may reasonable boundaries' },
        { type: 'C', text: 'Guarded, takot ma-hurt' },
        { type: 'D', text: 'Super jealous at suspicious' }
      ]
    },
    {
      id: 8,
      question: 'Pag may humiram ng pera sayo:',
      options: [
        { type: 'A', text: 'Pautang agad kung kaya! Trust sila' },
        { type: 'B', text: 'Depends sa tao at amount' },
        { type: 'C', text: 'Hesitant, baka di maibalik' },
        { type: 'D', text: 'No lending policy! Trust no one' }
      ]
    },
    {
      id: 9,
      question: 'Sa mga family members mo:',
      options: [
        { type: 'A', text: 'Full trust! Blood is thicker than water' },
        { type: 'B', text: 'Trust naman pero may limits pa rin' },
        { type: 'C', text: 'Selective trust even sa family' },
        { type: 'D', text: 'Even family has betrayed me before' }
      ]
    },
    {
      id: 10,
      question: 'Generally, ano view mo sa mga tao?',
      options: [
        { type: 'A', text: 'Most people are good at heart!' },
        { type: 'B', text: 'Mix ng good at bad, pero more good' },
        { type: 'C', text: 'Be careful, maraming mapanloko' },
        { type: 'D', text: 'Trust no one fully, protect yourself' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Ang Trusting Soul',
      description: 'Super trusting mo! Nakikita mo agad ang good sa tao at open ka magbigay ng tiwala. Beautiful trait pero be careful - not everyone deserves your trust. Protect your heart din!'
    },
    B: {
      title: 'Ang Balanced Truster',
      description: 'Healthy ang trust level mo! Open ka pero may wisdom. Trust pero verify ang style mo. Di ka paranoid pero di rin naman tanga. Perfect balance of optimism at caution!'
    },
    C: {
      title: 'Ang Guarded Heart',
      description: 'May walls ka at di madaling makapasok sa trust circle mo. Probably dahil sa past experiences. Understandable naman pero try not to let past hurts prevent future connections!'
    },
    D: {
      title: 'Ang Trust Issues Heavy',
      description: 'Mataas ang walls mo at mahirap kang magtiwala. Past betrayals probably shaped this. While self-protection is valid, too much distrust can isolate you. Consider talking to someone about rebuilding trust!'
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
