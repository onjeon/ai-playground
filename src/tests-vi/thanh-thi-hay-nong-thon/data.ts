// Thành thị hay nông thôn
// Khám phá xem bạn hợp với cuộc sống thành thị hay nông thôn

export const questions = [
  {
    id: 1,
    question: "Buổi sáng lý tưởng của bạn là?",
    options: [
      { text: "Thức dậy với tiếng chuông báo thức, cà phê mang đi", type: "A" },
      { text: "Thức dậy với tiếng gà gáy, hít thở không khí trong lành", type: "B" },
      { text: "Ngủ dậy tự nhiên, không vội vàng", type: "C" },
      { text: "Tùy ngày, không có buổi sáng cố định", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thích ăn thực phẩm như thế nào?",
    options: [
      { text: "Đồ ăn tiện lợi, giao tận nơi", type: "A" },
      { text: "Rau sạch tự trồng, thịt tươi từ chợ", type: "B" },
      { text: "Tự nấu ăn ở nhà với nguyên liệu tốt", type: "C" },
      { text: "Ăn ngoài, thử nhiều món khác nhau", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Phương tiện di chuyển bạn thích?",
    options: [
      { text: "Ô tô, xe máy, Grab", type: "A" },
      { text: "Xe đạp, đi bộ", type: "B" },
      { text: "Tùy khoảng cách, cái nào tiện thì dùng", type: "C" },
      { text: "Phương tiện công cộng: xe buýt, tàu", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi cần mua đồ, bạn thường?",
    options: [
      { text: "Mua online, ship tận nhà", type: "A" },
      { text: "Ra chợ, trao đổi với người bán", type: "B" },
      { text: "Đi siêu thị, chọn lựa kỹ", type: "C" },
      { text: "Đi mall, vừa mua vừa chơi", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn thích không gian sống như thế nào?",
    options: [
      { text: "Căn hộ cao cấp, đầy đủ tiện nghi", type: "A" },
      { text: "Nhà vườn rộng rãi, có sân chơi", type: "B" },
      { text: "Nhà nhỏ ấm cúng, đủ dùng", type: "C" },
      { text: "Nhà có view đẹp, thiết kế hiện đại", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Quan hệ xã hội của bạn?",
    options: [
      { text: "Quen nhiều người nhưng thân với ít", type: "A" },
      { text: "Biết hết hàng xóm, hay giao lưu", type: "B" },
      { text: "Chỉ cần gia đình và vài người bạn thân", type: "C" },
      { text: "Network rộng, hay đi event", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Công việc lý tưởng của bạn?",
    options: [
      { text: "Văn phòng hiện đại, nhiều cơ hội thăng tiến", type: "A" },
      { text: "Làm gì cũng được, miễn gần nhà", type: "B" },
      { text: "Làm việc từ xa, linh hoạt", type: "C" },
      { text: "Công việc sáng tạo, không gò bó", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Cuối tuần bạn thường làm gì?",
    options: [
      { text: "Đi cafe, shopping, xem phim", type: "A" },
      { text: "Làm vườn, chăm cây, nấu ăn", type: "B" },
      { text: "Ở nhà nghỉ ngơi, xem phim", type: "C" },
      { text: "Du lịch, khám phá nơi mới", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn chịu được tiếng ồn không?",
    options: [
      { text: "Quen rồi, không thấy vấn đề gì", type: "A" },
      { text: "Thích yên tĩnh, tiếng ồn làm khó chịu", type: "B" },
      { text: "Tùy lúc, có lúc thích im lặng", type: "C" },
      { text: "Thích có âm thanh nền, không thích quá yên tĩnh", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi ốm, bạn thường làm gì?",
    options: [
      { text: "Đi bệnh viện, khám ngay", type: "A" },
      { text: "Uống thuốc nam, nghỉ ngơi tại nhà", type: "B" },
      { text: "Ra hiệu thuốc mua thuốc tự điều trị", type: "C" },
      { text: "Gọi bác sĩ đến nhà hoặc khám online", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn có thích nuôi thú cưng không?",
    options: [
      { text: "Thích nhưng không có điều kiện", type: "A" },
      { text: "Nuôi nhiều: gà, chó, mèo...", type: "B" },
      { text: "Nuôi một con nhỏ, dễ chăm", type: "C" },
      { text: "Không thích nuôi lắm", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều gì quan trọng nhất trong cuộc sống?",
    options: [
      { text: "Cơ hội và sự phát triển", type: "A" },
      { text: "Sự bình yên và gần gũi thiên nhiên", type: "B" },
      { text: "Gia đình và sức khỏe", type: "C" },
      { text: "Tự do và trải nghiệm", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người thành phố",
    emoji: "🏙️",
    description: "Bạn sinh ra để sống ở thành phố! Bạn yêu thích sự tiện nghi, cơ hội phát triển và nhịp sống năng động. Thành phố với đầy đủ dịch vụ và cơ hội là nơi bạn tỏa sáng.",
    traits: ["Năng động", "Hiện đại", "Tham vọng", "Linh hoạt"],
    strengths: ["Nhiều cơ hội", "Tiện nghi đầy đủ", "Kết nối tốt"],
    weaknesses: ["Dễ stress", "Thiếu không gian xanh", "Chi phí cao"],
    tips: ["Thỉnh thoảng hãy về quê thư giãn", "Cân bằng công việc và nghỉ ngơi"],
  },
  B: {
    type: "B",
    title: "Người quê hương",
    emoji: "🌾",
    description: "Bạn yêu thích cuộc sống nông thôn bình dị! Bạn trân trọng sự gần gũi với thiên nhiên, không khí trong lành và nhịp sống chậm rãi. Nông thôn là nơi bạn tìm thấy bình yên.",
    traits: ["Bình dị", "Gần gũi", "Thân thiện", "Chân chất"],
    strengths: ["Sức khỏe tốt", "Gắn kết cộng đồng", "Chi phí thấp"],
    weaknesses: ["Ít cơ hội", "Thiếu tiện nghi", "Xa trung tâm"],
    tips: ["Có thể kết hợp làm việc online", "Tận hưởng những gì nông thôn có"],
  },
  C: {
    type: "C",
    title: "Người cân bằng",
    emoji: "🏡",
    description: "Bạn thích sự cân bằng giữa thành thị và nông thôn. Bạn có thể sống ở ngoại ô, vừa gần thiên nhiên vừa có tiện nghi cơ bản. Bạn biết cách tận hưởng cả hai thế giới.",
    traits: ["Cân bằng", "Linh hoạt", "Thực tế", "Thích ứng"],
    strengths: ["Tận hưởng cả hai", "Không bị phụ thuộc", "Linh hoạt"],
    weaknesses: ["Đôi khi khó quyết định", "Không tận hưởng hết một nơi nào"],
    tips: ["Tìm nơi phù hợp nhất với mình", "Cân bằng là chìa khóa"],
  },
  D: {
    type: "D",
    title: "Người du mục",
    emoji: "🎒",
    description: "Bạn không thuộc về một nơi cố định. Bạn thích khám phá, trải nghiệm và không muốn bị ràng buộc bởi một địa điểm. Digital nomad có thể là lối sống phù hợp với bạn.",
    traits: ["Tự do", "Khám phá", "Độc lập", "Sáng tạo"],
    strengths: ["Nhiều trải nghiệm", "Tư duy mở", "Không bị giới hạn"],
    weaknesses: ["Thiếu ổn định", "Khó duy trì quan hệ", "Không có gốc rễ"],
    tips: ["Tìm điểm neo trong cuộc sống", "Cân bằng giữa tự do và ổn định"],
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
