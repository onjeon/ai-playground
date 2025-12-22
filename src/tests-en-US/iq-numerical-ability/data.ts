// Numerical Ability Test - Viral IQ test for American English users

export const testData = {
  id: "iq-numerical-ability",
  title: "Numerical Ability Test",
  description: "Are you a math whiz or does your brain freeze at numbers? Test your numerical intelligence!",
  questions: [
    {
      id: 1,
      text: "Quick! What's 15% of 80?",
      options: [
        { text: "12", type: "genius" },
        { text: "10", type: "average" },
        { text: "8", type: "developing" },
        { text: "I'd need a calculator", type: "developing" }
      ]
    },
    {
      id: 2,
      text: "A shirt is $60, discounted 30%, then another 10% off. Final price?",
      options: [
        { text: "$37.80", type: "genius" },
        { text: "$36.00", type: "strong" },
        { text: "$42.00", type: "average" },
        { text: "Way too much mental math", type: "developing" }
      ]
    },
    {
      id: 3,
      text: "If 5 machines make 5 products in 5 minutes, how long for 100 machines to make 100 products?",
      options: [
        { text: "5 minutes", type: "genius" },
        { text: "100 minutes", type: "developing" },
        { text: "20 minutes", type: "average" },
        { text: "1 minute", type: "developing" }
      ]
    },
    {
      id: 4,
      text: "Split a $127 bill evenly between 3 people. About how much each?",
      options: [
        { text: "$42.33", type: "genius" },
        { text: "$43 roughly", type: "strong" },
        { text: "$40 something", type: "average" },
        { text: "That's what Venmo is for", type: "developing" }
      ]
    },
    {
      id: 5,
      text: "A car travels 240 miles in 4 hours. What's the average speed?",
      options: [
        { text: "60 mph", type: "genius" },
        { text: "50 mph", type: "average" },
        { text: "80 mph", type: "developing" },
        { text: "I'd have to think about it", type: "developing" }
      ]
    },
    {
      id: 6,
      text: "What's larger: 3/7 or 5/12?",
      options: [
        { text: "3/7", type: "genius" },
        { text: "5/12", type: "average" },
        { text: "They're about the same", type: "strong" },
        { text: "No idea without converting them", type: "developing" }
      ]
    },
    {
      id: 7,
      text: "You invest $1000 with 10% annual interest. After 2 years (compound), you have approximately:",
      options: [
        { text: "$1,210", type: "genius" },
        { text: "$1,200", type: "strong" },
        { text: "$1,100", type: "developing" },
        { text: "Finance math hurts my brain", type: "developing" }
      ]
    },
    {
      id: 8,
      text: "Quick estimate: 498 × 7 is approximately:",
      options: [
        { text: "About 3,500", type: "genius" },
        { text: "Around 3,000", type: "strong" },
        { text: "Maybe 4,000?", type: "average" },
        { text: "I can't estimate this quickly", type: "developing" }
      ]
    },
    {
      id: 9,
      text: "A recipe serves 4. You need to serve 6. You multiply all ingredients by:",
      options: [
        { text: "1.5", type: "genius" },
        { text: "2", type: "average" },
        { text: "1.25", type: "developing" },
        { text: "I just eyeball it", type: "developing" }
      ]
    },
    {
      id: 10,
      text: "How comfortable are you calculating tips, taxes, and discounts mentally?",
      options: [
        { text: "Very comfortable - do it all the time", type: "genius" },
        { text: "Pretty good with common percentages", type: "strong" },
        { text: "I can do simple ones, need help for complex", type: "average" },
        { text: "I always use my phone calculator", type: "developing" }
      ]
    }
  ],
  results: {
    genius: {
      type: "Math Genius",
      description: "Numbers bow before you! Your numerical ability is exceptional - you can calculate quickly, estimate accurately, and handle complex math mentally. Finance, engineering, data science, and any quantitative field would be lucky to have your brain!",
      traits: ["Lightning calculations", "Strong estimation", "Mathematical intuition", "Number sense"],
      advice: "Your math brain is a major asset! Consider fields like finance, data science, or engineering where these skills are highly valued."
    },
    strong: {
      type: "Number Cruncher",
      description: "You've got solid numerical skills! Mental math doesn't scare you and you can handle most everyday calculations with confidence. You might not be the fastest, but you're accurate and capable.",
      traits: ["Reliable calculations", "Good estimation", "Practical math skills", "Numerical confidence"],
      advice: "Keep practicing mental math with daily exercises - you're close to genius level!"
    },
    average: {
      type: "Casual Calculator",
      description: "Numbers aren't your enemy, but they're not your best friend either! You can handle basic math but prefer a calculator for anything complex. This is totally normal - most people are in this category.",
      traits: ["Basic math comfort", "Calculator-assisted", "Practical numeracy", "Normal number sense"],
      advice: "Try mental math games and challenges to sharpen your skills. Even small daily practice makes a difference!"
    },
    developing: {
      type: "Words Over Numbers",
      description: "Math isn't your thing - and that's okay! Many successful people struggle with numbers but excel in other areas. You probably have strong verbal, creative, or interpersonal intelligence instead. That's what calculators and spreadsheets are for!",
      traits: ["Non-numerical intelligence", "Alternative strengths", "Tool-dependent math", "Other cognitive gifts"],
      advice: "No shame in using calculators! If you want to improve, start with practical math: tips, discounts, cooking measurements."
    }
  }
};
