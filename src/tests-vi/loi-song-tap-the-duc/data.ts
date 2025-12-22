// Phong Cách Tập Thể Dục
// Khám phá cách bạn rèn luyện sức khỏe như thế nào

export const questions = [
  {
    id: 1,
    question: "Bạn tập thể dục thường xuyên như thế nào?",
    options: [
      { text: "Mỗi ngày, không bao giờ bỏ buổi tập", type: "A" },
      { text: "3-4 lần một tuần, đều đặn", type: "B" },
      { text: "Khi nào có hứng thì tập", type: "C" },
      { text: "Hiếm khi, thường ngại vận động", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thích hình thức tập luyện nào nhất?",
    options: [
      { text: "Gym, tập tạ để có cơ bắp", type: "A" },
      { text: "Chạy bộ, đạp xe - cardio ngoài trời", type: "B" },
      { text: "Yoga, pilates - nhẹ nhàng thư giãn", type: "C" },
      { text: "Đi bộ quanh hồ, tập thể dục buổi sáng", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Động lực tập thể dục của bạn là gì?",
    options: [
      { text: "Muốn có body đẹp, săn chắc", type: "A" },
      { text: "Giữ sức khỏe, phòng bệnh", type: "B" },
      { text: "Giảm stress, thư giãn tinh thần", type: "C" },
      { text: "Bạn bè rủ, đi theo phong trào", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn tập thể dục vào thời điểm nào?",
    options: [
      { text: "Sáng sớm, 5-6h trước khi đi làm", type: "A" },
      { text: "Chiều tối, sau giờ làm việc", type: "B" },
      { text: "Cuối tuần, khi có thời gian rảnh", type: "C" },
      { text: "Không cố định, tùy lúc", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn tập một mình hay theo nhóm?",
    options: [
      { text: "Một mình, tập trung hơn", type: "A" },
      { text: "Với bạn bè, vui và có động lực", type: "B" },
      { text: "Theo lớp, có huấn luyện viên hướng dẫn", type: "C" },
      { text: "Tùy lúc, có bạn cũng được, một mình cũng ok", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi trời mưa hoặc thời tiết xấu, bạn?",
    options: [
      { text: "Vẫn tập trong nhà, tập tại chỗ", type: "A" },
      { text: "Nghỉ ngơi, đợi hôm sau", type: "B" },
      { text: "Đây là lý do hoàn hảo để nghỉ!", type: "C" },
      { text: "Tập nhẹ nhàng yoga, stretching tại nhà", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn theo dõi quá trình tập luyện như thế nào?",
    options: [
      { text: "Dùng app, smartwatch theo dõi chi tiết", type: "A" },
      { text: "Ghi chép đơn giản vào sổ", type: "B" },
      { text: "Nhìn gương, cảm nhận cơ thể", type: "C" },
      { text: "Không theo dõi, tập cho vui", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Chế độ ăn khi tập thể dục của bạn?",
    options: [
      { text: "Ăn kiêng nghiêm ngặt, đếm calo", type: "A" },
      { text: "Ăn đủ chất, hạn chế đồ chiên xào", type: "B" },
      { text: "Ăn bình thường, không kiêng gì", type: "C" },
      { text: "Tập xong ăn thoải mái, bù lại năng lượng", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi lười tập, bạn làm gì?",
    options: [
      { text: "Tự ép mình, không cho phép bỏ cuộc", type: "A" },
      { text: "Tập nhẹ thay vì bỏ hẳn", type: "B" },
      { text: "Nghỉ ngơi, ngày mai tập bù", type: "C" },
      { text: "Bỏ luôn, lười là chấp nhận", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Mục tiêu tập thể dục của bạn?",
    options: [
      { text: "Có six-pack, body chuẩn gym", type: "A" },
      { text: "Khỏe mạnh, dẻo dai, không bệnh tật", type: "B" },
      { text: "Giảm cân, fit vào quần áo cũ", type: "C" },
      { text: "Không có mục tiêu cụ thể, tập cho có", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Gym Rat Chuyên Nghiệp",
    emoji: "💪",
    percentage: 95,
    description: "Bạn là tín đồ thể dục thực thụ! Tập luyện là một phần không thể thiếu trong cuộc sống của bạn. Dù nắng hay mưa, bạn vẫn kiên trì với lịch tập. Body của bạn chắc chắn đang rất ok!",
    characteristics: ["Kỷ luật cao", "Kiên trì", "Có mục tiêu rõ ràng", "Lifestyle healthy"],
    advice: "Tuyệt vời! Nhớ nghỉ ngơi đủ để cơ thể phục hồi nhé. Đôi khi nghỉ cũng là một phần của tập luyện!",
  },
  B: {
    type: "B",
    title: "Người Tập Cân Bằng",
    emoji: "🏃",
    percentage: 75,
    description: "Bạn duy trì thói quen tập luyện đều đặn và cân bằng với cuộc sống. Không quá hardcore nhưng cũng không bỏ bê. Đây là cách tiếp cận rất lành mạnh!",
    characteristics: ["Cân bằng", "Đều đặn", "Thực tế", "Lối sống lành mạnh"],
    advice: "Bạn đang làm rất tốt! Thử thách bản thân với mục tiêu mới hoặc môn thể thao mới để không nhàm chán nhé!",
  },
  C: {
    type: "C",
    title: "Người Tập Theo Hứng",
    emoji: "🧘",
    percentage: 50,
    description: "Bạn tập thể dục khi có hứng hoặc khi có động lực. Đôi khi siêng năng, đôi khi... để mai tính. Không sao cả, quan trọng là vẫn còn vận động!",
    characteristics: ["Linh hoạt", "Thoải mái", "Không áp lực", "Tập khi thích"],
    advice: "Hãy thử đặt lịch tập cố định để tạo thói quen. Rủ bạn bè cùng tập sẽ có thêm động lực đấy!",
  },
  D: {
    type: "D",
    title: "Chưa Kết Thân Với Thể Dục",
    emoji: "🛋️",
    percentage: 25,
    description: "Thể dục chưa phải ưu tiên của bạn lúc này. Ghế sofa có vẻ hấp dẫn hơn phòng gym! Không sao đâu, nhưng cơ thể sẽ cảm ơn bạn nếu vận động nhiều hơn.",
    characteristics: ["Thích nghỉ ngơi", "Ít vận động", "Cần động lực", "Chưa có thói quen"],
    advice: "Bắt đầu từ những thứ đơn giản: đi bộ 15 phút mỗi ngày, leo cầu thang thay vì đi thang máy. Từ từ sẽ thành thói quen!",
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
