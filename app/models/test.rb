class Test < ApplicationRecord
  validates :title, presence: true, length: { maximum: 100 }
  validates :slug, presence: true, uniqueness: true, format: { with: /\A[a-z0-9\-]+\z/ }
  validates :category, presence: true, inclusion: { in: %w[연애/심리 성격/자아 라이프스타일] }
  validates :participants_count, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :thumbnail_url, presence: true
  validates :is_published, inclusion: { in: [true, false] }

  scope :published, -> { where(is_published: true) }
  scope :by_category, ->(category) { where(category: category) }

  def increment_participants!
    increment!(:participants_count)
  end

  def to_param
    slug
  end
end