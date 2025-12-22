export const sikolohiyakabaData = {
  id: 'sikolohiya-kaba',
  title: 'Paano Mo Hinahandle ang Kaba?',
  description: 'Alamin kung paano mo kinakaharap ang kabang feeling at kung ano ang coping style mo',
  questions: [
    {
      id: 1,
      question: 'Bago ang important job interview:',
      options: [
        { type: 'A', text: 'Super kinakabahan! Di makatulog gabi before' },
        { type: 'B', text: 'Nervous pero prepared, keri na' },
        { type: 'C', text: 'Excited pa nga! Challenge accepted' },
        { type: 'D', text: 'Bahala na, kung ano mangyari' }
      ]
    },
    {
      id: 2,
      question: 'Pag kailangan mong mag-public speaking:',
      options: [
        { type: 'A', text: 'Nightmare! Avoid as much as possible' },
        { type: 'B', text: 'Kinakabahan pero push through' },
        { type: 'C', text: 'May konting kaba pero manageable' },
        { type: 'D', text: 'Enjoy ko! Love the spotlight' }
      ]
    },
    {
      id: 3,
      question: 'Sa mga first dates o first meetings:',
      options: [
        { type: 'A', text: 'Overthink ang lahat! What to wear, what to say' },
        { type: 'B', text: 'Slight anxiety pero okay naman pagdating na' },
        { type: 'C', text: 'Normal lang, part of life' },
        { type: 'D', text: 'Thrilling! Nakaka-excite' }
      ]
    },
    {
      id: 4,
      question: 'Kapag may exam o performance review:',
      options: [
        { type: 'A', text: 'Sleepless nights at cramming' },
        { type: 'B', text: 'Review hard para mawala kaba' },
        { type: 'C', text: 'Prepared naman, calm lang' },
        { type: 'D', text: 'Chill, bahala na kung ano result' }
      ]
    },
    {
      id: 5,
      question: 'Pag waiting ka for important results (medical, exam, etc.):',
      options: [
        { type: 'A', text: 'Worst case scenario ang iniisip ko' },
        { type: 'B', text: 'Kabado pero nakatutok sa positive outcome' },
        { type: 'C', text: 'Patient lang, anuman ang result handle ko' },
        { type: 'D', text: 'Di masyado iniisip hanggang dumating' }
      ]
    },
    {
      id: 6,
      question: 'Sa pag-travel to unfamiliar places:',
      options: [
        { type: 'A', text: 'Research everything! Itinerary ng itinerary' },
        { type: 'B', text: 'Basic research pero open to surprises' },
        { type: 'C', text: 'Go with the flow, part ng adventure' },
        { type: 'D', text: 'Wing it! Spontaneous travels are best' }
      ]
    },
    {
      id: 7,
      question: 'Kapag may pending problem na di pa solved:',
      options: [
        { type: 'A', text: 'Di mapalagay, constant worry' },
        { type: 'B', text: 'Try to solve agad para mawala ang stress' },
        { type: 'C', text: 'Deal with it when I can, di muna iniisip' },
        { type: 'D', text: 'Solve itself eventually, chill lang' }
      ]
    },
    {
      id: 8,
      question: 'Sa confrontational situations:',
      options: [
        { type: 'A', text: 'Avoid at all costs! Anxiety inducing' },
        { type: 'B', text: 'Kinakabahan pero haharapin kung needed' },
        { type: 'C', text: 'Direct approach, solve agad' },
        { type: 'D', text: 'Unbothered, konting pa lang yan' }
      ]
    },
    {
      id: 9,
      question: 'Pag may uncertain future event (job change, moving, etc.):',
      options: [
        { type: 'A', text: 'Anxiety overload! What ifs everywhere' },
        { type: 'B', text: 'Plan and prepare para may control' },
        { type: 'C', text: 'Accept uncertainty, roll with it' },
        { type: 'D', text: 'Exciting! New chapter' }
      ]
    },
    {
      id: 10,
      question: 'Ano coping mechanism mo para sa kaba?',
      options: [
        { type: 'A', text: 'Breathing exercises, meditation, or journaling' },
        { type: 'B', text: 'Talk to someone, share worries' },
        { type: 'C', text: 'Distraction - games, shows, music' },
        { type: 'D', text: 'Wala, di naman ako masyadong kinakabahan' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Ang Overthinker',
      description: 'High anxiety tendency mo at madalas mag-overthink. Pero awareness is the first step! Try mo breathing exercises at grounding techniques. Remember: maraming worries mo na di naman nangyayari. Be kind to yourself!'
    },
    B: {
      title: 'Ang Prepared Worrier',
      description: 'May kaba ka pero ginagamit mo ito as motivation to prepare! Healthy ang approach mo - acknowledge the nerves pero dont let it stop you. Your preparation is your power!'
    },
    C: {
      title: 'Ang Calm Handler',
      description: 'Marunong ka mag-manage ng kaba! Hindi ka easily rattled at may healthy perspective ka sa challenges. Cool under pressure ka at reliable sa stressful situations. Keep it up!'
    },
    D: {
      title: 'Ang Chill Master',
      description: 'Super low anxiety mo! Either naturally calm ka or mastered mo na ang art of not worrying. Enviable trait but make sure na di complacency - important pa rin ang healthy level of concern paminsan-minsan!'
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
