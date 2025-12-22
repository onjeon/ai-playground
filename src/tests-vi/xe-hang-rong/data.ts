// Kiểu Mua Hàng Rong
// Khám phá tính cách của bạn qua cách mua hàng từ xe hàng rong

export const questions = [
  {
    id: 1,
    question: "Bạn thường mua gì từ xe hàng rong?",
    options: [
      { text: "Đồ ăn nóng - bánh mì, xôi, bánh bao", type: "A" },
      { text: "Trái cây cắt sẵn, nước ép", type: "B" },
      { text: "Đồ ăn vặt - bánh tráng, kẹo kéo", type: "C" },
      { text: "Mọi thứ, tùy cảm hứng", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn mua hàng rong vào lúc nào?",
    options: [
      { text: "Sáng sớm, lúc đi làm", type: "A" },
      { text: "Trưa, ăn nhanh giờ nghỉ", type: "B" },
      { text: "Chiều tối, ăn vặt xế", type: "C" },
      { text: "Bất cứ lúc nào thấy hấp dẫn", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi mua hàng rong, bạn thường?",
    options: [
      { text: "Mua nhanh, không trả giá", type: "A" },
      { text: "Hỏi giá trước, so sánh", type: "B" },
      { text: "Trả giá một chút cho vui", type: "C" },
      { text: "Nói chuyện với người bán", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có xe hàng rong quen không?",
    options: [
      { text: "Có, mua cố định mỗi ngày", type: "A" },
      { text: "Có vài xe quen tùy món", type: "B" },
      { text: "Không, mua lung tung", type: "C" },
      { text: "Có, thậm chí biết tên người bán", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Điều bạn thích ở xe hàng rong?",
    options: [
      { text: "Tiện lợi, nhanh gọn", type: "A" },
      { text: "Rẻ, tiết kiệm", type: "B" },
      { text: "Ngon, tươi mới", type: "C" },
      { text: "Không khí bình dân, gần gũi", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi xe hàng rong quen nghỉ bán, bạn?",
    options: [
      { text: "Tìm xe khác gần đó", type: "A" },
      { text: "Mua ở cửa hàng thay thế", type: "B" },
      { text: "Nhịn bữa đó, chờ ngày mai", type: "C" },
      { text: "Hỏi hàng xóm xem xe đi đâu", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có lo ngại về vệ sinh hàng rong không?",
    options: [
      { text: "Không, đã ăn quen rồi", type: "A" },
      { text: "Có chọn lọc xe sạch sẽ", type: "B" },
      { text: "Hơi lo nhưng vẫn ăn", type: "C" },
      { text: "Tin tưởng xe quen thuộc", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi thấy xe hàng rong mới, bạn?",
    options: [
      { text: "Đi qua, không quan tâm", type: "A" },
      { text: "Quan sát trước, lần sau mới mua", type: "B" },
      { text: "Thử ngay nếu hấp dẫn", type: "C" },
      { text: "Hỏi han, tìm hiểu rồi mua", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn thường trả tiền hàng rong như thế nào?",
    options: [
      { text: "Tiền mặt, chuẩn bị sẵn", type: "A" },
      { text: "Tiền mặt, lấy tiền thừa", type: "B" },
      { text: "Chuyển khoản nếu có QR", type: "C" },
      { text: "Kiểu gì cũng được", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Mua hàng rong về bạn thường?",
    options: [
      { text: "Ăn ngay tại chỗ hoặc trên đường", type: "A" },
      { text: "Mang về nhà/công ty ăn", type: "B" },
      { text: "Chia sẻ với người xung quanh", type: "C" },
      { text: "Vừa đi vừa ăn, thưởng thức", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Xe hàng rong với bạn là?",
    options: [
      { text: "Giải pháp ăn uống nhanh", type: "A" },
      { text: "Tiết kiệm chi tiêu", type: "B" },
      { text: "Ký ức tuổi thơ, văn hóa Việt", type: "C" },
      { text: "Nét đẹp cuộc sống đường phố", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nếu hàng rong bị cấm, bạn sẽ?",
    options: [
      { text: "Thích nghi, mua ở cửa hàng", type: "A" },
      { text: "Tiếc nuối nhưng chấp nhận", type: "B" },
      { text: "Rất buồn, mất một phần văn hóa", type: "C" },
      { text: "Tìm cách ủng hộ người bán hàng rong", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Mua Hàng Rong Thực Dụng",
    emoji: "⚡",
    description: "Bạn mua hàng rong vì sự tiện lợi và nhanh gọn! Cuộc sống bận rộn khiến bạn coi hàng rong như giải pháp hoàn hảo. Bạn là người thực tế, hiệu quả và biết tận dụng mọi cơ hội.",
    traits: ["Thực tế", "Nhanh gọn", "Hiệu quả", "Bận rộn"],
    strengths: ["Quản lý thời gian tốt", "Không cầu kỳ", "Thích nghi nhanh"],
    weaknesses: ["Đôi khi vội vàng", "Ít thời gian thưởng thức"],
    tips: ["Đôi khi hãy chậm lại", "Trò chuyện với người bán hàng"],
  },
  B: {
    type: "B",
    title: "Người Mua Hàng Rong Tiết Kiệm",
    emoji: "💰",
    description: "Bạn coi hàng rong là cách tiết kiệm thông minh! Bạn biết cách quản lý chi tiêu mà vẫn đảm bảo chất lượng. Bạn là người thông minh trong tài chính, có kế hoạch và biết tính toán.",
    traits: ["Tiết kiệm", "Thông minh", "Có kế hoạch", "Tính toán"],
    strengths: ["Quản lý tài chính tốt", "Biết giá trị đồng tiền", "Không lãng phí"],
    weaknesses: ["Đôi khi quá tiết kiệm", "Bỏ lỡ trải nghiệm"],
    tips: ["Đôi khi hãy tự thưởng cho mình", "Tiền nào của nấy"],
  },
  C: {
    type: "C",
    title: "Người Yêu Ẩm Thực Hàng Rong",
    emoji: "🍡",
    description: "Bạn yêu thích ẩm thực hàng rong vì hương vị đích thực! Bạn coi đây là một phần văn hóa Việt Nam cần được trân trọng. Bạn là người có gu, biết thưởng thức và trân trọng truyền thống.",
    traits: ["Có gu", "Trân trọng văn hóa", "Yêu ẩm thực", "Hoài cổ"],
    strengths: ["Biết thưởng thức", "Có kiến thức ẩm thực", "Trân trọng người bán"],
    weaknesses: ["Đôi khi lý tưởng hóa", "Khó chấp nhận thay đổi"],
    tips: ["Chấp nhận sự thay đổi của thời đại", "Chia sẻ tình yêu ẩm thực"],
  },
  D: {
    type: "D",
    title: "Người Kết Nối Qua Hàng Rong",
    emoji: "🤝",
    description: "Bạn coi hàng rong là cầu nối với cộng đồng! Bạn thích trò chuyện với người bán, biết câu chuyện của họ. Bạn là người thân thiện, gần gũi và coi trọng tình người.",
    traits: ["Thân thiện", "Gần gũi", "Coi trọng tình người", "Giao tiếp tốt"],
    strengths: ["Kết nối cộng đồng", "Hiểu cuộc sống người khác", "Được yêu mến"],
    weaknesses: ["Đôi khi mất thời gian", "Dễ bị nể"],
    tips: ["Cân bằng giữa giao tiếp và công việc", "Giữ ranh giới phù hợp"],
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
