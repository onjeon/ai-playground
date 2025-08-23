# Implementation Plan

- [x] 1. 프로젝트 초기 설정 및 환경 구성



  - Rails 7 프로젝트 생성 (Tailwind CSS 포함)
  - ViewComponent gem 추가 및 설정
  - Git 저장소 초기화 및 기본 커밋
  - 개발 서버 실행 확인
  - _Requirements: 전체 프로젝트 기반 설정_

- [ ] 2. 데이터베이스 모델 및 기본 구조 생성
  - Test 모델 생성 (title, slug, category, participants_count, thumbnail_url, is_published 필드)
  - 데이터베이스 마이그레이션 실행
  - 모델 유효성 검사 및 scope 구현
  - 시드 데이터 작성 (3개 테스트: AI 소울 동물, 애착 유형, 연애 방해 유형)
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

- [ ] 3. 기본 라우팅 및 컨트롤러 설정
  - PagesController 생성 및 home 액션 구현
  - 루트 라우팅 설정 (root "pages#home")
  - 카테고리 필터링을 위한 파라미터 처리 로직 구현
  - 게시된 테스트만 조회하는 필터링 로직 구현
  - _Requirements: 2.5, 8.2, 8.3_

- [ ] 4. HeaderComponent 구현
  - HeaderComponent 클래스 및 템플릿 생성
  - 'AI 놀이터' 로고와 슬로건 마크업 작성
  - Tailwind CSS를 활용한 반응형 헤더 스타일링
  - 모든 화면 크기에서 일관된 레이아웃 확인
  - _Requirements: 1.1, 1.2, 1.3, 1.4_

- [ ] 5. FooterComponent 구현
  - FooterComponent 클래스 및 템플릿 생성
  - Copyright, 개인정보처리방침, 이용약관 링크 마크업
  - 반응형 푸터 스타일링 적용
  - 모든 화면 크기에서 동일한 레이아웃 유지 확인
  - _Requirements: 5.1, 5.2, 5.3, 5.4_

- [ ] 6. CategoryFilterComponent 구현
  - CategoryFilterComponent 클래스 및 템플릿 생성
  - 카테고리 버튼 UI 구현 (전체, 연애/심리, 성격/자아, 라이프스타일)
  - 현재 선택된 카테고리 상태 표시 로직
  - 모바일에서 자동 줄바꿈, PC에서 한 줄 배치 반응형 스타일링
  - _Requirements: 2.1, 2.3, 2.4_

- [ ] 7. TestCardComponent 구현
  - TestCardComponent 클래스 및 템플릿 생성
  - 1:1 썸네일 이미지, 테스트 제목, 참여자 수 표시 마크업
  - 테스트 페이지로의 링크 구현 (/tests/:slug 형식)
  - 호버 효과 및 카드 스타일링 적용
  - 안전한 이미지 로딩 및 기본값 처리
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6_

- [ ] 8. TestGridComponent 구현
  - TestGridComponent 클래스 및 템플릿 생성
  - CSS Grid를 활용한 반응형 그리드 레이아웃 구현
  - 모바일(1열), 태블릿(2열), PC(3열) 반응형 설정
  - 테스트 카드들의 동적 렌더링 로직
  - _Requirements: 3.1, 3.2, 3.3, 3.4_

- [ ] 9. Turbo Frames를 활용한 카테고리 필터링 구현
  - 카테고리 필터 버튼에 Turbo Frame 연결
  - 페이지 새로고침 없는 비동기 필터링 구현
  - 필터링된 테스트 목록 동적 업데이트
  - 브라우저 히스토리 및 URL 상태 관리
  - _Requirements: 2.2, 2.5_

- [ ] 10. 메인 페이지 레이아웃 조립 및 통합
  - application.html.erb 기본 레이아웃 설정
  - home.html.erb에서 모든 컴포넌트 조립
  - 컴포넌트 간 데이터 전달 및 상태 관리
  - 전체 페이지 플로우 테스트 및 디버깅
  - _Requirements: 전체 UI 통합_

- [ ] 11. 썸네일 이미지 및 에셋 관리
  - 3개 테스트용 고품질 스톡 이미지 선정 및 추가
  - app/assets/images 디렉토리에 이미지 파일 배치
  - 이미지 최적화 및 적절한 크기 조정
  - 이미지 로딩 실패 시 플레이스홀더 처리
  - _Requirements: 4.1_

- [ ] 12. SEO 메타 태그 및 Open Graph 구현
  - application.html.erb에 기본 SEO 메타 태그 추가
  - 페이지별 동적 title, description 설정 시스템
  - Open Graph 메타 태그 구현 (소셜 미디어 공유 최적화)
  - 검색 엔진 크롤링을 위한 구조화된 데이터 추가
  - _Requirements: 6.1, 6.2, 6.3, 6.4_

- [ ] 13. Google Analytics 4 연동
  - GA4 추적 코드 application.html.erb에 추가
  - 기본 페이지뷰 추적 설정
  - 테스트 카드 클릭 이벤트 추적 구현
  - 카테고리 필터 사용 이벤트 추적 구현
  - _Requirements: 7.1, 7.2, 7.3, 7.4_

- [ ] 14. 에러 처리 및 예외 상황 대응
  - 404, 500 에러 페이지 생성 및 스타일링
  - ApplicationController에 전역 에러 핸들링 추가
  - 컴포넌트 레벨에서 안전한 데이터 처리 구현
  - 네트워크 오류 및 이미지 로딩 실패 처리
  - _Requirements: 전체 안정성 보장_

- [ ] 15. 반응형 디자인 최종 검증 및 최적화
  - 모바일(320px~767px) 환경에서 레이아웃 테스트
  - 태블릿(768px~1023px) 환경에서 2열 그리드 확인
  - PC(1024px+) 환경에서 3열 그리드 및 전체 레이아웃 확인
  - 다양한 브라우저(Chrome, Safari, Firefox)에서 호환성 테스트
  - _Requirements: 1.3, 1.4, 2.3, 2.4, 3.1, 3.2, 3.3, 3.4, 4.6, 5.4_

- [ ] 16. 성능 최적화 및 로딩 속도 개선
  - Tailwind CSS purge 설정으로 불필요한 스타일 제거
  - 이미지 lazy loading 구현
  - 데이터베이스 쿼리 최적화 및 N+1 문제 방지
  - 브라우저 캐싱 헤더 설정
  - _Requirements: 전체 성능 최적화_

- [ ] 17. 배포 준비 및 Render 설정
  - render.yaml 배포 설정 파일 생성
  - 환경 변수 설정 (데이터베이스 URL, Rails Master Key 등)
  - PostgreSQL 데이터베이스 연결 설정
  - 프로덕션 환경에서 에셋 프리컴파일 설정
  - _Requirements: 전체 배포 준비_

- [ ] 18. 최종 통합 테스트 및 품질 보증
  - 전체 사용자 플로우 시나리오 테스트
  - 카테고리 필터링 기능 완전성 검증
  - 테스트 카드 클릭 및 네비게이션 확인
  - 모든 분석 이벤트 정상 작동 확인
  - 크로스 브라우저 최종 호환성 테스트
  - _Requirements: 전체 기능 검증_