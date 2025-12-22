// Phong Cách Chạy Bộ
// Khám phá phong cách chạy bộ phù hợp với tính cách của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn thường chạy bộ vào thời điểm nào?",
    options: [
      { text: "Sáng sớm 5-6h để đón bình minh", type: "A" },
      { text: "Giờ trưa hoặc chiều sau giờ làm", type: "B" },
      { text: "Tối muộn khi yên tĩnh", type: "C" },
      { text: "Cuối tuần khi có thời gian", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi chạy bộ, bạn thường:",
    options: [
      { text: "Chạy hết sức để đạt thành tích tốt nhất", type: "A" },
      { text: "Chạy theo nhịp tim và kế hoạch đã định", type: "B" },
      { text: "Chạy đều đặn, không quan tâm tốc độ", type: "C" },
      { text: "Chạy khi nào mệt thì dừng", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn chạy bộ ở đâu nhiều nhất?",
    options: [
      { text: "Đường đua hoặc track tiêu chuẩn", type: "A" },
      { text: "Công viên hoặc đường quen thuộc", type: "B" },
      { text: "Đường mòn trong rừng hoặc núi", type: "C" },
      { text: "Máy chạy bộ trong phòng gym", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Mục tiêu chạy bộ của bạn là:",
    options: [
      { text: "Hoàn thành marathon hoặc ultra", type: "A" },
      { text: "Cải thiện sức khỏe tim mạch", type: "B" },
      { text: "Giảm cân và giữ dáng", type: "C" },
      { text: "Thư giãn và suy nghĩ", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn có theo dõi số liệu khi chạy không?",
    options: [
      { text: "Rất kỹ: nhịp tim, pace, cadence, elevation", type: "A" },
      { text: "Cơ bản: thời gian và quãng đường", type: "B" },
      { text: "Thỉnh thoảng kiểm tra", type: "C" },
      { text: "Không, chỉ cảm nhận cơ thể", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi chạy, bạn thường làm gì?",
    options: [
      { text: "Tập trung vào hơi thở và kỹ thuật", type: "A" },
      { text: "Nghe podcast hoặc audiobook", type: "B" },
      { text: "Nghe nhạc sôi động", type: "C" },
      { text: "Không làm gì, chỉ quan sát xung quanh", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi thời tiết xấu (nắng gắt, mưa), bạn:",
    options: [
      { text: "Vẫn chạy, thời tiết không phải vấn đề", type: "A" },
      { text: "Đổi sang chạy trong nhà", type: "B" },
      { text: "Chờ thời tiết đẹp hơn", type: "C" },
      { text: "Nghỉ và làm việc khác", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn mua giày chạy bộ như thế nào?",
    options: [
      { text: "Nghiên cứu kỹ và chọn giày chuyên dụng", type: "A" },
      { text: "Đến cửa hàng và được tư vấn", type: "B" },
      { text: "Chọn giày đẹp và thoải mái", type: "C" },
      { text: "Dùng giày thể thao bất kỳ", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có tham gia các giải chạy không?",
    options: [
      { text: "Thường xuyên, từ 5K đến marathon", type: "A" },
      { text: "Thỉnh thoảng, để có mục tiêu", type: "B" },
      { text: "Một vài lần cho vui", type: "C" },
      { text: "Không, thích chạy một mình", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Sau khi chạy xong, bạn thường:",
    options: [
      { text: "Giãn cơ kỹ và phân tích dữ liệu", type: "A" },
      { text: "Tắm và ăn sáng dinh dưỡng", type: "B" },
      { text: "Nghỉ ngơi và uống nước", type: "C" },
      { text: "Cảm thấy năng lượng để bắt đầu ngày mới", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn chạy cùng ai?",
    options: [
      { text: "Nhóm chạy hoặc câu lạc bộ", type: "A" },
      { text: "Một vài người bạn cùng lịch trình", type: "B" },
      { text: "Thường chạy một mình", type: "C" },
      { text: "Ai rủ cũng được", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều gì khiến bạn tiếp tục chạy bộ?",
    options: [
      { text: "Muốn chinh phục những thử thách lớn hơn", type: "A" },
      { text: "Thấy sức khỏe cải thiện rõ rệt", type: "B" },
      { text: "Cảm giác tự do và thư thái", type: "C" },
      { text: "Thói quen và cảm giác thiếu khi không chạy", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Runner Chuyên Nghiệp",
    emoji: "🏃",
    description: "Chạy bộ là đam mê và lối sống của bạn! Bạn luôn đặt mục tiêu cao và không ngừng phấn đấu để phá vỡ kỷ lục cá nhân. Marathon hay ultra đều nằm trong tầm tay.",
    traits: ["Quyết tâm", "Kỷ luật", "Cạnh tranh", "Bền bỉ"],
    strengths: ["Sức bền đáng nể", "Tinh thần thép", "Luôn cải thiện"],
    weaknesses: ["Có thể tập luyện quá sức", "Đôi khi quá nghiêm túc"],
    tips: ["Lắng nghe cơ thể để tránh chấn thương", "Đôi khi chạy vui vẻ không cần mục tiêu"],
  },
  B: {
    type: "B",
    title: "Runner Khỏe Mạnh",
    emoji: "💪",
    description: "Bạn chạy bộ vì sức khỏe và cân bằng cuộc sống. Không quá cuồng thành tích nhưng vẫn nghiêm túc với lịch tập, bạn là hình mẫu của lối sống lành mạnh.",
    traits: ["Cân bằng", "Kiên định", "Thực tế", "Có kế hoạch"],
    strengths: ["Duy trì thói quen tốt", "Sức khỏe ổn định", "Không bị chấn thương"],
    weaknesses: ["Có thể thiếu đột phá", "Đôi khi nhàm chán"],
    tips: ["Thử thách bản thân với giải chạy mới", "Khám phá những cung đường mới"],
  },
  C: {
    type: "C",
    title: "Runner Tự Do",
    emoji: "🌿",
    description: "Với bạn, chạy bộ là cách để kết nối với thiên nhiên và bản thân. Bạn yêu những con đường mòn, không bị ràng buộc bởi số liệu hay thành tích.",
    traits: ["Tự do", "Yêu thiên nhiên", "Nội tâm", "Linh hoạt"],
    strengths: ["Tinh thần thoải mái", "Khám phá nhiều nơi", "Không áp lực"],
    weaknesses: ["Thiếu kỷ luật đôi khi", "Tiến bộ chậm"],
    tips: ["Đặt mục tiêu nhỏ để có động lực", "Tham gia cộng đồng runner để học hỏi"],
  },
  D: {
    type: "D",
    title: "Runner Thoải Mái",
    emoji: "😌",
    description: "Chạy bộ với bạn đơn giản là một hoạt động thư giãn. Bạn không áp lực bản thân, chạy khi muốn và nghỉ khi cần. Đơn giản nhưng bền vững.",
    traits: ["Thoải mái", "Không áp lực", "Linh hoạt", "Vui vẻ"],
    strengths: ["Không bị burnout", "Tận hưởng từng bước chạy", "Cân bằng tốt"],
    weaknesses: ["Có thể thiếu kiên định", "Kết quả không ổn định"],
    tips: ["Thử đặt lịch chạy cố định", "Tìm bạn chạy để có động lực"],
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
