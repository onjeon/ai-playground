export const socialFacebookPhData = {
  id: 'social-facebook-ph',
  title: 'Anong Facebook User Ka?',
  description: 'Alamin kung anong tipo ka ng Facebook user sa Pilipinas',
  questions: [
    {
      id: 1,
      question: 'Gaano kadalas ka mag-post sa Facebook?',
      options: [
        { type: 'A', text: 'Every hour! Update sa lahat ng ginagawa' },
        { type: 'B', text: 'Daily! Share ko mga interesting' },
        { type: 'C', text: 'Pag may special occasion lang' },
        { type: 'D', text: 'Lurker lang ako, bihira mag-post' }
      ]
    },
    {
      id: 2,
      question: 'Anong content ka nag-po-post?',
      options: [
        { type: 'A', text: 'Personal updates! Selfie, food, OOTD' },
        { type: 'B', text: 'Shared content! Memes, news, videos' },
        { type: 'C', text: 'Achievements and milestones' },
        { type: 'D', text: 'Wala, pang-stalk lang FB ko' }
      ]
    },
    {
      id: 3,
      question: 'Paano ka sa FB comments section?',
      options: [
        { type: 'A', text: 'Active! Nag-cocomment ako everywhere' },
        { type: 'B', text: 'Pag may opinion ako, share ko' },
        { type: 'C', text: 'Bihira, pag close friends lang' },
        { type: 'D', text: 'Never! Read lang ako' }
      ]
    },
    {
      id: 4,
      question: 'Anong FB groups ka active?',
      options: [
        { type: 'A', text: 'Lahat! Benta, tanong, chismis' },
        { type: 'B', text: 'Interest groups! Hobbies and stuff' },
        { type: 'C', text: 'School/Work groups lang' },
        { type: 'D', text: 'Wala, hindi ako nag-jojoin' }
      ]
    },
    {
      id: 5,
      question: 'Paano ka sa FB marketplace?',
      options: [
        { type: 'A', text: 'May online shop ako! Nag-bebenta' },
        { type: 'B', text: 'Active buyer! Marami na kong nabili' },
        { type: 'C', text: 'Tingin-tingin lang minsan' },
        { type: 'D', text: 'Never tried! Sketchy e' }
      ]
    },
    {
      id: 6,
      question: 'Gaano ka-private ang FB mo?',
      options: [
        { type: 'A', text: 'Public! Open sa lahat' },
        { type: 'B', text: 'Friends of friends' },
        { type: 'C', text: 'Friends only' },
        { type: 'D', text: 'Super private! Limited profile' }
      ]
    },
    {
      id: 7,
      question: 'Paano ka sa FB drama?',
      options: [
        { type: 'A', text: 'Nag-papasimuno! Ako ang main character' },
        { type: 'B', text: 'Commentator! Share ko opinyon' },
        { type: 'C', text: 'Silent reader! Popcorn lang' },
        { type: 'D', text: 'Hindi ko nakikita, filtered feed ko' }
      ]
    },
    {
      id: 8,
      question: 'Ano ang reaction mo sa political posts?',
      options: [
        { type: 'A', text: 'Active! Nag-dedebate ako' },
        { type: 'B', text: 'Share ko pag agree ako' },
        { type: 'C', text: 'Ignore! Nakaka-stress' },
        { type: 'D', text: 'Unfollow agad yang ganyan' }
      ]
    },
    {
      id: 9,
      question: 'Paano ka sa FB memories?',
      options: [
        { type: 'A', text: 'Share ko lahat! Throwback everyday' },
        { type: 'B', text: 'Pag maganda yung memory' },
        { type: 'C', text: 'Delete! Nakakahiya yung dati' },
        { type: 'D', text: 'Hindi ko binubuksan' }
      ]
    },
    {
      id: 10,
      question: 'Gaano karami ang FB friends mo?',
      options: [
        { type: 'A', text: '1000+! Marami akong kakilala' },
        { type: 'B', text: '500-999! Social butterfly' },
        { type: 'C', text: '100-499! Close circle lang' },
        { type: 'D', text: 'Below 100! Quality over quantity' }
      ]
    },
    {
      id: 11,
      question: 'Paano ka sa "Pokes"?',
      options: [
        { type: 'A', text: 'Nag-popoke pa rin ako! Old school' },
        { type: 'B', text: 'Pag ni-poke, poke back' },
        { type: 'C', text: 'Ignore! Ano ba yan' },
        { type: 'D', text: 'Hindi ko alam may ganyan pa pala' }
      ]
    },
    {
      id: 12,
      question: 'Sa birthday mo, ano expectation mo sa FB?',
      options: [
        { type: 'A', text: 'Flood ng greetings! Reply ako sa lahat' },
        { type: 'B', text: 'Happy sa mga greetings ng friends' },
        { type: 'C', text: 'Hide ko birthday ko sa FB' },
        { type: 'D', text: 'Deactivate ko FB pag birthday' }
      ]
    }
  ],
  results: {
    A: {
      title: 'FB Addict - Mahilig Mag-share',
      description: 'Ikaw ay Facebook Power User! Active ka sa lahat ng aspects ng FB - posts, comments, groups, marketplace. Sobrang social mo at comfortable ka mag-share ng buhay mo online. FB is life para sa iyo! Alam ng lahat ang nangyayari sa buhay mo through your posts.'
    },
    B: {
      title: 'Social Networker',
      description: 'Balanced ang FB usage mo! Active ka pero hindi OA. Share ka ng interesting things at engaged ka sa communities mo. You use FB as intended - to connect and share. Good balance ka ng online and offline life.'
    },
    C: {
      title: 'Selective Sharer',
      description: 'Conservative ka sa FB! Selective ka kung ano at saan ka mag-share. Privacy-conscious ka at hindi ka fan ng oversharing. FB is just a tool for you, not your whole life. You value your online privacy.'
    },
    D: {
      title: 'FB Ghost - Silent Stalker',
      description: 'Ikaw ay FB lurker! Active ka mag-browse pero invisible ka sa platform. Professional stalker ka - alam mo lahat pero walang nakakaalam sa iyo. You prefer to observe rather than participate. Mysterious ang dating mo!'
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
