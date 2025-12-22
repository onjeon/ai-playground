// Hà Nội hay Sài Gòn
// Khám phá xem bạn hợp với cuộc sống Hà Nội hay Sài Gòn

export const questions = [
  {
    id: 1,
    question: "Bạn thích bắt đầu ngày mới như thế nào?",
    options: [
      { text: "Uống cà phê pha phin chậm rãi", type: "A" },
      { text: "Cà phê sữa đá mang đi, nhanh gọn", type: "B" },
      { text: "Trà đá vỉa hè, ngắm phố", type: "C" },
      { text: "Nước ép trái cây tươi mát", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Cuối tuần bạn thường làm gì?",
    options: [
      { text: "Đi bộ quanh Hồ Gươm, thăm phố cổ", type: "A" },
      { text: "Cafe rooftop, shopping mall", type: "B" },
      { text: "Ở nhà đọc sách, nghỉ ngơi", type: "C" },
      { text: "Đi phượt, khám phá ngoại thành", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn thích thời tiết như thế nào?",
    options: [
      { text: "Có bốn mùa, thích mùa thu Hà Nội", type: "A" },
      { text: "Nắng ấm quanh năm", type: "B" },
      { text: "Mát mẻ, không quá nóng", type: "C" },
      { text: "Không quan trọng, thích ứng được hết", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Phong cách làm việc của bạn?",
    options: [
      { text: "Cẩn thận, tỉ mỉ, làm đến nơi đến chốn", type: "A" },
      { text: "Nhanh nhẹn, linh hoạt, ứng biến tốt", type: "B" },
      { text: "Có kế hoạch, theo đúng quy trình", type: "C" },
      { text: "Sáng tạo, không theo khuôn mẫu", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Món ăn sáng yêu thích?",
    options: [
      { text: "Phở, bún chả, bún đậu", type: "A" },
      { text: "Cơm tấm, bánh mì, hủ tiếu", type: "B" },
      { text: "Xôi, bánh cuốn", type: "C" },
      { text: "Gì cũng được, miễn ngon", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi di chuyển, bạn thích?",
    options: [
      { text: "Xe máy len lỏi phố phường", type: "A" },
      { text: "Grab car thoải mái, máy lạnh", type: "B" },
      { text: "Xe buýt, tiết kiệm chi phí", type: "C" },
      { text: "Đi bộ, tận hưởng không gian", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Nhịp sống bạn thích?",
    options: [
      { text: "Chậm rãi, có thời gian suy nghĩ", type: "A" },
      { text: "Nhanh, năng động, đầy thử thách", type: "B" },
      { text: "Vừa phải, cân bằng", type: "C" },
      { text: "Tùy giai đoạn, linh hoạt thay đổi", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi gặp người mới, bạn thường?",
    options: [
      { text: "Lịch sự, giữ khoảng cách ban đầu", type: "A" },
      { text: "Thân thiện, cởi mở ngay", type: "B" },
      { text: "Quan sát trước, nói sau", type: "C" },
      { text: "Tùy cảm nhận về người đó", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn thích ở đâu?",
    options: [
      { text: "Nhà phố cổ, có chiều sâu lịch sử", type: "A" },
      { text: "Chung cư cao cấp, hiện đại", type: "B" },
      { text: "Nhà yên tĩnh, gần thiên nhiên", type: "C" },
      { text: "Ở đâu cũng được, miễn thuận tiện", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Quan niệm về thành công của bạn?",
    options: [
      { text: "Có vị trí xã hội, được tôn trọng", type: "A" },
      { text: "Kiếm được nhiều tiền, sống sung túc", type: "B" },
      { text: "Gia đình hạnh phúc, công việc ổn định", type: "C" },
      { text: "Làm những gì mình yêu thích", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Khi có thời gian rảnh, bạn thích?",
    options: [
      { text: "Thăm bảo tàng, di tích lịch sử", type: "A" },
      { text: "Mua sắm, thử đồ ăn mới", type: "B" },
      { text: "Đọc sách, xem phim ở nhà", type: "C" },
      { text: "Du lịch, khám phá nơi mới", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn thích không gian nào?",
    options: [
      { text: "Quán cafe vintage, đậm chất nghệ thuật", type: "A" },
      { text: "Quán hiện đại, sang trọng, view đẹp", type: "B" },
      { text: "Quán nhỏ yên tĩnh, ít người", type: "C" },
      { text: "Quán ngoài trời, gần thiên nhiên", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Linh hồn Hà Nội",
    emoji: "🏛️",
    description: "Bạn mang linh hồn Hà Nội thanh lịch! Bạn yêu thích sự trầm lắng, chiều sâu văn hóa và những giá trị truyền thống. Hà Nội với bốn mùa, phố cổ và nếp sống thanh lịch là nơi dành cho bạn.",
    traits: ["Thanh lịch", "Trầm lắng", "Yêu văn hóa", "Truyền thống"],
    strengths: ["Am hiểu văn hóa", "Cách ứng xử tinh tế", "Trân trọng lịch sử"],
    weaknesses: ["Đôi khi quá hoài cổ", "Khó thích ứng với thay đổi nhanh"],
    tips: ["Mở lòng với cái mới", "Vẫn giữ được nét đẹp truyền thống"],
  },
  B: {
    type: "B",
    title: "Linh hồn Sài Gòn",
    emoji: "🌆",
    description: "Bạn mang linh hồn Sài Gòn năng động! Bạn yêu thích sự sôi động, cởi mở và nhịp sống nhanh. Sài Gòn với sự đa dạng, cơ hội và tinh thần tự do là nơi phù hợp với bạn.",
    traits: ["Năng động", "Cởi mở", "Hiện đại", "Thực tế"],
    strengths: ["Thích ứng nhanh", "Dễ hòa nhập", "Nhiều cơ hội"],
    weaknesses: ["Đôi khi quá vội vàng", "Ít thời gian suy ngẫm"],
    tips: ["Đôi khi hãy chậm lại", "Tận hưởng những khoảnh khắc yên bình"],
  },
  C: {
    type: "C",
    title: "Tâm hồn yên bình",
    emoji: "🌿",
    description: "Bạn có tâm hồn yên bình, không thuộc hẳn về Hà Nội hay Sài Gòn. Bạn thích sự tĩnh lặng, cuộc sống cân bằng và không chạy theo nhịp sống hối hả của đô thị lớn.",
    traits: ["Yên bình", "Cân bằng", "Giản dị", "Tự tại"],
    strengths: ["Bình tĩnh", "Không bị cuốn theo đám đông", "Có không gian riêng"],
    weaknesses: ["Đôi khi thiếu năng lượng", "Bỏ lỡ cơ hội"],
    tips: ["Thử trải nghiệm nhịp sống đô thị", "Vẫn giữ được sự cân bằng"],
  },
  D: {
    type: "D",
    title: "Công dân toàn cầu",
    emoji: "🌍",
    description: "Bạn là công dân toàn cầu, có thể sống tốt ở bất kỳ đâu. Bạn linh hoạt, thích khám phá và không giới hạn bản thân trong một thành phố cụ thể. Cả Hà Nội và Sài Gòn đều có thể là nhà của bạn.",
    traits: ["Linh hoạt", "Khám phá", "Thích ứng", "Đa năng"],
    strengths: ["Sống được ở mọi nơi", "Mở rộng tầm nhìn", "Không bị giới hạn"],
    weaknesses: ["Đôi khi thiếu gốc rễ", "Khó cam kết lâu dài"],
    tips: ["Tìm nơi để gọi là nhà", "Vẫn giữ tinh thần khám phá"],
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
