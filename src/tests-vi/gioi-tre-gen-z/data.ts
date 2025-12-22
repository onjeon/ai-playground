// Tính cách Gen Z VN
// Khám phá mức độ Gen Z trong tính cách của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn sử dụng mạng xã hội nào nhiều nhất?",
    options: [
      { text: "TikTok - video ngắn là cuộc sống", type: "A" },
      { text: "Instagram - thích chia sẻ hình ảnh", type: "B" },
      { text: "Facebook - kết nối bạn bè, gia đình", type: "C" },
      { text: "Ít dùng mạng xã hội", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi muốn học điều gì đó, bạn làm thế nào?",
    options: [
      { text: "Xem TikTok, YouTube shorts", type: "A" },
      { text: "Tìm video hướng dẫn trên YouTube", type: "B" },
      { text: "Đọc bài viết, sách vở", type: "C" },
      { text: "Hỏi người có kinh nghiệm", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn nghĩ gì về việc mua sắm online?",
    options: [
      { text: "Mua hết trên mạng, live shopping", type: "A" },
      { text: "Thích mua online, tiện lợi", type: "B" },
      { text: "Mua online và offline đều OK", type: "C" },
      { text: "Thích đi cửa hàng trực tiếp", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Câu nói nào bạn hay dùng nhất?",
    options: [
      { text: "'Chill đi bro', 'slay', 'real'", type: "A" },
      { text: "'Oke', 'good', 'nice'", type: "B" },
      { text: "'Được', 'tốt', 'hay'", type: "C" },
      { text: "Nói tiếng Việt chuẩn", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn quan tâm đến vấn đề nào nhất?",
    options: [
      { text: "Môi trường, bình đẳng, công bằng xã hội", type: "A" },
      { text: "Sức khỏe tinh thần, self-care", type: "B" },
      { text: "Sự nghiệp, tài chính", type: "C" },
      { text: "Gia đình, ổn định cuộc sống", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn thích kiếm tiền bằng cách nào?",
    options: [
      { text: "Content creator, KOL, streamer", type: "A" },
      { text: "Freelance, làm việc tự do", type: "B" },
      { text: "Công việc văn phòng ổn định", type: "C" },
      { text: "Kinh doanh riêng hoặc gia đình", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn nghĩ gì về việc kết hôn?",
    options: [
      { text: "Không vội, tập trung phát triển bản thân", type: "A" },
      { text: "Khi nào có người phù hợp sẽ tính", type: "B" },
      { text: "Nên kết hôn ở độ tuổi phù hợp", type: "C" },
      { text: "Quan trọng, muốn ổn định sớm", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn xử lý stress như thế nào?",
    options: [
      { text: "Lướt TikTok, xem meme, chill", type: "A" },
      { text: "Nghe nhạc, xem phim, self-care", type: "B" },
      { text: "Tập thể dục, đi chơi với bạn", type: "C" },
      { text: "Ngủ, nghỉ ngơi, ở một mình", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn nghĩ gì về side hustle (làm thêm)?",
    options: [
      { text: "Đang có hoặc muốn có nhiều nguồn thu", type: "A" },
      { text: "Thích ý tưởng, đang tìm hiểu", type: "B" },
      { text: "Tập trung vào việc chính", type: "C" },
      { text: "Một công việc ổn định là đủ", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Thái độ của bạn với công việc?",
    options: [
      { text: "Work-life balance là ưu tiên số 1", type: "A" },
      { text: "Làm việc hiệu quả, nghỉ đúng giờ", type: "B" },
      { text: "Chăm chỉ, cống hiến cho sự nghiệp", type: "C" },
      { text: "Làm hết sức, tiền sẽ đến", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn thích giao tiếp qua kênh nào?",
    options: [
      { text: "Tin nhắn, story, DM trên mạng xã hội", type: "A" },
      { text: "Chat qua Zalo, Messenger", type: "B" },
      { text: "Gọi điện thoại nhanh gọn", type: "C" },
      { text: "Gặp mặt trực tiếp", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn follow ai trên mạng xã hội?",
    options: [
      { text: "Influencer, TikToker, streamer", type: "A" },
      { text: "Người nổi tiếng, ca sĩ, diễn viên", type: "B" },
      { text: "Chuyên gia, người có kiến thức", type: "C" },
      { text: "Bạn bè, gia đình là chính", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Gen Z chính hiệu",
    emoji: "🔥",
    description: "Bạn là Gen Z 100%! Bạn am hiểu xu hướng, sống theo triết lý riêng và không ngại thể hiện bản thân. TikTok và mạng xã hội là một phần không thể thiếu của cuộc sống.",
    traits: ["Trendy", "Năng động", "Sáng tạo", "Độc lập"],
    strengths: ["Nắm bắt xu hướng nhanh", "Kỹ năng số tốt", "Tư duy cởi mở"],
    weaknesses: ["Có thể mất tập trung", "Khoảng cách thế hệ với người lớn"],
    tips: ["Cân bằng online và offline", "Học hỏi từ các thế hệ trước"],
  },
  B: {
    type: "B",
    title: "Gen Z hiện đại",
    emoji: "✨",
    description: "Bạn có nhiều đặc điểm Gen Z nhưng vẫn giữ được sự cân bằng. Bạn biết cách sử dụng công nghệ mà không để nó chi phối cuộc sống.",
    traits: ["Cân bằng", "Thông minh", "Thích nghi", "Linh hoạt"],
    strengths: ["Kết hợp tốt truyền thống và hiện đại", "Giao tiếp đa thế hệ", "Biết chọn lọc"],
    weaknesses: ["Đôi khi thiếu quyết đoán", "Đứng giữa hai thế hệ"],
    tips: ["Tiếp tục giữ vững sự cân bằng", "Phát huy thế mạnh của cả hai"],
  },
  C: {
    type: "C",
    title: "Gen Y/Millennial style",
    emoji: "💫",
    description: "Bạn mang nhiều đặc điểm của thế hệ Millennials hơn Gen Z. Bạn thực tế, chăm chỉ và quan tâm đến sự nghiệp ổn định.",
    traits: ["Thực tế", "Chăm chỉ", "Ổn định", "Có mục tiêu"],
    strengths: ["Làm việc hiệu quả", "Biết lên kế hoạch", "Đáng tin cậy"],
    weaknesses: ["Có thể bỏ lỡ xu hướng mới", "Đôi khi quá nghiêm túc"],
    tips: ["Thử trải nghiệm những thứ mới", "Mở lòng với văn hóa Gen Z"],
  },
  D: {
    type: "D",
    title: "Old soul - Tâm hồn cổ điển",
    emoji: "🌿",
    description: "Bạn có tâm hồn cổ điển, trân trọng giá trị truyền thống và ít bị ảnh hưởng bởi xu hướng. Bạn sống theo cách riêng của mình.",
    traits: ["Truyền thống", "Độc lập", "Sâu sắc", "Ổn định"],
    strengths: ["Không bị cuốn theo đám đông", "Có giá trị riêng", "Gắn kết gia đình"],
    weaknesses: ["Có thể khó hòa nhập với giới trẻ", "Bỏ lỡ cơ hội từ công nghệ"],
    tips: ["Thử tìm hiểu về thế giới số", "Kết nối với các thế hệ trẻ hơn"],
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
