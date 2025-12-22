// Tính cách Millennials VN
// Khám phá mức độ Millennial trong tính cách của bạn (8x, 9x đời đầu)

export const questions = [
  {
    id: 1,
    question: "Kỷ niệm tuổi thơ nào bạn nhớ nhất?",
    options: [
      { text: "Xem phim trên VHS, nghe nhạc băng cassette", type: "A" },
      { text: "Chơi game Contra, Mario, điện tử 4 nút", type: "B" },
      { text: "Xem Harry Potter, nghe nhạc 8x", type: "C" },
      { text: "Không nhớ lắm, tuổi thơ khác", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn bắt đầu dùng Facebook từ khi nào?",
    options: [
      { text: "Từ những ngày đầu, còn dùng Yahoo", type: "A" },
      { text: "Khoảng 2010-2012, thay thế Yahoo", type: "B" },
      { text: "Sau 2015, khi mọi người đều dùng", type: "C" },
      { text: "Ít dùng Facebook", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn nghĩ gì về việc mua nhà?",
    options: [
      { text: "Rất quan trọng, đang cố gắng để mua", type: "A" },
      { text: "Muốn mua nhưng khó với giá hiện tại", type: "B" },
      { text: "Thuê nhà cũng OK, không ép bản thân", type: "C" },
      { text: "Chưa nghĩ đến, còn trẻ", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có thường xuyên 'adulting' không? (làm việc người lớn)",
    options: [
      { text: "Có, đầy đủ trách nhiệm gia đình, công việc", type: "A" },
      { text: "Đang cố gắng cân bằng mọi thứ", type: "B" },
      { text: "Vẫn đang tìm kiếm sự ổn định", type: "C" },
      { text: "Chưa đến lúc đó", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn xử lý áp lực tài chính thế nào?",
    options: [
      { text: "Tiết kiệm, đầu tư, có kế hoạch rõ ràng", type: "A" },
      { text: "Cố gắng tiết kiệm nhưng khó khăn", type: "B" },
      { text: "YOLO, sống là phải tận hưởng", type: "C" },
      { text: "Chưa phải lo lắm", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn nghĩ gì về avocado toast (bơ nướng)?",
    options: [
      { text: "Hiểu meme nhưng vẫn phải tiết kiệm", type: "A" },
      { text: "Thỉnh thoảng thưởng cho mình", type: "B" },
      { text: "Tại sao không? Life is short", type: "C" },
      { text: "Không hiểu reference này", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có theo dõi các series TV không?",
    options: [
      { text: "Friends, How I Met Your Mother là kinh điển", type: "A" },
      { text: "Game of Thrones, Breaking Bad", type: "B" },
      { text: "Netflix series hiện đại", type: "C" },
      { text: "Ít xem series TV", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn dùng email như thế nào?",
    options: [
      { text: "Hàng ngày, công việc không thể thiếu", type: "A" },
      { text: "Thường xuyên nhưng thích chat hơn", type: "B" },
      { text: "Chỉ khi cần thiết", type: "C" },
      { text: "Rất ít, thích nhắn tin", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có quan tâm đến sức khỏe tinh thần không?",
    options: [
      { text: "Rất quan trọng, đang tìm hiểu therapy", type: "A" },
      { text: "Có, biết self-care là cần thiết", type: "B" },
      { text: "Bình thường, không quá lo lắng", type: "C" },
      { text: "Chưa nghĩ đến nhiều", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn nghĩ gì về sự nghiệp?",
    options: [
      { text: "Đang ở giai đoạn phát triển, có định hướng", type: "A" },
      { text: "Đã có vị trí ổn định", type: "B" },
      { text: "Vẫn đang tìm kiếm đam mê", type: "C" },
      { text: "Mới bắt đầu, còn trẻ", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn có nhớ thời internet dial-up không?",
    options: [
      { text: "Nhớ rõ, tiếng kết nối 56k huyền thoại", type: "A" },
      { text: "Có nghe qua, ít dùng", type: "B" },
      { text: "Không, sinh ra đã có wifi", type: "C" },
      { text: "Biết nhưng không trải nghiệm", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn có đang 'sandwich generation' không? (nuôi con + chăm cha mẹ)",
    options: [
      { text: "Có, đang cân bằng cả hai", type: "A" },
      { text: "Sắp đến giai đoạn đó", type: "B" },
      { text: "Chưa, chỉ lo cho bản thân", type: "C" },
      { text: "Không áp dụng", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Millennial chính hiệu",
    emoji: "🎸",
    description: "Bạn là Millennial 100%! Bạn trải qua thời kỳ chuyển đổi công nghệ, hiểu giá trị của sự ổn định và đang gánh vác nhiều trách nhiệm.",
    traits: ["Trách nhiệm", "Cân bằng", "Kinh nghiệm", "Thực tế"],
    strengths: ["Biết cách thích nghi", "Có kế hoạch dài hạn", "Kết nối đa thế hệ"],
    weaknesses: ["Áp lực tài chính", "Đôi khi quá lo lắng về tương lai"],
    tips: ["Nhớ chăm sóc bản thân", "Không cần phải hoàn hảo mọi thứ"],
  },
  B: {
    type: "B",
    title: "Millennial cân bằng",
    emoji: "⚖️",
    description: "Bạn có nhiều đặc điểm Millennial nhưng vẫn giữ được sự linh hoạt. Bạn biết cách cân bằng giữa trách nhiệm và tận hưởng cuộc sống.",
    traits: ["Linh hoạt", "Cân bằng", "Thích nghi", "Thực tế"],
    strengths: ["Không quá áp lực", "Biết tận hưởng", "Làm việc hiệu quả"],
    weaknesses: ["Đôi khi thiếu kế hoạch dài hạn", "Trì hoãn quyết định lớn"],
    tips: ["Lên kế hoạch tài chính sớm", "Cân bằng là tốt nhưng cần hành động"],
  },
  C: {
    type: "C",
    title: "Millennial trẻ trung",
    emoji: "🌟",
    description: "Bạn có tâm hồn trẻ trung, không để trách nhiệm 'người lớn' đè nặng. Bạn tin vào việc sống cho hiện tại.",
    traits: ["Trẻ trung", "Tự do", "Lạc quan", "Linh hoạt"],
    strengths: ["Không bị áp lực xã hội", "Biết tận hưởng cuộc sống", "Tâm hồn tự do"],
    weaknesses: ["Có thể thiếu kế hoạch", "Chưa chuẩn bị cho tương lai"],
    tips: ["Nghĩ về kế hoạch dài hạn", "Cân bằng giữa vui và trách nhiệm"],
  },
  D: {
    type: "D",
    title: "Không phải Millennial điển hình",
    emoji: "🔮",
    description: "Bạn có thể thuộc thế hệ khác hoặc có lối sống khác biệt. Bạn không bị định nghĩa bởi thế hệ của mình.",
    traits: ["Độc lập", "Khác biệt", "Cá tính", "Tự do"],
    strengths: ["Không bị đặt vào khuôn mẫu", "Sống theo cách riêng", "Không so sánh"],
    weaknesses: ["Có thể khó hiểu các reference", "Đôi khi khó kết nối"],
    tips: ["Tìm hiểu về các thế hệ khác", "Kết nối với nhiều nhóm người"],
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
