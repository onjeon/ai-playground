// YouTuber Trong Bạn
// Khám phá phong cách YouTube của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn thường xem gì trên YouTube?",
    options: [
      { text: "Vlog, cuộc sống thường ngày", type: "A" },
      { text: "Gaming, walkthrough, stream", type: "B" },
      { text: "Kiến thức, khoa học, self-help", type: "C" },
      { text: "Nhạc, MV, entertainment", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn đăng ký bao nhiêu kênh YouTube?",
    options: [
      { text: "Dưới 50 kênh - chọn lọc kỹ", type: "A" },
      { text: "50-200 kênh - vừa phải", type: "B" },
      { text: "200-500 kênh - nhiều sở thích", type: "C" },
      { text: "Trên 500 - đăng ký mọi thứ", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn có dùng YouTube Premium không?",
    options: [
      { text: "Có, xem không quảng cáo sướng lắm", type: "A" },
      { text: "Dùng mod/crack để skip ad", type: "B" },
      { text: "Không, xem quảng cáo bình thường", type: "C" },
      { text: "Dùng Vanced/ReVanced", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn thường xem YouTube vào lúc nào?",
    options: [
      { text: "Trước khi ngủ - ru ngủ", type: "A" },
      { text: "Khi ăn cơm - không thể ăn không xem", type: "B" },
      { text: "Lúc rảnh, không cố định", type: "C" },
      { text: "Cả ngày, mở nền liên tục", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Nếu bạn làm YouTuber, bạn sẽ làm content gì?",
    options: [
      { text: "Vlog cuộc sống, daily life", type: "A" },
      { text: "Gaming, stream chơi game", type: "B" },
      { text: "Review sản phẩm, công nghệ", type: "C" },
      { text: "Hài hước, parody, meme", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn có hay comment trên YouTube không?",
    options: [
      { text: "Thường xuyên, chia sẻ ý kiến", type: "A" },
      { text: "Thỉnh thoảng, khi thấy hay", type: "B" },
      { text: "Hiếm khi, chỉ xem thôi", type: "C" },
      { text: "Không bao giờ", type: "D" },
    ],
  },
  {
    id: 7,
    question: "YouTuber Việt Nam nào bạn thích nhất?",
    options: [
      { text: "Những kênh vlog, lifestyle", type: "A" },
      { text: "Kênh gaming như ViruSs, Thầy Giáo Ba", type: "B" },
      { text: "Kênh review, công nghệ", type: "C" },
      { text: "Kênh hài, parody, drama", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn phản ứng thế nào khi thấy quảng cáo?",
    options: [
      { text: "Skip ngay sau 5 giây", type: "A" },
      { text: "Xem hết nếu thấy hay", type: "B" },
      { text: "Làm việc khác chờ hết ad", type: "C" },
      { text: "Tức giận, refresh trang", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn thường xem video bao lâu?",
    options: [
      { text: "Shorts, video ngắn dưới 1 phút", type: "A" },
      { text: "Video 10-20 phút", type: "B" },
      { text: "Video dài 30 phút - 1 tiếng", type: "C" },
      { text: "Livestream, podcast dài", type: "D" },
    ],
  },
  {
    id: 10,
    question: "YouTube đối với bạn là gì?",
    options: [
      { text: "Giải trí chính, nguồn vui mỗi ngày", type: "A" },
      { text: "Nguồn học kiến thức mới", type: "B" },
      { text: "Nền nhạc khi làm việc", type: "C" },
      { text: "Thay thế TV truyền thống", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "YouTube Addict",
    emoji: "📺",
    percentage: 90,
    description: "YouTube là nguồn giải trí chính của bạn! Bạn xem video mọi lúc - ăn cơm, trước khi ngủ, lúc rảnh. Cuộc sống không có YouTube thì chán lắm, đúng không?",
    characteristics: ["Xem YouTube cả ngày", "Biết hết YouTuber nổi tiếng", "Không thể ăn không xem", "Subscribe nhiều kênh"],
    advice: "Hãy thử giảm thời gian xem YouTube và tìm những hoạt động offline thú vị. Đôi khi disconnect cũng tốt cho sức khỏe tinh thần!",
  },
  B: {
    type: "B",
    title: "Người Học Hỏi",
    emoji: "📚",
    percentage: 75,
    description: "Bạn dùng YouTube như một công cụ học tập tuyệt vời! Tutorial, how-to, kiến thức khoa học - YouTube là trường đại học miễn phí của bạn. Thông minh đấy!",
    characteristics: ["Học từ YouTube", "Xem video chất lượng", "Chọn lọc nội dung", "Kiến thức đa dạng"],
    advice: "Tuyệt vời! Hãy tiếp tục học hỏi nhưng nhớ áp dụng vào thực tế. Kiến thức không thực hành thì sẽ quên nhanh lắm!",
  },
  C: {
    type: "C",
    title: "Background Viewer",
    emoji: "🎵",
    percentage: 55,
    description: "YouTube với bạn như một đài radio hiện đại! Bạn mở video làm nền khi làm việc, học bài, hoặc làm việc nhà. Không cần xem, chỉ cần nghe thôi cũng đủ!",
    characteristics: ["Mở nền khi làm việc", "Thích podcast, nhạc", "Không xem tập trung", "Multitask giỏi"],
    advice: "Đây là cách dùng YouTube hiệu quả! Nhưng đôi khi hãy thử xem tập trung một video hay, bạn sẽ tiếp thu được nhiều hơn.",
  },
  D: {
    type: "D",
    title: "YouTuber Tiềm Năng",
    emoji: "🎬",
    percentage: 85,
    description: "Bạn không chỉ xem mà còn nghĩ về việc làm content! Bạn phân tích video, nghĩ cách làm hay hơn, và có nhiều ý tưởng sáng tạo. Sao không thử làm YouTuber luôn đi?",
    characteristics: ["Có ý tưởng content", "Phân tích video hay", "Muốn thử làm YouTuber", "Sáng tạo"],
    advice: "Hãy bắt đầu làm video đi! Không cần thiết bị đắt tiền, điện thoại là đủ. Bước đầu tiên luôn là quan trọng nhất.",
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
