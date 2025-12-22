// Your Slack Personality - Viral career test for American English users

export const testData = {
  id: "career-slack-personality",
  title: "Your Slack Personality",
  description: "Your Slack habits say more about you than your resume. Let's find out who you really are in the digital office.",
  questions: [
    {
      id: 1,
      text: "Your typical Slack response time:",
      options: [
        { text: "Immediate. I'm always online", type: "alwayson" },
        { text: "Within a reasonable time frame", type: "normal" },
        { text: "When I get to it... eventually", type: "lurker" },
        { text: "Wait, someone messaged me?", type: "ghost" }
      ]
    },
    {
      id: 2,
      text: "Your emoji reaction game:",
      options: [
        { text: "I react to EVERYTHING. It's how I communicate", type: "alwayson" },
        { text: "Appropriate reactions for acknowledgment", type: "normal" },
        { text: "Occasional thumbs up when required", type: "lurker" },
        { text: "I don't think I've ever used one", type: "ghost" }
      ]
    },
    {
      id: 3,
      text: "How many Slack channels are you in?",
      options: [
        { text: "All of them. FOMO is real", type: "alwayson" },
        { text: "The ones relevant to my work, plus a few fun ones", type: "normal" },
        { text: "Just the required ones, everything else is muted", type: "lurker" },
        { text: "Honestly I don't even know, probably too many", type: "ghost" }
      ]
    },
    {
      id: 4,
      text: "Your status message situation:",
      options: [
        { text: "Updated regularly with what I'm doing", type: "alwayson" },
        { text: "Set to do not disturb when focusing", type: "normal" },
        { text: "Always empty or outdated", type: "lurker" },
        { text: "I didn't know you could set those", type: "ghost" }
      ]
    },
    {
      id: 5,
      text: "You have a question for a coworker. You:",
      options: [
        { text: "DM immediately - why wait?", type: "alwayson" },
        { text: "Check if it's urgent, then message appropriately", type: "normal" },
        { text: "Email them instead, Slack feels too immediate", type: "lurker" },
        { text: "Wait until I see them in a meeting", type: "ghost" }
      ]
    },
    {
      id: 6,
      text: "After-hours Slack messages from you:",
      options: [
        { text: "Happen often - I'm always thinking about work", type: "alwayson" },
        { text: "Scheduled for business hours to respect boundaries", type: "normal" },
        { text: "Very rare, I log off at 5", type: "lurker" },
        { text: "I don't even have Slack on my phone", type: "ghost" }
      ]
    },
    {
      id: 7,
      text: "In #random or social channels, you're:",
      options: [
        { text: "Super active - the life of the digital party", type: "alwayson" },
        { text: "Occasional participant when something's funny", type: "normal" },
        { text: "Silent observer, appreciating from afar", type: "lurker" },
        { text: "Didn't even know we had those", type: "ghost" }
      ]
    },
    {
      id: 8,
      text: "Your notification settings:",
      options: [
        { text: "All notifications, all the time", type: "alwayson" },
        { text: "Customized - DMs and mentions only", type: "normal" },
        { text: "Mostly muted, I check manually", type: "lurker" },
        { text: "I think I turned something off once and never looked back", type: "ghost" }
      ]
    },
    {
      id: 9,
      text: "A thread is blowing up with 50+ messages. You:",
      options: [
        { text: "Read every message and contribute thoughtfully", type: "alwayson" },
        { text: "Skim for key points and respond if needed", type: "normal" },
        { text: "Mark as read and move on", type: "lurker" },
        { text: "Didn't see it until someone @ mentioned me", type: "ghost" }
      ]
    },
    {
      id: 10,
      text: "How would your coworkers describe your Slack presence?",
      options: [
        { text: "They ALWAYS know when I'm online", type: "alwayson" },
        { text: "Responsive and professional", type: "normal" },
        { text: "Quiet but I surface when important", type: "lurker" },
        { text: "They're never sure if I actually work here", type: "ghost" }
      ]
    }
  ],
  results: {
    alwayson: {
      type: "The Slack Power User",
      description: "You ARE Slack. Every message, every emoji, every channel - you're there. Your green dot never sleeps. You know every thread, every joke, every drama. Some might call you 'too online' but you call it 'being connected.' You'd be lost without those notification sounds.",
      traits: ["Hyper-responsive", "Highly engaged", "Always visible", "Possibly needs a break"],
      advice: "Your engagement is impressive but maybe take a breath? Being always-on creates pressure on others and burns you out. Try scheduled Slack hours and let the green dot go dark sometimes. The messages will still be there."
    },
    normal: {
      type: "The Balanced Communicator",
      description: "You've figured out healthy Slack habits. Responsive but not obsessive. You use it as a tool, not a lifestyle. Your notifications are customized, your boundaries are clear, and you're a model of professional digital communication. Teach us your ways.",
      traits: ["Appropriately responsive", "Professionally engaged", "Healthy boundaries", "Functionally digital"],
      advice: "You're doing Slack right! Keep that balance and don't let increased pressure push you into always-on territory. Your approach is sustainable and healthy - protect it."
    },
    lurker: {
      type: "The Silent Observer",
      description: "You see everything but say nothing. You're in the channels, reading the threads, but rarely contributing. Your coworkers might forget you exist in Slack until you suddenly appear with a crucial message. You're the ninja of digital communication.",
      traits: ["Observant", "Minimal communication", "Low-key present", "Prefers deep work"],
      advice: "Lurking is valid, but visibility matters for career growth. Try engaging a bit more - even small contributions keep you visible and connected. You don't have to become a power user, just occasionally remind people you're alive."
    },
    ghost: {
      type: "The Slack Ghost",
      description: "Do you even work here? Your Slack presence is a mystery. Messages go unanswered for hours (days?), channels go unread, and your coworkers have learned to reach you through alternative means. You're not anti-social, you just exist on a different plane of digital communication.",
      traits: ["Practically invisible", "Unreachable", "Prefers other communication", "Mysterious"],
      advice: "In remote/hybrid work, Slack presence often equals work presence to managers. Your ghosting might be hurting your visibility and collaboration. Find a sustainable way to check in more regularly - your career might depend on it."
    }
  }
};
