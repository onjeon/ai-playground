export const makananLaksaMs = {
  id: 'makanan-laksa-ms',
  title: 'Laksa Mana Yang Kau?',
  description: 'Malaysia ada banyak jenis laksa - mana satu yang represent kau?',
  questions: [
    {
      id: 1,
      text: 'Bila approach benda baru:',
      options: [
        { id: 'a', text: 'Bold dan adventurous, try terus', type: 'A' },
        { id: 'b', text: 'Creative twist, do it differently', type: 'B' },
        { id: 'c', text: 'Steady approach, one step at a time', type: 'C' },
        { id: 'd', text: 'Simple dan straightforward', type: 'D' }
      ]
    },
    {
      id: 2,
      text: 'Flavor profile yang describe kau:',
      options: [
        { id: 'a', text: 'Rich, complex, dan intense', type: 'A' },
        { id: 'b', text: 'Unique blend, sweet dan savory', type: 'B' },
        { id: 'c', text: 'Warm, comforting, dan familiar', type: 'C' },
        { id: 'd', text: 'Tangy, refreshing, dan light', type: 'D' }
      ]
    },
    {
      id: 3,
      text: 'Dalam kerja, kau more towards:',
      options: [
        { id: 'a', text: 'Power through, intense focus', type: 'A' },
        { id: 'b', text: 'Innovative solutions, think different', type: 'B' },
        { id: 'c', text: 'Team player, collaborative', type: 'C' },
        { id: 'd', text: 'Efficient, get things done simply', type: 'D' }
      ]
    },
    {
      id: 4,
      text: 'Friendship style kau:',
      options: [
        { id: 'a', text: 'Deep connections, quality over quantity', type: 'A' },
        { id: 'b', text: 'Mix of different types of friends', type: 'B' },
        { id: 'c', text: 'Loyal long-term friendships', type: 'C' },
        { id: 'd', text: 'Easy-going, friends dengan semua', type: 'D' }
      ]
    },
    {
      id: 5,
      text: 'Problem-solving approach:',
      options: [
        { id: 'a', text: 'Dive deep, analyze thoroughly', type: 'A' },
        { id: 'b', text: 'Creative solutions, out of the box', type: 'B' },
        { id: 'c', text: 'Collaborative, ask for input', type: 'C' },
        { id: 'd', text: 'Keep it simple, practical solution', type: 'D' }
      ]
    },
    {
      id: 6,
      text: 'Spice tolerance kau:',
      options: [
        { id: 'a', text: 'Bring it on! Pedas gila boleh', type: 'A' },
        { id: 'b', text: 'Medium with interesting flavors', type: 'B' },
        { id: 'c', text: 'Moderate, comfortable level', type: 'C' },
        { id: 'd', text: 'Mild atau kurang pedas', type: 'D' }
      ]
    },
    {
      id: 7,
      text: 'Travel style kau:',
      options: [
        { id: 'a', text: 'Adventure trips, explore deeply', type: 'A' },
        { id: 'b', text: 'Unique destinations, hidden gems', type: 'B' },
        { id: 'c', text: 'Family trips, group travel', type: 'C' },
        { id: 'd', text: 'Relaxing getaways, simple trips', type: 'D' }
      ]
    },
    {
      id: 8,
      text: 'Bila stress:',
      options: [
        { id: 'a', text: 'Channel into productivity', type: 'A' },
        { id: 'b', text: 'Find creative outlets', type: 'B' },
        { id: 'c', text: 'Talk to someone, get support', type: 'C' },
        { id: 'd', text: 'Take a break, simplify', type: 'D' }
      ]
    },
    {
      id: 9,
      text: 'Food makan style:',
      options: [
        { id: 'a', text: 'Love rich, heavy meals', type: 'A' },
        { id: 'b', text: 'Like fusion dan creative dishes', type: 'B' },
        { id: 'c', text: 'Comfort food, familiar favorites', type: 'C' },
        { id: 'd', text: 'Light dan refreshing meals', type: 'D' }
      ]
    },
    {
      id: 10,
      text: 'Orang describe kau sebagai:',
      options: [
        { id: 'a', text: 'Passionate dan intense', type: 'A' },
        { id: 'b', text: 'Creative dan unique', type: 'B' },
        { id: 'c', text: 'Reliable dan warm', type: 'C' },
        { id: 'd', text: 'Chill dan refreshing', type: 'D' }
      ]
    }
  ],
  results: {
    A: {
      title: 'Laksa Penang',
      description: 'Kau macam laksa Penang - bold, complex, dan penuh character! Asam pedas yang strong represent personality kau yang passionate. Tak semua orang boleh handle intensity kau, tapi yang appreciate memang jatuh cinta. Authentic dan unforgettable!'
    },
    B: {
      title: 'Laksa Sarawak',
      description: 'Unique macam laksa Sarawak! Kau ada blend yang special - creative, different, dan stand out. Sambal belacan dengan santan create sesuatu yang memorable. Orang ingat kau sebab kau one of a kind!'
    },
    C: {
      title: 'Laksa Johor',
      description: 'Comforting macam laksa Johor! Rich dengan santan, makan dengan spaghetti - blend of familiar dan interesting. Kau warm, reliable, dan buat orang feel at home. Trusted friend yang selalu ada!'
    },
    D: {
      title: 'Laksa Kedah/Asam',
      description: 'Refreshing macam laksa asam! Light, tangy, dan not too heavy. Kau easy-going, straightforward, dan pleasant. Tak complicated tapi still flavorful. Orang feel refreshed lepas spend time dengan kau!'
    }
  },
  calculateResult: (answers: string[]) => {
    const counts = answers.reduce((acc, answer) => {
      acc[answer] = (acc[answer] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    return Object.entries(counts).reduce((a, b) => counts[a[0]] > counts[b[0]] ? a : b)[0];
  }
};
