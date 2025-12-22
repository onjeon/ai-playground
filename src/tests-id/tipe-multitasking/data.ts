// Tipe Multitasking Kamu
// Tes ini mengungkap gaya multitasking yang cocok denganmu!

export const questions = [
  {
    id: 1,
    question: "Saat punya multiple tasks, kamu biasanya...",
    options: [
      { text: "Juggle semua sekaligus, thriving!", type: "A" },
      { text: "Time-block, satu task satu waktu", type: "B" },
      { text: "Switch between based on mood", type: "C" },
      { text: "Struggle, prefer one thing at a time", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Browser tabs kamu biasanya...",
    options: [
      { text: "20+, organized chaos", type: "A" },
      { text: "5-10, grouped by task", type: "B" },
      { text: "Random, close when done", type: "C" },
      { text: "1-3, minimal is best", type: "D" },
    ],
  },
  {
    id: 3,
    question: "During meetings, kamu...",
    options: [
      { text: "Multitask, still catch important points", type: "A" },
      { text: "Focus on meeting, notes for after", type: "B" },
      { text: "Depends on meeting importance", type: "C" },
      { text: "Full attention, can't split", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Interruptions saat deep work...",
    options: [
      { text: "Handle, back to work seamlessly", type: "A" },
      { text: "Annoying tapi manage", type: "B" },
      { text: "Depends on interruption type", type: "C" },
      { text: "Completely derails me", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Email/chat notifications saat kerja...",
    options: [
      { text: "Always on, respond real-time", type: "A" },
      { text: "Batch check at intervals", type: "B" },
      { text: "On tapi ignore kalau busy", type: "C" },
      { text: "Off during focus time", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Quality of work saat multitasking...",
    options: [
      { text: "Consistent, I'm good at this", type: "A" },
      { text: "Slight decrease tapi manageable", type: "B" },
      { text: "Hit or miss honestly", type: "C" },
      { text: "Definitely suffers", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Context switching frequency kamu...",
    options: [
      { text: "Constant, feels natural", type: "A" },
      { text: "Scheduled, minimize disruption", type: "B" },
      { text: "As needed, not planned", type: "C" },
      { text: "Avoid as much as possible", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Urgent task comes in while on something else...",
    options: [
      { text: "Add to the mix, handle both", type: "A" },
      { text: "Quick pause, prioritize, return", type: "B" },
      { text: "Switch focus entirely", type: "C" },
      { text: "Finish current first if possible", type: "D" },
    ],
  },
  {
    id: 9,
    question: "End of day, tasks completed biasanya...",
    options: [
      { text: "Many tasks, varying completion levels", type: "A" },
      { text: "Fewer tasks, mostly complete", type: "B" },
      { text: "Unpredictable, depends on day", type: "C" },
      { text: "Few tasks, but properly done", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Cognitive load saat multitasking...",
    options: [
      { text: "Energizing! Keeps me engaged", type: "A" },
      { text: "Manageable dengan right system", type: "B" },
      { text: "Tiring but necessary", type: "C" },
      { text: "Exhausting, avoid if can", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Ideal work setup untuk productivity...",
    options: [
      { text: "Multiple screens, many things at once", type: "A" },
      { text: "Organized workspace, scheduled tasks", type: "B" },
      { text: "Flexible, change throughout day", type: "C" },
      { text: "Minimal, distraction-free", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Your honest assessment of multitasking ability...",
    options: [
      { text: "One of my strengths!", type: "A" },
      { text: "Can do it when needed", type: "B" },
      { text: "Not great, not terrible", type: "C" },
      { text: "Not my thing at all", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Juggling Master",
    emoji: "🎪",
    description: "Kamu adalah multitasking pro! Multiple tasks, multiple projects, no problem. Your brain thrives dengan variety dan complexity. Impressive (and rare)!",
    traits: ["High bandwidth", "Adaptable", "Quick thinker", "Energetic"],
    strengths: ["Handle complexity", "Responsive", "Versatile"],
    weaknesses: ["May sacrifice depth", "Burnout risk", "Others can't keep up"],
    tips: ["Ensure quality ga suffer", "Deep work masih penting", "Don't mistake busy for productive"],
  },
  B: {
    type: "B",
    title: "The Strategic Switcher",
    emoji: "📅",
    description: "Kamu smart about multitasking! Know when to switch, when to focus, dan how to manage cognitive load. Systems dan structure help you handle multiple demands.",
    traits: ["Organized", "Strategic", "Balanced", "Efficient"],
    strengths: ["Sustainable productivity", "Quality maintained", "Good systems"],
    weaknesses: ["May be rigid", "Unexpected disruptions harder"],
    tips: ["Build flexibility into systems", "Some spontaneity okay", "Adapt when needed"],
  },
  C: {
    type: "C",
    title: "The Context Surfer",
    emoji: "🏄",
    description: "Kamu ride the waves of tasks! Go with flow, switch as needed, dan adapt to whatever comes. Not systematic tapi somehow works out.",
    traits: ["Flexible", "Adaptive", "Spontaneous", "Reactive"],
    strengths: ["Handle surprises", "Not rigid", "Roll with punches"],
    weaknesses: ["Inconsistent results", "Exhausting sometimes", "Lacks structure"],
    tips: ["Add some structure", "Plan key tasks", "Track what works"],
  },
  D: {
    type: "D",
    title: "The Deep Focuser",
    emoji: "🎯",
    description: "Kamu adalah single-tasker! One thing at a time, done well. Deep focus adalah superpower-mu. In age of distraction, this is valuable!",
    traits: ["Focused", "Thorough", "Quality-driven", "Deep thinker"],
    strengths: ["High quality work", "Deep thinking", "No shallow work"],
    weaknesses: ["Slower throughput", "Struggle dengan interruptions", "May seem inflexible"],
    tips: ["Protect focus time fiercely", "Communicate style ke team", "Your depth is strength"],
  },
};

export function calculateResult(answers: number[]): typeof results.A {
  const typeCount: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const type = question.options[answerIndex].type;
      typeCount[type] = (typeCount[type] || 0) + 1;
    }
  });
  const dominantType = Object.entries(typeCount).sort((a, b) => b[1] - a[1])[0][0];
  return results[dominantType as keyof typeof results];
}
