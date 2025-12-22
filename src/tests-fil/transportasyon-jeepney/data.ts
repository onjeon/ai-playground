export const transportasyonJeepneyData = {
  id: 'transportasyon-jeepney',
  title: 'Anong Passenger Ka sa Jeepney?',
  description: 'Alamin kung anong tipo ka ng jeepney passenger',
  questions: [
    {
      id: 1,
      question: 'Saan ka nauupo sa jeepney?',
      options: [
        { type: 'A', text: 'Unahan malapit sa driver' },
        { type: 'B', text: 'Gitna, social spot' },
        { type: 'C', text: 'Dulo sa may pinto' },
        { type: 'D', text: 'Standing! Di naman malayo' }
      ]
    },
    {
      id: 2,
      question: 'Paano ka magbayad ng pamasahe?',
      options: [
        { type: 'A', text: 'Diretso sa driver agad' },
        { type: 'B', text: 'Pa-abot sa katabi' },
        { type: 'C', text: 'Malapit na sa babaan ko bago magbayad' },
        { type: 'D', text: 'Exact amount always prepared' }
      ]
    },
    {
      id: 3,
      question: 'Pag puno na ang jeep:',
      options: [
        { type: 'A', text: 'Sumisiksik pa rin!' },
        { type: 'B', text: 'Okay lang standing' },
        { type: 'C', text: 'Naghihintay ng next jeep' },
        { type: 'D', text: 'Nakikisakay sa estribo (illegal!)' }
      ]
    },
    {
      id: 4,
      question: 'Kapag may nakabangga ang tuhod mo:',
      options: [
        { type: 'A', text: 'Okay lang! Jeepney life yan' },
        { type: 'B', text: 'Sorry sabay smile' },
        { type: 'C', text: 'Naiinis pero tahimik lang' },
        { type: 'D', text: 'Excuse me po politely' }
      ]
    },
    {
      id: 5,
      question: 'Sa pagpara ng jeep, ikaw ay:',
      options: [
        { type: 'A', text: 'Confident! Malakas ang signal' },
        { type: 'B', text: 'Tahimik na kamay lang' },
        { type: 'C', text: 'Sumasabay sa iba na nagpapara' },
        { type: 'D', text: 'Running papunta sa jeep' }
      ]
    },
    {
      id: 6,
      question: 'Pag may sumakay na buntis o matanda:',
      options: [
        { type: 'A', text: 'Agad nag-aalok ng upuan' },
        { type: 'B', text: 'Nag-aalok pag eye contact' },
        { type: 'C', text: 'Kunwari tulog' },
        { type: 'D', text: 'Standing naman ako e' }
      ]
    },
    {
      id: 7,
      question: 'Sa mainit na panahon sa jeep:',
      options: [
        { type: 'A', text: 'Tiisin! Normal lang yan' },
        { type: 'B', text: 'Paypay mode activated' },
        { type: 'C', text: 'Reklamo sa sarili' },
        { type: 'D', text: 'Request ng "Para! Magtatricycle na ko"' }
      ]
    },
    {
      id: 8,
      question: 'Pag may nag-plaplastic sa jeep:',
      options: [
        { type: 'A', text: 'Irritated pero tahimik' },
        { type: 'B', text: 'Lumalayo ng upuan' },
        { type: 'C', text: 'Sanay na, deadma' },
        { type: 'D', text: 'Binibigyan actually' }
      ]
    },
    {
      id: 9,
      question: 'Sa music ng jeepney driver:',
      options: [
        { type: 'A', text: 'Enjoying! Nakikinig' },
        { type: 'B', text: 'Earphones on' },
        { type: 'C', text: 'Naiinis pag sobrang lakas' },
        { type: 'D', text: 'Ano pakialam ko' }
      ]
    },
    {
      id: 10,
      question: 'Pag na-miss mo ang babaan:',
      options: [
        { type: 'A', text: 'Para! Malakas ang boses' },
        { type: 'B', text: 'Pa-abot ng "Para po"' },
        { type: 'C', text: 'Bumaba na lang sa next stop' },
        { type: 'D', text: 'Panic mode! Di alam gagawin' }
      ]
    },
    {
      id: 11,
      question: 'Sa usapan ng ibang passengers:',
      options: [
        { type: 'A', text: 'Nakikinig! May tea' },
        { type: 'B', text: 'Naki-chime in minsan' },
        { type: 'C', text: 'Deadma, sariling mundo' },
        { type: 'D', text: 'Nakaka-distract' }
      ]
    },
    {
      id: 12,
      question: 'Overall jeepney experience mo:',
      options: [
        { type: 'A', text: 'Iconic Filipino! Love it' },
        { type: 'B', text: 'Practical choice lang' },
        { type: 'C', text: 'Walang choice e' },
        { type: 'D', text: 'Adventure everyday' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Jeepney Veteran',
      description: 'Sanay ka na sa jeepney life! Alam mo lahat ng tricks at etiquette. Comfortable ka at proud ka sa Filipino commute culture. Para sayo, jeepney is more than transport - it\'s a cultural experience!'
    },
    B: {
      title: 'Regular Commuter',
      description: 'Regular ka sa jeepney at alam mo ang flow. Nakaka-adjust ka at respetado mo ang fellow passengers. Balanced ang approach mo sa commute. You navigate jeepney life smoothly!'
    },
    C: {
      title: 'Reluctant Rider',
      description: 'Sumasakay ka ng jeepney pero hindi ka masaya. Prefer mo ang ibang transport pero kailangan e. Tiis mode ka sa lahat ng inconvenience. Dreaming of better commute options!'
    },
    D: {
      title: 'Jeepney Newbie',
      description: 'Bago ka pa lang o hindi sanay sa jeepney! Awkward pa ang movements mo at di pa alam lahat ng unwritten rules. Learning process pa pero you\'ll get there. Every jeepney ride is an adventure!'
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
