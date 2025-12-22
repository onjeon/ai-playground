export const sikolohiyaemosyonData = {
  id: 'sikolohiya-emosyon',
  title: 'Paano Mo Hinahandle ang Emosyon?',
  description: 'Alamin kung paano mo hinaharap at pinoproseso ang iyong mga damdamin',
  questions: [
    {
      id: 1,
      question: 'Pag sobrang inis ka sa katrabaho mo, ano ginagawa mo?',
      options: [
        { type: 'A', text: 'Deep breaths muna, calm down bago mag-react' },
        { type: 'B', text: 'Kwento sa trusted friend para ma-release' },
        { type: 'C', text: 'Itago lang, wag ipakita na affected' },
        { type: 'D', text: 'Direct confrontation! Clear the air agad' }
      ]
    },
    {
      id: 2,
      question: 'Pag malungkot ka, paano mo kinakaya?',
      options: [
        { type: 'A', text: 'Me time - music, movie, or comfort food' },
        { type: 'B', text: 'Kailangan ko ng kasama, yaya friends' },
        { type: 'C', text: 'Trabaho para ma-distract, busy-han' },
        { type: 'D', text: 'Cry it out! Let the feelings flow' }
      ]
    },
    {
      id: 3,
      question: 'Kapag sobrang happy ka:',
      options: [
        { type: 'A', text: 'Share agad sa social media!' },
        { type: 'B', text: 'Celebrate with people na mahal ko' },
        { type: 'C', text: 'Private celebration, cherish quietly' },
        { type: 'D', text: 'Treat myself! Shopping or food trip' }
      ]
    },
    {
      id: 4,
      question: 'Pag may anxiety ka about something:',
      options: [
        { type: 'A', text: 'List down worries at think ng solutions' },
        { type: 'B', text: 'Talk to someone para ma-process' },
        { type: 'C', text: 'Overthink hanggang mawala yung feeling' },
        { type: 'D', text: 'Distract yourself, wag pansinin' }
      ]
    },
    {
      id: 5,
      question: 'Sa family gatherings, pag may drama:',
      options: [
        { type: 'A', text: 'Peacemaker ako, ayaw ko ng gulo' },
        { type: 'B', text: 'Observe lang, neutral position' },
        { type: 'C', text: 'Umiwas na lang, di ko kailangan ng stress' },
        { type: 'D', text: 'Involved agad! Defend kung sino tama' }
      ]
    },
    {
      id: 6,
      question: 'Kapag na-disappoint ka ng friend mo:',
      options: [
        { type: 'A', text: 'Usap tayo, direct ako sabihin feelings' },
        { type: 'B', text: 'Tampo muna, pero magpapatawad din' },
        { type: 'C', text: 'Distance for a while hanggang okay na' },
        { type: 'D', text: 'Let it go, bahala na siya' }
      ]
    },
    {
      id: 7,
      question: 'Pag may nakaka-trigger ng past trauma:',
      options: [
        { type: 'A', text: 'Acknowledge na triggered ako, self-care mode' },
        { type: 'B', text: 'Reach out sa support system ko' },
        { type: 'C', text: 'Push through, kaya ko to' },
        { type: 'D', text: 'Avoid lahat ng reminders' }
      ]
    },
    {
      id: 8,
      question: 'Gaano ka ka-comfortable mag-express ng feelings?',
      options: [
        { type: 'A', text: 'Open book ako! Madali ako mag-share' },
        { type: 'B', text: 'Sa close friends lang comfortable' },
        { type: 'C', text: 'Reserved ako, selective lang' },
        { type: 'D', text: 'Private, rarely nagsha-share' }
      ]
    },
    {
      id: 9,
      question: 'Pag overwhelmed ka sa dami ng gawain:',
      options: [
        { type: 'A', text: 'Organize at prioritize, one step at a time' },
        { type: 'B', text: 'Delegate kung kaya, ask for help' },
        { type: 'C', text: 'Shutdown mode, pahinga muna' },
        { type: 'D', text: 'Panic pero push through pa rin' }
      ]
    },
    {
      id: 10,
      question: 'Sa coping with negative emotions, ano helpful sayo?',
      options: [
        { type: 'A', text: 'Exercise o physical activities' },
        { type: 'B', text: 'Creative outlet - art, music, writing' },
        { type: 'C', text: 'Talking it out with someone' },
        { type: 'D', text: 'Sleep at rest, reset ng system' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Ang Emotionally Intelligent',
      description: 'Expert ka sa pag-process ng emotions! Alam mo kung paano i-regulate ang feelings mo at may healthy coping mechanisms ka. Mature ang approach mo sa emotions at kaya mong tumulong sa iba na ma-understand din ang kanila!'
    },
    B: {
      title: 'Ang Social Processor',
      description: 'Connection ang key sayo sa pag-handle ng emotions! Mas nahahandle mo ang feelings pag may kasama ka. Support system ang pinaka-important sayo at generous ka rin sa pagbibigay ng emotional support sa iba!'
    },
    C: {
      title: 'Ang Reserved Handler',
      description: 'Quiet strength ang style mo! Di mo kailangan ng external validation para ma-process ang emotions. Independent at self-sufficient ka pero dont forget na okay lang humingi ng tulong kapag kailangan!'
    },
    D: {
      title: 'Ang Action-Oriented',
      description: 'Di ka mahilig mag-dwell! Mas gusto mo ng action kaysa sa prolonged emotional processing. Practical at forward-moving ang approach mo. Just remember na okay lang din i-feel ang feelings bago mag-move on!'
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
