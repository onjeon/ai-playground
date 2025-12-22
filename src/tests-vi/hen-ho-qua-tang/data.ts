// Phong cách tặng quà
// Khám phá cách bạn tặng quà cho người yêu

export const questions = [
  {
    id: 1,
    question: "Bạn thường tặng quà vào dịp nào?",
    options: [
      { text: "Chỉ những dịp đặc biệt: sinh nhật, kỷ niệm", type: "A" },
      { text: "Các dịp lễ lớn trong năm", type: "B" },
      { text: "Bất cứ khi nào muốn", type: "C" },
      { text: "Tặng thường xuyên, không cần dịp", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn chọn quà như thế nào?",
    options: [
      { text: "Theo sở thích và nhu cầu của họ", type: "A" },
      { text: "Những thứ mình nghĩ họ sẽ thích", type: "B" },
      { text: "Đồ đẹp, xu hướng, ai cũng thích", type: "C" },
      { text: "Tự làm tay hoặc quà có ý nghĩa riêng", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Ngân sách tặng quà của bạn?",
    options: [
      { text: "Có giới hạn cụ thể, không vượt quá", type: "A" },
      { text: "Tùy dịp, dịp lớn thì chi nhiều hơn", type: "B" },
      { text: "Không giới hạn nếu là quà ý nghĩa", type: "C" },
      { text: "Quà không cần đắt, quan trọng tấm lòng", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn thích tặng loại quà nào?",
    options: [
      { text: "Đồ thực dụng họ có thể dùng được", type: "A" },
      { text: "Đồ sang trọng: nước hoa, trang sức, túi xách", type: "B" },
      { text: "Trải nghiệm: vé xem show, du lịch", type: "C" },
      { text: "Quà handmade hoặc quà lưu niệm", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn có thích bất ngờ khi tặng quà không?",
    options: [
      { text: "Không, hỏi họ muốn gì rồi mua", type: "A" },
      { text: "Đôi khi, tùy thuộc món quà", type: "B" },
      { text: "Có, bất ngờ mới vui", type: "C" },
      { text: "Luôn bất ngờ, chuẩn bị kỹ lưỡng", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi không biết mua gì, bạn sẽ?",
    options: [
      { text: "Hỏi thẳng họ muốn gì", type: "A" },
      { text: "Tặng tiền hoặc voucher", type: "B" },
      { text: "Hỏi bạn bè họ gợi ý", type: "C" },
      { text: "Tìm hiểu qua social media của họ", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn gói quà như thế nào?",
    options: [
      { text: "Nhờ cửa hàng gói", type: "A" },
      { text: "Tự gói đơn giản", type: "B" },
      { text: "Tự gói thật đẹp, công phu", type: "C" },
      { text: "Tự thiết kế cách gói độc đáo", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Có nên tặng kèm thiệp tay không?",
    options: [
      { text: "Không cần thiết", type: "A" },
      { text: "Có thể, nếu là dịp đặc biệt", type: "B" },
      { text: "Có, luôn kèm theo thiệp", type: "C" },
      { text: "Luôn luôn, viết thật tình cảm", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Nếu họ không thích quà, bạn sẽ?",
    options: [
      { text: "Buồn và tự trách mình", type: "A" },
      { text: "Đổi cho họ món khác", type: "B" },
      { text: "Không sao, lần sau chọn kỹ hơn", type: "C" },
      { text: "Giải thích ý nghĩa của món quà", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn nghĩ gì về việc tặng hoa?",
    options: [
      { text: "Lãng phí, mau héo", type: "A" },
      { text: "Đẹp nhưng cần kèm quà khác", type: "B" },
      { text: "Luôn là lựa chọn tốt", type: "C" },
      { text: "Yêu thích, hoa rất lãng mạn", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn có hay nhớ những gì họ từng nói để mua quà không?",
    options: [
      { text: "Không để ý, hỏi lại khi cần", type: "A" },
      { text: "Có ghi nhớ một số thứ", type: "B" },
      { text: "Luôn ghi nhớ, để ý từng chi tiết", type: "C" },
      { text: "Có note lại để không quên", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Quà tặng thể hiện điều gì?",
    options: [
      { text: "Sự quan tâm và thực dụng", type: "A" },
      { text: "Sự đầu tư và nghiêm túc", type: "B" },
      { text: "Tình yêu và sự lãng mạn", type: "C" },
      { text: "Sự thấu hiểu và kết nối", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người tặng quà thực tế",
    emoji: "🎁",
    description: "Bạn tặng quà theo hướng thực dụng và hợp lý. Quà của bạn luôn có ích trong cuộc sống hàng ngày. Không hào nhoáng nhưng đầy ắp sự quan tâm.",
    traits: ["Thực tế", "Chu đáo", "Hợp lý", "Tiết kiệm"],
    strengths: ["Quà luôn được dùng", "Không lãng phí", "Hiểu nhu cầu người nhận"],
    weaknesses: ["Có thể thiếu lãng mạn", "Ít bất ngờ"],
    tips: ["Thêm chút lãng mạn vào quà", "Đôi khi tặng vì vui, không vì cần"],
  },
  B: {
    type: "B",
    title: "Người tặng quà đẳng cấp",
    emoji: "💎",
    description: "Bạn thích tặng những món quà sang trọng và có giá trị. Quà của bạn thể hiện sự đầu tư và nghiêm túc trong mối quan hệ.",
    traits: ["Sang trọng", "Đầu tư", "Có gu", "Nghiêm túc"],
    strengths: ["Gây ấn tượng mạnh", "Thể hiện sự nghiêm túc", "Quà có giá trị"],
    weaknesses: ["Chi phí cao", "Có thể gây áp lực"],
    tips: ["Quà nhỏ đôi khi cũng ý nghĩa", "Chú ý đến tấm lòng hơn giá trị"],
  },
  C: {
    type: "C",
    title: "Người tặng quà lãng mạn",
    emoji: "💐",
    description: "Bạn là người lãng mạn trong việc tặng quà. Thích tạo bất ngờ và những khoảnh khắc đáng nhớ. Quà của bạn luôn đi kèm với tình cảm.",
    traits: ["Lãng mạn", "Bất ngờ", "Tình cảm", "Chu đáo"],
    strengths: ["Tạo kỷ niệm đẹp", "Người nhận cảm động", "Thể hiện tình yêu"],
    weaknesses: ["Kỳ vọng cao", "Có thể thất vọng nếu không được đáp lại"],
    tips: ["Đừng kỳ vọng quá nhiều", "Tặng vì vui, không cần phải nhận lại"],
  },
  D: {
    type: "D",
    title: "Người tặng quà tâm huyết",
    emoji: "❤️",
    description: "Bạn đặt cả tâm hồn vào mỗi món quà. Từ việc ghi nhớ chi tiết nhỏ đến tự làm quà tay, mỗi món quà của bạn đều là tác phẩm nghệ thuật.",
    traits: ["Tâm huyết", "Tinh tế", "Thấu hiểu", "Sáng tạo"],
    strengths: ["Quà độc đáo", "Người nhận cảm thấy được thấu hiểu", "Kết nối sâu sắc"],
    weaknesses: ["Mất nhiều thời gian", "Đôi khi quá cầu kỳ"],
    tips: ["Đôi khi đơn giản cũng tốt", "Không cần hoàn hảo, cần tấm lòng"],
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
