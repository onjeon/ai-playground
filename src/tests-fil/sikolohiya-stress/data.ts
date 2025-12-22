export const sikolohiyastressData = {
  id: 'sikolohiya-stress',
  title: 'Paano Mo Hinahandle ang Stress?',
  description: 'Alamin kung paano mo kinakaharap ang stressful situations at ano ang coping style mo',
  questions: [
    {
      id: 1,
      question: 'Pag ang daming deadlines at sabay-sabay lahat:',
      options: [
        { type: 'A', text: 'List down at prioritize, isa-isa lang' },
        { type: 'B', text: 'Slight panic pero push through' },
        { type: 'C', text: 'Overwhelmed pero tanggap na lang' },
        { type: 'D', text: 'Shutdown mode! Di ko kayang i-handle' }
      ]
    },
    {
      id: 2,
      question: 'Ano go-to stress reliever mo?',
      options: [
        { type: 'A', text: 'Exercise o physical activity' },
        { type: 'B', text: 'Kain ng comfort food o inom' },
        { type: 'C', text: 'Sleep it off hanggang mawala' },
        { type: 'D', text: 'Vent sa friends o social media' }
      ]
    },
    {
      id: 3,
      question: 'Kapag stressed ang mga taong around you:',
      options: [
        { type: 'A', text: 'Try to help para maging lighter ang load' },
        { type: 'B', text: 'Na-aabsorb ko rin yung stress nila' },
        { type: 'C', text: 'Stay calm, wag makisali sa chaos' },
        { type: 'D', text: 'Distance myself para di maapektuhan' }
      ]
    },
    {
      id: 4,
      question: 'Sa financial stress:',
      options: [
        { type: 'A', text: 'Budget mode! Tipid hanggang makabawi' },
        { type: 'B', text: 'Worry pero try to find solutions' },
        { type: 'C', text: 'Ignore muna, bahala na si Batman' },
        { type: 'D', text: 'Panic! Anxiety ng anxiety' }
      ]
    },
    {
      id: 5,
      question: 'Pag may conflict sa work o school:',
      options: [
        { type: 'A', text: 'Address agad para matapos na' },
        { type: 'B', text: 'Wait and see muna kung mag-resolve' },
        { type: 'C', text: 'Avoid the person para walang drama' },
        { type: 'D', text: 'Sobrang affected! Di makapag-focus' }
      ]
    },
    {
      id: 6,
      question: 'Sa mga unexpected problems:',
      options: [
        { type: 'A', text: 'Adapt and overcome! Solution mode' },
        { type: 'B', text: 'Take a moment bago mag-react' },
        { type: 'C', text: 'Frustrated pero gagawan ng paraan' },
        { type: 'D', text: 'Meltdown agad! Bakit ganito' }
      ]
    },
    {
      id: 7,
      question: 'Kapag may big presentation or performance:',
      options: [
        { type: 'A', text: 'Practice until perfect, confident!' },
        { type: 'B', text: 'Nervous pero prepared naman' },
        { type: 'C', text: 'Wing it, bahala na kung ano mangyari' },
        { type: 'D', text: 'Gusto ko mag-back out! Too much pressure' }
      ]
    },
    {
      id: 8,
      question: 'Sa relationship stress (family, friends, SO):',
      options: [
        { type: 'A', text: 'Communication! Usap para ma-resolve' },
        { type: 'B', text: 'Give space muna then usap' },
        { type: 'C', text: 'Tampo or cold treatment' },
        { type: 'D', text: 'Sobrang affected! Di makafunction' }
      ]
    },
    {
      id: 9,
      question: 'Gaano kadalas ka na-o-overwhelm?',
      options: [
        { type: 'A', text: 'Rarely, good ako sa stress management' },
        { type: 'B', text: 'Sometimes, pero nakaka-recover' },
        { type: 'C', text: 'Often, pero trying my best' },
        { type: 'D', text: 'Almost always, laging stressed' }
      ]
    },
    {
      id: 10,
      question: 'After ng super stressful event:',
      options: [
        { type: 'A', text: 'Recover quickly! Back to normal agad' },
        { type: 'B', text: 'Need konting time pero okay na' },
        { type: 'C', text: 'Drained for days' },
        { type: 'D', text: 'Affects me for a long time' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Ang Stress-Proof',
      description: 'Impressive! Hindi ka madaling ma-stress at even pag may pressure, calm ka pa rin. May healthy coping mechanisms ka at alam mo kung paano mag-manage ng challenges. Role model ka sa stress management!'
    },
    B: {
      title: 'Ang Healthy Coper',
      description: 'Normal ang stress level mo at may good strategies ka para i-handle. Gets affected ka naman pero nakaka-bounce back. Balanced approach mo - acknowledge stress pero di pinapahawak sa buhay mo!'
    },
    C: {
      title: 'Ang Struggling Fighter',
      description: 'Nahihirapan ka sa stress pero fighting ka pa rin! May room for improvement sa coping mechanisms. Try adding healthy outlets tulad ng exercise o meditation. Progress not perfection!'
    },
    D: {
      title: 'Ang Stress-Sensitive',
      description: 'High stress sensitivity mo at mabilis ka ma-overwhelm. Important na mag-seek ng support - friends, family, or professionals. Self-care is crucial! Dont be afraid to ask for help when needed.'
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
