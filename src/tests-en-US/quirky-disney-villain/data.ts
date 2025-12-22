// Which Disney Villain Energy Do You Have? - Viral quirky test for American English users

export const testData = {
  id: "quirky-disney-villain",
  title: "Which Disney Villain Energy Do You Have?",
  description: "We all have a dark side. Which iconic villain matches yours?",
  questions: [
    {
      id: 1,
      text: "What motivates your 'villain' side?",
      options: [
        { text: "I want power and to be in control", type: "maleficent" },
        { text: "Jealousy of someone who has what I want", type: "queen" },
        { text: "Desire for wealth and getting what's owed to me", type: "ursula" },
        { text: "Being underestimated and wanting respect", type: "scar" }
      ]
    },
    {
      id: 2,
      text: "Your petty villain behavior in daily life:",
      options: [
        { text: "Holding grudges for dramatic lengths of time", type: "maleficent" },
        { text: "Comparing myself to others obsessively", type: "queen" },
        { text: "Being transactional - everything has a price", type: "ursula" },
        { text: "Being a little manipulative to get what I need", type: "scar" }
      ]
    },
    {
      id: 3,
      text: "Your reaction when slighted or disrespected:",
      options: [
        { text: "Burning rage that demands dramatic vengeance", type: "maleficent" },
        { text: "Deep insecurity masked by acting superior", type: "queen" },
        { text: "Planning how to come out on top anyway", type: "ursula" },
        { text: "Scheming quietly until I can turn tables", type: "scar" }
      ]
    },
    {
      id: 4,
      text: "Your villain aesthetic:",
      options: [
        { text: "Dramatic, dark, making an ENTRANCE", type: "maleficent" },
        { text: "Beautiful, regal, clearly superior", type: "queen" },
        { text: "Bold, theatrical, impossible to ignore", type: "ursula" },
        { text: "Subtle, sharp, dangerously intelligent", type: "scar" }
      ]
    },
    {
      id: 5,
      text: "Your 'villain weakness' is:",
      options: [
        { text: "Pride and overconfidence in my power", type: "maleficent" },
        { text: "Vanity and obsession with being the best", type: "queen" },
        { text: "Greed and wanting too much too fast", type: "ursula" },
        { text: "Underestimating others while overestimating myself", type: "scar" }
      ]
    },
    {
      id: 6,
      text: "Your villain speech would be about:",
      options: [
        { text: "How you were wronged and revenge is justified", type: "maleficent" },
        { text: "How you deserve to be the fairest/best/number one", type: "queen" },
        { text: "How life is about deals and you always collect", type: "ursula" },
        { text: "How you've been waiting patiently for your moment", type: "scar" }
      ]
    },
    {
      id: 7,
      text: "The trait you secretly admire in villains:",
      options: [
        { text: "Their unapologetic power and drama", type: "maleficent" },
        { text: "Their confidence in their own superiority", type: "queen" },
        { text: "Their cleverness at getting what they want", type: "ursula" },
        { text: "Their patience and strategic thinking", type: "scar" }
      ]
    },
    {
      id: 8,
      text: "Your villain origin story would involve:",
      options: [
        { text: "Being excluded or rejected dramatically", type: "maleficent" },
        { text: "Someone threatening my position or beauty", type: "queen" },
        { text: "Having power or position taken unfairly", type: "ursula" },
        { text: "Being overlooked despite being clearly capable", type: "scar" }
      ]
    },
    {
      id: 9,
      text: "How do you handle competition?",
      options: [
        { text: "Destroy them completely, no mercy", type: "maleficent" },
        { text: "Obsess over them and prove I'm better", type: "queen" },
        { text: "Find their weakness and use it as leverage", type: "ursula" },
        { text: "Play the long game until I can remove them", type: "scar" }
      ]
    },
    {
      id: 10,
      text: "Your villain downfall would be:",
      options: [
        { text: "Overconfidence in my own power", type: "maleficent" },
        { text: "Obsession blinding me to real threats", type: "queen" },
        { text: "Getting greedy and overreaching", type: "ursula" },
        { text: "Allies I manipulated turning on me", type: "scar" }
      ]
    }
  ],
  results: {
    maleficent: {
      type: "Maleficent Energy",
      description: "Your villain energy is DRAMATIC VENGEANCE. Like Maleficent, you're not to be trifled with. When wronged, you hold grudges with theatrical intensity. You value respect and take slights seriously - perhaps too seriously. But also? Your entrance game is immaculate.",
      traits: ["Dramatic", "Pride-focused", "Grudge-holding", "Powerful presence"],
      advice: "Your Maleficent energy means you take things personally and respond BIG. Consider that sometimes a slight isn't worth the curse. Save your dramatic energy for things that truly matter. And work on forgiveness - it's for you, not them."
    },
    queen: {
      type: "Evil Queen Energy",
      description: "Your villain energy is JEALOUS PERFECTIONISM. Like the Evil Queen, you can become obsessed with being the best/fairest/number one. Comparison is your poison apple. You might mask deep insecurity with an air of superiority. The mirror doesn't lie - but it also doesn't show everything.",
      traits: ["Comparative", "Perfectionistic", "Insecure beneath confidence", "Status-conscious"],
      advice: "Your Evil Queen energy means comparison is stealing your joy. Stop asking the mirror - you are enough. Work on celebrating others' success without it threatening yours. There's room for multiple 'fairest of them all.'"
    },
    ursula: {
      type: "Ursula Energy",
      description: "Your villain energy is SHREWD DEAL-MAKING. Like Ursula, you know how the world works and you work it back. You're transactional, clever, and always looking for leverage. You've been wronged and you're collecting what's owed. Poor unfortunate souls who cross you...",
      traits: ["Strategic", "Transactional", "Clever", "Grudge-collecting"],
      advice: "Your Ursula energy means you're smart about getting what you want, but watch for greed. Not everything is a deal to be won. Sometimes genuine connection without leverage is more valuable than any contract. Don't take someone's voice to win."
    },
    scar: {
      type: "Scar Energy",
      description: "Your villain energy is PATIENT SCHEMING. Like Scar, you're intelligent, underestimated, and waiting for your moment. You've watched others get what should have been yours and you've got plans. You're the villain who thinks ten moves ahead - dangerously clever.",
      traits: ["Strategic", "Patient", "Underestimated", "Long-term planner"],
      advice: "Your Scar energy means you're smart and capable but might feel overlooked. Instead of scheming your way to the top, try direct assertion. You don't have to wait in the shadows - your abilities are visible. Be careful about manipulating those who trust you."
    }
  }
};
