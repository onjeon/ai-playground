// Your Christmas Spirit Level - Viral seasonal test for American English users

export const testData = {
  id: "seasonal-christmas-spirit",
  title: "Your Christmas Spirit Level",
  description: "Buddy the Elf energy or Grinch mode? Let's measure your Christmas spirit!",
  questions: [
    {
      id: 1,
      text: "When do Christmas songs become acceptable?",
      options: [
        { text: "Year-round honestly, but November 1st officially", type: "elf" },
        { text: "After Thanksgiving is reasonable", type: "merry" },
        { text: "December only. I have standards", type: "moderate" },
        { text: "They're never truly 'acceptable'", type: "grinch" }
      ]
    },
    {
      id: 2,
      text: "Your Christmas decorating approach:",
      options: [
        { text: "Clark Griswold would be proud. Go BIG", type: "elf" },
        { text: "Nice tree, lights, the traditional stuff", type: "merry" },
        { text: "Minimal tasteful touches. Less is more", type: "moderate" },
        { text: "What decorations? It's temporary", type: "grinch" }
      ]
    },
    {
      id: 3,
      text: "Holiday shopping style:",
      options: [
        { text: "Started in August. Thoughtful gifts for everyone!", type: "elf" },
        { text: "November/December, nice mix of thought and convenience", type: "merry" },
        { text: "Mostly gift cards. Efficient and appreciated", type: "moderate" },
        { text: "Last minute, if at all. Maybe cash", type: "grinch" }
      ]
    },
    {
      id: 4,
      text: "Your Hallmark movie situation:",
      options: [
        { text: "I watch ALL of them. Unironically. Don't judge me", type: "elf" },
        { text: "A few favorites I watch every year", type: "merry" },
        { text: "One or two if I'm in the mood", type: "moderate" },
        { text: "I'd rather do literally anything else", type: "grinch" }
      ]
    },
    {
      id: 5,
      text: "Wearing holiday-themed clothing:",
      options: [
        { text: "Light-up sweaters, Christmas earrings, the whole thing", type: "elf" },
        { text: "Festive colors and maybe a fun sweater", type: "merry" },
        { text: "Red or green is as festive as I get", type: "moderate" },
        { text: "I refuse to participate in holiday costumery", type: "grinch" }
      ]
    },
    {
      id: 6,
      text: "The obligatory holiday party at work:",
      options: [
        { text: "I'm organizing it and bringing homemade treats!", type: "elf" },
        { text: "Fun! I enjoy the festive break from work", type: "merry" },
        { text: "I'll go, make an appearance, leave early", type: "moderate" },
        { text: "Sudden urgent deadline conveniently appeared", type: "grinch" }
      ]
    },
    {
      id: 7,
      text: "Your feelings about holiday family gatherings:",
      options: [
        { text: "THE BEST! I love seeing everyone!", type: "elf" },
        { text: "Generally nice, some stress but worth it", type: "merry" },
        { text: "Obligatory but manageable in small doses", type: "moderate" },
        { text: "Actively looking for excuses to skip", type: "grinch" }
      ]
    },
    {
      id: 8,
      text: "Snow on Christmas:",
      options: [
        { text: "ESSENTIAL. I'm manifesting it right now", type: "elf" },
        { text: "Would be nice! Very picturesque", type: "merry" },
        { text: "As long as I don't have to drive in it", type: "moderate" },
        { text: "Just another weather inconvenience", type: "grinch" }
      ]
    },
    {
      id: 9,
      text: "Christmas morning energy:",
      options: [
        { text: "Up at dawn, ready for MAGIC!", type: "elf" },
        { text: "Excited! Coffee first, then presents", type: "merry" },
        { text: "I'll get up when I'm ready, thanks", type: "moderate" },
        { text: "It's just another morning honestly", type: "grinch" }
      ]
    },
    {
      id: 10,
      text: "How long does Christmas joy last for you?",
      options: [
        { text: "The whole season and the memories all year!", type: "elf" },
        { text: "From early December through New Year's", type: "merry" },
        { text: "A few nice moments on actual Christmas day", type: "moderate" },
        { text: "Joy? That's generous. Relief when it's over", type: "grinch" }
      ]
    }
  ],
  results: {
    elf: {
      type: "Buddy the Elf Level",
      description: "SANTA!! OH MY GOD!! You love Christmas like Buddy loves syrup on spaghetti - excessively and with your whole heart. Decorations go up early, stay up late, and your holiday spirit is weaponized joy. You make Christmas magical for everyone around you (whether they asked for it or not).",
      traits: ["Joyful", "Enthusiastic", "Extra", "Contagiously festive"],
      advice: "Never lose this energy! But maybe read the room occasionally - not everyone operates at your Christmas wavelength. Your joy is a gift, just dose it appropriately for the audience."
    },
    merry: {
      type: "Healthy Holiday Spirit",
      description: "You've got the right amount of Christmas spirit - festive and fun without being overwhelming. You enjoy the traditions, participate happily, and spread reasonable amounts of holiday cheer. You're the balanced Christmas celebrator we all aspire to be.",
      traits: ["Balanced", "Festive", "Tradition-loving", "Appropriately merry"],
      advice: "You've cracked the code! Maybe let yourself go a little extra one year? Your restraint is admirable but occasionally going full elf mode can be fun. You've earned it."
    },
    moderate: {
      type: "Selective Celebrator",
      description: "You participate in Christmas on your terms. Some traditions are nice, excessive festivity is not. You'll show up, maybe enjoy a moment or two, and appreciate that it ends. You're not anti-Christmas, you're just... measured about it.",
      traits: ["Selective", "Practical", "Low-key", "Boundary-setting"],
      advice: "Your approach is valid! But maybe open yourself to one new Christmas experience this year. You might find unexpected joy. Or you'll confirm your suspicions. Either way, data collected."
    },
    grinch: {
      type: "Maximum Grinch Mode",
      description: "Christmas? In THIS economy? You're not here for the forced cheer, the commercial madness, or pretending to enjoy activities you don't. Your heart might not be two sizes too small - maybe the holiday is just... a lot. And that's a fair assessment.",
      traits: ["Realistic", "Non-conformist", "Holiday-resistant", "Honest"],
      advice: "Before you steal Christmas, consider what you actually WOULD enjoy about December. Maybe it's not the commercial stuff - maybe it's quiet, or rest, or one person you like. Find your version. Or don't - Grinch mode is valid too."
    }
  }
};
