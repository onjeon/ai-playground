// Bạn Xem Netflix Như Thế Nào?
// Khám phá tính cách qua cách bạn xem Netflix

export const questions = [
  {
    id: 1,
    question: "Bạn thường xem Netflix vào lúc nào?",
    options: [
      { text: "Đêm khuya, khi mọi người đã ngủ", type: "A" },
      { text: "Cuối tuần, marathon cả ngày", type: "B" },
      { text: "Sau giờ làm, thư giãn buổi tối", type: "C" },
      { text: "Bất cứ lúc nào rảnh, cả ngày lẫn đêm", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thường xem thể loại gì?",
    options: [
      { text: "K-drama, phim Hàn Quốc", type: "A" },
      { text: "True crime, documentary", type: "B" },
      { text: "Series hành động, thriller", type: "C" },
      { text: "Rom-com, phim tình cảm nhẹ nhàng", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi có series mới hot, bạn?",
    options: [
      { text: "Xem hết ngay ngày đầu release", type: "A" },
      { text: "Đợi xem review trước rồi mới quyết định", type: "B" },
      { text: "Xem từ từ, mỗi ngày 1-2 tập", type: "C" },
      { text: "Để đó, khi nào rảnh thì xem", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn xem Netflix một mình hay với ai?",
    options: [
      { text: "Một mình, tận hưởng riêng", type: "A" },
      { text: "Với người yêu/gia đình", type: "B" },
      { text: "Với bạn bè, xem party", type: "C" },
      { text: "Tùy phim, tùy tâm trạng", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi xem phim, bạn có hay skip không?",
    options: [
      { text: "Skip intro, skip recap, skip mọi thứ", type: "A" },
      { text: "Chỉ skip intro thôi", type: "B" },
      { text: "Xem hết, không skip gì cả", type: "C" },
      { text: "Tua nhanh đoạn chán, xem kỹ đoạn hay", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi xem phim xong, bạn thường?",
    options: [
      { text: "Lên mạng đọc review, discuss", type: "A" },
      { text: "Xem tiếp phim khác ngay", type: "B" },
      { text: "Suy ngẫm về phim, để cảm xúc lắng đọng", type: "C" },
      { text: "Kể cho bạn bè, recommend ngay", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Đồ ăn kèm khi xem Netflix?",
    options: [
      { text: "Bỏng ngô, snack giòn tan", type: "A" },
      { text: "Trà sữa, đồ uống", type: "B" },
      { text: "Mì gói, đồ ăn nhanh", type: "C" },
      { text: "Không ăn, tập trung xem", type: "D" },
    ],
  },
  {
    id: 8,
    question: "List 'My List' của bạn như thế nào?",
    options: [
      { text: "Dài vô tận, add nhiều hơn xem", type: "A" },
      { text: "Tinh gọn, chỉ phim muốn xem", type: "B" },
      { text: "Rỗng, add rồi xem luôn", type: "C" },
      { text: "Không dùng, browse trực tiếp", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có hay bị spoil phim không?",
    options: [
      { text: "Có, vì xem chậm hơn mọi người", type: "A" },
      { text: "Tự spoil, đọc trước kết phim", type: "B" },
      { text: "Không, cẩn thận tránh spoiler", type: "C" },
      { text: "Không quan tâm spoil, vẫn xem được", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Tài khoản Netflix của bạn?",
    options: [
      { text: "Tự trả, dùng một mình", type: "A" },
      { text: "Share với gia đình/bạn bè", type: "B" },
      { text: "Xài chung, ai trả cũng được", type: "C" },
      { text: "Dùng thử free, không muốn trả tiền", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Cú Đêm Nghiện Phim",
    emoji: "🦉",
    description: "Bạn là cú đêm thực thụ! Đêm khuya là lúc bạn binge-watch điên cuồng. Bạn thích tận hưởng không gian riêng tư, yên tĩnh để đắm chìm vào thế giới phim ảnh.",
    traits: ["Cú đêm", "Độc lập", "Đam mê", "Tập trung"],
    strengths: ["Thưởng thức phim sâu sắc", "Không bị làm phiền", "Có thời gian riêng"],
    weaknesses: ["Thiếu ngủ", "Ảnh hưởng sức khỏe", "Khó dậy sớm"],
    tips: ["Đặt giới hạn số tập mỗi đêm", "Ngủ đủ giấc cuối tuần"],
  },
  B: {
    type: "B",
    title: "Dân Marathon Cuối Tuần",
    emoji: "📺",
    description: "Cuối tuần là thời gian của bạn! Bạn thích dành cả ngày để marathon series yêu thích. Xem phim với người thân là cách bạn gắn kết và thư giãn.",
    traits: ["Cân bằng", "Gia đình", "Thư giãn", "Có kế hoạch"],
    strengths: ["Không ảnh hưởng công việc", "Quality time", "Thư giãn hiệu quả"],
    weaknesses: ["Có thể lãng phí cuối tuần", "Ít hoạt động ngoài trời"],
    tips: ["Kết hợp với hoạt động khác", "Ra ngoài ít nhất 1 buổi"],
  },
  C: {
    type: "C",
    title: "Người Xem Điềm Đạm",
    emoji: "🎬",
    description: "Bạn xem phim một cách điềm đạm và có chiều sâu! Không vội vàng, mỗi tập là một trải nghiệm. Bạn thưởng thức phim như nghệ thuật, không chỉ để giải trí.",
    traits: ["Điềm đạm", "Sâu sắc", "Thưởng thức", "Kiên nhẫn"],
    strengths: ["Cảm nhận phim sâu sắc", "Không bị nghiện", "Cân bằng cuộc sống"],
    weaknesses: ["Có thể bị spoil", "Xem chậm hơn trend"],
    tips: ["Tránh mạng xã hội khi có phim hot", "Tận hưởng nhịp độ của mình"],
  },
  D: {
    type: "D",
    title: "Dân Xem Linh Hoạt",
    emoji: "🎭",
    description: "Bạn xem phim theo cảm hứng! Không bị gò bó bởi thời gian hay thể loại. Bạn linh hoạt, thích khám phá nhiều loại phim và không ngại thử cái mới.",
    traits: ["Linh hoạt", "Đa dạng", "Cởi mở", "Phóng khoáng"],
    strengths: ["Xem được nhiều thể loại", "Không bị stress", "Dễ tìm phim hay"],
    weaknesses: ["Khó tập trung một phim", "Có thể bỏ dở nhiều series"],
    tips: ["Hoàn thành series đang xem trước", "Đánh dấu phim hay để xem lại"],
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
