// Your Summer Vacation Style - Viral seasonal test for American English users

export const testData = {
  id: "seasonal-summer-vacation",
  title: "Your Summer Vacation Style",
  description: "Beach lounger or adventure seeker? What's your ultimate vacay vibe?",
  questions: [
    {
      id: 1,
      text: "Your dream summer vacation destination:",
      options: [
        { text: "Tropical beach with crystal clear water", type: "beach" },
        { text: "European city hopping with culture and history", type: "explorer" },
        { text: "Mountain retreat or national park adventure", type: "adventure" },
        { text: "Staycation - my couch is a destination", type: "homebody" }
      ]
    },
    {
      id: 2,
      text: "Your vacation planning style:",
      options: [
        { text: "Book the beach resort, everything else is optional", type: "beach" },
        { text: "Detailed itinerary with reservations and tickets", type: "explorer" },
        { text: "General direction, figure it out as we go", type: "adventure" },
        { text: "What planning? I'm staying home", type: "homebody" }
      ]
    },
    {
      id: 3,
      text: "Must-pack vacation item:",
      options: [
        { text: "Sunscreen, swimsuits, and beach reads", type: "beach" },
        { text: "Good walking shoes and a camera", type: "explorer" },
        { text: "Hiking boots and adventure gear", type: "adventure" },
        { text: "Nothing - my stuff is already at home", type: "homebody" }
      ]
    },
    {
      id: 4,
      text: "Your ideal vacation activity:",
      options: [
        { text: "Doing absolutely nothing by the water", type: "beach" },
        { text: "Museums, landmarks, local experiences", type: "explorer" },
        { text: "Hiking, water sports, outdoor activities", type: "adventure" },
        { text: "Sleeping in and having no obligations", type: "homebody" }
      ]
    },
    {
      id: 5,
      text: "Vacation food approach:",
      options: [
        { text: "Resort restaurants and tropical cocktails", type: "beach" },
        { text: "Local cuisine, food tours, must-try spots", type: "explorer" },
        { text: "Whatever fuels the adventure, trail mix included", type: "adventure" },
        { text: "My favorite local spots or delivery", type: "homebody" }
      ]
    },
    {
      id: 6,
      text: "Your vacation pace:",
      options: [
        { text: "Slow. Very slow. Hammock speed", type: "beach" },
        { text: "Active but with planned rest periods", type: "explorer" },
        { text: "Go go go! Maximize every moment!", type: "adventure" },
        { text: "No pace. No schedule. True freedom", type: "homebody" }
      ]
    },
    {
      id: 7,
      text: "The purpose of vacation is:",
      options: [
        { text: "Complete relaxation and escape", type: "beach" },
        { text: "Experiencing new places and cultures", type: "explorer" },
        { text: "Adventure and pushing my limits", type: "adventure" },
        { text: "Time off from everything, including travel", type: "homebody" }
      ]
    },
    {
      id: 8,
      text: "Your vacation photo style:",
      options: [
        { text: "Aesthetic beach shots, sunset vibes", type: "beach" },
        { text: "Landmarks, food, cultural experiences", type: "explorer" },
        { text: "Action shots from the top of mountains", type: "adventure" },
        { text: "Maybe a few cozy moments, if I remember", type: "homebody" }
      ]
    },
    {
      id: 9,
      text: "Coming back from vacation, you feel:",
      options: [
        { text: "Relaxed, tanned, and recharged", type: "beach" },
        { text: "Enriched and full of new experiences", type: "explorer" },
        { text: "Tired but accomplished and alive", type: "adventure" },
        { text: "I never left, so still relaxed", type: "homebody" }
      ]
    },
    {
      id: 10,
      text: "Your vacation budget priorities:",
      options: [
        { text: "Nice accommodations, everything else can be simple", type: "beach" },
        { text: "Experiences and activities over luxury", type: "explorer" },
        { text: "Gear and activity costs, basics for lodging", type: "adventure" },
        { text: "Minimal - staying home is basically free", type: "homebody" }
      ]
    }
  ],
  results: {
    beach: {
      type: "The Beach Lounger",
      description: "Vacation means one thing: RELAXATION. You want sand, sun, and absolutely no agenda. Your ideal day involves moving from pool to beach to hammock, with drinks appearing magically. You return home tan and restored. This is the way.",
      traits: ["Relaxation-focused", "Sun-seeker", "Low-key", "Beach-obsessed"],
      advice: "You've mastered the art of vacation! Just make sure you occasionally experience something beyond resort grounds. Maybe one local adventure? Then back to the beach. You've earned it."
    },
    explorer: {
      type: "The Culture Explorer",
      description: "Vacation is for EXPERIENCING. New cities, local culture, hidden gems, famous landmarks - you're making the most of every destination. Your itinerary is detailed, your walking shoes are broken in, and you're coming home with stories and memories.",
      traits: ["Curious", "Cultural", "Planned", "Experience-driven"],
      advice: "Your vacations are rich and meaningful! But schedule some downtime - you don't need to see EVERYTHING. Rest is part of vacation too. Maybe one unplanned day? Revolutionary concept."
    },
    adventure: {
      type: "The Adventure Seeker",
      description: "Why sit when you can CLIMB? Why relax when you can EXPLORE? Your vacations involve gear, guides, and probably some controlled danger. You want to push limits, see nature, and have stories that start with 'So there I was...'",
      traits: ["Active", "Thrill-seeking", "Outdoor-focused", "Adventurous"],
      advice: "Your vacations are epic! But remember that rest IS productive - your body needs recovery. Maybe one chill day between adventures? You'll perform better with some recharge time."
    },
    homebody: {
      type: "The Staycation King/Queen",
      description: "Why go anywhere when HOME exists? Your ideal vacation is time off from work spent exactly where you want to be - your own space. No airports, no packing, no tourist crowds. Just glorious unstructured time in your comfort zone.",
      traits: ["Home-loving", "Low-maintenance", "Comfortable", "Practical"],
      advice: "Staycations are valid! But occasionally leaving your comfort zone can be rewarding. Maybe one small trip this summer? Even if it's just a day trip. You might enjoy it. Or you'll confirm home is best. Either way, data!"
    }
  }
};
