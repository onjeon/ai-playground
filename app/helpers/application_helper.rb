module ApplicationHelper
  def page_title(title = nil)
    base_title = "AI 놀이터 - AI로 즐기는 모든 테스트"
    if title.present?
      "#{title} | #{base_title}"
    else
      base_title
    end
  end

  def page_description(description = nil)
    description.presence || "다양한 AI 기반 심리테스트와 성격테스트를 무료로 즐겨보세요. 소울 동물, 애착 유형, 연애 스타일 등 재미있는 테스트가 가득!"
  end

  def page_keywords(keywords = nil)
    base_keywords = "AI테스트, 심리테스트, 성격테스트, 소울동물, 애착유형, 연애테스트"
    if keywords.present?
      "#{keywords}, #{base_keywords}"
    else
      base_keywords
    end
  end

  def og_image_url
    asset_url('og-image-placeholder.png')
  end

  def structured_data
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "AI 놀이터",
      "description": "AI 기반 심리테스트와 성격테스트 플랫폼",
      "url": request.base_url,
      "potentialAction": {
        "@type": "SearchAction",
        "target": "#{request.base_url}/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }.to_json
  end
end