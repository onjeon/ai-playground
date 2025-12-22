export const fiestaPhData = {
  id: 'fiesta-ph',
  title: 'Anong Role Mo sa Town Fiesta?',
  description: 'Alamin kung ano ang iyong papel sa Filipino fiesta celebration',
  questions: [
    {
      id: 1,
      question: 'Pag may fiesta sa barangay:',
      options: [
        { type: 'A', text: 'Nag-oorganize! Committee member' },
        { type: 'B', text: 'Nag-pprepare ng handaan' },
        { type: 'C', text: 'Dadating lang' },
        { type: 'D', text: 'Nag-ddonate lang ng pera' }
      ]
    },
    {
      id: 2,
      question: 'Sa food preparation:',
      options: [
        { type: 'A', text: 'Head chef! Nag-aasikaso ng menu' },
        { type: 'B', text: 'Tumutulong sa kusina' },
        { type: 'C', text: 'Bumibili ng ready-made' },
        { type: 'D', text: 'Hindi involved' }
      ]
    },
    {
      id: 3,
      question: 'Ilang handaan ang binibisita mo?',
      options: [
        { type: 'A', text: '10+! Lahat ng kakilala' },
        { type: 'B', text: '5-9! Close friends lang' },
        { type: 'C', text: '2-4! Family lang' },
        { type: 'D', text: '1 or none! Sa bahay lang' }
      ]
    },
    {
      id: 4,
      question: 'Sa pag-uwi galing fiesta visit:',
      options: [
        { type: 'A', text: 'Dami take-home! Busog pa' },
        { type: 'B', text: 'May konting food packs' },
        { type: 'C', text: 'Kumain lang, walang take-home' },
        { type: 'D', text: 'Hindi nag-fiesta hopping' }
      ]
    },
    {
      id: 5,
      question: 'Sa fiesta programs/activities:',
      options: [
        { type: 'A', text: 'Active participant! Sumali ng contest' },
        { type: 'B', text: 'Audience! Nanunuod' },
        { type: 'C', text: 'Pass! Food lang habol' },
        { type: 'D', text: 'Hindi pumupunta' }
      ]
    },
    {
      id: 6,
      question: 'Pag may bisitang di invited:',
      options: [
        { type: 'A', text: 'Welcome! Kain kayo!' },
        { type: 'B', text: 'Okay lang, normal sa fiesta' },
        { type: 'C', text: 'Awkward pero papakain pa rin' },
        { type: 'D', text: 'Sana nag-confirm muna' }
      ]
    },
    {
      id: 7,
      question: 'Sa fiesta Mass:',
      options: [
        { type: 'A', text: 'Nandyan! Important part yan' },
        { type: 'B', text: 'Pag naabutan' },
        { type: 'C', text: 'After mass na dadating' },
        { type: 'D', text: 'Skip! Kumain na lang' }
      ]
    },
    {
      id: 8,
      question: 'Magkano gastos mo sa fiesta:',
      options: [
        { type: 'A', text: '10k+! Malaking celebration' },
        { type: 'B', text: '5-10k! Decent handaan' },
        { type: 'C', text: '1-5k! Simple lang' },
        { type: 'D', text: 'Wala! Di naman ako nag-celebrate' }
      ]
    },
    {
      id: 9,
      question: 'Sa perya/carnival:',
      options: [
        { type: 'A', text: 'Everyday andito ako!' },
        { type: 'B', text: 'Few times during fiesta week' },
        { type: 'C', text: 'Once lang' },
        { type: 'D', text: 'Never! Ingay lang' }
      ]
    },
    {
      id: 10,
      question: 'Pag nag-invite ka ng bisita:',
      options: [
        { type: 'A', text: 'Lahat ng kakilala! The more the merrier' },
        { type: 'B', text: 'Close friends and family' },
        { type: 'C', text: 'Immediate family lang' },
        { type: 'D', text: 'Hindi ako nag-iinvite' }
      ]
    },
    {
      id: 11,
      question: 'Sa fiesta presentation ng barangay:',
      options: [
        { type: 'A', text: 'Performer! Sumayaw/kumanta' },
        { type: 'B', text: 'Behind the scenes! Organizer' },
        { type: 'C', text: 'Audience lang' },
        { type: 'D', text: 'Hindi ko alam may ganun' }
      ]
    },
    {
      id: 12,
      question: 'Overall fiesta spirit:',
      options: [
        { type: 'A', text: 'Fiesta is life! Favorite ko yan' },
        { type: 'B', text: 'Enjoy ko! Good times' },
        { type: 'C', text: 'Okay lang! For food' },
        { type: 'D', text: 'Not a fan! Stress lang' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Fiesta Royalty',
      description: 'Ikaw ang kaluluwa ng fiesta! Active ka sa lahat - organization, preparation, celebration. Para sayo, fiesta is a sacred Filipino tradition. You embody the true spirit of Filipino hospitality and community!'
    },
    B: {
      title: 'Fiesta Enthusiast',
      description: 'Enjoy mo ang fiesta! Participant ka at nag-eenjoy ng celebration. Balanced ang involvement mo - may preparation pero may fun time din. You appreciate the fiesta culture!'
    },
    C: {
      title: 'Casual Celebrator',
      description: 'Nakiki-celebrate ka lang! Hindi ka OA pero present ka naman. Food lang habol mo mostly. Practical approach mo sa fiesta. You enjoy the benefits without the stress!'
    },
    D: {
      title: 'Fiesta Skeptic',
      description: 'Hindi ka fan ng fiesta! Modern ka at practical. Mas gusto mo simple celebrations. Respeto mo tradition pero di mo priority. You prefer quiet, simple living!'
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
