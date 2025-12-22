// Your Karaoke Personality - Viral entertainment test for American English users

export const testData = {
  id: "entertainment-karaoke-style",
  title: "Your Karaoke Personality",
  description: "Main character energy or 'please don't make me' vibes? Find your karaoke style!",
  questions: [
    {
      id: 1,
      text: "Someone suggests karaoke. Your reaction:",
      options: [
        { text: "I'M ALREADY PICKING MY SONGS", type: "star" },
        { text: "Fun! I'll need a few drinks first though", type: "tipsy" },
        { text: "I'll watch and support everyone else!", type: "supporter" },
        { text: "Please no. I'd rather do literally anything else", type: "avoider" }
      ]
    },
    {
      id: 2,
      text: "How many drinks before you'll sing?",
      options: [
        { text: "Zero. I'm ready NOW. Where's the mic?", type: "star" },
        { text: "A couple to loosen up and feel brave", type: "tipsy" },
        { text: "However many it takes to not care anymore", type: "supporter" },
        { text: "No amount of alcohol makes this okay", type: "avoider" }
      ]
    },
    {
      id: 3,
      text: "Your song choice strategy:",
      options: [
        { text: "I have a repertoire. Crowd-pleasers I KNOW I nail", type: "star" },
        { text: "Whatever feels fun in the moment, no pressure", type: "tipsy" },
        { text: "I don't choose songs. I cheer for others", type: "supporter" },
        { text: "N/A - I don't sing", type: "avoider" }
      ]
    },
    {
      id: 4,
      text: "On stage (if you get there), you're:",
      options: [
        { text: "PERFORMING. Eye contact, movement, the whole thing", type: "star" },
        { text: "Having fun, maybe dancing, not taking it seriously", type: "tipsy" },
        { text: "Nervous but might duet if someone drags me up", type: "supporter" },
        { text: "This is my nightmare. I'm never on that stage", type: "avoider" }
      ]
    },
    {
      id: 5,
      text: "Your actual singing ability:",
      options: [
        { text: "I'm pretty good! That's why I love karaoke", type: "star" },
        { text: "Decent? Better with enthusiasm than skill", type: "tipsy" },
        { text: "Not great, which is why I avoid the spotlight", type: "supporter" },
        { text: "Irrelevant - no one's hearing me sing", type: "avoider" }
      ]
    },
    {
      id: 6,
      text: "Someone hands you the mic unexpectedly:",
      options: [
        { text: "My moment! Let me show you how it's done", type: "star" },
        { text: "Okay okay! *nervous but starts singing*", type: "tipsy" },
        { text: "Pass it to literally anyone else", type: "supporter" },
        { text: "Physically leave the situation", type: "avoider" }
      ]
    },
    {
      id: 7,
      text: "Your karaoke genre preference:",
      options: [
        { text: "Power ballads and anthems that let me SHINE", type: "star" },
        { text: "Fun, easy stuff everyone knows and loves", type: "tipsy" },
        { text: "Whatever the group wants - I'm here for them", type: "supporter" },
        { text: "I don't have karaoke preferences. I don't karaoke", type: "avoider" }
      ]
    },
    {
      id: 8,
      text: "After your performance (hypothetically):",
      options: [
        { text: "When can I go again? I have more songs!", type: "star" },
        { text: "That was fun! Back to my drink", type: "tipsy" },
        { text: "Thank god that's over. I survived", type: "supporter" },
        { text: "N/A - didn't and won't perform", type: "avoider" }
      ]
    },
    {
      id: 9,
      text: "Your role in the karaoke group:",
      options: [
        { text: "The star. The one everyone watches", type: "star" },
        { text: "Participant who keeps the energy going", type: "tipsy" },
        { text: "Hype person and supportive audience member", type: "supporter" },
        { text: "The one who goes to get snacks during performances", type: "avoider" }
      ]
    },
    {
      id: 10,
      text: "Karaoke is:",
      options: [
        { text: "The best! My happy place! Pure joy!", type: "star" },
        { text: "Fun with the right crowd and right drinks", type: "tipsy" },
        { text: "Better to watch than participate in", type: "supporter" },
        { text: "A form of torture that people do voluntarily for some reason", type: "avoider" }
      ]
    }
  ],
  results: {
    star: {
      type: "The Karaoke Star",
      description: "You were BORN for this. The mic is your friend, the stage is your home, and you've got a catalog of songs you KNOW you can deliver. You're the person everyone wants at karaoke because you'll get up there, own it, and make it look fun. You probably have a signature song.",
      traits: ["Confident", "Performer", "Crowd-pleaser", "Entertaining"],
      advice: "Your karaoke energy is a gift! Keep bringing the joy. Just make sure you're also letting others have their moments - the karaoke star should elevate everyone, not just themselves. Keep shining!"
    },
    tipsy: {
      type: "The Liquid Courage Performer",
      description: "You're not naturally a karaoke person, but with the right social lubrication, you're GAME. A few drinks in, you're suddenly brave enough to grab the mic and have fun. You don't take it seriously and that's what makes it fun. Karaoke is for drunk singing, not talent shows.",
      traits: ["Social", "Fun-having", "Courage-needing", "Party participant"],
      advice: "Your approach is perfectly normal! Just know your limits - there's a sweet spot between 'brave enough' and 'too drunk to function.' Find your karaoke zone and enjoy it responsibly!"
    },
    supporter: {
      type: "The Hype Person",
      description: "You're karaoke's biggest fan - to watch. You LOVE cheering, clapping, singing along from your seat, and supporting everyone else's performances. But get you on stage? No thank you. You're the audience every performer needs, just not a performer yourself.",
      traits: ["Supportive", "Enthusiastic spectator", "Stage-shy", "Great audience"],
      advice: "Every karaoke needs people like you! But maybe try one group song with friends sometime - the pressure is distributed and it might be more fun than you expect. Or keep being the best audience member ever!"
    },
    avoider: {
      type: "The Karaoke Avoider",
      description: "Karaoke is your personal hell and you cannot be convinced otherwise. The idea of singing in front of people makes you want to disappear. You'll attend (maybe) but you're NOT participating. This is a boundary you maintain firmly.",
      traits: ["Stage-phobic", "Non-participant", "Firm boundaries", "Audience only"],
      advice: "Your feelings are valid! No one should be forced to karaoke. But if you're avoiding it from fear rather than preference, consider that no one actually cares if you're good. Or keep avoiding - that's okay too!"
    }
  }
};
