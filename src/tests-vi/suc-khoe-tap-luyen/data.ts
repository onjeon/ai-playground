// Chế độ tập luyện
// Bài test đánh giá thói quen và chế độ tập luyện thể dục của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn tập thể dục bao nhiêu lần một tuần?",
    options: [
      { text: "5-7 lần, gần như mỗi ngày", type: "A" },
      { text: "3-4 lần một tuần", type: "B" },
      { text: "1-2 lần một tuần", type: "C" },
      { text: "Hiếm khi hoặc không tập", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Mỗi lần tập luyện của bạn kéo dài bao lâu?",
    options: [
      { text: "Hơn 1 tiếng", type: "A" },
      { text: "30-60 phút", type: "B" },
      { text: "15-30 phút", type: "C" },
      { text: "Dưới 15 phút hoặc không tập", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn thích hình thức tập luyện nào?",
    options: [
      { text: "Gym, tập tạ bài bản", type: "A" },
      { text: "Chạy bộ, bơi lội, thể thao", type: "B" },
      { text: "Yoga, đi bộ nhẹ nhàng", type: "C" },
      { text: "Không có hình thức cụ thể", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có mục tiêu tập luyện rõ ràng không?",
    options: [
      { text: "Có, với kế hoạch chi tiết", type: "A" },
      { text: "Có mục tiêu chung, duy trì sức khỏe", type: "B" },
      { text: "Không rõ ràng, tập khi có hứng", type: "C" },
      { text: "Không có mục tiêu", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn có thức dậy sớm để tập không?",
    options: [
      { text: "Có, tập buổi sáng là thói quen", type: "A" },
      { text: "Đôi khi, tùy lịch trình", type: "B" },
      { text: "Hiếm khi, thích ngủ hơn", type: "C" },
      { text: "Không bao giờ", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn đi bộ/leo cầu thang thay vì đi thang máy không?",
    options: [
      { text: "Luôn luôn, đó là cách tập luyện", type: "A" },
      { text: "Thường xuyên, nếu không quá cao", type: "B" },
      { text: "Đôi khi, khi khỏe", type: "C" },
      { text: "Hiếm khi, ưu tiên thang máy", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có theo dõi tiến độ tập luyện không?",
    options: [
      { text: "Có, dùng app/sổ ghi chép", type: "A" },
      { text: "Đôi khi kiểm tra cân nặng", type: "B" },
      { text: "Hiếm khi", type: "C" },
      { text: "Không bao giờ", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi bận việc, bạn có bỏ tập không?",
    options: [
      { text: "Không, vẫn sắp xếp thời gian", type: "A" },
      { text: "Đôi khi, nhưng bù lại ngày khác", type: "B" },
      { text: "Thường bỏ khi bận", type: "C" },
      { text: "Luôn có lý do để không tập", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có tập thể dục với bạn bè không?",
    options: [
      { text: "Có, tập nhóm tạo động lực", type: "A" },
      { text: "Đôi khi rủ bạn đi tập", type: "B" },
      { text: "Thích tập một mình hơn", type: "C" },
      { text: "Không có ai để tập cùng", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có khởi động trước khi tập không?",
    options: [
      { text: "Luôn khởi động đầy đủ", type: "A" },
      { text: "Thường khởi động nhanh", type: "B" },
      { text: "Đôi khi quên", type: "C" },
      { text: "Không bao giờ khởi động", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Sau khi tập, bạn cảm thấy thế nào?",
    options: [
      { text: "Rất thoải mái và tràn đầy năng lượng", type: "A" },
      { text: "Mệt nhưng vui vẻ", type: "B" },
      { text: "Mệt và không muốn tập nữa", type: "C" },
      { text: "Không nhớ lần cuối tập là khi nào", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn đánh giá chế độ tập luyện của mình thế nào?",
    options: [
      { text: "Rất tốt, đều đặn và hiệu quả", type: "A" },
      { text: "Khá tốt, cần duy trì", type: "B" },
      { text: "Cần cải thiện nhiều", type: "C" },
      { text: "Gần như không có", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Vận Động Viên Chăm Chỉ",
    emoji: "💪",
    description: "Bạn là người tập luyện chăm chỉ và có kỷ luật. Tập thể dục là một phần quan trọng trong cuộc sống của bạn và bạn có thể hình rất tốt.",
    traits: ["Kỷ luật", "Khỏe mạnh", "Năng động", "Có mục tiêu"],
    strengths: ["Sức khỏe tốt", "Năng lượng cao", "Tinh thần tích cực"],
    weaknesses: ["Đôi khi quá khắt khe", "Có thể tập quá sức"],
    tips: ["Nhớ nghỉ ngơi đầy đủ", "Cân bằng giữa tập luyện và cuộc sống"],
  },
  B: {
    type: "B",
    title: "Người Tập Cân Bằng",
    emoji: "🏃",
    description: "Bạn có chế độ tập luyện khá tốt, biết cân bằng giữa vận động và cuộc sống. Tiếp tục duy trì và có thể tăng cường thêm một chút.",
    traits: ["Cân bằng", "Có ý thức", "Linh hoạt", "Thực tế"],
    strengths: ["Duy trì được thói quen", "Cân bằng cuộc sống", "Không quá áp lực"],
    weaknesses: ["Có thể tăng cường độ", "Đôi khi thiếu nhất quán"],
    tips: ["Thử thêm bài tập mới", "Đặt mục tiêu cụ thể hơn"],
  },
  C: {
    type: "C",
    title: "Người Ít Vận Động",
    emoji: "🚶",
    description: "Bạn ít vận động và cần tăng cường hoạt động thể chất. Bắt đầu từ những bài tập nhẹ nhàng sẽ giúp bạn dần dần xây dựng thói quen.",
    traits: ["Ít vận động", "Cần cải thiện", "Thiếu động lực", "Ngồi nhiều"],
    strengths: ["Nhận thức được vấn đề"],
    weaknesses: ["Sức khỏe có thể bị ảnh hưởng", "Thiếu năng lượng"],
    tips: ["Bắt đầu với đi bộ 15 phút mỗi ngày", "Tìm hoạt động bạn thích"],
  },
  D: {
    type: "D",
    title: "Cần Bắt Đầu Ngay",
    emoji: "🛋️",
    description: "Bạn gần như không vận động và điều này có thể ảnh hưởng xấu đến sức khỏe. Đã đến lúc bắt đầu thay đổi thói quen sống của bạn.",
    traits: ["Không vận động", "Lười tập", "Cần thay đổi", "Ít năng lượng"],
    strengths: ["Có thể bắt đầu từ đầu"],
    weaknesses: ["Sức khỏe đang bị ảnh hưởng", "Thiếu năng lượng", "Rủi ro bệnh tật"],
    tips: ["Bắt đầu từ 5 phút đi bộ mỗi ngày", "Tìm một hoạt động bạn thích"],
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
