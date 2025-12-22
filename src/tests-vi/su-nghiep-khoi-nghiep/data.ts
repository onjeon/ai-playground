// Phong Cách Khởi Nghiệp
// Khám phá phong cách startup và khởi nghiệp của bạn

export const questions = [
  {
    id: 1,
    question: "Ý tưởng khởi nghiệp của bạn đến từ đâu?",
    options: [
      { text: "Giải quyết vấn đề cá nhân gặp phải", type: "A" },
      { text: "Nghiên cứu thị trường, tìm cơ hội", type: "B" },
      { text: "Đam mê và sở thích cá nhân", type: "C" },
      { text: "Học hỏi từ mô hình thành công khác", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn muốn khởi nghiệp một mình hay với team?",
    options: [
      { text: "Một mình, tự quyết mọi thứ", type: "A" },
      { text: "Với co-founder có chuyên môn khác", type: "B" },
      { text: "Với bạn bè thân thiết", type: "C" },
      { text: "Tìm partner khi cần thiết", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Nguồn vốn khởi nghiệp bạn dự định?",
    options: [
      { text: "Bootstrap từ tiền tiết kiệm", type: "A" },
      { text: "Gọi vốn từ investor, VC", type: "B" },
      { text: "Vay từ gia đình, bạn bè", type: "C" },
      { text: "Làm dự án nhỏ, dùng lợi nhuận để grow", type: "D" },
    ],
  },
  {
    id: 4,
    question: "MVP (Minimum Viable Product) với bạn là gì?",
    options: [
      { text: "Sản phẩm đơn giản nhất để test", type: "A" },
      { text: "Sản phẩm có core feature hoàn chỉnh", type: "B" },
      { text: "Landing page và marketing", type: "C" },
      { text: "Prototype để pitch investor", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn xác nhận ý tưởng như thế nào?",
    options: [
      { text: "Phỏng vấn khách hàng tiềm năng", type: "A" },
      { text: "Nghiên cứu data và thị trường", type: "B" },
      { text: "Làm thử và xem phản hồi", type: "C" },
      { text: "Tin vào trực giác và vision", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi startup gặp khó khăn đầu tiên, bạn?",
    options: [
      { text: "Pivot nhanh sang hướng mới", type: "A" },
      { text: "Phân tích kỹ và tìm giải pháp", type: "B" },
      { text: "Hỏi mentor và cộng đồng", type: "C" },
      { text: "Kiên trì với vision ban đầu", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Metric quan trọng nhất với startup của bạn?",
    options: [
      { text: "Số lượng user/khách hàng", type: "A" },
      { text: "Doanh thu và lợi nhuận", type: "B" },
      { text: "Engagement và retention", type: "C" },
      { text: "Growth rate", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn tham gia các chương trình accelerator không?",
    options: [
      { text: "Có, để học hỏi và network", type: "A" },
      { text: "Có, để gọi vốn", type: "B" },
      { text: "Không, tự làm", type: "C" },
      { text: "Tùy chương trình phù hợp", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Work-life balance khi khởi nghiệp?",
    options: [
      { text: "Không có balance, all-in cho startup", type: "A" },
      { text: "Cố gắng giữ một số boundary", type: "B" },
      { text: "Quan trọng, không hy sinh sức khỏe", type: "C" },
      { text: "Tùy giai đoạn startup", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Exit strategy của bạn là gì?",
    options: [
      { text: "IPO hoặc bán cho công ty lớn", type: "A" },
      { text: "Xây dựng business bền vững, giữ mãi", type: "B" },
      { text: "Chưa nghĩ đến, tập trung hiện tại", type: "C" },
      { text: "Tùy cơ hội và thị trường", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn học hỏi về startup từ đâu?",
    options: [
      { text: "Sách, podcast về startup", type: "A" },
      { text: "Mentor, advisor có kinh nghiệm", type: "B" },
      { text: "Cộng đồng startup, event", type: "C" },
      { text: "Làm và học từ thất bại", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nếu startup thất bại, bạn?",
    options: [
      { text: "Bắt đầu startup mới ngay", type: "A" },
      { text: "Nghỉ ngơi, rút kinh nghiệm", type: "B" },
      { text: "Đi làm thuê để học thêm", type: "C" },
      { text: "Tìm co-founder mới và thử lại", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Serial Entrepreneur",
    emoji: "🚀",
    description: "Bạn là serial entrepreneur, không ngừng tìm kiếm ý tưởng mới! Bạn dám mạo hiểm, nhanh nhạy và luôn all-in cho startup. Bạn xem thất bại là bài học để thành công.",
    traits: ["Mạo hiểm", "Nhanh nhạy", "Kiên cường", "All-in"],
    strengths: ["Không sợ thất bại", "Nhanh nhạy với cơ hội", "Kinh nghiệm phong phú"],
    weaknesses: ["Có thể burn out", "Đôi khi thiếu focus"],
    tips: ["Chăm sóc sức khỏe", "Đôi khi hãy kiên nhẫn hơn với một ý tưởng"],
  },
  B: {
    type: "B",
    title: "Founder Chiến Lược",
    emoji: "🎯",
    description: "Bạn là founder có chiến lược và tầm nhìn xa! Bạn nghiên cứu kỹ thị trường, xây dựng team mạnh và hướng đến growth bền vững. Bạn thu hút được investor.",
    traits: ["Chiến lược", "Tầm nhìn", "Research-driven", "Professional"],
    strengths: ["Thu hút investor", "Team mạnh", "Growth bền vững"],
    weaknesses: ["Có thể quá cẩn thận", "Chậm launch"],
    tips: ["Đôi khi hãy ship nhanh hơn", "Done is better than perfect"],
  },
  C: {
    type: "C",
    title: "Passion Founder",
    emoji: "❤️",
    description: "Bạn khởi nghiệp từ đam mê và mong muốn tạo impact! Bạn coi trọng cộng đồng, mentor và học hỏi. Bạn muốn xây dựng thứ gì đó có ý nghĩa.",
    traits: ["Đam mê", "Impact-driven", "Community", "Học hỏi"],
    strengths: ["Động lực bền vững", "Có cộng đồng support", "Ý nghĩa trong công việc"],
    weaknesses: ["Có thể chậm tăng trưởng", "Khó khách quan"],
    tips: ["Cân bằng passion và business", "Học cách đọc số liệu"],
  },
  D: {
    type: "D",
    title: "Pragmatic Founder",
    emoji: "🧪",
    description: "Bạn là founder thực dụng và linh hoạt! Bạn không bám vào một cách làm, sẵn sàng pivot và thử nghiệm. Bạn học từ thực tế hơn là lý thuyết.",
    traits: ["Thực dụng", "Linh hoạt", "Thử nghiệm", "Thích nghi"],
    strengths: ["Nhanh nhạy với feedback", "Không sợ thay đổi", "Học từ thực tế"],
    weaknesses: ["Có thể thiếu định hướng rõ", "Khó thu hút investor"],
    tips: ["Xác định north star metric", "Có chiến lược dài hạn"],
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
