const fs = require('fs');
const path = require('path');

const testsDir = path.join(__dirname, 'src/tests-hi');

// Get all kareer-* directories
const kareerDirs = fs.readdirSync(testsDir)
  .filter(dir => dir.startsWith('kareer-'))
  .map(dir => path.join(testsDir, dir));

console.log(`Found ${kareerDirs.length} kareer tests to fix`);

kareerDirs.forEach(dirPath => {
  const indexPath = path.join(dirPath, 'index.ts');
  
  if (!fs.existsSync(indexPath)) {
    console.log(`Skipping ${dirPath} - no index.ts`);
    return;
  }
  
  const content = fs.readFileSync(indexPath, 'utf-8');
  
  // Check if it has the old format
  if (!content.includes("import { TestData }")) {
    console.log(`Skipping ${path.basename(dirPath)} - already correct format`);
    return;
  }
  
  // Parse the old format
  const testName = path.basename(dirPath);
  
  // Extract title
  const titleMatch = content.match(/title:\s*'([^']+)'/);
  const title = titleMatch ? titleMatch[1] : testName;
  
  // Extract description
  const descMatch = content.match(/description:\s*'([^']+)'/);
  const description = descMatch ? descMatch[1] : '';
  
  // Extract questions
  const questionsMatch = content.match(/questions:\s*\[([\s\S]*?)\],\s*results:/);
  let questions = [];
  
  if (questionsMatch) {
    const questionsStr = questionsMatch[1];
    // Parse each question
    const questionMatches = questionsStr.matchAll(/\{\s*id:\s*(\d+),\s*text:\s*'([^']+)',\s*options:\s*\[([\s\S]*?)\]\s*\}/g);
    
    for (const match of questionMatches) {
      const qId = parseInt(match[1]);
      const qText = match[2];
      const optionsStr = match[3];
      
      // Parse options
      const optionMatches = optionsStr.matchAll(/\{\s*text:\s*'([^']+)',\s*score:\s*\{\s*(\w):\s*\d+\s*\}\s*\}/g);
      const options = [];
      
      for (const optMatch of optionMatches) {
        options.push({
          text: optMatch[1],
          type: optMatch[2]
        });
      }
      
      questions.push({
        id: qId,
        question: qText,
        options: options
      });
    }
  }
  
  // Extract results
  const resultsMatch = content.match(/results:\s*\{([\s\S]*?)\}\s*\};/);
  let results = {};
  
  if (resultsMatch) {
    const resultsStr = resultsMatch[1];
    // Parse each result (A, B, C, D)
    const resultTypes = ['A', 'B', 'C', 'D'];
    
    for (const type of resultTypes) {
      const resultMatch = resultsStr.match(new RegExp(`${type}:\\s*\\{\\s*title:\\s*'([^']+)',\\s*description:\\s*'([^']+)',\\s*traits:\\s*\\[([^\\]]+)\\],\\s*advice:\\s*'([^']+)'\\s*\\}`));
      
      if (resultMatch) {
        const traits = resultMatch[3].split(',').map(t => t.trim().replace(/'/g, ''));
        results[type] = {
          type: type,
          title: resultMatch[1],
          emoji: type === 'A' ? '🌟' : type === 'B' ? '💼' : type === 'C' ? '📈' : '🎯',
          description: resultMatch[2],
          traits: traits.slice(0, 4),
          strengths: traits.slice(0, 2),
          weaknesses: ['सुधार की गुंजाइश', 'और development जरूरी'],
          tips: [resultMatch[4]]
        };
      }
    }
  }
  
  // Generate new format
  const newContent = `// ${title}
// Career Test - Hindi

export const questions = ${JSON.stringify(questions, null, 2).replace(/"(\w+)":/g, '$1:').replace(/"/g, "'")};

export const results = ${JSON.stringify(results, null, 2).replace(/"(\w+)":/g, '$1:').replace(/"/g, "'")};

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
`;

  fs.writeFileSync(indexPath, newContent);
  console.log(`Fixed: ${testName}`);
});

console.log('\nDone!');
