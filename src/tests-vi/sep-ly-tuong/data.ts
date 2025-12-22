// Sếp lý tưởng
// Khám phá kiểu sếp phù hợp nhất với bạn

export const questions = [
  {
    id: 1,
    question: "Bạn muốn sếp giao việc như thế nào?",
    options: [
      { text: "Hướng dẫn chi tiết từng bước", type: "A" },
      { text: "Giao mục tiêu, để tự tìm cách làm", type: "B" },
      { text: "Thảo luận cùng và đưa ra phương án", type: "C" },
      { text: "Tin tưởng giao toàn quyền", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi bạn làm sai, bạn muốn sếp?",
    options: [
      { text: "Nhẹ nhàng góp ý, không la mắng", type: "A" },
      { text: "Nói thẳng để biết sửa ngay", type: "B" },
      { text: "Cùng phân tích nguyên nhân", type: "C" },
      { text: "Cho cơ hội tự nhận ra và sửa", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn thích sếp có tính cách như thế nào?",
    options: [
      { text: "Dễ gần, như anh chị trong nhà", type: "A" },
      { text: "Nghiêm túc nhưng công bằng", type: "B" },
      { text: "Thông minh, truyền cảm hứng", type: "C" },
      { text: "Tin tưởng nhân viên, ít kiểm soát", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn mong đợi gì từ sếp về sự nghiệp?",
    options: [
      { text: "Hướng dẫn, dạy bảo kinh nghiệm", type: "A" },
      { text: "Đánh giá công bằng, tăng lương xứng đáng", type: "B" },
      { text: "Tạo cơ hội phát triển, thăng tiến", type: "C" },
      { text: "Tôn trọng, ghi nhận đóng góp", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi có ý kiến khác sếp, bạn sẽ?",
    options: [
      { text: "Nghe theo sếp, họ có kinh nghiệm hơn", type: "A" },
      { text: "Nói ra ý kiến, nhưng tôn trọng quyết định cuối", type: "B" },
      { text: "Thảo luận để tìm ra giải pháp tốt nhất", type: "C" },
      { text: "Bảo vệ quan điểm nếu tin là đúng", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn thích sếp liên lạc như thế nào?",
    options: [
      { text: "Hỏi thăm thường xuyên, quan tâm", type: "A" },
      { text: "Khi cần thiết thôi", type: "B" },
      { text: "Họp định kỳ, rõ ràng về tiến độ", type: "C" },
      { text: "Ít liên lạc, tin tưởng nhân viên", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Điều gì khiến bạn khó chịu nhất ở sếp?",
    options: [
      { text: "La mắng, không tôn trọng", type: "A" },
      { text: "Thiên vị, không công bằng", type: "B" },
      { text: "Không có tầm nhìn, thiếu định hướng", type: "C" },
      { text: "Micromanage, kiểm soát quá chặt", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có muốn sếp quan tâm đến đời sống cá nhân không?",
    options: [
      { text: "Có, như người thân", type: "A" },
      { text: "Vừa phải, giữ ranh giới chuyên nghiệp", type: "B" },
      { text: "Quan tâm khi cần, không quá sâu", type: "C" },
      { text: "Không, tách biệt công việc và cá nhân", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi hoàn thành tốt, bạn muốn sếp?",
    options: [
      { text: "Khen ngợi, động viên trước mọi người", type: "A" },
      { text: "Thưởng xứng đáng (tiền, ngày nghỉ)", type: "B" },
      { text: "Giao thêm trách nhiệm, thử thách mới", type: "C" },
      { text: "Ghi nhận và tin tưởng hơn", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn thích sếp quyết định như thế nào?",
    options: [
      { text: "Quyết đoán, rõ ràng", type: "A" },
      { text: "Công bằng, minh bạch", type: "B" },
      { text: "Lắng nghe ý kiến rồi quyết định", type: "C" },
      { text: "Để nhân viên tự quyết định trong phạm vi", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Sếp lý tưởng với bạn là người?",
    options: [
      { text: "Bảo vệ nhân viên, như mentor", type: "A" },
      { text: "Công bằng và thưởng phạt rõ ràng", type: "B" },
      { text: "Tầm nhìn xa, dẫn dắt team phát triển", type: "C" },
      { text: "Trao quyền và tin tưởng nhân viên", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn sẽ theo sếp nếu họ chuyển công ty không?",
    options: [
      { text: "Có, nếu sếp tốt với mình", type: "A" },
      { text: "Tùy offer mới có tốt không", type: "B" },
      { text: "Có, nếu có cơ hội phát triển tốt hơn", type: "C" },
      { text: "Không, mình tự tìm cơ hội riêng", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Sếp mentor - Người dẫn dắt",
    emoji: "👨‍🏫",
    description: "Bạn cần sếp như một mentor, dẫn dắt và bảo vệ bạn. Sếp này quan tâm, hướng dẫn tận tình và tạo cảm giác an toàn. Bạn cần được chỉ dẫn để phát triển.",
    traits: ["Quan tâm", "Hướng dẫn", "Bảo vệ", "Dễ gần"],
    strengths: ["Học hỏi được nhiều", "Cảm thấy được hỗ trợ", "Phát triển vững chắc"],
    weaknesses: ["Có thể phụ thuộc sếp", "Khó độc lập"],
    tips: ["Dần dần tự tin hơn", "Học cách tự quyết định"],
  },
  B: {
    type: "B",
    title: "Sếp công bằng - Người đánh giá",
    emoji: "⚖️",
    description: "Bạn cần sếp công bằng, minh bạch và đánh giá dựa trên năng lực. Sếp này không thiên vị, thưởng phạt rõ ràng và tạo động lực bằng sự công nhận xứng đáng.",
    traits: ["Công bằng", "Minh bạch", "Thực tế", "Chuyên nghiệp"],
    strengths: ["Được đánh giá đúng", "Động lực rõ ràng", "Môi trường cạnh tranh lành mạnh"],
    weaknesses: ["Có thể thiếu kết nối cá nhân", "Áp lực thành tích"],
    tips: ["Chủ động chứng minh năng lực", "Đừng quên xây dựng quan hệ"],
  },
  C: {
    type: "C",
    title: "Sếp visionary - Người truyền cảm hứng",
    emoji: "🚀",
    description: "Bạn cần sếp có tầm nhìn, truyền cảm hứng và dẫn dắt team đến những mục tiêu lớn. Sếp này giỏi, thông minh và khiến bạn muốn phát triển hơn nữa.",
    traits: ["Tầm nhìn", "Thông minh", "Truyền cảm hứng", "Lãnh đạo"],
    strengths: ["Được học hỏi từ người giỏi", "Có định hướng rõ ràng", "Phát triển nhanh"],
    weaknesses: ["Có thể áp lực cao", "Kỳ vọng lớn"],
    tips: ["Theo kịp nhịp độ", "Học hỏi tư duy của sếp"],
  },
  D: {
    type: "D",
    title: "Sếp trao quyền - Người tin tưởng",
    emoji: "🔓",
    description: "Bạn cần sếp tin tưởng và trao quyền cho bạn. Sếp này ít kiểm soát, để bạn tự do làm việc theo cách của mình và chỉ hỗ trợ khi cần.",
    traits: ["Tin tưởng", "Trao quyền", "Tôn trọng", "Độc lập"],
    strengths: ["Tự do sáng tạo", "Phát triển sự tự tin", "Làm việc theo cách mình"],
    weaknesses: ["Có thể thiếu hướng dẫn", "Phải tự chịu trách nhiệm hoàn toàn"],
    tips: ["Chứng minh sự đáng tin cậy", "Chủ động hỏi khi cần hỗ trợ"],
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
