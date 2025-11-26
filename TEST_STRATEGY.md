# AI 놀이터 테스트 확장 전략 문서

## 목표
- 현재: **133개 테스트** ✅ (2024.11.26 업데이트 - Batch 9 완료)
- 목표: 200개 테스트 + 피지컬 테스트 + 게임/카드 콘텐츠
- 추가 필요: 67개 테스트

## 진행 현황 요약
| 카테고리 | 계획 | 완료 | 남은 것 |
|---------|------|------|--------|
| 연애/관계 | 30개 | 31개 | 0개 ✅ |
| 성격/심리 | 40개 | 30개 | 10개 |
| 재미/운세 | 35개 | 25개 | 10개 |
| 적성/직업 | 20개 | 4개 | 16개 |
| IQ/두뇌 | 14개 | 0개 | 14개 |
| 피지컬 | 4개 | 4개 | 0개 ✅ |
| 게임/카드 | 2개 | 2개 | 0개 ✅ |

---

## 최근 추가된 테스트

### Batch 9 (MBTI 확장 및 트렌드/직장) - 6개
- **mbti-conflict** (MBTI 싸울 때) - 갈등 상황에서의 MBTI
- **mbti-spending** (MBTI 돈 쓸 때) - 소비 패턴으로 보는 MBTI
- **ajae-power** (아재력) - 당신의 아재/아줌마력 측정
- **hipster-level** (힙스터 레벨) - 얼마나 힙한가?
- **monday-blues** (월요병 지수) - 월요병 심각도 측정
- **boss-type** (상사 유형) - 어떤 유형의 상사/리더인가?

### Batch 8 (MBTI 여행/술자리 및 판타지) - 8개
- **mbti-travel** (MBTI 여행 스타일) - 여행할 때 나타나는 MBTI
- **mbti-drinking** (MBTI 술자리) - 술자리에서의 MBTI
- **fairytale-role** (동화 속 역할) - 동화에서 당신의 역할
- **magic-element** (마법 속성) - 나의 마법 원소
- **game-character** (게임 캐릭터) - 게임 속 나의 직업
- **super-power** (슈퍼파워) - 나에게 맞는 초능력
- **hogwarts-house** (호그와트 기숙사) - 해리포터 기숙사 배정
- **meeting-type** (회의 유형) - 회의에서 나는 어떤 유형?

### Batch 7 (MBTI 응용 및 라이프스타일 확장) - 10개
- mbti-office, mbti-dating, driving-personality, karaoke-type, fashion-personality
- food-taste, room-cleaning, hobby-recommend, morning-night, season-personality

### Batch 6 (MBTI 확장 및 라이프스타일) - 10개
- mbti-shadow, mbti-stress, alpha-gen, digital-native, midnight-snack
- travel-style, shopping-type, pet-match, zombie-survival, island-survival

---

## 신규 콘텐츠 카테고리

### 3.6 피지컬/반응속도 테스트 (physical) - ✅ 완료!
> 🎮 인터랙티브 게임 형식의 능력 측정 테스트

| # | 테스트명 | slug | 구현 방식 | 난이도 | 상태 |
|---|---------|------|----------|-------|------|
| 1 | 반응속도 테스트 | reaction-speed | 초록색 화면 클릭, 5회 측정 | ⭐ | ✅ |
| 2 | 클릭 스피드 테스트 | click-speed | 10초간 CPS 카운트 | ⭐ | ✅ |
| 3 | 색각 테스트 | color-blind | 다른 색 찾기, 15라운드 | ⭐ | ✅ |
| 4 | 순간기억력 테스트 | memory-test | 순서 기억하기, 레벨 시스템 | ⭐⭐ | ✅ |

**구현 완료 (2024.11.26):**
- `/physical` 목록 페이지
- `/physical/reaction-speed` - 반응속도 측정
- `/physical/click-speed` - CPS 측정
- `/physical/color-blind` - 색각 테스트
- `/physical/memory-test` - 순간기억력 테스트
- 모든 테스트에 결과 공유, 다시하기 기능 포함

---

### 3.7 게임/카드 섹션 (games) - ✅ 완료!
> 🃏 아이스브레이킹, 모임용 대화 카드 및 밸런스 게임

#### 밸런스 게임 ✅
| # | 카테고리 | slug | 설명 | 상태 |
|---|---------|------|------|------|
| 1 | 연애편 | love | 연애 관련 밸런스 10문제 | ✅ |
| 2 | 직장편 | work | 직장 관련 밸런스 10문제 | ✅ |
| 3 | 일상편 | daily | 일상 관련 밸런스 10문제 | ✅ |
| 4 | 극한편 | extreme | 극한 선택 밸런스 10문제 | ✅ |

#### 대화 질문 카드 ✅
| # | 카테고리 | slug | 용도 | 상태 |
|---|---------|------|------|------|
| 1 | 가벼운 질문 | light | 첫 만남, 가벼운 모임 | ✅ |
| 2 | 깊은 대화 | deep | 친한 친구, 깊은 대화 | ✅ |
| 3 | 커플용 | couple | 연인 대화 | ✅ |
| 4 | 소개팅용 | blind-date | 소개팅, 미팅 | ✅ |
| 5 | 회식용 | company | 회사 모임, 회식 | ✅ |

**구현 완료 (2024.11.26):**
- `/games` 목록 페이지
- `/games/balance` - 밸런스 게임 (4개 카테고리, 각 10문제)
- `/games/cards` - 대화 카드 (5개 카테고리, 플립 카드 UI)
- 랜덤 셔플, 카테고리 선택, 공유 기능 포함

---

## 결과 페이지 품질 기준 (중요!)

### ⚠️ 유명인/비슷한 인물 섹션 규칙
1. **구체적인 이름 필수**: "성공한 많은 전문가들" 같은 애매한 표현 금지
2. **맥락에 맞는 인물**: IQ 100인데 천재 유명인은 부적절
3. **최소 2-3명**: 다양성을 위해 여러 명 제시
4. **검증 가능한 인물**: 실존 인물 또는 유명 캐릭터
5. **없으면 삭제**: 적절한 인물이 없으면 해당 섹션 제거

### 결과 섹션 체크리스트
- [ ] 유명인 섹션이 맥락에 맞는가?
- [ ] 조언/팁이 구체적이고 실행 가능한가?
- [ ] 강점/약점이 균형 있게 서술되었는가?
- [ ] 이모지와 시각적 요소가 적절한가?
- [ ] 공유하고 싶은 문구가 있는가?

---

## MBTI 시리즈 확장 현황

### 상황별 MBTI (8/8 완료 ✅)
| 테스트 | slug | 상태 |
|--------|------|------|
| MBTI 기본 | mbti-basic | ✅ |
| MBTI 스트레스 | mbti-stress | ✅ |
| MBTI 직장 | mbti-office | ✅ |
| MBTI 연애 | mbti-dating | ✅ |
| MBTI 여행 | mbti-travel | ✅ |
| MBTI 술자리 | mbti-drinking | ✅ |
| MBTI 싸울 때 | mbti-conflict | ✅ |
| MBTI 돈 쓸 때 | mbti-spending | ✅ |

### 궁합/관계 MBTI (계획)
| 테스트 | slug | 상태 |
|--------|------|------|
| MBTI 궁합 | mbti-compatibility | ✅ |
| MBTI 친구 궁합 | mbti-friend-match | 미구현 |
| MBTI 직장 동료 궁합 | mbti-work-match | 미구현 |
| MBTI 룸메이트 궁합 | mbti-roommate | 미구현 |

### 심화 MBTI (계획)
| 테스트 | slug | 상태 |
|--------|------|------|
| MBTI 부캐 | mbti-shadow | ✅ |
| MBTI 성장 방향 | mbti-growth | 미구현 |
| MBTI 약점 | mbti-weakness | 미구현 |

---

## 세대/트렌드 테스트 현황

| 테스트 | slug | 상태 |
|--------|------|------|
| 꼰대력 | boomer-level | ✅ |
| MZ 감수성 | mz-sensitivity | ✅ |
| 알파세대 이해력 | alpha-gen | ✅ |
| 디지털 네이티브 | digital-native | ✅ |
| 아재력 | ajae-power | ✅ |
| 힙스터 레벨 | hipster-level | ✅ |
| 레트로 감성 | retro-vibe | 미구현 |

---

## 직장/사회생활 테스트 현황

| 테스트 | slug | 상태 |
|--------|------|------|
| 퇴사 충동 | quit-job-urge | ✅ |
| 회식 유형 | company-dinner | ✅ |
| 회의 유형 | meeting-type | ✅ |
| 월요병 지수 | monday-blues | ✅ |
| 상사 유형 | boss-type | ✅ |
| 번아웃 | burnout-level | ✅ |
| 업무 스타일 | work-style | ✅ |
| 리더십 유형 | leadership-type | ✅ |

---

## 판타지/재미 테스트 현황

| 테스트 | slug | 상태 |
|--------|------|------|
| 동화 속 역할 | fairytale-role | ✅ |
| 마법 속성 | magic-element | ✅ |
| 게임 캐릭터 | game-character | ✅ |
| 슈퍼파워 | super-power | ✅ |
| 호그와트 기숙사 | hogwarts-house | ✅ |
| 드라마 캐릭터 | drama-character | ✅ |
| 좀비 서바이벌 | zombie-survival | ✅ |
| 무인도 서바이벌 | island-survival | ✅ |

---

## 다음 작업 우선순위

### 즉시 작업 (High Priority)
1. ✅ ~~Batch 9 테스트 구현~~ (완료)
2. **IQ 테스트 및 기존 테스트 유명인 섹션 검토/수정**
3. **피지컬 테스트 카테고리 구현** (reaction-speed, click-speed 등)
4. **게임/카드 섹션 구현** (밸런스 게임, 대화 카드)

### 중기 작업 (Medium Priority)
- MBTI 궁합 시리즈 확장
- 운세/신비 시리즈 추가
- 두뇌/능력 시리즈 추가

### 장기 작업 (Low Priority)
- 적성/직업 시리즈 확장
- 자극적/바이럴 특화 테스트
- 시즌별 테스트 (연말운세, 새해 목표 등)

---

## 기술 구현 노트

### 피지컬 테스트 구현 방향
```
/src/app/physical/[slug]/page.tsx  - 피지컬 테스트 전용 페이지
/src/components/physical/          - 피지컬 테스트 컴포넌트
  - ReactionTest.tsx              - 반응속도 테스트
  - ClickSpeedTest.tsx            - 클릭 스피드 테스트
  - MemoryGame.tsx                - 기억력 게임
  - ColorBlindTest.tsx            - 색맹 테스트
```

### 게임/카드 섹션 구현 방향
```
/src/app/games/page.tsx           - 게임 목록 페이지
/src/app/games/balance/page.tsx   - 밸런스 게임
/src/app/games/cards/page.tsx     - 대화 카드
/src/components/games/            - 게임 컴포넌트
  - BalanceCard.tsx               - 밸런스 게임 카드
  - QuestionCard.tsx              - 대화 질문 카드
  - CardDeck.tsx                  - 카드 덱 관리
```

---

## 변경 이력

| 날짜 | 변경 내용 |
|------|----------|
| 2024.11 | 초기 문서 작성 (61개 테스트 기준) |
| 2024.11 | 현황 업데이트 (69개 테스트로 증가) |
| 2024.11.26 | Batch 5 완료 (99개) |
| 2024.11.26 | Batch 6 완료 (109개) |
| 2024.11.26 | Batch 7 완료 (119개) |
| 2024.11.26 | Batch 8 완료 (127개): mbti-travel, mbti-drinking, fairytale-role, magic-element, game-character, super-power, hogwarts-house, meeting-type |
| 2024.11.26 | Batch 9 완료 (133개): mbti-conflict, mbti-spending, ajae-power, hipster-level, monday-blues, boss-type |
| 2024.11.26 | 문서 대폭 업데이트: 피지컬 테스트 카테고리, 게임/카드 섹션 추가, 결과 품질 기준 추가 |
