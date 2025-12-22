// Trắc nghiệm Không gian
// Kiểm tra khả năng tư duy không gian và hình dung 3D của bạn

export const questions = [
  {
    id: 1,
    question: "Nếu xoay hình vuông 90 độ theo chiều kim đồng hồ, góc trên bên trái sẽ di chuyển đến vị trí nào?",
    options: [
      { text: "Góc trên bên phải", type: "A" },
      { text: "Góc dưới bên phải", type: "B" },
      { text: "Góc dưới bên trái", type: "C" },
      { text: "Vẫn ở góc trên bên trái", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Một khối lập phương có mặt trên màu đỏ, mặt trước màu xanh. Nếu lật khối về phía trước, màu nào sẽ ở mặt trên?",
    options: [
      { text: "Xanh", type: "A" },
      { text: "Đỏ", type: "D" },
      { text: "Màu đối diện với đỏ", type: "B" },
      { text: "Màu đối diện với xanh", type: "C" },
    ],
  },
  {
    id: 3,
    question: "Hình khai triển nào có thể gấp thành hình lập phương? (6 hình vuông xếp thành hình chữ T)",
    options: [
      { text: "Có, đây là một trong các hình khai triển đúng", type: "A" },
      { text: "Không, vì thiếu mặt", type: "D" },
      { text: "Không, vì các mặt chồng lên nhau", type: "B" },
      { text: "Không thể xác định", type: "C" },
    ],
  },
  {
    id: 4,
    question: "Nhìn một tòa nhà từ phía trước thấy hình chữ nhật, từ trên xuống thấy hình vuông. Tòa nhà có hình dạng gì?",
    options: [
      { text: "Hình hộp chữ nhật đứng", type: "A" },
      { text: "Hình trụ", type: "B" },
      { text: "Hình kim tự tháp", type: "C" },
      { text: "Hình cầu", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Nếu gấp đôi một tờ giấy 3 lần rồi cắt một góc, khi mở ra sẽ có bao nhiêu lỗ?",
    options: [
      { text: "8 lỗ", type: "A" },
      { text: "4 lỗ", type: "B" },
      { text: "6 lỗ", type: "C" },
      { text: "3 lỗ", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Một chiếc xe ô tô đang đi về hướng Bắc rồi rẽ phải 2 lần. Xe đang đi về hướng nào?",
    options: [
      { text: "Nam", type: "A" },
      { text: "Bắc", type: "D" },
      { text: "Đông", type: "B" },
      { text: "Tây", type: "C" },
    ],
  },
  {
    id: 7,
    question: "Trong gương, chữ cái nào trông giống hệt bản gốc? (A, B, C, D, E, F)",
    options: [
      { text: "A (đối xứng trục dọc)", type: "A" },
      { text: "B", type: "D" },
      { text: "E", type: "B" },
      { text: "F", type: "C" },
    ],
  },
  {
    id: 8,
    question: "Một khối rubik 3x3x3 có bao nhiêu khối nhỏ ở các góc?",
    options: [
      { text: "8 khối", type: "A" },
      { text: "6 khối", type: "B" },
      { text: "12 khối", type: "C" },
      { text: "4 khối", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Nếu bạn đứng quay mặt về hướng Đông, tay trái của bạn chỉ về hướng nào?",
    options: [
      { text: "Bắc", type: "A" },
      { text: "Nam", type: "B" },
      { text: "Tây", type: "C" },
      { text: "Đông", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Một hình trụ nhìn từ trên xuống có hình dạng gì?",
    options: [
      { text: "Hình tròn", type: "A" },
      { text: "Hình chữ nhật", type: "B" },
      { text: "Hình vuông", type: "C" },
      { text: "Hình elip", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Xếp 4 khối lập phương thành hình chữ L. Có bao nhiêu mặt vuông nhìn thấy được từ bên ngoài?",
    options: [
      { text: "14 mặt", type: "A" },
      { text: "12 mặt", type: "B" },
      { text: "16 mặt", type: "C" },
      { text: "18 mặt", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Một tấm bản đồ có Bắc ở trên. Nếu xoay bản đồ 180 độ, Đông sẽ ở vị trí nào?",
    options: [
      { text: "Bên trái", type: "A" },
      { text: "Bên phải", type: "D" },
      { text: "Ở trên", type: "B" },
      { text: "Ở dưới", type: "C" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Bậc Thầy Không Gian",
    emoji: "🧊",
    description: "Bạn có khả năng tư duy không gian xuất sắc! Bạn dễ dàng hình dung các vật thể 3D, xoay chuyển trong đầu và hiểu các mối quan hệ không gian.",
    traits: ["Hình dung 3D giỏi", "Định hướng tốt", "Xoay hình trong đầu", "Hiểu phối cảnh"],
    strengths: ["Kiến trúc và thiết kế", "Điều hướng và bản đồ", "Lắp ráp và xây dựng"],
    weaknesses: ["Đôi khi khó diễn đạt bằng lời", "Có thể phức tạp hóa vấn đề"],
    tips: ["Học phần mềm CAD/3D", "Thử sức với kiến trúc hoặc kỹ thuật"],
  },
  B: {
    type: "B",
    title: "Người Có Tư Duy Không Gian Tốt",
    emoji: "📦",
    description: "Bạn có khả năng tư duy không gian khá tốt, có thể xử lý hầu hết các bài toán không gian cơ bản và trung bình.",
    traits: ["Hình dung được 3D", "Định hướng được", "Cẩn thận", "Kiên nhẫn"],
    strengths: ["Đọc bản đồ", "Lắp ráp đồ nội thất", "Sắp xếp không gian"],
    weaknesses: ["Cần thêm luyện tập với bài phức tạp", "Đôi khi cần vẽ ra để hiểu"],
    tips: ["Chơi game xây dựng", "Thực hành với khối rubik"],
  },
  C: {
    type: "C",
    title: "Người Đang Phát Triển",
    emoji: "📐",
    description: "Tư duy không gian của bạn ở mức cơ bản. Với sự rèn luyện, bạn có thể cải thiện đáng kể.",
    traits: ["Có tiềm năng", "Cần hướng dẫn", "Đang học hỏi", "Thận trọng"],
    strengths: ["Không vội vàng", "Biết giới hạn", "Sẵn sàng học"],
    weaknesses: ["Khó hình dung 3D", "Dễ bị lạc"],
    tips: ["Chơi với khối xếp hình", "Vẽ để hỗ trợ suy nghĩ", "Thực hành với origami"],
  },
  D: {
    type: "D",
    title: "Người Cần Bổ Sung",
    emoji: "🌱",
    description: "Tư duy không gian chưa phải điểm mạnh của bạn, nhưng đây là kỹ năng có thể phát triển qua luyện tập!",
    traits: ["Tư duy theo chiều khác", "Cần hỗ trợ trực quan", "Tiềm năng ẩn", "Mạnh ở lĩnh vực khác"],
    strengths: ["Có thể mạnh về ngôn ngữ hoặc logic", "Không bị ám ảnh bởi hình khối"],
    weaknesses: ["Khó đọc bản đồ", "Dễ nhầm trái phải"],
    tips: ["Bắt đầu với hình 2D", "Dùng GPS khi di chuyển", "Chơi game không gian đơn giản"],
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
