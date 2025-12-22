// Gaya Handle Ex
// Macam mana kau deal dengan ex dalam hidup kau?

import { TestData } from "../../types";

const data: TestData = {
  id: "cinta-ex-ms",
  title: "Gaya Handle Ex",
  description: "Ex adalah part of life. Kau jenis yang stay friends ke block everywhere? Jom check!",
  category: "cinta",
  emoji: "👻",
  color: "#6B7280",
  questions: [
    {
      id: 1,
      question: "Status ex kau kat social media?",
      options: [
        { text: "Block semua platforms!", type: "A" },
        { text: "Unfollow tapi tak block", type: "B" },
        { text: "Still follow, tapi muted", type: "C" },
        { text: "Still friends, normal je", type: "D" },
      ],
    },
    {
      id: 2,
      question: "Ex message \"Hey, apa khabar?\" Kau?",
      options: [
        { text: "Ignore atau delete terus", type: "A" },
        { text: "Read tapi tak reply", type: "B" },
        { text: "Reply short dan cold", type: "C" },
        { text: "Reply normally, catch up sikit", type: "D" },
      ],
    },
    {
      id: 3,
      question: "Nampak ex kat mall. Reaction kau?",
      options: [
        { text: "U-turn! Avoid at all costs", type: "A" },
        { text: "Pretend tak nampak, walk past", type: "B" },
        { text: "Awkward wave dari jauh", type: "C" },
        { text: "Say hi, maybe quick chat", type: "D" },
      ],
    },
    {
      id: 4,
      question: "Ex ada new partner. Feel kau?",
      options: [
        { text: "Don't care, don't wanna know", type: "A" },
        { text: "Sikit jealous tapi hide it", type: "B" },
        { text: "Curious tapi try not to care", type: "C" },
        { text: "Happy for them honestly", type: "D" },
      ],
    },
    {
      id: 5,
      question: "Kawan still friends dengan ex kau. Thoughts?",
      options: [
        { text: "Betrayal! How could they", type: "A" },
        { text: "Uncomfortable tapi can't control them", type: "B" },
        { text: "Okay as long as don't tell me about ex", type: "C" },
        { text: "No issue, adults can be friends with anyone", type: "D" },
      ],
    },
    {
      id: 6,
      question: "Ex nak borrow money. Response?",
      options: [
        { text: "Haha no. Blocked anyway", type: "A" },
        { text: "Hard no, not my problem", type: "B" },
        { text: "Depends on situation, probably no", type: "C" },
        { text: "If can help dan not weird, why not", type: "D" },
      ],
    },
    {
      id: 7,
      question: "New partner jealous of your ex. Kau?",
      options: [
        { text: "Cut all ties! Partner comes first", type: "A" },
        { text: "Reassure partner, reduce contact with ex", type: "B" },
        { text: "Explain nothing to worry, but respect feelings", type: "C" },
        { text: "Partner needs to trust me, ex is just friend", type: "D" },
      ],
    },
    {
      id: 8,
      question: "Barang ex masih ada kat kau. Apa buat?",
      options: [
        { text: "Throw atau burn semua!", type: "A" },
        { text: "Return or throw, no keeping", type: "B" },
        { text: "Keep in box somewhere, out of sight", type: "C" },
        { text: "Some things have memories, keep few", type: "D" },
      ],
    },
    {
      id: 9,
      question: "Ex post throwback dengan kau. Reaction?",
      options: [
        { text: "Report the post! (kidding... maybe)", type: "A" },
        { text: "Uncomfortable, hope no one sees", type: "B" },
        { text: "Whatever, it's the past", type: "C" },
        { text: "Good times, might even like it", type: "D" },
      ],
    },
    {
      id: 10,
      question: "Being friends with ex - possible?",
      options: [
        { text: "NEVER. Ex is ex for a reason", type: "A" },
        { text: "Very rare circumstances only", type: "B" },
        { text: "With time dan healing, maybe", type: "C" },
        { text: "Yes! If ended well, why not", type: "D" },
      ],
    },
  ],
  results: {
    A: {
      type: "A",
      title: "The Clean Cutter",
      emoji: "✂️",
      description: "Ex? What ex? Kau delete, block, dan erase semua. Clean break, no contact, move on completely. Takde grey area dalam hidup kau!",
      traits: ["Decisive", "Clean break", "No contact", "Black and white"],
      strengths: ["Move on faster", "No drama", "Clear boundaries"],
      weaknesses: ["Might seem extreme", "Could burn bridges", "Miss closure sometimes"],
      tips: ["It's okay to have civil contact", "Not all exes are enemies"],
    },
    B: {
      type: "B",
      title: "The Distant Acknowledger",
      emoji: "👋",
      description: "Kau acknowledge ex exist tapi keep distance. Civil if needed, tapi no close contact. Boundaries ada tapi not extreme.",
      traits: ["Boundaried", "Civil", "Distant", "Polite"],
      strengths: ["Mature handling", "No unnecessary drama", "Respectful distance"],
      weaknesses: ["Awkward encounters", "Might come off cold"],
      tips: ["Trust your boundaries", "It's okay to be more open with time"],
    },
    C: {
      type: "C",
      title: "The Neutral Zone",
      emoji: "😐",
      description: "Kau neutral dengan ex. Tak hate, tak love. Exist in your life peripherally. Can deal bila needed tapi tak seek out.",
      traits: ["Neutral", "Unbothered", "Casual", "Indifferent"],
      strengths: ["Low stress about ex", "Mature perspective", "No hard feelings"],
      weaknesses: ["Partner might find it weird", "Boundaries can be unclear"],
      tips: ["Make sure new partner comfortable", "Set clearer boundaries if needed"],
    },
    D: {
      type: "D",
      title: "The Ex-Friend Keeper",
      emoji: "🤝",
      description: "Kau boleh stay friends dengan ex! Believe past relationships don't have to end badly. Mature, open, dan value the connection even post-breakup.",
      traits: ["Open", "Forgiving", "Mature", "Friendly"],
      strengths: ["No enemies", "Keep good people in life", "Emotionally mature"],
      weaknesses: ["New partners might struggle", "Boundaries can blur", "Could reignite feelings"],
      tips: ["Be transparent dengan new partner", "Make sure friendship is healthy"],
    },
  },
};

export default data;
