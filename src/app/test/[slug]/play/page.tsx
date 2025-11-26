'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getTestBySlug } from '@/lib/data';
import { questions as soulAnimalQuestions } from '@/tests/soul-animal/data';
import { questions as colorQuestions } from '@/tests/color-personality/data';
import { questions as mbtiQuestions } from '@/tests/mbti-basic/data';
import { questions as pastLifeQuestions } from '@/tests/past-life/data';
import { questions as idealTypeQuestions } from '@/tests/ideal-type/data';
import { questions as loveLanguageQuestions } from '@/tests/love-language/data';
import { questions as luck2025Questions } from '@/tests/luck-2025/data';
import { questions as brainTypeQuestions } from '@/tests/brain-type/data';
import { questions as stressLevelQuestions } from '@/tests/stress-level/data';
import { questions as attachmentStyleQuestions } from '@/tests/attachment-style/data';
import { questions as careerAptitudeQuestions } from '@/tests/career-aptitude/data';
import { questions as workStyleQuestions } from '@/tests/work-style/data';
import { questions as iqTestQuestions } from '@/tests/iq-test/data';
import { questions as datingStyleQuestions } from '@/tests/dating-style/data';
import { questions as loveCharmQuestions } from '@/tests/love-charm/data';
import { questions as moneySenseQuestions } from '@/tests/money-sense/data';
import { questions as richMindsetQuestions } from '@/tests/rich-mindset/data';
import { questions as discQuestions } from '@/tests/disc-personality/data';
import { questions as enneagramQuestions } from '@/tests/enneagram/data';
import { questions as eqTestQuestions } from '@/tests/eq-test/data';
import { questions as mentalStrengthQuestions } from '@/tests/mental-strength/data';
import { questions as burnoutQuestions } from '@/tests/burnout-level/data';
import { questions as focusTestQuestions } from '@/tests/focus-test/data';
import { questions as darkTriadQuestions } from '@/tests/dark-triad/data';
import { questions as mentalAgeQuestions } from '@/tests/mental-age/data';
import { questions as hiddenTalentQuestions } from '@/tests/hidden-talent/data';
import { questions as communicationStyleQuestions } from '@/tests/communication-style/data';
import { questions as leadershipTypeQuestions } from '@/tests/leadership-type/data';
import { questions as creativityIndexQuestions } from '@/tests/creativity-index/data';
import { questions as innerChildQuestions } from '@/tests/inner-child/data';
import { questions as flexTendencyQuestions } from '@/tests/flex-tendency/data';
import { questions as emotionRegulationQuestions } from '@/tests/emotion-regulation/data';
import { questions as pushPullQuestions } from '@/tests/push-pull/data';
import { questions as breakupRecoveryQuestions } from '@/tests/breakup-recovery/data';
import { questions as companyDinnerQuestions } from '@/tests/company-dinner/data';
import { questions as dramaCharacterQuestions } from '@/tests/drama-character/data';
import { questions as perfectionismQuestions } from '@/tests/perfectionism/data';
import { questions as empathyLevelQuestions } from '@/tests/empathy-level/data';
import { questions as exAttachmentQuestions } from '@/tests/ex-attachment/data';
import { questions as reunionChanceQuestions } from '@/tests/reunion-chance/data';
import { questions as loveCellQuestions } from '@/tests/love-cell/data';
import { questions as coupleFightQuestions } from '@/tests/couple-fight/data';
import { questions as breakupReasonQuestions } from '@/tests/breakup-reason/data';
import { questions as nextLoveReadyQuestions } from '@/tests/next-love-ready/data';
import { questions as loveMeterQuestions } from '@/tests/love-meter/data';
import { questions as crushSuccessQuestions } from '@/tests/crush-success/data';
import { questions as redFlagDetectQuestions } from '@/tests/red-flag-detect/data';
import { questions as confessionTimingQuestions } from '@/tests/confession-timing/data';
import { questions as friendToLoverQuestions } from '@/tests/friend-to-lover/data';
import { questions as marriageFitQuestions } from '@/tests/marriage-fit/data';
import { questions as coupleCommQuestions } from '@/tests/couple-comm/data';
import { questions as datingPatternQuestions } from '@/tests/dating-pattern/data';
import { questions as hiddenDesireQuestions } from '@/tests/hidden-desire/data';
import { questions as seductionStyleQuestions } from '@/tests/seduction-style/data';
import { questions as trueNatureQuestions } from '@/tests/true-nature/data';
import { questions as cheatingRiskQuestions } from '@/tests/cheating-risk/data';
import { questions as obsessionLevelQuestions } from '@/tests/obsession-level/data';
import { questions as genderIdentityQuestions } from '@/tests/gender-identity/data';
import { questions as youtuberTypeQuestions } from '@/tests/youtuber-type/data';
import { questions as attentionSeekerQuestions } from '@/tests/attention-seeker/data';
import { questions as mbtiShadowQuestions } from '@/tests/mbti-shadow/data';
import { questions as mbtiStressQuestions } from '@/tests/mbti-stress/data';
import { questions as alphaGenQuestions } from '@/tests/alpha-gen/data';
import { questions as digitalNativeQuestions } from '@/tests/digital-native/data';
import { questions as midnightSnackQuestions } from '@/tests/midnight-snack/data';
import { questions as travelStyleQuestions } from '@/tests/travel-style/data';
import { questions as shoppingTypeQuestions } from '@/tests/shopping-type/data';
import { questions as petMatchQuestions } from '@/tests/pet-match/data';
import { questions as zombieSurvivalQuestions } from '@/tests/zombie-survival/data';
import { questions as islandSurvivalQuestions } from '@/tests/island-survival/data';
import { questions as mbtiOfficeQuestions } from '@/tests/mbti-office/data';
import { questions as mbtiDatingQuestions } from '@/tests/mbti-dating/data';
import { questions as drivingPersonalityQuestions } from '@/tests/driving-personality/data';
import { questions as karaokeTypeQuestions } from '@/tests/karaoke-type/data';
import { questions as fashionPersonalityQuestions } from '@/tests/fashion-personality/data';
import { questions as foodTasteQuestions } from '@/tests/food-taste/data';
import { questions as roomCleaningQuestions } from '@/tests/room-cleaning/data';
import { questions as hobbyRecommendQuestions } from '@/tests/hobby-recommend/data';
import { questions as morningNightQuestions } from '@/tests/morning-night/data';
import { questions as seasonPersonalityQuestions } from '@/tests/season-personality/data';
import { questions as mbtiTravelQuestions } from '@/tests/mbti-travel/data';
import { questions as mbtiDrinkingQuestions } from '@/tests/mbti-drinking/data';
import { questions as fairytaleRoleQuestions } from '@/tests/fairytale-role/data';
import { questions as magicElementQuestions } from '@/tests/magic-element/data';
import { questions as gameCharacterQuestions } from '@/tests/game-character/data';
import { questions as superPowerQuestions } from '@/tests/super-power/data';
import { questions as hogwartsHouseQuestions } from '@/tests/hogwarts-house/data';
import { questions as meetingTypeQuestions } from '@/tests/meeting-type/data';
import { questions as mbtiConflictQuestions } from '@/tests/mbti-conflict/data';
import { questions as mbtiSpendingQuestions } from '@/tests/mbti-spending/data';
import { questions as ajaePowerQuestions } from '@/tests/ajae-power/data';
import { questions as hipsterLevelQuestions } from '@/tests/hipster-level/data';
import { questions as mondayBluesQuestions } from '@/tests/monday-blues/data';
import { questions as bossTypeQuestions } from '@/tests/boss-type/data';

// 공통 질문 타입
interface QuestionOption {
  text: string;
  [key: string]: unknown;
}

interface Question {
  id: number;
  question: string;
  options: QuestionOption[];
}

// IQ 테스트 질문을 공통 형식으로 변환
const convertedIqTestQuestions: Question[] = iqTestQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt })),
}));

// 부자 마인드 테스트 질문을 공통 형식으로 변환
const convertedRichMindsetQuestions: Question[] = richMindsetQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// EQ 테스트 질문을 공통 형식으로 변환
const convertedEqTestQuestions: Question[] = eqTestQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 멘탈 강도 테스트 질문을 공통 형식으로 변환
const convertedMentalStrengthQuestions: Question[] = mentalStrengthQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 번아웃 테스트 질문을 공통 형식으로 변환
const convertedBurnoutQuestions: Question[] = burnoutQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 집중력 테스트 질문을 공통 형식으로 변환
const convertedFocusTestQuestions: Question[] = focusTestQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 다크 트라이어드 테스트 질문을 공통 형식으로 변환
const convertedDarkTriadQuestions: Question[] = darkTriadQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 정신연령 테스트 질문을 공통 형식으로 변환
const convertedMentalAgeQuestions: Question[] = mentalAgeQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 숨겨진 재능 테스트 질문을 공통 형식으로 변환
const convertedHiddenTalentQuestions: Question[] = hiddenTalentQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 의사소통 스타일 테스트 질문을 공통 형식으로 변환
const convertedCommunicationStyleQuestions: Question[] = communicationStyleQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 리더십 유형 테스트 질문을 공통 형식으로 변환
const convertedLeadershipTypeQuestions: Question[] = leadershipTypeQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 창의력 지수 테스트 질문을 공통 형식으로 변환
const convertedCreativityIndexQuestions: Question[] = creativityIndexQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 내면아이 테스트 질문을 공통 형식으로 변환
const convertedInnerChildQuestions: Question[] = innerChildQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 플렉스 성향 테스트 질문을 공통 형식으로 변환
const convertedFlexTendencyQuestions: Question[] = flexTendencyQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 감정 조절력 테스트 질문을 공통 형식으로 변환
const convertedEmotionRegulationQuestions: Question[] = emotionRegulationQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 밀당 능력 테스트 질문을 공통 형식으로 변환
const convertedPushPullQuestions: Question[] = pushPullQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 이별 회복 단계 테스트 질문을 공통 형식으로 변환
const convertedBreakupRecoveryQuestions: Question[] = breakupRecoveryQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 회식 유형 테스트 질문을 공통 형식으로 변환
const convertedCompanyDinnerQuestions: Question[] = companyDinnerQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 드라마 캐릭터 테스트 질문을 공통 형식으로 변환
const convertedDramaCharacterQuestions: Question[] = dramaCharacterQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 완벽주의 테스트 질문을 공통 형식으로 변환
const convertedPerfectionismQuestions: Question[] = perfectionismQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 공감 능력 테스트 질문을 공통 형식으로 변환
const convertedEmpathyLevelQuestions: Question[] = empathyLevelQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 전 애인 미련 테스트 질문을 공통 형식으로 변환
const convertedExAttachmentQuestions: Question[] = exAttachmentQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 재회 가능성 테스트 질문을 공통 형식으로 변환
const convertedReunionChanceQuestions: Question[] = reunionChanceQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 연애 세포 테스트 질문을 공통 형식으로 변환
const convertedLoveCellQuestions: Question[] = loveCellQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 커플 싸움 패턴 테스트 질문을 공통 형식으로 변환
const convertedCoupleFightQuestions: Question[] = coupleFightQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 이별 원인 분석 테스트 질문을 공통 형식으로 변환
const convertedBreakupReasonQuestions: Question[] = breakupReasonQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 다음 연애 준비도 테스트 질문을 공통 형식으로 변환
const convertedNextLoveReadyQuestions: Question[] = nextLoveReadyQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 연인 애정도 측정 테스트 질문을 공통 형식으로 변환
const convertedLoveMeterQuestions: Question[] = loveMeterQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 짝사랑 성공률 테스트 질문을 공통 형식으로 변환
const convertedCrushSuccessQuestions: Question[] = crushSuccessQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 레드플래그 감별 테스트 질문을 공통 형식으로 변환
const convertedRedFlagDetectQuestions: Question[] = redFlagDetectQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 고백 타이밍 테스트 질문을 공통 형식으로 변환
const convertedConfessionTimingQuestions: Question[] = confessionTimingQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 친구→연인 테스트 질문을 공통 형식으로 변환
const convertedFriendToLoverQuestions: Question[] = friendToLoverQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 결혼 적합도 테스트 질문을 공통 형식으로 변환
const convertedMarriageFitQuestions: Question[] = marriageFitQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 커플 소통 점수 테스트 질문을 공통 형식으로 변환
const convertedCoupleCommQuestions: Question[] = coupleCommQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 연애 패턴 분석 테스트 질문을 공통 형식으로 변환
const convertedDatingPatternQuestions: Question[] = datingPatternQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 숨겨진 욕망 테스트 질문을 공통 형식으로 변환
const convertedHiddenDesireQuestions: Question[] = hiddenDesireQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 유혹 스타일 테스트 질문을 공통 형식으로 변환
const convertedSeductionStyleQuestions: Question[] = seductionStyleQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 본성 테스트 질문을 공통 형식으로 변환
const convertedTrueNatureQuestions: Question[] = trueNatureQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 바람기 지수 테스트 질문을 공통 형식으로 변환
const convertedCheatingRiskQuestions: Question[] = cheatingRiskQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 집착 레벨 테스트 질문을 공통 형식으로 변환
const convertedObsessionLevelQuestions: Question[] = obsessionLevelQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 젠더 정체성 테스트 질문을 공통 형식으로 변환
const convertedGenderIdentityQuestions: Question[] = genderIdentityQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 유튜버 유형 테스트 질문을 공통 형식으로 변환
const convertedYoutuberTypeQuestions: Question[] = youtuberTypeQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 관종력 테스트 질문을 공통 형식으로 변환
const convertedAttentionSeekerQuestions: Question[] = attentionSeekerQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// MBTI 부캐 테스트 질문을 공통 형식으로 변환
const convertedMbtiShadowQuestions: Question[] = mbtiShadowQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// MBTI 스트레스 반응 테스트 질문을 공통 형식으로 변환
const convertedMbtiStressQuestions: Question[] = mbtiStressQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 알파세대 이해력 테스트 질문을 공통 형식으로 변환
const convertedAlphaGenQuestions: Question[] = alphaGenQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 디지털 네이티브 테스트 질문을 공통 형식으로 변환
const convertedDigitalNativeQuestions: Question[] = digitalNativeQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 야식 유형 테스트 질문을 공통 형식으로 변환
const convertedMidnightSnackQuestions: Question[] = midnightSnackQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 여행 스타일 테스트 질문을 공통 형식으로 변환
const convertedTravelStyleQuestions: Question[] = travelStyleQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 쇼핑 유형 테스트 질문을 공통 형식으로 변환
const convertedShoppingTypeQuestions: Question[] = shoppingTypeQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 반려동물 궁합 테스트 질문을 공통 형식으로 변환
const convertedPetMatchQuestions: Question[] = petMatchQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 좀비 생존 테스트 질문을 공통 형식으로 변환
const convertedZombieSurvivalQuestions: Question[] = zombieSurvivalQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 무인도 생존 테스트 질문을 공통 형식으로 변환
const convertedIslandSurvivalQuestions: Question[] = islandSurvivalQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// MBTI 직장 생존기 테스트 질문을 공통 형식으로 변환
const convertedMbtiOfficeQuestions: Question[] = mbtiOfficeQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// MBTI 연애할 때 테스트 질문을 공통 형식으로 변환
const convertedMbtiDatingQuestions: Question[] = mbtiDatingQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 운전 성격 테스트 질문을 공통 형식으로 변환
const convertedDrivingPersonalityQuestions: Question[] = drivingPersonalityQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 노래방 유형 테스트 질문을 공통 형식으로 변환
const convertedKaraokeTypeQuestions: Question[] = karaokeTypeQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 패션 성격 테스트 질문을 공통 형식으로 변환
const convertedFashionPersonalityQuestions: Question[] = fashionPersonalityQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 음식 취향 테스트 질문을 공통 형식으로 변환
const convertedFoodTasteQuestions: Question[] = foodTasteQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 방 정리 유형 테스트 질문을 공통 형식으로 변환
const convertedRoomCleaningQuestions: Question[] = roomCleaningQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 취미 추천 테스트 질문을 공통 형식으로 변환
const convertedHobbyRecommendQuestions: Question[] = hobbyRecommendQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 아침형/저녁형 테스트 질문을 공통 형식으로 변환
const convertedMorningNightQuestions: Question[] = morningNightQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 계절 성격 테스트 질문을 공통 형식으로 변환
const convertedSeasonPersonalityQuestions: Question[] = seasonPersonalityQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// MBTI 여행 스타일 테스트 질문을 공통 형식으로 변환
const convertedMbtiTravelQuestions: Question[] = mbtiTravelQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// MBTI 술자리 테스트 질문을 공통 형식으로 변환
const convertedMbtiDrinkingQuestions: Question[] = mbtiDrinkingQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 동화 속 역할 테스트 질문을 공통 형식으로 변환
const convertedFairytaleRoleQuestions: Question[] = fairytaleRoleQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 마법 속성 테스트 질문을 공통 형식으로 변환
const convertedMagicElementQuestions: Question[] = magicElementQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 게임 캐릭터 테스트 질문을 공통 형식으로 변환
const convertedGameCharacterQuestions: Question[] = gameCharacterQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 슈퍼파워 테스트 질문을 공통 형식으로 변환
const convertedSuperPowerQuestions: Question[] = superPowerQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 호그와트 기숙사 테스트 질문을 공통 형식으로 변환
const convertedHogwartsHouseQuestions: Question[] = hogwartsHouseQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 회의 유형 테스트 질문을 공통 형식으로 변환
const convertedMeetingTypeQuestions: Question[] = meetingTypeQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// MBTI 싸울 때 테스트 질문을 공통 형식으로 변환
const convertedMbtiConflictQuestions: Question[] = mbtiConflictQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// MBTI 돈 쓸 때 테스트 질문을 공통 형식으로 변환
const convertedMbtiSpendingQuestions: Question[] = mbtiSpendingQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 아재력 테스트 질문을 공통 형식으로 변환
const convertedAjaePowerQuestions: Question[] = ajaePowerQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 힙스터 레벨 테스트 질문을 공통 형식으로 변환
const convertedHipsterLevelQuestions: Question[] = hipsterLevelQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 월요병 지수 테스트 질문을 공통 형식으로 변환
const convertedMondayBluesQuestions: Question[] = mondayBluesQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 상사 유형 테스트 질문을 공통 형식으로 변환
const convertedBossTypeQuestions: Question[] = bossTypeQuestions.map((q) => ({
  id: q.id,
  question: q.question,
  options: q.options.map((opt) => ({ text: opt.text })),
}));

// 테스트별 질문 데이터 매핑
const testQuestionsMap: Record<string, Question[]> = {
  'soul-animal': soulAnimalQuestions,
  'color-personality': colorQuestions,
  'mbti-basic': mbtiQuestions,
  'past-life': pastLifeQuestions,
  'ideal-type': idealTypeQuestions,
  'love-language': loveLanguageQuestions,
  'luck-2025': luck2025Questions,
  'brain-type': brainTypeQuestions,
  'stress-level': stressLevelQuestions,
  'attachment-style': attachmentStyleQuestions,
  'career-aptitude': careerAptitudeQuestions,
  'work-style': workStyleQuestions,
  'iq-test': convertedIqTestQuestions,
  'dating-style': datingStyleQuestions,
  'love-charm': loveCharmQuestions,
  'money-sense': moneySenseQuestions,
  'rich-mindset': convertedRichMindsetQuestions,
  'disc-personality': discQuestions,
  'enneagram': enneagramQuestions,
  'eq-test': convertedEqTestQuestions,
  'mental-strength': convertedMentalStrengthQuestions,
  'burnout-level': convertedBurnoutQuestions,
  'focus-test': convertedFocusTestQuestions,
  'dark-triad': convertedDarkTriadQuestions,
  'mental-age': convertedMentalAgeQuestions,
  'hidden-talent': convertedHiddenTalentQuestions,
  'communication-style': convertedCommunicationStyleQuestions,
  'leadership-type': convertedLeadershipTypeQuestions,
  'creativity-index': convertedCreativityIndexQuestions,
  'inner-child': convertedInnerChildQuestions,
  'flex-tendency': convertedFlexTendencyQuestions,
  'emotion-regulation': convertedEmotionRegulationQuestions,
  'push-pull': convertedPushPullQuestions,
  'breakup-recovery': convertedBreakupRecoveryQuestions,
  'company-dinner': convertedCompanyDinnerQuestions,
  'drama-character': convertedDramaCharacterQuestions,
  'perfectionism': convertedPerfectionismQuestions,
  'empathy-level': convertedEmpathyLevelQuestions,
  'ex-attachment': convertedExAttachmentQuestions,
  'reunion-chance': convertedReunionChanceQuestions,
  'love-cell': convertedLoveCellQuestions,
  'couple-fight': convertedCoupleFightQuestions,
  'breakup-reason': convertedBreakupReasonQuestions,
  'next-love-ready': convertedNextLoveReadyQuestions,
  'love-meter': convertedLoveMeterQuestions,
  'crush-success': convertedCrushSuccessQuestions,
  'red-flag-detect': convertedRedFlagDetectQuestions,
  'confession-timing': convertedConfessionTimingQuestions,
  'friend-to-lover': convertedFriendToLoverQuestions,
  'marriage-fit': convertedMarriageFitQuestions,
  'couple-comm': convertedCoupleCommQuestions,
  'dating-pattern': convertedDatingPatternQuestions,
  'hidden-desire': convertedHiddenDesireQuestions,
  'seduction-style': convertedSeductionStyleQuestions,
  'true-nature': convertedTrueNatureQuestions,
  'cheating-risk': convertedCheatingRiskQuestions,
  'obsession-level': convertedObsessionLevelQuestions,
  'gender-identity': convertedGenderIdentityQuestions,
  'youtuber-type': convertedYoutuberTypeQuestions,
  'attention-seeker': convertedAttentionSeekerQuestions,
  'mbti-shadow': convertedMbtiShadowQuestions,
  'mbti-stress': convertedMbtiStressQuestions,
  'alpha-gen': convertedAlphaGenQuestions,
  'digital-native': convertedDigitalNativeQuestions,
  'midnight-snack': convertedMidnightSnackQuestions,
  'travel-style': convertedTravelStyleQuestions,
  'shopping-type': convertedShoppingTypeQuestions,
  'pet-match': convertedPetMatchQuestions,
  'zombie-survival': convertedZombieSurvivalQuestions,
  'island-survival': convertedIslandSurvivalQuestions,
  'mbti-office': convertedMbtiOfficeQuestions,
  'mbti-dating': convertedMbtiDatingQuestions,
  'driving-personality': convertedDrivingPersonalityQuestions,
  'karaoke-type': convertedKaraokeTypeQuestions,
  'fashion-personality': convertedFashionPersonalityQuestions,
  'food-taste': convertedFoodTasteQuestions,
  'room-cleaning': convertedRoomCleaningQuestions,
  'hobby-recommend': convertedHobbyRecommendQuestions,
  'morning-night': convertedMorningNightQuestions,
  'season-personality': convertedSeasonPersonalityQuestions,
  'mbti-travel': convertedMbtiTravelQuestions,
  'mbti-drinking': convertedMbtiDrinkingQuestions,
  'fairytale-role': convertedFairytaleRoleQuestions,
  'magic-element': convertedMagicElementQuestions,
  'game-character': convertedGameCharacterQuestions,
  'super-power': convertedSuperPowerQuestions,
  'hogwarts-house': convertedHogwartsHouseQuestions,
  'meeting-type': convertedMeetingTypeQuestions,
  'mbti-conflict': convertedMbtiConflictQuestions,
  'mbti-spending': convertedMbtiSpendingQuestions,
  'ajae-power': convertedAjaePowerQuestions,
  'hipster-level': convertedHipsterLevelQuestions,
  'monday-blues': convertedMondayBluesQuestions,
  'boss-type': convertedBossTypeQuestions,
};

export default function TestPlayPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const test = getTestBySlug(slug);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // 지원하는 테스트인지 확인
  const isSupported = slug in testQuestionsMap;
  const testQuestions = testQuestionsMap[slug] || [];

  useEffect(() => {
    // 페이지 로드 시 기존 답변 복구 (새로고침 대비)
    const saved = sessionStorage.getItem(`test-${slug}-answers`);
    if (saved) {
      const savedAnswers = JSON.parse(saved);
      setAnswers(savedAnswers);
      setCurrentQuestion(savedAnswers.length);
    }
  }, [slug]);

  if (!test) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">테스트를 찾을 수 없습니다</h1>
      </div>
    );
  }

  if (!isSupported) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">준비 중인 테스트입니다</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">이 테스트는 아직 준비 중입니다. 곧 만나요!</p>
        <button
          onClick={() => router.push('/')}
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
        >
          홈으로 돌아가기
        </button>
      </div>
    );
  }

  const question = testQuestions[currentQuestion];
  const progress = ((currentQuestion) / testQuestions.length) * 100;
  const isLastQuestion = currentQuestion === testQuestions.length - 1;

  const handleSelectOption = (optionIndex: number) => {
    if (isAnimating) return;
    setSelectedOption(optionIndex);
    
    // 선택 후 자동으로 다음으로 넘어감
    setTimeout(() => {
      handleNextWithOption(optionIndex);
    }, 400);
  };

  const handleNextWithOption = (optionIndex: number) => {
    if (isAnimating) return;

    setIsAnimating(true);
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);
    sessionStorage.setItem(`test-${slug}-answers`, JSON.stringify(newAnswers));

    if (isLastQuestion) {
      // 결과 페이지로 이동
      sessionStorage.setItem(`test-${slug}-completed`, 'true');
      router.push(`/test/${slug}/result?answers=${newAnswers.join(',')}`);
    } else {
      // 다음 질문으로
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handleNext = () => {
    if (selectedOption === null || isAnimating) return;
    handleNextWithOption(selectedOption);
  };

  const handlePrev = () => {
    if (currentQuestion === 0 || isAnimating) return;

    setIsAnimating(true);
    const newAnswers = answers.slice(0, -1);
    setAnswers(newAnswers);
    sessionStorage.setItem(`test-${slug}-answers`, JSON.stringify(newAnswers));

    setTimeout(() => {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[answers.length - 1] ?? null);
      setIsAnimating(false);
    }, 200);
  };

  const handleExit = () => {
    if (confirm('테스트를 종료하시겠습니까? 진행 상황이 저장되지 않습니다.')) {
      sessionStorage.removeItem(`test-${slug}-answers`);
      router.push(`/test/${slug}`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={handleExit}
          className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          나가기
        </button>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {currentQuestion + 1} / {testQuestions.length}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full mb-8 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Question Card */}
      <div
        className={`bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 md:p-8 transition-all duration-300 ${
          isAnimating ? 'opacity-50 scale-98' : 'opacity-100 scale-100'
        }`}
      >
        {/* Question */}
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          {question.question}
        </h2>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelectOption(index)}
              disabled={isAnimating}
              className={`w-full p-4 rounded-xl text-left transition-all duration-200 ${
                selectedOption === index
                  ? 'bg-indigo-600 text-white shadow-lg scale-[1.02]'
                  : 'bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 hover:scale-[1.01]'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                    selectedOption === index
                      ? 'border-white bg-white'
                      : 'border-gray-300 dark:border-gray-500'
                  }`}
                >
                  {selectedOption === index && (
                    <div className="w-3 h-3 rounded-full bg-indigo-600" />
                  )}
                </div>
                <span className="font-medium">{option.text}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrev}
          disabled={currentQuestion === 0 || isAnimating}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            currentQuestion === 0
              ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed'
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          이전
        </button>

        <button
          onClick={handleNext}
          disabled={selectedOption === null || isAnimating}
          className={`flex items-center gap-2 px-6 py-2 rounded-lg font-semibold transition-all ${
            selectedOption === null
              ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
              : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:shadow-xl'
          }`}
        >
          {isLastQuestion ? '결과 보기' : '다음'}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
