// Công việc mơ ước
// Khám phá công việc phù hợp nhất với tính cách của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn thích làm việc với gì nhất?",
    options: [
      { text: "Con người - giao tiếp, giúp đỡ", type: "A" },
      { text: "Dữ liệu - phân tích, xử lý số", type: "B" },
      { text: "Ý tưởng - sáng tạo, đổi mới", type: "C" },
      { text: "Vật thể - tạo ra sản phẩm thực", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Điều gì quan trọng nhất trong công việc với bạn?",
    options: [
      { text: "Được giúp đỡ và tạo impact cho người khác", type: "A" },
      { text: "Được làm việc có logic và rõ ràng", type: "B" },
      { text: "Được tự do sáng tạo", type: "C" },
      { text: "Được thấy kết quả cụ thể từ công việc", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn học tốt nhất qua cách nào?",
    options: [
      { text: "Học từ người khác, qua trao đổi", type: "A" },
      { text: "Đọc sách, nghiên cứu tài liệu", type: "B" },
      { text: "Thử nghiệm, khám phá", type: "C" },
      { text: "Thực hành trực tiếp", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn thích môi trường làm việc như thế nào?",
    options: [
      { text: "Nhiều tương tác với người khác", type: "A" },
      { text: "Yên tĩnh để tập trung suy nghĩ", type: "B" },
      { text: "Năng động, đầy cảm hứng", type: "C" },
      { text: "Có không gian làm việc thực tế", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn giải quyết vấn đề như thế nào?",
    options: [
      { text: "Trao đổi với người khác để tìm ý kiến", type: "A" },
      { text: "Phân tích logic, tìm nguyên nhân gốc rễ", type: "B" },
      { text: "Brainstorm nhiều ý tưởng sáng tạo", type: "C" },
      { text: "Thử các giải pháp thực tế", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn thích loại dự án nào?",
    options: [
      { text: "Dự án liên quan đến cộng đồng, xã hội", type: "A" },
      { text: "Dự án nghiên cứu, phát triển hệ thống", type: "B" },
      { text: "Dự án sáng tạo, nghệ thuật", type: "C" },
      { text: "Dự án xây dựng, sản xuất", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Điểm mạnh của bạn là gì?",
    options: [
      { text: "Giao tiếp và kết nối với mọi người", type: "A" },
      { text: "Tư duy logic và phân tích", type: "B" },
      { text: "Sáng tạo và đổi mới", type: "C" },
      { text: "Kỹ năng thực hành và tỉ mỉ", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn muốn công việc mang lại gì?",
    options: [
      { text: "Cảm giác có ý nghĩa, giúp ích cho người khác", type: "A" },
      { text: "Thu nhập tốt và sự ổn định", type: "B" },
      { text: "Sự thú vị và không nhàm chán", type: "C" },
      { text: "Thành tựu và sản phẩm cụ thể", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn thích làm việc như thế nào?",
    options: [
      { text: "Làm việc nhóm, phối hợp với nhiều người", type: "A" },
      { text: "Làm việc độc lập, có quy trình rõ", type: "B" },
      { text: "Linh hoạt, không bị gò bó", type: "C" },
      { text: "Có mục tiêu cụ thể, đo lường được", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn thích ngành nào nhất?",
    options: [
      { text: "Giáo dục, Y tế, HR, Xã hội", type: "A" },
      { text: "IT, Tài chính, Nghiên cứu", type: "B" },
      { text: "Marketing, Thiết kế, Media", type: "C" },
      { text: "Kỹ thuật, Sản xuất, Kiến trúc", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn muốn được nhớ đến vì điều gì?",
    options: [
      { text: "Đã giúp đỡ và truyền cảm hứng cho người khác", type: "A" },
      { text: "Đã tạo ra hệ thống hoặc giải pháp hiệu quả", type: "B" },
      { text: "Đã tạo ra điều gì đó sáng tạo, độc đáo", type: "C" },
      { text: "Đã xây dựng hoặc tạo ra sản phẩm hữu ích", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nếu tiền không phải vấn đề, bạn sẽ làm gì?",
    options: [
      { text: "Làm từ thiện, giúp đỡ cộng đồng", type: "A" },
      { text: "Nghiên cứu, học hỏi điều mới", type: "B" },
      { text: "Theo đuổi đam mê nghệ thuật", type: "C" },
      { text: "Tạo ra sản phẩm, dự án riêng", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người kết nối - Social Connector",
    emoji: "👥",
    description: "Bạn phù hợp với công việc liên quan đến con người. Nghề như giáo viên, HR, tư vấn, bác sĩ, nhân viên xã hội sẽ cho bạn cảm giác có ý nghĩa và được giúp đỡ người khác.",
    traits: ["Giao tiếp tốt", "Empathy cao", "Thích giúp đỡ", "Kết nối"],
    strengths: ["Hiểu người khác", "Tạo môi trường tích cực", "Truyền cảm hứng"],
    weaknesses: ["Có thể quá quan tâm người khác", "Khó nói không"],
    tips: ["Giáo dục, Y tế, HR, Tư vấn, Xã hội", "Công việc tạo impact trực tiếp"],
  },
  B: {
    type: "B",
    title: "Người phân tích - Analytical Thinker",
    emoji: "📊",
    description: "Bạn phù hợp với công việc đòi hỏi tư duy logic và phân tích. Nghề như Data Analyst, Developer, Kế toán, Nghiên cứu khoa học sẽ cho bạn không gian để phát huy khả năng tư duy.",
    traits: ["Logic", "Phân tích", "Chi tiết", "Có hệ thống"],
    strengths: ["Giải quyết vấn đề phức tạp", "Tư duy rõ ràng", "Chính xác"],
    weaknesses: ["Có thể thiếu sáng tạo", "Khó giao tiếp cảm xúc"],
    tips: ["IT, Tài chính, Data, Nghiên cứu", "Công việc cần logic và hệ thống"],
  },
  C: {
    type: "C",
    title: "Người sáng tạo - Creative Mind",
    emoji: "🎨",
    description: "Bạn phù hợp với công việc sáng tạo, nghệ thuật. Nghề như Designer, Content Creator, Marketing, Photographer sẽ cho bạn không gian để thể hiện ý tưởng và sự độc đáo.",
    traits: ["Sáng tạo", "Độc đáo", "Nghệ thuật", "Tự do"],
    strengths: ["Ý tưởng mới", "Nhìn thấy cái đẹp", "Không theo khuôn mẫu"],
    weaknesses: ["Có thể thiếu thực tế", "Khó tuân thủ quy trình"],
    tips: ["Marketing, Design, Media, Nghệ thuật", "Công việc cho phép sáng tạo"],
  },
  D: {
    type: "D",
    title: "Người xây dựng - Practical Builder",
    emoji: "🔧",
    description: "Bạn phù hợp với công việc tạo ra sản phẩm cụ thể. Nghề như Kỹ sư, Kiến trúc sư, Đầu bếp, Thợ thủ công sẽ cho bạn cảm giác thành tựu khi thấy kết quả thực tế.",
    traits: ["Thực tế", "Tỉ mỉ", "Kỹ năng tay nghề", "Kết quả cụ thể"],
    strengths: ["Tạo ra sản phẩm thực", "Chi tiết và chính xác", "Thấy được thành quả"],
    weaknesses: ["Có thể thiếu linh hoạt", "Khó với công việc trừu tượng"],
    tips: ["Kỹ thuật, Sản xuất, Kiến trúc, Xây dựng", "Công việc tạo sản phẩm hữu hình"],
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
