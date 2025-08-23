class CategoryFilterComponent < ViewComponent::Base
  def initialize(current_category: nil)
    @current_category = current_category
  end

  private

  attr_reader :current_category

  def categories
    [
      { name: "전체", value: nil, emoji: "" },
      { name: "연애/심리", value: "연애/심리", emoji: "❤️" },
      { name: "성격/자아", value: "성격/자아", emoji: "🧑‍🎨" },
      { name: "라이프스타일", value: "라이프스타일", emoji: "✈️" }
    ]
  end

  def active_category?(category_value)
    current_category == category_value
  end

  def button_classes(category_value)
    base_classes = "inline-block px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
    
    if active_category?(category_value)
      "#{base_classes} bg-blue-600 text-white shadow-lg"
    else
      "#{base_classes} bg-gray-100 text-gray-700 hover:bg-gray-200"
    end
  end
end