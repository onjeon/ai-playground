// Phong cách dùng máy tính
// Khám phá phong cách sử dụng máy tính của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn dùng máy tính để làm gì nhiều nhất?",
    options: [
      { text: "Làm việc, soạn văn bản, xử lý dữ liệu", type: "A" },
      { text: "Sáng tạo nội dung, thiết kế, edit video", type: "B" },
      { text: "Chơi game, xem phim, giải trí", type: "C" },
      { text: "Học tập, nghiên cứu, đọc sách", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Desktop của bạn trông như thế nào?",
    options: [
      { text: "Gọn gàng, chỉ có vài icon cần thiết", type: "A" },
      { text: "Đầy shortcut đến phần mềm sáng tạo", type: "B" },
      { text: "Icon game và thư mục game khắp nơi", type: "C" },
      { text: "Nhiều folder tài liệu học tập", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi máy tính chạy chậm, bạn sẽ?",
    options: [
      { text: "Dọn dẹp file rác, tối ưu hóa hệ thống", type: "A" },
      { text: "Kiểm tra xem app sáng tạo nào chiếm RAM", type: "B" },
      { text: "Tắt bớt game chạy nền", type: "C" },
      { text: "Google cách sửa lỗi", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn thích dùng loại máy tính nào?",
    options: [
      { text: "Laptop mỏng nhẹ, tiện di chuyển", type: "A" },
      { text: "Máy cấu hình cao cho đồ họa", type: "B" },
      { text: "PC gaming với đèn RGB", type: "C" },
      { text: "Máy nào cũng được, miễn chạy tốt", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn có bao nhiêu tab trình duyệt đang mở?",
    options: [
      { text: "Dưới 5 tab, đóng ngay khi không dùng", type: "A" },
      { text: "10-20 tab, toàn tham khảo sáng tạo", type: "B" },
      { text: "Vài tab, chủ yếu là stream và game", type: "C" },
      { text: "Hàng chục tab tài liệu nghiên cứu", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Phần mềm bạn không thể thiếu trên máy tính?",
    options: [
      { text: "Microsoft Office, công cụ quản lý", type: "A" },
      { text: "Photoshop, Premiere, phần mềm sáng tạo", type: "B" },
      { text: "Steam, Epic Games, Discord", type: "C" },
      { text: "Trình duyệt và phần mềm ghi chú", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn backup dữ liệu như thế nào?",
    options: [
      { text: "Tự động lên cloud, có lịch trình rõ ràng", type: "A" },
      { text: "Backup project sáng tạo vào ổ cứng ngoài", type: "B" },
      { text: "Backup save game thôi", type: "C" },
      { text: "Thỉnh thoảng nhớ thì backup", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Góc làm việc máy tính của bạn như thế nào?",
    options: [
      { text: "Tối giản, chỉ có máy và đồ cần thiết", type: "A" },
      { text: "Đầy màu sắc với bảng vẽ, camera", type: "B" },
      { text: "Setup gaming với nhiều màn hình, đèn RGB", type: "C" },
      { text: "Bình thường, có sách vở xung quanh", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi gặp lỗi phần mềm, bạn sẽ?",
    options: [
      { text: "Tự tìm cách sửa theo hướng dẫn", type: "A" },
      { text: "Hỏi cộng đồng sáng tạo online", type: "B" },
      { text: "Cài lại game hoặc verify files", type: "C" },
      { text: "Nhờ người quen am hiểu IT", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn dùng máy tính vào thời gian nào?",
    options: [
      { text: "Giờ làm việc, có kỷ luật", type: "A" },
      { text: "Khi có cảm hứng sáng tạo", type: "B" },
      { text: "Tối và cuối tuần để gaming", type: "C" },
      { text: "Khi cần học hoặc nghiên cứu", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Chuột và bàn phím bạn dùng như thế nào?",
    options: [
      { text: "Chuột, phím bình thường, quan trọng êm", type: "A" },
      { text: "Bàn phím tốt và có bảng vẽ đồ họa", type: "B" },
      { text: "Chuột gaming, bàn phím cơ RGB", type: "C" },
      { text: "Dùng cái gì cũng được", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn có thường xuyên nâng cấp máy tính không?",
    options: [
      { text: "Nâng cấp khi cần thiết cho công việc", type: "A" },
      { text: "Nâng cấp để chạy phần mềm nặng hơn", type: "B" },
      { text: "Nâng cấp thường xuyên để chơi game mới", type: "C" },
      { text: "Hiếm khi, máy cũ vẫn dùng tốt", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người dùng chuyên nghiệp",
    emoji: "💻",
    description: "Máy tính là công cụ làm việc không thể thiếu của bạn. Bạn sử dụng máy tính một cách có hệ thống và hiệu quả, tập trung vào năng suất công việc.",
    traits: ["Chuyên nghiệp", "Có tổ chức", "Hiệu quả", "Kỷ luật"],
    strengths: ["Làm việc năng suất cao", "Quản lý file tốt", "Thành thạo công cụ văn phòng"],
    weaknesses: ["Có thể thiếu sáng tạo", "Ít khám phá tính năng mới"],
    tips: ["Thử khám phá các công cụ mới", "Dành thời gian giải trí với máy tính"],
  },
  B: {
    type: "B",
    title: "Người sáng tạo số",
    emoji: "🎨",
    description: "Máy tính là studio sáng tạo của bạn. Bạn dùng nó để biến ý tưởng thành hiện thực qua thiết kế, video, âm nhạc hoặc các hình thức nghệ thuật số khác.",
    traits: ["Sáng tạo", "Nghệ sĩ", "Đam mê", "Độc đáo"],
    strengths: ["Kỹ năng sáng tạo xuất sắc", "Am hiểu phần mềm chuyên dụng", "Tư duy thẩm mỹ tốt"],
    weaknesses: ["Có thể bỏ qua tác vụ thường ngày", "Máy hay bị nặng"],
    tips: ["Nhớ backup project thường xuyên", "Cân bằng giữa sáng tạo và nghỉ ngơi"],
  },
  C: {
    type: "C",
    title: "Game thủ PC",
    emoji: "🎮",
    description: "Máy tính của bạn chủ yếu dành cho gaming. Bạn đam mê thế giới game và luôn muốn có cấu hình tốt nhất để trải nghiệm những tựa game mới.",
    traits: ["Đam mê game", "Am hiểu phần cứng", "Cạnh tranh", "Cộng đồng"],
    strengths: ["Hiểu biết về phần cứng", "Phản xạ tốt", "Kết nối với cộng đồng game"],
    weaknesses: ["Có thể dành quá nhiều thời gian chơi game", "Chi tiêu nhiều cho setup"],
    tips: ["Cân bằng thời gian game và cuộc sống", "Tận dụng máy tính cho những việc khác"],
  },
  D: {
    type: "D",
    title: "Người học hỏi",
    emoji: "📚",
    description: "Máy tính là thư viện và phòng học của bạn. Bạn dùng nó chủ yếu để học tập, nghiên cứu và mở rộng kiến thức trong nhiều lĩnh vực.",
    traits: ["Ham học", "Tò mò", "Kiến thức", "Trầm tĩnh"],
    strengths: ["Khả năng tự học tốt", "Nghiên cứu kỹ lưỡng", "Biết tận dụng internet"],
    weaknesses: ["Có thể thiếu kỹ năng thực hành", "Ít khám phá giải trí"],
    tips: ["Thử áp dụng kiến thức vào thực tế", "Giải trí đôi khi cũng tốt cho não bộ"],
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
