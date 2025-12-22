// Your Zoom Call Personality - Viral career test for American English users

export const testData = {
  id: "career-zoom-call-type",
  title: "Your Zoom Call Personality",
  description: "Camera on or off? Muted forever? Let's discover your video call persona!",
  questions: [
    {
      id: 1,
      text: "Your camera situation during calls:",
      options: [
        { text: "Always on, good lighting, professional background", type: "polished" },
        { text: "On most of the time, off when I'm eating or multitasking", type: "adaptable" },
        { text: "On only when absolutely required", type: "minimalist" },
        { text: "What camera? I'm just a floating name", type: "invisible" }
      ]
    },
    {
      id: 2,
      text: "Your Zoom background choice:",
      options: [
        { text: "My actual home office - tastefully arranged", type: "polished" },
        { text: "A nice virtual background or subtle blur", type: "adaptable" },
        { text: "Maximum blur to hide the chaos", type: "minimalist" },
        { text: "No one can see my background if my camera's off", type: "invisible" }
      ]
    },
    {
      id: 3,
      text: "Pre-meeting ritual:",
      options: [
        { text: "Quick mirror check, good lighting, test audio", type: "polished" },
        { text: "Make sure nothing embarrassing is visible", type: "adaptable" },
        { text: "Click the link 30 seconds before it starts", type: "minimalist" },
        { text: "Panic join while still figuring out if I'm presentable", type: "invisible" }
      ]
    },
    {
      id: 4,
      text: "Your mute button behavior:",
      options: [
        { text: "Unmuted and ready to engage", type: "polished" },
        { text: "Muted by default, unmute to speak", type: "adaptable" },
        { text: "Permanently muted unless directly addressed", type: "minimalist" },
        { text: "Wait, how do I unmute again?", type: "invisible" }
      ]
    },
    {
      id: 5,
      text: "During a boring meeting, you're actually:",
      options: [
        { text: "Staying engaged, nodding, taking notes", type: "polished" },
        { text: "Half listening while checking email on another screen", type: "adaptable" },
        { text: "Full-on multitasking with camera off", type: "minimalist" },
        { text: "Walking around my house, possibly making lunch", type: "invisible" }
      ]
    },
    {
      id: 6,
      text: "Someone asks you to share your screen. Your reaction:",
      options: [
        { text: "Ready! Desktop clean, tabs closed, prepared", type: "polished" },
        { text: "Quick close of personal tabs, then share", type: "adaptable" },
        { text: "Mild panic while closing 47 tabs", type: "minimalist" },
        { text: "I only know how to do this 50% of the time", type: "invisible" }
      ]
    },
    {
      id: 7,
      text: "Your video call outfit from the waist up:",
      options: [
        { text: "Proper work attire, camera-ready", type: "polished" },
        { text: "Presentable enough - nice shirt situation", type: "adaptable" },
        { text: "Whatever I was wearing when the call started", type: "minimalist" },
        { text: "No one will ever know because camera stays off", type: "invisible" }
      ]
    },
    {
      id: 8,
      text: "Technical difficulties during your presentation. You:",
      options: [
        { text: "Handle it smoothly with a backup plan ready", type: "polished" },
        { text: "Troubleshoot calmly while apologizing", type: "adaptable" },
        { text: "Panic quietly and ask someone to take over", type: "minimalist" },
        { text: "'Can everyone hear me? Is this working?'", type: "invisible" }
      ]
    },
    {
      id: 9,
      text: "Your participation style in group video calls:",
      options: [
        { text: "Active contributor with insightful comments", type: "polished" },
        { text: "Speak when I have something valuable to add", type: "adaptable" },
        { text: "Listen mostly, speak when directly asked", type: "minimalist" },
        { text: "Exist silently and hope no one notices me", type: "invisible" }
      ]
    },
    {
      id: 10,
      text: "The call ends. Your immediate action:",
      options: [
        { text: "Quick follow-up notes while everything's fresh", type: "polished" },
        { text: "Close the laptop and move on", type: "adaptable" },
        { text: "Sigh of relief that I survived", type: "minimalist" },
        { text: "Wonder if I was even needed in that meeting", type: "invisible" }
      ]
    }
  ],
  results: {
    polished: {
      type: "The Zoom Professional",
      description: "You treat every video call like it's a presentation to the CEO. Ring light? Check. Clean background? Check. Camera-ready outfit? Always. You're the person making everyone else feel underdressed. Your Zoom game is STRONG and you're probably going places (literally and figuratively).",
      traits: ["Polished", "Prepared", "Professional", "Camera-ready"],
      advice: "Your professionalism is impressive, but don't judge your camera-off colleagues too harshly. Not everyone has the setup (or energy) for peak Zoom performance. Keep being a pro, but maybe loosen up in casual meetings."
    },
    adaptable: {
      type: "The Flexible Caller",
      description: "You're camera-on when needed, camera-off when not. You read the room and adapt. Video calls are just part of work life, and you handle them without drama or excessive preparation. You're the normal, functional video call participant. Boring in the best way.",
      traits: ["Adaptable", "Balanced", "Professional enough", "Low-drama"],
      advice: "You've found a healthy middle ground! Keep reading the room and adapting. Your flexibility serves you well. Just make sure you're engaging enough in important calls where visibility matters."
    },
    minimalist: {
      type: "The Reluctant Participant",
      description: "Video calls are a necessary evil you endure. Camera goes on only when required, participation happens only when forced. You're not antisocial, you just think most meetings should've been emails. You're doing the bare minimum while still technically being present.",
      traits: ["Minimal effort", "Meeting-averse", "Prefers async", "Quietly suffering"],
      advice: "Your meeting skepticism is valid, but visibility on calls can matter for career growth. Try engaging a bit more in important meetings. You don't have to love it, but showing up fully (occasionally) makes a difference."
    },
    invisible: {
      type: "The Zoom Ghost",
      description: "Camera? Off. Mic? Muted. Presence? Theoretical. You're the black square with a name that may or may not be paying attention. You've mastered the art of being 'present' without actually being present. People sometimes forget you're even in the meeting.",
      traits: ["Invisible", "Possibly multitasking", "Camera-shy", "Meeting survivor"],
      advice: "Being invisible might feel comfortable, but it can hurt your career. People trust and promote people they can SEE and hear. Challenge yourself to turn on that camera sometimes - it might feel awkward but visibility matters."
    }
  }
};
