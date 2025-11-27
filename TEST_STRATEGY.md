# AI 놀이터 테스트 확장 전략 문서

## 목표
- 현재: **209개 심리테스트 + 19개 피지컬 + 10개 게임** 🎉 (2024.11.27 업데이트 - Phase 4 완료!)
- 목표: 200개 테스트 + 피지컬 테스트 + 게임/카드 콘텐츠 ✅ 달성!
- Phase 4 완료: 피지컬 8개 추가 + 게임 4개 추가

## 진행 현황 요약
| 카테고리 | 계획 | 완료 | 남은 것 |
|---------|------|------|--------|
| 연애/관계 | 35개 | 34개 | 1개 |
| 성격/심리 | 40개 | 36개 | 4개 |
| 재미/운세 | 40개 | 37개 | 3개 |
| 적성/직업 | 22개 | 18개 | 4개 |
| IQ/두뇌 | 14개 | 10개 | 4개 |
| 피지컬 | 9개 | 9개 | 0개 ✅ |
| 게임/카드 | 2개 | 2개 | 0개 ✅ |

---

## 최근 추가된 테스트

### Batch 13 (재미/운세 테스트) - 6개
- **life-movie** (인생 영화 장르) - 내 인생 영화는 어떤 장르?
- **past-job** (전생의 직업) - 전생에 나의 직업은?
- **aura-color** (오라 색깔) - 나의 오라 색깔은?
- **mythical-creature** (신화 속 존재) - 나와 닮은 신화 속 존재
- **apocalypse-role** (종말 역할) - 종말에서 나의 역할
- **time-traveler** (타임트래블러) - 나에게 맞는 시대

### Batch 12 (성격/심리 테스트) - 6개
- **intuition-test** (직관력) - 나의 직관력 측정
- **sensitivity-test** (예민함) - HSP 예민함 측정
- **decisiveness-test** (결단력) - 결단력 측정
- **curiosity-index** (호기심 지수) - 호기심 수준 측정
- **optimism-test** (낙관주의) - 낙관/비관 성향 분석
- **independence-test** (독립심) - 독립심 측정

### Batch 11 (IQ/두뇌 테스트) - 6개
- **logic-test** (논리력) - 논리적 사고력 측정
- **memory-quiz** (기억력) - 기억력 측정
- **verbal-iq** (언어지능) - 언어 지능 측정
- **math-iq** (수리력) - 수학적 사고력 측정
- **spatial-iq** (공간지각력) - 공간 인지 능력 측정
- **reasoning-test** (추론력) - 종합 추론 능력 측정

### Batch 10 (적성/직업 테스트) - 6개
- **negotiation-style** (협상 스타일) - 협상 유형 분석
- **startup-fit** (스타트업 적합도) - 스타트업 vs 대기업
- **side-hustle** (N잡러 적성) - 부업 유형 찾기
- **remote-work** (재택근무 적합도) - 리모트 vs 출근
- **team-role** (팀 역할) - 팀 내 포지션 분석
- **interview-style** (면접 스타일) - 면접 유형 분석

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

### 궁합/관계 MBTI (4/4 완료 ✅)
| 테스트 | slug | 상태 |
|--------|------|------|
| MBTI 궁합 | mbti-compatibility | ✅ |
| MBTI 친구 궁합 | mbti-friend-match | ✅ |
| MBTI 직장 동료 궁합 | mbti-work-match | ✅ |
| MBTI 룸메이트 궁합 | mbti-roommate | ✅ |

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

## Phase 2: UX/마케팅 개선 (2024.11.27) ✅ 완료!

### 🔴 High Priority - ✅ 모두 완료
| # | 작업 | 설명 | 상태 |
|---|------|------|------|
| 1 | sitemap 보완 | physical, games, category 페이지 추가 | ✅ |
| 2 | 비슷한 테스트 추천 | 결과 페이지 하단에 관련 테스트 추천 (동적) | ✅ |
| 3 | 결과 캐치프레이즈 | 바이럴용 스크린샷 공유 섹션 추가 | ✅ |
| 4 | 공유 문구 최적화 | shareText에 이모지+결과+태그 포함 | ✅ |

### 🟡 Medium Priority - ✅ 모두 완료
| # | 작업 | 설명 | 상태 |
|---|------|------|------|
| 5 | 태그 기반 필터링 | 인기 태그 15개 표시, 클릭 필터링 | ✅ |
| 6 | 광고 위치 최적화 | AdBanner 컴포넌트, 결과 페이지 배치 | ✅ |

### 🟢 Low Priority (Phase 3) - ✅ 진행 중!

#### 시즌별 테스트 ✅ 완료
| # | 테스트명 | slug | 상태 |
|---|---------|------|------|
| 1 | 크리스마스 성격 | christmas-personality | ✅ |
| 2 | 연말 결산 | year-end-review | ✅ |
| 3 | 겨울 감성 | winter-vibe | ✅ |

#### MBTI 궁합 시리즈 ✅ 완료
| # | 테스트명 | slug | 상태 |
|---|---------|------|------|
| 1 | MBTI 친구 궁합 | mbti-friend-match | ✅ |
| 2 | MBTI 직장동료 궁합 | mbti-work-match | ✅ |
| 3 | MBTI 룸메이트 궁합 | mbti-roommate | ✅ |

#### 트렌드 테스트 ✅ 완료
| # | 테스트명 | slug | 상태 |
|---|---------|------|------|
| 1 | SNS 페르소나 | sns-persona | ✅ |
| 2 | 밈 유형 | meme-type | ✅ |
| 3 | 바이럴 잠재력 | viral-potential | ✅ |

#### 피지컬 테스트 확장 ✅ 완료
| # | 테스트명 | slug | 상태 |
|---|---------|------|------|
| 1 | 안구 운동 | eye-tracking | ✅ |
| 2 | 타이핑 속도 | typing-speed | ✅ |
| 3 | 숫자 기억력 | number-memory | ✅ |
| 4 | 조준 테스트 | aim-trainer | ✅ |
| 5 | 청력 테스트 | hearing-test | ✅ |

### 🔵 Phase 4: 피지컬/게임 확장 ✅ 완료!

#### 피지컬 테스트 (19개 완료!)
| # | 테스트명 | slug | 설명 | 상태 |
|---|---------|------|------|------|
| 1 | 시야각 테스트 | peripheral-vision | 화면 가장자리 물체 감지 | ✅ |
| 2 | 패턴 인식 테스트 | pattern-recognition | 틀린그림찾기 유사 | ✅ |
| 3 | 손 떨림 테스트 | steady-hand | 마우스로 좁은 통로 통과 | ✅ |
| 4 | 멀티태스킹 테스트 | multitasking | 동시에 2가지 작업 수행 | ✅ |
| 5 | 리듬 감각 테스트 | rhythm-test | 비트에 맞춰 클릭 | ✅ |
| 6 | 색상 기억력 | color-sequence | 색상 순서 기억하기 | ✅ |
| 7 | 단어 기억력 | word-memory | 단어 목록 기억 후 입력 | ✅ |
| 8 | 스트룹 테스트 | stroop-test | 색과 글자 불일치 반응 | ✅ |
| 9 | 시간 감각 테스트 | time-perception | 정확히 시간 재기 | ✅ |
| 10 | 방향 감각 테스트 | direction-sense | 회전된 지도에서 방향 맞추기 | ✅ |

#### 게임/유틸리티 (10개 완료!)
| # | 게임명 | slug | 설명 | 상태 |
|---|--------|------|------|------|
| 1 | 밸런스 게임 | balance | 4개 카테고리 밸런스 게임 | ✅ |
| 2 | 대화 카드 | cards | 5개 카테고리 대화 질문 | ✅ |
| 3 | 오늘 뭐 먹지? | random-menu | 점심/저녁 메뉴 랜덤 추천 | ✅ |
| 4 | 랜덤 숫자 뽑기 | number-picker | 제비뽑기, 순서정하기 | ✅ |
| 5 | 팀 나누기 | team-divider | 인원수 입력 후 랜덤 팀 배정 | ✅ |
| 6 | 랜덤 벌칙 뽑기 | penalty-picker | 재밌는 벌칙 랜덤 추첨 | ✅ |
| 7 | 랜덤 역할 뽑기 | role-picker | 마피아, 스파이 등 역할 배정 | ✅ |
| 8 | Would You Rather | would-you-rather | 극단적 양자택일 | ✅ |
| 9 | 아이스브레이킹 룰렛 | ice-breaker | 랜덤 주제로 자기소개 | ✅ |
| 10 | 커플 테스트 카드 | couple-quiz | 서로에 대한 퀴즈 | ✅ |

---

## 이전 작업 (완료)

### 즉시 작업 (High Priority) - ✅ 완료
1. ✅ Batch 9~21 테스트 구현 (200개 달성)
2. ✅ IQ 테스트 및 기존 테스트 유명인 섹션 검토/수정
3. ✅ 피지컬 테스트 카테고리 구현
4. ✅ 게임/카드 섹션 구현

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
| 2024.11.26 | Batch 10 완료 (139개): negotiation-style, startup-fit, side-hustle, remote-work, team-role, interview-style |
| 2024.11.26 | Batch 11 완료 (145개): logic-test, memory-quiz, verbal-iq, math-iq, spatial-iq, reasoning-test |
| 2024.11.26 | Batch 12 완료 (151개): intuition-test, sensitivity-test, decisiveness-test, curiosity-index, optimism-test, independence-test |
| 2024.11.26 | Batch 13 완료 (157개): life-movie, past-job, aura-color, mythical-creature, apocalypse-role, time-traveler |
| 2024.11.27 | Batch 14 완료 (163개): english-name, charisma-index, idol-position, school-character, job-company-match, love-mindset |
| 2024.11.27 | Batch 15 완료 (169개): cafe-type, boomer-level, mz-sensitivity, quit-job-urge, homebody-level, cafe-comm |
| 2024.11.27 | Batch 16 완료 (175개): gen-gap, dating-app-type, pet-personality, music-taste, movie-genre, weekend-type |
| 2024.11.27 | Batch 17 완료 (181개): work-from-home, sns-detox, money-personality, sleep-quality, cooking-style, gift-giving |
| 2024.11.27 | Batch 18 완료 (187개): texting-style, work-lunch, argue-style, movie-snack, vacation-plan, phone-habit |
| 2024.11.27 | Batch 19 완료 (193개): apology-style, compliment-style, waiting-style, morning-routine, news-consumption, photo-style |
| 2024.11.27 | Batch 20 완료 (199개): email-style, queue-behavior, noise-sensitivity, cleaning-frequency, secret-keeping, comfort-food |
| 2024.11.27 | Batch 21 완료 (200개): elevator-behavior, late-behavior, rainy-day, bookmark-habit, password-style |
| 2024.11.27 | 🎉 **200개 테스트 목표 달성!** |
| 2024.11.27 | Phase 2 완료: sitemap 보완, 비슷한 테스트 추천(동적), 바이럴 공유 섹션, 태그 필터링, 광고 배너 |
| 2024.11.27 | Phase 3 시작: 피지컬 테스트 5개 추가 (eye-tracking, typing-speed, number-memory, aim-trainer, hearing-test) |
| 2024.11.27 | Phase 3 심리테스트: 시즌별 3개 (christmas-personality, year-end-review, winter-vibe) |
| 2024.11.27 | Phase 3 심리테스트: MBTI 궁합 3개 (mbti-friend-match, mbti-work-match, mbti-roommate) |
| 2024.11.27 | Phase 3 심리테스트: 트렌드 3개 (sns-persona, meme-type, viral-potential) |
| 2024.11.27 | 🎉 **총 209개 테스트 (200개 심리 + 9개 피지컬)** |
| 2024.11.27 | Phase 4 시작: 피지컬 2개 추가 (stroop-test, time-perception) |
| 2024.11.27 | Phase 4: 게임 4개 추가 (random-menu, number-picker, team-divider, penalty-picker) |
| 2024.11.27 | Phase 4: 피지컬 8개 추가 (peripheral-vision, pattern-recognition, steady-hand, multitasking, rhythm-test, color-sequence, word-memory, direction-sense) |
| 2024.11.27 | Phase 4: 게임 4개 추가 (role-picker, would-you-rather, ice-breaker, couple-quiz) |
| 2024.11.27 | 🎉 **Phase 4 완료! 총 209개 심리테스트 + 19개 피지컬 + 10개 게임** |

---

## Phase 5: 토스페이먼츠 결제 시스템 (계획)

### 참조 프로젝트: AI Tarot
> `/mnt/c/Users/user/Desktop/coding/AI tarot` 프로젝트의 결제 시스템 참조

### 파일 구조
```
src/
├── lib/
│   ├── payment.ts           # 핵심 결제 로직
│   ├── developerMode.ts     # 데모/실제 결제 모드 전환
│   └── webhookHandlers.ts   # 웹훅 처리 헬퍼 함수
├── components/
│   ├── PaymentWidget.tsx    # 결제 UI 컴포넌트
│   └── layouts/
│       └── PremiumPayment.tsx  # 결제 전 상품 안내 UI
├── app/
│   ├── api/
│   │   ├── payment/
│   │   │   ├── success/route.ts  # 결제 승인 API
│   │   │   └── fail/route.ts     # 결제 실패 API
│   │   └── webhook/
│   │       └── toss/route.ts     # 웹훅 수신 API
│   ├── payment/
│   │   ├── success/page.tsx      # 결제 성공 UI
│   │   └── fail/page.tsx         # 결제 실패 UI
│   └── premium/                  # 프리미엄 콘텐츠 페이지
```

### 결제 플로우
```
[사용자] → PaymentWidget → requestTossPayment()
                              ↓
                    ┌─────────────────────┐
                    │ isPaymentEnabled()? │
                    └─────────────────────┘
                      ↓ No          ↓ Yes
               데모 결제        실제 토스 결제
            (confirm 팝업)    (SDK 호출)
                              ↓
                    토스페이먼츠 결제창
                              ↓
              ┌───────────────┴───────────────┐
              ↓                               ↓
    /api/payment/success              /api/payment/fail
    (결제 승인 confirm API 호출)
              ↓
    /premium/{type}?paid=true
    (콘텐츠 접근)
```

### 환경변수 설정
```env
# 클라이언트용 (브라우저에서 사용)
NEXT_PUBLIC_TOSS_CLIENT_KEY=test_ck_xxx...

# 서버용 (결제 승인 시 사용)
TOSS_SECRET_KEY=test_sk_xxx...
```

### 핵심 코드 요약

#### 1. 결제 요청 (`lib/payment.ts`)
- `requestTossPayment()`: 데모/실제 모드 분기
- `loadTossPayments()`: SDK 동적 로드 (`https://js.tosspayments.com/v1/payment`)
- `PREMIUM_PRICES`: 상품별 가격 설정
- `createPremiumPaymentRequest()`: 결제 요청 데이터 생성
- `generateOrderId()`: 주문번호 생성 (PREMIUM_{TYPE}_{timestamp}_{random})

#### 2. 결제 승인 (`/api/payment/success/route.ts`)
- GET 요청으로 `paymentKey`, `orderId`, `amount` 수신
- 토스 API `https://api.tosspayments.com/v1/payments/confirm` 호출
- Authorization: `Basic ${Base64(secretKey + ':')}`
- 성공 시 `/premium/{type}?paid=true`로 리다이렉트

#### 3. 콘텐츠 접근 방식
- URL 파라미터 `paid=true` 또는 localStorage 확인
- 결제 완료 시 `localStorage.setItem('premium_{type}_paid', 'true')`
- 콘텐츠 소비 후 localStorage 초기화 (일회성 결제)
- 만료 시간 설정 가능 (24시간 등)

#### 4. 웹훅 처리 (`/api/webhook/toss/route.ts`)
- `PAYMENT_STATUS_CHANGED`: 결제 완료/취소/실패 처리
- `DEPOSIT_CALLBACK`: 가상계좌 입금 확인
- 항상 200 응답 반환 (토스 재전송 방지)
- 에러 발생해도 200 응답 (중복 처리 방지)

### 특징
| 항목 | 내용 |
|------|------|
| 결제 방식 | 카드, 계좌이체, 카카오페이, 토스페이 |
| 데모 모드 | localStorage로 토글 가능 |
| 콘텐츠 보호 | localStorage 기반 (만료 시간 설정 가능) |
| 분석 연동 | Google Analytics, Meta Pixel 이벤트 |

### 구현 체크리스트
- [ ] API 라우트 복사 (success, fail, webhook)
- [ ] lib 파일 복사 (payment.ts, developerMode.ts, webhookHandlers.ts)
- [ ] PaymentWidget 컴포넌트 구현
- [ ] 프리미엄 콘텐츠 페이지 구현
- [ ] 환경변수 설정
- [ ] 토스페이먼츠 대시보드에서 웹훅 URL 등록

---

## 💰 프리미엄 테스트 기획 (운세/사주류)

### 핵심 전략

> **"불안 해소 = 지불 의향"**
> 
> 심리테스트는 "재미"지만, 운세/사주류는 "걱정, 고민, 결정, 불안 해소"
> → 실제 시장이 형성된 영역에서 수익화

### 가격 정책
- **900원 고정** (심리적 허들 최소화, 저가 전략)
- **매번 결제** (일회성, 재사용 불가)
- **결제 시점**: 모든 프리미엄 테스트는 **시작 전 결제**
  - 운세류: 생년월일 입력 → 결제 → 결과
  - 저가(900원)라 "일단 해보자" 심리 유도
  - 결과 일부 보여주고 막는 방식은 "낚였다" 느낌 → 비추천

### 기술 방향
- **하드코딩 우선**: API 연동 없이 데이터 기반 결과 생성
- **API 연동**: 필요시에만 (꿈해몽 자유입력 등)

---

### 📋 프리미엄 테스트 목록

#### Tier 1: 바로 구현 가능 (데이터 구조 단순)

| # | 테스트명 | slug | 입력값 | 필요 데이터 | 상태 |
|---|---------|------|--------|------------|------|
| 1 | **2025 신년운세** | fortune-2025 | 생년월일 | 띠 12개 × 운세 텍스트 | 🔄 진행중 |
| 2 | **별자리 운세** | zodiac-fortune | 생년월일 | 별자리 12개 × 운세 텍스트 | 대기 |
| 3 | **궁합 운세** | compatibility | 두 사람 생년월일 | 띠 궁합표 (12×12) | 대기 |
| 4 | **이름 풀이** | name-analysis | 이름 (한글) | 한글 획수표 + 수리 해석 | 대기 |
| 5 | **오늘의 운세** | daily-fortune | 생년월일 | 띠/별자리별 일일 운세 | 대기 |

#### Tier 2: 중간 난이도 (데이터 구조 복잡)

| # | 테스트명 | slug | 입력값 | 필요 데이터 | 상태 |
|---|---------|------|--------|------------|------|
| 6 | **사주팔자 풀이** | saju | 생년월일 + 태어난 시 | 만세력 변환 로직 + 천간/지지 해석 | 대기 |
| 7 | **타로 (3카드)** | tarot | 고민 유형 + 카드 3장 선택 | 78장 카드 해석 × 위치별 의미 | 대기 |
| 8 | **토정비결** | tojeong | 생년월일 | 토정비결 괘 해석 텍스트 | 대기 |
| 9 | **꿈해몽 (선택형)** | dream | 꿈 키워드 다중 선택 | 키워드 100개 × 해석 텍스트 | 대기 |

#### Tier 3: 선택형 변환 (원래 사진 분석)

| # | 테스트명 | slug | 입력값 | 필요 데이터 | 상태 |
|---|---------|------|--------|------------|------|
| 10 | **관상 풀이 (선택형)** | face-reading | 얼굴 특징 10개 선택 | 특징별 해석 조합 | 대기 |
| 11 | **손금 풀이 (선택형)** | palm-reading | 손금 특징 8개 선택 | 특징별 해석 조합 | 대기 |

#### 무료 (바이럴용)
- **전생 테스트** → 가벼우니까 무료
- **오늘의 한마디 운세** → 무료 미끼 (프리미엄 유도)

---

### 🔮 2025 신년운세 상세 설계

#### 입력
- 생년월일 (년/월/일)

#### 결과 구성 (A4 1장 분량)
```
1. 띠 기본 정보
   - 2025년 을사년 + 본인 띠
   - 올해의 키워드 3개

2. 총운 (전체 운세)
   - 2025년 전체 흐름
   - 행운 지수 (★★★★☆)

3. 분야별 운세
   - 💼 직장/사업운
   - 💰 재물운
   - 💕 연애/결혼운
   - 🏥 건강운
   - 📚 학업/자기계발운

4. 월별 운세 (12개월)
   - 각 월별 한 줄 요약 + 주의사항

5. 행운의 요소
   - 행운의 숫자
   - 행운의 색
   - 행운의 방향
   - 피해야 할 달

6. 2025년 조언
   - 올해 꼭 해야 할 것
   - 올해 피해야 할 것
```

#### 필요 데이터
```
띠별 데이터 (12개):
- 쥐띠(자), 소띠(축), 호랑이띠(인), 토끼띠(묘)
- 용띠(진), 뱀띠(사), 말띠(오), 양띠(미)
- 원숭이띠(신), 닭띠(유), 개띠(술), 돼지띠(해)

각 띠별로:
- 2025년 총운 (200자)
- 분야별 운세 5개 (각 100자)
- 월별 운세 12개 (각 50자)
- 행운 요소 (숫자, 색, 방향)
- 조언 2개 (각 50자)
```

---

### 🖥️ 프리미엄 테스트 파일 구조

```
src/
├── app/
│   ├── premium/
│   │   ├── page.tsx              # 프리미엄 테스트 목록
│   │   └── [slug]/
│   │       ├── page.tsx          # 소개 + 결제 버튼
│   │       └── result/page.tsx   # 결과 페이지
│   └── api/payment/
│       ├── success/route.ts      # ✅ 완료
│       └── fail/route.ts         # ✅ 완료
├── components/
│   └── premium/
│       ├── PaymentWidget.tsx     # 결제 위젯
│       └── FortuneResult.tsx     # 운세 결과 컴포넌트
├── lib/
│   ├── payment.ts                # ✅ 완료
│   └── fortune/
│       ├── zodiac.ts             # 띠 계산
│       └── fortune2025.ts        # 2025 운세 데이터
└── data/
    └── premium/
        └── fortune-2025/
            ├── rat.ts            # 쥐띠 운세
            ├── ox.ts             # 소띠 운세
            └── ...               # 나머지 띠
```

---

### 💳 결제 플로우 (테스트 전 결제)

```
[프리미엄 소개 페이지]
     ↓
[생년월일 입력]
     ↓
[결제 버튼 클릭] → 토스페이먼츠
     ↓
[결제 성공] → /premium/fortune-2025/result?paid=true&birth=YYYYMMDD
     ↓
[결과 페이지] → 운세 표시 (일회성, 새로고침 시 재결제 필요)
```

---

### 📅 구현 로드맵

#### Phase 1: 2025 신년운세 (시즌 긴급!)
- [x] 결제 API 준비 완료
- [ ] 띠 계산 로직 구현
- [ ] 12띠 운세 데이터 작성
- [ ] 프리미엄 소개 페이지
- [ ] 결과 페이지 UI
- [ ] 테스트 및 배포

#### Phase 2: 추가 운세
- [ ] 별자리 운세
- [ ] 궁합 운세
- [ ] 이름 풀이

#### Phase 3: 고급 운세
- [ ] 사주팔자 풀이
- [ ] 타로 (3카드)
- [ ] 토정비결

---

### 📊 예상 수익 시뮬레이션

| 시나리오 | 일 방문자 | 전환율 | 일 결제 | 일 수익 | 월 수익 |
|---------|----------|--------|--------|--------|--------|
| 보수적 | 1,000명 | 0.5% | 5건 | 4,500원 | 135,000원 |
| 중간 | 5,000명 | 1% | 50건 | 45,000원 | 1,350,000원 |
| 낙관적 | 10,000명 | 2% | 200건 | 180,000원 | 5,400,000원 |

> 운세류는 시즌(신년, 새학기, 연말)에 트래픽 급증 예상
