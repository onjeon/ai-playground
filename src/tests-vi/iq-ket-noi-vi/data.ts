// Trắc nghiệm Kết Nối
// Đánh giá khả năng tìm ra mối liên hệ giữa các sự vật, hiện tượng

export const questions = [
  {
    id: 1,
    question: "Mối liên hệ giữa 'cây' và 'sách' là gì?",
    options: [
      { text: "Giấy trong sách làm từ cây, cả hai đều mang tri thức", type: "A" },
      { text: "Cây cho gỗ làm giấy", type: "B" },
      { text: "Cả hai đều có thể cao", type: "C" },
      { text: "Không thấy mối liên hệ rõ ràng", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi học một chủ đề mới, bạn thường:",
    options: [
      { text: "Liên kết với nhiều kiến thức đã biết từ các lĩnh vực khác", type: "A" },
      { text: "Tìm mối liên hệ với những gì đã học trong cùng lĩnh vực", type: "B" },
      { text: "Học từng phần riêng biệt rồi mới kết nối", type: "C" },
      { text: "Tập trung học kiến thức mới độc lập", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Mối liên hệ giữa 'kiến' và 'công ty' là gì?",
    options: [
      { text: "Cả hai đều có cấu trúc tổ chức, phân công lao động rõ ràng", type: "A" },
      { text: "Kiến làm việc theo đàn như nhân viên công ty", type: "B" },
      { text: "Cả hai đều cần người lãnh đạo", type: "C" },
      { text: "Không thấy mối liên hệ", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn thấy mối liên hệ giữa 'nước' và 'tiền' không?",
    options: [
      { text: "Cả hai đều là dòng chảy, cần lưu thông, có thể cạn kiệt", type: "A" },
      { text: "Cả hai đều là nguồn lực quan trọng", type: "B" },
      { text: "Nước miễn phí, tiền phải kiếm", type: "C" },
      { text: "Hai thứ hoàn toàn khác nhau", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi gặp vấn đề mới, bạn thường:",
    options: [
      { text: "Nghĩ đến các vấn đề tương tự từ lĩnh vực khác để áp dụng", type: "A" },
      { text: "Tìm giải pháp từ vấn đề tương tự đã gặp", type: "B" },
      { text: "Nghiên cứu giải pháp cụ thể cho vấn đề đó", type: "C" },
      { text: "Thử nghiệm ngẫu nhiên cho đến khi giải quyết được", type: "D" },
    ],
  },
  {
    id: 6,
    question: "'Âm nhạc' và 'toán học' có mối liên hệ gì?",
    options: [
      { text: "Nhịp điệu là con số, hợp âm là phương trình, cả hai đều có cấu trúc", type: "A" },
      { text: "Cả hai đều cần sự chính xác", type: "B" },
      { text: "Một số người giỏi cả hai", type: "C" },
      { text: "Đây là hai lĩnh vực khác nhau", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có thể tìm ra điểm chung giữa 'đám mây' và 'bông gòn' không?",
    options: [
      { text: "Hình dáng, độ nhẹ, màu trắng, sự mềm mại, đều từ tự nhiên", type: "A" },
      { text: "Cả hai đều trông giống nhau", type: "B" },
      { text: "Cả hai đều nhẹ và trắng", type: "C" },
      { text: "Một ở trên trời, một ở dưới đất", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Mối liên hệ giữa 'học sinh' và 'hạt giống' là gì?",
    options: [
      { text: "Cả hai đều cần được chăm sóc để phát triển tiềm năng", type: "A" },
      { text: "Học sinh học về hạt giống trong môn sinh học", type: "B" },
      { text: "Cả hai đều nhỏ bé", type: "C" },
      { text: "Không có mối liên hệ", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi đọc tin tức về kinh tế, bạn có nghĩ đến ảnh hưởng đến cuộc sống hàng ngày không?",
    options: [
      { text: "Luôn liên hệ ngay đến giá cả, việc làm, và quyết định cá nhân", type: "A" },
      { text: "Đôi khi nghĩ đến ảnh hưởng chung", type: "B" },
      { text: "Chỉ quan tâm nếu ảnh hưởng trực tiếp", type: "C" },
      { text: "Không nghĩ đến mối liên hệ", type: "D" },
    ],
  },
  {
    id: 10,
    question: "'Cầu vồng' và 'sự đa dạng' có mối liên hệ gì?",
    options: [
      { text: "Cầu vồng là biểu tượng hoàn hảo của sự đa dạng hài hòa", type: "A" },
      { text: "Cầu vồng có nhiều màu như xã hội có nhiều loại người", type: "B" },
      { text: "Cả hai đều có nhiều thành phần", type: "C" },
      { text: "Đây chỉ là ẩn dụ, không phải liên hệ thật", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn có thể kết nối 'ong mật' với 'internet' không?",
    options: [
      { text: "Cả hai đều là mạng lưới kết nối, thu thập và phân phối thông tin/nguồn lực", type: "A" },
      { text: "Ong bay đi nhiều nơi như thông tin trên internet", type: "B" },
      { text: "Khó tìm mối liên hệ rõ ràng", type: "C" },
      { text: "Hai thứ hoàn toàn không liên quan", type: "D" },
    ],
  },
  {
    id: 12,
    question: "'Giấc ngủ' và 'khởi động lại máy tính' có gì giống nhau?",
    options: [
      { text: "Cả hai đều là quá trình reset, xử lý thông tin tích lũy, và tối ưu hóa", type: "A" },
      { text: "Cả hai đều giúp làm mới trạng thái", type: "B" },
      { text: "Cả hai đều cần thời gian để hoàn thành", type: "C" },
      { text: "Đây là ẩn dụ khiên cưỡng", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Bậc Thầy Kết Nối",
    emoji: "🌐",
    description: "Bạn có khả năng kết nối xuất sắc! Bạn dễ dàng nhìn thấy mối liên hệ giữa các sự vật, ý tưởng dường như không liên quan và tạo ra những hiểu biết sâu sắc.",
    traits: ["Tư duy liên kết", "Sáng tạo", "Nhìn xa trông rộng", "Học hỏi liên ngành"],
    strengths: ["Giải quyết vấn đề sáng tạo", "Tư duy hệ thống", "Truyền đạt ý tưởng phức tạp"],
    weaknesses: ["Có thể thấy liên hệ không tồn tại", "Đôi khi phức tạp hóa vấn đề"],
    tips: ["Phát triển khả năng trong nghiên cứu liên ngành", "Chia sẻ góc nhìn độc đáo của bạn"],
  },
  B: {
    type: "B",
    title: "Người Kết Nối Tốt",
    emoji: "🔗",
    description: "Bạn có khả năng kết nối tốt, đặc biệt trong các lĩnh vực quen thuộc. Bạn có thể mở rộng kỹ năng này sang nhiều lĩnh vực khác.",
    traits: ["Liên kết logic", "Học hỏi nhanh", "Thực tế", "Có hệ thống"],
    strengths: ["Áp dụng kiến thức vào thực tế", "Giải thích rõ ràng", "Xây dựng trên nền tảng có sẵn"],
    weaknesses: ["Có thể bỏ lỡ liên hệ sâu xa", "Cần mở rộng phạm vi tư duy"],
    tips: ["Đọc sách đa dạng lĩnh vực", "Thử tìm mối liên hệ bất ngờ mỗi ngày"],
  },
  C: {
    type: "C",
    title: "Người Tư Duy Tuyến Tính",
    emoji: "📊",
    description: "Bạn có xu hướng tư duy theo từng bước, từng phần. Đây là cách tiếp cận có giá trị trong nhiều tình huống cần sự chính xác và chi tiết.",
    traits: ["Có trình tự", "Chi tiết", "Chính xác", "Kiên nhẫn"],
    strengths: ["Làm việc có phương pháp", "Ít sai sót", "Theo dõi quy trình tốt"],
    weaknesses: ["Có thể bỏ lỡ bức tranh toàn cảnh", "Chậm trong việc kết nối ý tưởng"],
    tips: ["Luyện tập tư duy liên tưởng", "Chơi các trò chơi kết nối từ"],
  },
  D: {
    type: "D",
    title: "Người Độc Lập",
    emoji: "🔲",
    description: "Bạn thường xử lý thông tin độc lập, không tìm kiếm mối liên hệ. Điều này có thể giúp bạn tập trung sâu vào một chủ đề cụ thể.",
    traits: ["Chuyên sâu", "Tập trung", "Độc lập", "Cụ thể"],
    strengths: ["Chuyên gia trong lĩnh vực hẹp", "Không bị phân tâm", "Phân tích kỹ lưỡng"],
    weaknesses: ["Có thể thiếu góc nhìn toàn diện", "Khó ứng dụng kiến thức sang lĩnh vực khác"],
    tips: ["Thử liên hệ một điều mới với điều đã biết mỗi ngày", "Tham gia thảo luận nhóm đa lĩnh vực"],
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
