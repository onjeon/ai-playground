# Design Document

## Overview

AI 놀이터 허브는 Ruby on Rails 7 기반의 모바일 우선 반응형 웹 애플리케이션입니다. Hotwire(Turbo + Stimulus), Tailwind CSS, ViewComponent를 활용하여 빠른 개발과 우수한 사용자 경험을 동시에 달성합니다. 단일 페이지 애플리케이션 형태의 허브에서 사용자가 다양한 AI 테스트를 탐색하고 참여할 수 있도록 설계되었습니다.

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Client (Browser)                         │
│  ┌─────────────────┐  ┌─────────────────┐  ┌──────────────┐ │
│  │   Mobile        │  │    Tablet       │  │      PC      │ │
│  │  (< 768px)      │  │  (≥ 768px)      │  │  (≥ 1024px) │ │
│  │   1 Column      │  │   2 Columns     │  │  3 Columns   │ │
│  └─────────────────┘  └─────────────────┘  └──────────────┘ │
└─────────────────────────────────────────────────────────────┘
                                │
                                │ HTTP/Turbo Requests
                                ▼
┌─────────────────────────────────────────────────────────────┐
│                Rails Application Server                     │
│                                                             │
│  ┌─────────────────┐  ┌─────────────────┐  ┌──────────────┐ │
│  │  PagesController│  │ ViewComponents  │  │   Models     │ │
│  │                 │  │                 │  │              │ │
│  │  - home         │  │ - HeaderComp    │  │ - Test       │ │
│  │  - show         │  │ - FilterComp    │  │              │ │
│  │                 │  │ - CardComp      │  │              │ │
│  │                 │  │ - FooterComp    │  │              │ │
│  └─────────────────┘  └─────────────────┘  └──────────────┘ │
└─────────────────────────────────────────────────────────────┘
                                │
                                │ Active Record
                                ▼
┌─────────────────────────────────────────────────────────────┐
│                    Database Layer                           │
│                                                             │
│  Development: SQLite          Production: PostgreSQL        │
│                                                             │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │                    tests table                          │ │
│  │  - id (primary key)                                     │ │
│  │  - title (string)                                       │ │
│  │  - slug (string, unique)                                │ │
│  │  - category (string)                                    │ │
│  │  - participants_count (integer)                         │ │
│  │  - thumbnail_url (string)                               │ │
│  │  - is_published (boolean)                               │ │
│  │  - created_at, updated_at (timestamps)                  │ │
│  └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### Technology Stack

- **Backend Framework**: Ruby on Rails 7.1+
- **Frontend Enhancement**: Hotwire (Turbo Frames + Stimulus)
- **CSS Framework**: Tailwind CSS 3.0+
- **Component System**: ViewComponent
- **Database**: SQLite (development), PostgreSQL (production)
- **Deployment**: Render.com
- **Analytics**: Google Analytics 4

## Components and Interfaces

### ViewComponent Architecture

모든 UI 요소는 재사용 가능한 ViewComponent로 구현하여 코드의 모듈화와 테스트 용이성을 확보합니다.

#### 1. HeaderComponent

```ruby
# app/components/header_component.rb
class HeaderComponent < ViewComponent::Base
  def initialize
    # 정적 컴포넌트로 파라미터 불필요
  end
end
```

**책임**: 사이트 로고와 슬로건 표시
**스타일링**: Tailwind CSS를 활용한 반응형 레이아웃
**위치**: 모든 페이지 상단 고정

#### 2. CategoryFilterComponent

```ruby
# app/components/category_filter_component.rb
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
end
```

**책임**: 카테고리 필터링 UI 제공
**상호작용**: Turbo Frames를 통한 비동기 필터링
**반응형**: 모바일에서 자동 줄바꿈, PC에서 한 줄 배치

#### 3. TestGridComponent

```ruby
# app/components/test_grid_component.rb
class TestGridComponent < ViewComponent::Base
  def initialize(tests:)
    @tests = tests
  end

  private

  attr_reader :tests
end
```

**책임**: 테스트 카드들의 그리드 레이아웃 관리
**반응형**: CSS Grid를 활용한 1/2/3열 자동 조정
**성능**: 필요한 테스트만 렌더링

#### 4. TestCardComponent

```ruby
# app/components/test_card_component.rb
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
end
```

**책임**: 개별 테스트의 시각적 표현
**구성요소**: 썸네일, 제목, 참여자 수
**상호작용**: 클릭 시 테스트 페이지 이동, 호버 효과

#### 5. FooterComponent

```ruby
# app/components/footer_component.rb
class FooterComponent < ViewComponent::Base
  def initialize
    # 정적 컴포넌트로 파라미터 불필요
  end
end
```

**책임**: 법적 정보 및 링크 제공
**내용**: Copyright, 개인정보처리방침, 이용약관

### Controller Design

#### PagesController

```ruby
# app/controllers/pages_controller.rb
class PagesController < ApplicationController
  def home
    @tests = filtered_tests
    @current_category = params[:category]
  end

  private

  def filtered_tests
    tests = Test.published
    
    if params[:category].present?
      tests = tests.where(category: params[:category])
    end
    
    tests.order(:created_at)
  end
end
```

**책임**: 홈페이지 로직 처리
**필터링**: 카테고리별 테스트 조회
**성능**: 게시된 테스트만 조회하여 불필요한 데이터 로딩 방지

## Data Models

### Test Model

```ruby
# app/models/test.rb
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
```

**필드 설계**:
- `title`: 테스트 제목 (최대 100자)
- `slug`: URL 친화적 식별자 (영문, 숫자, 하이픈만 허용)
- `category`: 카테고리 (제한된 값만 허용)
- `participants_count`: 참여자 수 (0 이상의 정수)
- `thumbnail_url`: 썸네일 이미지 경로
- `is_published`: 게시 여부 (boolean)

**비즈니스 로직**:
- 게시된 테스트만 조회하는 scope
- 카테고리별 필터링 scope
- 참여자 수 증가 메서드
- SEO 친화적 URL을 위한 to_param 오버라이드

### Database Schema

```ruby
# db/migrate/xxx_create_tests.rb
class CreateTests < ActiveRecord::Migration[7.1]
  def change
    create_table :tests do |t|
      t.string :title, null: false, limit: 100
      t.string :slug, null: false, limit: 50
      t.string :category, null: false, limit: 20
      t.integer :participants_count, null: false, default: 0
      t.string :thumbnail_url, null: false
      t.boolean :is_published, null: false, default: false

      t.timestamps
    end

    add_index :tests, :slug, unique: true
    add_index :tests, :category
    add_index :tests, :is_published
    add_index :tests, [:is_published, :category]
  end
end
```

**인덱스 전략**:
- `slug`: 고유 인덱스로 빠른 조회와 중복 방지
- `category`: 카테고리 필터링 성능 향상
- `is_published`: 게시된 테스트 조회 성능 향상
- 복합 인덱스: 게시 상태와 카테고리 동시 필터링 최적화

## Error Handling

### Application Level

```ruby
# app/controllers/application_controller.rb
class ApplicationController < ActionController::Base
  rescue_from ActiveRecord::RecordNotFound, with: :render_404
  rescue_from ActionController::ParameterMissing, with: :render_400

  private

  def render_404
    render file: Rails.root.join('public', '404.html'), status: :not_found, layout: false
  end

  def render_400
    render file: Rails.root.join('public', '400.html'), status: :bad_request, layout: false
  end
end
```

### Component Level

```ruby
# app/components/test_card_component.rb
class TestCardComponent < ViewComponent::Base
  def initialize(test:)
    @test = test
  end

  private

  attr_reader :test

  def safe_thumbnail_url
    test.thumbnail_url.presence || asset_path('placeholder-test.png')
  end

  def safe_participants_count
    count = test.participants_count || 0
    "✨ #{number_with_delimiter(count)}명 참여"
  end
end
```

**에러 처리 전략**:
- 누락된 이미지에 대한 플레이스홀더 제공
- nil 값에 대한 안전한 기본값 설정
- 사용자 친화적인 에러 페이지 제공

## Testing Strategy

### Model Testing

```ruby
# spec/models/test_spec.rb
RSpec.describe Test, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:title) }
    it { should validate_uniqueness_of(:slug) }
    it { should validate_inclusion_of(:category).in_array(%w[연애/심리 성격/자아 라이프스타일]) }
  end

  describe 'scopes' do
    let!(:published_test) { create(:test, is_published: true) }
    let!(:unpublished_test) { create(:test, is_published: false) }

    it 'returns only published tests' do
      expect(Test.published).to include(published_test)
      expect(Test.published).not_to include(unpublished_test)
    end
  end

  describe '#increment_participants!' do
    let(:test) { create(:test, participants_count: 100) }

    it 'increases participants count by 1' do
      expect { test.increment_participants! }.to change { test.participants_count }.by(1)
    end
  end
end
```

### Component Testing

```ruby
# spec/components/test_card_component_spec.rb
RSpec.describe TestCardComponent, type: :component do
  let(:test) { create(:test, title: "AI 소울 동물 테스트", participants_count: 1234) }
  let(:component) { described_class.new(test: test) }

  it 'renders test title' do
    render_inline(component)
    expect(page).to have_content("AI 소울 동물 테스트")
  end

  it 'renders formatted participants count' do
    render_inline(component)
    expect(page).to have_content("✨ 1,234명 참여")
  end

  it 'renders clickable link to test' do
    render_inline(component)
    expect(page).to have_link(href: "/tests/#{test.slug}")
  end
end
```

### Integration Testing

```ruby
# spec/requests/pages_spec.rb
RSpec.describe 'Pages', type: :request do
  describe 'GET /' do
    let!(:published_test) { create(:test, is_published: true, category: '연애/심리') }
    let!(:unpublished_test) { create(:test, is_published: false) }

    it 'shows only published tests' do
      get root_path
      expect(response.body).to include(published_test.title)
      expect(response.body).not_to include(unpublished_test.title)
    end

    it 'filters tests by category' do
      get root_path, params: { category: '연애/심리' }
      expect(response.body).to include(published_test.title)
    end
  end
end
```

**테스트 전략**:
- 모델: 비즈니스 로직과 유효성 검사 테스트
- 컴포넌트: UI 렌더링과 데이터 표시 테스트  
- 통합: 전체 사용자 플로우와 필터링 기능 테스트
- 성능: 대량 데이터에서의 쿼리 성능 테스트

## Performance Considerations

### Database Optimization

- **인덱스 활용**: 자주 조회되는 컬럼에 적절한 인덱스 설정
- **N+1 쿼리 방지**: includes를 활용한 eager loading (향후 관계 모델 추가 시)
- **페이지네이션**: 테스트 수가 증가할 경우 Kaminari gem 도입 고려

### Frontend Optimization

- **이미지 최적화**: WebP 포맷 지원 및 적절한 크기 조정
- **CSS 최적화**: Tailwind CSS의 purge 기능으로 불필요한 스타일 제거
- **JavaScript 최소화**: Stimulus 컨트롤러의 경량화

### Caching Strategy

```ruby
# app/controllers/pages_controller.rb
class PagesController < ApplicationController
  def home
    @tests = Rails.cache.fetch("tests_#{params[:category]}", expires_in: 5.minutes) do
      filtered_tests.to_a
    end
    @current_category = params[:category]
  end
end
```

**캐싱 전략**:
- 카테고리별 테스트 목록 캐싱 (5분)
- 정적 에셋 브라우저 캐싱
- CDN 활용 (향후 트래픽 증가 시)

## SEO and Analytics Integration

### Meta Tags Implementation

```erb
<!-- app/views/layouts/application.html.erb -->
<head>
  <title><%= content_for?(:title) ? yield(:title) : "AI 놀이터 - AI로 즐기는 모든 테스트" %></title>
  <meta name="description" content="<%= content_for?(:description) ? yield(:description) : "다양한 AI 기반 심리테스트와 성격테스트를 무료로 즐겨보세요. 소울 동물, 애착 유형, 연애 스타일 등 재미있는 테스트가 가득!" %>">
  <meta name="keywords" content="AI테스트, 심리테스트, 성격테스트, 소울동물, 애착유형, 연애테스트">
  
  <!-- Open Graph -->
  <meta property="og:title" content="<%= content_for?(:og_title) ? yield(:og_title) : "AI 놀이터 - AI로 즐기는 모든 테스트" %>">
  <meta property="og:description" content="<%= content_for?(:og_description) ? yield(:og_description) : "다양한 AI 기반 심리테스트와 성격테스트를 무료로 즐겨보세요." %>">
  <meta property="og:image" content="<%= asset_url('og-image.png') %>">
  <meta property="og:url" content="<%= request.original_url %>">
  <meta property="og:type" content="website">
</head>
```

### Google Analytics 4 Integration

```erb
<!-- app/views/layouts/application.html.erb -->
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

```javascript
// app/javascript/controllers/analytics_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["card"]

  cardClick(event) {
    const testTitle = event.currentTarget.dataset.testTitle
    const testCategory = event.currentTarget.dataset.testCategory
    
    gtag('event', 'test_card_click', {
      'test_title': testTitle,
      'test_category': testCategory,
      'event_category': 'engagement'
    })
  }

  categoryFilter(event) {
    const category = event.currentTarget.dataset.category
    
    gtag('event', 'category_filter', {
      'filter_category': category,
      'event_category': 'navigation'
    })
  }
}
```

**분석 이벤트**:
- 페이지 뷰 자동 추적
- 테스트 카드 클릭 추적
- 카테고리 필터 사용 추적
- 사용자 유입 경로 분석