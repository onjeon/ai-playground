AI 놀이터 개발 지침서 (v1.0)
이 문서는 'AI 놀이터' 프로젝트를 위한 AI와의 효율적이고 안정적인 협업을 위한 핵심 지침을 정의합니다.
🚀 핵심 원칙 (가장 중요!)
⚠️ 모든 작업 시작 전, AI는 반드시 이 원칙들을 다시 읽고 숙지해야 합니다.
Rails Way 최우선 (Convention over Configuration): Rails의 기본 철학과 관례를 최대한 따른다. 독자적인 구조를 만들기보다 Rails의 내장 기능을 우선적으로 활용하여 코드의 예측 가능성과 생산성을 극대화한다.
근본 원인 해결: 피상적인 코드 수정(땜질)을 반복하지 않는다. 문제가 발생하면 한발 물러서서 근본 원인을 파악하고, 필요하다면 관련 코드를 재구성하여 문제를 해결한다.
ViewComponent 기반 개발: 모든 UI 요소는 재사용 가능한 ViewComponent로 만든다. erb 템플릿에 직접 HTML을 작성하는 것을 최소화하고, 모든 것을 부품화(모듈화)하여 관리한다.
Tailwind CSS 유틸리티 우선: app/assets/stylesheets/application.tailwind.css 파일에 커스텀 CSS를 추가하는 것을 최소화한다. 대부분의 스타일은 Tailwind의 유틸리티 클래스를 HTML에 직접 적용하여 해결한다.
최소 침습적 변경: 새로운 기능을 추가할 때, 기존의 안정적인 코드를 최대한 변경하지 않는 방향으로 설계한다. 점진적으로 기능을 확장해 나간다.
테스트 주도 개발 (TDD): (향후 도입) 모델의 핵심 로직 변경 시에는 반드시 테스트 코드를 먼저 작성하거나, 기존 테스트를 통과하는지 확인하여 안정성을 보장한다.
지침 상기: 매 작업 요청마다 이 지침들을 다시 상기하고 준수한다.
🎨 스타일링 아키텍처 (Tailwind CSS 활용 원칙)
목표: 일관성 있고 유지보수하기 쉬운 디자인 시스템 구축.
허용되는 Tailwind 사용 (✅)
레이아웃 및 간격: flex, grid, p-4, m-8, gap-4, w-full, h-screen 등 구조와 관련된 모든 유틸리티.
기본 스타일링: rounded-lg, shadow-md, font-bold, text-center, border 등 디자인 시스템의 기본을 해치지 않는 유틸리티.
반응형 디자인: md:, lg: 접두사를 사용한 반응형 스타일링.
주의가 필요한 Tailwind 사용 (⚠️)
색상: bg-blue-500, text-red-600 등 직접적인 색상 지정은 초기 프로토타이핑 단계에서만 허용. 향후 디자인 시스템이 확정되면, 커스텀 변수나 tailwind.config.js에 정의된 색상만 사용해야 한다.
컴포넌트별 스타일: 특정 컴포넌트(예: TestCardComponent)에만 적용되는 복잡한 스타일은 해당 컴포넌트의 erb 파일이나 별도의 CSS 파일이 아닌, @apply 지시어를 사용하여 application.tailwind.css 내에서 관리하는 것을 고려한다.
올바른 수정 방법
code
Html
<!-- ✅ 올바른 예: 유틸리티 클래스를 활용한 구조적 스타일링 -->
<div class="card bg-white rounded-lg shadow-md p-6 mb-4">
  <h2 class="text-2xl font-bold text-gray-800 mb-2">테스트 제목</h2>
  <p class="text-gray-600">이것은 테스트 설명입니다.</p>
</div>

<!-- ❌ 잘못된 예: ViewComponent로 만들어야 할 복잡한 구조를 erb에 직접 작성 -->
<!-- 이 정도의 복잡성은 TestCardComponent로 분리해야 함 -->
🔧 핵심 작업 절차
작업 전 체크리스트
현재 상태 확인: git status 명령어로 변경 사항이 없는 깨끗한 상태인지 확인.
서버 실행 확인: bin/dev 명령어로 로컬 개발 서버가 정상적으로 실행되는지 확인.
의존성 분석: 변경할 코드가 다른 컴포넌트나 모델에 미치는 영향을 머릿속으로 시뮬레이션.
백업 (중요 변경 시): git stash push -m "작업 전 백업" 명령어로 현재 상태를 안전하게 저장.
작업 후 검증 절차
로컬 서버 확인: 브라우저에서 http://localhost:3000에 접속하여 UI가 깨지지 않고 기능이 정상 동작하는지 직접 확인.
Rails 콘솔 테스트: bin/rails c로 콘솔에 접속하여, 데이터 모델 변경 시 간단한 CRUD(생성, 읽기, 수정, 삭제)가 정상적으로 동작하는지 확인.
린트 검사: (설치 시) RuboCop 같은 린터를 실행하여 코드 스타일 가이드를 준수했는지 확인.
커밋: git commit -m "기능: AI 소울 동물 테스트 결과 페이지 구현" 과 같이 명확한 메시지로 커밋.
🏗️ 프로젝트 컨텍스트
프로젝트명: AI 놀이터
기술 스택: Ruby on Rails 7, Hotwire (Turbo + Stimulus), Tailwind CSS, ViewComponent, PostgreSQL
개발 환경: (사용자 환경에 따라 다름, AI는 특정 환경에 종속되지 말 것)
핵심 명령어:
bin/dev: 개발 서버 실행 (프론트+백엔드 동시)
bin/rails g ...: 코드 생성 (scaffold, model, controller 등)
bin/rails db:migrate: 데이터베이스 스키마 변경 적용
bin/rails c: Rails 콘솔 실행
🗄️ 데이터베이스 관리 방법론 (Rails Way)
스키마 변경: db/schema.rb 파일을 직접 수정하지 않는다. 항상 마이그레이션(Migration) 파일을 생성(bin/rails g migration ...)하여 데이터베이스 구조를 변경하고, bin/rails db:migrate로 적용한다. 이것이 Rails의 핵심 원칙.
데이터 조작: Active Record를 통해 데이터를 조작한다. 순수 SQL 쿼리는 성능 최적화 등 특별한 경우를 제외하고 사용을 지양한다. (예: Test.all, Test.find_by(slug: '...'))
시드 데이터: 초기 데이터는 db/seeds.rb 파일에 작성하고 bin/rails db:seed 명령어로 채운다.
⚠️ 핵심 주의사항
절대 금지
민감정보 커밋: config/master.key나 .env 파일에 저장된 API 키, 비밀번호 등을 절대 Git에 커밋하지 않는다.
Rails 관례 무시: Rails가 정해놓은 파일 구조나 명명 규칙(모델은 단수, 컨트롤러는 복수 등)을 임의로 변경하지 않는다.
과도한 Gem 설치: 명확한 필요성과 커뮤니티의 평가 없이 무분별하게 새로운 Gem(라이브러리)을 추가하지 않는다.
무단 파일 삭제: 사용자의 명시적 허락 없이 rails destroy 명령어나 rm 명령어로 파일을 삭제하지 않는다.
🚀 Render 배포 자동화 (권장)
배포 방식: GitHub 저장소의 main 브랜치에 푸시(Push)하면, Render가 이를 감지하여 자동으로 빌드 및 배포를 수행하는 방식을 설정한다.
필수 설정 파일 (render.yaml):
서비스 타입: web (Rails 앱) 및 private (PostgreSQL DB)
빌드 명령어: bundle install; bundle exec rails assets:precompile; bundle exec rails db:migrate
시작 명령어: bundle exec rails server
환경 변수: 데이터베이스 URL, Rails Master Key 등 민감한 정보는 Render 대시보드의 'Environment' 탭에서 안전하게 관리한다. 코드에 직접 노출하지 않는다.
🎯 마무리
이 지침은 'AI 놀이터' 프로젝트의 속도와 안정성을 위한 핵심 약속입니다.
AI는 이 지침을 단순한 규칙이 아닌, 최고의 결과물을 만들기 위한 협업 철학으로 이해하고 모든 작업에 임해야 합니다.