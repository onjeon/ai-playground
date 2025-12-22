// Cách đối mặt kẹt xe
// Khám phá cách bạn xử lý khi bị kẹt xe

export const questions = [
  {
    id: 1,
    question: "Khi bị kẹt xe, cảm xúc đầu tiên của bạn?",
    options: [
      { text: "Bình tĩnh, chấp nhận", type: "A" },
      { text: "Hơi khó chịu nhưng kiểm soát được", type: "B" },
      { text: "Bực bội, stress", type: "C" },
      { text: "Rất tức giận, muốn bấm còi", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thường làm gì khi kẹt xe?",
    options: [
      { text: "Nghe podcast, audiobook", type: "A" },
      { text: "Nghe nhạc, thư giãn", type: "B" },
      { text: "Lướt phone (khi dừng)", type: "C" },
      { text: "Bấm còi, tìm đường thoát", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Về việc đổi làn đường, bạn?",
    options: [
      { text: "Ở yên, đổi làn cũng không nhanh hơn", type: "A" },
      { text: "Đổi nếu thấy làn kia thông hơn", type: "B" },
      { text: "Liên tục đổi, tìm đường nhanh nhất", type: "C" },
      { text: "Chen làn, không quan tâm người khác", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi có người chen ngang, bạn?",
    options: [
      { text: "Nhường, không đáng để tranh chấp", type: "A" },
      { text: "Hơi khó chịu nhưng để đó", type: "B" },
      { text: "Không nhường, giữ vị trí", type: "C" },
      { text: "Tức giận, có thể đấu khẩu", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn có thường check Google Maps không?",
    options: [
      { text: "Luôn luôn, lên kế hoạch trước", type: "A" },
      { text: "Có, khi bắt đầu di chuyển", type: "B" },
      { text: "Thỉnh thoảng, khi thấy đông", type: "C" },
      { text: "Không, đi theo quen", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi sắp muộn giờ do kẹt xe, bạn?",
    options: [
      { text: "Nhắn tin/gọi điện báo trước", type: "A" },
      { text: "Lo lắng nhưng không làm gì được", type: "B" },
      { text: "Rất stress, cố gắng đi nhanh hơn", type: "C" },
      { text: "Tức giận, lái ẩu hơn", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn nghĩ gì về tình trạng kẹt xe?",
    options: [
      { text: "Bình thường, là một phần của cuộc sống đô thị", type: "A" },
      { text: "Khó chịu nhưng phải chấp nhận", type: "B" },
      { text: "Cần phải có giải pháp từ chính quyền", type: "C" },
      { text: "Không chịu được, ghét ra đường", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Để tránh kẹt xe, bạn?",
    options: [
      { text: "Đi sớm hơn 30-60 phút", type: "A" },
      { text: "Chọn giờ đi hợp lý", type: "B" },
      { text: "Tìm đường tắt, hẻm nhỏ", type: "C" },
      { text: "Không làm gì, kẹt thì kẹt", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có xem xét chuyển sang phương tiện khác không?",
    options: [
      { text: "Có, đã dùng xe buýt/metro", type: "A" },
      { text: "Đang cân nhắc", type: "B" },
      { text: "Không, vẫn thích xe riêng", type: "C" },
      { text: "Không có lựa chọn khác", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có hay bấm còi khi kẹt xe không?",
    options: [
      { text: "Không bao giờ, vô ích", type: "A" },
      { text: "Hiếm khi, chỉ khi cần thiết", type: "B" },
      { text: "Đôi khi, khi quá bực", type: "C" },
      { text: "Thường xuyên, để xả stress", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Kẹt xe ảnh hưởng đến mood cả ngày của bạn không?",
    options: [
      { text: "Không, quên ngay khi đến nơi", type: "A" },
      { text: "Hơi ảnh hưởng, nhưng kiểm soát được", type: "B" },
      { text: "Có, mất một lúc mới hết bực", type: "C" },
      { text: "Rất ảnh hưởng, cả ngày mất vui", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều gì giúp bạn bình tĩnh khi kẹt xe?",
    options: [
      { text: "Tư duy tích cực, chấp nhận", type: "A" },
      { text: "Nghe nhạc, podcast yêu thích", type: "B" },
      { text: "Nghĩ đến việc khác", type: "C" },
      { text: "Không có gì giúp được", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Thiền sư giao thông",
    emoji: "🧘",
    description: "Bạn là người cực kỳ bình tĩnh khi kẹt xe! Chấp nhận thực tế, tận dụng thời gian và không để kẹt xe ảnh hưởng đến tâm trạng. Đây là kỹ năng đáng ngưỡng mộ.",
    traits: ["Bình tĩnh", "Chấp nhận", "Kiên nhẫn", "Tích cực"],
    strengths: ["Sức khỏe tinh thần tốt", "Không stress", "Tận dụng thời gian tốt"],
    weaknesses: ["Đôi khi quá passive", "Có thể bị xem là thờ ơ"],
    tips: ["Chia sẻ cách giữ bình tĩnh với người khác", "Duy trì thói quen tốt"],
  },
  B: {
    type: "B",
    title: "Người đi đường thực tế",
    emoji: "🚗",
    description: "Bạn xử lý kẹt xe một cách thực tế và cân bằng. Có chút khó chịu nhưng biết kiểm soát và không để nó ảnh hưởng quá nhiều đến cuộc sống.",
    traits: ["Thực tế", "Cân bằng", "Kiểm soát", "Linh hoạt"],
    strengths: ["Không quá stress", "Biết cách đối phó", "Cân bằng cảm xúc"],
    weaknesses: ["Vẫn còn khó chịu", "Đôi khi mất kiên nhẫn"],
    tips: ["Tập thêm kỹ năng thư giãn", "Chuẩn bị giải trí khi kẹt xe"],
  },
  C: {
    type: "C",
    title: "Người dễ stress giao thông",
    emoji: "😤",
    description: "Kẹt xe là nguồn stress lớn với bạn. Bạn hay bực bội, tìm cách thoát ra và để tình trạng giao thông ảnh hưởng đến tâm trạng nhiều hơn cần thiết.",
    traits: ["Dễ stress", "Thiếu kiên nhẫn", "Chủ động", "Muốn kiểm soát"],
    strengths: ["Không thụ động", "Tìm giải pháp"],
    weaknesses: ["Stress cao", "Ảnh hưởng sức khỏe", "Có thể lái không an toàn"],
    tips: ["Tập hít thở sâu", "Chấp nhận những gì không kiểm soát được", "Đi sớm hơn"],
  },
  D: {
    type: "D",
    title: "Nạn nhân road rage",
    emoji: "🤬",
    description: "Kẹt xe biến bạn thành người khác! Dễ tức giận, bấm còi, chen lấn - bạn cần học cách kiểm soát cảm xúc khi tham gia giao thông.",
    traits: ["Dễ nổi nóng", "Thiếu kiên nhẫn", "Road rage", "Mất kiểm soát"],
    strengths: ["Thẳng thắn về cảm xúc"],
    weaknesses: ["Nguy hiểm khi lái xe", "Stress cao", "Có thể gây tai nạn"],
    tips: ["Học quản lý cơn giận", "Tránh giờ cao điểm", "Xem xét đi phương tiện công cộng"],
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
