// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

// Google Analytics 4 이벤트 추적
document.addEventListener('DOMContentLoaded', function() {
  // 테스트 카드 클릭 이벤트 추적
  document.addEventListener('click', function(event) {
    const testCard = event.target.closest('[data-test-slug]');
    if (testCard) {
      const testSlug = testCard.getAttribute('data-test-slug');
      const testTitle = testCard.getAttribute('data-test-title');
      
      if (typeof gtag !== 'undefined') {
        gtag('event', 'test_card_click', {
          'test_slug': testSlug,
          'test_title': testTitle,
          'event_category': 'engagement'
        });
      }
    }
  });

  // 카테고리 필터 클릭 이벤트 추적
  document.addEventListener('click', function(event) {
    const filterButton = event.target.closest('[data-category-filter]');
    if (filterButton) {
      const category = filterButton.getAttribute('data-category-filter');
      
      if (typeof gtag !== 'undefined') {
        gtag('event', 'category_filter_click', {
          'category': category || 'all',
          'event_category': 'navigation'
        });
      }
    }
  });
});