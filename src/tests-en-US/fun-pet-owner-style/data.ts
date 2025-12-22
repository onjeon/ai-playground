// What Kind of Pet Owner Are You? - Fun viral test

export const testData = {
  id: "fun-pet-owner-style",
  title: "What Kind of Pet Owner Are You?",
  description: "How do you treat your fur baby (or scale baby, or feather baby)? Let's see if your pet is spoiled or just really, really loved.",
  questions: [
    {
      id: 1,
      text: "Your pet's sleeping situation:",
      options: [
        { text: "In my bed, obviously. It's THEIR bed now", type: "spoiler" },
        { text: "Their own bed, but in my room so we're close", type: "balanced" },
        { text: "Designated pet area - boundaries are healthy", type: "practical" },
        { text: "Wherever they want. I don't control this creature", type: "chill" }
      ]
    },
    {
      id: 2,
      text: "How do you talk to your pet?",
      options: [
        { text: "Full conversations, multiple voices, complex emotions", type: "spoiler" },
        { text: "Normal talking with some baby voice moments", type: "balanced" },
        { text: "Commands and praise, keep it simple", type: "practical" },
        { text: "They seem to understand my vibe, words aren't necessary", type: "chill" }
      ]
    },
    {
      id: 3,
      text: "Your pet's birthday situation:",
      options: [
        { text: "Party, special cake, presents, possibly matching outfits", type: "spoiler" },
        { text: "Extra treats and maybe a new toy", type: "balanced" },
        { text: "I don't actually know their exact birthday", type: "practical" },
        { text: "They don't know it's their birthday, so why stress", type: "chill" }
      ]
    },
    {
      id: 4,
      text: "Your phone's camera roll is:",
      options: [
        { text: "95% pet photos, no regrets", type: "spoiler" },
        { text: "Plenty of pet pics mixed with life stuff", type: "balanced" },
        { text: "A few good ones for practical purposes", type: "practical" },
        { text: "Random candids when they do something funny", type: "chill" }
      ]
    },
    {
      id: 5,
      text: "Your pet is acting weird. You:",
      options: [
        { text: "Emergency vet NOW, googling symptoms, panicking", type: "spoiler" },
        { text: "Monitor them, call vet if it continues", type: "balanced" },
        { text: "Give it 24 hours, pets have off days too", type: "practical" },
        { text: "They're always weird, this is probably fine", type: "chill" }
      ]
    },
    {
      id: 6,
      text: "Pet food situation:",
      options: [
        { text: "Premium organic food, possibly fresh-made", type: "spoiler" },
        { text: "Quality brand recommended by vet", type: "balanced" },
        { text: "Reliable, affordable brand that works", type: "practical" },
        { text: "Whatever they seem to enjoy eating", type: "chill" }
      ]
    },
    {
      id: 7,
      text: "You're going on vacation. Your pet:",
      options: [
        { text: "Comes with me if at ALL possible", type: "spoiler" },
        { text: "Stays with trusted family/friend or quality sitter", type: "balanced" },
        { text: "Boarded at a reliable facility", type: "practical" },
        { text: "My neighbor will check on them, they're independent", type: "chill" }
      ]
    },
    {
      id: 8,
      text: "Your pet needs training. Your approach:",
      options: [
        { text: "I don't believe in 'training' - we communicate with love", type: "spoiler" },
        { text: "Positive reinforcement, consistency, patience", type: "balanced" },
        { text: "Clear rules and structure - they need to learn", type: "practical" },
        { text: "They'll figure it out eventually, I'm not stressed", type: "chill" }
      ]
    },
    {
      id: 9,
      text: "How much do you spend on your pet monthly?",
      options: [
        { text: "Don't ask. It's a lot. Worth it", type: "spoiler" },
        { text: "Reasonable amount for quality care", type: "balanced" },
        { text: "What's necessary - essentials covered", type: "practical" },
        { text: "Honestly haven't calculated, probably not much", type: "chill" }
      ]
    },
    {
      id: 10,
      text: "Someone asks 'Do you have kids?' and you have a pet. You say:",
      options: [
        { text: "YES, let me show you photos of my baby!", type: "spoiler" },
        { text: "A fur baby! *shows one or two pics*", type: "balanced" },
        { text: "No kids, but I have a pet", type: "practical" },
        { text: "Just an animal that lives with me", type: "chill" }
      ]
    }
  ],
  results: {
    spoiler: {
      type: "The Pet Parent Supreme",
      description: "Your pet is your child, your best friend, possibly your soulmate. They have more clothes than you, better health insurance, and their own Instagram. You've definitely said 'Mommy/Daddy will be back soon!' out loud. Your pet is so spoiled they probably don't even know they're an animal.",
      traits: ["Devoted", "Generous", "Obsessed", "Nurturing"],
      advice: "Your love is beautiful, but remember: your pet loves you even without the organic treats and matching pajamas. Also, they're probably fine for 8 hours - they're likely just sleeping and thinking about dinner."
    },
    balanced: {
      type: "The Loving Pet Guardian",
      description: "You've found the sweet spot between devoted pet parent and reasonable human. Your pet is well-cared for, loved, and probably has some cute accessories - but you haven't refinanced your house for their comfort. You're responsible AND fun. The vet loves you.",
      traits: ["Responsible", "Loving", "Balanced", "Sensible"],
      advice: "You're doing it right! Keep up the balance between spoiling and structure. Your pet is lucky to have someone who cares about their wellbeing without going overboard."
    },
    practical: {
      type: "The Practical Pet Owner",
      description: "You love your pet, but you're not losing your mind over it. They're fed, healthy, exercised, and loved - but they're also, you know, an animal. You believe in structure, appropriate boundaries, and not pretending your cat understands complex sentences. Very reasonable.",
      traits: ["Practical", "Structured", "No-nonsense", "Reliable"],
      advice: "Your practical approach is valid, but maybe let yourself be silly with your pet sometimes? They don't judge, and that ridiculous baby voice you're avoiding might actually help bonding. Let loose!"
    },
    chill: {
      type: "The Laid-Back Pet Person",
      description: "You've got a pet, they've got a life, everyone's coexisting peacefully. No stress, no drama, just easy companionship. Your pet is probably as chill as you are - independently happy and not requiring constant attention. Low-maintenance love is still love.",
      traits: ["Relaxed", "Easy-going", "Independent", "Unbothered"],
      advice: "Your chill energy probably makes you a great pet match for independent animals. Just make sure 'chill' doesn't become 'neglectful' - regular vet visits and attention are still important, even for self-sufficient pets."
    }
  }
};
