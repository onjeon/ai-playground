// Phong cách nhậu VN
// Khám phá phong cách uống rượu bia của bạn theo văn hóa Việt Nam

export const questions = [
  {
    id: 1,
    question: "Bạn thường chọn loại đồ uống nào khi nhậu?",
    options: [
      { text: "Bia hơi, bia chai truyền thống", type: "A" },
      { text: "Bia thủ công, craft beer", type: "B" },
      { text: "Rượu vang, rượu ngoại", type: "C" },
      { text: "Nước ngọt, đồ uống không cồn", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn nhậu với ai nhiều nhất?",
    options: [
      { text: "Bạn bè thân, hội anh em", type: "A" },
      { text: "Đồng nghiệp, đối tác", type: "B" },
      { text: "Gia đình, người thân", type: "C" },
      { text: "Một mình hoặc rất ít khi nhậu", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Địa điểm nhậu yêu thích của bạn?",
    options: [
      { text: "Quán nhậu vỉa hè, quán ốc", type: "A" },
      { text: "Beer club, rooftop bar", type: "B" },
      { text: "Nhà hàng, quán sang trọng", type: "C" },
      { text: "Ở nhà, tiệc tại gia", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Mồi nhậu bạn thích nhất?",
    options: [
      { text: "Ốc, nghêu, hải sản", type: "A" },
      { text: "Phô mai, khoai tây chiên, đồ Tây", type: "B" },
      { text: "Bò nướng, lẩu cao cấp", type: "C" },
      { text: "Trái cây, đồ ăn nhẹ", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi nhậu, bạn thường uống như thế nào?",
    options: [
      { text: "Uống hết mình, zô 100%", type: "A" },
      { text: "Uống từ từ, thưởng thức", type: "B" },
      { text: "Uống vừa phải, biết dừng", type: "C" },
      { text: "Uống ít hoặc không uống", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn hay nhậu vào thời điểm nào?",
    options: [
      { text: "Tối sau giờ làm, thư giãn", type: "A" },
      { text: "Cuối tuần, có dịp đặc biệt", type: "B" },
      { text: "Dịp lễ, họp mặt gia đình", type: "C" },
      { text: "Rất hiếm khi, không cố định", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi bạn say, bạn thường như thế nào?",
    options: [
      { text: "Vui vẻ, nói nhiều, ca hát", type: "A" },
      { text: "Tâm sự, chia sẻ chuyện đời", type: "B" },
      { text: "Trầm tĩnh, ít thay đổi", type: "C" },
      { text: "Không để say, biết điểm dừng", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn nghĩ gì về văn hóa nhậu ở Việt Nam?",
    options: [
      { text: "Thích, đây là cách kết nối", type: "A" },
      { text: "OK nếu văn minh, có chừng mực", type: "B" },
      { text: "Cần hạn chế, không tốt cho sức khỏe", type: "C" },
      { text: "Không quan tâm lắm", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi được mời bia rượu, bạn thường?",
    options: [
      { text: "Uống ngay, không từ chối", type: "A" },
      { text: "Nhận nhưng uống từ từ", type: "B" },
      { text: "Từ chối lịch sự nếu không muốn", type: "C" },
      { text: "Luôn từ chối, không uống rượu bia", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Sau khi nhậu, bạn về nhà bằng gì?",
    options: [
      { text: "Nhờ bạn chở hoặc ngủ lại", type: "A" },
      { text: "Gọi Grab, taxi", type: "B" },
      { text: "Uống ít nên tự lái an toàn", type: "C" },
      { text: "Không nhậu nên không lo", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Chi phí một buổi nhậu của bạn?",
    options: [
      { text: "Chia đều, ai uống nhiều góp nhiều", type: "A" },
      { text: "Sẵn sàng chi cho buổi nhậu đẹp", type: "B" },
      { text: "Kiểm soát chi tiêu, không quá tay", type: "C" },
      { text: "Tiết kiệm, ít khi nhậu ngoài", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều bạn thích nhất khi nhậu?",
    options: [
      { text: "Không khí vui vẻ, gắn kết bạn bè", type: "A" },
      { text: "Thưởng thức đồ uống ngon", type: "B" },
      { text: "Thư giãn sau áp lực công việc", type: "C" },
      { text: "Thật ra không thích nhậu lắm", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Dân nhậu chính hiệu",
    emoji: "🍺",
    description: "Bạn là người sống hết mình, yêu thích những buổi nhậu vui vẻ với bạn bè. Nhậu với bạn là cách kết nối và thư giãn sau những ngày làm việc vất vả.",
    traits: ["Hào sảng", "Vui vẻ", "Gắn kết", "Nhiệt tình"],
    strengths: ["Dễ kết bạn", "Tạo không khí vui", "Trung thành với bạn bè"],
    weaknesses: ["Có thể uống quá đà", "Tốn kém chi phí nhậu"],
    tips: ["Nhớ giữ sức khỏe", "Không lái xe khi đã uống"],
  },
  B: {
    type: "B",
    title: "Người thưởng thức tinh tế",
    emoji: "🍷",
    description: "Bạn là người biết thưởng thức và có gu trong việc uống. Bạn không cần uống nhiều, quan trọng là chất lượng và trải nghiệm.",
    traits: ["Tinh tế", "Sành sỏi", "Có gu", "Biết kiểm soát"],
    strengths: ["Hiểu về đồ uống", "Biết thưởng thức", "Có phong cách"],
    weaknesses: ["Có thể kén chọn", "Chi tiêu cao cho đồ chất lượng"],
    tips: ["Chia sẻ kiến thức với bạn bè", "Thử các loại đồ uống mới"],
  },
  C: {
    type: "C",
    title: "Người uống có trách nhiệm",
    emoji: "🥂",
    description: "Bạn là người biết giữ chừng mực và có trách nhiệm khi uống. Bạn tham gia nhậu để giao lưu nhưng luôn biết điểm dừng.",
    traits: ["Có trách nhiệm", "Chừng mực", "Lý trí", "Cân bằng"],
    strengths: ["Không bao giờ say xỉn", "An toàn khi về nhà", "Tôn trọng sức khỏe"],
    weaknesses: ["Có thể bị cho là nhàm chán", "Khó hòa nhập với hội nhậu"],
    tips: ["Vẫn có thể vui mà không cần say", "Tìm bạn bè có cùng quan điểm"],
  },
  D: {
    type: "D",
    title: "Người không nhậu",
    emoji: "🧃",
    description: "Bạn không thích uống rượu bia hoặc chọn lối sống không cồn. Bạn có thể tham gia tiệc tùng nhưng không cần đồ uống có cồn để vui.",
    traits: ["Lành mạnh", "Độc lập", "Tự chủ", "Khác biệt"],
    strengths: ["Sức khỏe tốt", "Tiết kiệm tiền", "Luôn tỉnh táo"],
    weaknesses: ["Có thể khó hòa nhập một số nhóm", "Bị ép uống đôi khi"],
    tips: ["Tự tin với lựa chọn của mình", "Tìm các hoạt động giao lưu khác"],
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
