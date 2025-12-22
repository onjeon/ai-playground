// Thời gian làm việc
// Khám phá phong cách làm việc theo thời gian của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn làm việc hiệu quả nhất vào lúc nào?",
    options: [
      { text: "Sáng sớm, từ 6h-10h", type: "A" },
      { text: "Buổi trưa và chiều, 10h-18h", type: "B" },
      { text: "Buổi tối, từ 18h-22h", type: "C" },
      { text: "Đêm khuya, sau 22h", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thường thức dậy lúc mấy giờ?",
    options: [
      { text: "Trước 6h sáng", type: "A" },
      { text: "6h-8h sáng", type: "B" },
      { text: "8h-10h sáng", type: "C" },
      { text: "Sau 10h sáng", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn thường đi ngủ lúc mấy giờ?",
    options: [
      { text: "Trước 22h", type: "A" },
      { text: "22h-24h", type: "B" },
      { text: "0h-2h sáng", type: "C" },
      { text: "Sau 2h sáng", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi có deadline gấp, bạn thường?",
    options: [
      { text: "Dậy sớm làm từ sáng", type: "A" },
      { text: "Làm trong giờ hành chính", type: "B" },
      { text: "OT buổi tối", type: "C" },
      { text: "Thức đêm để hoàn thành", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn cảm thấy thế nào vào buổi sáng?",
    options: [
      { text: "Tỉnh táo, đầy năng lượng", type: "A" },
      { text: "Bình thường, cần chút thời gian", type: "B" },
      { text: "Mệt mỏi, cần cafe", type: "C" },
      { text: "Rất khó dậy, muốn ngủ tiếp", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Giờ nghỉ trưa của bạn thường như thế nào?",
    options: [
      { text: "Ăn nhanh, nghỉ ngơi hoặc đọc sách", type: "A" },
      { text: "Ăn cùng đồng nghiệp, nói chuyện", type: "B" },
      { text: "Nghỉ ngơi, ngủ trưa một chút", type: "C" },
      { text: "Tiếp tục làm việc, ăn tại bàn", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Cuối tuần bạn thường làm gì?",
    options: [
      { text: "Dậy sớm, tận dụng thời gian", type: "A" },
      { text: "Ngủ dậy bình thường, làm việc nhà", type: "B" },
      { text: "Ngủ bù, nghỉ ngơi", type: "C" },
      { text: "Thức khuya, dậy muộn", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn thích làm việc giờ nào trong ngày?",
    options: [
      { text: "Giờ hành chính cố định", type: "A" },
      { text: "Giờ linh hoạt theo ngày", type: "B" },
      { text: "Ca chiều tối", type: "C" },
      { text: "Ca đêm hoặc tự do", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi nào bạn sáng tạo nhất?",
    options: [
      { text: "Sáng sớm, đầu óc còn fresh", type: "A" },
      { text: "Sau bữa trưa, đã tỉnh táo", type: "B" },
      { text: "Buổi tối, khi mọi thứ yên tĩnh", type: "C" },
      { text: "Đêm khuya, không ai quấy rầy", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn uống cafe/trà lúc nào?",
    options: [
      { text: "Sáng sớm, bắt đầu ngày", type: "A" },
      { text: "Giữa buổi sáng hoặc chiều", type: "B" },
      { text: "Buổi chiều tối để tỉnh táo", type: "C" },
      { text: "Bất cứ lúc nào cần", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn có hay làm thêm giờ không?",
    options: [
      { text: "Ít khi, về đúng giờ", type: "A" },
      { text: "Thỉnh thoảng, khi cần thiết", type: "B" },
      { text: "Hay OT buổi tối", type: "C" },
      { text: "Thường xuyên làm đêm", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nếu được chọn, bạn muốn làm việc theo lịch nào?",
    options: [
      { text: "5h-14h, về sớm", type: "A" },
      { text: "9h-18h, tiêu chuẩn", type: "B" },
      { text: "12h-21h, dậy muộn", type: "C" },
      { text: "Tự do, làm bất cứ lúc nào", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Early Bird - Chim sớm bắt sâu",
    emoji: "🌅",
    description: "Bạn là người buổi sáng! Bạn tỉnh táo và hiệu quả nhất vào sáng sớm. Dậy sớm, làm việc sớm và có thời gian cho bản thân buổi chiều tối là phong cách của bạn.",
    traits: ["Dậy sớm", "Có kỷ luật", "Năng suất buổi sáng", "Ngủ sớm"],
    strengths: ["Tận dụng sáng yên tĩnh", "Có nhiều thời gian", "Khỏe mạnh"],
    weaknesses: ["Khó tham gia hoạt động tối", "Mệt khi thức khuya"],
    tips: ["Tận dụng ưu thế buổi sáng", "Sắp xếp việc quan trọng vào buổi sáng"],
  },
  B: {
    type: "B",
    title: "Day Worker - Người làm việc theo ngày",
    emoji: "☀️",
    description: "Bạn làm việc hiệu quả trong giờ hành chính tiêu chuẩn. Bạn cân bằng giữa công việc và cuộc sống, theo đúng nhịp sinh học tự nhiên của số đông.",
    traits: ["Cân bằng", "Tiêu chuẩn", "Ổn định", "Hòa nhập"],
    strengths: ["Dễ phối hợp với người khác", "Work-life balance", "Nhịp sinh học ổn định"],
    weaknesses: ["Có thể bị gián đoạn trong giờ làm", "Ít linh hoạt"],
    tips: ["Tối ưu thời gian trong ngày", "Tránh bị distract"],
  },
  C: {
    type: "C",
    title: "Afternoon Person - Người của buổi chiều tối",
    emoji: "🌆",
    description: "Bạn làm việc hiệu quả nhất vào buổi chiều và tối. Bạn cần thời gian để khởi động vào buổi sáng nhưng bùng nổ năng lượng khi chiều đến.",
    traits: ["Tỉnh táo buổi tối", "Sáng tạo về đêm", "Thức khuya", "Dậy muộn"],
    strengths: ["Yên tĩnh để tập trung", "Sáng tạo khi đêm xuống", "Làm việc sâu"],
    weaknesses: ["Khó họp sáng sớm", "Ngủ không đủ giấc"],
    tips: ["Sắp xếp công việc quan trọng vào chiều tối", "Quản lý giấc ngủ tốt"],
  },
  D: {
    type: "D",
    title: "Night Owl - Cú đêm",
    emoji: "🦉",
    description: "Bạn là cú đêm thực sự! Bạn sáng tạo và hiệu quả nhất khi đêm khuya, khi cả thế giới đã ngủ. Sự yên tĩnh của đêm là môi trường làm việc lý tưởng của bạn.",
    traits: ["Thức khuya", "Sáng tạo đêm", "Độc lập", "Tập trung cao"],
    strengths: ["Không ai quấy rầy", "Tập trung sâu", "Sáng tạo đỉnh cao"],
    weaknesses: ["Khó họp giờ hành chính", "Ảnh hưởng sức khỏe", "Khác biệt với số đông"],
    tips: ["Chú ý sức khỏe", "Tìm công việc phù hợp với lịch trình"],
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
