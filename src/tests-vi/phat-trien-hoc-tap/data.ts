// Phong Cách Học Tập Mới
// Khám phá phong cách học tập và tiếp thu kiến thức của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn thường học điều mới như thế nào?",
    options: [
      { text: "Xem video, tutorial trực quan", type: "A" },
      { text: "Đọc sách, tài liệu chi tiết", type: "B" },
      { text: "Thực hành, learning by doing", type: "C" },
      { text: "Tham gia khóa học có giảng viên", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Thời gian học tập hiệu quả nhất của bạn?",
    options: [
      { text: "Sáng sớm, đầu óc minh mẫn", type: "A" },
      { text: "Tối khuya, yên tĩnh", type: "B" },
      { text: "Giờ nghỉ trưa, tranh thủ", type: "C" },
      { text: "Bất cứ khi nào có cảm hứng", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn thường học ở đâu?",
    options: [
      { text: "Tại nhà, không gian quen thuộc", type: "A" },
      { text: "Thư viện, nơi yên tĩnh", type: "B" },
      { text: "Quán café, có chút noise", type: "C" },
      { text: "Bất cứ đâu, không quan trọng", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi học một chủ đề mới, bạn?",
    options: [
      { text: "Bắt đầu từ tổng quan, big picture", type: "A" },
      { text: "Đi từ cơ bản, từng bước", type: "B" },
      { text: "Nhảy vào làm luôn, học khi cần", type: "C" },
      { text: "Tìm người dạy, hướng dẫn", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn ghi nhớ kiến thức bằng cách nào?",
    options: [
      { text: "Ghi chép, mind map", type: "A" },
      { text: "Lặp lại nhiều lần", type: "B" },
      { text: "Thực hành và áp dụng", type: "C" },
      { text: "Dạy lại cho người khác", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi gặp khó khăn trong học tập, bạn?",
    options: [
      { text: "Tự nghiên cứu, tìm tài liệu", type: "A" },
      { text: "Hỏi thầy/cô, mentor", type: "B" },
      { text: "Hỏi bạn bè, cộng đồng online", type: "C" },
      { text: "Tạm bỏ qua, quay lại sau", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có kế hoạch học tập không?",
    options: [
      { text: "Có, lên lịch cụ thể", type: "A" },
      { text: "Có mục tiêu nhưng linh hoạt", type: "B" },
      { text: "Không, học theo cảm hứng", type: "C" },
      { text: "Có deadline thì mới học", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Nguồn học tập yêu thích của bạn?",
    options: [
      { text: "YouTube, TikTok educational", type: "A" },
      { text: "Sách, ebook, blog chuyên sâu", type: "B" },
      { text: "Khóa học online (Udemy, Coursera)", type: "C" },
      { text: "Podcast, audiobook", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn học một mình hay với nhóm?",
    options: [
      { text: "Một mình, tập trung hơn", type: "A" },
      { text: "Với nhóm, trao đổi và hỗ trợ", type: "B" },
      { text: "Tùy nội dung học", type: "C" },
      { text: "Có người dạy 1-1", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn đầu tư bao nhiêu cho học tập?",
    options: [
      { text: "Sẵn sàng chi nhiều cho khóa học tốt", type: "A" },
      { text: "Tìm tài liệu free trước", type: "B" },
      { text: "Chi vừa phải, tùy chất lượng", type: "C" },
      { text: "Học free là chính", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Sau khi học xong, bạn?",
    options: [
      { text: "Áp dụng ngay vào công việc/cuộc sống", type: "A" },
      { text: "Ôn tập và củng cố kiến thức", type: "B" },
      { text: "Chia sẻ với người khác", type: "C" },
      { text: "Chuyển sang học điều mới", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều gì thúc đẩy bạn học tập?",
    options: [
      { text: "Phát triển sự nghiệp, thăng tiến", type: "A" },
      { text: "Tò mò, muốn hiểu sâu hơn", type: "B" },
      { text: "Giải quyết vấn đề cụ thể", type: "C" },
      { text: "Không muốn tụt hậu", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Học Có Kế Hoạch",
    emoji: "📋",
    description: "Bạn là người học có kế hoạch và hệ thống! Bạn đặt mục tiêu rõ ràng, sắp xếp thời gian và theo dõi tiến độ. Bạn biết cách học hiệu quả và áp dụng ngay.",
    traits: ["Có kế hoạch", "Hệ thống", "Kỷ luật", "Thực hành"],
    strengths: ["Học hiệu quả", "Nhớ lâu", "Áp dụng được ngay"],
    weaknesses: ["Có thể quá cứng nhắc", "Thiếu linh hoạt"],
    tips: ["Đôi khi hãy học theo cảm hứng", "Khám phá các lĩnh vực mới"],
  },
  B: {
    type: "B",
    title: "Người Học Chuyên Sâu",
    emoji: "📚",
    description: "Bạn là người học coi trọng chiều sâu! Bạn không học qua loa, mà tìm hiểu kỹ lưỡng từ gốc rễ. Bạn yêu thích sách và tài liệu chuyên sâu.",
    traits: ["Chuyên sâu", "Kỹ lưỡng", "Kiên nhẫn", "Yêu kiến thức"],
    strengths: ["Hiểu sâu vấn đề", "Kiến thức vững chắc", "Có thể dạy người khác"],
    weaknesses: ["Có thể học chậm", "Mất nhiều thời gian"],
    tips: ["Đôi khi hãy 80/20", "Cân bằng giữa sâu và rộng"],
  },
  C: {
    type: "C",
    title: "Người Học Thực Hành",
    emoji: "🔧",
    description: "Bạn là người học bằng thực hành! Bạn tin rằng làm là cách học tốt nhất. Bạn không ngại sai lầm và học từ kinh nghiệm thực tế.",
    traits: ["Thực hành", "Learning by doing", "Không sợ sai", "Linh hoạt"],
    strengths: ["Áp dụng nhanh", "Kinh nghiệm thực tế", "Giải quyết vấn đề tốt"],
    weaknesses: ["Có thể thiếu nền tảng lý thuyết", "Học không có hệ thống"],
    tips: ["Bổ sung kiến thức lý thuyết", "Học từ sai lầm của người khác"],
  },
  D: {
    type: "D",
    title: "Người Học Linh Hoạt",
    emoji: "🦋",
    description: "Bạn là người học linh hoạt và đa dạng! Bạn học từ nhiều nguồn, theo nhiều cách và không bị gò bó. Bạn thích nghi tốt với mọi phương pháp học.",
    traits: ["Linh hoạt", "Đa dạng", "Thích nghi", "Sáng tạo"],
    strengths: ["Học từ mọi nguồn", "Không nhàm chán", "Thích nghi nhanh"],
    weaknesses: ["Có thể thiếu chiều sâu", "Dễ mất tập trung"],
    tips: ["Xây dựng hệ thống học tập", "Tập trung vào một vài lĩnh vực chính"],
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
