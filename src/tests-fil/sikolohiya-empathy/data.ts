export const sikolohiyaempathyData = {
  id: 'sikolohiya-empathy',
  title: 'Anong Level ng Empathy Mo?',
  description: 'Alamin kung gaano ka ka-empathetic at kung paano mo naiintindihan ang feelings ng iba',
  questions: [
    {
      id: 1,
      question: 'Pag may kaibigan ka na umiiyak, ano instinct mong gawin?',
      options: [
        { type: 'A', text: 'Yakap agad! Physical comfort muna bago usapan' },
        { type: 'B', text: 'Listen attentively, hayaan muna mag-vent' },
        { type: 'C', text: 'Try to help solve the problem agad' },
        { type: 'D', text: 'Awkward ako sa ganyan, give space na lang' }
      ]
    },
    {
      id: 2,
      question: 'Kapag nakita mo ang stranger na nahirapan magdala ng gamit:',
      options: [
        { type: 'A', text: 'Offer help agad kahit di ko kilala' },
        { type: 'B', text: 'Tanong muna kung kailangan ng tulong' },
        { type: 'C', text: 'Notice pero hesitant makisali' },
        { type: 'D', text: 'Hindi ko business, let them be' }
      ]
    },
    {
      id: 3,
      question: 'Sa nakakalungkot na movies or shows:',
      options: [
        { type: 'A', text: 'Sobrang affected! Umiiyak talaga ako' },
        { type: 'B', text: 'Naluluha pero kaya pigilan' },
        { type: 'C', text: 'May nararamdaman pero di lumalabas' },
        { type: 'D', text: 'Hindi ako affected, fiction lang naman' }
      ]
    },
    {
      id: 4,
      question: 'Pag may katrabaho na nagkamali at pinagalitan ng boss:',
      options: [
        { type: 'A', text: 'Ramdam ko rin yung hiya niya, ouch' },
        { type: 'B', text: 'Feel bad for them, approach later' },
        { type: 'C', text: 'Neutral, everyone makes mistakes' },
        { type: 'D', text: 'Di ko problem, baka deserve niya' }
      ]
    },
    {
      id: 5,
      question: 'Sa social media posts about struggles ng iba:',
      options: [
        { type: 'A', text: 'Super affected! Minsan nagdo-donate pa' },
        { type: 'B', text: 'Share para ma-help spread awareness' },
        { type: 'C', text: 'React lang pero scroll on' },
        { type: 'D', text: 'Skip, too much negativity online' }
      ]
    },
    {
      id: 6,
      question: 'Kapag may kakilala ka na different ang opinion mo:',
      options: [
        { type: 'A', text: 'Try to understand where theyre coming from' },
        { type: 'B', text: 'Respectful discussion, open-minded' },
        { type: 'C', text: 'Agree to disagree, walang argument' },
        { type: 'D', text: 'Di ko maintindihan bakit ganun sila' }
      ]
    },
    {
      id: 7,
      question: 'Pag nakakita ka ng matatanda na naglalakad mag-isa:',
      options: [
        { type: 'A', text: 'Instant concern, check kung okay sila' },
        { type: 'B', text: 'Observe muna kung kailangan ba ng tulong' },
        { type: 'C', text: 'Notice pero assume okay naman sila' },
        { type: 'D', text: 'Normal lang, di ko napapansin' }
      ]
    },
    {
      id: 8,
      question: 'Sa mga homeless people na humihingi ng tulong:',
      options: [
        { type: 'A', text: 'Give what I can, food or barya' },
        { type: 'B', text: 'Selective, pero tumutulong naman' },
        { type: 'C', text: 'Minsan yes, minsan pass' },
        { type: 'D', text: 'Avoid usually, complicated feelings' }
      ]
    },
    {
      id: 9,
      question: 'Kapag stressed ang family member mo:',
      options: [
        { type: 'A', text: 'Absorb ko rin yung stress nila sometimes' },
        { type: 'B', text: 'Offer help at support sa kanila' },
        { type: 'C', text: 'Give advice kung tinanong' },
        { type: 'D', text: 'Kanya-kanyang problema, respect space' }
      ]
    },
    {
      id: 10,
      question: 'Gaano ka ka-good sa reading body language?',
      options: [
        { type: 'A', text: 'Expert! Nararamdaman ko agad kung may mali' },
        { type: 'B', text: 'Medyo observant, napapansin ko naman' },
        { type: 'C', text: 'Sometimes lang, hit or miss' },
        { type: 'D', text: 'Hindi talaga, oblivious ako' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Ang Super Empath',
      description: 'Napaka-sensitive mo sa feelings ng iba! Naturally caring at nurturing ka. Minsan na-aabsorb mo pa nga ang emotions ng people around you. Protektahan mo rin ang sarili mo ha, mahirap maging emotional sponge!'
    },
    B: {
      title: 'Ang Balanced Empath',
      description: 'Healthy ang level ng empathy mo! Naiintindihan mo ang iba pero may boundaries ka rin para sa sarili mo. Kaya mong mag-connect at tumulong without losing yourself. Perfect balance ng caring at self-care!'
    },
    C: {
      title: 'Ang Selective Empath',
      description: 'May empathy ka pero selective sa kung kanino at kailan. Close circle lang usually ang beneficiary ng caring side mo. Nothing wrong with that - mas focused lang ang emotional energy mo!'
    },
    D: {
      title: 'Ang Practical Thinker',
      description: 'Mas logic-based ang approach mo kaysa emotional. Hindi ibig sabihin walang puso, mas objective lang talaga. Minsan helpful ito pero try din to connect emotionally paminsan-minsan!'
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
