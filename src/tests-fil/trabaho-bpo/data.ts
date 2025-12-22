export const trabahoBpoData = {
  id: 'trabaho-bpo',
  title: 'Anong BPO Worker Ka?',
  description: 'Alamin kung anong tipo ka ng BPO employee sa Pilipinas',
  questions: [
    {
      id: 1,
      question: 'Paano ka sa graveyard shift?',
      options: [
        { type: 'A', text: 'Sanay na! Night owl talaga ako' },
        { type: 'B', text: 'Kaya naman with coffee' },
        { type: 'C', text: 'Hirap pero kailangan' },
        { type: 'D', text: 'Zombie mode lang' }
      ]
    },
    {
      id: 2,
      question: 'Sa American accent, ikaw ay:',
      options: [
        { type: 'A', text: 'Fluent! Parang native na' },
        { type: 'B', text: 'May konting Pinoy twang pa' },
        { type: 'C', text: 'Neutral accent, walang forcing' },
        { type: 'D', text: 'Bahala na, basta naiintindihan' }
      ]
    },
    {
      id: 3,
      question: 'Pag may irate customer:',
      options: [
        { type: 'A', text: 'Pro na ako! Calm lang' },
        { type: 'B', text: 'Kaya naman, follow script' },
        { type: 'C', text: 'Stress pero hawak ko pa' },
        { type: 'D', text: 'Transfer to supervisor agad' }
      ]
    },
    {
      id: 4,
      question: 'Sa pantry/break room:',
      options: [
        { type: 'A', text: 'Social butterfly! Kaibigan lahat' },
        { type: 'B', text: 'May barkada na grupo' },
        { type: 'C', text: 'Chill lang, earphones on' },
        { type: 'D', text: 'Tulog sa sleeping quarters' }
      ]
    },
    {
      id: 5,
      question: 'Anong account preference mo?',
      options: [
        { type: 'A', text: 'Sales! Commission baby' },
        { type: 'B', text: 'Customer Service! People person' },
        { type: 'C', text: 'Tech Support! Geeky' },
        { type: 'D', text: 'Back office! No calls please' }
      ]
    },
    {
      id: 6,
      question: 'Sa AHT (Average Handling Time):',
      options: [
        { type: 'A', text: 'Always below target! Efficient' },
        { type: 'B', text: 'Within range naman' },
        { type: 'C', text: 'Minsan lagpas, quality kasi' },
        { type: 'D', text: 'Bahala na management' }
      ]
    },
    {
      id: 7,
      question: 'Pag may QA (Quality Assurance) monitoring:',
      options: [
        { type: 'A', text: 'Bring it on! High scores ako' },
        { type: 'B', text: 'Kinakabahan pero okay naman' },
        { type: 'C', text: 'Hit or miss depende sa mood' },
        { type: 'D', text: 'Sana wag ako mapili' }
      ]
    },
    {
      id: 8,
      question: 'Sa career growth sa BPO:',
      options: [
        { type: 'A', text: 'Target ko manager level!' },
        { type: 'B', text: 'Team Lead siguro someday' },
        { type: 'C', text: 'Stepping stone lang to' },
        { type: 'D', text: 'Basta may sweldo, okay na' }
      ]
    },
    {
      id: 9,
      question: 'Paano ka sa toxic teammates?',
      options: [
        { type: 'A', text: 'Professional lang, work is work' },
        { type: 'B', text: 'Iwas konti, minimize interaction' },
        { type: 'C', text: 'Stress talaga pero tiis' },
        { type: 'D', text: 'Request for team transfer' }
      ]
    },
    {
      id: 10,
      question: 'Sa sweldo day:',
      options: [
        { type: 'A', text: 'May naipon! Financially wise' },
        { type: 'B', text: 'Bills muna, then konting luho' },
        { type: 'C', text: 'Gastos agad! Wala next payday' },
        { type: 'D', text: 'Utang muna bayaran' }
      ]
    },
    {
      id: 11,
      question: 'Pag may company event:',
      options: [
        { type: 'A', text: 'Active participant! Laging nandyan' },
        { type: 'B', text: 'Pag required attendance' },
        { type: 'C', text: 'Pag may free food' },
        { type: 'D', text: 'Pass! Rest day ko yan' }
      ]
    },
    {
      id: 12,
      question: 'Overall, BPO life for you is:',
      options: [
        { type: 'A', text: 'Career ko to! Long-term' },
        { type: 'B', text: 'Okay naman, stable' },
        { type: 'C', text: 'Temporary lang habang may hanap' },
        { type: 'D', text: 'Survival mode daily' }
      ]
    }
  ],
  results: {
    A: {
      title: 'BPO Rockstar',
      description: 'Ikaw ay BPO superstar! Sanay ka na sa lahat - graveyard shift, irate customers, metrics. Career mo talaga ang BPO at nag-thrive ka dito. Ambition mo ay umabot sa management. You excel in the BPO industry!'
    },
    B: {
      title: 'Steady BPO Worker',
      description: 'Solid BPO employee ka! Professional ka at alam mo ginagawa mo. Walang reklamo at consistent ang performance. Hindi OA pero reliable. You are the backbone of BPO companies!'
    },
    C: {
      title: 'BPO Survivor',
      description: 'Surviving ka sa BPO pero hindi talaga passion mo. Stepping stone lang to para sa real dreams mo. Kaya mo naman pero hindi mo long-term plan. You are working towards something better!'
    },
    D: {
      title: 'BPO Zombie',
      description: 'Burnout ka na sa BPO life! Survival mode ka na lang at wala nang energy for extra mile. Kailangan mo ng break o career change. Time to reassess your path!'
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
