// Cuối Tuần Của Bạn
// Khám phá phong cách sống cuối tuần của bạn

export const questions = [
  {
    id: 1,
    question: "Sáng thứ 7, bạn thường thức dậy lúc mấy giờ?",
    options: [
      { text: "Trước 8h - không thể ngủ nướng", type: "A" },
      { text: "8-10h - ngủ thêm một chút", type: "B" },
      { text: "10h-12h trưa - cuối tuần phải ngủ bù", type: "C" },
      { text: "Sau 12h - ngủ đến khi tự tỉnh", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Cuối tuần lý tưởng của bạn là gì?",
    options: [
      { text: "Đi chơi, du lịch, khám phá", type: "A" },
      { text: "Ở nhà xem phim, đọc sách", type: "B" },
      { text: "Gặp bạn bè, cafe, ăn uống", type: "C" },
      { text: "Ngủ và nghỉ ngơi hoàn toàn", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn có thường lên kế hoạch cho cuối tuần không?",
    options: [
      { text: "Có, từ đầu tuần đã biết làm gì", type: "A" },
      { text: "Có plan sơ sơ, linh hoạt thay đổi", type: "B" },
      { text: "Thường tùy hứng, đến đâu hay đó", type: "C" },
      { text: "Không plan gì, cuối tuần là để chill", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn thường ăn sáng cuối tuần như thế nào?",
    options: [
      { text: "Đi quán phở/bún/hủ tiếu gần nhà", type: "A" },
      { text: "Brunch ở quán sang xịn mịn", type: "B" },
      { text: "Tự nấu ăn sáng ở nhà", type: "C" },
      { text: "Bỏ luôn, ngủ dậy ăn trưa", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Chiều cuối tuần, bạn thường làm gì?",
    options: [
      { text: "Đi cafe với bạn bè, chill và nói chuyện", type: "A" },
      { text: "Tập gym, chạy bộ, thể thao", type: "B" },
      { text: "Shopping, đi chợ, dạo phố", type: "C" },
      { text: "Nằm nhà xem Netflix, lướt điện thoại", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Tối thứ 7, bạn có hay đi chơi đêm không?",
    options: [
      { text: "Có, đi bar/club/party với bạn bè", type: "A" },
      { text: "Thỉnh thoảng, nếu có người rủ", type: "B" },
      { text: "Hiếm khi, thích nhậu nhẹ ở nhà", type: "C" },
      { text: "Không, ở nhà xem phim hoặc ngủ sớm", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Chủ nhật của bạn thường như thế nào?",
    options: [
      { text: "Tiếp tục đi chơi, không lãng phí ngày nghỉ", type: "A" },
      { text: "Nghỉ ngơi, chuẩn bị cho tuần mới", type: "B" },
      { text: "Làm việc nhà, giặt giũ, dọn dẹp", type: "C" },
      { text: "Sợ thứ 2, stress nghĩ đến tuần mới", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có hay làm việc vào cuối tuần không?",
    options: [
      { text: "Không bao giờ, cuối tuần là nghỉ", type: "A" },
      { text: "Thỉnh thoảng, nếu deadline gấp", type: "B" },
      { text: "Khá thường xuyên, làm bù ngày thường", type: "C" },
      { text: "Hầu như cuối tuần nào cũng làm", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn tiêu bao nhiêu tiền cho cuối tuần?",
    options: [
      { text: "Ít thôi, tiết kiệm là chính", type: "A" },
      { text: "Vừa phải, có kế hoạch chi tiêu", type: "B" },
      { text: "Khá nhiều, cuối tuần phải thưởng cho bản thân", type: "C" },
      { text: "Không kiểm soát, tiêu thoải mái", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Sau một cuối tuần, bạn cảm thấy thế nào?",
    options: [
      { text: "Sảng khoái, sẵn sàng cho tuần mới", type: "A" },
      { text: "Vui nhưng hơi mệt", type: "B" },
      { text: "Tiếc vì cuối tuần trôi quá nhanh", type: "C" },
      { text: "Mệt hơn ngày thường vì chơi nhiều", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Cuối Tuần Năng Động",
    emoji: "🏃",
    percentage: 90,
    description: "Cuối tuần của bạn là để tận hưởng cuộc sống! Đi cafe, gặp bạn bè, du lịch, party - bạn không bỏ phí một phút nào. Sau một tuần làm việc vất vả, bạn xứng đáng được vui chơi hết mình!",
    characteristics: ["Hoạt động xã hội nhiều", "Hay đi chơi", "Lên kế hoạch trước", "Tận hưởng cuộc sống"],
    advice: "Đừng quên dành thời gian nghỉ ngơi thực sự! Đôi khi một cuối tuần ở nhà cũng rất cần thiết để nạp lại năng lượng.",
  },
  B: {
    type: "B",
    title: "Cuối Tuần Cân Bằng",
    emoji: "⚖️",
    percentage: 70,
    description: "Bạn biết cách cân bằng giữa vui chơi và nghỉ ngơi. Thứ 7 đi chơi, Chủ nhật nghỉ ngơi - công thức hoàn hảo cho một cuối tuần lý tưởng. Bạn vừa có kỷ niệm đẹp vừa có sức khỏe cho tuần mới!",
    characteristics: ["Cân bằng tốt", "Biết dừng đúng lúc", "Linh hoạt", "Chuẩn bị cho tuần mới"],
    advice: "Tuyệt vời! Hãy tiếp tục duy trì sự cân bằng này. Đây là cách sống khỏe mạnh và bền vững.",
  },
  C: {
    type: "C",
    title: "Cuối Tuần Ở Nhà",
    emoji: "🏠",
    percentage: 55,
    description: "Nhà là nơi bình yên nhất! Bạn thích những cuối tuần ở nhà, xem phim, đọc sách, nấu ăn, dọn dẹp. Không cần đi đâu xa, một cuối tuần yên tĩnh cũng đủ để bạn thấy hạnh phúc!",
    characteristics: ["Thích ở nhà", "Nội tâm", "Yêu sự yên tĩnh", "Tự chăm sóc bản thân"],
    advice: "Đôi khi hãy thử ra ngoài và gặp gỡ bạn bè nhé! Những kết nối xã hội cũng rất quan trọng cho sức khỏe tinh thần.",
  },
  D: {
    type: "D",
    title: "Cuối Tuần Ngủ Bù",
    emoji: "😴",
    percentage: 40,
    description: "Với bạn, cuối tuần là để ngủ bù những đêm thức khuya trong tuần! Ngủ đến trưa, nằm lì xem điện thoại, không làm gì cả. Thỉnh thoảng lười biếng cũng không sao, miễn bạn vui!",
    characteristics: ["Ngủ nhiều", "Lười ra ngoài", "Chill tối đa", "Nghỉ ngơi hoàn toàn"],
    advice: "Nghỉ ngơi là tốt nhưng đừng lãng phí cuối tuần hoàn toàn! Hãy thử lên kế hoạch làm một điều gì đó mới mẻ xem sao.",
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
