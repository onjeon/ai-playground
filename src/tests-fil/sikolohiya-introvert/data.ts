export const sikolohiyaintrovertData = {
  id: 'sikolohiya-introvert',
  title: 'Introvert Ka Ba Talaga?',
  description: 'Alamin kung gaano ka ka-introvert at kung paano mo kinakarga ang social battery mo',
  questions: [
    {
      id: 1,
      question: 'After ng mahabang workday, ano preferred mong gawin?',
      options: [
        { type: 'A', text: 'Netflix at chill sa bahay, mag-isa' },
        { type: 'B', text: 'Quiet dinner with close friend or SO' },
        { type: 'C', text: 'Gala with friends, need social interaction!' },
        { type: 'D', text: 'Party time! TGIF energy' }
      ]
    },
    {
      id: 2,
      question: 'Sa family reunion or fiesta:',
      options: [
        { type: 'A', text: 'Social battery drains fast, hide sa room' },
        { type: 'B', text: 'Okay naman pero need breaks' },
        { type: 'C', text: 'Enjoy! Love catching up with relatives' },
        { type: 'D', text: 'Life of the party! Videoke king/queen' }
      ]
    },
    {
      id: 3,
      question: 'Pag may bago kang makikilala:',
      options: [
        { type: 'A', text: 'Awkward at tahimik, need time to warm up' },
        { type: 'B', text: 'Friendly pero di masyado deep ang convo' },
        { type: 'C', text: 'Easy lang, nag-eenjoy naman makipag-usap' },
        { type: 'D', text: 'Super easy! Instant connection agad' }
      ]
    },
    {
      id: 4,
      question: 'Sa ideal na weekend mo:',
      options: [
        { type: 'A', text: 'Walang lakad! Bahay lang, peace' },
        { type: 'B', text: 'One or two appointments max' },
        { type: 'C', text: 'Mix ng gala at rest' },
        { type: 'D', text: 'Fully booked! Maraming lakad' }
      ]
    },
    {
      id: 5,
      question: 'Sa group projects o team meetings:',
      options: [
        { type: 'A', text: 'Prefer written communication, email or chat' },
        { type: 'B', text: 'Okay sa meetings pero di masyado vocal' },
        { type: 'C', text: 'Participate naman, share ideas' },
        { type: 'D', text: 'Love brainstorming with people!' }
      ]
    },
    {
      id: 6,
      question: 'Kapag nasa mall ka:',
      options: [
        { type: 'A', text: 'In and out agad, get what I need tapos uwi' },
        { type: 'B', text: 'Window shopping alone, peaceful' },
        { type: 'C', text: 'Mas masaya with company' },
        { type: 'D', text: 'Whole day affair with barkada!' }
      ]
    },
    {
      id: 7,
      question: 'Sa phone calls:',
      options: [
        { type: 'A', text: 'Hate it! Text mo na lang ako' },
        { type: 'B', text: 'Okay sa important calls pero prefer chat' },
        { type: 'C', text: 'Depends sa tao, okay naman' },
        { type: 'D', text: 'Love long phone convos!' }
      ]
    },
    {
      id: 8,
      question: 'Kapag invited ka sa party:',
      options: [
        { type: 'A', text: 'Decline politely, not my scene' },
        { type: 'B', text: 'Go pero early exit plan ready' },
        { type: 'C', text: 'Depends sa mood at kung sino kasama' },
        { type: 'D', text: 'Excited! Definitely going' }
      ]
    },
    {
      id: 9,
      question: 'Sa sharing personal thoughts:',
      options: [
        { type: 'A', text: 'Super private, ilan lang nakakaalam' },
        { type: 'B', text: 'Select few lang ang trusted circle' },
        { type: 'C', text: 'Open naman sa friends' },
        { type: 'D', text: 'Madaldal! Share lahat ng feelings' }
      ]
    },
    {
      id: 10,
      question: 'Ano mas nakaka-charge sayo?',
      options: [
        { type: 'A', text: 'Solo time, completely alone' },
        { type: 'B', text: 'Quiet time with one person' },
        { type: 'C', text: 'Small group hangout' },
        { type: 'D', text: 'Big social gatherings!' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Ang True Introvert',
      description: 'Certified introvert ka! Recharge ka sa alone time at draining sayo ang too much social interaction. Nothing wrong with that - introverts run the world in their own quiet way. Protect your peace at enjoy your solitude!'
    },
    B: {
      title: 'Ang Ambivert-Introvert',
      description: 'Leaning towards introvert ka pero may social side ka rin! Kaya mo naman makisalamuha pero mas prefer mo ang smaller groups at meaningful conversations. Balance ang key sayo - alam mo kung kailan mag-socialize at mag-recharge!'
    },
    C: {
      title: 'Ang Ambivert-Extrovert',
      description: 'Mix ka! Flexible sa solo at social activities depende sa mood. Adaptable ka sa different situations at comfortable ka sa both scenarios. The best of both worlds ang meron ka!'
    },
    D: {
      title: 'Ang Extrovert Talaga',
      description: 'Hindi ka introvert, extrovert ka! Energy mo comes from people at social interactions. Life of the party ka at marami kang friends. Embrace your social butterfly personality!'
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
