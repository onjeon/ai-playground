// Buổi Tối Của Bạn
// Khám phá tính cách qua cách bạn kết thúc ngày

export const questions = [
  {
    id: 1,
    question: "Bạn thường về nhà lúc mấy giờ?",
    options: [
      { text: "Trước 6 giờ tối, đúng giờ", type: "A" },
      { text: "6-7 giờ tối, bình thường", type: "B" },
      { text: "7-9 giờ tối, có việc thêm", type: "C" },
      { text: "Sau 9 giờ, OT hoặc đi chơi", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Điều đầu tiên bạn làm khi về nhà?",
    options: [
      { text: "Thay đồ, rửa mặt, thư giãn", type: "A" },
      { text: "Check điện thoại, trả lời tin nhắn", type: "B" },
      { text: "Ăn tối ngay, đói quá rồi", type: "C" },
      { text: "Nằm nghỉ, mệt quá", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bữa tối của bạn như thế nào?",
    options: [
      { text: "Tự nấu, healthy và tiết kiệm", type: "A" },
      { text: "Mua về ăn, tiện lợi", type: "B" },
      { text: "Đi ăn ngoài với bạn bè/gia đình", type: "C" },
      { text: "Ăn nhẹ hoặc không ăn, đang giảm cân", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có hay làm việc thêm ở nhà không?",
    options: [
      { text: "Không, công việc ở công ty thôi", type: "A" },
      { text: "Thỉnh thoảng, khi có deadline", type: "B" },
      { text: "Hay làm, khó tách rời công việc", type: "C" },
      { text: "Thường xuyên, work from home", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Buổi tối, bạn thường làm gì để giải trí?",
    options: [
      { text: "Xem phim, Netflix, YouTube", type: "A" },
      { text: "Chơi game, lướt mạng", type: "B" },
      { text: "Đọc sách, học thêm", type: "C" },
      { text: "Gọi điện/video call với người thân", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn có hay đi ra ngoài buổi tối không?",
    options: [
      { text: "Thường xuyên, đi cafe, gặp bạn", type: "A" },
      { text: "Thỉnh thoảng, khi có hẹn", type: "B" },
      { text: "Hiếm khi, thích ở nhà", type: "C" },
      { text: "Không, tối là để nghỉ ngơi", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Skincare routine buổi tối của bạn?",
    options: [
      { text: "Đầy đủ, nhiều bước", type: "A" },
      { text: "Cơ bản, rửa mặt và dưỡng", type: "B" },
      { text: "Chỉ rửa mặt thôi", type: "C" },
      { text: "Quên skincare, ngủ luôn", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn thường ăn gì vào buổi tối khuya?",
    options: [
      { text: "Không ăn khuya, không tốt cho sức khỏe", type: "A" },
      { text: "Snack nhẹ, hoa quả", type: "B" },
      { text: "Mì gói, đồ ăn nhanh", type: "C" },
      { text: "Đặt ship đồ ăn, coi như bữa chính", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có hay tập thể dục buổi tối không?",
    options: [
      { text: "Có, đi gym sau giờ làm", type: "A" },
      { text: "Thỉnh thoảng, yoga hoặc đi bộ", type: "B" },
      { text: "Hiếm khi, mệt rồi", type: "C" },
      { text: "Không, buổi tối là để nghỉ", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Buổi tối lý tưởng của bạn?",
    options: [
      { text: "Ở nhà chill, xem phim, thư giãn", type: "A" },
      { text: "Đi ăn, cafe với bạn bè", type: "B" },
      { text: "Học thêm, phát triển bản thân", type: "C" },
      { text: "Không làm gì cả, nằm rest", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Dân Chill Buổi Tối",
    emoji: "🌙",
    description: "Buổi tối là thời gian thư giãn của bạn! Bạn biết cách tách rời công việc và tận hưởng thời gian riêng. Xem phim, skincare, nghỉ ngơi... bạn tự thưởng cho mình sau một ngày dài.",
    traits: ["Cân bằng", "Self-care", "Thư giãn", "Biết hưởng thụ"],
    strengths: ["Work-life balance tốt", "Sức khỏe tinh thần ổn", "Ngủ ngon"],
    weaknesses: ["Có thể không productive tối", "Thỉnh thoảng lười vận động"],
    tips: ["Thêm hoạt động nhẹ như yoga", "Học thêm kỹ năng mới"],
  },
  B: {
    type: "B",
    title: "Social Butterfly Ban Đêm",
    emoji: "🦋",
    description: "Buổi tối là thời gian xã giao! Bạn thích đi ra ngoài, gặp gỡ bạn bè, ăn uống, cafe... Cuộc sống xã hội của bạn rất phong phú.",
    traits: ["Xã giao", "Năng động", "Thích gặp gỡ", "Vui vẻ"],
    strengths: ["Mối quan hệ tốt", "Cuộc sống phong phú", "Không cô đơn"],
    weaknesses: ["Có thể thiếu ngủ", "Tốn kém", "Ít thời gian cho bản thân"],
    tips: ["Dành thời gian ở nhà", "Ngủ đủ giấc"],
  },
  C: {
    type: "C",
    title: "Hustler Ban Đêm",
    emoji: "💪",
    description: "Buổi tối là thời gian hustle! Bạn làm việc thêm, học thêm, tập gym... Bạn không muốn lãng phí thời gian và luôn cố gắng phát triển bản thân.",
    traits: ["Chăm chỉ", "Tham vọng", "Self-improvement", "Productive"],
    strengths: ["Phát triển nhanh", "Học nhiều kỹ năng", "Không lãng phí thời gian"],
    weaknesses: ["Có thể burnout", "Thiếu thư giãn", "Ảnh hưởng sức khỏe"],
    tips: ["Cân bằng giữa làm việc và nghỉ ngơi", "Cho phép mình chill"],
  },
  D: {
    type: "D",
    title: "Người Nghỉ Ngơi Tuyệt Đối",
    emoji: "😴",
    description: "Buổi tối là để nghỉ ngơi tuyệt đối! Bạn về nhà là nằm, không làm gì cả. Cả ngày làm việc mệt rồi, tối cần recharge 100%.",
    traits: ["Cần nghỉ ngơi", "Mệt mỏi", "Introvert", "Cần năng lượng"],
    strengths: ["Nghỉ ngơi đầy đủ", "Recharge tốt"],
    weaknesses: ["Có thể thiếu vận động", "Ít hoạt động xã hội", "Bỏ lỡ cơ hội"],
    tips: ["Kiểm tra sức khỏe nếu mệt thường xuyên", "Thêm hoạt động nhẹ nhàng"],
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
