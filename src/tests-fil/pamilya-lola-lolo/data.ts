export const pamilyalolaloloData = {
  id: 'pamilya-lola-lolo',
  title: 'Anong Apo Ka?',
  description: 'Alamin kung anong tipo ka ng apo',
  questions: [
    {
      id: 1,
      question: 'Tanong 1: Paano ka sa sitwasyon na ito?',
      options: [
        { type: 'A', text: 'Opsyon A - Masigasig at aktibo' },
        { type: 'B', text: 'Opsyon B - Balanced approach' },
        { type: 'C', text: 'Opsyon C - Chill lang' },
        { type: 'D', text: 'Opsyon D - Hindi interesado' }
      ]
    },
    {
      id: 2,
      question: 'Tanong 2: Ano ang iyong gagawin?',
      options: [
        { type: 'A', text: 'Opsyon A - Full effort' },
        { type: 'B', text: 'Opsyon B - Moderate effort' },
        { type: 'C', text: 'Opsyon C - Minimal effort' },
        { type: 'D', text: 'Opsyon D - No effort' }
      ]
    },
    {
      id: 3,
      question: 'Tanong 3: Gaano kadalas ito?',
      options: [
        { type: 'A', text: 'Opsyon A - Palagi!' },
        { type: 'B', text: 'Opsyon B - Madalas' },
        { type: 'C', text: 'Opsyon C - Minsan lang' },
        { type: 'D', text: 'Opsyon D - Hindi kailanman' }
      ]
    },
    {
      id: 4,
      question: 'Tanong 4: Ano ang priority mo?',
      options: [
        { type: 'A', text: 'Opsyon A - Very high priority' },
        { type: 'B', text: 'Opsyon B - Medium priority' },
        { type: 'C', text: 'Opsyon C - Low priority' },
        { type: 'D', text: 'Opsyon D - Not a priority' }
      ]
    },
    {
      id: 5,
      question: 'Tanong 5: Paano ka mag-react?',
      options: [
        { type: 'A', text: 'Opsyon A - Aggressive reaction' },
        { type: 'B', text: 'Opsyon B - Moderate reaction' },
        { type: 'C', text: 'Opsyon C - Passive reaction' },
        { type: 'D', text: 'Opsyon D - No reaction' }
      ]
    },
    {
      id: 6,
      question: 'Tanong 6: Ano ang style mo?',
      options: [
        { type: 'A', text: 'Opsyon A - Bold style' },
        { type: 'B', text: 'Opsyon B - Balanced style' },
        { type: 'C', text: 'Opsyon C - Conservative style' },
        { type: 'D', text: 'Opsyon D - No particular style' }
      ]
    },
    {
      id: 7,
      question: 'Tanong 7: Anong approach mo?',
      options: [
        { type: 'A', text: 'Opsyon A - Proactive' },
        { type: 'B', text: 'Opsyon B - Responsive' },
        { type: 'C', text: 'Opsyon C - Reactive' },
        { type: 'D', text: 'Opsyon D - Passive' }
      ]
    },
    {
      id: 8,
      question: 'Tanong 8: Gaano ka committed?',
      options: [
        { type: 'A', text: 'Opsyon A - 100% committed' },
        { type: 'B', text: 'Opsyon B - Moderately committed' },
        { type: 'C', text: 'Opsyon C - Slightly committed' },
        { type: 'D', text: 'Opsyon D - Not committed' }
      ]
    },
    {
      id: 9,
      question: 'Tanong 9: Ano ang feeling mo?',
      options: [
        { type: 'A', text: 'Opsyon A - Very positive' },
        { type: 'B', text: 'Opsyon B - Somewhat positive' },
        { type: 'C', text: 'Opsyon C - Neutral' },
        { type: 'D', text: 'Opsyon D - Negative' }
      ]
    },
    {
      id: 10,
      question: 'Tanong 10: Paano ang energy level mo?',
      options: [
        { type: 'A', text: 'Opsyon A - High energy' },
        { type: 'B', text: 'Opsyon B - Medium energy' },
        { type: 'C', text: 'Opsyon C - Low energy' },
        { type: 'D', text: 'Opsyon D - No energy' }
      ]
    },
    {
      id: 11,
      question: 'Tanong 11: Ano ang involvement mo?',
      options: [
        { type: 'A', text: 'Opsyon A - Deeply involved' },
        { type: 'B', text: 'Opsyon B - Moderately involved' },
        { type: 'C', text: 'Opsyon C - Slightly involved' },
        { type: 'D', text: 'Opsyon D - Not involved' }
      ]
    },
    {
      id: 12,
      question: 'Tanong 12: Overall, paano ka?',
      options: [
        { type: 'A', text: 'Opsyon A - Expert level' },
        { type: 'B', text: 'Opsyon B - Intermediate level' },
        { type: 'C', text: 'Opsyon C - Beginner level' },
        { type: 'D', text: 'Opsyon D - Newbie level' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Ang Masigasig',
      description: 'Ikaw ay napaka-active at passionate sa lahat! Full energy ka at committed sa bawat bagay na ginagawa mo. Expert level ang approach mo!'
    },
    B: {
      title: 'Ang Balanse',
      description: 'Balanced ka sa lahat! Hindi OA pero hindi rin kulang. Tama lang ang effort at involvement mo. Steady and reliable ka!'
    },
    C: {
      title: 'Ang Chill',
      description: 'Relaxed ka at chill lang sa buhay! Hindi mo priority ang stress at pressure. Gusto mo ng simple at tahimik na buhay!'
    },
    D: {
      title: 'Ang Deadma',
      description: 'Hindi ka masyadong involved o interested. May ibang priority ka sa buhay at okay lang yan! Focus ka sa kung ano talaga importante sayo!'
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
