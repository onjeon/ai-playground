class TestCardComponent < ViewComponent::Base
  def initialize(test:)
    @test = test
  end

  private

  attr_reader :test

  def formatted_participants_count
    "✨ #{number_with_delimiter(test.participants_count)}명 참여"
  end

  def test_path
    "/tests/#{test.slug}"
  end

  def safe_thumbnail_url
    test.thumbnail_url.presence
  end

  def has_thumbnail?
    test.thumbnail_url.present? && !test.thumbnail_url.end_with?('.jpg', '.jpeg', '.png', '.webp')
  end

  def placeholder_style
    # 카테고리별 색상 설정
    colors = {
      "연애/심리" => "bg-gradient-to-br from-pink-400 to-red-500",
      "성격/자아" => "bg-gradient-to-br from-purple-400 to-indigo-500", 
      "라이프스타일" => "bg-gradient-to-br from-green-400 to-blue-500"
    }
    colors[test.category] || "bg-gradient-to-br from-gray-400 to-gray-600"
  end

  def category_emoji
    emojis = {
      "연애/심리" => "❤️",
      "성격/자아" => "🧑‍🎨",
      "라이프스타일" => "✈️"
    }
    emojis[test.category] || "🎯"
  end

  def safe_participants_count
    count = test.participants_count || 0
    "✨ #{number_with_delimiter(count)}명 참여"
  end
end