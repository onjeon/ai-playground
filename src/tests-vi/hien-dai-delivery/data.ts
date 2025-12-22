// Bạn Đặt Đồ Ăn Như Thế Nào?
// Khám phá phong cách đặt đồ ăn online của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn thường đặt đồ ăn trên app nào?",
    options: [
      { text: "GrabFood - quen tay, nhiều quán", type: "A" },
      { text: "ShopeeFood - săn mã giảm giá", type: "B" },
      { text: "Baemin - giao diện dễ thương", type: "C" },
      { text: "Gojek/Be - tùy app nào rẻ hơn", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi đói, bạn thường làm gì?",
    options: [
      { text: "Đặt ngay, không cần suy nghĩ", type: "A" },
      { text: "Lướt app tìm mã giảm giá trước", type: "B" },
      { text: "Hỏi bạn bè xem có đặt chung không", type: "C" },
      { text: "So sánh giá giữa các app", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn đặt đồ ăn gì nhiều nhất?",
    options: [
      { text: "Phở, bún, cơm - món Việt truyền thống", type: "A" },
      { text: "Trà sữa, đồ uống - không thể thiếu", type: "B" },
      { text: "Gà rán, pizza - fast food ngon miệng", type: "C" },
      { text: "Healthy food - salad, eat clean", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi tài xế gọi không nghe máy, bạn?",
    options: [
      { text: "Gọi lại ngay lập tức", type: "A" },
      { text: "Nhắn tin xin lỗi và hướng dẫn", type: "B" },
      { text: "Đợi tài xế gọi lại", type: "C" },
      { text: "Lo lắng không biết đồ ăn có bị hủy không", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn thường đặt đồ ăn vào lúc nào?",
    options: [
      { text: "Bữa trưa ở công ty/trường", type: "A" },
      { text: "Đêm khuya khi thèm ăn", type: "B" },
      { text: "Cuối tuần lười nấu", type: "C" },
      { text: "Bất cứ lúc nào đói", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Phí ship bao nhiêu thì bạn chấp nhận được?",
    options: [
      { text: "Dưới 15k - ship rẻ mới đặt", type: "A" },
      { text: "15-25k - bình thường", type: "B" },
      { text: "Freeship only - săn voucher", type: "C" },
      { text: "Không quan trọng, miễn ngon", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi đồ ăn giao sai/thiếu, bạn?",
    options: [
      { text: "Chat với quán để được hoàn tiền", type: "A" },
      { text: "Report trong app và chờ xử lý", type: "B" },
      { text: "Thôi kệ, lần sau không đặt nữa", type: "C" },
      { text: "Review 1 sao cho bõ tức", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có hay đọc review trước khi đặt không?",
    options: [
      { text: "Luôn luôn, phải 4.5 sao trở lên", type: "A" },
      { text: "Đọc qua, xem hình ảnh", type: "B" },
      { text: "Không cần, tin vào lựa chọn của mình", type: "C" },
      { text: "Chỉ đọc review xấu để tránh", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi có người ở nhà, bạn?",
    options: [
      { text: "Vẫn tự đặt cho mình", type: "A" },
      { text: "Hỏi có ai đặt chung không", type: "B" },
      { text: "Nhờ người khác đặt cho", type: "C" },
      { text: "Đặt cho cả nhà luôn", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có tip cho tài xế giao đồ ăn không?",
    options: [
      { text: "Có, thường xuyên tip trong app", type: "A" },
      { text: "Tip tiền mặt khi nhận đồ", type: "B" },
      { text: "Hiếm khi, chỉ khi trời mưa to", type: "C" },
      { text: "Không, phí ship đã đủ rồi", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Tín Đồ Delivery",
    emoji: "🛵",
    percentage: 85,
    description: "Bạn là khách quen của các app giao đồ ăn! Điện thoại bạn chắc chắn có ít nhất 3-4 app food delivery và bạn thuộc lòng menu của nhiều quán. Tài xế khu bạn chắc quen mặt bạn lắm rồi!",
    characteristics: ["Đặt đồ ăn mỗi ngày", "Biết hết mã giảm giá", "Có quán ruột", "Tài xế quen mặt"],
    advice: "Thỉnh thoảng tự nấu ăn để tiết kiệm và chăm sóc sức khỏe nhé. Đồ ăn tự làm vừa ngon vừa an tâm!",
  },
  B: {
    type: "B",
    title: "Người Săn Deal",
    emoji: "💸",
    percentage: 70,
    description: "Bạn là cao thủ săn voucher! Trước khi đặt, bạn luôn check hết các app xem đâu có deal ngon nhất. Flash sale, mã freeship, combo giảm giá - không gì qua mắt được bạn cả!",
    characteristics: ["Săn mã giảm giá", "So sánh giá nhiều app", "Đợi flash sale", "Tiết kiệm đỉnh cao"],
    advice: "Đôi khi đừng mất quá nhiều thời gian săn deal, thời gian cũng là tiền mà! Freeship nhưng đợi 2 tiếng thì có đáng không?",
  },
  C: {
    type: "C",
    title: "Đặt Khi Cần",
    emoji: "🍜",
    percentage: 55,
    description: "Bạn đặt đồ ăn online một cách bình thường và có chọn lọc. Không phải lúc nào cũng đặt, nhưng khi cần thì bạn biết cách sử dụng app hiệu quả. Cân bằng là đây!",
    characteristics: ["Đặt khi cần thiết", "Không phụ thuộc app", "Chọn lọc quán ngon", "Biết cách cân bằng"],
    advice: "Bạn đang có sự cân bằng tốt giữa tự nấu và đặt hàng. Hãy tiếp tục duy trì lối sống healthy này!",
  },
  D: {
    type: "D",
    title: "Người Thực Tế",
    emoji: "🧮",
    percentage: 45,
    description: "Bạn là người tính toán kỹ trước khi đặt đồ ăn. So sánh giá, xem review, cân nhắc kỹ càng. Đôi khi bạn quyết định tự nấu vì ship đắt quá hoặc quán không ưng!",
    characteristics: ["Tính toán kỹ lưỡng", "Đọc review cẩn thận", "Không vội vàng", "Chi tiêu hợp lý"],
    advice: "Sự cẩn thận của bạn rất tốt! Nhưng đôi khi hãy cho phép bản thân được 'treat yourself' mà không cần suy nghĩ nhiều.",
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
