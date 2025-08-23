# Requirements Document

## Introduction

AI 놀이터 허브는 모든 AI 테스트의 관문 역할을 하는 모바일 우선 반응형 랜딩페이지입니다. 사용자들이 다양한 AI 기반 심리/성격 테스트를 쉽게 발견하고 참여할 수 있도록 하며, 압도적인 모바일 경험을 제공하면서도 PC 환경에서 최적화된 화면을 보여주는 것이 핵심 목표입니다. Ruby on Rails + Tailwind CSS + ViewComponent 기술 스택을 활용하여 1일 내 구축 완료를 목표로 합니다.

## Requirements

### Requirement 1

**User Story:** 사용자로서, 모바일과 PC 모든 환경에서 일관되고 직관적인 헤더를 보고 싶다, 그래서 사이트의 정체성을 명확히 인식할 수 있도록.

#### Acceptance Criteria

1. WHEN 사용자가 페이지에 접속하면 THEN 시스템은 좌측에 'AI 놀이터' 텍스트 로고를 표시해야 한다
2. WHEN 사용자가 페이지에 접속하면 THEN 시스템은 중앙에 "AI로 즐기는 모든 테스트" 슬로건을 표시해야 한다
3. WHEN 화면 크기가 변경되면 THEN 헤더는 화면 너비에 따라 자연스럽게 크기가 조정되어야 한다
4. WHEN 모바일, 태블릿, PC 환경에서 접속하면 THEN 헤더 레이아웃은 모든 화면에서 동일하게 유지되어야 한다

### Requirement 2

**User Story:** 사용자로서, 관심 있는 카테고리의 테스트만 필터링해서 보고 싶다, 그래서 원하는 테스트를 빠르게 찾을 수 있도록.

#### Acceptance Criteria

1. WHEN 사용자가 페이지에 접속하면 THEN 시스템은 [전체], [❤️ 연애/심리], [🧑‍🎨 성격/자아], [✈️ 라이프스타일] 카테고리 필터 버튼을 제공해야 한다
2. WHEN 사용자가 카테고리 버튼을 클릭하면 THEN 시스템은 페이지 새로고침 없이 해당 카테고리의 테스트만 그리드에 표시해야 한다
3. WHEN 모바일 환경에서 버튼이 길어지면 THEN 시스템은 자동으로 2줄로 줄 바꿈을 해야 한다
4. WHEN PC 환경에서 접속하면 THEN 시스템은 모든 카테고리 버튼을 한 줄에 표시해야 한다
5. WHEN 사용자가 [전체] 버튼을 클릭하면 THEN 시스템은 모든 게시된 테스트를 표시해야 한다

### Requirement 3

**User Story:** 사용자로서, 화면 크기에 최적화된 테스트 그리드를 보고 싶다, 그래서 어떤 기기에서든 편안하게 테스트를 탐색할 수 있도록.

#### Acceptance Criteria

1. WHEN 모바일 환경(768px 미만)에서 접속하면 THEN 시스템은 테스트를 1열로 세로 배치해야 한다
2. WHEN 태블릿 환경(768px 이상)에서 접속하면 THEN 시스템은 테스트를 2열로 배치해야 한다
3. WHEN PC 환경(1024px 이상)에서 접속하면 THEN 시스템은 테스트를 3열로 배치해야 한다
4. WHEN 화면 크기가 변경되면 THEN 그리드는 자동으로 적절한 열 수로 재배치되어야 한다

### Requirement 4

**User Story:** 사용자로서, 매력적이고 정보가 풍부한 테스트 카드를 보고 싶다, 그래서 참여하고 싶은 테스트를 쉽게 선택할 수 있도록.

#### Acceptance Criteria

1. WHEN 사용자가 테스트 그리드를 보면 THEN 각 테스트 카드는 1:1 비율의 썸네일 이미지를 표시해야 한다
2. WHEN 사용자가 테스트 카드를 보면 THEN 카드는 테스트 제목을 명확히 표시해야 한다
3. WHEN 사용자가 테스트 카드를 보면 THEN 카드는 "✨ 52,179명 참여" 형식의 참여 횟수를 표시해야 한다
4. WHEN 사용자가 테스트 카드를 클릭하면 THEN 시스템은 해당 테스트 페이지로 이동해야 한다
5. WHEN 사용자가 마우스를 카드 위에 올리면 THEN 카드는 약간 확대되는 호버 효과를 보여야 한다
6. WHEN 다른 화면 크기에서 접속하면 THEN 카드의 내부 레이아웃은 동일하게 유지되어야 한다

### Requirement 5

**User Story:** 사용자로서, 사이트의 법적 정보와 저작권을 확인하고 싶다, 그래서 신뢰할 수 있는 서비스임을 인지할 수 있도록.

#### Acceptance Criteria

1. WHEN 사용자가 페이지 하단을 보면 THEN 시스템은 Copyright 정보를 표시해야 한다
2. WHEN 사용자가 페이지 하단을 보면 THEN 시스템은 개인정보 처리방침 링크를 제공해야 한다
3. WHEN 사용자가 페이지 하단을 보면 THEN 시스템은 이용약관 링크를 제공해야 한다
4. WHEN 모든 화면 크기에서 접속하면 THEN 푸터는 동일한 레이아웃을 유지해야 한다

### Requirement 6

**User Story:** 검색 엔진 사용자로서, AI 놀이터 사이트를 검색 결과에서 발견하고 싶다, 그래서 관련 키워드로 검색했을 때 적절한 정보와 함께 노출될 수 있도록.

#### Acceptance Criteria

1. WHEN 검색 엔진이 페이지를 크롤링하면 THEN 시스템은 적절한 페이지 제목(Title)을 제공해야 한다
2. WHEN 검색 엔진이 페이지를 크롤링하면 THEN 시스템은 페이지 설명(Description) 메타 태그를 제공해야 한다
3. WHEN 검색 엔진이 페이지를 크롤링하면 THEN 시스템은 관련 키워드(Keywords) 메타 태그를 제공해야 한다
4. WHEN 소셜 미디어에서 링크가 공유되면 THEN 시스템은 Open Graph 메타 태그를 통해 적절한 미리보기를 제공해야 한다

### Requirement 7

**User Story:** 사이트 운영자로서, 사용자 행동과 트래픽을 분석하고 싶다, 그래서 데이터 기반으로 서비스를 개선할 수 있도록.

#### Acceptance Criteria

1. WHEN 사용자가 페이지에 접속하면 THEN 시스템은 Google Analytics 4를 통해 방문을 추적해야 한다
2. WHEN 사용자가 테스트 카드를 클릭하면 THEN 시스템은 해당 이벤트를 분석 도구에 기록해야 한다
3. WHEN 사용자가 카테고리 필터를 사용하면 THEN 시스템은 필터링 이벤트를 추적해야 한다
4. WHEN 분석 데이터가 수집되면 THEN 운영자는 사용자 유입 경로, 인기 테스트, 사용자 행동 패턴을 확인할 수 있어야 한다

### Requirement 8

**User Story:** 개발자로서, 안정적이고 확장 가능한 데이터 모델을 구축하고 싶다, 그래서 향후 다양한 테스트를 쉽게 추가하고 관리할 수 있도록.

#### Acceptance Criteria

1. WHEN 새로운 테스트를 추가하면 THEN 시스템은 title, slug, category, participants_count, thumbnail_url, is_published 필드를 지원해야 한다
2. WHEN 테스트의 is_published가 true이면 THEN 해당 테스트는 허브 페이지에 표시되어야 한다
3. WHEN 테스트의 is_published가 false이면 THEN 해당 테스트는 허브 페이지에서 숨겨져야 한다
4. WHEN 사용자가 테스트를 완료하면 THEN 시스템은 해당 테스트의 participants_count를 1 증가시켜야 한다
5. WHEN 테스트 URL이 생성되면 THEN slug 필드를 사용하여 /tests/:slug 형식의 SEO 친화적 URL을 제공해야 한다

### Requirement 9

**User Story:** 사이트 운영자로서, 사용자 경험을 해치지 않는 선에서 최소한의 광고 수익을 창출하고 싶다, 그래서 플랫폼의 지속적인 운영 기반을 마련할 수 있도록.

#### Acceptance Criteria

1. WHEN 사용자가 허브 페이지 하단을 보면 THEN 시스템은 푸터(Footer) 영역 바로 위에 구글 애드센스의 반응형 배너 광고를 1개 표시해야 한다
2. WHEN 광고가 로드되지 않거나 실패하면 THEN 해당 광고 영역은 자동으로 축소되어 빈 공간으로 보이지 않아야 한다
3. WHEN PC, 태블릿, 모바일 등 모든 환경에서 접속하면 THEN 광고는 해당 기기의 화면 너비에 최적화된 크기로 표시되어야 한다