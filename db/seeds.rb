# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

# Clear existing data
Test.destroy_all

# Create initial test data
tests_data = [
  {
    title: "AI 소울 동물 테스트",
    slug: "ai-soul-animal-test",
    category: "성격/자아",
    participants_count: 52179,
    thumbnail_url: "placeholder", # CSS 플레이스홀더 사용
    is_published: true
  },
  {
    title: "애착 유형 검사",
    slug: "attachment-style-test",
    category: "연애/심리",
    participants_count: 38492,
    thumbnail_url: "placeholder", # CSS 플레이스홀더 사용
    is_published: true
  },
  {
    title: "나의 연애 방해 유형 테스트",
    slug: "love-obstacle-test",
    category: "연애/심리",
    participants_count: 29847,
    thumbnail_url: "placeholder", # CSS 플레이스홀더 사용
    is_published: true
  },
  {
    title: "MBTI 성격 유형 분석",
    slug: "mbti-personality-test",
    category: "성격/자아",
    participants_count: 67234,
    thumbnail_url: "placeholder",
    is_published: true
  },
  {
    title: "나만의 여행 스타일 찾기",
    slug: "travel-style-test",
    category: "라이프스타일",
    participants_count: 23456,
    thumbnail_url: "placeholder",
    is_published: true
  }
]

tests_data.each do |test_data|
  Test.create!(test_data)
  puts "Created test: #{test_data[:title]}"
end

puts "Seeded #{Test.count} tests successfully!"