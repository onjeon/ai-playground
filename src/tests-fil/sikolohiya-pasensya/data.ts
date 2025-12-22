export const sikolohiyapasensyaData = {
  id: 'sikolohiya-pasensya',
  title: 'Gaano Ka Kapasensyoso?',
  description: 'Alamin kung gaano kahaba ang pasensya mo sa iba-ibang sitwasyon ng buhay',
  questions: [
    {
      id: 1,
      question: 'Sa pila sa Jollibee o sa bangko:',
      options: [
        { type: 'A', text: 'Chill lang, scroll phone habang naghihintay' },
        { type: 'B', text: 'Okay naman, basta gumagalaw ang pila' },
        { type: 'C', text: 'Nagiging restless na after 10 minutes' },
        { type: 'D', text: 'Inis agad! Bat ba ang bagal' }
      ]
    },
    {
      id: 2,
      question: 'Pag stuck sa traffic sa EDSA:',
      options: [
        { type: 'A', text: 'Podcast time! Productive pa rin' },
        { type: 'B', text: 'Annoying pero expected naman' },
        { type: 'C', text: 'Road rage building up slowly' },
        { type: 'D', text: 'Horn ng horn! Grabe ang inis' }
      ]
    },
    {
      id: 3,
      question: 'Kapag slow ang internet connection:',
      options: [
        { type: 'A', text: 'May ibang pwedeng gawin while waiting' },
        { type: 'B', text: 'Retry lang, normal naman minsan' },
        { type: 'C', text: 'Frustrated na agad' },
        { type: 'D', text: 'Restart lahat! Router, phone, buhay!' }
      ]
    },
    {
      id: 4,
      question: 'Pag late ang friend mo sa usapang oras:',
      options: [
        { type: 'A', text: 'Okay lang, sanay na, Filipino time eh' },
        { type: 'B', text: 'Wait naman pero slight inis inside' },
        { type: 'C', text: 'Text ng text kung nasaan na' },
        { type: 'D', text: 'Leave after 15 mins, respect time ko!' }
      ]
    },
    {
      id: 5,
      question: 'Sa pag-teach ng bagong tao (katrabaho, kapatid):',
      options: [
        { type: 'A', text: 'Patient! Isa-isa lang, hindi naman agad matututo' },
        { type: 'B', text: 'Okay naman, basta may effort sila' },
        { type: 'C', text: 'Medyo naiinis pag paulit-ulit tanong' },
        { type: 'D', text: 'Gawin ko na lang! Mas mabilis' }
      ]
    },
    {
      id: 6,
      question: 'Kapag may nag-cut sa pila:',
      options: [
        { type: 'A', text: 'Hayaan na, baka may emergency' },
        { type: 'B', text: 'Slight annoyed pero di na lang i-confront' },
        { type: 'C', text: 'Loud sigh para marinig' },
        { type: 'D', text: 'Direct confrontation! Excuse me pumila ka' }
      ]
    },
    {
      id: 7,
      question: 'Sa waiting for food delivery:',
      options: [
        { type: 'A', text: 'Track lang sa app, chill habang naghihintay' },
        { type: 'B', text: 'After estimated time, saka mag-follow up' },
        { type: 'C', text: 'Chat rider every 5 minutes' },
        { type: 'D', text: 'Call agad kung late! Where na my food?' }
      ]
    },
    {
      id: 8,
      question: 'Pag may di maintindihan sa explanation ng iba:',
      options: [
        { type: 'A', text: 'Ask nicely for clarification, take my time' },
        { type: 'B', text: 'Listen carefully, baka gets ko eventually' },
        { type: 'C', text: 'Pretend gets para matapos na' },
        { type: 'D', text: 'Cut off, ako na lang mag-figure out' }
      ]
    },
    {
      id: 9,
      question: 'Kapag hindi pa dumadating ang sweldo:',
      options: [
        { type: 'A', text: 'Wait lang, normal na may slight delay' },
        { type: 'B', text: 'Check account every few hours' },
        { type: 'C', text: 'Message HR or payroll agad' },
        { type: 'D', text: 'Stress na stress! Need ng pera!' }
      ]
    },
    {
      id: 10,
      question: 'Sa mga long-term goals mo:',
      options: [
        { type: 'A', text: 'Patient! Alam kong slow progress is still progress' },
        { type: 'B', text: 'Motivated pero may frustrating moments' },
        { type: 'C', text: 'Want results agad, impatient' },
        { type: 'D', text: 'Give up pag matagal ang results' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Ang Santo/Santa ng Pasensya',
      description: 'Wow, ang haba ng pasensya mo! Hindi ka easily rattled at kaya mong mag-wait without losing your cool. Rare breed ka - enviable ang patience mo. Sana lahat ganyan ka ka-calm!'
    },
    B: {
      title: 'Ang Reasonable Waiter',
      description: 'Healthy ang patience level mo! May limit pero reasonable naman. Hindi ka pushover pero di rin mabilis ma-trigger. Balanced approach sa waiting at dealing with delays!'
    },
    C: {
      title: 'Ang Impatient pero Controlled',
      description: 'Medyo maikli ang pasensya mo pero at least controlled pa rin. Naiinis ka inside pero di naman lumalabas agad. Work on extending that fuse konti - less stress for you!'
    },
    D: {
      title: 'Ang Zero Patience Mode',
      description: 'Super short ang patience mo! Quick to react at mabilis ma-trigger sa delays. While understandable naman minsan, try to practice calmness - better para sa health at relationships mo!'
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
