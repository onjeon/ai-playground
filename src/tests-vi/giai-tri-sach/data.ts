// Thể loại sách yêu thích
// Bài test khám phá thể loại sách phù hợp với tâm hồn bạn

export const questions = [
  {
    id: 1,
    question: "Bạn đọc sách với mục đích gì?",
    options: [
      { text: "Học hỏi kiến thức và kỹ năng mới", type: "A" },
      { text: "Giải trí và thư giãn", type: "B" },
      { text: "Tìm kiếm cảm hứng và ý nghĩa cuộc sống", type: "C" },
      { text: "Khám phá thế giới và trải nghiệm mới", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thích đọc sách trong bao lâu mỗi lần?",
    options: [
      { text: "Từng chương nhỏ, dễ áp dụng", type: "A" },
      { text: "Vài tiếng liên tục, đọc theo cảm hứng", type: "B" },
      { text: "Chậm rãi, nhâm nhi từng trang", type: "C" },
      { text: "Marathon đọc một mạch đến hết", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn chọn sách dựa trên yếu tố nào?",
    options: [
      { text: "Đánh giá về tính hữu ích, thực tiễn", type: "A" },
      { text: "Bìa sách đẹp, được đề xuất", type: "B" },
      { text: "Tác giả nổi tiếng, được giải thưởng", type: "C" },
      { text: "Nội dung hấp dẫn, kịch tính", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn thích nhân vật chính trong sách như thế nào?",
    options: [
      { text: "Người thành công, có nhiều bài học", type: "A" },
      { text: "Người bình thường với câu chuyện thú vị", type: "B" },
      { text: "Nhân vật sâu sắc, có chiều sâu tâm lý", type: "C" },
      { text: "Anh hùng, nhà thám hiểm, người mạo hiểm", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn thích kết thúc sách như thế nào?",
    options: [
      { text: "Có kết luận rõ ràng, bài học cụ thể", type: "A" },
      { text: "Vui vẻ, nhẹ nhàng", type: "B" },
      { text: "Sâu sắc, để lại suy ngẫm", type: "C" },
      { text: "Bất ngờ, twist cuối sách", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn đọc sách ở đâu?",
    options: [
      { text: "Bàn làm việc, vừa đọc vừa ghi chép", type: "A" },
      { text: "Quán cà phê, công viên", type: "B" },
      { text: "Giường ngủ, góc yên tĩnh", type: "C" },
      { text: "Bất cứ đâu, miễn có sách hay", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có ghi chú khi đọc sách không?",
    options: [
      { text: "Có, rất chi tiết để áp dụng", type: "A" },
      { text: "Đôi khi, những câu hay", type: "B" },
      { text: "Hiếm khi, chỉ đọc và cảm nhận", type: "C" },
      { text: "Không, tập trung vào cốt truyện", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn thích sách của thời kỳ nào?",
    options: [
      { text: "Sách mới, cập nhật xu hướng", type: "A" },
      { text: "Không quan trọng, miễn hay", type: "B" },
      { text: "Sách kinh điển, được thời gian chứng minh", type: "C" },
      { text: "Sách mới của series đang theo dõi", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn đọc bao nhiêu sách mỗi năm?",
    options: [
      { text: "Nhiều sách ngắn về chuyên môn", type: "A" },
      { text: "5-10 cuốn, tùy hứng", type: "B" },
      { text: "Ít nhưng đọc kỹ, tái đọc nhiều lần", type: "C" },
      { text: "Rất nhiều, nghiện đọc", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn thích mua sách ở đâu?",
    options: [
      { text: "Online, đọc review trước", type: "A" },
      { text: "Nhà sách, thích lật từng trang", type: "B" },
      { text: "Được tặng hoặc giới thiệu", type: "C" },
      { text: "Cả hai, miễn có sách hay", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn có tham gia câu lạc bộ đọc sách không?",
    options: [
      { text: "Có, để chia sẻ kiến thức", type: "A" },
      { text: "Muốn nhưng chưa tham gia", type: "B" },
      { text: "Thích đọc một mình", type: "C" },
      { text: "Có, để thảo luận về cốt truyện", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Cuốn sách nào sau đây bạn muốn đọc nhất?",
    options: [
      { text: "Sách về khởi nghiệp, đầu tư", type: "A" },
      { text: "Tiểu thuyết nhẹ nhàng về cuộc sống", type: "B" },
      { text: "Văn học kinh điển của Nguyễn Nhật Ánh", type: "C" },
      { text: "Tiểu thuyết trinh thám, giả tưởng", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Yêu Sách Phi Hư Cấu",
    emoji: "📚",
    description: "Bạn yêu thích sách phi hư cấu, sách self-help, kinh doanh, và phát triển bản thân. Với bạn, đọc sách là để học hỏi và áp dụng vào cuộc sống.",
    traits: ["Ham học hỏi", "Thực tế", "Có mục tiêu", "Kỷ luật"],
    strengths: ["Kiến thức phong phú", "Biết áp dụng", "Phát triển liên tục"],
    weaknesses: ["Đôi khi bỏ qua sách giải trí", "Có thể quá nghiêm túc"],
    tips: ["Thử đọc thêm tiểu thuyết để cân bằng", "Sách Việt về khởi nghiệp rất hay"],
  },
  B: {
    type: "B",
    title: "Người Yêu Sách Nhẹ Nhàng",
    emoji: "☕",
    description: "Bạn yêu thích sách nhẹ nhàng, dễ đọc, mang lại cảm giác thư giãn. Bạn đọc sách như một cách để tận hưởng cuộc sống.",
    traits: ["Thoải mái", "Đa dạng", "Yêu cuộc sống", "Dễ tính"],
    strengths: ["Dễ tìm sách hay", "Thư giãn tốt", "Gu đọc đa dạng"],
    weaknesses: ["Có thể bỏ qua sách chuyên sâu", "Đôi khi không kiên trì"],
    tips: ["Thử đọc các tác giả Việt Nam", "Light novel cũng là lựa chọn tốt"],
  },
  C: {
    type: "C",
    title: "Người Yêu Văn Học",
    emoji: "📖",
    description: "Bạn yêu thích văn học, tiểu thuyết có chiều sâu, sách kinh điển. Bạn đọc sách để cảm nhận và tìm kiếm ý nghĩa cuộc sống.",
    traits: ["Sâu sắc", "Cảm xúc", "Yêu nghệ thuật", "Trầm tư"],
    strengths: ["Hiểu biết văn học", "Cảm nhận tinh tế", "Tâm hồn phong phú"],
    weaknesses: ["Có thể kén sách", "Mất nhiều thời gian cho một cuốn"],
    tips: ["Văn học Việt Nam rất phong phú", "Thử đọc các tác giả đương đại"],
  },
  D: {
    type: "D",
    title: "Người Yêu Sách Phiêu Lưu & Giả Tưởng",
    emoji: "🗺️",
    description: "Bạn yêu thích sách phiêu lưu, giả tưởng, trinh thám với cốt truyện hấp dẫn. Bạn đọc sách để khám phá những thế giới mới và trải nghiệm những cuộc phiêu lưu.",
    traits: ["Phiêu lưu", "Tưởng tượng phong phú", "Háo hức", "Nghiện đọc"],
    strengths: ["Tưởng tượng tốt", "Đọc nhanh", "Luôn có sách để đọc"],
    weaknesses: ["Có thể bỏ qua sách phi hư cấu", "Dễ bị cuốn vào series dài"],
    tips: ["Thử đọc các tác giả fantasy Việt", "Web novel cũng rất phong phú"],
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
