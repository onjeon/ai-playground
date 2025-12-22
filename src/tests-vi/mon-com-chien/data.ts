// Kiểu Ăn Cơm Chiên
// Khám phá tính cách qua cách bạn thưởng thức món cơm chiên

export const questions = [
  {
    id: 1,
    question: "Loại cơm chiên bạn yêu thích nhất là:",
    options: [
      { text: "Cơm chiên Dương Châu - nhiều topping", type: "A" },
      { text: "Cơm chiên trứng - đơn giản, thân thuộc", type: "B" },
      { text: "Cơm chiên hải sản - sang trọng, đa dạng", type: "C" },
      { text: "Cơm chiên kimchi - lạ miệng, cay cay", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thích cơm chiên có độ khô như thế nào?",
    options: [
      { text: "Tơi xốp, hạt cơm rời rạc", type: "A" },
      { text: "Hơi ẩm, mềm dễ ăn", type: "B" },
      { text: "Giòn cháy cạnh ở đáy chảo", type: "C" },
      { text: "Không quan trọng, miễn ngon", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Topping bạn không thể thiếu:",
    options: [
      { text: "Tôm, thịt, lạp xưởng", type: "A" },
      { text: "Trứng chiên vàng óng", type: "B" },
      { text: "Rau củ tươi xanh", type: "C" },
      { text: "Hành phi và hành lá", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi ăn cơm chiên, bạn thích kèm với:",
    options: [
      { text: "Nước tương và ớt", type: "A" },
      { text: "Dưa leo, cà chua tươi", type: "B" },
      { text: "Soup hoặc canh", type: "C" },
      { text: "Không cần kèm gì cả", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn nấu cơm chiên ở nhà không?",
    options: [
      { text: "Thường xuyên, có công thức riêng", type: "A" },
      { text: "Thỉnh thoảng khi còn cơm nguội", type: "B" },
      { text: "Hiếm khi, thích đi ăn ngoài hơn", type: "C" },
      { text: "Không biết nấu", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Lửa chiên cơm bạn thích là:",
    options: [
      { text: "Lửa to để có hương khói", type: "A" },
      { text: "Lửa vừa để cơm chín đều", type: "B" },
      { text: "Lửa nhỏ để không cháy", type: "C" },
      { text: "Không quan tâm, để đầu bếp quyết định", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi nhà hàng bị hết cơm chiên yêu thích, bạn:",
    options: [
      { text: "Thử loại cơm chiên khác", type: "A" },
      { text: "Gọi món khác không sao", type: "B" },
      { text: "Đi quán khác để được ăn", type: "C" },
      { text: "Hơi thất vọng nhưng chấp nhận", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn thích ăn cơm chiên vào lúc nào?",
    options: [
      { text: "Bất cứ lúc nào, từ sáng đến tối", type: "A" },
      { text: "Bữa trưa nhanh gọn", type: "B" },
      { text: "Bữa tối ấm áp", type: "C" },
      { text: "Đêm khuya khi thức khuya", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Địa điểm ăn cơm chiên yêu thích:",
    options: [
      { text: "Nhà hàng Hoa nổi tiếng", type: "A" },
      { text: "Quán cơm bình dân gần nhà", type: "B" },
      { text: "Food court trong mall", type: "C" },
      { text: "Tự nấu ở nhà ngon hơn", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Phần cơm chiên bạn thích ăn nhất:",
    options: [
      { text: "Phần có nhiều topping", type: "A" },
      { text: "Phần cơm trộn đều gia vị", type: "B" },
      { text: "Phần cháy giòn ở đáy", type: "C" },
      { text: "Tất cả đều ngon như nhau", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Cơm chiên với bạn là:",
    options: [
      { text: "Món ăn tiện lợi, nhanh gọn", type: "A" },
      { text: "Comfort food quen thuộc", type: "B" },
      { text: "Cách xử lý cơm nguội", type: "C" },
      { text: "Món ăn mang nhiều kỷ niệm", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nếu được chọn, bạn sẽ ăn cơm chiên từ:",
    options: [
      { text: "Đầu bếp chuyên nghiệp", type: "A" },
      { text: "Mẹ hoặc người thân nấu", type: "B" },
      { text: "Tự mình nấu theo sở thích", type: "C" },
      { text: "Ai nấu cũng được, quan trọng là ngon", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Năng Động",
    emoji: "🔥",
    description: "Bạn là người năng động, thích sự đa dạng và phong phú. Như đĩa cơm chiên Dương Châu đầy đủ, bạn muốn cuộc sống có nhiều màu sắc và trải nghiệm.",
    traits: ["Năng động", "Đa dạng", "Tham vọng", "Sôi nổi"],
    strengths: ["Thích nghi nhanh", "Tận dụng mọi cơ hội", "Không nhàm chán"],
    weaknesses: ["Có thể thiếu tập trung", "Đôi khi muốn quá nhiều"],
    tips: ["Tập trung vào điều quan trọng nhất", "Đôi khi ít hơn lại là nhiều hơn"],
  },
  B: {
    type: "B",
    title: "Người Giản Dị",
    emoji: "🥚",
    description: "Bạn yêu sự đơn giản và thân thuộc. Như cơm chiên trứng giản dị, bạn tìm thấy hạnh phúc trong những điều nhỏ bé và quen thuộc.",
    traits: ["Giản dị", "Thân thiện", "Dễ hài lòng", "Chân thành"],
    strengths: ["Hạnh phúc với ít", "Dễ kết bạn", "Không phức tạp"],
    weaknesses: ["Có thể thiếu tham vọng", "Đôi khi quá dễ dãi"],
    tips: ["Thử thách bản thân đôi khi", "Khám phá những điều mới mẻ"],
  },
  C: {
    type: "C",
    title: "Người Khám Phá",
    emoji: "🌊",
    description: "Bạn luôn tìm kiếm những điều mới lạ và độc đáo. Như cơm chiên hải sản sang trọng, bạn không ngại bước ra khỏi vùng an toàn.",
    traits: ["Phiêu lưu", "Tò mò", "Sáng tạo", "Không ngại thử"],
    strengths: ["Kinh nghiệm phong phú", "Tư duy mở", "Thích nghi tốt"],
    weaknesses: ["Có thể thiếu ổn định", "Đôi khi bỏ qua căn bản"],
    tips: ["Đôi khi quay về những điều quen thuộc", "Trân trọng hiện tại"],
  },
  D: {
    type: "D",
    title: "Người Thoải Mái",
    emoji: "😌",
    description: "Bạn sống thoải mái và không đòi hỏi. Như việc thưởng thức cơm chiên vào đêm khuya, bạn theo dòng chảy cuộc sống một cách tự nhiên.",
    traits: ["Thoải mái", "Linh hoạt", "Không stress", "Dễ chịu"],
    strengths: ["Không gây áp lực", "Dễ hợp tác", "Bình yên"],
    weaknesses: ["Có thể thiếu định hướng", "Đôi khi thụ động"],
    tips: ["Đặt mục tiêu rõ ràng", "Chủ động hơn trong quyết định"],
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
