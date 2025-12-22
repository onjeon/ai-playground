// Tính cách khi đi nhậu
// Khám phá tính cách của bạn qua cách bạn tham gia các buổi nhậu

export const questions = [
  {
    id: 1,
    question: "Bạn thường uống gì khi đi nhậu?",
    options: [
      { text: "Bia - cổ điển, không thể thiếu", type: "A" },
      { text: "Rượu - sang trọng, đẳng cấp", type: "B" },
      { text: "Nước ngọt - không uống được bia", type: "C" },
      { text: "Tùy mọi người gọi gì thì uống", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn là kiểu người như thế nào trong bàn nhậu?",
    options: [
      { text: "Người nói nhiều, kể chuyện", type: "A" },
      { text: "Người lắng nghe, quan sát", type: "B" },
      { text: "Người mời rượu, hoạt náo", type: "C" },
      { text: "Người rót bia, phục vụ", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi có người mời bạn uống, bạn sẽ?",
    options: [
      { text: "Uống hết, không từ chối ai", type: "A" },
      { text: "Từ chối khéo nếu không muốn", type: "B" },
      { text: "Uống một chút cho phải phép", type: "C" },
      { text: "Mời lại họ trước", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn thích nhậu ở đâu?",
    options: [
      { text: "Quán nhậu bình dân, vỉa hè", type: "A" },
      { text: "Nhà hàng sang trọng", type: "B" },
      { text: "Nhà bạn bè, ấm cúng", type: "C" },
      { text: "Đâu cũng được, có bạn là vui", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi say, bạn thường như thế nào?",
    options: [
      { text: "Nói nhiều hơn bình thường", type: "A" },
      { text: "Im lặng, muốn ngủ", type: "B" },
      { text: "Cảm xúc dâng trào, dễ khóc", type: "C" },
      { text: "Tỉnh táo như thường", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn thường đi nhậu vào lúc nào?",
    options: [
      { text: "Cuối tuần, xả stress", type: "A" },
      { text: "Ngày thường, có việc thì đi", type: "B" },
      { text: "Dịp đặc biệt, sinh nhật, lễ", type: "C" },
      { text: "Bất cứ khi nào được mời", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn nghĩ gì về việc 'zô 100%'?",
    options: [
      { text: "Phải zô, đó là văn hóa", type: "A" },
      { text: "Tùy khả năng, không ép", type: "B" },
      { text: "Không thích, hay bị ép", type: "C" },
      { text: "Vui thì zô, không thì thôi", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Món nhắm bạn thích nhất?",
    options: [
      { text: "Khô mực, khô bò", type: "A" },
      { text: "Hải sản nướng", type: "B" },
      { text: "Đồ chiên, lòng nướng", type: "C" },
      { text: "Không quan trọng, có gì ăn nấy", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi đi nhậu xong, bạn về nhà bằng cách nào?",
    options: [
      { text: "Tự đi xe máy (nhậu nhẹ thôi)", type: "A" },
      { text: "Gọi Grab/Be", type: "B" },
      { text: "Nhờ bạn chở về", type: "C" },
      { text: "Ở lại ngủ tại chỗ", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn thường nhậu với ai?",
    options: [
      { text: "Đồng nghiệp, đối tác", type: "A" },
      { text: "Bạn bè thân từ nhỏ", type: "B" },
      { text: "Gia đình, họ hàng", type: "C" },
      { text: "Ai rủ cũng đi", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn có hay từ chối lời mời nhậu không?",
    options: [
      { text: "Hiếm khi, đi hết", type: "A" },
      { text: "Thường xuyên, bận việc", type: "B" },
      { text: "Tùy người mời", type: "C" },
      { text: "Từ chối khi cần nghỉ ngơi", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Sau một buổi nhậu, bạn thường cảm thấy?",
    options: [
      { text: "Vui vẻ, thoải mái", type: "A" },
      { text: "Mệt mỏi, hối hận", type: "B" },
      { text: "Bình thường, chẳng sao", type: "C" },
      { text: "Đã, muốn đi tiếp", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Dân chơi bàn nhậu",
    emoji: "🍻",
    description: "Bạn là linh hồn của mọi cuộc nhậu. Bạn vui vẻ, phóng khoáng và luôn tạo không khí sôi động. Ai cũng muốn mời bạn đi nhậu vì có bạn là có vui.",
    traits: ["Phóng khoáng", "Vui vẻ", "Hào sảng", "Dễ gần"],
    strengths: ["Tạo không khí vui", "Kết nối mọi người", "Được yêu mến"],
    weaknesses: ["Đôi khi uống quá đà", "Khó từ chối"],
    tips: ["Biết điểm dừng khi uống", "Quan tâm sức khỏe hơn"],
  },
  B: {
    type: "B",
    title: "Người điềm đạm",
    emoji: "🍷",
    description: "Bạn là người có gu và biết tiết chế. Bạn đi nhậu để thưởng thức và giao lưu chứ không phải để say xỉn. Bạn luôn giữ được sự tỉnh táo và đẳng cấp.",
    traits: ["Điềm đạm", "Có gu", "Tự chủ", "Đẳng cấp"],
    strengths: ["Không bao giờ mất kiểm soát", "Được tôn trọng", "Biết dừng lại"],
    weaknesses: ["Đôi khi quá kín đáo", "Khó hòa nhập hết mình"],
    tips: ["Mở lòng hơn với bạn bè", "Thỉnh thoảng vui chơi hết mình"],
  },
  C: {
    type: "C",
    title: "Người nhạy cảm",
    emoji: "🌙",
    description: "Bạn là người tình cảm và đi nhậu là cách bạn kết nối sâu hơn với mọi người. Bạn thích những cuộc trò chuyện ý nghĩa hơn là uống thật nhiều.",
    traits: ["Nhạy cảm", "Tình cảm", "Chân thành", "Sâu sắc"],
    strengths: ["Kết nối sâu", "Lắng nghe tốt", "Đáng tin cậy"],
    weaknesses: ["Dễ bị ảnh hưởng", "Đôi khi quá cảm xúc"],
    tips: ["Giữ cân bằng cảm xúc", "Không để rượu chi phối tâm trạng"],
  },
  D: {
    type: "D",
    title: "Người linh hoạt",
    emoji: "🎊",
    description: "Bạn là người dễ tính và hòa hợp với mọi hoàn cảnh. Bạn đi nhậu vì bạn bè, không phải vì bia rượu. Bạn vui với việc phục vụ và quan tâm người khác.",
    traits: ["Linh hoạt", "Dễ tính", "Quan tâm", "Hòa đồng"],
    strengths: ["Được yêu quý", "Thích nghi tốt", "Không gây phiền hà"],
    weaknesses: ["Đôi khi thiếu chính kiến", "Dễ bị kéo theo"],
    tips: ["Thể hiện ý kiến của mình hơn", "Học cách từ chối"],
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
