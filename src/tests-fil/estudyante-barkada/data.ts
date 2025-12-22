export const estudyanteBarkadaData = {
  id: 'estudyante-barkada',
  title: 'Anong Tipo Ka sa Barkada?',
  description: 'Alamin kung ano ang role mo sa student barkada',
  questions: [
    {
      id: 1,
      question: 'Sino ka sa group study sessions?',
      options: [
        { type: 'A', text: 'Nag-tuturo at nag-eexplain' },
        { type: 'B', text: 'Nag-jojoke para di boring' },
        { type: 'C', text: 'Tahimik lang, nag-aaral talaga' },
        { type: 'D', text: 'Nag-oorganize ng food at logistics' }
      ]
    },
    {
      id: 2,
      question: 'Sa project/group work, ikaw ay:',
      options: [
        { type: 'A', text: 'Leader! Nag-aassign ng tasks' },
        { type: 'B', text: 'Creative director! Ideas guy' },
        { type: 'C', text: 'Diligent worker! Ginagawa assigned task' },
        { type: 'D', text: 'Coordinator! Nag-cocompile lahat' }
      ]
    },
    {
      id: 3,
      question: 'Pag may exam bukas:',
      options: [
        { type: 'A', text: 'Prepared na! Advance study' },
        { type: 'B', text: 'Chill lang, confident' },
        { type: 'C', text: 'Cramming mode activated' },
        { type: 'D', text: 'Group study organizer' }
      ]
    },
    {
      id: 4,
      question: 'Sa lunch break, ikaw ay:',
      options: [
        { type: 'A', text: 'Nag-tututor ng nag-tutanong' },
        { type: 'B', text: 'Nag-eentertain, storyteller' },
        { type: 'C', text: 'Tahimik na kumakain' },
        { type: 'D', text: 'Nag-oorganize ng foodtrip' }
      ]
    },
    {
      id: 5,
      question: 'Pag absent ang isa sa barkada:',
      options: [
        { type: 'A', text: 'Ako nag-upupdate sa lessons' },
        { type: 'B', text: 'Nag-memessage ng chika' },
        { type: 'C', text: 'Notice ko pero di nag-reach out' },
        { type: 'D', text: 'Nag-cocompile ng handouts' }
      ]
    },
    {
      id: 6,
      question: 'Sa group chat ng barkada:',
      options: [
        { type: 'A', text: 'Nag-share ng study materials' },
        { type: 'B', text: 'Meme sender champion' },
        { type: 'C', text: 'Seen zone lang' },
        { type: 'D', text: 'Admin! Nag-aannounce' }
      ]
    },
    {
      id: 7,
      question: 'Pag may away sa barkada:',
      options: [
        { type: 'A', text: 'Voice of reason, nag-aadvise' },
        { type: 'B', text: 'Nag-papasaya para kumalma' },
        { type: 'C', text: 'Neutral, di nakikisawsaw' },
        { type: 'D', text: 'Mediator, nag-aayos' }
      ]
    },
    {
      id: 8,
      question: 'Sa classroom seating:',
      options: [
        { type: 'A', text: 'Front row! Attentive' },
        { type: 'B', text: 'Middle! Social spot' },
        { type: 'C', text: 'Back! Peaceful' },
        { type: 'D', text: 'Anywhere basta sama sa barkada' }
      ]
    },
    {
      id: 9,
      question: 'Pag may outing/lakad ang barkada:',
      options: [
        { type: 'A', text: 'Bahala sila, ako study muna' },
        { type: 'B', text: 'Game! Ako pa nag-plan' },
        { type: 'C', text: 'Pag kasama lang, di ako nag-iisip' },
        { type: 'D', text: 'In-charge sa budget at logistics' }
      ]
    },
    {
      id: 10,
      question: 'Sa finances/pautang:',
      options: [
        { type: 'A', text: 'May savings! Nag-papahiram' },
        { type: 'B', text: 'Libre ko na! Treat ko' },
        { type: 'C', text: 'Sakto lang budget ko' },
        { type: 'D', text: 'Nag-ttrack ng utang bawat isa' }
      ]
    },
    {
      id: 11,
      question: 'Pag may problema ang kaibigan:',
      options: [
        { type: 'A', text: 'Nag-aadvise base sa logic' },
        { type: 'B', text: 'Nag-papasaya, distraction' },
        { type: 'C', text: 'Nakikinig lang, tahimik' },
        { type: 'D', text: 'Tumutulong sa practical solutions' }
      ]
    },
    {
      id: 12,
      question: 'Overall sa barkada, ikaw ay:',
      options: [
        { type: 'A', text: 'Ang talino! Go-to person' },
        { type: 'B', text: 'Ang fun! Life of the group' },
        { type: 'C', text: 'Ang tahimik! Mystery member' },
        { type: 'D', text: 'Ang organizer! Glue ng group' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Ang Matalino - The Smart One',
      description: 'Ikaw ang brainy member ng barkada! Sayo tumatakbo pag may hindi maintindihan. Natural leader ka at responsible. Minsan serious ka masyado pero respected ka ng lahat. You are the intellectual pillar of the group!'
    },
    B: {
      title: 'Ang Masaya - The Fun One',
      description: 'Ikaw ang mood maker ng barkada! Walang boring moment pag kasama ka. Stress reliever ka ng grupo at palaging may joke. Social butterfly ka at lahat ay comfortable sayo. You are the sunshine of the group!'
    },
    C: {
      title: 'Ang Tahimik - The Quiet One',
      description: 'Ikaw ang mysterious member! Hindi ka maingay pero loyal ka sa barkada. Deep thinker ka at observer. May sarili kang world pero andyan ka pag kailangan. You are the calm presence!'
    },
    D: {
      title: 'Ang Organizer - The Mom Friend',
      description: 'Ikaw ang glue ng barkada! Ikaw nag-oorganize ng lahat - lakad, study sessions, everything. Responsible ka at caring. Nag-aalaga ka sa lahat. You keep the group together!'
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
