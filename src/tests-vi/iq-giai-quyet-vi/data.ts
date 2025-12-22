// Trắc nghiệm Giải quyết vấn đề
// Kiểm tra khả năng giải quyết vấn đề và tìm giải pháp của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn bị kẹt trong thang máy. Bạn sẽ làm gì đầu tiên?",
    options: [
      { text: "Bấm nút báo động và gọi trợ giúp qua intercom", type: "A" },
      { text: "Cố gạng mở cửa thang máy", type: "D" },
      { text: "Hoảng loạn và la hét", type: "C" },
      { text: "Không làm gì, chờ đợi", type: "B" },
    ],
  },
  {
    id: 2,
    question: "Điện thoại bạn rơi xuống nước. Bạn sẽ:",
    options: [
      { text: "Tắt nguồn ngay, lau khô, cho vào gạo/silica gel", type: "A" },
      { text: "Bật lên xem còn hoạt động không", type: "D" },
      { text: "Dùng máy sấy để sấy khô", type: "C" },
      { text: "Vứt đi mua điện thoại mới", type: "B" },
    ],
  },
  {
    id: 3,
    question: "Bạn lỡ hẹn quan trọng với đối tác. Bạn sẽ:",
    options: [
      { text: "Gọi điện xin lỗi ngay, giải thích lý do và đề xuất lịch hẹn mới", type: "A" },
      { text: "Gửi tin nhắn xin lỗi ngắn gọn", type: "B" },
      { text: "Chờ họ liên hệ trước", type: "D" },
      { text: "Bỏ qua, giả vờ như không có cuộc hẹn", type: "C" },
    ],
  },
  {
    id: 4,
    question: "Bạn phát hiện lỗi lớn trong báo cáo đã nộp cho sếp. Bạn sẽ:",
    options: [
      { text: "Báo ngay cho sếp, giải thích lỗi và đề xuất cách sửa", type: "A" },
      { text: "Sửa lại và gửi bản mới mà không giải thích", type: "B" },
      { text: "Hy vọng sếp không phát hiện", type: "D" },
      { text: "Đổ lỗi cho người khác", type: "C" },
    ],
  },
  {
    id: 5,
    question: "Xe bạn hết xăng giữa đường vắng. Bạn sẽ:",
    options: [
      { text: "Bật đèn cảnh báo, gọi cứu hộ hoặc tìm cách xin xăng gần nhất", type: "A" },
      { text: "Ngồi chờ ai đó đi qua giúp", type: "B" },
      { text: "Bỏ xe đi bộ về nhà", type: "D" },
      { text: "Gọi cho bạn bè than thở", type: "C" },
    ],
  },
  {
    id: 6,
    question: "Bạn có 2 deadline cùng ngày mai. Bạn sẽ:",
    options: [
      { text: "Đánh giá độ quan trọng và khối lượng, ưu tiên hoàn thành cái quan trọng trước", type: "A" },
      { text: "Làm cả hai cùng lúc, chia nhỏ thời gian", type: "B" },
      { text: "Xin gia hạn cả hai", type: "C" },
      { text: "Hoảng loạn, không làm được gì", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn phát hiện đồng nghiệp gian lận trong công việc. Bạn sẽ:",
    options: [
      { text: "Thu thập bằng chứng và báo cáo lên cấp trên một cách khách quan", type: "A" },
      { text: "Nói chuyện riêng với đồng nghiệp trước", type: "B" },
      { text: "Giả vờ không biết", type: "D" },
      { text: "Đồn đại với người khác", type: "C" },
    ],
  },
  {
    id: 8,
    question: "Khách hàng tức giận và khiếu nại dịch vụ của bạn. Bạn sẽ:",
    options: [
      { text: "Lắng nghe, thể hiện sự thông cảm, xin lỗi và đề xuất giải pháp", type: "A" },
      { text: "Giải thích rằng đó không phải lỗi của bạn", type: "D" },
      { text: "Chuyển cho người khác xử lý", type: "B" },
      { text: "Phớt lờ đến khi họ bình tĩnh", type: "C" },
    ],
  },
  {
    id: 9,
    question: "Bạn phát hiện nhà bị rò rỉ nước lúc nửa đêm. Bạn sẽ:",
    options: [
      { text: "Khóa van nước tổng, dùng xô hứng và gọi thợ sửa sáng mai", type: "A" },
      { text: "Chờ đến sáng rồi gọi thợ", type: "B" },
      { text: "Dùng băng keo dán tạm và đi ngủ", type: "C" },
      { text: "Hoảng loạn, không biết làm gì", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn bị mất ví ở nơi công cộng. Bạn sẽ:",
    options: [
      { text: "Khóa thẻ ngân hàng ngay, báo công an, kiểm tra camera an ninh", type: "A" },
      { text: "Tìm kiếm quanh khu vực", type: "B" },
      { text: "Đăng lên mạng xã hội nhờ tìm", type: "C" },
      { text: "Chấp nhận mất và làm lại giấy tờ", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Team của bạn đang mâu thuẫn nghiêm trọng. Với tư cách leader, bạn sẽ:",
    options: [
      { text: "Tổ chức cuộc họp, lắng nghe các bên và tìm điểm chung", type: "A" },
      { text: "Ra lệnh mọi người phải hòa thuận", type: "D" },
      { text: "Để họ tự giải quyết", type: "B" },
      { text: "Đuổi người gây rối", type: "C" },
    ],
  },
  {
    id: 12,
    question: "Bạn nhận ra mình đang đi sai đường khi gần đến giờ họp. Bạn sẽ:",
    options: [
      { text: "Dùng GPS tìm đường nhanh nhất và gọi báo sẽ đến muộn", type: "A" },
      { text: "Quay lại từ đầu theo đường cũ", type: "B" },
      { text: "Tiếp tục đi và hy vọng sẽ đến", type: "D" },
      { text: "Hủy cuộc họp", type: "C" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Chuyên Gia Giải Quyết Vấn Đề",
    emoji: "🎯",
    description: "Bạn có khả năng giải quyết vấn đề xuất sắc! Bạn bình tĩnh trong mọi tình huống, phân tích nhanh chóng và đưa ra giải pháp hiệu quả.",
    traits: ["Bình tĩnh", "Phân tích nhanh", "Hành động quyết đoán", "Tư duy giải pháp"],
    strengths: ["Xử lý khủng hoảng", "Ra quyết định nhanh", "Lãnh đạo trong khó khăn"],
    weaknesses: ["Đôi khi quá tự tin", "Có thể bỏ qua ý kiến người khác"],
    tips: ["Lắng nghe thêm góc nhìn khác", "Xây dựng network hỗ trợ"],
  },
  B: {
    type: "B",
    title: "Người Giải Quyết Cẩn Thận",
    emoji: "🔧",
    description: "Bạn có khả năng giải quyết vấn đề tốt với cách tiếp cận cẩn thận và có phương pháp.",
    traits: ["Cẩn thận", "Có phương pháp", "Kiên nhẫn", "Suy nghĩ kỹ"],
    strengths: ["Tránh sai sót", "Giải quyết vấn đề phức tạp", "Lập kế hoạch tốt"],
    weaknesses: ["Đôi khi chậm ra quyết định", "Có thể bỏ lỡ cơ hội"],
    tips: ["Rèn luyện quyết đoán hơn", "Tin vào trực giác đôi khi"],
  },
  C: {
    type: "C",
    title: "Người Cần Phát Triển Kỹ Năng",
    emoji: "📚",
    description: "Khả năng giải quyết vấn đề của bạn còn cần cải thiện. Bạn có thể học hỏi thêm về tư duy giải pháp.",
    traits: ["Có tiềm năng", "Cần hướng dẫn", "Đang học hỏi", "Thiếu tự tin"],
    strengths: ["Biết hỏi người khác", "Không tự mãn", "Sẵn sàng học"],
    weaknesses: ["Dễ hoảng loạn", "Hay đổ lỗi hoặc tránh né"],
    tips: ["Học framework giải quyết vấn đề", "Thực hành với tình huống giả định"],
  },
  D: {
    type: "D",
    title: "Người Cần Rèn Luyện Nhiều",
    emoji: "🌱",
    description: "Giải quyết vấn đề chưa phải điểm mạnh của bạn, nhưng với sự luyện tập, bạn có thể cải thiện đáng kể!",
    traits: ["Cần động lực", "Dễ hoảng loạn", "Thiếu kinh nghiệm", "Tiềm năng ẩn"],
    strengths: ["Biết nhờ giúp đỡ", "Không cố chấp"],
    weaknesses: ["Phản ứng không phù hợp", "Hay trì hoãn giải quyết"],
    tips: ["Bắt đầu với vấn đề nhỏ", "Học từ cách người khác giải quyết", "Tìm mentor hướng dẫn"],
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
