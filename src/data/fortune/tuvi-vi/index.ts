// Tử Vi 2025 - Vận Mệnh 12 Cung Hoàng Đạo
// Vietnamese Horoscope/Zodiac Fortune Data

export type CungHoangDao = 
  | 'bach-duong' | 'kim-nguu' | 'song-tu' | 'cu-giai' 
  | 'su-tu' | 'xu-nu' | 'thien-binh' | 'bo-cap'
  | 'nhan-ma' | 'ma-ket' | 'bao-binh' | 'song-ngu';

export interface TuViData {
  id: CungHoangDao;
  name: string;
  tenTiengViet: string;
  emoji: string;
  period: string;
  element: 'Lửa' | 'Đất' | 'Khí' | 'Nước';
  keywords: string[];
  luckyScore: number;
  overview: string;
  categories: {
    love: string;
    money: string;
    work: string;
    health: string;
    family: string;
  };
  monthly: string[];
  lucky: {
    numbers: number[];
    colors: string[];
    day: string;
    direction: string;
  };
  advice: {
    do: string;
    dont: string;
  };
  bloodTypeCompatibility: {
    A: string;
    B: string;
    O: string;
    AB: string;
  };
}

export const TUVI_2025: Record<CungHoangDao, TuViData> = {
  // ♈ Bạch Dương (21/3 ~ 19/4)
  'bach-duong': {
    id: 'bach-duong',
    name: 'Bạch Dương',
    tenTiengViet: 'Bạch Dương',
    emoji: '♈',
    period: '21 tháng 3 ~ 19 tháng 4',
    element: 'Lửa',
    keywords: ['Đam mê', 'Lãnh đạo', 'Thử thách'],
    luckyScore: 4,
    overview: '2025 là năm đầy nhiệt huyết và thử thách cho Bạch Dương! Hải Vương Tinh đi vào cung Bạch Dương, trực giác của bạn sẽ vô cùng nhạy bén. Nửa đầu năm sẽ có nhiều cơ hội mới, hành động quyết đoán sẽ mang lại thành công lớn. Tuy nhiên, hãy tránh những quyết định bốc đồng.',
    categories: {
      love: 'Mùa xuân có thể gặp được tình yêu định mệnh. Hãy chủ động tiếp cận để có kết quả tốt. Các cặp đôi sẽ có mối quan hệ sâu sắc hơn. Tháng 9 cần cẩn thận với sự ghen tuông.',
      money: 'Tập trung vào công việc chính sẽ có lợi. Nửa đầu năm có thể có thu nhập bất ngờ, nửa cuối năm cần quản lý chi tiêu. Mua sắm lớn cần cân nhắc kỹ.',
      work: 'Có cơ hội thể hiện khả năng lãnh đạo trong dự án mới. Cơ hội thăng tiến cao. Tháng 5 là thời điểm quan trọng.',
      health: 'Cẩn thận với việc làm việc quá sức. Dễ bị đau đầu, mất ngủ. Hãy tập thể dục đều đặn để giảm stress.',
      family: 'Năm nay tình cảm gia đình sẽ sâu đậm hơn. Đây là thời điểm tốt để báo hiếu. Du lịch gia đình vào mùa hè sẽ rất vui.',
    },
    monthly: [
      'Tháng 1: Thời điểm lý tưởng để đặt mục tiêu năm mới. Bắt đầu chăm sóc sức khỏe.',
      'Tháng 2: Vận may tình yêu tăng cao. Hãy chuẩn bị điều bất ngờ cho Valentine.',
      'Tháng 3: Tháng sinh nhật! Vận may đỉnh cao. Hãy thử những điều mới.',
      'Tháng 4: Tài lộc hanh thông. Có thể xem xét đầu tư.',
      'Tháng 5: Công việc được công nhận. Cơ hội thăng tiến, tăng lương.',
      'Tháng 6: Vận may tình duyên tăng. Hãy chủ động hơn.',
      'Tháng 7: Sức khỏe cần chú ý. Không nên làm việc quá sức.',
      'Tháng 8: Vận may du lịch tốt. Hãy dành thời gian nghỉ ngơi.',
      'Tháng 9: Mở rộng quan hệ. Những mối quan hệ mới sẽ là tài sản quý giá.',
      'Tháng 10: Thời điểm quan trọng để ra quyết định. Hãy cẩn thận.',
      'Tháng 11: Tài lộc tăng cao. Có thể có thu nhập bất ngờ.',
      'Tháng 12: Kết thúc một năm tốt đẹp. Tiệc tất niên sẽ mang lại may mắn.',
    ],
    lucky: {
      numbers: [3, 9, 21],
      colors: ['Đỏ', 'Cam'],
      day: 'Thứ Ba',
      direction: 'Đông',
    },
    advice: {
      do: 'Hãy dũng cảm thử thách những điều mới. Sự dũng cảm của bạn sẽ được đền đáp trong năm nay.',
      dont: 'Tránh những hành động bốc đồng. Đặc biệt cẩn thận vào tháng 4 và tháng 7.',
    },
    bloodTypeCompatibility: {
      A: 'Nhóm A cẩn thận sẽ giúp bạn kiểm soát bản thân. Đối tác tốt.',
      B: 'Cùng tự do phóng khoáng nên có thể xung đột. Nhưng rất thú vị.',
      O: 'Tương hợp tuyệt vời! Có thể cùng nhau phát triển.',
      AB: 'Cần thời gian để hiểu nhau, nhưng có thể tạo nên mối quan hệ sâu sắc.',
    },
  },

  // ♉ Kim Ngưu (20/4 ~ 20/5)
  'kim-nguu': {
    id: 'kim-nguu',
    name: 'Kim Ngưu',
    tenTiengViet: 'Kim Ngưu',
    emoji: '♉',
    period: '20 tháng 4 ~ 20 tháng 5',
    element: 'Đất',
    keywords: ['Ổn định', 'Thịnh vượng', 'Kiên nhẫn'],
    luckyScore: 4,
    overview: '2025 là năm ổn định và gặt hái cho Kim Ngưu. Thiên Vương Tinh ảnh hưởng có thể mang lại những thay đổi bất ngờ, nhưng đây là cơ hội để phát triển. Nửa cuối năm, nỗ lực sẽ được đền đáp.',
    categories: {
      love: 'Năm phù hợp cho mối quan hệ nghiêm túc. Vận may kết hôn tăng cao. Có thể tình cũ quay lại.',
      money: 'Năm tốt cho tiết kiệm và đầu tư. Bất động sản hoặc đầu tư dài hạn có lợi. Tránh bảo lãnh vay nợ.',
      work: 'Duy trì sự nghiệp ổn định. Có thể cần học công nghệ mới. Nửa cuối năm có thể tăng lương.',
      health: 'Cẩn thận với cổ, vai bị đau mỏi. Massage hiệu quả. Cũng nên chú ý việc ăn uống quá độ.',
      family: 'Gia đình hòa thuận. Thời điểm tốt để chuyển nhà hoặc sửa sang. Tình cảm gia đình sẽ sâu đậm hơn.',
    },
    monthly: [
      'Tháng 1: Lập kế hoạch tài chính năm mới. Đặt mục tiêu tiết kiệm.',
      'Tháng 2: Tháng lãng mạn. Hãy trân trọng ngày Valentine.',
      'Tháng 3: Công việc bận rộn hơn. Hãy quản lý sức khỏe.',
      'Tháng 4: Tháng sinh nhật! Hãy tự thưởng cho bản thân.',
      'Tháng 5: Ngày của Mẹ, dành thời gian cho gia đình.',
      'Tháng 6: Cần du lịch hoặc nghỉ ngơi. Hãy làm mới bản thân.',
      'Tháng 7: Thời gian cho gia đình quan trọng. Hãy giao tiếp nhiều hơn.',
      'Tháng 8: Cơ hội mới đến. Hãy chuẩn bị sẵn sàng.',
      'Tháng 9: Nên khám sức khỏe. Phòng bệnh hơn chữa bệnh.',
      'Tháng 10: Vận may tình yêu tăng. Có thể gặp người đặc biệt.',
      'Tháng 11: Tài lộc hanh thông. Kỳ vọng lợi nhuận đầu tư.',
      'Tháng 12: Cuối năm ổn định. Hãy lên kế hoạch cho năm sau.',
    ],
    lucky: {
      numbers: [2, 6, 15],
      colors: ['Xanh lá', 'Hồng'],
      day: 'Thứ Sáu',
      direction: 'Đông Nam',
    },
    advice: {
      do: 'Hãy đầu tư hoặc tiết kiệm với tầm nhìn dài hạn. Kiên trì sẽ được đền đáp.',
      dont: 'Đừng quá cố chấp. Sự linh hoạt cũng rất quan trọng.',
    },
    bloodTypeCompatibility: {
      A: 'Cùng hướng đến sự ổn định nên rất hợp nhau. Mối quan hệ êm đềm.',
      B: 'Nhịp sống khác nhau có thể gây khó khăn. Cần thông cảm.',
      O: 'Có thể hỗ trợ lẫn nhau tốt.',
      AB: 'Những cuộc trò chuyện thú vị. Kích thích trí tuệ.',
    },
  },

  // ♊ Song Tử (21/5 ~ 21/6)
  'song-tu': {
    id: 'song-tu',
    name: 'Song Tử',
    tenTiengViet: 'Song Tử',
    emoji: '♊',
    period: '21 tháng 5 ~ 21 tháng 6',
    element: 'Khí',
    keywords: ['Giao tiếp', 'Tò mò', 'Đa tài'],
    luckyScore: 5,
    overview: '2025 là năm tuyệt vời nhất cho Song Tử! Mộc Tinh ban phúc lành, năng lượng mở rộng và phát triển tràn đầy. Cơ hội mới đến liên tục, các hoạt động xã hội sẽ mang lại may mắn lớn.',
    categories: {
      love: 'Sức hấp dẫn bùng nổ trong năm nay! Cơ hội gặp gỡ rất nhiều. Các cặp đôi sẽ có nhiều thời gian bên nhau hơn, mối quan hệ sâu sắc hơn.',
      money: 'Thu nhập từ nhiều nguồn. Sáng tạo sẽ mang lại tiền bạc. Nhưng cẩn thận với việc mua sắm bốc đồng.',
      work: 'Tỏa sáng trong lĩnh vực truyền thông, marketing, media. Thay đổi công việc cũng thuận lợi.',
      health: 'Nhìn chung tốt. Cần chăm sóc hệ thần kinh. Hãy nâng cao chất lượng giấc ngủ.',
      family: 'Giao tiếp với gia đình sôi nổi hơn. Tình cảm anh chị em sẽ sâu đậm hơn.',
    },
    monthly: [
      'Tháng 1: Xác định mục tiêu năm mới rõ ràng. Hãy viết ra giấy.',
      'Tháng 2: Mở rộng quan hệ. Hãy trân trọng những cuộc gặp gỡ mới.',
      'Tháng 3: Tài lộc tăng cao! Thời điểm tốt cho đầu tư hoặc kinh doanh phụ.',
      'Tháng 4: Công việc được đánh giá cao. Hãy tự tin.',
      'Tháng 5: Tháng sinh nhật! Vận may đỉnh cao. Làm gì cũng tốt.',
      'Tháng 6: Năng lượng của Hạ Chí ủng hộ bạn. Dự cảm về tình yêu.',
      'Tháng 7: Vận may du lịch tốt. Nên đi du lịch nước ngoài.',
      'Tháng 8: Cần quản lý sức khỏe. Không nên làm việc quá sức.',
      'Tháng 9: Hợp đồng, đàm phán quan trọng sẽ thành công.',
      'Tháng 10: Cẩn thận với buồn chán mùa thu. Hãy tìm thú vui để thay đổi tâm trạng.',
      'Tháng 11: Tháng sắp xếp tài chính. Lên kế hoạch chi tiêu cuối năm.',
      'Tháng 12: Cuối năm rực rỡ. Hãy tỏa sáng trong các buổi tiệc.',
    ],
    lucky: {
      numbers: [5, 14, 23],
      colors: ['Vàng', 'Xanh da trời'],
      day: 'Thứ Tư',
      direction: 'Tây',
    },
    advice: {
      do: 'Hãy chia sẻ ý tưởng của bạn. Năm nay tiếng nói của bạn có sức mạnh.',
      dont: 'Đừng làm quá nhiều việc cùng lúc. Mất tập trung sẽ bỏ lỡ cơ hội tốt.',
    },
    bloodTypeCompatibility: {
      A: 'Những cuộc trò chuyện trí tuệ sôi nổi. Đối tác tốt.',
      B: 'Tương hợp tuyệt vời! Tôn trọng sự tự do của nhau.',
      O: 'Mối quan hệ năng động. Thú vị.',
      AB: 'Cùng thích thay đổi. Không bao giờ chán nhau.',
    },
  },

  // ♋ Cự Giải (22/6 ~ 22/7)
  'cu-giai': {
    id: 'cu-giai',
    name: 'Cự Giải',
    tenTiengViet: 'Cự Giải',
    emoji: '♋',
    period: '22 tháng 6 ~ 22 tháng 7',
    element: 'Nước',
    keywords: ['Gia đình', 'Cảm xúc', 'Bảo vệ'],
    luckyScore: 4,
    overview: '2025 là năm tập trung vào gia đình và phát triển nội tâm cho Cự Giải. Mộc Tinh di chuyển vào cung Cự Giải vào nửa cuối năm, vận may tăng cao. Có thể có tin vui liên quan đến gia đình hoặc bất động sản.',
    categories: {
      love: 'Năm tìm kiếm mối quan hệ ấm áp như gia đình. Thời điểm nghiêm túc nghĩ về kết hôn hoặc sống chung.',
      money: 'Vận may bất động sản tốt. Thuận lợi cho việc mua bán, di chuyển, sửa sang nhà cửa. Có thể nhận được hỗ trợ từ gia đình.',
      work: 'Làm việc tại nhà hoặc tự do sẽ thuận lợi. Công việc sáng tạo sẽ có kết quả.',
      health: 'Cần chú ý đường tiêu hóa. Stress dễ ảnh hưởng đến cơ thể. Ăn uống ấm áp và nghỉ ngơi đủ giấc.',
      family: 'Năm gắn kết gia đình. Có thể có sự kiện quan trọng. Có thể xuất hiện vấn đề chăm sóc bố mẹ.',
    },
    monthly: [
      'Tháng 1: Dành thời gian cho gia đình. Tiệc năm mới sẽ thắt chặt tình cảm.',
      'Tháng 2: Cảm xúc có thể lên xuống. Hãy chăm sóc bản thân.',
      'Tháng 3: Tháng kiểm tra tài chính. Hãy xem lại chi tiêu lãng phí.',
      'Tháng 4: Mở rộng quan hệ. Gặp gỡ bạn bè mới.',
      'Tháng 5: Công việc có thể thay đổi. Hãy linh hoạt đối phó.',
      'Tháng 6: Bắt đầu tháng sinh nhật. Hãy tự thưởng cho bản thân.',
      'Tháng 7: Mộc Tinh vào cung! Vận may tăng vọt. Mọi thứ đều thuận lợi.',
      'Tháng 8: Tháng lãng mạn. Dự cảm gặp gỡ ngọt ngào.',
      'Tháng 9: Tài lộc tăng cao. Xem xét đầu tư hoặc kinh doanh phụ.',
      'Tháng 10: Có tin vui liên quan đến gia đình.',
      'Tháng 11: Bước ngoặt sự nghiệp. Hãy chuẩn bị sẵn sàng.',
      'Tháng 12: Cuối năm ấm áp. Hãy trân trọng thời gian bên gia đình.',
    ],
    lucky: {
      numbers: [2, 7, 22],
      colors: ['Trắng', 'Bạc'],
      day: 'Thứ Hai',
      direction: 'Bắc',
    },
    advice: {
      do: 'Hãy đầu tư vào gia đình và nhà cửa. Hạnh phúc của bạn nằm ở đó.',
      dont: 'Đừng để cảm xúc chi phối. Những quyết định quan trọng cần bình tĩnh.',
    },
    bloodTypeCompatibility: {
      A: 'Giống nhau nên an tâm. Rất hợp nhau.',
      B: 'Nhóm B tự do có thể làm bạn bối rối. Cần thông cảm.',
      O: 'Đáng tin cậy. Có thể xây dựng mối quan hệ ổn định.',
      AB: 'Kích thích trí tuệ. Có thể tạo mối quan hệ sâu sắc.',
    },
  },

  // ♌ Sư Tử (23/7 ~ 22/8)
  'su-tu': {
    id: 'su-tu',
    name: 'Sư Tử',
    tenTiengViet: 'Sư Tử',
    emoji: '♌',
    period: '23 tháng 7 ~ 22 tháng 8',
    element: 'Lửa',
    keywords: ['Sáng tạo', 'Tự tin', 'Thể hiện'],
    luckyScore: 3,
    overview: '2025 là năm sáng tạo và tự thể hiện tỏa sáng cho Sư Tử. Tuy nhiên, ảnh hưởng của Diêm Vương Tinh đòi hỏi sự thay đổi và phát triển nội tâm. Tập trung vào sự phát triển bên trong sẽ có kết quả tốt hơn là thành công bên ngoài.',
    categories: {
      love: 'Năm đầy lãng mạn và đam mê. Tuy nhiên, sự kiêu ngạo có thể gây cản trở. Hãy học cách nhường nhịn.',
      money: 'Thu nhập ổn định. Chuẩn bị cho chi tiêu bất ngờ bằng tiết kiệm. Đầu tư an toàn hơn đầu cơ.',
      work: 'Được chú ý trong dự án sáng tạo. Tránh bị cuốn vào tranh giành quyền lực.',
      health: 'Cần chú ý tim, huyết áp. Quản lý stress quan trọng. Thiền định hoặc yoga được khuyến khích.',
      family: 'Là trung tâm chú ý của gia đình. Đừng tiếc công sức hỗ trợ. Cháu chắt sẽ mang lại niềm vui.',
    },
    monthly: [
      'Tháng 1: Năm mới bắt đầu nhẹ nhàng. Thời gian lên kế hoạch.',
      'Tháng 2: Tháng lãng mạn. Hãy tổ chức hẹn hò đặc biệt.',
      'Tháng 3: Công việc có thể căng thẳng. Cần kiên nhẫn.',
      'Tháng 4: Ý tưởng sáng tạo nảy sinh. Hãy ghi lại.',
      'Tháng 5: Có thể có vấn đề nhỏ trong quan hệ. Giải quyết bằng đối thoại.',
      'Tháng 6: Nên khám sức khỏe. Phòng bệnh là quan trọng.',
      'Tháng 7: Tháng sinh nhật! Tự tin tăng cao, vận may tăng.',
      'Tháng 8: Tài lộc hanh thông. Có thể có thu nhập phụ.',
      'Tháng 9: Vận may du lịch tốt. Hãy nghỉ ngơi làm mới.',
      'Tháng 10: Thời điểm quyết định quan trọng. Hãy tin vào trực giác.',
      'Tháng 11: Quan hệ xã hội có ích. Hãy networking.',
      'Tháng 12: Cuối năm rực rỡ. Nhiều dịp được chú ý.',
    ],
    lucky: {
      numbers: [1, 8, 19],
      colors: ['Vàng kim', 'Cam'],
      day: 'Chủ Nhật',
      direction: 'Nam',
    },
    advice: {
      do: 'Tập trung vào dự án sáng tạo. Đừng ngại thể hiện bản thân.',
      dont: 'Đừng để sự kiêu ngạo gây thiệt hại. Hợp tác và thỏa hiệp cũng cần thiết.',
    },
    bloodTypeCompatibility: {
      A: 'Nhóm A nghiêm túc sẽ hỗ trợ bạn. Đối tác tốt.',
      B: 'Mối quan hệ vui vẻ nhưng có thể xung đột. Hãy tôn trọng nhau.',
      O: 'Tương hợp tuyệt vời! Giúp nhau tỏa sáng.',
      AB: 'Kích thích trí tuệ. Mối quan hệ thú vị.',
    },
  },

  // ♍ Xử Nữ (23/8 ~ 22/9)
  'xu-nu': {
    id: 'xu-nu',
    name: 'Xử Nữ',
    tenTiengViet: 'Xử Nữ',
    emoji: '♍',
    period: '23 tháng 8 ~ 22 tháng 9',
    element: 'Đất',
    keywords: ['Phân tích', 'Sức khỏe', 'Hoàn hảo'],
    luckyScore: 4,
    overview: '2025 là năm tập trung vào sức khỏe và cải thiện cuộc sống hàng ngày cho Xử Nữ. Khả năng chú ý đến chi tiết được đánh giá cao, công việc được công nhận. Giảm bớt chủ nghĩa hoàn hảo sẽ có kết quả tốt hơn.',
    categories: {
      love: 'Năm tìm kiếm tình yêu thực tế. Có thể gặp gỡ ở nơi làm việc hoặc phòng gym. Các cặp đôi hãy cùng nhau tạo thói quen lành mạnh.',
      money: 'Tiết kiệm đều đặn sẽ có kết quả. Thu nhập từ công việc phụ cũng đáng kỳ vọng. Tháng 9 có thể có thưởng.',
      work: 'Được đánh giá cao về hiệu quả. Tập trung nâng cao năng lực hơn là thăng chức. Thời điểm tốt để lấy chứng chỉ.',
      health: 'Năm tốt nhất để cải thiện thói quen sức khỏe. Giảm cân, tập thể dục sẽ thành công. Chú ý hệ tiêu hóa.',
      family: 'Vai trò tổ chức sự kiện gia đình. Đừng chỉ trích quá mức.',
    },
    monthly: [
      'Tháng 1: Đặt mục tiêu sức khỏe năm mới. Thời điểm tốt để bắt đầu tập thể dục.',
      'Tháng 2: Công việc bận rộn hơn. Hãy quản lý sức khỏe.',
      'Tháng 3: Tháng kiểm tra tài chính. Hãy sắp xếp đăng ký dịch vụ không cần thiết.',
      'Tháng 4: Thời điểm xem xét lại các mối quan hệ. Hãy phân biệt bạn thật sự.',
      'Tháng 5: Cơ hội tốt để học kỹ năng mới. Hãy thử tham gia khóa học.',
      'Tháng 6: Nên khám sức khỏe. Phòng bệnh là quan trọng.',
      'Tháng 7: Vận may du lịch tốt. Kỳ nghỉ năng động.',
      'Tháng 8: Tháng sinh nhật! Hãy tự thưởng cho bản thân.',
      'Tháng 9: Công việc có thành quả. Hãy tự tin.',
      'Tháng 10: Vận may tình yêu tăng. Dự cảm gặp gỡ mới.',
      'Tháng 11: Tài lộc hanh thông. Kỳ vọng thưởng hoặc thu nhập phụ.',
      'Tháng 12: Tháng sắp xếp dọn dẹp. Chào đón năm mới gọn gàng.',
    ],
    lucky: {
      numbers: [5, 14, 23],
      colors: ['Xanh navy', 'Be'],
      day: 'Thứ Tư',
      direction: 'Tây Nam',
    },
    advice: {
      do: 'Hãy tạo thói quen lành mạnh. Những cải thiện nhỏ sẽ tạo nên thay đổi lớn.',
      dont: 'Đừng đòi hỏi sự hoàn hảo quá mức. Đôi khi 80% là đủ.',
    },
    bloodTypeCompatibility: {
      A: 'Cùng tỉ mỉ nên rất hợp nhau. Mối quan hệ ổn định.',
      B: 'Nhịp sống khác nhau có thể khó khăn. Cần kiên nhẫn.',
      O: 'Nhóm O thoải mái sẽ giúp bạn. Mối quan hệ cân bằng tốt.',
      AB: 'Những cuộc trò chuyện trí tuệ thú vị. Kích thích.',
    },
  },

  // ♎ Thiên Bình (23/9 ~ 22/10)
  'thien-binh': {
    id: 'thien-binh',
    name: 'Thiên Bình',
    tenTiengViet: 'Thiên Bình',
    emoji: '♎',
    period: '23 tháng 9 ~ 22 tháng 10',
    element: 'Khí',
    keywords: ['Cân bằng', 'Hài hòa', 'Vẻ đẹp'],
    luckyScore: 4,
    overview: '2025 là năm trọng tâm là quan hệ và đối tác cho Thiên Bình. Những mối quan hệ quan trọng sẽ sâu đậm hơn, gu thẩm mỹ tỏa sáng. Đừng trì hoãn quyết định, đôi khi cần lựa chọn táo bạo.',
    categories: {
      love: 'Vận may tình yêu đỉnh cao! Cơ hội kết hôn, đính hôn, cầu hôn rất nhiều. Khả năng gặp người lý tưởng cao.',
      money: 'Thu nhập từ quan hệ đối tác. Cơ hội đầu tư hoặc kinh doanh chung. Kiểm tra hợp đồng kỹ lưỡng.',
      work: 'Thành công nhờ làm việc nhóm. Phát huy năng lực trong vai trò đàm phán hoặc hòa giải. Kinh doanh chung thuận lợi.',
      health: 'Chú ý sức khỏe lưng, thận. Uống đủ nước. Cẩn thận với vấn đề da do stress.',
      family: 'Quan hệ gia đình hài hòa. Vai trò hòa giải xung đột. Có thể có sự kiện gia đình quan trọng.',
    },
    monthly: [
      'Tháng 1: Lên kế hoạch năm mới cùng đối tác.',
      'Tháng 2: Valentine đặc biệt. Thời gian lãng mạn.',
      'Tháng 3: Đàm phán dễ thành công.',
      'Tháng 4: Bắt đầu dự án sáng tạo.',
      'Tháng 5: Có thể có vấn đề nhỏ trong quan hệ. Giữ trung lập.',
      'Tháng 6: Vận may làm đẹp tăng. Thời điểm tốt để thay đổi hình ảnh.',
      'Tháng 7: Vận may du lịch tốt. Du lịch cặp đôi.',
      'Tháng 8: Công việc cần làm việc nhóm.',
      'Tháng 9: Bắt đầu tháng sinh nhật! Sức hấp dẫn tỏa sáng.',
      'Tháng 10: Thời điểm quyết định quan trọng. Bỏ sự do dự.',
      'Tháng 11: Tài lộc tăng. Thu nhập từ quan hệ đối tác.',
      'Tháng 12: Cuối năm tràn đầy tình yêu. Thời gian ấm áp.',
    ],
    lucky: {
      numbers: [6, 15, 24],
      colors: ['Hồng pastel', 'Tím lavender'],
      day: 'Thứ Sáu',
      direction: 'Tây',
    },
    advice: {
      do: 'Hãy đầu tư vào quan hệ. Đối tác sẽ làm bạn mạnh mẽ hơn.',
      dont: 'Đừng trì hoãn quyết định. Đôi khi cần lựa chọn táo bạo.',
    },
    bloodTypeCompatibility: {
      A: 'Cùng coi trọng sự hài hòa. Mối quan hệ êm đềm.',
      B: 'Bị thu hút bởi sự tự do của nhóm B. Mối quan hệ thú vị.',
      O: 'Đối tác đáng tin cậy. Tương hợp tốt.',
      AB: 'Chia sẻ gu thẩm mỹ. Cặp đôi lý tưởng.',
    },
  },

  // ♏ Bọ Cạp (23/10 ~ 21/11)
  'bo-cap': {
    id: 'bo-cap',
    name: 'Bọ Cạp',
    tenTiengViet: 'Bọ Cạp',
    emoji: '♏',
    period: '23 tháng 10 ~ 21 tháng 11',
    element: 'Nước',
    keywords: ['Biến đổi', 'Sâu sắc', 'Tái sinh'],
    luckyScore: 3,
    overview: '2025 là năm biến đổi sâu sắc và tái sinh cho Bọ Cạp. Buông bỏ quá khứ, năng lượng đổi mới mạnh mẽ. Nếu buông bỏ sự chấp trước, may mắn bất ngờ sẽ đến.',
    categories: {
      love: 'Năm trải nghiệm mối quan hệ sâu sắc và nghiêm túc. Có thể có cuộc gặp định mệnh. Các cặp đôi đang ở bước ngoặt của mối quan hệ.',
      money: 'Có vận may liên quan đến thừa kế, bảo hiểm, tiền từ người khác. Thời điểm tốt để sắp xếp tài chính và trả nợ.',
      work: 'Có thể có thay đổi trong tổ chức. Linh hoạt đối phó sẽ thành cơ hội. Hoạt động tích cực trong lĩnh vực nghiên cứu hoặc phân tích.',
      health: 'Chú ý sức khỏe hệ sinh sản. Detox được khuyến khích. Tư vấn tâm lý cũng hiệu quả.',
      family: 'Bí mật gia đình có thể được tiết lộ. Thời điểm chữa lành vết thương cũ. Có thể cảm nhận sự kết nối với tổ tiên.',
    },
    monthly: [
      'Tháng 1: Sắp xếp quá khứ, đặt mục tiêu mới.',
      'Tháng 2: Kiểm tra tài chính. Tìm ra chi tiêu ẩn.',
      'Tháng 3: Sự thật được tiết lộ trong quan hệ.',
      'Tháng 4: Sức khỏe cần chú ý. Quản lý stress.',
      'Tháng 5: Công việc có thể thay đổi. Biến thành cơ hội.',
      'Tháng 6: Thời gian chữa lành tinh thần.',
      'Tháng 7: Tài lộc hanh thông. Xem xét đầu tư.',
      'Tháng 8: Cần du lịch hoặc nghỉ ngơi. Làm mới.',
      'Tháng 9: Trực giác quan trọng đến. Đừng bỏ lỡ.',
      'Tháng 10: Bắt đầu tháng sinh nhật! Năng lượng biến đổi đỉnh cao.',
      'Tháng 11: Tháng bắt đầu mới. Hãy tái sinh.',
      'Tháng 12: Nhìn lại một năm, kết thúc bằng lòng biết ơn.',
    ],
    lucky: {
      numbers: [8, 17, 26],
      colors: ['Đỏ rượu', 'Đen'],
      day: 'Thứ Ba',
      direction: 'Tây Bắc',
    },
    advice: {
      do: 'Hãy tái sinh bằng cách buông bỏ. Sức mạnh biến đổi là điểm mạnh của bạn.',
      dont: 'Đừng chấp trước. Tha thứ sẽ giải phóng bạn.',
    },
    bloodTypeCompatibility: {
      A: 'Có thể xây dựng mối quan hệ sâu sắc. Hiểu nhau.',
      B: 'Đam mê nhưng có thể xung đột. Tôn trọng sự tự do của nhau.',
      O: 'Cặp đôi mạnh mẽ. Có thể cùng nhau phát triển.',
      AB: 'Bị thu hút bởi sự bí ẩn của nhau.',
    },
  },

  // ♐ Nhân Mã (22/11 ~ 21/12)
  'nhan-ma': {
    id: 'nhan-ma',
    name: 'Nhân Mã',
    tenTiengViet: 'Nhân Mã',
    emoji: '♐',
    period: '22 tháng 11 ~ 21 tháng 12',
    element: 'Lửa',
    keywords: ['Phiêu lưu', 'Lạc quan', 'Triết học'],
    luckyScore: 4,
    overview: '2025 là năm phiêu lưu và mở rộng cho Nhân Mã. Du lịch và học tập sẽ mang lại sự phát triển lớn. Năng lượng lạc quan truyền cảm hứng cho những người xung quanh và thu hút cơ hội mới.',
    categories: {
      love: 'Dự cảm lãng mạn trong chuyến du lịch hoặc nơi học tập. Chú ý tình yêu xa. Mối quan hệ tôn trọng sự tự do của nhau sẽ tốt.',
      money: 'Có vận may trong trò chơi hoặc đầu cơ. Nhưng đừng quá tự tin. Có thể có thu nhập liên quan đến nước ngoài.',
      work: 'Cơ hội trong công việc liên quan đến nước ngoài hoặc dự án mở rộng. Lĩnh vực giáo dục, xuất bản, media thuận lợi.',
      health: 'Chú ý sức khỏe đùi, gan. Hạn chế ăn uống quá độ. Hoạt động ngoài trời có lợi.',
      family: 'Giao lưu với họ hàng xa. Tận hưởng sự khác biệt văn hóa. Chia sẻ niềm vui du lịch với gia đình.',
    },
    monthly: [
      'Tháng 1: Lên kế hoạch du lịch năm mới.',
      'Tháng 2: Động lực học tập tăng cao. Học điều mới.',
      'Tháng 3: Tài lộc tăng. Thời điểm tốt cho đầu tư hoặc kinh doanh phụ.',
      'Tháng 4: Mở rộng quan hệ. Networking.',
      'Tháng 5: Kết nối với nước ngoài mạnh hơn.',
      'Tháng 6: Cần quản lý sức khỏe. Cẩn thận ăn uống quá độ.',
      'Tháng 7: Phiêu lưu mùa hè! Du lịch hoặc trải nghiệm mới.',
      'Tháng 8: Thời kỳ sáng tạo. Hãy thể hiện.',
      'Tháng 9: Thi cử hoặc thuyết trình thành công.',
      'Tháng 10: Tình cảm gia đình sâu đậm hơn.',
      'Tháng 11: Bắt đầu tháng sinh nhật! Tinh thần phiêu lưu đỉnh cao.',
      'Tháng 12: Tháng sinh nhật và Giáng sinh. Ăn mừng gấp đôi.',
    ],
    lucky: {
      numbers: [3, 12, 21],
      colors: ['Tím', 'Xanh ngọc'],
      day: 'Thứ Năm',
      direction: 'Đông Nam',
    },
    advice: {
      do: 'Hãy nhảy vào những trải nghiệm mới. Du lịch và học tập sẽ giúp bạn phát triển.',
      dont: 'Đừng hứa quá nhiều. Kế hoạch thực tế cũng cần thiết.',
    },
    bloodTypeCompatibility: {
      A: 'Nhóm A chắc chắn sẽ giúp bạn đứng vững.',
      B: 'Tương hợp tuyệt vời! Cùng tận hưởng sự tự do.',
      O: 'Cặp đôi năng động. Có thể chia sẻ phiêu lưu.',
      AB: 'Những cuộc trò chuyện trí tuệ thú vị. Không bao giờ chán.',
    },
  },

  // ♑ Ma Kết (22/12 ~ 19/1)
  'ma-ket': {
    id: 'ma-ket',
    name: 'Ma Kết',
    tenTiengViet: 'Ma Kết',
    emoji: '♑',
    period: '22 tháng 12 ~ 19 tháng 1',
    element: 'Đất',
    keywords: ['Tham vọng', 'Trách nhiệm', 'Thành công'],
    luckyScore: 5,
    overview: '2025 là năm thu hoạch và thành công cho Ma Kết! Diêm Vương Tinh di chuyển sang Bảo Bình, bạn được giải phóng khỏi áp lực nhiều năm. Nỗ lực được đền đáp, thời kỳ được xã hội công nhận.',
    categories: {
      love: 'Năm tìm kiếm tình yêu ổn định. Cơ hội kết hôn hoặc đính hôn. Có thể gặp gỡ tại sự kiện liên quan đến công việc.',
      money: 'Tài lộc tuyệt vời. Tăng lương, thưởng, được công nhận. Đầu tư dài hạn đạt kết quả.',
      work: 'Đỉnh cao sự nghiệp. Vị trí lãnh đạo. Nỗ lực nhiều năm được đền đáp.',
      health: 'Chú ý sức khỏe xương, đầu gối, răng. Bổ sung canxi. Stress giảm, sức khỏe cải thiện.',
      family: 'Vai trò trụ cột gia đình. Có thể kèm theo thừa kế hoặc trách nhiệm. Sự kiện gia đình đạt được.',
    },
    monthly: [
      'Tháng 1: Tháng sinh nhật! Vận may thành công đỉnh cao. Mục tiêu lớn.',
      'Tháng 2: Vận may lãng mạn tăng. Tình yêu ổn định.',
      'Tháng 3: Dự án lớn trong công việc bắt đầu.',
      'Tháng 4: Đánh giá và công nhận.',
      'Tháng 5: Đầu tư đạt kết quả.',
      'Tháng 6: Nghỉ ngơi cũng quan trọng. Làm mới.',
      'Tháng 7: Kỳ nghỉ hè có kế hoạch.',
      'Tháng 8: Quay lại làm việc hiệu quả. Mục tiêu mới.',
      'Tháng 9: Phát huy lãnh đạo trong sự nghiệp.',
      'Tháng 10: Tháng đạt được.',
      'Tháng 11: Chuẩn bị cho cuối năm.',
      'Tháng 12: Kết thúc tuyệt vời cùng với tháng sinh nhật.',
    ],
    lucky: {
      numbers: [4, 13, 22],
      colors: ['Đen', 'Xám đậm'],
      day: 'Thứ Bảy',
      direction: 'Bắc',
    },
    advice: {
      do: 'Hãy tận hưởng thành tựu. Bạn xứng đáng với điều đó.',
      dont: 'Đừng làm việc quá sức. Tận hưởng cuộc sống cũng quan trọng.',
    },
    bloodTypeCompatibility: {
      A: 'Cùng nghiêm túc nên rất hợp nhau. Mối quan hệ đáng tin cậy.',
      B: 'Nhóm B tự do có thể làm bạn khó chịu. Cần thông cảm.',
      O: 'Đối tác đáng tin cậy. Mối quan hệ ổn định.',
      AB: 'Kích thích trí tuệ. Cũng tốt như đối tác kinh doanh.',
    },
  },

  // ♒ Bảo Bình (20/1 ~ 18/2)
  'bao-binh': {
    id: 'bao-binh',
    name: 'Bảo Bình',
    tenTiengViet: 'Bảo Bình',
    emoji: '♒',
    period: '20 tháng 1 ~ 18 tháng 2',
    element: 'Khí',
    keywords: ['Đổi mới', 'Độc lập', 'Nhân đạo'],
    luckyScore: 5,
    overview: '2025 là năm cách mạng cho Bảo Bình! Diêm Vương Tinh chính thức ổn định trong cung Bảo Bình, bắt đầu sự thay đổi lớn trong cuộc sống. Bạn là người đi đầu thời đại.',
    categories: {
      love: 'Năm tìm kiếm mối quan hệ phá cách. Gặp gỡ online hoặc trong cộng đồng. Mối quan hệ tôn trọng sự tự do sẽ tốt.',
      money: 'Thu nhập từ công nghệ hoặc đổi mới. Có vận may trong tiền điện tử hoặc đầu tư tương lai. Nhưng cũng duy trì sự ổn định.',
      work: 'Hoạt động tích cực trong lĩnh vực công nghệ, startup, thay đổi xã hội. Làm việc từ xa hoặc phong cách linh hoạt phù hợp.',
      health: 'Chú ý sức khỏe hệ thần kinh, mắt cá chân. Cần digital detox. Y học thay thế cũng hiệu quả.',
      family: 'Gia đình tự chọn cũng quan trọng. Vai trò thay đổi truyền thống. Giúp người khác cởi mở hơn.',
    },
    monthly: [
      'Tháng 1: Bắt đầu tháng sinh nhật! Cuộc cách mạng cá nhân.',
      'Tháng 2: Tháng sinh nhật và Valentine. Ăn mừng theo cách độc đáo.',
      'Tháng 3: Ý tưởng đổi mới thành hình.',
      'Tháng 4: Đầu tư vào công nghệ và tương lai.',
      'Tháng 5: Cộng đồng và bạn bè quan trọng.',
      'Tháng 6: Năng lượng cho hoạt động xã hội.',
      'Tháng 7: Kỳ nghỉ độc đáo. Trải nghiệm khác người.',
      'Tháng 8: Thay đổi trong công việc. Biến thành cơ hội.',
      'Tháng 9: Vận may tình yêu tăng. Gặp gỡ độc đáo.',
      'Tháng 10: Bắt đầu dự án đổi mới.',
      'Tháng 11: Sắp xếp tài chính. Xem lại danh mục đầu tư.',
      'Tháng 12: Kết thúc năm theo phong cách riêng.',
    ],
    lucky: {
      numbers: [7, 16, 25],
      colors: ['Xanh điện', 'Bạc'],
      day: 'Thứ Bảy',
      direction: 'Tây Bắc',
    },
    advice: {
      do: 'Đừng sợ thay đổi, hãy đi đầu. Tương lai thuộc về bạn.',
      dont: 'Thay đổi quá cấp tiến sẽ làm người khác ngạc nhiên. Hãy từ từ.',
    },
    bloodTypeCompatibility: {
      A: 'Nhóm A truyền thống có thể xung đột. Cần nỗ lực hiểu nhau.',
      B: 'Cùng tự do nên rất hợp nhau! Mối quan hệ thú vị.',
      O: 'Cặp đôi năng động.',
      AB: 'Tương hợp tuyệt vời! Chia sẻ đổi mới và trí tuệ.',
    },
  },

  // ♓ Song Ngư (19/2 ~ 20/3)
  'song-ngu': {
    id: 'song-ngu',
    name: 'Song Ngư',
    tenTiengViet: 'Song Ngư',
    emoji: '♓',
    period: '19 tháng 2 ~ 20 tháng 3',
    element: 'Nước',
    keywords: ['Trực giác', 'Từ bi', 'Giấc mơ'],
    luckyScore: 4,
    overview: '2025 là năm tâm linh và sáng tạo cho Song Ngư. Thổ Tinh ở trong cung Song Ngư, mang lại sức mạnh để biến giấc mơ thành hiện thực. Tin vào trực giác và hành động sẽ có kết quả tuyệt vời.',
    categories: {
      love: 'Trải nghiệm tình yêu lãng mạn và sâu sắc. Có thể có cuộc gặp định mệnh. Nhưng cẩn thận không lý tưởng hóa quá mức.',
      money: 'Thu nhập từ sáng tạo. Nghệ thuật, âm nhạc, nhiếp ảnh, v.v. Đầu tư theo trực giác thành công. Nhưng cẩn thận với lừa đảo.',
      work: 'Công việc nghệ thuật, tâm linh phát triển. Công việc giúp đỡ người khác cũng tốt. Biến giấc mơ thành công việc.',
      health: 'Chú ý chân, hệ miễn dịch. Giấc ngủ quan trọng. Thiền định như thuốc. Hạn chế rượu.',
      family: 'Kết nối cảm xúc sâu sắc với gia đình. Chữa lành vết thương cũ. Cảm nhận sự hướng dẫn từ tổ tiên.',
    },
    monthly: [
      'Tháng 1: Đặt mục tiêu theo trực giác năm mới.',
      'Tháng 2: Bắt đầu tháng sinh nhật! Tràn đầy cảm hứng.',
      'Tháng 3: Tháng sinh nhật và Xuân phân. Thời điểm tái sinh.',
      'Tháng 4: Tài lộc tăng. Có thể có thu nhập bất ngờ.',
      'Tháng 5: Cảm nhận kết nối sâu sắc trong quan hệ.',
      'Tháng 6: Cần quản lý sức khỏe. Nghỉ ngơi đủ giấc.',
      'Tháng 7: Du lịch biển có lợi. Đi biển hoặc hồ bơi.',
      'Tháng 8: Hành động để thực hiện giấc mơ.',
      'Tháng 9: Mùa thu lãng mạn. Tình yêu sâu đậm hơn.',
      'Tháng 10: Trực giác quan trọng đến. Đừng bỏ lỡ.',
      'Tháng 11: Sắp xếp tài chính. Quyên góp hoặc chia sẻ cũng tốt.',
      'Tháng 12: Cuối năm tâm linh. Kết thúc bằng lòng biết ơn.',
    ],
    lucky: {
      numbers: [7, 12, 21],
      colors: ['Xanh biển', 'Tím lavender'],
      day: 'Thứ Năm',
      direction: 'Đông Bắc',
    },
    advice: {
      do: 'Hãy tin vào trực giác. Giấc mơ sẽ thành hiện thực.',
      dont: 'Đừng trốn tránh thực tại. Hãy đối mặt với những gì cần đối mặt.',
    },
    bloodTypeCompatibility: {
      A: 'Cùng nhạy cảm nên hiểu nhau. Mối quan hệ dịu dàng.',
      B: 'Nhóm B tự do có thể làm bạn bối rối. Nhưng thú vị.',
      O: 'Đáng tin cậy. Mối quan hệ an tâm.',
      AB: 'Kết nối tâm linh. Mối quan hệ sâu sắc.',
    },
  },
};

// Hàm tiện ích
export function getTuVi(cung: CungHoangDao): TuViData {
  return TUVI_2025[cung];
}

export function getCungByDate(month: number, day: number): CungHoangDao {
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'bach-duong';
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'kim-nguu';
  if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) return 'song-tu';
  if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) return 'cu-giai';
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'su-tu';
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'xu-nu';
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'thien-binh';
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'bo-cap';
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'nhan-ma';
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'ma-ket';
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'bao-binh';
  return 'song-ngu';
}

export function getAllCung(): CungHoangDao[] {
  return ['bach-duong', 'kim-nguu', 'song-tu', 'cu-giai', 'su-tu', 'xu-nu', 
          'thien-binh', 'bo-cap', 'nhan-ma', 'ma-ket', 'bao-binh', 'song-ngu'];
}
