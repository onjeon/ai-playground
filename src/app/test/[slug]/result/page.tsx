'use client';

import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { RotateCcw, Home, Heart, Check, AlertCircle, Briefcase, Users, Clock, Sparkles, BookOpen, Star, Flame, Zap, AlertTriangle, ThumbsUp, X, Lightbulb, Activity, Brain, Trophy, Wine, Coffee, MessageCircle, Smile, TrendingUp, History, Moon, Sun, Smartphone, Edit3, RefreshCw, Wallet, DollarSign, FileText, Shield, Wrench, Phone, Music, Utensils } from 'lucide-react';
import ShareButtons from '@/components/ShareButtons';
// AdSense 승인 후 활성화
// import { AdBanner, AdInterstitial } from '@/components/ads';
import { getTestBySlug, getSimilarTests } from '@/lib/data';
import { calculateResult as calculateSoulAnimalResult, SoulAnimalResult } from '@/tests/soul-animal/data';
import { calculateResult as calculateColorResult, ColorResult } from '@/tests/color-personality/data';
import { calculateResult as calculateMBTIResult, MBTIResult } from '@/tests/mbti-basic/data';
import { calculateResult as calculatePastLifeResult, PastLifeResult } from '@/tests/past-life/data';
import { calculateResult as calculateIdealTypeResult, IdealTypeResult } from '@/tests/ideal-type/data';
import { calculateResult as calculateLoveLanguageResult, LoveLanguageResult } from '@/tests/love-language/data';
import { calculateResult as calculateLuck2025Result, Luck2025Result } from '@/tests/luck-2025/data';
import { calculateResult as calculateBrainTypeResult, BrainTypeResult } from '@/tests/brain-type/data';
import { calculateResult as calculateStressLevelResult, StressLevelResult } from '@/tests/stress-level/data';
import { calculateResult as calculateAttachmentStyleResult, AttachmentStyleResult } from '@/tests/attachment-style/data';
import { calculateResult as calculateCareerAptitudeResult, CareerAptitudeResult } from '@/tests/career-aptitude/data';
import { calculateResult as calculateWorkStyleResult, WorkStyleResult } from '@/tests/work-style/data';
import { calculateResult as calculateIQTestResult, IQTestResult } from '@/tests/iq-test/data';
import { calculateResult as calculateDatingStyleResult, DatingStyleResult } from '@/tests/dating-style/data';
import { calculateResult as calculateLoveCharmResult, LoveCharmResult } from '@/tests/love-charm/data';
import { calculateResult as calculateMoneySenseResult, MoneySenseResult } from '@/tests/money-sense/data';
import { calculateResult as calculateRichMindsetResult, RichMindsetResult } from '@/tests/rich-mindset/data';
import { calculateResult as calculateDISCResult, DISCResult } from '@/tests/disc-personality/data';
import { calculateResult as calculateEnneagramResult, EnneagramResult } from '@/tests/enneagram/data';
import { calculateResult as calculateEQResult, EQResult } from '@/tests/eq-test/data';
import { calculateResult as calculateMentalStrengthResult, MentalStrengthResult } from '@/tests/mental-strength/data';
import { calculateResult as calculateBurnoutResult, BurnoutResult } from '@/tests/burnout-level/data';
import { calculateResult as calculateFocusResult, FocusResult } from '@/tests/focus-test/data';
import { calculateDarkTriadResult, DarkTriadResult } from '@/tests/dark-triad/data';
import { calculateMentalAgeResult, MentalAgeResult } from '@/tests/mental-age/data';
import { calculateHiddenTalentResult, HiddenTalentResult } from '@/tests/hidden-talent/data';
import { calculateCommunicationStyleResult, CommunicationStyleResult } from '@/tests/communication-style/data';
import { calculateLeadershipTypeResult, LeadershipTypeResult } from '@/tests/leadership-type/data';
import { calculateCreativityIndexResult, CreativityIndexResult } from '@/tests/creativity-index/data';
import { calculateInnerChildResult, InnerChildResult } from '@/tests/inner-child/data';
import { calculateFlexTendencyResult, FlexTendencyResult } from '@/tests/flex-tendency/data';
import { calculateEmotionRegulationResult, EmotionRegulationResult } from '@/tests/emotion-regulation/data';
import { calculateMBTICompatibilityResult, MBTICompatibilityResult } from '@/tests/mbti-compatibility/data';
import { calculateJealousyTypeResult, JealousyTypeResult } from '@/tests/jealousy-type/data';
import { calculateSelfEsteemResult, SelfEsteemResult } from '@/tests/self-esteem/data';
import { calculateVillainHeroResult, VillainHeroResult } from '@/tests/villain-hero/data';
import { calculateFlirtingStyleResult, FlirtingStyleResult } from '@/tests/flirting-style/data';
import { calculateTPowerResult, TPowerResult } from '@/tests/t-power/data';
import { calculateSocialBatteryResult, SocialBatteryResult } from '@/tests/social-battery/data';
import { calculateAngerStyleResult, AngerStyleResult } from '@/tests/anger-style/data';
import { calculateAnxietyLevelResult, AnxietyLevelResult } from '@/tests/anxiety-level/data';
import { calculateConflictStyleResult, ConflictStyleResult } from '@/tests/conflict-style/data';
import { calculateCombatPowerResult, CombatPowerResult } from '@/tests/combat-power/data';
import { calculateDecisionStyleResult, DecisionStyleResult } from '@/tests/decision-style/data';
import { calculateDrinkingStyleResult, DrinkingStyleResult } from '@/tests/drinking-style/data';
import { calculateFirstImpressionResult, FirstImpressionResult } from '@/tests/first-impression/data';
import { calculateFriendshipStyleResult, FriendshipStyleResult } from '@/tests/friendship-style/data';
import { calculateGaslightingCheckResult, GaslightingCheckResult } from '@/tests/gaslighting-check/data';
import { calculateHumorTypeResult, HumorTypeResult } from '@/tests/humor-type/data';
import { calculateIntrovertExtrovertResult, IntrovertExtrovertResult } from '@/tests/introvert-extrovert/data';
import { calculateLifeGraphResult, LifeGraphResult } from '@/tests/life-graph/data';
import { calculateLoveTraumaResult, LoveTraumaResult } from '@/tests/love-trauma/data';
import { calculatePeoplePleserResult, PeoplePleserResult } from '@/tests/people-pleaser/data';
import { calculatePersonalityDualityResult, PersonalityDualityResult } from '@/tests/personality-duality/data';
import { calculateProcrastinationResult, ProcrastinationResult } from '@/tests/procrastination/data';
import { calculateSleepTypeResult, SleepTypeResult } from '@/tests/sleep-type/data';
import { calculateSnsPersonalityResult, SnsPersonalityResult } from '@/tests/sns-personality/data';
import { calculateSpendingTypeResult, SpendingTypeResult } from '@/tests/spending-type/data';
import { calculateTarotTodayResult, TarotTodayResult } from '@/tests/tarot-today/data';
import { calculateToxicCheckResult, ToxicCheckResult } from '@/tests/toxic-check/data';
import { calculateTraumaCheckResult, TraumaCheckResult } from '@/tests/trauma-check/data';
import { calculateResult as calculatePushPullResult, PushPullResult } from '@/tests/push-pull/data';
import { calculateResult as calculateBreakupRecoveryResult, BreakupRecoveryResult } from '@/tests/breakup-recovery/data';
import { calculateResult as calculateCompanyDinnerResult, CompanyDinnerResult } from '@/tests/company-dinner/data';
import { calculateResult as calculateDramaCharacterResult, DramaCharacterResult } from '@/tests/drama-character/data';
import { calculateResult as calculatePerfectionismResult, PerfectionismResult } from '@/tests/perfectionism/data';
import { calculateResult as calculateEmpathyLevelResult, EmpathyLevelResult } from '@/tests/empathy-level/data';
import { calculateResult as calculateExAttachmentResult, ExAttachmentResult } from '@/tests/ex-attachment/data';
import { calculateResult as calculateReunionChanceResult, ReunionChanceResult } from '@/tests/reunion-chance/data';
import { calculateResult as calculateLoveCellResult, LoveCellResult } from '@/tests/love-cell/data';
import { calculateResult as calculateCoupleFightResult, CoupleFightResult } from '@/tests/couple-fight/data';
import { calculateResult as calculateBreakupReasonResult, BreakupReasonResult } from '@/tests/breakup-reason/data';
import { calculateResult as calculateNextLoveReadyResult, NextLoveReadyResult } from '@/tests/next-love-ready/data';
import { calculateResult as calculateLoveMeterResult, LoveMeterResult } from '@/tests/love-meter/data';
import { calculateResult as calculateCrushSuccessResult, CrushSuccessResult } from '@/tests/crush-success/data';
import { calculateResult as calculateRedFlagDetectResult, RedFlagDetectResult } from '@/tests/red-flag-detect/data';
import { calculateResult as calculateConfessionTimingResult, ConfessionTimingResult } from '@/tests/confession-timing/data';
import { calculateResult as calculateFriendToLoverResult, FriendToLoverResult } from '@/tests/friend-to-lover/data';
import { calculateResult as calculateMarriageFitResult, MarriageFitResult } from '@/tests/marriage-fit/data';
import { calculateResult as calculateCoupleCommResult, CoupleCommResult } from '@/tests/couple-comm/data';
import { calculateResult as calculateDatingPatternResult, DatingPatternResult } from '@/tests/dating-pattern/data';
import { calculateResult as calculateHiddenDesireResult, HiddenDesireResult } from '@/tests/hidden-desire/data';
import { calculateResult as calculateSeductionStyleResult, SeductionStyleResult } from '@/tests/seduction-style/data';
import { calculateResult as calculateTrueNatureResult, TrueNatureResult } from '@/tests/true-nature/data';
import { calculateResult as calculateCheatingRiskResult, CheatingRiskResult } from '@/tests/cheating-risk/data';
import { calculateResult as calculateObsessionLevelResult, ObsessionLevelResult } from '@/tests/obsession-level/data';
import { calculateResult as calculateGenderIdentityResult, GenderIdentityResult } from '@/tests/gender-identity/data';
import { calculateResult as calculateYoutuberTypeResult, YoutuberTypeResult } from '@/tests/youtuber-type/data';
import { calculateResult as calculateAttentionSeekerResult, AttentionSeekerResult } from '@/tests/attention-seeker/data';
import { calculateResult as calculateMbtiShadowResult, MbtiShadowResult } from '@/tests/mbti-shadow/data';
import { calculateResult as calculateMbtiStressResult, MbtiStressResult } from '@/tests/mbti-stress/data';
import { calculateResult as calculateAlphaGenResult, AlphaGenResult } from '@/tests/alpha-gen/data';
import { calculateResult as calculateDigitalNativeResult, DigitalNativeResult } from '@/tests/digital-native/data';
import { calculateResult as calculateMidnightSnackResult, MidnightSnackResult } from '@/tests/midnight-snack/data';
import { calculateResult as calculateTravelStyleResult, TravelStyleResult } from '@/tests/travel-style/data';
import { calculateResult as calculateShoppingTypeResult, ShoppingTypeResult } from '@/tests/shopping-type/data';
import { calculateResult as calculatePetMatchResult, PetMatchResult } from '@/tests/pet-match/data';
import { calculateResult as calculateZombieSurvivalResult, ZombieSurvivalResult } from '@/tests/zombie-survival/data';
import { calculateResult as calculateIslandSurvivalResult, IslandSurvivalResult } from '@/tests/island-survival/data';
import { calculateResult as calculateMbtiOfficeResult, MbtiOfficeResult } from '@/tests/mbti-office/data';
import { calculateResult as calculateMbtiDatingResult, MbtiDatingResult } from '@/tests/mbti-dating/data';
import { calculateResult as calculateDrivingPersonalityResult, DrivingPersonalityResult } from '@/tests/driving-personality/data';
import { calculateResult as calculateKaraokeTypeResult, KaraokeTypeResult } from '@/tests/karaoke-type/data';
import { calculateResult as calculateFashionPersonalityResult, FashionPersonalityResult } from '@/tests/fashion-personality/data';
import { calculateResult as calculateFoodTasteResult, FoodTasteResult } from '@/tests/food-taste/data';
import { calculateResult as calculateRoomCleaningResult, RoomCleaningResult } from '@/tests/room-cleaning/data';
import { calculateResult as calculateHobbyRecommendResult, HobbyRecommendResult } from '@/tests/hobby-recommend/data';
import { calculateResult as calculateMorningNightResult, MorningNightResult } from '@/tests/morning-night/data';
import { calculateResult as calculateSeasonPersonalityResult, SeasonPersonalityResult } from '@/tests/season-personality/data';
import { calculateResult as calculateMbtiTravelResult, MbtiTravelResult } from '@/tests/mbti-travel/data';
import { calculateResult as calculateMbtiDrinkingResult, MbtiDrinkingResult } from '@/tests/mbti-drinking/data';
import { calculateResult as calculateFairytaleRoleResult, FairytaleRoleResult } from '@/tests/fairytale-role/data';
import { calculateResult as calculateMagicElementResult, MagicElementResult } from '@/tests/magic-element/data';
import { calculateResult as calculateGameCharacterResult, GameCharacterResult } from '@/tests/game-character/data';
import { calculateResult as calculateSuperPowerResult, SuperPowerResult } from '@/tests/super-power/data';
import { calculateResult as calculateHogwartsHouseResult, HogwartsHouseResult } from '@/tests/hogwarts-house/data';
import { calculateResult as calculateMeetingTypeResult, MeetingTypeResult } from '@/tests/meeting-type/data';
import { calculateResult as calculateMbtiConflictResult, MbtiConflictResult } from '@/tests/mbti-conflict/data';
import { calculateResult as calculateMbtiSpendingResult, MbtiSpendingResult } from '@/tests/mbti-spending/data';
import { calculateResult as calculateAjaePowerResult, AjaePowerResult } from '@/tests/ajae-power/data';
import { calculateResult as calculateHipsterLevelResult, HipsterLevelResult } from '@/tests/hipster-level/data';
import { calculateResult as calculateMondayBluesResult, MondayBluesResult } from '@/tests/monday-blues/data';
import { calculateResult as calculateBossTypeResult, BossTypeResult } from '@/tests/boss-type/data';

// 통합 결과 타입
type TestResult = SoulAnimalResult | ColorResult | MBTIResult | PastLifeResult | IdealTypeResult | LoveLanguageResult | Luck2025Result | BrainTypeResult | StressLevelResult | AttachmentStyleResult | CareerAptitudeResult | WorkStyleResult | IQTestResult | DatingStyleResult | LoveCharmResult | MoneySenseResult | RichMindsetResult | DISCResult | EnneagramResult | EQResult | MentalStrengthResult | BurnoutResult | FocusResult | DarkTriadResult | MentalAgeResult | HiddenTalentResult | CommunicationStyleResult | LeadershipTypeResult | CreativityIndexResult | InnerChildResult | FlexTendencyResult | EmotionRegulationResult | MBTICompatibilityResult | JealousyTypeResult | SelfEsteemResult | VillainHeroResult | FlirtingStyleResult | TPowerResult | SocialBatteryResult | AngerStyleResult | AnxietyLevelResult | ConflictStyleResult | CombatPowerResult | DecisionStyleResult | DrinkingStyleResult | FirstImpressionResult | FriendshipStyleResult | GaslightingCheckResult | HumorTypeResult | IntrovertExtrovertResult | LifeGraphResult | LoveTraumaResult | PeoplePleserResult | PersonalityDualityResult | ProcrastinationResult | SleepTypeResult | SnsPersonalityResult | SpendingTypeResult | TarotTodayResult | ToxicCheckResult | TraumaCheckResult | PushPullResult | BreakupRecoveryResult | CompanyDinnerResult | DramaCharacterResult | PerfectionismResult | EmpathyLevelResult | ExAttachmentResult | ReunionChanceResult | LoveCellResult | CoupleFightResult | BreakupReasonResult | NextLoveReadyResult | LoveMeterResult | CrushSuccessResult | RedFlagDetectResult | ConfessionTimingResult | FriendToLoverResult | MarriageFitResult | CoupleCommResult | DatingPatternResult | HiddenDesireResult | SeductionStyleResult | TrueNatureResult | CheatingRiskResult | ObsessionLevelResult | GenderIdentityResult | YoutuberTypeResult | AttentionSeekerResult | MbtiShadowResult | MbtiStressResult | AlphaGenResult | DigitalNativeResult | MidnightSnackResult | TravelStyleResult | ShoppingTypeResult | PetMatchResult | ZombieSurvivalResult | IslandSurvivalResult | MbtiOfficeResult | MbtiDatingResult | DrivingPersonalityResult | KaraokeTypeResult | FashionPersonalityResult | FoodTasteResult | RoomCleaningResult | HobbyRecommendResult | MorningNightResult | SeasonPersonalityResult | MbtiTravelResult | MbtiDrinkingResult | FairytaleRoleResult | MagicElementResult | GameCharacterResult | SuperPowerResult | HogwartsHouseResult | MeetingTypeResult | MbtiConflictResult | MbtiSpendingResult | AjaePowerResult | HipsterLevelResult | MondayBluesResult | BossTypeResult;

// 타입 가드들
function isColorResult(result: TestResult): result is ColorResult {
  return 'color' in result && 'colorCode' in result;
}

function isMBTIResult(result: TestResult): result is MBTIResult {
  return 'nickname' in result && 'famousPeople' in result && 'career' in result;
}

function isSoulAnimalResult(result: TestResult): result is SoulAnimalResult {
  return 'animal' in result && !('colorCode' in result) && !('career' in result);
}

function isPastLifeResult(result: TestResult): result is PastLifeResult {
  return 'era' in result && 'occupation' in result && 'lesson' in result;
}

function isIdealTypeResult(result: TestResult): result is IdealTypeResult {
  return 'attractedTo' in result && 'turnOffs' in result && 'datingStyle' in result;
}

function isLoveLanguageResult(result: TestResult): result is LoveLanguageResult {
  return 'howToExpress' in result && 'howToReceive' in result && 'inRelationship' in result;
}

function isLuck2025Result(result: TestResult): result is Luck2025Result {
  return 'overallLuck' in result && 'loveLuck' in result && 'luckyMonth' in result;
}

function isBrainTypeResult(result: TestResult): result is BrainTypeResult {
  return 'leftBrainPercent' in result && 'rightBrainPercent' in result && 'suitableJobs' in result;
}

function isStressLevelResult(result: TestResult): result is StressLevelResult {
  return 'level' in result && 'percentage' in result && 'symptoms' in result && 'selfCare' in result;
}

function isAttachmentStyleResult(result: TestResult): result is AttachmentStyleResult {
  return 'inRelationship' in result && 'triggers' in result && 'healingTips' in result;
}

function isCareerAptitudeResult(result: TestResult): result is CareerAptitudeResult {
  return 'field' in result && 'recommendedCareers' in result && 'growthTips' in result;
}

function isWorkStyleResult(result: TestResult): result is WorkStyleResult {
  return 'workEnvironment' in result && 'communicationStyle' in result && 'idealRole' in result;
}

function isIQTestResult(result: TestResult): result is IQTestResult {
  return 'iqScore' in result && 'percentile' in result && 'brainType' in result;
}

function isDatingStyleResult(result: TestResult): result is DatingStyleResult {
  return 'datingTips' in result && 'bestMatch' in result && 'worstMatch' in result && !('attractedTo' in result);
}

function isLoveCharmResult(result: TestResult): result is LoveCharmResult {
  return 'charmPoints' in result && 'charmScore' in result && 'howOthersSeeYou' in result;
}

function isMoneySenseResult(result: TestResult): result is MoneySenseResult {
  return 'spendingHabit' in result && 'savingHabit' in result && 'moneyScore' in result;
}

function isRichMindsetResult(result: TestResult): result is RichMindsetResult {
  return 'mindsetTraits' in result && 'moneyBeliefs' in result && 'bookRecommend' in result;
}

function isDISCResult(result: TestResult): result is DISCResult {
  return 'communicationStyle' in result && 'workStyle' in result && 'stressResponse' in result && 'bestMatch' in result && 'challengeMatch' in result;
}

function isEnneagramResult(result: TestResult): result is EnneagramResult {
  return 'number' in result && 'coreDesire' in result && 'coreFear' in result && 'wing1' in result;
}

function isEQResult(result: TestResult): result is EQResult {
  return 'eqComponents' in result && 'improvements' in result && 'careerFit' in result;
}

function isMentalStrengthResult(result: TestResult): result is MentalStrengthResult {
  return 'copingStrategies' in result && 'growthTips' in result && 'dailyHabits' in result && !('distractions' in result);
}

function isBurnoutResult(result: TestResult): result is BurnoutResult {
  return 'physicalSigns' in result && 'emotionalSigns' in result && 'recoveryTips' in result && 'urgency' in result;
}

function isFocusResult(result: TestResult): result is FocusResult {
  return 'distractions' in result && 'improvementTips' in result && 'toolsRecommend' in result && 'idealWorkStyle' in result;
}

function isDarkTriadResult(result: TestResult): result is DarkTriadResult {
  return 'narcissismScore' in result && 'machiavellianismScore' in result && 'psychopathyScore' in result;
}

function isMentalAgeResult(result: TestResult): result is MentalAgeResult {
  return 'mentalAge' in result && 'ageGroup' in result && 'improvements' in result;
}

function isHiddenTalentResult(result: TestResult): result is HiddenTalentResult {
  return 'talentArea' in result && 'hiddenPotential' in result && 'developmentTips' in result;
}

function isCommunicationStyleResult(result: TestResult): result is CommunicationStyleResult {
  return 'communicationTips' in result && 'workplaceTip' in result && 'relationshipTip' in result;
}

function isLeadershipTypeResult(result: TestResult): result is LeadershipTypeResult {
  return 'leadershipTips' in result && 'idealTeam' in result && 'growthAreas' in result;
}

function isCreativityIndexResult(result: TestResult): result is CreativityIndexResult {
  return 'creativityTips' in result && 'recommendedActivities' in result && 'developmentAreas' in result;
}

function isInnerChildResult(result: TestResult): result is InnerChildResult {
  return 'woundedAspects' in result && 'affirmations' in result && 'innerNeed' in result;
}

function isFlexTendencyResult(result: TestResult): result is FlexTendencyResult {
  return 'flexScore' in result && 'spendingStyle' in result && 'financeTips' in result;
}

function isEmotionRegulationResult(result: TestResult): result is EmotionRegulationResult {
  return 'dailyPractices' in result && 'level' in result && 'improvementTips' in result && !('copingStrategies' in result);
}

function isMBTICompatibilityResult(result: TestResult): result is MBTICompatibilityResult {
  return 'compatibilityScore' in result && 'myType' in result && 'partnerType' in result;
}

function isJealousyTypeResult(result: TestResult): result is JealousyTypeResult {
  return 'jealousyScore' in result && 'triggers' in result && 'copingTips' in result;
}

function isSelfEsteemResult(result: TestResult): result is SelfEsteemResult {
  return 'growthTips' in result && 'dailyAffirmations' in result && 'recommendedActions' in result;
}

function isVillainHeroResult(result: TestResult): result is VillainHeroResult {
  return 'heroScore' in result && 'villainScore' in result && 'alignment' in result;
}

function isFlirtingStyleResult(result: TestResult): result is FlirtingStyleResult {
  return 'flirtingTips' in result && 'signalToLookFor' in result && 'bestMatch' in result && !('datingTips' in result);
}

function isTPowerResult(result: TestResult): result is TPowerResult {
  return 'powerScore' in result && 'powerLevel' in result && 'rank' in result;
}

function isSocialBatteryResult(result: TestResult): result is SocialBatteryResult {
  return 'batteryLevel' in result && 'rechargeMethod' in result && 'idealSocialLife' in result;
}

// 22개 신규 테스트 타입 가드
function isAngerStyleResult(result: TestResult): result is AngerStyleResult {
  return 'angerScore' in result && 'triggers' in result && 'healthWarning' in result;
}

function isAnxietyLevelResult(result: TestResult): result is AnxietyLevelResult {
  return 'physicalSymptoms' in result && 'mentalSymptoms' in result && 'professionalHelp' in result;
}

function isConflictStyleResult(result: TestResult): result is ConflictStyleResult {
  return 'whenToUse' in result && 'whenToAvoid' in result && 'improvementTips' in result;
}

function isCombatPowerResult(result: TestResult): result is CombatPowerResult {
  return 'powerLevel' in result && 'physicalStats' in result && 'signature' in result;
}

function isDecisionStyleResult(result: TestResult): result is DecisionStyleResult {
  return 'decisionSpeed' in result && 'bestFor' in result && 'worstFor' in result;
}

function isDrinkingStyleResult(result: TestResult): result is DrinkingStyleResult {
  return 'alcoholTolerance' in result && 'signatureDrink' in result && 'morningAfter' in result;
}

function isFirstImpressionResult(result: TestResult): result is FirstImpressionResult {
  return 'approachability' in result && 'firstWords' in result && 'misunderstandings' in result;
}

function isFriendshipStyleResult(result: TestResult): result is FriendshipStyleResult {
  return 'loyaltyScore' in result && 'bestFriendType' in result && 'worstFriendType' in result;
}

function isGaslightingCheckResult(result: TestResult): result is GaslightingCheckResult {
  return 'riskScore' in result && 'signs' in result && 'importantMessage' in result;
}

function isHumorTypeResult(result: TestResult): result is HumorTypeResult {
  return 'funnyScore' in result && 'bestAudience' in result && 'funnyExamples' in result;
}

function isIntrovertExtrovertResult(result: TestResult): result is IntrovertExtrovertResult {
  return 'energySource' in result && 'energyDrain' in result && 'careerSuggestions' in result;
}

function isLifeGraphResult(result: TestResult): result is LifeGraphResult {
  return 'graphPattern' in result && 'currentPhase' in result && 'futureOutlook' in result;
}

function isLoveTraumaResult(result: TestResult): result is LoveTraumaResult {
  return 'traumaScore' in result && 'rootCauses' in result && 'healingSteps' in result;
}

function isPeoplePleserResult(result: TestResult): result is PeoplePleserResult {
  return 'pleaseScore' in result && 'boundaryTips' in result && 'recoverySteps' in result;
}

function isPersonalityDualityResult(result: TestResult): result is PersonalityDualityResult {
  return 'dualityScore' in result && 'publicSelf' in result && 'privateSelf' in result;
}

function isProcrastinationResult(result: TestResult): result is ProcrastinationResult {
  return 'procrastinationScore' in result && 'tools' in result && 'motivation' in result;
}

function isSleepTypeResult(result: TestResult): result is SleepTypeResult {
  return 'chronotype' in result && 'peakHours' in result && 'idealSchedule' in result;
}

function isSnsPersonalityResult(result: TestResult): result is SnsPersonalityResult {
  return 'snsScore' in result && 'postingStyle' in result && 'detoxTips' in result;
}

function isSpendingTypeResult(result: TestResult): result is SpendingTypeResult {
  return 'savingScore' in result && 'moneyHabits' in result && 'budgetAdvice' in result;
}

function isTarotTodayResult(result: TestResult): result is TarotTodayResult {
  return 'card' in result && 'todayMessage' in result && 'affirmation' in result;
}

function isToxicCheckResult(result: TestResult): result is ToxicCheckResult {
  return 'toxicScore' in result && 'redFlags' in result && 'boundaryTips' in result;
}

function isTraumaCheckResult(result: TestResult): result is TraumaCheckResult {
  return 'crisis' in result && 'symptoms' in result && 'professionalHelp' in result && !('mentalSymptoms' in result);
}

function isPushPullResult(result: TestResult): result is PushPullResult {
  return 'idealPartner' in result && 'warning' in result && 'loveAdvice' in result;
}

function isBreakupRecoveryResult(result: TestResult): result is BreakupRecoveryResult {
  return 'stage' in result && 'emotionalState' in result && 'healingTips' in result && 'doList' in result && 'dontList' in result;
}

function isCompanyDinnerResult(result: TestResult): result is CompanyDinnerResult {
  return 'dinnerStyle' in result && 'survivalTips' in result && 'idealRole' in result;
}

function isDramaCharacterResult(result: TestResult): result is DramaCharacterResult {
  return 'genre' in result && 'catchphrase' in result && 'plotTwist' in result && 'bestScenes' in result;
}

function isPerfectionismResult(result: TestResult): result is PerfectionismResult {
  return 'level' in result && 'stressPoints' in result && 'copingTips' in result && 'atWork' in result;
}

function isEmpathyLevelResult(result: TestResult): result is EmpathyLevelResult {
  return 'level' in result && 'challenges' in result && 'inRelationships' in result && !('stressPoints' in result);
}

function isExAttachmentResult(result: TestResult): result is ExAttachmentResult {
  return 'symptoms' in result && 'honestTruth' in result && 'timeline' in result && 'encouragement' in result;
}

function isReunionChanceResult(result: TestResult): result is ReunionChanceResult {
  return 'factors' in result && 'analysis' in result && 'realityCheck' in result && 'whatToConsider' in result;
}

function isLoveCellResult(result: TestResult): result is LoveCellResult {
  return 'status' in result && 'loveReadiness' in result && 'signalSensitivity' in result && 'idealTiming' in result;
}

function isCoupleFightResult(result: TestResult): result is CoupleFightResult {
  return 'fightStyle' in result && 'duringFight' in result && 'afterFight' in result && 'partnerFeels' in result;
}

function isBreakupReasonResult(result: TestResult): result is BreakupReasonResult {
  return 'coreIssue' in result && 'warningSignals' in result && 'yourPattern' in result && 'partnerPattern' in result;
}

function isNextLoveReadyResult(result: TestResult): result is NextLoveReadyResult {
  return 'currentState' in result && 'readySignals' in result && 'notReadySignals' in result && 'todoList' in result && 'avoidList' in result;
}

function isLoveMeterResult(result: TestResult): result is LoveMeterResult {
  return 'temperature' in result && 'goodSigns' in result && 'warningSigns' in result && 'dateIdeas' in result;
}

function isCrushSuccessResult(result: TestResult): result is CrushSuccessResult {
  return 'verdict' in result && 'positiveSignals' in result && 'warningSignals' in result && 'actionPlan' in result;
}

function isRedFlagDetectResult(result: TestResult): result is RedFlagDetectResult {
  return 'riskLevel' in result && 'redFlags' in result && 'greenFlags' in result && 'watchOut' in result;
}

function isConfessionTimingResult(result: TestResult): result is ConfessionTimingResult {
  return 'timing' in result && 'confessionTips' in result && 'whatToPrepare' in result && 'alternativeActions' in result;
}

function isFriendToLoverResult(result: TestResult): result is FriendToLoverResult {
  return 'verdict' in result && 'positiveSignals' in result && 'risks' in result && 'ifYouConfess' in result;
}

function isMarriageFitResult(result: TestResult): result is MarriageFitResult {
  return 'compatibility' in result && 'discussTopics' in result && 'beforeMarriage' in result;
}

function isCoupleCommResult(result: TestResult): result is CoupleCommResult {
  return 'grade' in result && 'communicationStyle' in result && 'dailyPractice' in result && 'conflictTips' in result;
}

function isDatingPatternResult(result: TestResult): result is DatingPatternResult {
  return 'patternExplanation' in result && 'breakupPattern' in result && 'rootCause' in result && 'idealPartner' in result;
}

function isHiddenDesireResult(result: TestResult): result is HiddenDesireResult {
  return 'coreDesire' in result && 'unconsciousBehaviors' in result && 'shadowSide' in result && 'fulfillmentTips' in result;
}

function isSeductionStyleResult(result: TestResult): result is SeductionStyleResult {
  return 'coreCharm' in result && 'seductionMethods' in result && 'bestTarget' in result && 'worstTarget' in result;
}

function isTrueNatureResult(result: TestResult): result is TrueNatureResult {
  return 'hiddenSelf' in result && 'publicMask' in result && 'triggers' in result && 'darkSide' in result;
}

function isCheatingRiskResult(result: TestResult): result is CheatingRiskResult {
  return 'percentage' in result && 'riskFactors' in result && 'loyaltyFactors' in result && 'selfAdvice' in result && !('rootCauses' in result);
}

function isObsessionLevelResult(result: TestResult): result is ObsessionLevelResult {
  return 'level' in result && 'inRelationship' in result && 'healthyTips' in result && 'partnerAdvice' in result && 'selfCareAdvice' in result;
}

function isGenderIdentityResult(result: TestResult): result is GenderIdentityResult {
  return 'expression' in result && 'comfort' in result && 'socialTips' in result && 'selfAcceptance' in result && 'resources' in result;
}

function isYoutuberTypeResult(result: TestResult): result is YoutuberTypeResult {
  return 'channelName' in result && 'contentStyle' in result && 'equipment' in result && 'uploadFrequency' in result && 'expectedSubscribers' in result;
}

function isAttentionSeekerResult(result: TestResult): result is AttentionSeekerResult {
  return 'level' in result && 'behaviors' in result && 'socialMedia' in result && 'innerNeed' in result && 'famousExample' in result;
}

function isMbtiShadowResult(result: TestResult): result is MbtiShadowResult {
  return 'mainMbti' in result && 'shadowMbti' in result && 'shadowTraits' in result && 'whenShadowAppears' in result;
}

function isMbtiStressResult(result: TestResult): result is MbtiStressResult {
  return 'normalState' in result && 'stressState' in result && 'stressTriggers' in result && 'recoveryMethods' in result;
}

function isAlphaGenResult(result: TestResult): result is AlphaGenResult {
  return 'alphaKnowledge' in result && 'generationGap' in result && 'alphaTerms' in result;
}

function isDigitalNativeResult(result: TestResult): result is DigitalNativeResult {
  return 'digitalSkills' in result && 'recommendedTools' in result && 'futureReadiness' in result;
}

function isMidnightSnackResult(result: TestResult): result is MidnightSnackResult {
  return 'favoriteSnacks' in result && 'snackingStyle' in result && 'calorieWarning' in result && 'hashtags' in result;
}

function isTravelStyleResult(result: TestResult): result is TravelStyleResult {
  return 'travelTraits' in result && 'perfectTrip' in result && 'destinations' in result && 'travelPartner' in result;
}

function isShoppingTypeResult(result: TestResult): result is ShoppingTypeResult {
  return 'shoppingStyle' in result && 'bestFor' in result && 'dangerZone' in result && 'perfectStore' in result;
}

function isPetMatchResult(result: TestResult): result is PetMatchResult {
  return 'petName' in result && 'careLevel' in result && 'whyMatch' in result && 'alternativePets' in result;
}

function isZombieSurvivalResult(result: TestResult): result is ZombieSurvivalResult {
  return 'survivalRate' in result && 'survivalStrategy' in result && 'bestRole' in result && 'deathScenario' in result;
}

function isIslandSurvivalResult(result: TestResult): result is IslandSurvivalResult {
  return 'survivalDays' in result && 'firstPriority' in result && 'rescueProbability' in result && 'famousComparison' in result;
}

function isMbtiOfficeResult(result: TestResult): result is MbtiOfficeResult {
  return 'workStyle' in result && 'officeRole' in result && 'stressSignal' in result;
}

function isMbtiDatingResult(result: TestResult): result is MbtiDatingResult {
  return 'loveStyle' in result && 'datingTraits' in result && 'communicationStyle' in result && 'conflictStyle' in result;
}

function isDrivingPersonalityResult(result: TestResult): result is DrivingPersonalityResult {
  return 'drivingStyle' in result && 'roadRageLevel' in result && 'musicStyle' in result;
}

function isKaraokeTypeResult(result: TestResult): result is KaraokeTypeResult {
  return 'songStyle' in result && 'recommendedSongs' in result && 'withFriends' in result && 'signature' in result;
}

function isFashionPersonalityResult(result: TestResult): result is FashionPersonalityResult {
  return 'styleKeywords' in result && 'wardrobe' in result && 'colorPalette' in result && 'shoppingStyle' in result;
}

function isFoodTasteResult(result: TestResult): result is FoodTasteResult {
  return 'foodPreferences' in result && 'recommendedFoods' in result && 'avoidFoods' in result && 'eatingStyle' in result;
}

function isRoomCleaningResult(result: TestResult): result is RoomCleaningResult {
  return 'roomStyle' in result && 'cleaningTips' in result && 'idealRoom' in result;
}

function isHobbyRecommendResult(result: TestResult): result is HobbyRecommendResult {
  return 'recommendedHobbies' in result && 'whyMatch' in result && 'startTips' in result && 'difficulty' in result;
}

function isMorningNightResult(result: TestResult): result is MorningNightResult {
  return 'chronotype' in result && 'peakHours' in result && 'idealSchedule' in result;
}

function isSeasonPersonalityResult(result: TestResult): result is SeasonPersonalityResult {
  return 'season' in result && 'colorPalette' in result && 'bestActivities' in result && 'loveStyle' in result && 'advice' in result;
}

function isMbtiTravelResult(result: TestResult): result is MbtiTravelResult {
  return 'travelStyle' in result && 'idealDestinations' in result && 'travelTips' in result && 'travelMotto' in result;
}

function isMbtiDrinkingResult(result: TestResult): result is MbtiDrinkingResult {
  return 'drinkingStyle' in result && 'signatureDrink' in result && 'drunkBehavior' in result && 'favoritePlace' in result;
}

function isFairytaleRoleResult(result: TestResult): result is FairytaleRoleResult {
  return 'fairytale' in result && 'lifeLesson' in result && 'famousCharacters' in result && 'loveStyle' in result;
}

function isMagicElementResult(result: TestResult): result is MagicElementResult {
  return 'element' in result && 'magicPowers' in result && 'compatibleElements' in result && 'lifeAdvice' in result;
}

function isGameCharacterResult(result: TestResult): result is GameCharacterResult {
  return 'className' in result && 'skills' in result && 'playStyle' in result && 'teamRole' in result;
}

function isSuperPowerResult(result: TestResult): result is SuperPowerResult {
  return 'power' in result && 'abilities' in result && 'famousHeroes' in result && 'useCase' in result;
}

function isHogwartsHouseResult(result: TestResult): result is HogwartsHouseResult {
  return 'house' in result && 'founder' in result && 'commonRoom' in result && 'famousMembers' in result && 'ghostName' in result;
}

function isMeetingTypeResult(result: TestResult): result is MeetingTypeResult {
  return 'meetingStyle' in result && 'tips' in result && 'idealRole' in result && 'compatibility' in result;
}

function isMbtiConflictResult(result: TestResult): result is MbtiConflictResult {
  return 'conflictStyle' in result && 'duringConflict' in result && 'afterConflict' in result && 'bestMatch' in result;
}

function isMbtiSpendingResult(result: TestResult): result is MbtiSpendingResult {
  return 'spendingStyle' in result && 'spendingHabits' in result && 'impulseBuy' in result && 'cardStatement' in result;
}

function isAjaePowerResult(result: TestResult): result is AjaePowerResult {
  return 'level' in result && 'famousLines' in result && 'musicTaste' in result && 'mentalAge' in result;
}

function isHipsterLevelResult(result: TestResult): result is HipsterLevelResult {
  return 'level' in result && 'lifestyle' in result && 'favoriteThings' in result && 'hangoutSpots' in result;
}

function isMondayBluesResult(result: TestResult): result is MondayBluesResult {
  return 'level' in result && 'sundayNight' in result && 'mondayMorning' in result && 'recommendation' in result;
}

function isBossTypeResult(result: TestResult): result is BossTypeResult {
  return 'managementStyle' in result && 'teamReaction' in result && 'feedbackStyle' in result && 'famousBoss' in result;
}

export default function TestResultPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const slug = params.slug as string;
  const test = getTestBySlug(slug);

  const [result, setResult] = useState<TestResult | null>(null);
  const [showInterstitial, setShowInterstitial] = useState(true);
  const [showResult, setShowResult] = useState(false);

  // 인터스티셜 광고 닫기 처리
  const handleAdClose = () => {
    setShowInterstitial(false);
    setShowResult(true);
  };

  useEffect(() => {
    const answersParam = searchParams.get('answers');
    if (!answersParam) return;

    const answers = answersParam.split(',').map(Number);

    // 테스트 유형에 따라 다른 계산 로직 사용
    if (slug === 'soul-animal') {
      const calculatedResult = calculateSoulAnimalResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'color-personality') {
      const calculatedResult = calculateColorResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'mbti-basic') {
      const calculatedResult = calculateMBTIResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'past-life') {
      const calculatedResult = calculatePastLifeResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'ideal-type') {
      const calculatedResult = calculateIdealTypeResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'love-language') {
      const calculatedResult = calculateLoveLanguageResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'luck-2025') {
      const calculatedResult = calculateLuck2025Result(answers);
      setResult(calculatedResult);
    } else if (slug === 'brain-type') {
      const calculatedResult = calculateBrainTypeResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'stress-level') {
      const calculatedResult = calculateStressLevelResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'attachment-style') {
      const calculatedResult = calculateAttachmentStyleResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'career-aptitude') {
      const calculatedResult = calculateCareerAptitudeResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'work-style') {
      const calculatedResult = calculateWorkStyleResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'iq-test') {
      const calculatedResult = calculateIQTestResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'dating-style') {
      const calculatedResult = calculateDatingStyleResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'love-charm') {
      const calculatedResult = calculateLoveCharmResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'money-sense') {
      const calculatedResult = calculateMoneySenseResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'rich-mindset') {
      const calculatedResult = calculateRichMindsetResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'disc-personality') {
      const calculatedResult = calculateDISCResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'enneagram') {
      const calculatedResult = calculateEnneagramResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'eq-test') {
      const calculatedResult = calculateEQResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'mental-strength') {
      const calculatedResult = calculateMentalStrengthResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'burnout-level') {
      const calculatedResult = calculateBurnoutResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'focus-test') {
      const calculatedResult = calculateFocusResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'dark-triad') {
      const calculatedResult = calculateDarkTriadResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'mental-age') {
      const calculatedResult = calculateMentalAgeResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'hidden-talent') {
      const calculatedResult = calculateHiddenTalentResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'communication-style') {
      const calculatedResult = calculateCommunicationStyleResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'leadership-type') {
      const calculatedResult = calculateLeadershipTypeResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'creativity-index') {
      const calculatedResult = calculateCreativityIndexResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'inner-child') {
      const calculatedResult = calculateInnerChildResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'flex-tendency') {
      const calculatedResult = calculateFlexTendencyResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'emotion-regulation') {
      const calculatedResult = calculateEmotionRegulationResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'mbti-compatibility') {
      const calculatedResult = calculateMBTICompatibilityResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'jealousy-type') {
      const calculatedResult = calculateJealousyTypeResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'self-esteem') {
      const calculatedResult = calculateSelfEsteemResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'villain-hero') {
      const calculatedResult = calculateVillainHeroResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'flirting-style') {
      const calculatedResult = calculateFlirtingStyleResult(answers);
      setResult(calculatedResult);
    } else if (slug === 't-power') {
      const calculatedResult = calculateTPowerResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'social-battery') {
      const calculatedResult = calculateSocialBatteryResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'anger-style') {
      const calculatedResult = calculateAngerStyleResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'anxiety-level') {
      const calculatedResult = calculateAnxietyLevelResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'conflict-style') {
      const calculatedResult = calculateConflictStyleResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'combat-power') {
      const calculatedResult = calculateCombatPowerResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'decision-style') {
      const calculatedResult = calculateDecisionStyleResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'drinking-style') {
      const calculatedResult = calculateDrinkingStyleResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'first-impression') {
      const calculatedResult = calculateFirstImpressionResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'friendship-style') {
      const calculatedResult = calculateFriendshipStyleResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'gaslighting-check') {
      const calculatedResult = calculateGaslightingCheckResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'humor-type') {
      const calculatedResult = calculateHumorTypeResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'introvert-extrovert') {
      const calculatedResult = calculateIntrovertExtrovertResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'life-graph') {
      const calculatedResult = calculateLifeGraphResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'love-trauma') {
      const calculatedResult = calculateLoveTraumaResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'people-pleaser') {
      const calculatedResult = calculatePeoplePleserResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'personality-duality') {
      const calculatedResult = calculatePersonalityDualityResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'procrastination') {
      const calculatedResult = calculateProcrastinationResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'sleep-type') {
      const calculatedResult = calculateSleepTypeResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'sns-personality') {
      const calculatedResult = calculateSnsPersonalityResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'spending-type') {
      const calculatedResult = calculateSpendingTypeResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'tarot-today') {
      const calculatedResult = calculateTarotTodayResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'toxic-check') {
      const calculatedResult = calculateToxicCheckResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'trauma-check') {
      const calculatedResult = calculateTraumaCheckResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'push-pull') {
      const calculatedResult = calculatePushPullResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'breakup-recovery') {
      const calculatedResult = calculateBreakupRecoveryResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'company-dinner') {
      const calculatedResult = calculateCompanyDinnerResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'drama-character') {
      const calculatedResult = calculateDramaCharacterResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'perfectionism') {
      const calculatedResult = calculatePerfectionismResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'empathy-level') {
      const calculatedResult = calculateEmpathyLevelResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'ex-attachment') {
      const calculatedResult = calculateExAttachmentResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'reunion-chance') {
      const calculatedResult = calculateReunionChanceResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'love-cell') {
      const calculatedResult = calculateLoveCellResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'couple-fight') {
      const calculatedResult = calculateCoupleFightResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'breakup-reason') {
      const calculatedResult = calculateBreakupReasonResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'next-love-ready') {
      const calculatedResult = calculateNextLoveReadyResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'love-meter') {
      const calculatedResult = calculateLoveMeterResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'crush-success') {
      const calculatedResult = calculateCrushSuccessResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'red-flag-detect') {
      const calculatedResult = calculateRedFlagDetectResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'confession-timing') {
      const calculatedResult = calculateConfessionTimingResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'friend-to-lover') {
      const calculatedResult = calculateFriendToLoverResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'marriage-fit') {
      const calculatedResult = calculateMarriageFitResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'couple-comm') {
      const calculatedResult = calculateCoupleCommResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'dating-pattern') {
      const calculatedResult = calculateDatingPatternResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'hidden-desire') {
      const calculatedResult = calculateHiddenDesireResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'seduction-style') {
      const calculatedResult = calculateSeductionStyleResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'true-nature') {
      const calculatedResult = calculateTrueNatureResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'cheating-risk') {
      const calculatedResult = calculateCheatingRiskResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'obsession-level') {
      const calculatedResult = calculateObsessionLevelResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'gender-identity') {
      const calculatedResult = calculateGenderIdentityResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'youtuber-type') {
      const calculatedResult = calculateYoutuberTypeResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'attention-seeker') {
      const calculatedResult = calculateAttentionSeekerResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'mbti-shadow') {
      const calculatedResult = calculateMbtiShadowResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'mbti-stress') {
      const calculatedResult = calculateMbtiStressResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'alpha-gen') {
      const calculatedResult = calculateAlphaGenResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'digital-native') {
      const calculatedResult = calculateDigitalNativeResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'midnight-snack') {
      const calculatedResult = calculateMidnightSnackResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'travel-style') {
      const calculatedResult = calculateTravelStyleResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'shopping-type') {
      const calculatedResult = calculateShoppingTypeResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'pet-match') {
      const calculatedResult = calculatePetMatchResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'zombie-survival') {
      const calculatedResult = calculateZombieSurvivalResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'island-survival') {
      const calculatedResult = calculateIslandSurvivalResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'mbti-office') {
      const calculatedResult = calculateMbtiOfficeResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'mbti-dating') {
      const calculatedResult = calculateMbtiDatingResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'driving-personality') {
      const calculatedResult = calculateDrivingPersonalityResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'karaoke-type') {
      const calculatedResult = calculateKaraokeTypeResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'fashion-personality') {
      const calculatedResult = calculateFashionPersonalityResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'food-taste') {
      const calculatedResult = calculateFoodTasteResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'room-cleaning') {
      const calculatedResult = calculateRoomCleaningResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'hobby-recommend') {
      const calculatedResult = calculateHobbyRecommendResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'morning-night') {
      const calculatedResult = calculateMorningNightResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'season-personality') {
      const calculatedResult = calculateSeasonPersonalityResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'mbti-travel') {
      const calculatedResult = calculateMbtiTravelResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'mbti-drinking') {
      const calculatedResult = calculateMbtiDrinkingResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'fairytale-role') {
      const calculatedResult = calculateFairytaleRoleResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'magic-element') {
      const calculatedResult = calculateMagicElementResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'game-character') {
      const calculatedResult = calculateGameCharacterResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'super-power') {
      const calculatedResult = calculateSuperPowerResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'hogwarts-house') {
      const calculatedResult = calculateHogwartsHouseResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'meeting-type') {
      const calculatedResult = calculateMeetingTypeResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'mbti-conflict') {
      const calculatedResult = calculateMbtiConflictResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'mbti-spending') {
      const calculatedResult = calculateMbtiSpendingResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'ajae-power') {
      const calculatedResult = calculateAjaePowerResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'hipster-level') {
      const calculatedResult = calculateHipsterLevelResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'monday-blues') {
      const calculatedResult = calculateMondayBluesResult(answers);
      setResult(calculatedResult);
    } else if (slug === 'boss-type') {
      const calculatedResult = calculateBossTypeResult(answers);
      setResult(calculatedResult);
    }

    // 세션 스토리지 정리
    sessionStorage.removeItem(`test-${slug}-answers`);

    // 참여자 수 증가 (localStorage 기반)
    const key = `test-${slug}-participated`;
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, 'true');
    }
  }, [searchParams, slug]);

  if (!test || !result) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">결과를 불러올 수 없습니다</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">테스트를 다시 진행해주세요.</p>
        <Link
          href={`/test/${slug}`}
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors inline-block"
        >
          테스트 다시하기
        </Link>
      </div>
    );
  }

  // 테스트 유형에 따른 텍스트 설정
  const isColor = isColorResult(result);
  const isMBTI = isMBTIResult(result);
  const isSoulAnimal = isSoulAnimalResult(result);
  const isPastLife = isPastLifeResult(result);
  const isIdealType = isIdealTypeResult(result);
  const isLoveLanguage = isLoveLanguageResult(result);
  const isLuck2025 = isLuck2025Result(result);
  const isBrainType = isBrainTypeResult(result);
  const isStressLevel = isStressLevelResult(result);
  const isAttachmentStyle = isAttachmentStyleResult(result);
  const isCareerAptitude = isCareerAptitudeResult(result);
  const isWorkStyle = isWorkStyleResult(result);
  const isIQTest = isIQTestResult(result);
  const isDatingStyle = isDatingStyleResult(result);
  const isLoveCharm = isLoveCharmResult(result);
  const isMoneySense = isMoneySenseResult(result);
  const isRichMindset = isRichMindsetResult(result);
  const isDISC = isDISCResult(result);
  const isEnneagram = isEnneagramResult(result);
  const isEQ = isEQResult(result);
  const isMentalStrength = isMentalStrengthResult(result);
  const isBurnout = isBurnoutResult(result);
  const isFocus = isFocusResult(result);
  const isDarkTriad = isDarkTriadResult(result);
  const isMentalAge = isMentalAgeResult(result);
  const isHiddenTalent = isHiddenTalentResult(result);
  const isCommunicationStyle = isCommunicationStyleResult(result);
  const isLeadershipType = isLeadershipTypeResult(result);
  const isCreativityIndex = isCreativityIndexResult(result);
  const isInnerChild = isInnerChildResult(result);
  const isFlexTendency = isFlexTendencyResult(result);
  const isEmotionRegulation = isEmotionRegulationResult(result);
  const isMBTICompatibility = isMBTICompatibilityResult(result);
  const isJealousyType = isJealousyTypeResult(result);
  const isSelfEsteem = isSelfEsteemResult(result);
  const isVillainHero = isVillainHeroResult(result);
  const isFlirtingStyle = isFlirtingStyleResult(result);
  const isTPower = isTPowerResult(result);
  const isSocialBattery = isSocialBatteryResult(result);
  
  // 22개 신규 테스트 타입 체크
  const isAngerStyle = isAngerStyleResult(result);
  const isAnxietyLevel = isAnxietyLevelResult(result);
  const isConflictStyle = isConflictStyleResult(result);
  const isCombatPower = isCombatPowerResult(result);
  const isDecisionStyle = isDecisionStyleResult(result);
  const isDrinkingStyle = isDrinkingStyleResult(result);
  const isFirstImpression = isFirstImpressionResult(result);
  const isFriendshipStyle = isFriendshipStyleResult(result);
  const isGaslightingCheck = isGaslightingCheckResult(result);
  const isHumorType = isHumorTypeResult(result);
  const isIntrovertExtrovert = isIntrovertExtrovertResult(result);
  const isLifeGraph = isLifeGraphResult(result);
  const isLoveTrauma = isLoveTraumaResult(result);
  const isPeoplePleser = isPeoplePleserResult(result);
  const isPersonalityDuality = isPersonalityDualityResult(result);
  const isProcrastination = isProcrastinationResult(result);
  const isSleepType = isSleepTypeResult(result);
  const isSnsPersonality = isSnsPersonalityResult(result);
  const isSpendingType = isSpendingTypeResult(result);
  const isTarotToday = isTarotTodayResult(result);
  const isToxicCheck = isToxicCheckResult(result);
  const isTraumaCheck = isTraumaCheckResult(result);
  const isPushPull = isPushPullResult(result);
  const isBreakupRecovery = isBreakupRecoveryResult(result);
  const isCompanyDinner = isCompanyDinnerResult(result);
  const isDramaCharacter = isDramaCharacterResult(result);
  const isPerfectionism = isPerfectionismResult(result);
  const isEmpathyLevel = isEmpathyLevelResult(result);
  const isExAttachment = isExAttachmentResult(result);
  const isReunionChance = isReunionChanceResult(result);
  const isLoveCell = isLoveCellResult(result);
  const isCoupleFight = isCoupleFightResult(result);
  const isBreakupReason = isBreakupReasonResult(result);
  const isNextLoveReady = isNextLoveReadyResult(result);
  const isLoveMeter = isLoveMeterResult(result);
  const isCrushSuccess = isCrushSuccessResult(result);
  const isRedFlagDetect = isRedFlagDetectResult(result);
  const isConfessionTiming = isConfessionTimingResult(result);
  const isFriendToLover = isFriendToLoverResult(result);
  const isMarriageFit = isMarriageFitResult(result);
  const isCoupleComm = isCoupleCommResult(result);
  const isDatingPattern = isDatingPatternResult(result);
  const isHiddenDesire = isHiddenDesireResult(result);
  const isSeductionStyle = isSeductionStyleResult(result);
  const isTrueNature = isTrueNatureResult(result);
  const isCheatingRisk = isCheatingRiskResult(result);
  const isObsessionLevel = isObsessionLevelResult(result);
  const isGenderIdentity = isGenderIdentityResult(result);
  const isYoutuberType = isYoutuberTypeResult(result);
  const isAttentionSeeker = isAttentionSeekerResult(result);
  const isMbtiShadow = isMbtiShadowResult(result);
  const isMbtiStress = isMbtiStressResult(result);
  const isAlphaGen = isAlphaGenResult(result);
  const isDigitalNative = isDigitalNativeResult(result);
  const isMidnightSnack = isMidnightSnackResult(result);
  const isTravelStyle = isTravelStyleResult(result);
  const isShoppingType = isShoppingTypeResult(result);
  const isPetMatch = isPetMatchResult(result);
  const isZombieSurvival = isZombieSurvivalResult(result);
  const isIslandSurvival = isIslandSurvivalResult(result);
  const isMbtiOffice = isMbtiOfficeResult(result);
  const isMbtiDating = isMbtiDatingResult(result);
  const isDrivingPersonality = isDrivingPersonalityResult(result);
  const isKaraokeType = isKaraokeTypeResult(result);
  const isFashionPersonality = isFashionPersonalityResult(result);
  const isFoodTaste = isFoodTasteResult(result);
  const isRoomCleaning = isRoomCleaningResult(result);
  const isHobbyRecommend = isHobbyRecommendResult(result);
  const isMorningNight = isMorningNightResult(result);
  const isSeasonPersonality = isSeasonPersonalityResult(result);

  let heroTitle = '';
  let heroSubtitle = '';
  let shareText = '';

  if (isColor) {
    heroTitle = '당신의 성격 컬러는';
    heroSubtitle = result.color;
    shareText = `나의 성격 컬러는 ${result.emoji} ${result.color}! - ${result.title}`;
  } else if (isMBTI) {
    heroTitle = '당신의 MBTI는';
    heroSubtitle = result.nickname;
    shareText = `나의 MBTI는 ${result.emoji} ${result.type}! - ${result.title}`;
  } else if (isSoulAnimal) {
    heroTitle = '당신의 소울 애니멀은';
    heroSubtitle = result.animal;
    shareText = `나의 소울 애니멀은 ${result.emoji} ${result.animal}! - ${result.title}`;
  } else if (isPastLife) {
    heroTitle = '당신의 전생은';
    heroSubtitle = result.era;
    shareText = `나의 전생은 ${result.emoji} ${result.title}! - ${result.occupation}`;
  } else if (isIdealType) {
    heroTitle = '당신의 이상형은';
    heroSubtitle = '연애 스타일';
    shareText = `나의 이상형은 ${result.emoji} ${result.title}!`;
  } else if (isLoveLanguage) {
    heroTitle = '당신의 사랑의 언어는';
    heroSubtitle = result.subtitle;
    shareText = `나의 사랑의 언어는 ${result.emoji} ${result.title}!`;
  } else if (isLuck2025) {
    heroTitle = '2025년 당신의 운세는';
    heroSubtitle = `총운 ${result.overallLuck}점`;
    shareText = `나의 2025년 운세는 ${result.emoji} ${result.title}!`;
  } else if (isBrainType) {
    heroTitle = '당신의 뇌 유형은';
    heroSubtitle = `좌뇌 ${result.leftBrainPercent}% / 우뇌 ${result.rightBrainPercent}%`;
    shareText = `나의 뇌 유형은 ${result.emoji} ${result.title}!`;
  } else if (isStressLevel) {
    heroTitle = '당신의 스트레스 지수는';
    heroSubtitle = `${result.percentage}%`;
    shareText = `나의 스트레스 상태는 ${result.emoji} ${result.title}!`;
  } else if (isAttachmentStyle) {
    heroTitle = '당신의 애착 유형은';
    heroSubtitle = result.subtitle;
    shareText = `나의 애착 유형은 ${result.emoji} ${result.title}!`;
  } else if (isCareerAptitude) {
    heroTitle = '당신의 직업 적성은';
    heroSubtitle = result.field;
    shareText = `나의 직업 적성은 ${result.emoji} ${result.title}!`;
  } else if (isWorkStyle) {
    heroTitle = '당신의 업무 스타일은';
    heroSubtitle = result.subtitle;
    shareText = `나의 업무 스타일은 ${result.emoji} ${result.title}!`;
  } else if (isIQTest) {
    heroTitle = '당신의 IQ 점수는';
    heroSubtitle = `상위 ${100 - result.percentile}%`;
    shareText = `나의 IQ 점수는 ${result.emoji} ${result.iqScore}점!`;
  } else if (isDatingStyle) {
    heroTitle = '당신의 연애 성향은';
    heroSubtitle = result.subtitle;
    shareText = `나의 연애 성향은 ${result.emoji} ${result.title}!`;
  } else if (isLoveCharm) {
    heroTitle = '당신의 연애 매력 포인트는';
    heroSubtitle = `매력지수 ${result.charmScore}점`;
    shareText = `나의 연애 매력 포인트는 ${result.emoji} ${result.title}!`;
  } else if (isMoneySense) {
    heroTitle = '당신의 금전 감각은';
    heroSubtitle = `금전감각 ${result.moneyScore}점`;
    shareText = `나의 금전 감각은 ${result.emoji} ${result.title}!`;
  } else if (isRichMindset) {
    heroTitle = '당신의 부자 마인드는';
    heroSubtitle = `부자 잠재력 ${result.percentage}%`;
    shareText = `나의 부자 마인드는 ${result.emoji} ${result.title}!`;
  } else if (isDISC) {
    heroTitle = '당신의 DISC 유형은';
    heroSubtitle = result.subtitle;
    shareText = `나의 DISC 유형은 ${result.emoji} ${result.title}!`;
  } else if (isEnneagram) {
    heroTitle = '당신의 에니어그램은';
    heroSubtitle = `${result.number}번 유형`;
    shareText = `나의 에니어그램은 ${result.emoji} ${result.title}!`;
  } else if (isEQ) {
    heroTitle = '당신의 EQ 점수는';
    heroSubtitle = `감성지능 ${result.percentage}%`;
    shareText = `나의 EQ 점수는 ${result.emoji} ${result.percentage}%!`;
  } else if (isMentalStrength) {
    heroTitle = '당신의 멘탈 강도는';
    heroSubtitle = `${result.percentage}%`;
    shareText = `나의 멘탈 강도는 ${result.emoji} ${result.title}!`;
  } else if (isBurnout) {
    heroTitle = '당신의 번아웃 지수는';
    heroSubtitle = `${result.percentage}%`;
    shareText = `나의 번아웃 상태는 ${result.emoji} ${result.title}!`;
  } else if (isFocus) {
    heroTitle = '당신의 집중력은';
    heroSubtitle = `${result.percentage}%`;
    shareText = `나의 집중력 유형은 ${result.emoji} ${result.title}!`;
  } else if (isDarkTriad) {
    heroTitle = '당신의 다크 트라이어드는';
    heroSubtitle = `다크 지수 ${result.totalPercentage}%`;
    shareText = `나의 다크 트라이어드 유형은 ${result.emoji} ${result.title}! 다크 지수 ${result.totalPercentage}%`;
  } else if (isMentalAge) {
    heroTitle = '당신의 정신연령은';
    heroSubtitle = `${result.mentalAge}세`;
    shareText = `나의 정신연령은 ${result.emoji} ${result.mentalAge}세! ${result.title}`;
  } else if (isHiddenTalent) {
    heroTitle = '당신의 숨겨진 재능은';
    heroSubtitle = result.talentArea;
    shareText = `나의 숨겨진 재능은 ${result.emoji} ${result.title}! - ${result.subtitle}`;
  } else if (isCommunicationStyle) {
    heroTitle = '당신의 소통 스타일은';
    heroSubtitle = result.subtitle;
    shareText = `나의 소통 스타일은 ${result.emoji} ${result.title}!`;
  } else if (isLeadershipType) {
    heroTitle = '당신의 리더십 유형은';
    heroSubtitle = result.subtitle;
    shareText = `나의 리더십 유형은 ${result.emoji} ${result.title}!`;
  } else if (isCreativityIndex) {
    heroTitle = '당신의 창의력 지수는';
    heroSubtitle = `${result.percentage}%`;
    shareText = `나의 창의력 지수는 ${result.emoji} ${result.percentage}%! ${result.title}`;
  } else if (isInnerChild) {
    heroTitle = '당신의 내면아이는';
    heroSubtitle = result.subtitle;
    shareText = `나의 내면아이는 ${result.emoji} ${result.title}! - ${result.subtitle}`;
  } else if (isFlexTendency) {
    heroTitle = '당신의 플렉스 유형은';
    heroSubtitle = `플렉스 지수 ${result.flexScore}%`;
    shareText = `나의 플렉스 유형은 ${result.emoji} ${result.title}! 플렉스 지수 ${result.flexScore}%`;
  } else if (isEmotionRegulation) {
    heroTitle = '당신의 감정 조절력은';
    heroSubtitle = `${result.percentage}% (${result.level})`;
    shareText = `나의 감정 조절력은 ${result.emoji} ${result.percentage}%! ${result.title}`;
  } else if (isMBTICompatibility) {
    heroTitle = 'MBTI 궁합 결과';
    heroSubtitle = `${result.compatibilityScore}점 - ${result.compatibilityLevel}`;
    shareText = `${result.myType}와 ${result.partnerType}의 궁합은 ${result.emoji} ${result.compatibilityScore}점! ${result.compatibilityLevel}`;
  } else if (isJealousyType) {
    heroTitle = '당신의 질투 유형은';
    heroSubtitle = result.subtitle;
    shareText = `나의 질투 유형은 ${result.emoji} ${result.title}! - ${result.subtitle}`;
  } else if (isSelfEsteem) {
    heroTitle = '당신의 자존감은';
    heroSubtitle = `${result.percentage}% (${result.level})`;
    shareText = `나의 자존감 레벨은 ${result.emoji} ${result.percentage}%! ${result.title}`;
  } else if (isVillainHero) {
    heroTitle = '당신의 정체는';
    heroSubtitle = result.alignment;
    shareText = `나는 ${result.emoji} ${result.title}! - ${result.subtitle}`;
  } else if (isFlirtingStyle) {
    heroTitle = '당신의 썸 스타일은';
    heroSubtitle = result.subtitle;
    shareText = `나의 썸 스타일은 ${result.emoji} ${result.title}! - ${result.subtitle}`;
  } else if (isTPower) {
    heroTitle = '당신의 전투력은';
    heroSubtitle = `${result.powerLevel} (${result.rank})`;
    shareText = `나의 전투력은 ${result.emoji} ${result.powerScore}점! ${result.title} - ${result.rank}`;
  } else if (isSocialBattery) {
    heroTitle = '당신의 소셜 배터리는';
    heroSubtitle = `${result.percentage}%`;
    shareText = `나의 소셜 배터리는 ${result.emoji} ${result.percentage}%! ${result.title}`;
  } else if (isAngerStyle) {
    heroTitle = '당신의 분노 스타일은';
    heroSubtitle = result.subtitle;
    shareText = `나의 분노 스타일은 ${result.emoji} ${result.title}! - ${result.subtitle}`;
  } else if (isAnxietyLevel) {
    heroTitle = '당신의 불안 수준은';
    heroSubtitle = `${result.percentage}% (${result.level})`;
    shareText = `나의 불안 수준은 ${result.emoji} ${result.percentage}%! ${result.title}`;
  } else if (isConflictStyle) {
    heroTitle = '당신의 갈등 대처 스타일은';
    heroSubtitle = result.subtitle;
    shareText = `나의 갈등 스타일은 ${result.emoji} ${result.title}! - ${result.subtitle}`;
  } else if (isCombatPower) {
    heroTitle = '당신의 전투력은';
    heroSubtitle = `${result.powerLevel}점 (${result.rank})`;
    shareText = `나의 전투력은 ${result.emoji} ${result.powerLevel}점! ${result.title} - ${result.rank}`;
  } else if (isDecisionStyle) {
    heroTitle = '당신의 결정 스타일은';
    heroSubtitle = result.subtitle;
    shareText = `나의 결정 스타일은 ${result.emoji} ${result.title}! - ${result.subtitle}`;
  } else if (isDrinkingStyle) {
    heroTitle = '당신의 음주 스타일은';
    heroSubtitle = result.subtitle;
    shareText = `나의 음주 스타일은 ${result.emoji} ${result.title}! - ${result.subtitle}`;
  } else if (isFirstImpression) {
    heroTitle = '당신의 첫인상은';
    heroSubtitle = result.subtitle;
    shareText = `나의 첫인상은 ${result.emoji} ${result.title}! - ${result.subtitle}`;
  } else if (isFriendshipStyle) {
    heroTitle = '당신의 친구 스타일은';
    heroSubtitle = result.subtitle;
    shareText = `나의 친구 스타일은 ${result.emoji} ${result.title}! - ${result.subtitle}`;
  } else if (isGaslightingCheck) {
    heroTitle = '가스라이팅 체크 결과';
    heroSubtitle = `위험도 ${result.riskScore}점`;
    shareText = `가스라이팅 체크 결과: ${result.emoji} ${result.title}`;
  } else if (isHumorType) {
    heroTitle = '당신의 유머 유형은';
    heroSubtitle = result.subtitle;
    shareText = `나의 유머 유형은 ${result.emoji} ${result.title}! - ${result.subtitle}`;
  } else if (isIntrovertExtrovert) {
    heroTitle = '당신의 성향은';
    heroSubtitle = `${result.percentage}%`;
    shareText = `나는 ${result.emoji} ${result.title}! ${result.percentage}%`;
  } else if (isLifeGraph) {
    heroTitle = '당신의 인생 그래프는';
    heroSubtitle = result.graphPattern;
    shareText = `나의 인생 그래프는 ${result.emoji} ${result.title}! - ${result.graphPattern}`;
  } else if (isLoveTrauma) {
    heroTitle = '연애 트라우마 체크 결과';
    heroSubtitle = `트라우마 지수 ${result.traumaScore}점`;
    shareText = `연애 트라우마 체크: ${result.emoji} ${result.title}`;
  } else if (isPeoplePleser) {
    heroTitle = '눈치 보기 테스트 결과';
    heroSubtitle = `눈치 지수 ${result.pleaseScore}점`;
    shareText = `눈치 테스트 결과: ${result.emoji} ${result.title}`;
  } else if (isPersonalityDuality) {
    heroTitle = '당신의 이중성 지수는';
    heroSubtitle = `${result.dualityScore}점`;
    shareText = `나의 이중성 지수는 ${result.emoji} ${result.dualityScore}점! ${result.title}`;
  } else if (isProcrastination) {
    heroTitle = '당신의 미루기 지수는';
    heroSubtitle = `${result.procrastinationScore}점`;
    shareText = `나의 미루기 지수는 ${result.emoji} ${result.procrastinationScore}점! ${result.title}`;
  } else if (isSleepType) {
    heroTitle = '당신의 수면 유형은';
    heroSubtitle = result.chronotype;
    shareText = `나의 수면 유형은 ${result.emoji} ${result.title}! - ${result.chronotype}`;
  } else if (isSnsPersonality) {
    heroTitle = '당신의 SNS 성격은';
    heroSubtitle = `SNS 지수 ${result.snsScore}점`;
    shareText = `나의 SNS 성격은 ${result.emoji} ${result.title}! SNS 지수 ${result.snsScore}점`;
  } else if (isSpendingType) {
    heroTitle = '당신의 소비 유형은';
    heroSubtitle = `저축 점수 ${result.savingScore}점`;
    shareText = `나의 소비 유형은 ${result.emoji} ${result.title}! 저축 점수 ${result.savingScore}점`;
  } else if (isTarotToday) {
    heroTitle = '오늘의 타로 카드는';
    heroSubtitle = result.card;
    shareText = `오늘의 타로 카드: ${result.emoji} ${result.title}! - ${result.meaning}`;
  } else if (isToxicCheck) {
    heroTitle = '독성 관계 체크 결과';
    heroSubtitle = `독성 지수 ${result.toxicScore}점`;
    shareText = `독성 관계 체크: ${result.emoji} ${result.title}`;
  } else if (isTraumaCheck) {
    heroTitle = '트라우마 체크 결과';
    heroSubtitle = `트라우마 지수 ${result.traumaScore}점`;
    shareText = `트라우마 체크: ${result.emoji} ${result.title}`;
  } else if (isPushPull) {
    heroTitle = '당신의 밀당 능력은';
    heroSubtitle = `밀당력 ${result.percentage}%`;
    shareText = `나의 밀당 유형은 ${result.emoji} ${result.title}! 밀당력 ${result.percentage}%`;
  } else if (isBreakupRecovery) {
    heroTitle = '당신의 이별 회복 단계는';
    heroSubtitle = `${result.stage}단계 - 회복률 ${result.percentage}%`;
    shareText = `나의 이별 회복 단계는 ${result.emoji} ${result.title}! 회복률 ${result.percentage}%`;
  } else if (isCompanyDinner) {
    heroTitle = '회식에서 당신은';
    heroSubtitle = result.title;
    shareText = `회식에서 나는 ${result.emoji} ${result.title}!`;
  } else if (isDramaCharacter) {
    heroTitle = '드라마에서 당신은';
    heroSubtitle = result.title;
    shareText = `드라마에서 나는 ${result.emoji} ${result.title}! - ${result.genre}`;
  } else if (isPerfectionism) {
    heroTitle = '당신의 완벽주의 레벨은';
    heroSubtitle = `${result.level}%`;
    shareText = `나의 완벽주의 레벨은 ${result.level}%! ${result.emoji} ${result.title}`;
  } else if (isEmpathyLevel) {
    heroTitle = '당신의 공감 레벨은';
    heroSubtitle = `${result.level}%`;
    shareText = `나의 공감 능력은 ${result.level}%! ${result.emoji} ${result.title}`;
  } else if (isExAttachment) {
    heroTitle = '전 애인 미련 지수는';
    heroSubtitle = `${result.level}%`;
    shareText = `나의 전 애인 미련 지수는 ${result.level}%! ${result.emoji} ${result.title}`;
  } else if (isReunionChance) {
    heroTitle = '재회 가능성은';
    heroSubtitle = `${result.percentage}%`;
    shareText = `나의 재회 가능성은 ${result.percentage}%! ${result.emoji} ${result.title}`;
  } else if (isLoveCell) {
    heroTitle = '당신의 연애 세포는';
    heroSubtitle = `${result.percentage}%`;
    shareText = `나의 연애 세포는 ${result.percentage}%! ${result.emoji} ${result.title}`;
  } else if (isCoupleFight) {
    heroTitle = '당신의 싸움 패턴은';
    heroSubtitle = result.subtitle;
    shareText = `나의 커플 싸움 유형은 ${result.emoji} ${result.title}!`;
  } else if (isBreakupReason) {
    heroTitle = '이별 원인 분석 결과';
    heroSubtitle = result.subtitle;
    shareText = `나의 이별 원인은 ${result.emoji} ${result.title}!`;
  } else if (isNextLoveReady) {
    heroTitle = '다음 연애 준비도는';
    heroSubtitle = `${result.percentage}%`;
    shareText = `나의 다음 연애 준비도는 ${result.percentage}%! ${result.emoji} ${result.title}`;
  } else if (isLoveMeter) {
    heroTitle = '애정 온도는';
    heroSubtitle = `${result.temperature}°C`;
    shareText = `우리 커플 애정 온도는 ${result.temperature}°C! ${result.emoji} ${result.title}`;
  } else if (isCrushSuccess) {
    heroTitle = '짝사랑 성공 확률은';
    heroSubtitle = `${result.percentage}%`;
    shareText = `나의 짝사랑 성공 확률은 ${result.percentage}%! ${result.emoji} ${result.title}`;
  } else if (isRedFlagDetect) {
    heroTitle = '레드플래그 위험도는';
    heroSubtitle = `${result.riskLevel}%`;
    shareText = `레드플래그 감별 결과: ${result.emoji} ${result.title}`;
  } else if (isConfessionTiming) {
    heroTitle = '고백 타이밍 점수';
    heroSubtitle = `${result.percentage}%`;
    shareText = `나의 고백 타이밍: ${result.emoji} ${result.title} - ${result.timing}`;
  } else if (isFriendToLover) {
    heroTitle = '친구→연인 가능성';
    heroSubtitle = `${result.percentage}%`;
    shareText = `친구→연인 가능성: ${result.emoji} ${result.title} - ${result.verdict}`;
  } else if (isMarriageFit) {
    heroTitle = '결혼 적합도';
    heroSubtitle = `${result.percentage}%`;
    shareText = `결혼 적합도: ${result.emoji} ${result.title} - ${result.verdict}`;
  } else if (isCoupleComm) {
    heroTitle = '커플 소통 점수';
    heroSubtitle = `${result.score}점 (${result.grade})`;
    shareText = `커플 소통 점수: ${result.emoji} ${result.title} - ${result.grade}등급`;
  } else if (isDatingPattern) {
    heroTitle = '당신의 연애 패턴은';
    heroSubtitle = result.subtitle;
    shareText = `나의 연애 패턴: ${result.emoji} ${result.title} - ${result.subtitle}`;
  } else if (isHiddenDesire) {
    heroTitle = '당신의 숨겨진 욕망은';
    heroSubtitle = result.subtitle;
    shareText = `나의 숨겨진 욕망: ${result.emoji} ${result.title} - ${result.coreDesire}`;
  } else if (isSeductionStyle) {
    heroTitle = '당신의 유혹 스타일은';
    heroSubtitle = result.subtitle;
    shareText = `나의 유혹 스타일: ${result.emoji} ${result.title} - ${result.coreCharm}`;
  } else if (isTrueNature) {
    heroTitle = '당신의 본성은';
    heroSubtitle = result.subtitle;
    shareText = `나의 숨겨진 본성: ${result.emoji} ${result.title} - ${result.hiddenSelf}`;
  } else if (isCheatingRisk) {
    heroTitle = '당신의 바람기 지수는';
    heroSubtitle = `${result.percentage} (레벨 ${result.level}/5)`;
    shareText = `나의 바람기 지수: ${result.emoji} ${result.title} - ${result.percentage}`;
  } else if (isObsessionLevel) {
    heroTitle = '당신의 집착 레벨은';
    heroSubtitle = `${result.percentage} (레벨 ${result.level}/5)`;
    shareText = `나의 집착 레벨: ${result.emoji} ${result.title} - ${result.percentage}`;
  } else if (isGenderIdentity) {
    heroTitle = '당신의 젠더 정체성은';
    heroSubtitle = result.subtitle;
    shareText = `나의 젠더 스펙트럼: ${result.emoji} ${result.title} - ${result.subtitle}`;
  } else if (isYoutuberType) {
    heroTitle = '당신이 유튜버라면';
    heroSubtitle = result.subtitle;
    shareText = `내가 유튜버라면: ${result.emoji} ${result.title} - ${result.channelName}`;
  } else if (isAttentionSeeker) {
    heroTitle = '당신의 관종력은';
    heroSubtitle = `${result.percentage} (레벨 ${result.level}/5)`;
    shareText = `나의 관종력: ${result.emoji} ${result.title} - ${result.percentage}`;
  } else if (isMbtiShadow) {
    heroTitle = '당신의 숨겨진 성격은';
    heroSubtitle = `${result.mainMbti} → ${result.shadowMbti}`;
    shareText = `나의 숨겨진 부캐: ${result.emoji} ${result.title} - 평소 ${result.mainMbti}, 속은 ${result.shadowMbti}`;
  } else if (isMbtiStress) {
    heroTitle = '당신의 스트레스 반응은';
    heroSubtitle = result.subtitle;
    shareText = `스트레스 받으면 나는: ${result.emoji} ${result.title} - ${result.subtitle}`;
  } else if (isAlphaGen) {
    heroTitle = '당신의 알파세대 이해력은';
    heroSubtitle = `${result.score}점`;
    shareText = `나의 알파세대 이해력: ${result.emoji} ${result.title} - ${result.score}점`;
  } else if (isDigitalNative) {
    heroTitle = '당신의 디지털 네이티브 지수는';
    heroSubtitle = `${result.score}점`;
    shareText = `나의 디지털 네이티브 지수: ${result.emoji} ${result.title} - ${result.score}점`;
  } else if (isMidnightSnack) {
    heroTitle = '당신의 야식 유형은';
    heroSubtitle = result.subtitle;
    shareText = `나의 야식 유형: ${result.emoji} ${result.title} - ${result.subtitle}`;
  } else if (isTravelStyle) {
    heroTitle = '당신의 여행 스타일은';
    heroSubtitle = result.subtitle;
    shareText = `나의 여행 스타일: ${result.emoji} ${result.title} - ${result.subtitle}`;
  } else if (isShoppingType) {
    heroTitle = '당신의 쇼핑 유형은';
    heroSubtitle = result.subtitle;
    shareText = `나의 쇼핑 유형: ${result.emoji} ${result.title} - ${result.subtitle}`;
  } else if (isPetMatch) {
    heroTitle = '당신과 맞는 반려동물은';
    heroSubtitle = result.petName;
    shareText = `나와 맞는 반려동물: ${result.emoji} ${result.petName} - ${result.subtitle}`;
  } else if (isZombieSurvival) {
    heroTitle = '좀비 세상에서 당신은';
    heroSubtitle = `생존율 ${result.survivalRate}%`;
    shareText = `좀비 세상 내 역할: ${result.emoji} ${result.title} - 생존율 ${result.survivalRate}%`;
  } else if (isIslandSurvival) {
    heroTitle = '무인도에서 당신은';
    heroSubtitle = `${result.survivalDays}일 생존`;
    shareText = `무인도 생존력: ${result.emoji} ${result.title} - ${result.survivalDays}일 생존`;
  } else if (isMbtiOffice) {
    heroTitle = '직장에서 당신의 MBTI는';
    heroSubtitle = result.type;
    shareText = `직장에서 나의 MBTI: ${result.emoji} ${result.title}`;
  } else if (isMbtiDating) {
    heroTitle = '연애할 때 당신의 MBTI는';
    heroSubtitle = result.type;
    shareText = `연애할 때 나의 MBTI: ${result.emoji} ${result.title}`;
  } else if (isDrivingPersonality) {
    heroTitle = '운전할 때 당신은';
    heroSubtitle = result.drivingStyle;
    shareText = `나의 운전 성격: ${result.emoji} ${result.title}`;
  } else if (isKaraokeType) {
    heroTitle = '노래방에서 당신은';
    heroSubtitle = result.title;
    shareText = `노래방에서 나는: ${result.emoji} ${result.title}`;
  } else if (isFashionPersonality) {
    heroTitle = '당신의 패션 성격은';
    heroSubtitle = result.title;
    shareText = `나의 패션 성격: ${result.emoji} ${result.title}`;
  } else if (isFoodTaste) {
    heroTitle = '당신의 음식 취향은';
    heroSubtitle = result.title;
    shareText = `나의 음식 취향: ${result.emoji} ${result.title}`;
  } else if (isRoomCleaning) {
    heroTitle = '당신의 방 정리 유형은';
    heroSubtitle = result.roomStyle;
    shareText = `나의 방 정리 유형: ${result.emoji} ${result.title}`;
  } else if (isHobbyRecommend) {
    heroTitle = '당신에게 맞는 취미는';
    heroSubtitle = result.title;
    shareText = `나에게 맞는 취미: ${result.emoji} ${result.title}`;
  } else if (isMorningNight) {
    heroTitle = '당신의 생체리듬은';
    heroSubtitle = result.chronotype;
    shareText = `나의 생체리듬: ${result.emoji} ${result.title}`;
  } else if (isSeasonPersonality) {
    heroTitle = '당신의 계절 성격은';
    heroSubtitle = result.season;
    shareText = `나의 계절 성격: ${result.emoji} ${result.title}`;
  } else if (isMbtiTravelResult(result)) {
    heroTitle = '당신의 여행 MBTI는';
    heroSubtitle = result.travelStyle;
    shareText = `나의 여행 MBTI: ${result.emoji} ${result.title}`;
  } else if (isMbtiDrinkingResult(result)) {
    heroTitle = '술자리에서 당신은';
    heroSubtitle = result.drinkingStyle;
    shareText = `술자리에서 나는: ${result.emoji} ${result.title}`;
  } else if (isFairytaleRoleResult(result)) {
    heroTitle = '동화 속에서 당신은';
    heroSubtitle = result.fairytale;
    shareText = `동화 속 나는: ${result.emoji} ${result.title}`;
  } else if (isMagicElementResult(result)) {
    heroTitle = '당신의 마법 속성은';
    heroSubtitle = result.element;
    shareText = `나의 마법 속성: ${result.emoji} ${result.title} - ${result.element}`;
  } else if (isGameCharacterResult(result)) {
    heroTitle = '게임 속에서 당신은';
    heroSubtitle = result.className;
    shareText = `게임 속 나는: ${result.emoji} ${result.title} - ${result.className}`;
  } else if (isSuperPowerResult(result)) {
    heroTitle = '당신의 슈퍼파워는';
    heroSubtitle = result.power;
    shareText = `나의 슈퍼파워: ${result.emoji} ${result.title} - ${result.power}`;
  } else if (isHogwartsHouseResult(result)) {
    heroTitle = '당신의 기숙사는';
    heroSubtitle = result.house;
    shareText = `나의 호그와트 기숙사: ${result.emoji} ${result.house}!`;
  } else if (isMeetingTypeResult(result)) {
    heroTitle = '회의에서 당신은';
    heroSubtitle = result.title;
    shareText = `회의에서 나는: ${result.emoji} ${result.title}`;
  } else if (isMbtiConflictResult(result)) {
    heroTitle = '싸울 때 당신의 MBTI는';
    heroSubtitle = result.conflictStyle;
    shareText = `싸울 때 나의 MBTI: ${result.emoji} ${result.title}`;
  } else if (isMbtiSpendingResult(result)) {
    heroTitle = '돈 쓸 때 당신의 MBTI는';
    heroSubtitle = result.spendingStyle;
    shareText = `돈 쓸 때 나의 MBTI: ${result.emoji} ${result.title}`;
  } else if (isAjaePowerResult(result)) {
    heroTitle = '당신의 아재력은';
    heroSubtitle = `${result.level}%`;
    shareText = `나의 아재력: ${result.emoji} ${result.title} (${result.level}%)`;
  } else if (isHipsterLevelResult(result)) {
    heroTitle = '당신의 힙스터 레벨은';
    heroSubtitle = `${result.level}%`;
    shareText = `나의 힙스터 레벨: ${result.emoji} ${result.title} (${result.level}%)`;
  } else if (isMondayBluesResult(result)) {
    heroTitle = '당신의 월요병 지수는';
    heroSubtitle = `${result.level}%`;
    shareText = `나의 월요병 지수: ${result.emoji} ${result.title} (${result.level}%)`;
  } else if (isBossTypeResult(result)) {
    heroTitle = '당신의 상사 유형은';
    heroSubtitle = result.title;
    shareText = `나의 상사 유형: ${result.emoji} ${result.title}`;
  }

  // 그라데이션 설정
  let heroGradient: string | undefined;
  let heroClass = '';
  
  if (isColor) {
    heroGradient = `linear-gradient(135deg, ${result.colorCode}, ${result.colorCode}90, ${result.colorCode}60)`;
  } else if (isMBTI) {
    heroClass = 'bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500';
  } else if (isPastLife) {
    heroClass = 'bg-gradient-to-br from-amber-600 via-orange-500 to-yellow-500';
  } else if (isIdealType) {
    heroClass = 'bg-gradient-to-br from-pink-500 via-rose-500 to-red-500';
  } else if (isLoveLanguage) {
    heroClass = 'bg-gradient-to-br from-rose-400 via-pink-500 to-fuchsia-500';
  } else if (isLuck2025) {
    heroClass = 'bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500';
  } else if (isBrainType) {
    heroClass = 'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500';
  } else if (isStressLevel) {
    heroClass = 'bg-gradient-to-br from-red-500 via-orange-500 to-amber-500';
  } else if (isAttachmentStyle) {
    heroClass = 'bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500';
  } else if (isCareerAptitude) {
    heroClass = 'bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500';
  } else if (isWorkStyle) {
    heroClass = 'bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500';
  } else if (isIQTest) {
    heroClass = 'bg-gradient-to-br from-amber-500 via-yellow-500 to-orange-500';
  } else if (isDatingStyle) {
    heroClass = 'bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-500';
  } else if (isLoveCharm) {
    heroClass = 'bg-gradient-to-br from-pink-400 via-rose-500 to-red-500';
  } else if (isMoneySense) {
    heroClass = 'bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500';
  } else if (isRichMindset) {
    heroClass = 'bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-500';
  } else if (isDISC) {
    heroClass = 'bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500';
  } else if (isEnneagram) {
    heroClass = 'bg-gradient-to-br from-purple-500 via-violet-500 to-indigo-500';
  } else if (isEQ) {
    heroClass = 'bg-gradient-to-br from-pink-500 via-rose-500 to-red-500';
  } else if (isMentalStrength) {
    heroClass = 'bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500';
  } else if (isBurnout) {
    heroClass = 'bg-gradient-to-br from-orange-500 via-red-500 to-rose-500';
  } else if (isFocus) {
    heroClass = 'bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500';
  } else if (isDarkTriad) {
    heroClass = 'bg-gradient-to-br from-gray-800 via-purple-900 to-black';
  } else if (isMentalAge) {
    heroClass = 'bg-gradient-to-br from-amber-400 via-orange-500 to-pink-500';
  } else if (isHiddenTalent) {
    heroClass = 'bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-500';
  } else if (isCommunicationStyle) {
    heroClass = 'bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500';
  } else if (isLeadershipType) {
    heroClass = 'bg-gradient-to-br from-amber-500 via-orange-500 to-red-500';
  } else if (isCreativityIndex) {
    heroClass = 'bg-gradient-to-br from-fuchsia-500 via-purple-500 to-violet-500';
  } else if (isInnerChild) {
    heroClass = 'bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400';
  } else if (isFlexTendency) {
    heroClass = 'bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500';
  } else if (isEmotionRegulation) {
    heroClass = 'bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500';
  } else if (isMBTICompatibility) {
    heroClass = 'bg-gradient-to-br from-pink-500 via-rose-500 to-red-500';
  } else if (isJealousyType) {
    heroClass = 'bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-500';
  } else if (isSelfEsteem) {
    heroClass = 'bg-gradient-to-br from-amber-500 via-yellow-500 to-orange-500';
  } else if (isVillainHero) {
    heroClass = 'bg-gradient-to-br from-gray-700 via-purple-800 to-gray-900';
  } else if (isFlirtingStyle) {
    heroClass = 'bg-gradient-to-br from-pink-400 via-rose-400 to-red-400';
  } else if (isTPower) {
    heroClass = 'bg-gradient-to-br from-orange-500 via-red-500 to-rose-600';
  } else if (isSocialBattery) {
    heroClass = 'bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500';
  } else if (isAngerStyle) {
    heroClass = 'bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500';
  } else if (isAnxietyLevel) {
    heroClass = 'bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500';
  } else if (isConflictStyle) {
    heroClass = 'bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500';
  } else if (isCombatPower) {
    heroClass = 'bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600';
  } else if (isDecisionStyle) {
    heroClass = 'bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500';
  } else if (isDrinkingStyle) {
    heroClass = 'bg-gradient-to-br from-amber-500 via-yellow-500 to-lime-500';
  } else if (isFirstImpression) {
    heroClass = 'bg-gradient-to-br from-pink-400 via-rose-400 to-orange-400';
  } else if (isFriendshipStyle) {
    heroClass = 'bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-500';
  } else if (isGaslightingCheck) {
    heroClass = 'bg-gradient-to-br from-gray-600 via-slate-700 to-zinc-800';
  } else if (isHumorType) {
    heroClass = 'bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-400';
  } else if (isIntrovertExtrovert) {
    heroClass = 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500';
  } else if (isLifeGraph) {
    heroClass = 'bg-gradient-to-br from-green-500 via-teal-500 to-blue-500';
  } else if (isLoveTrauma) {
    heroClass = 'bg-gradient-to-br from-rose-500 via-pink-500 to-purple-500';
  } else if (isPeoplePleser) {
    heroClass = 'bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500';
  } else if (isPersonalityDuality) {
    heroClass = 'bg-gradient-to-br from-slate-600 via-gray-500 to-zinc-600';
  } else if (isProcrastination) {
    heroClass = 'bg-gradient-to-br from-orange-500 via-red-500 to-pink-500';
  } else if (isSleepType) {
    heroClass = 'bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-600';
  } else if (isSnsPersonality) {
    heroClass = 'bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500';
  } else if (isSpendingType) {
    heroClass = 'bg-gradient-to-br from-emerald-500 via-green-500 to-lime-500';
  } else if (isTarotToday) {
    heroClass = 'bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600';
  } else if (isToxicCheck) {
    heroClass = 'bg-gradient-to-br from-red-600 via-rose-600 to-pink-600';
  } else if (isTraumaCheck) {
    heroClass = 'bg-gradient-to-br from-slate-600 via-purple-700 to-slate-800';
  } else if (isPushPull) {
    heroClass = 'bg-gradient-to-br from-pink-500 via-rose-500 to-red-500';
  } else if (isBreakupRecovery) {
    heroClass = 'bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500';
  } else if (isCompanyDinner) {
    heroClass = 'bg-gradient-to-br from-amber-500 via-orange-500 to-red-500';
  } else if (isDramaCharacter) {
    heroClass = 'bg-gradient-to-br from-fuchsia-500 via-pink-500 to-rose-500';
  } else if (isPerfectionism) {
    heroClass = 'bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-500';
  } else if (isEmpathyLevel) {
    heroClass = 'bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500';
  } else if (isExAttachment) {
    heroClass = 'bg-gradient-to-br from-gray-500 via-slate-500 to-zinc-600';
  } else if (isReunionChance) {
    heroClass = 'bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-500';
  } else if (isLoveCell) {
    heroClass = 'bg-gradient-to-br from-pink-500 via-rose-400 to-red-400';
  } else if (isCoupleFight) {
    heroClass = 'bg-gradient-to-br from-orange-500 via-red-500 to-rose-500';
  } else if (isBreakupReason) {
    heroClass = 'bg-gradient-to-br from-slate-500 via-gray-500 to-zinc-600';
  } else if (isNextLoveReady) {
    heroClass = 'bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500';
  } else if (isLoveMeter) {
    heroClass = 'bg-gradient-to-br from-red-500 via-rose-500 to-pink-500';
  } else if (isCrushSuccess) {
    heroClass = 'bg-gradient-to-br from-pink-500 via-rose-400 to-red-400';
  } else if (isRedFlagDetect) {
    heroClass = 'bg-gradient-to-br from-red-600 via-rose-600 to-pink-600';
  } else if (isConfessionTiming) {
    heroClass = 'bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500';
  } else if (isFriendToLover) {
    heroClass = 'bg-gradient-to-br from-pink-400 via-rose-400 to-red-400';
  } else if (isMarriageFit) {
    heroClass = 'bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-500';
  } else if (isCoupleComm) {
    heroClass = 'bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500';
  } else if (isDatingPattern) {
    heroClass = 'bg-gradient-to-br from-purple-500 via-violet-500 to-indigo-500';
  } else if (isHiddenDesire) {
    heroClass = 'bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-700';
  } else if (isSeductionStyle) {
    heroClass = 'bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-500';
  } else if (isTrueNature) {
    heroClass = 'bg-gradient-to-br from-slate-700 via-gray-800 to-zinc-900';
  } else if (isCheatingRisk) {
    heroClass = 'bg-gradient-to-br from-red-500 via-orange-500 to-amber-500';
  } else if (isObsessionLevel) {
    heroClass = 'bg-gradient-to-br from-rose-600 via-pink-600 to-fuchsia-600';
  } else if (isGenderIdentity) {
    heroClass = 'bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500';
  } else if (isYoutuberType) {
    heroClass = 'bg-gradient-to-br from-red-600 via-rose-500 to-pink-500';
  } else if (isAttentionSeeker) {
    heroClass = 'bg-gradient-to-br from-amber-500 via-orange-500 to-red-500';
  } else if (isMbtiShadow) {
    heroClass = 'bg-gradient-to-br from-slate-700 via-purple-800 to-indigo-900';
  } else if (isMbtiStress) {
    heroClass = 'bg-gradient-to-br from-red-600 via-rose-600 to-orange-500';
  } else if (isAlphaGen) {
    heroClass = 'bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500';
  } else if (isDigitalNative) {
    heroClass = 'bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500';
  } else if (isMidnightSnack) {
    heroClass = 'bg-gradient-to-br from-amber-600 via-orange-500 to-yellow-500';
  } else if (isTravelStyle) {
    heroClass = 'bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500';
  } else if (isShoppingType) {
    heroClass = 'bg-gradient-to-br from-pink-500 via-rose-500 to-red-500';
  } else if (isPetMatch) {
    heroClass = 'bg-gradient-to-br from-amber-400 via-orange-400 to-rose-400';
  } else if (isZombieSurvival) {
    heroClass = 'bg-gradient-to-br from-gray-800 via-green-900 to-gray-900';
  } else if (isIslandSurvival) {
    heroClass = 'bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-500';
  } else if (isMbtiOffice) {
    heroClass = 'bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600';
  } else if (isMbtiDating) {
    heroClass = 'bg-gradient-to-br from-pink-500 via-rose-500 to-red-500';
  } else if (isDrivingPersonality) {
    heroClass = 'bg-gradient-to-br from-gray-700 via-slate-700 to-zinc-800';
  } else if (isKaraokeType) {
    heroClass = 'bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500';
  } else if (isFashionPersonality) {
    heroClass = 'bg-gradient-to-br from-rose-400 via-pink-400 to-fuchsia-400';
  } else if (isFoodTaste) {
    heroClass = 'bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500';
  } else if (isRoomCleaning) {
    heroClass = 'bg-gradient-to-br from-sky-500 via-cyan-500 to-teal-500';
  } else if (isHobbyRecommend) {
    heroClass = 'bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500';
  } else if (isMorningNight) {
    heroClass = 'bg-gradient-to-br from-amber-500 via-orange-400 to-blue-600';
  } else if (isSeasonPersonality) {
    heroClass = 'bg-gradient-to-br from-pink-400 via-green-400 to-orange-400';
  } else if (isMbtiTravelResult(result)) {
    heroClass = 'bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500';
  } else if (isMbtiDrinkingResult(result)) {
    heroClass = 'bg-gradient-to-br from-amber-500 via-orange-500 to-red-500';
  } else if (isFairytaleRoleResult(result)) {
    heroClass = 'bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500';
  } else if (isMagicElementResult(result)) {
    heroClass = 'bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600';
  } else if (isGameCharacterResult(result)) {
    heroClass = 'bg-gradient-to-br from-red-600 via-orange-600 to-yellow-500';
  } else if (isSuperPowerResult(result)) {
    heroClass = 'bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600';
  } else if (isHogwartsHouseResult(result)) {
    heroClass = 'bg-gradient-to-br from-amber-600 via-yellow-500 to-red-600';
  } else if (isMeetingTypeResult(result)) {
    heroClass = 'bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500';
  } else if (isMbtiConflictResult(result)) {
    heroClass = 'bg-gradient-to-br from-red-500 via-orange-500 to-amber-500';
  } else if (isMbtiSpendingResult(result)) {
    heroClass = 'bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500';
  } else if (isAjaePowerResult(result)) {
    heroClass = 'bg-gradient-to-br from-amber-600 via-yellow-500 to-orange-500';
  } else if (isHipsterLevelResult(result)) {
    heroClass = 'bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500';
  } else if (isMondayBluesResult(result)) {
    heroClass = 'bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600';
  } else if (isBossTypeResult(result)) {
    heroClass = 'bg-gradient-to-br from-slate-600 via-gray-700 to-zinc-800';
  } else {
    heroClass = 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500';
  }

  const handleRetry = () => {
    sessionStorage.removeItem(`test-${slug}-answers`);
    router.push(`/test/${slug}/play`);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Interstitial Ad - AdSense 승인 후 활성화
      <AdInterstitial
        isOpen={showInterstitial && !!result}
        onClose={handleAdClose}
        countdownSeconds={5}
      />
      */}

      {/* Result Card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
        {/* Hero */}
        <div 
          className={`p-8 text-center text-white ${heroClass}`}
          style={heroGradient ? { background: heroGradient } : undefined}
        >
          <p className="text-white/80 mb-2">{heroTitle}</p>
          <div className="text-8xl mb-4">{result.emoji}</div>
          <h1 className="text-3xl font-bold mb-2">
            {isMBTI ? result.type : isPetMatch ? result.petName : result.title}
          </h1>
          <p className="text-xl text-white/90">{heroSubtitle}</p>
          {isMBTI && (
            <p className="text-lg text-white/80 mt-1">{result.title}</p>
          )}
        </div>

        {/* Viral Share Section */}
        <div className="px-6 py-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 border-b border-gray-100 dark:border-gray-700">
          <p className="text-center text-sm text-gray-600 dark:text-gray-300 mb-3">
            📸 결과 스크린샷 찍어서 친구에게 공유해보세요!
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-sm">
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              {shareText}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              #{test?.tags?.slice(0, 3).join(' #')} #AI놀이터
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Description */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">성격 분석</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{result.description}</p>
          </div>

          {/* Traits or Characteristics (for soul-animal, color, mbti, past-life, ideal-type only) */}
          {(isSoulAnimal || isColor || isMBTI || isPastLife || isIdealType) && (
            <div className="mb-8">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                {isMBTI ? '주요 특징' : isPastLife ? '성격 특성' : isIdealType ? '끌리는 성격' : '주요 특성'}
              </h2>
              <div className="flex flex-wrap gap-2">
                {(isMBTI ? result.characteristics : isPastLife ? result.personality : isIdealType ? result.personality : 'traits' in result ? result.traits : []).map((item: string) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Strengths & Weaknesses (Color & MBTI) */}
          {(isColor || isMBTI) && (
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">강점</h3>
                <ul className="space-y-1">
                  {result.strengths.map((strength) => (
                    <li key={strength} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {strength}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2">주의할 점</h3>
                <ul className="space-y-1">
                  {result.weaknesses.map((weakness) => (
                    <li key={weakness} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {weakness}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Color-specific: Advice */}
          {isColor && (
            <div className="mb-8 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-xl">
              <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">한마디 조언</h3>
              <p className="text-sm text-purple-700 dark:text-purple-300">{result.advice}</p>
            </div>
          )}

          {/* MBTI-specific: Career & Famous People */}
          {isMBTI && (
            <>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-emerald-50 dark:bg-emerald-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    추천 직업
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {result.career.map((job) => (
                      <span
                        key={job}
                        className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 rounded text-sm"
                      >
                        {job}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-violet-50 dark:bg-violet-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-violet-800 dark:text-violet-300 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    같은 유형 유명인
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {result.famousPeople.map((person) => (
                      <span
                        key={person}
                        className="px-2 py-1 bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 rounded text-sm"
                      >
                        {person}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Past-life specific sections */}
          {isPastLife && (
            <>
              {/* Era & Occupation */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    시대
                  </h3>
                  <p className="text-sm text-amber-700 dark:text-amber-300">{result.era}</p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    직업
                  </h3>
                  <p className="text-sm text-orange-700 dark:text-orange-300">{result.occupation}</p>
                </div>
              </div>

              {/* Lifestyle */}
              <div className="mb-8 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-xl">
                <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  전생의 삶
                </h3>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">{result.lifestyle}</p>
              </div>

              {/* Lesson & Current Influence */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    전생에서 배운 교훈
                  </h3>
                  <p className="text-sm text-purple-700 dark:text-purple-300">{result.lesson}</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    현재 삶에 미치는 영향
                  </h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300">{result.currentInfluence}</p>
                </div>
              </div>

              {/* Famous Example */}
              <div className="mb-8 p-4 bg-rose-50 dark:bg-rose-900/30 rounded-xl">
                <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  역사 속 비슷한 인물
                </h3>
                <p className="text-sm text-rose-700 dark:text-rose-300">{result.famousExample}</p>
              </div>
            </>
          )}

          {/* Ideal-type specific sections */}
          {isIdealType && (
            <>
              {/* Attracted To & Turn Offs */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    이런 사람에게 끌려요
                  </h3>
                  <ul className="space-y-1">
                    {result.attractedTo.map((item) => (
                      <li key={item} className="text-sm text-pink-700 dark:text-pink-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-slate-800 dark:text-slate-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    이런 건 싫어요
                  </h3>
                  <ul className="space-y-1">
                    {result.turnOffs.map((item) => (
                      <li key={item} className="text-sm text-slate-700 dark:text-slate-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Dating Style */}
              <div className="mb-8 p-4 bg-rose-50 dark:bg-rose-900/30 rounded-xl">
                <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  연애 스타일
                </h3>
                <p className="text-sm text-rose-700 dark:text-rose-300">{result.datingStyle}</p>
              </div>

              {/* Best & Worst Match */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    찰떡궁합
                  </h3>
                  <p className="text-sm text-green-700 dark:text-green-300">{result.bestMatch}</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-2">
                    주의할 유형
                  </h3>
                  <p className="text-sm text-red-700 dark:text-red-300">{result.worstMatch}</p>
                </div>
              </div>

              {/* Advice */}
              <div className="mb-8 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-xl">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  연애 조언
                </h3>
                <p className="text-sm text-purple-700 dark:text-purple-300">{result.advice}</p>
              </div>

              {/* Celeb Example */}
              <div className="mb-8 p-4 bg-amber-50 dark:bg-amber-900/30 rounded-xl">
                <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  이상형 예시 연예인
                </h3>
                <p className="text-sm text-amber-700 dark:text-amber-300">{result.celebExample}</p>
              </div>
            </>
          )}

          {/* Love Language specific sections */}
          {isLoveLanguage && (
            <>
              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">주요 특성</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-pink-50 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* How to Express & Receive */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-rose-50 dark:bg-rose-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    사랑 표현 방법
                  </h3>
                  <ul className="space-y-1">
                    {result.howToExpress.map((item) => (
                      <li key={item} className="text-sm text-rose-700 dark:text-rose-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-fuchsia-50 dark:bg-fuchsia-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-fuchsia-800 dark:text-fuchsia-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    사랑 받는 방법
                  </h3>
                  <ul className="space-y-1">
                    {result.howToReceive.map((item) => (
                      <li key={item} className="text-sm text-fuchsia-700 dark:text-fuchsia-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* In Relationship */}
              <div className="mb-8 p-4 bg-pink-50 dark:bg-pink-900/30 rounded-xl">
                <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  연애 관계에서
                </h3>
                <p className="text-sm text-pink-700 dark:text-pink-300">{result.inRelationship}</p>
              </div>

              {/* Tips */}
              <div className="mb-8 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-xl">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  연애 팁
                </h3>
                <p className="text-sm text-purple-700 dark:text-purple-300">{result.tips}</p>
              </div>

              {/* Best & Challenge With */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    잘 맞는 유형
                  </h3>
                  <p className="text-sm text-green-700 dark:text-green-300">{result.bestWith}</p>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    도전이 되는 유형
                  </h3>
                  <p className="text-sm text-amber-700 dark:text-amber-300">{result.challengeWith}</p>
                </div>
              </div>
            </>
          )}

          {/* Luck 2025 specific sections */}
          {isLuck2025 && (
            <>
              {/* Keywords */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">2025년 키워드</h2>
                <div className="flex flex-wrap gap-2">
                  {result.keywords.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-yellow-50 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Luck Scores */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">분야별 운세</h2>
                <div className="space-y-4">
                  {/* Love Luck */}
                  <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold text-pink-800 dark:text-pink-300 flex items-center gap-2">
                        <Heart className="w-4 h-4" /> 연애운
                      </h3>
                      <span className="text-pink-600 dark:text-pink-400 font-bold">{result.loveLuck.score}점</span>
                    </div>
                    <div className="w-full bg-pink-200 dark:bg-pink-800 rounded-full h-2 mb-2">
                      <div className="bg-pink-500 h-2 rounded-full" style={{ width: `${result.loveLuck.score}%` }}></div>
                    </div>
                    <p className="text-sm text-pink-700 dark:text-pink-300">{result.loveLuck.description}</p>
                  </div>

                  {/* Money Luck */}
                  <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold text-green-800 dark:text-green-300 flex items-center gap-2">
                        <Star className="w-4 h-4" /> 금전운
                      </h3>
                      <span className="text-green-600 dark:text-green-400 font-bold">{result.moneyLuck.score}점</span>
                    </div>
                    <div className="w-full bg-green-200 dark:bg-green-800 rounded-full h-2 mb-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: `${result.moneyLuck.score}%` }}></div>
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300">{result.moneyLuck.description}</p>
                  </div>

                  {/* Career Luck */}
                  <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold text-blue-800 dark:text-blue-300 flex items-center gap-2">
                        <Briefcase className="w-4 h-4" /> 직장운
                      </h3>
                      <span className="text-blue-600 dark:text-blue-400 font-bold">{result.careerLuck.score}점</span>
                    </div>
                    <div className="w-full bg-blue-200 dark:bg-blue-800 rounded-full h-2 mb-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${result.careerLuck.score}%` }}></div>
                    </div>
                    <p className="text-sm text-blue-700 dark:text-blue-300">{result.careerLuck.description}</p>
                  </div>

                  {/* Health Luck */}
                  <div className="bg-emerald-50 dark:bg-emerald-900/30 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                        <Heart className="w-4 h-4" /> 건강운
                      </h3>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">{result.healthLuck.score}점</span>
                    </div>
                    <div className="w-full bg-emerald-200 dark:bg-emerald-800 rounded-full h-2 mb-2">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${result.healthLuck.score}%` }}></div>
                    </div>
                    <p className="text-sm text-emerald-700 dark:text-emerald-300">{result.healthLuck.description}</p>
                  </div>
                </div>
              </div>

              {/* Lucky Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                <div className="bg-orange-50 dark:bg-orange-900/30 rounded-xl p-3 text-center">
                  <p className="text-xs text-orange-600 dark:text-orange-400 mb-1">행운의 달</p>
                  <p className="font-bold text-orange-800 dark:text-orange-300 text-sm">{result.luckyMonth}</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-3 text-center">
                  <p className="text-xs text-red-600 dark:text-red-400 mb-1">주의할 달</p>
                  <p className="font-bold text-red-800 dark:text-red-300 text-sm">{result.unluckyMonth}</p>
                </div>
                <div className="bg-violet-50 dark:bg-violet-900/30 rounded-xl p-3 text-center">
                  <p className="text-xs text-violet-600 dark:text-violet-400 mb-1">행운의 색</p>
                  <p className="font-bold text-violet-800 dark:text-violet-300 text-sm">{result.luckyColor}</p>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-3 text-center">
                  <p className="text-xs text-amber-600 dark:text-amber-400 mb-1">행운의 숫자</p>
                  <p className="font-bold text-amber-800 dark:text-amber-300 text-sm">{result.luckyNumber}</p>
                </div>
              </div>

              {/* Advice & Caution */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    2025년 조언
                  </h3>
                  <p className="text-sm text-purple-700 dark:text-purple-300">{result.advice}</p>
                </div>
                <div className="bg-rose-50 dark:bg-rose-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    주의사항
                  </h3>
                  <p className="text-sm text-rose-700 dark:text-rose-300">{result.caution}</p>
                </div>
              </div>
            </>
          )}

          {/* Brain Type specific sections */}
          {isBrainType && (
            <>
              {/* Brain Percentage Bar */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">뇌 유형 비율</h2>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">좌뇌 {result.leftBrainPercent}%</span>
                    <span className="text-sm font-medium text-pink-600 dark:text-pink-400">우뇌 {result.rightBrainPercent}%</span>
                  </div>
                  <div className="w-full h-4 rounded-full overflow-hidden flex">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-400 h-full"
                      style={{ width: `${result.leftBrainPercent}%` }}
                    ></div>
                    <div 
                      className="bg-gradient-to-r from-pink-400 to-pink-500 h-full"
                      style={{ width: `${result.rightBrainPercent}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
                    <span>논리 / 분석 / 언어</span>
                    <span>창의 / 감성 / 직관</span>
                  </div>
                </div>
              </div>

              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">주요 특성</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-purple-50 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    강점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    약점
                  </h3>
                  <ul className="space-y-1">
                    {result.weaknesses.map((item) => (
                      <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Suitable Jobs */}
              <div className="mb-8 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl p-4">
                <h3 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  추천 직업
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {result.suitableJobs.map((job) => (
                    <span
                      key={job}
                      className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 rounded text-sm"
                    >
                      {job}
                    </span>
                  ))}
                </div>
              </div>

              {/* Study Tips & Relationship Style */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-violet-50 dark:bg-violet-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-violet-800 dark:text-violet-300 mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    학습 팁
                  </h3>
                  <p className="text-sm text-violet-700 dark:text-violet-300">{result.studyTips}</p>
                </div>
                <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    연애 스타일
                  </h3>
                  <p className="text-sm text-pink-700 dark:text-pink-300">{result.relationshipStyle}</p>
                </div>
              </div>

              {/* Famous People */}
              <div className="mb-8 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl">
                <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  같은 유형 유명인
                </h3>
                <p className="text-sm text-indigo-700 dark:text-indigo-300">{result.famousPeople}</p>
              </div>

              {/* Advice */}
              <div className="mb-8 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-xl">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  한마디 조언
                </h3>
                <p className="text-sm text-purple-700 dark:text-purple-300">{result.advice}</p>
              </div>
            </>
          )}

          {/* Stress Level specific sections */}
          {isStressLevel && (
            <>
              {/* Stress Percentage Bar */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">스트레스 지수</h2>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">낮음</span>
                    <span className="text-sm font-bold text-red-600 dark:text-red-400">{result.percentage}%</span>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">높음</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-4 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all ${
                        result.percentage <= 20 ? 'bg-green-500' :
                        result.percentage <= 40 ? 'bg-yellow-500' :
                        result.percentage <= 60 ? 'bg-orange-500' :
                        result.percentage <= 80 ? 'bg-red-500' : 'bg-red-700'
                      }`}
                      style={{ width: `${result.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                    점수: {result.score} / {result.maxScore}
                  </p>
                </div>
              </div>

              {/* Symptoms */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">현재 증상</h2>
                <div className="flex flex-wrap gap-2">
                  {result.symptoms.map((symptom) => (
                    <span
                      key={symptom}
                      className="px-3 py-1.5 bg-orange-50 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium"
                    >
                      {symptom}
                    </span>
                  ))}
                </div>
              </div>

              {/* Causes & Self Care */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    가능한 원인
                  </h3>
                  <ul className="space-y-1">
                    {result.causes.map((cause) => (
                      <li key={cause} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> {cause}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    셀프 케어
                  </h3>
                  <ul className="space-y-1">
                    {result.selfCare.map((care) => (
                      <li key={care} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {care}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tips */}
              <div className="mb-8 bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  스트레스 관리 팁
                </h3>
                <ul className="space-y-1">
                  {result.tips.map((tip) => (
                    <li key={tip} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warning Sign */}
              <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/30 rounded-xl border border-red-200 dark:border-red-800">
                <h3 className="font-bold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  주의 사항
                </h3>
                <p className="text-sm text-red-700 dark:text-red-300">{result.warningSign}</p>
              </div>

              {/* Recommendation */}
              <div className="mb-8 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-xl">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  전문가 권장사항
                </h3>
                <p className="text-sm text-purple-700 dark:text-purple-300">{result.recommendation}</p>
              </div>
            </>
          )}

          {/* Attachment Style specific sections */}
          {isAttachmentStyle && (
            <>
              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">주요 특성</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-violet-50 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* In Relationship */}
              <div className="mb-8 p-4 bg-pink-50 dark:bg-pink-900/30 rounded-xl">
                <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  연애 관계에서
                </h3>
                <p className="text-sm text-pink-700 dark:text-pink-300">{result.inRelationship}</p>
              </div>

              {/* Strengths & Challenges */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    강점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    도전 과제
                  </h3>
                  <ul className="space-y-1">
                    {result.challenges.map((item) => (
                      <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Triggers */}
              <div className="mb-8 bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                <h3 className="font-bold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  트리거 (자극 요인)
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.triggers.map((trigger) => (
                    <span
                      key={trigger}
                      className="px-2 py-1 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 rounded text-sm"
                    >
                      {trigger}
                    </span>
                  ))}
                </div>
              </div>

              {/* Healing Tips */}
              <div className="mb-8 bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  치유와 성장을 위한 팁
                </h3>
                <ul className="space-y-1">
                  {result.healingTips.map((tip) => (
                    <li key={tip} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best & Difficult Match */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-emerald-50 dark:bg-emerald-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    잘 맞는 유형
                  </h3>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300">{result.bestMatch}</p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2">
                    어려운 조합
                  </h3>
                  <p className="text-sm text-orange-700 dark:text-orange-300">{result.difficultMatch}</p>
                </div>
              </div>

              {/* Famous People */}
              <div className="mb-8 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl">
                <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  같은 유형 유명인
                </h3>
                <p className="text-sm text-indigo-700 dark:text-indigo-300">{result.famousPeople}</p>
              </div>
            </>
          )}

          {/* Career Aptitude specific sections */}
          {isCareerAptitude && (
            <>
              {/* Field & Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">주요 특성</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-emerald-50 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths */}
              <div className="mb-8 bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  강점
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {result.strengths.map((strength) => (
                    <span
                      key={strength}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded text-sm"
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </div>

              {/* Work Style & Ideal Environment */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-violet-50 dark:bg-violet-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-violet-800 dark:text-violet-300 mb-2 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    업무 스타일
                  </h3>
                  <p className="text-sm text-violet-700 dark:text-violet-300">{result.workStyle}</p>
                </div>
                <div className="bg-teal-50 dark:bg-teal-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    이상적인 환경
                  </h3>
                  <p className="text-sm text-teal-700 dark:text-teal-300">{result.idealEnvironment}</p>
                </div>
              </div>

              {/* Recommended Careers */}
              <div className="mb-8 bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  추천 직업
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {result.recommendedCareers.map((career) => (
                    <span
                      key={career}
                      className="px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded text-sm"
                    >
                      {career}
                    </span>
                  ))}
                </div>
              </div>

              {/* Growth Tips */}
              <div className="mb-8 bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  성장을 위한 팁
                </h3>
                <ul className="space-y-1">
                  {result.growthTips.map((tip) => (
                    <li key={tip} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Famous People & Caution */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    같은 유형 유명인
                  </h3>
                  <p className="text-sm text-indigo-700 dark:text-indigo-300">{result.famousPeople}</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    주의할 점
                  </h3>
                  <p className="text-sm text-red-700 dark:text-red-300">{result.caution}</p>
                </div>
              </div>
            </>
          )}

          {/* Work Style specific sections */}
          {isWorkStyle && (
            <>
              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">주요 특성</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    강점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    약점
                  </h3>
                  <ul className="space-y-1">
                    {result.weaknesses.map((item) => (
                      <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Work Environment & Communication Style */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-violet-50 dark:bg-violet-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-violet-800 dark:text-violet-300 mb-2 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    선호 업무 환경
                  </h3>
                  <p className="text-sm text-violet-700 dark:text-violet-300">{result.workEnvironment}</p>
                </div>
                <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    소통 스타일
                  </h3>
                  <p className="text-sm text-pink-700 dark:text-pink-300">{result.communicationStyle}</p>
                </div>
              </div>

              {/* Ideal Role */}
              <div className="mb-8 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl p-4">
                <h3 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  적합한 역할
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {result.idealRole.map((role) => (
                    <span
                      key={role}
                      className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 rounded text-sm"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tips */}
              <div className="mb-8 bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  성장을 위한 팁
                </h3>
                <ul className="space-y-1">
                  {result.tips.map((tip) => (
                    <li key={tip} className="text-sm text-purple-700 dark:text-purple-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compatibility */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    잘 맞는 스타일
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {result.compatibility.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-2">
                    충돌할 수 있는 스타일
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {result.conflictWith.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-1 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 rounded text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* IQ Test specific sections */}
          {isIQTest && (
            <>
              {/* IQ Score Display */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">IQ 점수</h2>
                <div className="bg-gradient-to-r from-amber-100 via-yellow-100 to-orange-100 dark:from-amber-900/30 dark:via-yellow-900/30 dark:to-orange-900/30 rounded-xl p-6 text-center">
                  <div className="text-6xl font-bold text-amber-600 dark:text-amber-400 mb-2">{result.iqScore}</div>
                  <div className="text-sm text-amber-700 dark:text-amber-300">상위 {100 - result.percentile}% (백분위 {result.percentile}위)</div>
                  <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-amber-400 to-orange-500 h-3 rounded-full transition-all"
                      style={{ width: `${result.percentile}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span>85</span>
                    <span>100</span>
                    <span>115</span>
                    <span>130</span>
                    <span>145</span>
                  </div>
                </div>
              </div>

              {/* Brain Type */}
              <div className="mb-8 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-xl">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  뇌 유형
                </h3>
                <p className="text-sm text-purple-700 dark:text-purple-300">{result.brainType}</p>
              </div>

              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">주요 특성</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-yellow-50 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths */}
              <div className="mb-8 bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  강점
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {result.strengths.map((strength) => (
                    <span
                      key={strength}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded text-sm"
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recommended Activities */}
              <div className="mb-8 bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  추천 활동
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {result.recommendedActivities.map((activity) => (
                    <span
                      key={activity}
                      className="px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded text-sm"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>

              {/* Famous People */}
              <div className="mb-8 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl">
                <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  비슷한 유명인
                </h3>
                <p className="text-sm text-indigo-700 dark:text-indigo-300">{result.famousPeople}</p>
              </div>

              {/* Advice */}
              <div className="mb-8 p-4 bg-violet-50 dark:bg-violet-900/30 rounded-xl">
                <h3 className="font-bold text-violet-800 dark:text-violet-300 mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  한마디 조언
                </h3>
                <p className="text-sm text-violet-700 dark:text-violet-300">{result.advice}</p>
              </div>
            </>
          )}

          {/* Dating Style specific sections */}
          {isDatingStyle && (
            <>
              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">주요 특성</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-rose-50 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    강점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    약점
                  </h3>
                  <ul className="space-y-1">
                    {result.weaknesses.map((item) => (
                      <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* In Relationship */}
              <div className="mb-8 p-4 bg-pink-50 dark:bg-pink-900/30 rounded-xl">
                <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  연애 관계에서
                </h3>
                <p className="text-sm text-pink-700 dark:text-pink-300">{result.inRelationship}</p>
              </div>

              {/* Attracted To & Turn Offs */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-rose-50 dark:bg-rose-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    이런 사람에게 끌려요
                  </h3>
                  <p className="text-sm text-rose-700 dark:text-rose-300">{result.attractedTo}</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-slate-800 dark:text-slate-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    이런 건 싫어요
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300">{result.turnOffs}</p>
                </div>
              </div>

              {/* Dating Tips */}
              <div className="mb-8 bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  연애 팁
                </h3>
                <ul className="space-y-1">
                  {result.datingTips.map((tip) => (
                    <li key={tip} className="text-sm text-purple-700 dark:text-purple-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best & Worst Match */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    찰떡궁합
                  </h3>
                  <p className="text-sm text-green-700 dark:text-green-300">{result.bestMatch}</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-2">
                    주의할 유형
                  </h3>
                  <p className="text-sm text-red-700 dark:text-red-300">{result.worstMatch}</p>
                </div>
              </div>

              {/* Celeb Example */}
              <div className="mb-8 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl">
                <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  비슷한 연애 스타일 유명인
                </h3>
                <p className="text-sm text-indigo-700 dark:text-indigo-300">{result.celebExample}</p>
              </div>
            </>
          )}

          {/* Love Charm specific sections */}
          {isLoveCharm && (
            <>
              {/* Charm Score Display */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">매력 지수</h2>
                <div className="bg-gradient-to-r from-pink-100 via-rose-100 to-red-100 dark:from-pink-900/30 dark:via-rose-900/30 dark:to-red-900/30 rounded-xl p-6 text-center">
                  <div className="text-6xl font-bold text-rose-600 dark:text-rose-400 mb-2">{result.charmScore}</div>
                  <div className="text-sm text-rose-700 dark:text-rose-300">점</div>
                  <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-pink-400 to-rose-500 h-3 rounded-full transition-all"
                      style={{ width: `${result.charmScore}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Charm Points */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">매력 포인트</h2>
                <div className="flex flex-wrap gap-2">
                  {result.charmPoints.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-pink-50 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths */}
              <div className="mb-8 bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  강점
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {result.strengths.map((strength) => (
                    <span
                      key={strength}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded text-sm"
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </div>

              {/* How Others See You */}
              <div className="mb-8 p-4 bg-violet-50 dark:bg-violet-900/30 rounded-xl">
                <h3 className="font-bold text-violet-800 dark:text-violet-300 mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  타인이 보는 나
                </h3>
                <p className="text-sm text-violet-700 dark:text-violet-300">{result.howOthersSeeYou}</p>
              </div>

              {/* In Relationship */}
              <div className="mb-8 p-4 bg-rose-50 dark:bg-rose-900/30 rounded-xl">
                <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  연애 관계에서
                </h3>
                <p className="text-sm text-rose-700 dark:text-rose-300">{result.inRelationship}</p>
              </div>

              {/* Attraction Tips */}
              <div className="mb-8 bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  매력 업그레이드 팁
                </h3>
                <ul className="space-y-1">
                  {result.attractionTips.map((tip) => (
                    <li key={tip} className="text-sm text-purple-700 dark:text-purple-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal Partner & Celeb Example */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    이상적인 파트너
                  </h3>
                  <p className="text-sm text-green-700 dark:text-green-300">{result.idealPartner}</p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    비슷한 매력의 유명인
                  </h3>
                  <p className="text-sm text-indigo-700 dark:text-indigo-300">{result.celebExample}</p>
                </div>
              </div>
            </>
          )}

          {/* Money Sense specific sections */}
          {isMoneySense && (
            <>
              {/* Money Score Display */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">금전 감각 점수</h2>
                <div className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 dark:from-green-900/30 dark:via-emerald-900/30 dark:to-teal-900/30 rounded-xl p-6 text-center">
                  <div className="text-6xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">{result.moneyScore}</div>
                  <div className="text-sm text-emerald-700 dark:text-emerald-300">점</div>
                  <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-green-400 to-emerald-500 h-3 rounded-full transition-all"
                      style={{ width: `${result.moneyScore}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">주요 특성</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-emerald-50 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    강점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    약점
                  </h3>
                  <ul className="space-y-1">
                    {result.weaknesses.map((item) => (
                      <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spending & Saving Habit */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    소비 습관
                  </h3>
                  <p className="text-sm text-red-700 dark:text-red-300">{result.spendingHabit}</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    저축 습관
                  </h3>
                  <p className="text-sm text-green-700 dark:text-green-300">{result.savingHabit}</p>
                </div>
              </div>

              {/* Finance Tips */}
              <div className="mb-8 bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  재정 관리 팁
                </h3>
                <ul className="space-y-1">
                  {result.financeTips.map((tip) => (
                    <li key={tip} className="text-sm text-purple-700 dark:text-purple-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Future Outlook */}
              <div className="mb-8 p-4 bg-teal-50 dark:bg-teal-900/30 rounded-xl">
                <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  미래 전망
                </h3>
                <p className="text-sm text-teal-700 dark:text-teal-300">{result.futureOutlook}</p>
              </div>
            </>
          )}

          {/* Rich Mindset specific sections */}
          {isRichMindset && (
            <>
              {/* Wealth Potential Display */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">부자 잠재력</h2>
                <div className="bg-gradient-to-r from-yellow-100 via-amber-100 to-orange-100 dark:from-yellow-900/30 dark:via-amber-900/30 dark:to-orange-900/30 rounded-xl p-6 text-center">
                  <div className="text-6xl font-bold text-amber-600 dark:text-amber-400 mb-2">{result.percentage}%</div>
                  <div className="text-sm text-amber-700 dark:text-amber-300">{result.level}</div>
                  <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-yellow-400 to-amber-500 h-3 rounded-full transition-all"
                      style={{ width: `${result.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                    점수: {result.score} / {result.maxScore}
                  </p>
                </div>
              </div>

              {/* Mindset Traits */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">마인드셋 특성</h2>
                <div className="flex flex-wrap gap-2">
                  {result.mindsetTraits.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-amber-50 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    강점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    약점
                  </h3>
                  <ul className="space-y-1">
                    {result.weaknesses.map((item) => (
                      <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Money Beliefs */}
              <div className="mb-8 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-xl">
                <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  돈에 대한 신념
                </h3>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">{result.moneyBeliefs}</p>
              </div>

              {/* Action Tips */}
              <div className="mb-8 bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  부자가 되기 위한 행동 팁
                </h3>
                <ul className="space-y-1">
                  {result.actionTips.map((tip) => (
                    <li key={tip} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Book Recommend & Future Outlook */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    추천 도서
                  </h3>
                  <p className="text-sm text-indigo-700 dark:text-indigo-300">{result.bookRecommend}</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    미래 전망
                  </h3>
                  <p className="text-sm text-purple-700 dark:text-purple-300">{result.futureOutlook}</p>
                </div>
              </div>
            </>
          )}

          {/* DISC specific sections */}
          {isDISC && (
            <>
              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">주요 특성</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    강점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    약점
                  </h3>
                  <ul className="space-y-1">
                    {result.weaknesses.map((item) => (
                      <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Communication & Work Style */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-violet-50 dark:bg-violet-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-violet-800 dark:text-violet-300 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    소통 스타일
                  </h3>
                  <p className="text-sm text-violet-700 dark:text-violet-300">{result.communicationStyle}</p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    업무 스타일
                  </h3>
                  <p className="text-sm text-indigo-700 dark:text-indigo-300">{result.workStyle}</p>
                </div>
              </div>

              {/* Stress Response */}
              <div className="mb-8 p-4 bg-orange-50 dark:bg-orange-900/30 rounded-xl">
                <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  스트레스 반응
                </h3>
                <p className="text-sm text-orange-700 dark:text-orange-300">{result.stressResponse}</p>
              </div>

              {/* Ideal Environment */}
              <div className="mb-8 p-4 bg-green-50 dark:bg-green-900/30 rounded-xl">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  이상적인 환경
                </h3>
                <p className="text-sm text-green-700 dark:text-green-300">{result.idealEnvironment}</p>
              </div>

              {/* Best & Challenge Match */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-emerald-50 dark:bg-emerald-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    잘 맞는 유형
                  </h3>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300">{result.bestMatch}</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-2">
                    어려운 유형
                  </h3>
                  <p className="text-sm text-red-700 dark:text-red-300">{result.challengeMatch}</p>
                </div>
              </div>

              {/* Tips */}
              <div className="mb-8 bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  성장을 위한 팁
                </h3>
                <ul className="space-y-1">
                  {result.tips.map((tip) => (
                    <li key={tip} className="text-sm text-purple-700 dark:text-purple-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* Enneagram specific sections */}
          {isEnneagram && (
            <>
              {/* Core Desire & Fear */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-violet-50 dark:bg-violet-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-violet-800 dark:text-violet-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    핵심 욕구
                  </h3>
                  <p className="text-sm text-violet-700 dark:text-violet-300">{result.coreDesire}</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    핵심 두려움
                  </h3>
                  <p className="text-sm text-red-700 dark:text-red-300">{result.coreFear}</p>
                </div>
              </div>

              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">주요 특성</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-purple-50 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    강점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    약점
                  </h3>
                  <ul className="space-y-1">
                    {result.weaknesses.map((item) => (
                      <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Wing Types */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    날개 유형 1
                  </h3>
                  <p className="text-sm text-indigo-700 dark:text-indigo-300">{result.wing1}</p>
                </div>
                <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    날개 유형 2
                  </h3>
                  <p className="text-sm text-pink-700 dark:text-pink-300">{result.wing2}</p>
                </div>
              </div>

              {/* Growth & Stress Path */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    성장 방향
                  </h3>
                  <p className="text-sm text-green-700 dark:text-green-300">{result.growthPath}</p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    스트레스 방향
                  </h3>
                  <p className="text-sm text-orange-700 dark:text-orange-300">{result.stressPath}</p>
                </div>
              </div>

              {/* Tips */}
              <div className="mb-8 bg-teal-50 dark:bg-teal-900/30 rounded-xl p-4">
                <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  성장을 위한 팁
                </h3>
                <ul className="space-y-1">
                  {result.tips.map((tip: string) => (
                    <li key={tip} className="text-sm text-teal-700 dark:text-teal-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Famous People */}
              <div className="mb-8 p-4 bg-slate-50 dark:bg-slate-900/30 rounded-xl">
                <h3 className="font-bold text-slate-800 dark:text-slate-300 mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  같은 유형 유명인
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300">{result.famousPeople}</p>
              </div>
            </>
          )}

          {/* EQ specific sections */}
          {isEQ && (
            <>
              {/* EQ Score Display */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">EQ 점수</h2>
                <div className="bg-gradient-to-r from-pink-100 via-rose-100 to-red-100 dark:from-pink-900/30 dark:via-rose-900/30 dark:to-red-900/30 rounded-xl p-6 text-center">
                  <div className="text-6xl font-bold text-rose-600 dark:text-rose-400 mb-2">{result.percentage}%</div>
                  <div className="text-sm text-rose-700 dark:text-rose-300">{result.level}</div>
                  <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-pink-400 to-rose-500 h-3 rounded-full transition-all"
                      style={{ width: `${result.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                    점수: {result.score} / {result.maxScore}
                  </p>
                </div>
              </div>

              {/* EQ Components */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">EQ 구성 요소</h2>
                <div className="space-y-3">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800 dark:text-gray-200">자기인식</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{result.eqComponents.selfAwareness}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-rose-500 h-2 rounded-full" style={{ width: `${result.eqComponents.selfAwareness}%` }}></div>
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800 dark:text-gray-200">자기조절</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{result.eqComponents.selfRegulation}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-rose-500 h-2 rounded-full" style={{ width: `${result.eqComponents.selfRegulation}%` }}></div>
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800 dark:text-gray-200">동기부여</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{result.eqComponents.motivation}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-rose-500 h-2 rounded-full" style={{ width: `${result.eqComponents.motivation}%` }}></div>
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800 dark:text-gray-200">공감능력</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{result.eqComponents.empathy}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-rose-500 h-2 rounded-full" style={{ width: `${result.eqComponents.empathy}%` }}></div>
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800 dark:text-gray-200">사회적 기술</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{result.eqComponents.socialSkills}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-rose-500 h-2 rounded-full" style={{ width: `${result.eqComponents.socialSkills}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Strengths */}
              <div className="mb-8 bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  강점
                </h3>
                <ul className="space-y-1">
                  {result.strengths.map((item: string) => (
                    <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Improvements */}
              <div className="mb-8 bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  EQ 향상 방법
                </h3>
                <ul className="space-y-1">
                  {result.improvements.map((item: string) => (
                    <li key={item} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Career Fit */}
              <div className="mb-8 bg-violet-50 dark:bg-violet-900/30 rounded-xl p-4">
                <h3 className="font-bold text-violet-800 dark:text-violet-300 mb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  적합한 직업
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {result.careerFit.map((career: string) => (
                    <span
                      key={career}
                      className="px-2 py-1 bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 rounded text-sm"
                    >
                      {career}
                    </span>
                  ))}
                </div>
              </div>

              {/* Relationship Advice */}
              <div className="mb-8 p-4 bg-rose-50 dark:bg-rose-900/30 rounded-xl">
                <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  관계에서의 조언
                </h3>
                <p className="text-sm text-rose-700 dark:text-rose-300">{result.relationshipAdvice}</p>
              </div>
            </>
          )}

          {/* Mental Strength specific sections */}
          {isMentalStrength && (
            <>
              {/* Mental Strength Percentage */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">멘탈 강도</h2>
                <div className="bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100 dark:from-emerald-900/30 dark:via-teal-900/30 dark:to-cyan-900/30 rounded-xl p-6 text-center">
                  <div className="text-6xl font-bold text-teal-600 dark:text-teal-400 mb-2">{result.percentage}%</div>
                  <div className="text-sm text-teal-700 dark:text-teal-300">{result.level}</div>
                  <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-emerald-400 to-teal-500 h-3 rounded-full transition-all"
                      style={{ width: `${result.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                    점수: {result.score} / {result.maxScore}
                  </p>
                </div>
              </div>

              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">주요 특성</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-teal-50 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths & Challenges */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    강점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item: string) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    도전 과제
                  </h3>
                  <ul className="space-y-1">
                    {result.challenges.map((item: string) => (
                      <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Coping Strategies */}
              <div className="mb-8 bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  대처 전략
                </h3>
                <ul className="space-y-1">
                  {result.copingStrategies.map((strategy) => (
                    <li key={strategy} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {strategy}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Daily Habits */}
              <div className="mb-8 bg-violet-50 dark:bg-violet-900/30 rounded-xl p-4">
                <h3 className="font-bold text-violet-800 dark:text-violet-300 mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  추천 일상 습관
                </h3>
                <ul className="space-y-1">
                  {result.dailyHabits.map((habit) => (
                    <li key={habit} className="text-sm text-violet-700 dark:text-violet-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {habit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Growth Tips */}
              <div className="mb-8 bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  성장을 위한 팁
                </h3>
                <ul className="space-y-1">
                  {result.growthTips.map((tip) => (
                    <li key={tip} className="text-sm text-purple-700 dark:text-purple-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* Burnout specific sections */}
          {isBurnout && (
            <>
              {/* Burnout Percentage */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">번아웃 지수</h2>
                <div className="bg-gradient-to-r from-orange-100 via-red-100 to-rose-100 dark:from-orange-900/30 dark:via-red-900/30 dark:to-rose-900/30 rounded-xl p-6 text-center">
                  <div className="text-6xl font-bold text-red-600 dark:text-red-400 mb-2">{result.percentage}%</div>
                  <div className="text-sm text-red-700 dark:text-red-300">{result.level}</div>
                  <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all ${
                        result.percentage <= 20 ? 'bg-green-500' :
                        result.percentage <= 40 ? 'bg-yellow-500' :
                        result.percentage <= 60 ? 'bg-orange-500' :
                        result.percentage <= 80 ? 'bg-red-500' : 'bg-red-700'
                      }`}
                      style={{ width: `${result.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                    점수: {result.score} / {result.maxScore}
                  </p>
                </div>
              </div>

              {/* Urgency Notice */}
              {result.urgency && (
                <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/30 rounded-xl border border-red-200 dark:border-red-800">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    긴급도
                  </h3>
                  <p className="text-sm text-red-700 dark:text-red-300">{result.urgency}</p>
                </div>
              )}

              {/* Physical & Emotional Signs */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    신체적 증상
                  </h3>
                  <ul className="space-y-1">
                    {result.physicalSigns.map((sign) => (
                      <li key={sign} className="text-sm text-orange-700 dark:text-orange-300 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> {sign}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-rose-50 dark:bg-rose-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    정서적 증상
                  </h3>
                  <ul className="space-y-1">
                    {result.emotionalSigns.map((sign) => (
                      <li key={sign} className="text-sm text-rose-700 dark:text-rose-300 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-rose-500 rounded-full"></span> {sign}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Causes */}
              <div className="mb-8 bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  가능한 원인
                </h3>
                <ul className="space-y-1">
                  {result.causes.map((cause) => (
                    <li key={cause} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> {cause}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recovery Tips */}
              <div className="mb-8 bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  회복을 위한 팁
                </h3>
                <ul className="space-y-1">
                  {result.recoveryTips.map((tip) => (
                    <li key={tip} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prevention Tips */}
              <div className="mb-8 bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  예방을 위한 팁
                </h3>
                <ul className="space-y-1">
                  {result.preventionTips.map((tip) => (
                    <li key={tip} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* Focus specific sections */}
          {isFocus && (
            <>
              {/* Focus Score Display */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">집중력 점수</h2>
                <div className="bg-gradient-to-r from-blue-100 via-cyan-100 to-teal-100 dark:from-blue-900/30 dark:via-cyan-900/30 dark:to-teal-900/30 rounded-xl p-6 text-center">
                  <div className="text-6xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">{result.percentage}%</div>
                  <div className="text-sm text-cyan-700 dark:text-cyan-300">{result.level}</div>
                  <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-400 to-cyan-500 h-3 rounded-full transition-all"
                      style={{ width: `${result.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                    점수: {result.score} / {result.maxScore}
                  </p>
                </div>
              </div>

              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">주요 특성</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item: string) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-cyan-50 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths & Challenges */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    강점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item: string) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    도전 과제
                  </h3>
                  <ul className="space-y-1">
                    {result.challenges.map((item: string) => (
                      <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Distractions */}
              <div className="mb-8 bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4">
                <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  주요 방해 요소
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {result.distractions.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-1 bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 rounded text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ideal Work Style */}
              <div className="mb-8 p-4 bg-violet-50 dark:bg-violet-900/30 rounded-xl">
                <h3 className="font-bold text-violet-800 dark:text-violet-300 mb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  이상적인 업무 스타일
                </h3>
                <p className="text-sm text-violet-700 dark:text-violet-300">{result.idealWorkStyle}</p>
              </div>

              {/* Improvement Tips */}
              <div className="mb-8 bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  집중력 향상 팁
                </h3>
                <ul className="space-y-1">
                  {result.improvementTips.map((tip) => (
                    <li key={tip} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools Recommend */}
              <div className="mb-8 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4">
                <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  추천 도구 및 앱
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {result.toolsRecommend.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Dark Triad specific sections */}
          {isDarkTriad && (
            <>
              {/* Three Traits Score */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">다크 트라이어드 점수</h2>
                <div className="space-y-4">
                  {/* Narcissism */}
                  <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold text-purple-800 dark:text-purple-300">👑 나르시시즘</h3>
                      <span className="text-purple-700 dark:text-purple-300 font-semibold">{result.narcissismLevel}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-purple-400 to-purple-600 h-3 rounded-full transition-all"
                        style={{ width: `${(result.narcissismScore / 30) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">자기애, 우월감, 관심 욕구</p>
                  </div>
                  
                  {/* Machiavellianism */}
                  <div className="bg-gray-100 dark:bg-gray-700/50 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold text-gray-800 dark:text-gray-200">🎭 마키아벨리즘</h3>
                      <span className="text-gray-700 dark:text-gray-300 font-semibold">{result.machiavellianismLevel}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-gray-400 to-gray-600 h-3 rounded-full transition-all"
                        style={{ width: `${(result.machiavellianismScore / 30) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">전략적 조종, 실용주의, 냉소</p>
                  </div>
                  
                  {/* Psychopathy */}
                  <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold text-red-800 dark:text-red-300">🔥 사이코패시</h3>
                      <span className="text-red-700 dark:text-red-300 font-semibold">{result.psychopathyLevel}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-red-400 to-red-600 h-3 rounded-full transition-all"
                        style={{ width: `${(result.psychopathyScore / 30) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-red-600 dark:text-red-400 mt-1">충동성, 스릴 추구, 낮은 공감</p>
                  </div>
                </div>
              </div>

              {/* Dominant Trait */}
              <div className="mb-8 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl text-center">
                <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-1">가장 두드러진 특성</p>
                <p className="text-xl font-bold text-indigo-800 dark:text-indigo-300">{result.dominantTrait}</p>
              </div>

              {/* Strengths */}
              <div className="mb-8 bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  강점
                </h3>
                <ul className="space-y-1">
                  {result.strengths.map((item) => (
                    <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warnings */}
              <div className="mb-8 bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  주의할 점
                </h3>
                <ul className="space-y-1">
                  {result.warnings.map((item) => (
                    <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Advice */}
              <div className="mb-8 bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  조언
                </h3>
                <ul className="space-y-1">
                  {result.advice.map((item) => (
                    <li key={item} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compatibility */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-emerald-50 dark:bg-emerald-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    잘 맞는 유형
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {result.compatibility.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 rounded text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-rose-50 dark:bg-rose-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2">
                    어려운 유형
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {result.incompatibility.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-1 bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300 rounded text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Mental Age specific sections */}
          {isMentalAge && (
            <>
              {/* Age Display */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-amber-100 via-orange-100 to-pink-100 dark:from-amber-900/30 dark:via-orange-900/30 dark:to-pink-900/30 rounded-xl p-6 text-center">
                  <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">당신의 정신연령</p>
                  <div className="text-6xl font-bold text-amber-600 dark:text-amber-400 mb-2">{result.mentalAge}세</div>
                  <div className="text-lg text-orange-700 dark:text-orange-300">{result.ageGroup} 마음</div>
                </div>
              </div>

              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">주요 특성</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-orange-50 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths */}
              <div className="mb-8 bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  강점
                </h3>
                <ul className="space-y-1">
                  {result.strengths.map((item) => (
                    <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Improvements */}
              <div className="mb-8 bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  성장 포인트
                </h3>
                <ul className="space-y-1">
                  {result.improvements.map((item) => (
                    <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Advice */}
              <div className="mb-8 bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  조언
                </h3>
                <ul className="space-y-1">
                  {result.advice.map((item) => (
                    <li key={item} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compatibility */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-emerald-50 dark:bg-emerald-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    잘 맞는 정신연령
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {result.compatibility.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 rounded text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-rose-50 dark:bg-rose-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2">
                    어려운 정신연령
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {result.incompatibility.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-1 bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300 rounded text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Hidden Talent specific sections */}
          {isHiddenTalent && (
            <>
              {/* Talent Area Display */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-violet-100 via-purple-100 to-indigo-100 dark:from-violet-900/30 dark:via-purple-900/30 dark:to-indigo-900/30 rounded-xl p-6 text-center">
                  <p className="text-sm text-violet-700 dark:text-violet-300 mb-2">당신의 재능 분야</p>
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">{result.talentArea}</div>
                  <p className="text-lg text-indigo-700 dark:text-indigo-300">{result.subtitle}</p>
                </div>
              </div>

              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">주요 특성</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-violet-50 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths */}
              <div className="mb-8 bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  강점
                </h3>
                <ul className="space-y-1">
                  {result.strengths.map((item) => (
                    <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hidden Potential */}
              <div className="mb-8 bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  숨겨진 잠재력
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {result.hiddenPotential.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recommended Careers */}
              <div className="mb-8 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl p-4">
                <h3 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  추천 직업
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {result.recommendedCareers.map((career) => (
                    <span
                      key={career}
                      className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 rounded text-sm"
                    >
                      {career}
                    </span>
                  ))}
                </div>
              </div>

              {/* Development Tips */}
              <div className="mb-8 bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  재능 개발 팁
                </h3>
                <ul className="space-y-1">
                  {result.developmentTips.map((tip) => (
                    <li key={tip} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Famous People & Motivational Quote */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    같은 유형 유명인
                  </h3>
                  <p className="text-sm text-indigo-700 dark:text-indigo-300">{result.famousPeople}</p>
                </div>
                <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    명언
                  </h3>
                  <p className="text-sm text-pink-700 dark:text-pink-300 italic">{result.motivationalQuote}</p>
                </div>
              </div>

              {/* Compatibility */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    시너지 나는 유형
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {result.compatibility.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-rose-50 dark:bg-rose-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2">
                    상충될 수 있는 유형
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {result.incompatibility.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-1 bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300 rounded text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Communication Style specific sections */}
          {isCommunicationStyle && (
            <>
              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">주요 특성</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-sky-50 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    강점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    주의할 점
                  </h3>
                  <ul className="space-y-1">
                    {result.weaknesses.map((item) => (
                      <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Communication Tips */}
              <div className="mb-8 bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  소통 개선 팁
                </h3>
                <ul className="space-y-1">
                  {result.communicationTips.map((tip) => (
                    <li key={tip} className="text-sm text-purple-700 dark:text-purple-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Workplace & Relationship Tips */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-emerald-50 dark:bg-emerald-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    직장에서
                  </h3>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300">{result.workplaceTip}</p>
                </div>
                <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    관계에서
                  </h3>
                  <p className="text-sm text-pink-700 dark:text-pink-300">{result.relationshipTip}</p>
                </div>
              </div>

              {/* Best & Challenge With */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    잘 맞는 유형
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {result.bestWith.map((item) => (
                      <span key={item} className="px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-rose-50 dark:bg-rose-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2">어려운 유형</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {result.challengeWith.map((item) => (
                      <span key={item} className="px-2 py-1 bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300 rounded text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Leadership Type specific sections */}
          {isLeadershipType && (
            <>
              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">주요 특성</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-amber-50 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    강점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    약점
                  </h3>
                  <ul className="space-y-1">
                    {result.weaknesses.map((item) => (
                      <li key={item} className="text-sm text-orange-700 dark:text-orange-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Leadership Tips */}
              <div className="mb-8 bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  리더십 발전 팁
                </h3>
                <ul className="space-y-1">
                  {result.leadershipTips.map((tip) => (
                    <li key={tip} className="text-sm text-purple-700 dark:text-purple-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Growth Areas */}
              <div className="mb-8 bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  성장 포인트
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {result.growthAreas.map((area) => (
                    <span key={area} className="px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded text-sm">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ideal Team & Famous People */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-violet-50 dark:bg-violet-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-violet-800 dark:text-violet-300 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    이상적인 팀
                  </h3>
                  <p className="text-sm text-violet-700 dark:text-violet-300">{result.idealTeam}</p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    같은 유형 리더
                  </h3>
                  <p className="text-sm text-indigo-700 dark:text-indigo-300">{result.famousPeople}</p>
                </div>
              </div>
            </>
          )}

          {/* Creativity Index specific sections */}
          {isCreativityIndex && (
            <>
              {/* Creativity Score Display */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">창의력 지수</h2>
                <div className="bg-gradient-to-r from-fuchsia-100 via-purple-100 to-violet-100 dark:from-fuchsia-900/30 dark:via-purple-900/30 dark:to-violet-900/30 rounded-xl p-6 text-center">
                  <div className="text-6xl font-bold text-purple-600 dark:text-purple-400 mb-2">{result.percentage}%</div>
                  <div className="text-sm text-purple-700 dark:text-purple-300">{result.level}</div>
                  <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-fuchsia-400 to-purple-500 h-3 rounded-full transition-all"
                      style={{ width: `${result.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                    점수: {result.score} / {result.maxScore}
                  </p>
                </div>
              </div>

              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">주요 특성</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-purple-50 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths & Development Areas */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    강점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    개발 영역
                  </h3>
                  <ul className="space-y-1">
                    {result.developmentAreas.map((item) => (
                      <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Creativity Tips */}
              <div className="mb-8 bg-fuchsia-50 dark:bg-fuchsia-900/30 rounded-xl p-4">
                <h3 className="font-bold text-fuchsia-800 dark:text-fuchsia-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  창의력 개발 팁
                </h3>
                <ul className="space-y-1">
                  {result.creativityTips.map((tip) => (
                    <li key={tip} className="text-sm text-fuchsia-700 dark:text-fuchsia-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Activities */}
              <div className="mb-8 bg-violet-50 dark:bg-violet-900/30 rounded-xl p-4">
                <h3 className="font-bold text-violet-800 dark:text-violet-300 mb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  추천 활동/직업
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {result.recommendedActivities.map((activity) => (
                    <span key={activity} className="px-2 py-1 bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 rounded text-sm">
                      {activity}
                    </span>
                  ))}
                </div>
              </div>

              {/* Famous People */}
              <div className="mb-8 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl">
                <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  비슷한 창의력의 유명인
                </h3>
                <p className="text-sm text-indigo-700 dark:text-indigo-300">{result.famousPeople}</p>
              </div>
            </>
          )}

          {/* Inner Child specific sections */}
          {isInnerChild && (
            <>
              {/* Inner Need Display */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 dark:from-pink-900/30 dark:via-purple-900/30 dark:to-indigo-900/30 rounded-xl p-6 text-center">
                  <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">내면아이의 욕구</p>
                  <p className="text-lg font-medium text-pink-600 dark:text-pink-400">{result.innerNeed}</p>
                </div>
              </div>

              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">주요 특성</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-pink-50 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths & Wounded Aspects */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    강점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    상처받은 부분
                  </h3>
                  <ul className="space-y-1">
                    {result.woundedAspects.map((item) => (
                      <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Healing Tips */}
              <div className="mb-8 bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  치유를 위한 팁
                </h3>
                <ul className="space-y-1">
                  {result.healingTips.map((tip) => (
                    <li key={tip} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Affirmations */}
              <div className="mb-8 bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  자기 확언
                </h3>
                <ul className="space-y-1">
                  {result.affirmations.map((affirmation) => (
                    <li key={affirmation} className="text-sm text-purple-700 dark:text-purple-300 flex items-center gap-1">
                      <Heart className="w-3 h-3" /> &quot;{affirmation}&quot;
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Activities */}
              <div className="mb-8 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4">
                <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  추천 활동
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {result.recommendedActivities.map((activity) => (
                    <span key={activity} className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded text-sm">
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Flex Tendency specific sections */}
          {isFlexTendency && (
            <>
              {/* Flex Score Display */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">플렉스 지수</h2>
                <div className="bg-gradient-to-r from-yellow-100 via-amber-100 to-orange-100 dark:from-yellow-900/30 dark:via-amber-900/30 dark:to-orange-900/30 rounded-xl p-6 text-center">
                  <div className="text-6xl font-bold text-amber-600 dark:text-amber-400 mb-2">{result.flexScore}%</div>
                  <div className="text-sm text-amber-700 dark:text-amber-300">{result.subtitle}</div>
                  <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full transition-all"
                      style={{ width: `${result.flexScore}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">주요 특성</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-amber-50 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    강점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    주의할 점
                  </h3>
                  <ul className="space-y-1">
                    {result.weaknesses.map((item) => (
                      <li key={item} className="text-sm text-red-700 dark:text-red-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spending Style */}
              <div className="mb-8 p-4 bg-orange-50 dark:bg-orange-900/30 rounded-xl">
                <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  소비 스타일
                </h3>
                <p className="text-sm text-orange-700 dark:text-orange-300">{result.spendingStyle}</p>
              </div>

              {/* Finance Tips */}
              <div className="mb-8 bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  재정 관리 팁
                </h3>
                <ul className="space-y-1">
                  {result.financeTips.map((tip) => (
                    <li key={tip} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best & Worst Match */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-emerald-50 dark:bg-emerald-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    잘 맞는 유형
                  </h3>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300">{result.bestMatch}</p>
                </div>
                <div className="bg-rose-50 dark:bg-rose-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2">
                    어려운 유형
                  </h3>
                  <p className="text-sm text-rose-700 dark:text-rose-300">{result.worstMatch}</p>
                </div>
              </div>

              {/* Famous People */}
              <div className="mb-8 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl">
                <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  같은 유형 유명인
                </h3>
                <p className="text-sm text-indigo-700 dark:text-indigo-300">{result.famousPeople}</p>
              </div>
            </>
          )}

          {/* Emotion Regulation specific sections */}
          {isEmotionRegulation && (
            <>
              {/* Score Display */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">감정 조절력 지수</h2>
                <div className="bg-gradient-to-r from-teal-100 via-cyan-100 to-blue-100 dark:from-teal-900/30 dark:via-cyan-900/30 dark:to-blue-900/30 rounded-xl p-6 text-center">
                  <div className="text-6xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">{result.percentage}%</div>
                  <div className="text-sm text-cyan-700 dark:text-cyan-300">{result.level}</div>
                  <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all ${
                        result.percentage >= 80 ? 'bg-gradient-to-r from-green-400 to-emerald-500' :
                        result.percentage >= 60 ? 'bg-gradient-to-r from-blue-400 to-cyan-500' :
                        result.percentage >= 40 ? 'bg-gradient-to-r from-yellow-400 to-amber-500' :
                        'bg-gradient-to-r from-orange-400 to-red-500'
                      }`}
                      style={{ width: `${result.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                    점수: {result.score} / {result.maxScore}
                  </p>
                </div>
              </div>

              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">주요 특성</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-cyan-50 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths & Challenges */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    강점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    도전 과제
                  </h3>
                  <ul className="space-y-1">
                    {result.challenges.map((item) => (
                      <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Improvement Tips */}
              <div className="mb-8 bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  개선을 위한 팁
                </h3>
                <ul className="space-y-1">
                  {result.improvementTips.map((tip) => (
                    <li key={tip} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Daily Practices */}
              <div className="mb-8 bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  일상 실천법
                </h3>
                <ul className="space-y-1">
                  {result.dailyPractices.map((practice) => (
                    <li key={practice} className="text-sm text-purple-700 dark:text-purple-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {practice}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warning Sign */}
              <div className="mb-8 p-4 bg-orange-50 dark:bg-orange-900/30 rounded-xl border border-orange-200 dark:border-orange-800">
                <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  참고 사항
                </h3>
                <p className="text-sm text-orange-700 dark:text-orange-300">{result.warningSign}</p>
              </div>
            </>
          )}

          {/* MBTI Compatibility specific sections */}
          {isMBTICompatibility && (
            <>
              {/* Compatibility Score */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-pink-100 via-rose-100 to-red-100 dark:from-pink-900/30 dark:via-rose-900/30 dark:to-red-900/30 rounded-xl p-6 text-center">
                  <p className="text-sm text-rose-700 dark:text-rose-300 mb-2">{result.myType} & {result.partnerType}</p>
                  <div className="text-6xl font-bold text-rose-600 dark:text-rose-400 mb-2">{result.compatibilityScore}점</div>
                  <div className="text-lg text-rose-700 dark:text-rose-300">{result.compatibilityLevel}</div>
                  <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-pink-400 to-rose-500 h-3 rounded-full"
                      style={{ width: `${result.compatibilityScore}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Strengths & Challenges */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    함께할 때 좋은 점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    주의할 점
                  </h3>
                  <ul className="space-y-1">
                    {result.challenges.map((item) => (
                      <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Communication Tips */}
              <div className="mb-8 bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  소통 팁
                </h3>
                <ul className="space-y-1">
                  {result.communicationTips.map((tip) => (
                    <li key={tip} className="text-sm text-purple-700 dark:text-purple-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Conflict Resolution & Growth */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    갈등 해결
                  </h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300">{result.conflictResolution}</p>
                </div>
                <div className="bg-emerald-50 dark:bg-emerald-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    함께 성장하기
                  </h3>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300">{result.growthTogether}</p>
                </div>
              </div>
            </>
          )}

          {/* Jealousy Type specific sections */}
          {isJealousyType && (
            <>
              {/* Jealousy Score */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-rose-100 via-pink-100 to-fuchsia-100 dark:from-rose-900/30 dark:via-pink-900/30 dark:to-fuchsia-900/30 rounded-xl p-6 text-center">
                  <p className="text-sm text-rose-700 dark:text-rose-300 mb-2">질투 지수</p>
                  <div className="text-6xl font-bold text-rose-600 dark:text-rose-400 mb-2">{result.jealousyScore}%</div>
                  <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-rose-400 to-pink-500 h-3 rounded-full"
                      style={{ width: `${result.jealousyScore}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">주요 특성</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span key={item} className="px-3 py-1.5 bg-rose-50 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300 rounded-full text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    강점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    약점
                  </h3>
                  <ul className="space-y-1">
                    {result.weaknesses.map((item) => (
                      <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* In Relationship */}
              <div className="mb-8 p-4 bg-pink-50 dark:bg-pink-900/30 rounded-xl">
                <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  연애에서
                </h3>
                <p className="text-sm text-pink-700 dark:text-pink-300">{result.inRelationship}</p>
              </div>

              {/* Triggers */}
              <div className="mb-8 bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4">
                <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  질투 트리거
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {result.triggers.map((trigger) => (
                    <span key={trigger} className="px-2 py-1 bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 rounded text-sm">
                      {trigger}
                    </span>
                  ))}
                </div>
              </div>

              {/* Coping Tips */}
              <div className="mb-8 bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  대처 팁
                </h3>
                <ul className="space-y-1">
                  {result.copingTips.map((tip) => (
                    <li key={tip} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Partner Advice */}
              <div className="mb-8 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-xl">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  연인에게 한마디
                </h3>
                <p className="text-sm text-purple-700 dark:text-purple-300">{result.partnerAdvice}</p>
              </div>
            </>
          )}

          {/* Self Esteem specific sections */}
          {isSelfEsteem && (
            <>
              {/* Score Display */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-amber-100 via-yellow-100 to-orange-100 dark:from-amber-900/30 dark:via-yellow-900/30 dark:to-orange-900/30 rounded-xl p-6 text-center">
                  <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">자존감 레벨</p>
                  <div className="text-6xl font-bold text-amber-600 dark:text-amber-400 mb-2">{result.percentage}%</div>
                  <div className="text-lg text-orange-700 dark:text-orange-300">{result.level}</div>
                  <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-amber-400 to-orange-500 h-3 rounded-full"
                      style={{ width: `${result.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                    점수: {result.score} / {result.maxScore}
                  </p>
                </div>
              </div>

              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">주요 특성</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span key={item} className="px-3 py-1.5 bg-amber-50 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 rounded-full text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths & Challenges */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    강점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    도전 과제
                  </h3>
                  <ul className="space-y-1">
                    {result.challenges.map((item) => (
                      <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Growth Tips */}
              <div className="mb-8 bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  성장을 위한 팁
                </h3>
                <ul className="space-y-1">
                  {result.growthTips.map((tip) => (
                    <li key={tip} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Daily Affirmations */}
              <div className="mb-8 bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  오늘의 확언
                </h3>
                <ul className="space-y-1">
                  {result.dailyAffirmations.map((affirmation) => (
                    <li key={affirmation} className="text-sm text-purple-700 dark:text-purple-300 flex items-center gap-1">
                      <Heart className="w-3 h-3" /> &quot;{affirmation}&quot;
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Actions */}
              <div className="mb-8 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4">
                <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  추천 행동
                </h3>
                <ul className="space-y-1">
                  {result.recommendedActions.map((action) => (
                    <li key={action} className="text-sm text-indigo-700 dark:text-indigo-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {action}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warning Sign */}
              <div className="mb-8 p-4 bg-orange-50 dark:bg-orange-900/30 rounded-xl border border-orange-200 dark:border-orange-800">
                <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  참고 사항
                </h3>
                <p className="text-sm text-orange-700 dark:text-orange-300">{result.warningSign}</p>
              </div>
            </>
          )}

          {/* Villain Hero specific sections */}
          {isVillainHero && (
            <>
              {/* Score Display */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-gray-100 via-purple-100 to-gray-100 dark:from-gray-900/50 dark:via-purple-900/30 dark:to-gray-900/50 rounded-xl p-6 text-center">
                  <div className="flex justify-center gap-8 mb-4">
                    <div>
                      <p className="text-sm text-blue-600 dark:text-blue-400 mb-1">히어로</p>
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{result.heroScore}</div>
                    </div>
                    <div className="text-3xl text-gray-400">vs</div>
                    <div>
                      <p className="text-sm text-red-600 dark:text-red-400 mb-1">빌런</p>
                      <div className="text-3xl font-bold text-red-600 dark:text-red-400">{result.villainScore}</div>
                    </div>
                  </div>
                  <div className="text-lg text-purple-700 dark:text-purple-300">{result.alignment}</div>
                </div>
              </div>

              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">주요 특성</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span key={item} className="px-3 py-1.5 bg-purple-50 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths & Dark Side */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    강점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    다크 사이드
                  </h3>
                  <ul className="space-y-1">
                    {result.darkSide.map((item) => (
                      <li key={item} className="text-sm text-red-700 dark:text-red-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Movie Character & Famous Example */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-violet-50 dark:bg-violet-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-violet-800 dark:text-violet-300 mb-2 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    닮은 캐릭터
                  </h3>
                  <p className="text-sm text-violet-700 dark:text-violet-300">{result.movieCharacter}</p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    역사적 예시
                  </h3>
                  <p className="text-sm text-indigo-700 dark:text-indigo-300">{result.famousExample}</p>
                </div>
              </div>

              {/* Life Advice */}
              <div className="mb-8 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-xl">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  한마디 조언
                </h3>
                <p className="text-sm text-purple-700 dark:text-purple-300">{result.lifeAdvice}</p>
              </div>
            </>
          )}

          {/* Flirting Style specific sections */}
          {isFlirtingStyle && (
            <>
              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">주요 특성</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span key={item} className="px-3 py-1.5 bg-rose-50 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300 rounded-full text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    강점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    약점
                  </h3>
                  <ul className="space-y-1">
                    {result.weaknesses.map((item) => (
                      <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Flirting Tips */}
              <div className="mb-8 bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  썸 팁
                </h3>
                <ul className="space-y-1">
                  {result.flirtingTips.map((tip) => (
                    <li key={tip} className="text-sm text-purple-700 dark:text-purple-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Signal To Look For */}
              <div className="mb-8 bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4">
                <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  체크해볼 신호
                </h3>
                <ul className="space-y-1">
                  {result.signalToLookFor.map((signal) => (
                    <li key={signal} className="text-sm text-pink-700 dark:text-pink-300 flex items-center gap-1">
                      <Heart className="w-3 h-3" /> {signal}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best & Worst Match */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    찰떡궁합
                  </h3>
                  <p className="text-sm text-green-700 dark:text-green-300">{result.bestMatch}</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-2">
                    주의할 유형
                  </h3>
                  <p className="text-sm text-red-700 dark:text-red-300">{result.worstMatch}</p>
                </div>
              </div>
            </>
          )}

          {/* T-Power specific sections */}
          {isTPower && (
            <>
              {/* Power Score Display */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-orange-100 via-red-100 to-rose-100 dark:from-orange-900/30 dark:via-red-900/30 dark:to-rose-900/30 rounded-xl p-6 text-center">
                  <p className="text-sm text-orange-700 dark:text-orange-300 mb-2">전투력</p>
                  <div className="text-6xl font-bold text-red-600 dark:text-red-400 mb-2">{result.powerScore}</div>
                  <div className="flex justify-center gap-2 text-lg">
                    <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm font-bold">{result.powerLevel}</span>
                    <span className="text-red-700 dark:text-red-300">{result.rank}</span>
                  </div>
                  <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-orange-400 to-red-500 h-3 rounded-full"
                      style={{ width: `${(result.powerScore / result.maxScore) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {result.powerScore} / {result.maxScore}
                  </p>
                </div>
              </div>

              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">주요 특성</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span key={item} className="px-3 py-1.5 bg-orange-50 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    강점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    약점
                  </h3>
                  <ul className="space-y-1">
                    {result.weaknesses.map((item) => (
                      <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Upgrade Skills */}
              <div className="mb-8 bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  레벨업 스킬
                </h3>
                <ul className="space-y-1">
                  {result.upgradeSkills.map((skill) => (
                    <li key={skill} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Famous Character & Advice */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-violet-50 dark:bg-violet-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-violet-800 dark:text-violet-300 mb-2 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    닮은 캐릭터
                  </h3>
                  <p className="text-sm text-violet-700 dark:text-violet-300">{result.famousCharacter}</p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    조언
                  </h3>
                  <p className="text-sm text-indigo-700 dark:text-indigo-300">{result.advice}</p>
                </div>
              </div>
            </>
          )}

          {/* Social Battery specific sections */}
          {isSocialBattery && (
            <>
              {/* Battery Level Display */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 dark:from-green-900/30 dark:via-emerald-900/30 dark:to-teal-900/30 rounded-xl p-6 text-center">
                  <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-2">소셜 배터리</p>
                  <div className="text-6xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">{result.percentage}%</div>
                  <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
                    <div 
                      className={`h-full transition-all ${
                        result.percentage >= 70 ? 'bg-gradient-to-r from-green-400 to-emerald-500' :
                        result.percentage >= 40 ? 'bg-gradient-to-r from-yellow-400 to-amber-500' :
                        'bg-gradient-to-r from-orange-400 to-red-500'
                      }`}
                      style={{ width: `${result.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {result.batteryLevel} / {result.maxBattery}
                  </p>
                </div>
              </div>

              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">주요 특성</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span key={item} className="px-3 py-1.5 bg-emerald-50 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths & Challenges */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    강점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    도전 과제
                  </h3>
                  <ul className="space-y-1">
                    {result.challenges.map((item) => (
                      <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Recharge Method */}
              <div className="mb-8 bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  에너지 충전 방법
                </h3>
                <ul className="space-y-1">
                  {result.rechargeMethod.map((method) => (
                    <li key={method} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {method}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal Social Life */}
              <div className="mb-8 p-4 bg-violet-50 dark:bg-violet-900/30 rounded-xl">
                <h3 className="font-bold text-violet-800 dark:text-violet-300 mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  이상적인 소셜 라이프
                </h3>
                <p className="text-sm text-violet-700 dark:text-violet-300">{result.idealSocialLife}</p>
              </div>

              {/* Tips */}
              <div className="mb-8 bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  팁
                </h3>
                <ul className="space-y-1">
                  {result.tips.map((tip) => (
                    <li key={tip} className="text-sm text-purple-700 dark:text-purple-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* Anger Style specific sections */}
          {isAngerStyle && (
            <>
              {/* 분노 점수 게이지 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <Flame className="w-5 h-5 text-red-500" />
                  분노 점수
                </h3>
                <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                  <div 
                    className="absolute h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 rounded-full transition-all duration-1000"
                    style={{ width: `${result.angerScore}%` }}
                  />
                </div>
                <p className="text-right text-sm text-gray-600 dark:text-gray-400">{result.angerScore}점</p>
              </div>

              {/* 특징 & 트리거 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4" /> 특징
                  </h3>
                  <ul className="space-y-2">
                    {result.characteristics.map((char, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-orange-500">•</span> {char}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" /> 분노 트리거
                  </h3>
                  <ul className="space-y-2">
                    {result.triggers.map((trigger, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-red-500">•</span> {trigger}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 강점 & 약점 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" /> 강점
                  </h3>
                  <ul className="space-y-2">
                    {result.strengths.map((s, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-rose-50 dark:bg-rose-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" /> 약점
                  </h3>
                  <ul className="space-y-2">
                    {result.weaknesses.map((w, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 flex-shrink-0" /> {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 대처 팁 */}
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" /> 분노 조절 팁
                </h3>
                <ul className="space-y-2">
                  {result.copingTips.map((tip, i) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <Check className="w-4 h-4 text-blue-500 flex-shrink-0" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 건강 경고 & 관계 팁 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" /> 건강 주의
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.healthWarning}</p>
                </div>
                <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" /> 관계 팁
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.relationshipTip}</p>
                </div>
              </div>
            </>
          )}

          {/* Anxiety Level specific sections */}
          {isAnxietyLevel && (
            <>
              {/* 불안 점수 게이지 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-indigo-500" />
                  불안 수준: {result.level}
                </h3>
                <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                  <div 
                    className="absolute h-full bg-gradient-to-r from-green-400 via-yellow-500 to-red-600 rounded-full transition-all duration-1000"
                    style={{ width: `${result.percentage}%` }}
                  />
                </div>
                <p className="text-right text-sm text-gray-600 dark:text-gray-400">{result.score}/{result.maxScore}점 ({result.percentage}%)</p>
              </div>

              {/* 신체적 & 정신적 증상 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-3 flex items-center gap-2">
                    <Activity className="w-4 h-4" /> 신체적 증상
                  </h3>
                  <ul className="space-y-2">
                    {result.physicalSymptoms.map((symptom, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-orange-500">•</span> {symptom}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-3 flex items-center gap-2">
                    <Brain className="w-4 h-4" /> 정신적 증상
                  </h3>
                  <ul className="space-y-2">
                    {result.mentalSymptoms.map((symptom, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-purple-500">•</span> {symptom}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 특징 */}
              <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> 특징
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((char, i) => (
                    <span key={i} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-full text-sm">
                      {char}
                    </span>
                  ))}
                </div>
              </div>

              {/* 대처 전략 */}
              <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" /> 대처 전략
                </h3>
                <ul className="space-y-2">
                  {result.copingStrategies.map((strategy, i) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" /> {strategy}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 일상 팁 */}
              <div className="bg-cyan-50 dark:bg-cyan-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-cyan-800 dark:text-cyan-300 mb-3 flex items-center gap-2">
                  <Star className="w-4 h-4" /> 일상 팁
                </h3>
                <ul className="space-y-2">
                  {result.dailyTips.map((tip, i) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <Check className="w-4 h-4 text-cyan-500 flex-shrink-0" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 전문가 도움 & 경고 신호 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" /> 전문가 도움
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.professionalHelp}</p>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" /> 경고 신호
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.warningSign}</p>
                </div>
              </div>
            </>
          )}

          {/* Conflict Style specific sections */}
          {isConflictStyle && (
            <>
              {/* 특징 */}
              <div className="bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> 특징
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((char, i) => (
                    <span key={i} className="px-3 py-1 bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 rounded-full text-sm">
                      {char}
                    </span>
                  ))}
                </div>
              </div>

              {/* 강점 & 약점 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" /> 강점
                  </h3>
                  <ul className="space-y-2">
                    {result.strengths.map((s, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-rose-50 dark:bg-rose-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" /> 약점
                  </h3>
                  <ul className="space-y-2">
                    {result.weaknesses.map((w, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 flex-shrink-0" /> {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 언제 사용 & 피해야 할 때 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" /> 사용하면 좋을 때
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.whenToUse}</p>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" /> 피해야 할 때
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.whenToAvoid}</p>
                </div>
              </div>

              {/* 개선 팁 */}
              <div className="bg-cyan-50 dark:bg-cyan-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-cyan-800 dark:text-cyan-300 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" /> 개선 팁
                </h3>
                <ul className="space-y-2">
                  {result.improvementTips.map((tip, i) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <Check className="w-4 h-4 text-cyan-500 flex-shrink-0" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 궁합 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" /> 잘 맞는 유형
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.bestMatch}</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-slate-800 dark:text-slate-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" /> 주의할 유형
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.challengeMatch}</p>
                </div>
              </div>
            </>
          )}

          {/* Combat Power specific sections */}
          {isCombatPower && (
            <>
              {/* 전투력 게이지 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <Flame className="w-5 h-5 text-red-500" />
                  전투력: {result.powerLevel}점 ({result.rank})
                </h3>
                <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                  <div 
                    className="absolute h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 rounded-full transition-all duration-1000"
                    style={{ width: `${Math.min(result.powerLevel / 100, 100)}%` }}
                  />
                </div>
              </div>

              {/* 신체 능력 스탯 */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-red-800 dark:text-red-300 mb-4 flex items-center gap-2">
                  <Zap className="w-4 h-4" /> 신체 능력 스탯
                </h3>
                <div className="space-y-3">
                  {Object.entries(result.physicalStats).map(([key, value]) => {
                    const labels: Record<string, string> = {
                      strength: '💪 근력',
                      speed: '⚡ 속도',
                      endurance: '🛡️ 지구력',
                      technique: '🎯 기술',
                      mental: '🧠 정신력'
                    };
                    return (
                      <div key={key}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-700 dark:text-gray-300">{labels[key] || key}</span>
                          <span className="text-gray-600 dark:text-gray-400">{value as number}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-red-400 to-orange-500 rounded-full"
                            style={{ width: `${value as number}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 필살기 & 약점 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2 flex items-center gap-2">
                    <Star className="w-4 h-4" /> 필살기
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.signature}</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-slate-800 dark:text-slate-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" /> 약점
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.weakness}</p>
                </div>
              </div>

              {/* 궁합 & 대결 결과 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" /> 잘 맞는 상대
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.compatibleWith}</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                    <Trophy className="w-4 h-4" /> 대결 결과
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.vsResult}</p>
                </div>
              </div>
            </>
          )}

          {/* Decision Style specific sections */}
          {isDecisionStyle && (
            <>
              {/* 결정 속도 게이지 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-500" />
                  결정 속도
                </h3>
                <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                  <div 
                    className="absolute h-full bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 rounded-full transition-all duration-1000"
                    style={{ width: `${result.decisionSpeed}%` }}
                  />
                </div>
                <p className="text-right text-sm text-gray-600 dark:text-gray-400">{result.decisionSpeed}점</p>
              </div>

              {/* 특징 */}
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> 특징
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((char, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                      {char}
                    </span>
                  ))}
                </div>
              </div>

              {/* 강점 & 약점 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" /> 강점
                  </h3>
                  <ul className="space-y-2">
                    {result.strengths.map((s, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-rose-50 dark:bg-rose-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" /> 약점
                  </h3>
                  <ul className="space-y-2">
                    {result.weaknesses.map((w, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 flex-shrink-0" /> {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 적합한 결정 & 피해야 할 결정 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-cyan-50 dark:bg-cyan-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-cyan-800 dark:text-cyan-300 mb-3 flex items-center gap-2">
                    <Check className="w-4 h-4" /> 적합한 결정
                  </h3>
                  <ul className="space-y-2">
                    {result.bestFor.map((item, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-cyan-500">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" /> 피해야 할 결정
                  </h3>
                  <ul className="space-y-2">
                    {result.worstFor.map((item, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-amber-500">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 개선 팁 */}
              <div className="bg-teal-50 dark:bg-teal-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" /> 개선 팁
                </h3>
                <ul className="space-y-2">
                  {result.improvementTips.map((tip, i) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <Check className="w-4 h-4 text-teal-500 flex-shrink-0" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 유명인 예시 */}
              <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4" /> 유명인 예시
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{result.famousExample}</p>
              </div>
            </>
          )}

          {/* Drinking Style specific sections */}
          {isDrinkingStyle && (
            <>
              {/* 주량 게이지 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <Wine className="w-5 h-5 text-amber-500" />
                  주량 레벨
                </h3>
                <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                  <div 
                    className="absolute h-full bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-full transition-all duration-1000"
                    style={{ width: `${result.alcoholTolerance}%` }}
                  />
                </div>
                <p className="text-right text-sm text-gray-600 dark:text-gray-400">{result.alcoholTolerance}점</p>
              </div>

              {/* 특징 */}
              <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> 특징
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((char, i) => (
                    <span key={i} className="px-3 py-1 bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 rounded-full text-sm">
                      {char}
                    </span>
                  ))}
                </div>
              </div>

              {/* TMI & 주의사항 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-3 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" /> 술자리 TMI
                  </h3>
                  <ul className="space-y-2">
                    {result.funFacts.map((fact, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-yellow-500">😂</span> {fact}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" /> 주의사항
                  </h3>
                  <ul className="space-y-2">
                    {result.warnings.map((warning, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-red-500">⚠️</span> {warning}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 궁합 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" /> 잘 맞는 술친구
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.bestWith}</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-slate-800 dark:text-slate-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" /> 주의할 술친구
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.worstWith}</p>
                </div>
              </div>

              {/* 시그니처 & 다음날 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                    <Star className="w-4 h-4" /> 시그니처 드링크
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">🍸 {result.signatureDrink}</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Coffee className="w-4 h-4" /> 다음날 아침
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.morningAfter}</p>
                </div>
              </div>
            </>
          )}

          {/* First Impression specific sections */}
          {isFirstImpression && (
            <>
              {/* 친근함 게이지 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-pink-500" />
                  친근함 지수
                </h3>
                <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                  <div 
                    className="absolute h-full bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 rounded-full transition-all duration-1000"
                    style={{ width: `${result.approachability}%` }}
                  />
                </div>
                <p className="text-right text-sm text-gray-600 dark:text-gray-400">{result.approachability}점</p>
              </div>

              {/* 특징 */}
              <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> 특징
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((char, i) => (
                    <span key={i} className="px-3 py-1 bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300 rounded-full text-sm">
                      {char}
                    </span>
                  ))}
                </div>
              </div>

              {/* 첫마디 */}
              <div className="bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-3 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" /> 자주 하는 첫마디
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.firstWords.map((word, i) => (
                    <span key={i} className="px-3 py-1 bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 rounded-full text-sm">
                      &quot;{word}&quot;
                    </span>
                  ))}
                </div>
              </div>

              {/* 강점 & 오해 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" /> 강점
                  </h3>
                  <ul className="space-y-2">
                    {result.strengths.map((s, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" /> 받을 수 있는 오해
                  </h3>
                  <ul className="space-y-2">
                    {result.misunderstandings.map((m, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-amber-500">•</span> {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 팁 */}
              <div className="bg-cyan-50 dark:bg-cyan-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-cyan-800 dark:text-cyan-300 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" /> 인상 관리 팁
                </h3>
                <ul className="space-y-2">
                  {result.tips.map((tip, i) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <Check className="w-4 h-4 text-cyan-500 flex-shrink-0" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 궁합 & 닮은 연예인 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" /> 잘 맞는 타입
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.bestMatch}</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                    <Star className="w-4 h-4" /> 닮은 연예인
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.celebrityMatch}</p>
                </div>
              </div>
            </>
          )}

          {/* Friendship Style specific sections */}
          {isFriendshipStyle && (
            <>
              {/* 충성도 게이지 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-teal-500" />
                  충성도 지수
                </h3>
                <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                  <div 
                    className="absolute h-full bg-gradient-to-r from-cyan-400 via-teal-500 to-emerald-500 rounded-full transition-all duration-1000"
                    style={{ width: `${result.loyaltyScore}%` }}
                  />
                </div>
                <p className="text-right text-sm text-gray-600 dark:text-gray-400">{result.loyaltyScore}점</p>
              </div>

              {/* 특징 */}
              <div className="bg-teal-50 dark:bg-teal-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> 특징
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((char, i) => (
                    <span key={i} className="px-3 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 rounded-full text-sm">
                      {char}
                    </span>
                  ))}
                </div>
              </div>

              {/* 강점 & 약점 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" /> 강점
                  </h3>
                  <ul className="space-y-2">
                    {result.strengths.map((s, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-rose-50 dark:bg-rose-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" /> 약점
                  </h3>
                  <ul className="space-y-2">
                    {result.weaknesses.map((w, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 flex-shrink-0" /> {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 궁합 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-cyan-50 dark:bg-cyan-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" /> 잘 맞는 친구 유형
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.bestFriendType}</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-slate-800 dark:text-slate-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" /> 주의할 친구 유형
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.worstFriendType}</p>
                </div>
              </div>

              {/* 우정 조언 */}
              <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" /> 우정 조언
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{result.friendshipAdvice}</p>
              </div>

              {/* 유명인 예시 */}
              <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4" /> 유명인 예시
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{result.famousExample}</p>
              </div>
            </>
          )}

          {/* Gaslighting Check specific sections */}
          {isGaslightingCheck && (
            <>
              {/* 위험도 게이지 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-gray-500" />
                  위험 지수
                </h3>
                <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                  <div 
                    className="absolute h-full bg-gradient-to-r from-green-400 via-yellow-500 to-red-600 rounded-full transition-all duration-1000"
                    style={{ width: `${result.riskScore}%` }}
                  />
                </div>
                <p className="text-right text-sm text-gray-600 dark:text-gray-400">{result.riskScore}점</p>
              </div>

              {/* 징후 */}
              {result.signs.length > 0 && (
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4 mb-6">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" /> 나타나는 징후
                  </h3>
                  <ul className="space-y-2">
                    {result.signs.map((sign, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-amber-500">⚠️</span> {sign}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 영향 */}
              {result.effects.length > 0 && (
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4 mb-6">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" /> 받는 영향
                  </h3>
                  <ul className="space-y-2">
                    {result.effects.map((effect, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-red-500">•</span> {effect}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 조언 */}
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" /> 조언
                </h3>
                <ul className="space-y-2">
                  {result.advice.map((adv, i) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <Check className="w-4 h-4 text-blue-500 flex-shrink-0" /> {adv}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 도움 자원 */}
              {result.resources.length > 0 && (
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4 mb-6">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4" /> 도움받을 수 있는 곳
                  </h3>
                  <ul className="space-y-2">
                    {result.resources.map((resource, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-green-500">📞</span> {resource}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 중요 메시지 */}
              <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" /> 중요한 메시지
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{result.importantMessage}</p>
              </div>
            </>
          )}

          {/* Humor Type specific sections */}
          {isHumorType && (
            <>
              {/* 재미 점수 게이지 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <Smile className="w-5 h-5 text-yellow-500" />
                  재미 점수
                </h3>
                <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                  <div 
                    className="absolute h-full bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 rounded-full transition-all duration-1000"
                    style={{ width: `${result.funnyScore}%` }}
                  />
                </div>
                <p className="text-right text-sm text-gray-600 dark:text-gray-400">{result.funnyScore}점</p>
              </div>

              {/* 특징 */}
              <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> 특징
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((char, i) => (
                    <span key={i} className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300 rounded-full text-sm">
                      {char}
                    </span>
                  ))}
                </div>
              </div>

              {/* 강점 & 약점 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" /> 강점
                  </h3>
                  <ul className="space-y-2">
                    {result.strengths.map((s, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-rose-50 dark:bg-rose-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" /> 약점
                  </h3>
                  <ul className="space-y-2">
                    {result.weaknesses.map((w, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 flex-shrink-0" /> {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 청중 궁합 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-cyan-50 dark:bg-cyan-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" /> 잘 맞는 청중
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.bestAudience}</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-slate-800 dark:text-slate-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" /> 주의할 청중
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.worstAudience}</p>
                </div>
              </div>

              {/* 재미있는 예시 */}
              <div className="bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-3 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" /> 유머 예시
                </h3>
                <ul className="space-y-2">
                  {result.funnyExamples.map((example, i) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-orange-500">😂</span> {example}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 개선 팁 */}
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" /> 유머 스킬 업 팁
                </h3>
                <ul className="space-y-2">
                  {result.improveTips.map((tip, i) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <Check className="w-4 h-4 text-blue-500 flex-shrink-0" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 닮은 연예인 */}
              <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4" /> 닮은 연예인
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{result.celebrityMatch}</p>
              </div>
            </>
          )}

          {/* Introvert/Extrovert specific sections */}
          {isIntrovertExtrovert && (
            <>
              {/* 성향 게이지 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-purple-500" />
                  성향 지수
                </h3>
                <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                  <div 
                    className="absolute h-full bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                    style={{ width: `${result.percentage}%` }}
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>내향</span>
                  <span>{result.percentage}%</span>
                  <span>외향</span>
                </div>
              </div>

              {/* 특징 */}
              <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> 특징
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((char, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                      {char}
                    </span>
                  ))}
                </div>
              </div>

              {/* 강점 & 도전 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" /> 강점
                  </h3>
                  <ul className="space-y-2">
                    {result.strengths.map((s, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" /> 도전 과제
                  </h3>
                  <ul className="space-y-2">
                    {result.challenges.map((c, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-amber-500">•</span> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 에너지 충전 & 소모 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-cyan-50 dark:bg-cyan-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4" /> 에너지 충전
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.energySource}</p>
                </div>
                <div className="bg-rose-50 dark:bg-rose-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2 flex items-center gap-2">
                    <Activity className="w-4 h-4" /> 에너지 소모
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.energyDrain}</p>
                </div>
              </div>

              {/* 이상적인 환경 */}
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                  <Home className="w-4 h-4" /> 이상적인 환경
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{result.idealEnvironment}</p>
              </div>

              {/* 사교 팁 */}
              <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" /> 사교 팁
                </h3>
                <ul className="space-y-2">
                  {result.socialTips.map((tip, i) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <Check className="w-4 h-4 text-pink-500 flex-shrink-0" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 추천 직업 */}
              <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-3 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" /> 추천 직업
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.careerSuggestions.map((career, i) => (
                    <span key={i} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-full text-sm">
                      {career}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Life Graph specific sections */}
          {isLifeGraph && (
            <>
              {/* 인생 점수 게이지 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  인생 점수
                </h3>
                <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                  <div 
                    className="absolute h-full bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 rounded-full transition-all duration-1000"
                    style={{ width: `${result.lifeScore}%` }}
                  />
                </div>
                <p className="text-right text-sm text-gray-600 dark:text-gray-400">{result.lifeScore}점</p>
              </div>

              {/* 그래프 패턴 */}
              <div className="bg-teal-50 dark:bg-teal-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-2 flex items-center gap-2">
                  <Activity className="w-4 h-4" /> 그래프 패턴
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{result.graphPattern}</p>
              </div>

              {/* 현재 & 과거 & 미래 */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> 현재
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.currentPhase}</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-slate-800 dark:text-slate-300 mb-2 flex items-center gap-2">
                    <History className="w-4 h-4" /> 과거 분석
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.pastAnalysis}</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" /> 미래 전망
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.futureOutlook}</p>
                </div>
              </div>

              {/* 중요한 순간들 */}
              <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-3 flex items-center gap-2">
                  <Star className="w-4 h-4" /> 중요한 순간들
                </h3>
                <ul className="space-y-2">
                  {result.keyMoments.map((moment, i) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-purple-500">✨</span> {moment}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 강점 */}
              <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
                  <ThumbsUp className="w-4 h-4" /> 강점
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.strengths.map((s, i) => (
                    <span key={i} className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded-full text-sm">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* 조언 */}
              <div className="bg-cyan-50 dark:bg-cyan-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-cyan-800 dark:text-cyan-300 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" /> 조언
                </h3>
                <ul className="space-y-2">
                  {result.advice.map((adv, i) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <Check className="w-4 h-4 text-cyan-500 flex-shrink-0" /> {adv}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 확언 */}
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" /> 오늘의 확언
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 italic">&quot;{result.affirmation}&quot;</p>
              </div>
            </>
          )}

          {/* Love Trauma specific sections */}
          {isLoveTrauma && (
            <>
              {/* 트라우마 점수 게이지 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-rose-500" />
                  트라우마 지수
                </h3>
                <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                  <div 
                    className="absolute h-full bg-gradient-to-r from-green-400 via-yellow-500 to-red-600 rounded-full transition-all duration-1000"
                    style={{ width: `${result.traumaScore}%` }}
                  />
                </div>
                <p className="text-right text-sm text-gray-600 dark:text-gray-400">{result.traumaScore}점</p>
              </div>

              {/* 증상 */}
              {result.symptoms.length > 0 && (
                <div className="bg-rose-50 dark:bg-rose-900/30 rounded-xl p-4 mb-6">
                  <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" /> 나타나는 증상
                  </h3>
                  <ul className="space-y-2">
                    {result.symptoms.map((symptom, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-rose-500">•</span> {symptom}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 근본 원인 */}
              {result.rootCauses.length > 0 && (
                <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4 mb-6">
                  <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-3 flex items-center gap-2">
                    <Brain className="w-4 h-4" /> 근본 원인
                  </h3>
                  <ul className="space-y-2">
                    {result.rootCauses.map((cause, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-purple-500">•</span> {cause}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 치유 단계 */}
              <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" /> 치유 단계
                </h3>
                <ul className="space-y-2">
                  {result.healingSteps.map((step, i) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" /> {step}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 자기 돌봄 & 관계 조언 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-cyan-50 dark:bg-cyan-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-cyan-800 dark:text-cyan-300 mb-3 flex items-center gap-2">
                    <Heart className="w-4 h-4" /> 자기 돌봄 조언
                  </h3>
                  <ul className="space-y-2">
                    {result.selfCareAdvice.map((advice, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-cyan-500">💙</span> {advice}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4" /> 관계 조언
                  </h3>
                  <ul className="space-y-2">
                    {result.relationshipAdvice.map((advice, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-pink-500">💕</span> {advice}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 전문가 도움 */}
              {result.professionalHelp && (
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4 mb-6">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" /> 전문가 도움 권장
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">전문 상담사와의 상담을 권장합니다.</p>
                </div>
              )}

              {/* 확언 */}
              <div className="bg-gradient-to-r from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4" /> 오늘의 확언
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 italic">&quot;{result.affirmation}&quot;</p>
              </div>
            </>
          )}

          {/* People Pleaser specific sections */}
          {isPeoplePleser && (
            <>
              {/* 눈치 점수 게이지 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-violet-500" />
                  눈치 지수
                </h3>
                <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                  <div 
                    className="absolute h-full bg-gradient-to-r from-green-400 via-yellow-500 to-red-600 rounded-full transition-all duration-1000"
                    style={{ width: `${result.pleaseScore}%` }}
                  />
                </div>
                <p className="text-right text-sm text-gray-600 dark:text-gray-400">{result.pleaseScore}점</p>
              </div>

              {/* 특징 */}
              <div className="bg-violet-50 dark:bg-violet-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-violet-800 dark:text-violet-300 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> 특징
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((char, i) => (
                    <span key={i} className="px-3 py-1 bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 rounded-full text-sm">
                      {char}
                    </span>
                  ))}
                </div>
              </div>

              {/* 원인 & 영향 */}
              {result.causes.length > 0 && (
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                    <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-3 flex items-center gap-2">
                      <Brain className="w-4 h-4" /> 원인
                    </h3>
                    <ul className="space-y-2">
                      {result.causes.map((cause, i) => (
                        <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                          <span className="text-purple-500">•</span> {cause}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                    <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-3 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" /> 영향
                    </h3>
                    <ul className="space-y-2">
                      {result.effects.map((effect, i) => (
                        <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                          <span className="text-amber-500">•</span> {effect}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* 회복 단계 */}
              <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" /> 회복 단계
                </h3>
                <ul className="space-y-2">
                  {result.recoverySteps.map((step, i) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" /> {step}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 경계 설정 팁 */}
              <div className="bg-cyan-50 dark:bg-cyan-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-cyan-800 dark:text-cyan-300 mb-3 flex items-center gap-2">
                  <Shield className="w-4 h-4" /> 경계 설정 팁
                </h3>
                <ul className="space-y-2">
                  {result.boundaryTips.map((tip, i) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <Check className="w-4 h-4 text-cyan-500 flex-shrink-0" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 자기 돌봄 조언 */}
              <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-3 flex items-center gap-2">
                  <Heart className="w-4 h-4" /> 자기 돌봄 조언
                </h3>
                <ul className="space-y-2">
                  {result.selfCareAdvice.map((advice, i) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-pink-500">💙</span> {advice}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 확언 */}
              <div className="bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-violet-800 dark:text-violet-300 mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4" /> 오늘의 확언
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 italic">&quot;{result.affirmation}&quot;</p>
              </div>
            </>
          )}

          {/* Personality Duality specific sections */}
          {isPersonalityDuality && (
            <>
              {/* 이중성 점수 게이지 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-slate-500" />
                  이중성 지수
                </h3>
                <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                  <div 
                    className="absolute h-full bg-gradient-to-r from-green-400 via-gray-500 to-purple-600 rounded-full transition-all duration-1000"
                    style={{ width: `${result.dualityScore}%` }}
                  />
                </div>
                <p className="text-right text-sm text-gray-600 dark:text-gray-400">{result.dualityScore}점</p>
              </div>

              {/* 공적 자아 & 사적 자아 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" /> 공적인 모습
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.publicSelf}</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                    <Home className="w-4 h-4" /> 사적인 모습
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.privateSelf}</p>
                </div>
              </div>

              {/* 특징 */}
              <div className="bg-slate-50 dark:bg-slate-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-slate-800 dark:text-slate-300 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> 특징
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((char, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 rounded-full text-sm">
                      {char}
                    </span>
                  ))}
                </div>
              </div>

              {/* 강점 & 도전 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" /> 강점
                  </h3>
                  <ul className="space-y-2">
                    {result.strengths.map((s, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" /> 도전 과제
                  </h3>
                  <ul className="space-y-2">
                    {result.challenges.map((c, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-amber-500">•</span> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 조언 & 균형 팁 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-cyan-50 dark:bg-cyan-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-cyan-800 dark:text-cyan-300 mb-3 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" /> 조언
                  </h3>
                  <ul className="space-y-2">
                    {result.advice.map((adv, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <Check className="w-4 h-4 text-cyan-500 flex-shrink-0" /> {adv}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-3 flex items-center gap-2">
                    <Star className="w-4 h-4" /> 균형 팁
                  </h3>
                  <ul className="space-y-2">
                    {result.balanceTips.map((tip, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-pink-500">⚖️</span> {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}

          {/* Procrastination specific sections */}
          {isProcrastination && (
            <>
              {/* 미루기 점수 게이지 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-500" />
                  미루기 지수
                </h3>
                <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                  <div 
                    className="absolute h-full bg-gradient-to-r from-green-400 via-yellow-500 to-red-600 rounded-full transition-all duration-1000"
                    style={{ width: `${result.procrastinationScore}%` }}
                  />
                </div>
                <p className="text-right text-sm text-gray-600 dark:text-gray-400">{result.procrastinationScore}점</p>
              </div>

              {/* 특징 */}
              <div className="bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> 특징
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((char, i) => (
                    <span key={i} className="px-3 py-1 bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 rounded-full text-sm">
                      {char}
                    </span>
                  ))}
                </div>
              </div>

              {/* 원인 & 영향 */}
              {result.causes.length > 0 && (
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                    <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-3 flex items-center gap-2">
                      <Brain className="w-4 h-4" /> 원인
                    </h3>
                    <ul className="space-y-2">
                      {result.causes.map((cause, i) => (
                        <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                          <span className="text-purple-500">•</span> {cause}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                    <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-3 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" /> 영향
                    </h3>
                    <ul className="space-y-2">
                      {result.effects.map((effect, i) => (
                        <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                          <span className="text-amber-500">•</span> {effect}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* 극복 팁 */}
              <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" /> 극복 팁
                </h3>
                <ul className="space-y-2">
                  {result.overcomingTips.map((tip, i) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 추천 도구 */}
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Wrench className="w-4 h-4" /> 추천 도구
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.tools.map((tool, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                      🛠️ {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* 동기부여 */}
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 dark:from-orange-900/30 dark:to-yellow-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4" /> 동기부여
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 italic">&quot;{result.motivation}&quot;</p>
              </div>
            </>
          )}

          {/* Sleep Type specific sections */}
          {isSleepType && (
            <>
              {/* 수면 점수 게이지 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <Moon className="w-5 h-5 text-indigo-500" />
                  수면 점수
                </h3>
                <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                  <div 
                    className="absolute h-full bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                    style={{ width: `${result.sleepScore}%` }}
                  />
                </div>
                <p className="text-right text-sm text-gray-600 dark:text-gray-400">{result.sleepScore}점</p>
              </div>

              {/* 크로노타입 & 피크 시간 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Sun className="w-4 h-4" /> 크로노타입
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.chronotype}</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4" /> 피크 시간
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.peakHours}</p>
                </div>
              </div>

              {/* 특징 */}
              <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> 특징
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((char, i) => (
                    <span key={i} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-full text-sm">
                      {char}
                    </span>
                  ))}
                </div>
              </div>

              {/* 이상적인 스케줄 */}
              <div className="bg-cyan-50 dark:bg-cyan-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-cyan-800 dark:text-cyan-300 mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4" /> 이상적인 스케줄
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{result.idealSchedule}</p>
              </div>

              {/* 강점 & 도전 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" /> 강점
                  </h3>
                  <ul className="space-y-2">
                    {result.strengths.map((s, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" /> 도전 과제
                  </h3>
                  <ul className="space-y-2">
                    {result.challenges.map((c, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-amber-500">•</span> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 개선 팁 */}
              <div className="bg-teal-50 dark:bg-teal-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" /> 수면 개선 팁
                </h3>
                <ul className="space-y-2">
                  {result.improvementTips.map((tip, i) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <Check className="w-4 h-4 text-teal-500 flex-shrink-0" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 건강 조언 */}
              <div className="bg-rose-50 dark:bg-rose-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" /> 건강 조언
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{result.healthAdvice}</p>
              </div>
            </>
          )}

          {/* SNS Personality specific sections */}
          {isSnsPersonality && (
            <>
              {/* SNS 점수 게이지 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-pink-500" />
                  SNS 지수
                </h3>
                <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                  <div 
                    className="absolute h-full bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 rounded-full transition-all duration-1000"
                    style={{ width: `${result.snsScore}%` }}
                  />
                </div>
                <p className="text-right text-sm text-gray-600 dark:text-gray-400">{result.snsScore}점</p>
              </div>

              {/* 특징 */}
              <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> 특징
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((char, i) => (
                    <span key={i} className="px-3 py-1 bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300 rounded-full text-sm">
                      {char}
                    </span>
                  ))}
                </div>
              </div>

              {/* 포스팅 & 인터랙션 스타일 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                    <Edit3 className="w-4 h-4" /> 포스팅 스타일
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.postingStyle}</p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" /> 인터랙션 스타일
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.interactionStyle}</p>
                </div>
              </div>

              {/* 강점 & 주의사항 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" /> 강점
                  </h3>
                  <ul className="space-y-2">
                    {result.strengths.map((s, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" /> 주의사항
                  </h3>
                  <ul className="space-y-2">
                    {result.watchOuts.map((w, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-amber-500">⚠️</span> {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 디톡스 & 건강한 사용 팁 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-cyan-50 dark:bg-cyan-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-cyan-800 dark:text-cyan-300 mb-3 flex items-center gap-2">
                    <RefreshCw className="w-4 h-4" /> 디톡스 팁
                  </h3>
                  <ul className="space-y-2">
                    {result.detoxTips.map((tip, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-cyan-500">🌿</span> {tip}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
                    <Heart className="w-4 h-4" /> 건강한 사용 팁
                  </h3>
                  <ul className="space-y-2">
                    {result.healthyUsageTips.map((tip, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <Check className="w-4 h-4 text-blue-500 flex-shrink-0" /> {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}

          {/* Spending Type specific sections */}
          {isSpendingType && (
            <>
              {/* 저축 점수 게이지 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-emerald-500" />
                  저축 점수
                </h3>
                <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                  <div 
                    className="absolute h-full bg-gradient-to-r from-red-400 via-yellow-500 to-emerald-500 rounded-full transition-all duration-1000"
                    style={{ width: `${result.savingScore}%` }}
                  />
                </div>
                <p className="text-right text-sm text-gray-600 dark:text-gray-400">{result.savingScore}점</p>
              </div>

              {/* 특징 */}
              <div className="bg-emerald-50 dark:bg-emerald-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-emerald-800 dark:text-emerald-300 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> 특징
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((char, i) => (
                    <span key={i} className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 rounded-full text-sm">
                      {char}
                    </span>
                  ))}
                </div>
              </div>

              {/* 강점 & 약점 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" /> 강점
                  </h3>
                  <ul className="space-y-2">
                    {result.strengths.map((s, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-rose-50 dark:bg-rose-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" /> 약점
                  </h3>
                  <ul className="space-y-2">
                    {result.weaknesses.map((w, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 flex-shrink-0" /> {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 돈 습관 */}
              <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-3 flex items-center gap-2">
                  <DollarSign className="w-4 h-4" /> 돈 습관
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.moneyHabits.map((habit, i) => (
                    <span key={i} className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300 rounded-full text-sm">
                      💰 {habit}
                    </span>
                  ))}
                </div>
              </div>

              {/* 개선 팁 */}
              <div className="bg-cyan-50 dark:bg-cyan-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-cyan-800 dark:text-cyan-300 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" /> 개선 팁
                </h3>
                <ul className="space-y-2">
                  {result.improvementTips.map((tip, i) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <Check className="w-4 h-4 text-cyan-500 flex-shrink-0" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 예산 조언 & 장기 전망 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4" /> 예산 조언
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.budgetAdvice}</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" /> 장기 전망
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.longTermOutlook}</p>
                </div>
              </div>
            </>
          )}

          {/* Tarot Today specific sections */}
          {isTarotToday && (
            <>
              {/* 카드 정보 */}
              <div className="bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl p-6 mb-6">
                <div className="text-center">
                  <p className="text-sm text-purple-600 dark:text-purple-400 mb-1">{result.card}</p>
                  <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-300 mb-2">{result.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">{result.imageDescription}</p>
                </div>
              </div>

              {/* 카드 의미 & 오늘의 메시지 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-violet-50 dark:bg-violet-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-violet-800 dark:text-violet-300 mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> 카드 의미
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.meaning}</p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" /> 오늘의 메시지
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.todayMessage}</p>
                </div>
              </div>

              {/* 사랑 & 커리어 & 건강 조언 */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" /> 사랑 운세
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.loveAdvice}</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" /> 직장 운세
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.careerAdvice}</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                    <Activity className="w-4 h-4" /> 건강 운세
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.healthAdvice}</p>
                </div>
              </div>

              {/* 행운 아이템 */}
              <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-3 flex items-center gap-2">
                  <Star className="w-4 h-4" /> 오늘의 행운
                </h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">행운 아이템</p>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">🍀 {result.luckyItem}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">행운 컬러</p>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">🎨 {result.luckyColor}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">행운 숫자</p>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">🔢 {result.luckyNumber}</p>
                  </div>
                </div>
              </div>

              {/* 주의사항 */}
              <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> 오늘의 주의사항
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{result.warning}</p>
              </div>

              {/* 확언 */}
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> 오늘의 확언
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 italic">&quot;{result.affirmation}&quot;</p>
              </div>
            </>
          )}

          {/* Toxic Check specific sections */}
          {isToxicCheck && (
            <>
              {/* 독성 점수 게이지 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  독성 지수
                </h3>
                <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                  <div 
                    className="absolute h-full bg-gradient-to-r from-green-400 via-yellow-500 to-red-600 rounded-full transition-all duration-1000"
                    style={{ width: `${result.toxicScore}%` }}
                  />
                </div>
                <p className="text-right text-sm text-gray-600 dark:text-gray-400">{result.toxicScore}점</p>
              </div>

              {/* 위험 신호 */}
              {result.redFlags.length > 0 && (
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4 mb-6">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" /> 위험 신호
                  </h3>
                  <ul className="space-y-2">
                    {result.redFlags.map((flag, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-red-500">🚩</span> {flag}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 영향 */}
              <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> 받는 영향
                </h3>
                <ul className="space-y-2">
                  {result.effects.map((effect, i) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-amber-500">•</span> {effect}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 조언 */}
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" /> 조언
                </h3>
                <ul className="space-y-2">
                  {result.advice.map((adv, i) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <Check className="w-4 h-4 text-blue-500 flex-shrink-0" /> {adv}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 경계 설정 팁 */}
              <div className="bg-cyan-50 dark:bg-cyan-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-cyan-800 dark:text-cyan-300 mb-3 flex items-center gap-2">
                  <Shield className="w-4 h-4" /> 경계 설정 팁
                </h3>
                <ul className="space-y-2">
                  {result.boundaryTips.map((tip, i) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <Check className="w-4 h-4 text-cyan-500 flex-shrink-0" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 도움 자원 */}
              {result.resources.length > 0 && (
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4 mb-6">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4" /> 도움받을 수 있는 곳
                  </h3>
                  <ul className="space-y-2">
                    {result.resources.map((resource, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-green-500">📞</span> {resource}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 중요 메시지 */}
              <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" /> 중요한 메시지
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{result.importantMessage}</p>
              </div>
            </>
          )}

          {/* Trauma Check specific sections */}
          {isTraumaCheck && (
            <>
              {/* 트라우마 점수 게이지 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-slate-500" />
                  트라우마 지수
                </h3>
                <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                  <div 
                    className="absolute h-full bg-gradient-to-r from-green-400 via-yellow-500 to-red-600 rounded-full transition-all duration-1000"
                    style={{ width: `${result.traumaScore}%` }}
                  />
                </div>
                <p className="text-right text-sm text-gray-600 dark:text-gray-400">{result.traumaScore}점</p>
              </div>

              {/* 위기 경고 */}
              {result.crisis && (
                <div className="bg-red-100 dark:bg-red-900/50 border-2 border-red-500 rounded-xl p-4 mb-6">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" /> 긴급 안내
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    힘든 상황에 계신 것 같습니다. 전문가의 도움이 필요합니다.<br/>
                    자살예방상담전화: 1393 | 정신건강위기상담전화: 1577-0199
                  </p>
                </div>
              )}

              {/* 증상 */}
              {result.symptoms.length > 0 && (
                <div className="bg-slate-50 dark:bg-slate-900/30 rounded-xl p-4 mb-6">
                  <h3 className="font-bold text-slate-800 dark:text-slate-300 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" /> 나타나는 증상
                  </h3>
                  <ul className="space-y-2">
                    {result.symptoms.map((symptom, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-slate-500">•</span> {symptom}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 영향 */}
              <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> 받는 영향
                </h3>
                <ul className="space-y-2">
                  {result.effects.map((effect, i) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-amber-500">•</span> {effect}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 치유 단계 */}
              <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" /> 치유 단계
                </h3>
                <ul className="space-y-2">
                  {result.healingSteps.map((step, i) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" /> {step}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 자기 돌봄 조언 */}
              <div className="bg-cyan-50 dark:bg-cyan-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-cyan-800 dark:text-cyan-300 mb-3 flex items-center gap-2">
                  <Heart className="w-4 h-4" /> 자기 돌봄 조언
                </h3>
                <ul className="space-y-2">
                  {result.selfCareAdvice.map((advice, i) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-cyan-500">💙</span> {advice}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 전문가 도움 */}
              {result.professionalHelp && (
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 mb-6">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" /> 전문가 도움 권장
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    전문 상담사나 심리치료사와의 상담을 권장합니다.
                  </p>
                </div>
              )}

              {/* 도움 자원 */}
              {result.resources.length > 0 && (
                <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4 mb-6">
                  <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-3 flex items-center gap-2">
                    <Phone className="w-4 h-4" /> 도움받을 수 있는 곳
                  </h3>
                  <ul className="space-y-2">
                    {result.resources.map((resource, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-purple-500">📞</span> {resource}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 중요 메시지 */}
              <div className="bg-gradient-to-r from-slate-100 to-purple-100 dark:from-slate-900/30 dark:to-purple-900/30 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-slate-800 dark:text-slate-300 mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4" /> 중요한 메시지
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{result.importantMessage}</p>
              </div>
            </>
          )}

          {/* Push Pull specific sections */}
          {isPushPull && (
            <>
              {/* 밀당력 게이지 */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">밀당 능력치</h2>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">밀당 초보</span>
                    <span className="text-sm font-bold text-pink-600 dark:text-pink-400">{result.percentage}%</span>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">밀당 고수</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-4 overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-pink-400 via-rose-500 to-red-500 transition-all duration-1000"
                      style={{ width: `${result.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* 주요 특성 */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">주요 특성</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-pink-50 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* 강점 & 약점 */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" />
                    강점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    약점
                  </h3>
                  <ul className="space-y-1">
                    {result.weaknesses.map((item) => (
                      <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 연애 조언 */}
              <div className="mb-8 bg-rose-50 dark:bg-rose-900/30 rounded-xl p-4">
                <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-3 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  연애 조언
                </h3>
                <ul className="space-y-2">
                  {result.loveAdvice.map((advice, i) => (
                    <li key={i} className="text-sm text-rose-700 dark:text-rose-300 flex items-start gap-2">
                      <span className="text-rose-500">💕</span> {advice}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 이상적인 파트너 */}
              <div className="mb-8 bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  잘 맞는 파트너
                </h3>
                <p className="text-sm text-green-700 dark:text-green-300">{result.idealPartner}</p>
              </div>

              {/* 주의사항 */}
              <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/30 rounded-xl border border-red-200 dark:border-red-800">
                <h3 className="font-bold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  주의사항
                </h3>
                <p className="text-sm text-red-700 dark:text-red-300">{result.warning}</p>
              </div>
            </>
          )}

          {/* Breakup Recovery specific sections */}
          {isBreakupRecovery && (
            <>
              {/* 회복 단계 게이지 */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">회복 진행률</h2>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">이별 직후</span>
                    <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">{result.percentage}%</span>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">완전 회복</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-4 overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 transition-all duration-1000"
                      style={{ width: `${result.percentage}%` }}
                    ></div>
                  </div>
                  <div className="mt-3 text-center">
                    <span className="inline-block px-4 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-bold">
                      5단계 중 {result.stage}단계
                    </span>
                  </div>
                </div>
              </div>

              {/* 주요 특성 */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">지금 당신의 상태</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* 감정 상태 */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">현재 감정 상태</h2>
                <div className="flex flex-wrap gap-2">
                  {result.emotionalState.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-purple-50 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* DO & DON'T */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    이렇게 해보세요
                  </h3>
                  <ul className="space-y-1">
                    {result.doList.map((item) => (
                      <li key={item} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
                    <X className="w-4 h-4" />
                    이건 피해주세요
                  </h3>
                  <ul className="space-y-1">
                    {result.dontList.map((item) => (
                      <li key={item} className="text-sm text-red-700 dark:text-red-300 flex items-center gap-1">
                        <X className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 힐링 팁 */}
              <div className="mb-8 bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  회복을 위한 조언
                </h3>
                <ul className="space-y-2">
                  {result.healingTips.map((tip, i) => (
                    <li key={i} className="text-sm text-blue-700 dark:text-blue-300 flex items-start gap-2">
                      <span className="text-blue-500">💙</span> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 다음 단계 힌트 */}
              <div className="mb-8 bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  다음 단계로 가려면
                </h3>
                <p className="text-sm text-amber-700 dark:text-amber-300">{result.nextStageHint}</p>
              </div>

              {/* 응원 메시지 */}
              <div className="mb-8 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-xl border border-indigo-200 dark:border-indigo-800">
                <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  당신에게 보내는 응원
                </h3>
                <p className="text-sm text-indigo-700 dark:text-indigo-300">{result.encouragement}</p>
              </div>
            </>
          )}

          {/* Company Dinner specific sections */}
          {isCompanyDinner && (
            <>
              {/* 주요 특성 */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">회식에서 나의 특성</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-amber-50 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* 회식 스타일 */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">나의 회식 스타일</h2>
                <div className="bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4">
                  <ul className="space-y-2">
                    {result.dinnerStyle.map((style, i) => (
                      <li key={i} className="text-sm text-orange-700 dark:text-orange-300 flex items-start gap-2">
                        <span className="text-orange-500">🍻</span> {style}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 강점 & 약점 */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" />
                    강점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-rose-50 dark:bg-rose-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    약점
                  </h3>
                  <ul className="space-y-1">
                    {result.weaknesses.map((item) => (
                      <li key={item} className="text-sm text-rose-700 dark:text-rose-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 생존 팁 */}
              <div className="mb-8 bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  회식 생존 팁
                </h3>
                <ul className="space-y-2">
                  {result.survivalTips.map((tip, i) => (
                    <li key={i} className="text-sm text-green-700 dark:text-green-300 flex items-start gap-2">
                      <span className="text-green-500">✅</span> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 이상적인 역할 */}
              <div className="mb-8 bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  회식에서 당신의 역할
                </h3>
                <p className="text-sm text-purple-700 dark:text-purple-300">{result.idealRole}</p>
              </div>

              {/* 주의사항 */}
              <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/30 rounded-xl border border-red-200 dark:border-red-800">
                <h3 className="font-bold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  주의사항
                </h3>
                <p className="text-sm text-red-700 dark:text-red-300">{result.warning}</p>
              </div>
            </>
          )}

          {/* Drama Character specific sections */}
          {isDramaCharacter && (
            <>
              {/* 장르 & 명대사 */}
              <div className="mb-8 bg-fuchsia-50 dark:bg-fuchsia-900/30 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-fuchsia-100 dark:bg-fuchsia-800 text-fuchsia-700 dark:text-fuchsia-300 rounded-full text-sm font-bold">
                    {result.genre}
                  </span>
                </div>
                <p className="text-lg italic text-fuchsia-800 dark:text-fuchsia-300 font-medium">
                  {result.catchphrase}
                </p>
              </div>

              {/* 주요 특성 */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">캐릭터 특성</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-pink-50 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* 강점 & 약점 */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" />
                    강점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-rose-50 dark:bg-rose-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    약점
                  </h3>
                  <ul className="space-y-1">
                    {result.weaknesses.map((item) => (
                      <li key={item} className="text-sm text-rose-700 dark:text-rose-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 베스트 씬 */}
              <div className="mb-8 bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-3 flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  베스트 장면
                </h3>
                <ul className="space-y-2">
                  {result.bestScenes.map((scene, i) => (
                    <li key={i} className="text-sm text-amber-700 dark:text-amber-300 flex items-start gap-2">
                      <span className="text-amber-500">🎬</span> {scene}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 플롯 트위스트 */}
              <div className="mb-8 bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  반전 포인트
                </h3>
                <p className="text-sm text-purple-700 dark:text-purple-300">{result.plotTwist}</p>
              </div>

              {/* 케미스트리 */}
              <div className="mb-8 bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  케미스트리
                </h3>
                <p className="text-sm text-green-700 dark:text-green-300">{result.chemistry}</p>
              </div>

              {/* 엔딩 */}
              <div className="mb-8 p-4 bg-gradient-to-r from-fuchsia-50 to-pink-50 dark:from-fuchsia-900/30 dark:to-pink-900/30 rounded-xl border border-fuchsia-200 dark:border-fuchsia-800">
                <h3 className="font-bold text-fuchsia-800 dark:text-fuchsia-300 mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  예상 엔딩
                </h3>
                <p className="text-sm text-fuchsia-700 dark:text-fuchsia-300">{result.endingType}</p>
              </div>
            </>
          )}

          {/* Perfectionism specific sections */}
          {isPerfectionism && (
            <>
              {/* 완벽주의 레벨 게이지 */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">완벽주의 레벨</h2>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">느긋함</span>
                    <span className="text-sm font-bold text-violet-600 dark:text-violet-400">{result.level}%</span>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">완벽주의</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-4 overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-green-400 via-yellow-400 via-orange-400 to-red-500 transition-all duration-1000"
                      style={{ width: `${result.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* 주요 특성 */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">주요 특성</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-violet-50 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* 강점 & 스트레스 포인트 */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" />
                    강점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-rose-50 dark:bg-rose-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    스트레스 포인트
                  </h3>
                  <ul className="space-y-1">
                    {result.stressPoints.map((item) => (
                      <li key={item} className="text-sm text-rose-700 dark:text-rose-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 대처 팁 */}
              <div className="mb-8 bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  마음 관리 팁
                </h3>
                <ul className="space-y-2">
                  {result.copingTips.map((tip, i) => (
                    <li key={i} className="text-sm text-green-700 dark:text-green-300 flex items-start gap-2">
                      <span className="text-green-500">💚</span> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 직장에서 & 관계에서 */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    직장에서
                  </h3>
                  <p className="text-sm text-amber-700 dark:text-amber-300">{result.atWork}</p>
                </div>
                <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    관계에서
                  </h3>
                  <p className="text-sm text-pink-700 dark:text-pink-300">{result.inRelationships}</p>
                </div>
              </div>

              {/* 셀프 케어 조언 */}
              <div className="mb-8 p-4 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/30 dark:to-purple-900/30 rounded-xl border border-violet-200 dark:border-violet-800">
                <h3 className="font-bold text-violet-800 dark:text-violet-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  당신에게 전하는 말
                </h3>
                <p className="text-sm text-violet-700 dark:text-violet-300">{result.selfCareAdvice}</p>
              </div>
            </>
          )}

          {/* Empathy Level specific sections */}
          {isEmpathyLevel && (
            <>
              {/* 공감 레벨 게이지 */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">공감 능력 레벨</h2>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">이성적</span>
                    <span className="text-sm font-bold text-teal-600 dark:text-teal-400">{result.level}%</span>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">고감도</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-4 overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-500 transition-all duration-1000"
                      style={{ width: `${result.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* 주요 특성 */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">주요 특성</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-teal-50 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* 강점 & 도전 과제 */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" />
                    강점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    도전 과제
                  </h3>
                  <ul className="space-y-1">
                    {result.challenges.map((item) => (
                      <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 공감 팁 */}
              <div className="mb-8 bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  공감 능력 활용 팁
                </h3>
                <ul className="space-y-2">
                  {result.tips.map((tip, i) => (
                    <li key={i} className="text-sm text-green-700 dark:text-green-300 flex items-start gap-2">
                      <span className="text-green-500">💚</span> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 관계에서 & 직장에서 */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    관계에서
                  </h3>
                  <p className="text-sm text-pink-700 dark:text-pink-300">{result.inRelationships}</p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    직장에서
                  </h3>
                  <p className="text-sm text-indigo-700 dark:text-indigo-300">{result.atWork}</p>
                </div>
              </div>

              {/* 셀프 케어 조언 */}
              <div className="mb-8 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/30 dark:to-cyan-900/30 rounded-xl border border-teal-200 dark:border-teal-800">
                <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  당신에게 전하는 말
                </h3>
                <p className="text-sm text-teal-700 dark:text-teal-300">{result.selfCareAdvice}</p>
              </div>
            </>
          )}

          {/* Ex-Attachment specific sections */}
          {isExAttachment && (
            <>
              {/* Level Display */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">미련 지수</h2>
                <div className="bg-gradient-to-r from-gray-100 via-slate-100 to-zinc-100 dark:from-gray-900/30 dark:via-slate-900/30 dark:to-zinc-900/30 rounded-xl p-6 text-center">
                  <div className="text-6xl font-bold text-slate-600 dark:text-slate-400 mb-2">{result.level}%</div>
                  <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all ${
                        result.level <= 20 ? 'bg-green-500' :
                        result.level <= 40 ? 'bg-yellow-500' :
                        result.level <= 60 ? 'bg-orange-500' :
                        result.level <= 80 ? 'bg-red-500' : 'bg-red-700'
                      }`}
                      style={{ width: `${result.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Symptoms */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">현재 상태</h2>
                <div className="flex flex-wrap gap-2">
                  {result.symptoms.map((symptom) => (
                    <span
                      key={symptom}
                      className="px-3 py-1.5 bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
                    >
                      {symptom}
                    </span>
                  ))}
                </div>
              </div>

              {/* Honest Truth */}
              <div className="mb-8 p-4 bg-amber-50 dark:bg-amber-900/30 rounded-xl">
                <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  솔직한 진실
                </h3>
                <p className="text-sm text-amber-700 dark:text-amber-300">{result.honestTruth}</p>
              </div>

              {/* Healing Tips */}
              <div className="mb-8 bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  치유를 위한 팁
                </h3>
                <ul className="space-y-1">
                  {result.healingTips.map((tip) => (
                    <li key={tip} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Do & Don't Lists */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    이렇게 해보세요
                  </h3>
                  <ul className="space-y-1">
                    {result.doList.map((item) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
                    <X className="w-4 h-4" />
                    이건 피해주세요
                  </h3>
                  <ul className="space-y-1">
                    {result.dontList.map((item) => (
                      <li key={item} className="text-sm text-red-700 dark:text-red-300 flex items-center gap-1">
                        <X className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Timeline */}
              <div className="mb-8 p-4 bg-violet-50 dark:bg-violet-900/30 rounded-xl">
                <h3 className="font-bold text-violet-800 dark:text-violet-300 mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  회복 타임라인
                </h3>
                <p className="text-sm text-violet-700 dark:text-violet-300">{result.timeline}</p>
              </div>

              {/* Encouragement */}
              <div className="mb-8 p-4 bg-pink-50 dark:bg-pink-900/30 rounded-xl">
                <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  응원의 메시지
                </h3>
                <p className="text-sm text-pink-700 dark:text-pink-300">{result.encouragement}</p>
              </div>
            </>
          )}

          {/* Reunion Chance specific sections */}
          {isReunionChance && (
            <>
              {/* Percentage Display */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">재회 가능성</h2>
                <div className="bg-gradient-to-r from-rose-100 via-pink-100 to-fuchsia-100 dark:from-rose-900/30 dark:via-pink-900/30 dark:to-fuchsia-900/30 rounded-xl p-6 text-center">
                  <div className="text-6xl font-bold text-rose-600 dark:text-rose-400 mb-2">{result.percentage}%</div>
                  <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-rose-400 to-pink-500 h-3 rounded-full transition-all"
                      style={{ width: `${result.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Factors */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">분석 요인</h2>
                <div className="flex flex-wrap gap-2">
                  {result.factors.map((factor) => (
                    <span
                      key={factor}
                      className="px-3 py-1.5 bg-rose-50 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300 rounded-full text-sm font-medium"
                    >
                      {factor}
                    </span>
                  ))}
                </div>
              </div>

              {/* Analysis */}
              <div className="mb-8 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-xl">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  상황 분석
                </h3>
                <p className="text-sm text-purple-700 dark:text-purple-300">{result.analysis}</p>
              </div>

              {/* Advice */}
              <div className="mb-8 bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  조언
                </h3>
                <ul className="space-y-1">
                  {result.advice.map((item) => (
                    <li key={item} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Reality Check */}
              <div className="mb-8 p-4 bg-amber-50 dark:bg-amber-900/30 rounded-xl">
                <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  현실 체크
                </h3>
                <p className="text-sm text-amber-700 dark:text-amber-300">{result.realityCheck}</p>
              </div>

              {/* What to Consider */}
              <div className="mb-8 bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  고려할 점
                </h3>
                <ul className="space-y-1">
                  {result.whatToConsider.map((item) => (
                    <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Final Word */}
              <div className="mb-8 p-4 bg-pink-50 dark:bg-pink-900/30 rounded-xl">
                <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  마지막 한마디
                </h3>
                <p className="text-sm text-pink-700 dark:text-pink-300">{result.finalWord}</p>
              </div>
            </>
          )}

          {/* Love Cell specific sections */}
          {isLoveCell && (
            <>
              {/* Percentage Display */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">연애 세포 활성도</h2>
                <div className="bg-gradient-to-r from-pink-100 via-rose-100 to-red-100 dark:from-pink-900/30 dark:via-rose-900/30 dark:to-red-900/30 rounded-xl p-6 text-center">
                  <div className="text-6xl font-bold text-pink-600 dark:text-pink-400 mb-2">{result.percentage}%</div>
                  <div className="text-sm text-pink-700 dark:text-pink-300 mb-4">{result.status}</div>
                  <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-pink-400 to-rose-500 h-3 rounded-full transition-all"
                      style={{ width: `${result.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">특징</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-pink-50 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Love Readiness */}
              <div className="mb-8 p-4 bg-rose-50 dark:bg-rose-900/30 rounded-xl">
                <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  연애 준비도
                </h3>
                <p className="text-sm text-rose-700 dark:text-rose-300">{result.loveReadiness}</p>
              </div>

              {/* Signal Sensitivity & Timing */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    호감 감지력
                  </h3>
                  <p className="text-sm text-purple-700 dark:text-purple-300">{result.signalSensitivity}</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    연애 타이밍
                  </h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300">{result.idealTiming}</p>
                </div>
              </div>

              {/* Advice */}
              <div className="mb-8 bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  조언
                </h3>
                <ul className="space-y-1">
                  {result.advice.map((item) => (
                    <li key={item} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Encouragement */}
              <div className="mb-8 p-4 bg-amber-50 dark:bg-amber-900/30 rounded-xl">
                <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  응원 메시지
                </h3>
                <p className="text-sm text-amber-700 dark:text-amber-300">{result.encouragement}</p>
              </div>
            </>
          )}

          {/* Couple Fight specific sections */}
          {isCoupleFight && (
            <>
              {/* Fight Style */}
              <div className="mb-8 p-4 bg-orange-50 dark:bg-orange-900/30 rounded-xl">
                <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center gap-2">
                  <Flame className="w-4 h-4" />
                  싸움 스타일
                </h3>
                <p className="text-sm text-orange-700 dark:text-orange-300">{result.fightStyle}</p>
              </div>

              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">특징</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-orange-50 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" />
                    장점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    주의점
                  </h3>
                  <ul className="space-y-1">
                    {result.weaknesses.map((item) => (
                      <li key={item} className="text-sm text-red-700 dark:text-red-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Partner Feels */}
              <div className="mb-8 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-xl">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  상대방이 느끼는 것
                </h3>
                <p className="text-sm text-purple-700 dark:text-purple-300">{result.partnerFeels}</p>
              </div>

              {/* During Fight */}
              <div className="mb-8 bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  싸울 때 행동
                </h3>
                <ul className="space-y-1">
                  {result.duringFight.map((item) => (
                    <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* After Fight */}
              <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                  <RefreshCw className="w-4 h-4" />
                  싸움 후
                </h3>
                <p className="text-sm text-blue-700 dark:text-blue-300">{result.afterFight}</p>
              </div>

              {/* Resolution Tips */}
              <div className="mb-8 bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  해결을 위한 팁
                </h3>
                <ul className="space-y-1">
                  {result.resolutionTip.map((item) => (
                    <li key={item} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best & Worst Match */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    최고 궁합
                  </h3>
                  <p className="text-sm text-pink-700 dark:text-pink-300">{result.bestMatch}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                  <h3 className="font-bold text-gray-800 dark:text-gray-300 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    주의 궁합
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.worstMatch}</p>
                </div>
              </div>
            </>
          )}

          {/* Breakup Reason specific sections */}
          {isBreakupReason && (
            <>
              {/* Core Issue */}
              <div className="mb-8 p-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
                <h3 className="font-bold text-slate-800 dark:text-slate-300 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  핵심 문제
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300">{result.coreIssue}</p>
              </div>

              {/* Warning Signals */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">경고 신호들</h2>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <ul className="space-y-1">
                    {result.warningSignals.map((item) => (
                      <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Your Pattern & Partner Pattern */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    나의 패턴
                  </h3>
                  <ul className="space-y-1">
                    {result.yourPattern.map((item) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    상대의 패턴
                  </h3>
                  <ul className="space-y-1">
                    {result.partnerPattern.map((item) => (
                      <li key={item} className="text-sm text-purple-700 dark:text-purple-300 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Lesson Learned */}
              <div className="mb-8 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl">
                <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  배운 교훈
                </h3>
                <p className="text-sm text-indigo-700 dark:text-indigo-300">{result.lessonLearned}</p>
              </div>

              {/* Healing Advice */}
              <div className="mb-8 bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  치유를 위한 조언
                </h3>
                <ul className="space-y-1">
                  {result.healingAdvice.map((item) => (
                    <li key={item} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Next Relationship Tips */}
              <div className="mb-8 bg-rose-50 dark:bg-rose-900/30 rounded-xl p-4">
                <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  다음 연애를 위한 팁
                </h3>
                <ul className="space-y-1">
                  {result.nextRelationshipTip.map((item) => (
                    <li key={item} className="text-sm text-rose-700 dark:text-rose-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Encouragement */}
              <div className="mb-8 p-4 bg-pink-50 dark:bg-pink-900/30 rounded-xl">
                <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  응원 메시지
                </h3>
                <p className="text-sm text-pink-700 dark:text-pink-300">{result.encouragement}</p>
              </div>
            </>
          )}

          {/* Next Love Ready specific sections */}
          {isNextLoveReady && (
            <>
              {/* Percentage Display */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">다음 연애 준비도</h2>
                <div className="bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100 dark:from-emerald-900/30 dark:via-teal-900/30 dark:to-cyan-900/30 rounded-xl p-6 text-center">
                  <div className="text-6xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">{result.percentage}%</div>
                  <div className="text-sm text-emerald-700 dark:text-emerald-300 mb-4">{result.status}</div>
                  <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-emerald-400 to-teal-500 h-3 rounded-full transition-all"
                      style={{ width: `${result.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Current State */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">현재 상태</h2>
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <ul className="space-y-1">
                    {result.currentState.map((item) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Ready Signals & Not Ready Signals */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    준비된 신호
                  </h3>
                  <ul className="space-y-1">
                    {result.readySignals.length > 0 ? result.readySignals.map((item) => (
                      <li key={item} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    )) : (
                      <li className="text-sm text-green-700 dark:text-green-300">아직 준비 중이에요</li>
                    )}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    아직인 신호
                  </h3>
                  <ul className="space-y-1">
                    {result.notReadySignals.length > 0 ? result.notReadySignals.map((item) => (
                      <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    )) : (
                      <li className="text-sm text-amber-700 dark:text-amber-300">거의 다 준비됐어요!</li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Advice */}
              <div className="mb-8 bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  조언
                </h3>
                <ul className="space-y-1">
                  {result.advice.map((item) => (
                    <li key={item} className="text-sm text-purple-700 dark:text-purple-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Todo List & Avoid List */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-emerald-50 dark:bg-emerald-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    해야 할 것
                  </h3>
                  <ul className="space-y-1">
                    {result.todoList.map((item) => (
                      <li key={item} className="text-sm text-emerald-700 dark:text-emerald-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
                    <X className="w-4 h-4" />
                    피해야 할 것
                  </h3>
                  <ul className="space-y-1">
                    {result.avoidList.map((item) => (
                      <li key={item} className="text-sm text-red-700 dark:text-red-300 flex items-center gap-1">
                        <X className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Timeline */}
              <div className="mb-8 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl">
                <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  예상 타임라인
                </h3>
                <p className="text-sm text-indigo-700 dark:text-indigo-300">{result.timeline}</p>
              </div>

              {/* Encouragement */}
              <div className="mb-8 p-4 bg-pink-50 dark:bg-pink-900/30 rounded-xl">
                <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  응원 메시지
                </h3>
                <p className="text-sm text-pink-700 dark:text-pink-300">{result.encouragement}</p>
              </div>
            </>
          )}

          {/* Love Meter specific sections */}
          {isLoveMeter && (
            <>
              {/* Temperature Display */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">애정 온도</h2>
                <div className="bg-gradient-to-r from-red-100 via-rose-100 to-pink-100 dark:from-red-900/30 dark:via-rose-900/30 dark:to-pink-900/30 rounded-xl p-6 text-center">
                  <div className="text-6xl font-bold text-red-600 dark:text-red-400 mb-2">{result.temperature}°C</div>
                  <div className="text-sm text-red-700 dark:text-red-300 mb-4">{result.status}</div>
                  <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-400 via-yellow-400 to-red-500 h-3 rounded-full transition-all"
                      style={{ width: `${result.temperature}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">특징</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-red-50 dark:bg-red-900/50 text-red-700 dark:text-red-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Good Signs & Warning Signs */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    좋은 신호
                  </h3>
                  <ul className="space-y-1">
                    {result.goodSigns.length > 0 ? result.goodSigns.map((item) => (
                      <li key={item} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    )) : (
                      <li className="text-sm text-green-700 dark:text-green-300">-</li>
                    )}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    주의 신호
                  </h3>
                  <ul className="space-y-1">
                    {result.warningSigns.length > 0 ? result.warningSigns.map((item) => (
                      <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    )) : (
                      <li className="text-sm text-amber-700 dark:text-amber-300">-</li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Advice */}
              <div className="mb-8 bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  조언
                </h3>
                <ul className="space-y-1">
                  {result.advice.map((item) => (
                    <li key={item} className="text-sm text-purple-700 dark:text-purple-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Date Ideas */}
              <div className="mb-8 bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4">
                <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  추천 데이트
                </h3>
                <ul className="space-y-1">
                  {result.dateIdeas.map((item) => (
                    <li key={item} className="text-sm text-pink-700 dark:text-pink-300 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Communication Tip */}
              <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  소통 팁
                </h3>
                <p className="text-sm text-blue-700 dark:text-blue-300">{result.communicationTip}</p>
              </div>

              {/* Encouragement */}
              <div className="mb-8 p-4 bg-rose-50 dark:bg-rose-900/30 rounded-xl">
                <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  응원 메시지
                </h3>
                <p className="text-sm text-rose-700 dark:text-rose-300">{result.encouragement}</p>
              </div>
            </>
          )}

          {/* Crush Success specific sections */}
          {isCrushSuccess && (
            <>
              {/* Percentage Display */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">성공 확률</h2>
                <div className="bg-gradient-to-r from-pink-100 via-rose-100 to-red-100 dark:from-pink-900/30 dark:via-rose-900/30 dark:to-red-900/30 rounded-xl p-6 text-center">
                  <div className="text-6xl font-bold text-pink-600 dark:text-pink-400 mb-2">{result.percentage}%</div>
                  <div className="text-sm text-pink-700 dark:text-pink-300 mb-4">{result.verdict}</div>
                  <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-pink-400 to-rose-500 h-3 rounded-full transition-all"
                      style={{ width: `${result.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Current Situation */}
              <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  현재 상황
                </h3>
                <p className="text-sm text-blue-700 dark:text-blue-300">{result.currentSituation}</p>
              </div>

              {/* Positive & Warning Signals */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    긍정적 신호
                  </h3>
                  <ul className="space-y-1">
                    {result.positiveSignals.length > 0 ? result.positiveSignals.map((item) => (
                      <li key={item} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    )) : (
                      <li className="text-sm text-green-700 dark:text-green-300">아직 명확한 신호가 없어요</li>
                    )}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    주의할 점
                  </h3>
                  <ul className="space-y-1">
                    {result.warningSignals.length > 0 ? result.warningSignals.map((item) => (
                      <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    )) : (
                      <li className="text-sm text-amber-700 dark:text-amber-300">특별히 없어요!</li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Advice */}
              <div className="mb-8 bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  조언
                </h3>
                <ul className="space-y-1">
                  {result.advice.map((item) => (
                    <li key={item} className="text-sm text-purple-700 dark:text-purple-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Plan */}
              <div className="mb-8 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4">
                <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  실행 계획
                </h3>
                <ul className="space-y-1">
                  {result.actionPlan.map((item) => (
                    <li key={item} className="text-sm text-indigo-700 dark:text-indigo-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Do & Don't */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-emerald-50 dark:bg-emerald-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    해야 할 것
                  </h3>
                  <ul className="space-y-1">
                    {result.doList.map((item) => (
                      <li key={item} className="text-sm text-emerald-700 dark:text-emerald-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
                    <X className="w-4 h-4" />
                    하면 안 되는 것
                  </h3>
                  <ul className="space-y-1">
                    {result.dontList.map((item) => (
                      <li key={item} className="text-sm text-red-700 dark:text-red-300 flex items-center gap-1">
                        <X className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Encouragement */}
              <div className="mb-8 p-4 bg-pink-50 dark:bg-pink-900/30 rounded-xl">
                <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  응원 메시지
                </h3>
                <p className="text-sm text-pink-700 dark:text-pink-300">{result.encouragement}</p>
              </div>
            </>
          )}

          {/* Red Flag Detect specific sections */}
          {isRedFlagDetect && (
            <>
              {/* Risk Level Display */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">위험도</h2>
                <div className="bg-gradient-to-r from-red-100 via-rose-100 to-pink-100 dark:from-red-900/30 dark:via-rose-900/30 dark:to-pink-900/30 rounded-xl p-6 text-center">
                  <div className="text-6xl font-bold text-red-600 dark:text-red-400 mb-2">{result.riskLevel}%</div>
                  <div className="text-sm text-red-700 dark:text-red-300 mb-4">{result.verdict}</div>
                  <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 h-3 rounded-full transition-all"
                      style={{ width: `${result.riskLevel}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Analysis */}
              <div className="mb-8 p-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
                <h3 className="font-bold text-slate-800 dark:text-slate-300 mb-2 flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  분석
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300">{result.analysis}</p>
              </div>

              {/* Red Flags & Green Flags */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    레드 플래그
                  </h3>
                  <ul className="space-y-1">
                    {result.redFlags.length > 0 ? result.redFlags.map((item) => (
                      <li key={item} className="text-sm text-red-700 dark:text-red-300 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" /> {item}
                      </li>
                    )) : (
                      <li className="text-sm text-red-700 dark:text-red-300">발견되지 않았어요!</li>
                    )}
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    그린 플래그
                  </h3>
                  <ul className="space-y-1">
                    {result.greenFlags.length > 0 ? result.greenFlags.map((item) => (
                      <li key={item} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    )) : (
                      <li className="text-sm text-green-700 dark:text-green-300">-</li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Advice */}
              <div className="mb-8 bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  조언
                </h3>
                <ul className="space-y-1">
                  {result.advice.map((item) => (
                    <li key={item} className="text-sm text-purple-700 dark:text-purple-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Watch Out */}
              <div className="mb-8 bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  주의사항
                </h3>
                <ul className="space-y-1">
                  {result.watchOut.map((item) => (
                    <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Next Steps */}
              <div className="mb-8 bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  다음 단계
                </h3>
                <ul className="space-y-1">
                  {result.nextSteps.map((item) => (
                    <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Important Message */}
              <div className="mb-8 p-4 bg-pink-50 dark:bg-pink-900/30 rounded-xl border-2 border-pink-200 dark:border-pink-800">
                <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  중요한 메시지
                </h3>
                <p className="text-sm text-pink-700 dark:text-pink-300">{result.importantMessage}</p>
              </div>
            </>
          )}

          {/* Confession Timing specific sections */}
          {isConfessionTiming && (
            <>
              {/* Timing Display */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">고백 타이밍</h2>
                <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-rose-100 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-rose-900/30 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">{result.timing}</div>
                  <div className="text-6xl font-bold text-pink-600 dark:text-pink-400 mb-2">{result.percentage}%</div>
                  <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-500 h-3 rounded-full transition-all"
                      style={{ width: `${result.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Current Situation */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">현재 상황</h2>
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <ul className="space-y-1">
                    {result.currentSituation.map((item) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Positive Signals & Concerning Points */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    긍정적 신호
                  </h3>
                  <ul className="space-y-1">
                    {result.positiveSignals.length > 0 ? result.positiveSignals.map((item) => (
                      <li key={item} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    )) : (
                      <li className="text-sm text-green-700 dark:text-green-300">-</li>
                    )}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    걱정되는 점
                  </h3>
                  <ul className="space-y-1">
                    {result.concerningPoints.length > 0 ? result.concerningPoints.map((item) => (
                      <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    )) : (
                      <li className="text-sm text-amber-700 dark:text-amber-300">특별히 없어요!</li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Advice */}
              <div className="mb-8 bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  조언
                </h3>
                <ul className="space-y-1">
                  {result.advice.map((item) => (
                    <li key={item} className="text-sm text-purple-700 dark:text-purple-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Confession Tips */}
              <div className="mb-8 bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4">
                <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  고백 팁
                </h3>
                <ul className="space-y-1">
                  {result.confessionTips.map((item) => (
                    <li key={item} className="text-sm text-pink-700 dark:text-pink-300 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What to Prepare & Alternative Actions */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    준비할 것
                  </h3>
                  <ul className="space-y-1">
                    {result.whatToPrepare.map((item) => (
                      <li key={item} className="text-sm text-indigo-700 dark:text-indigo-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-teal-50 dark:bg-teal-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    대안 행동
                  </h3>
                  <ul className="space-y-1">
                    {result.alternativeActions.map((item) => (
                      <li key={item} className="text-sm text-teal-700 dark:text-teal-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Encouragement */}
              <div className="mb-8 p-4 bg-rose-50 dark:bg-rose-900/30 rounded-xl">
                <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  응원 메시지
                </h3>
                <p className="text-sm text-rose-700 dark:text-rose-300">{result.encouragement}</p>
              </div>
            </>
          )}

          {/* Friend to Lover specific sections */}
          {isFriendToLover && (
            <>
              {/* Percentage Display */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">친구→연인 가능성</h2>
                <div className="bg-gradient-to-r from-pink-100 via-rose-100 to-red-100 dark:from-pink-900/30 dark:via-rose-900/30 dark:to-red-900/30 rounded-xl p-6 text-center">
                  <div className="text-6xl font-bold text-pink-600 dark:text-pink-400 mb-2">{result.percentage}%</div>
                  <div className="text-sm text-pink-700 dark:text-pink-300 mb-4">{result.verdict}</div>
                  <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-pink-400 to-rose-500 h-3 rounded-full transition-all"
                      style={{ width: `${result.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Current Status */}
              <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  현재 상태
                </h3>
                <p className="text-sm text-blue-700 dark:text-blue-300">{result.currentStatus}</p>
              </div>

              {/* Positive Signals & Risks */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    긍정적 신호
                  </h3>
                  <ul className="space-y-1">
                    {result.positiveSignals.length > 0 ? result.positiveSignals.map((item) => (
                      <li key={item} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    )) : (
                      <li className="text-sm text-green-700 dark:text-green-300">아직 명확한 신호가 없어요</li>
                    )}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    리스크
                  </h3>
                  <ul className="space-y-1">
                    {result.risks.length > 0 ? result.risks.map((item) => (
                      <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" /> {item}
                      </li>
                    )) : (
                      <li className="text-sm text-amber-700 dark:text-amber-300">특별한 리스크 없어요!</li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Advice */}
              <div className="mb-8 bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  조언
                </h3>
                <ul className="space-y-1">
                  {result.advice.map((item) => (
                    <li key={item} className="text-sm text-purple-700 dark:text-purple-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Plan */}
              <div className="mb-8 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4">
                <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  실행 계획
                </h3>
                <ul className="space-y-1">
                  {result.actionPlan.map((item) => (
                    <li key={item} className="text-sm text-indigo-700 dark:text-indigo-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* If You Confess & If You Don't */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    고백하면?
                  </h3>
                  <p className="text-sm text-pink-700 dark:text-pink-300">{result.ifYouConfess}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                  <h3 className="font-bold text-gray-800 dark:text-gray-300 mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    고백 안 하면?
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.ifYouDont}</p>
                </div>
              </div>

              {/* Encouragement */}
              <div className="mb-8 p-4 bg-rose-50 dark:bg-rose-900/30 rounded-xl">
                <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  응원 메시지
                </h3>
                <p className="text-sm text-rose-700 dark:text-rose-300">{result.encouragement}</p>
              </div>
            </>
          )}

          {/* Marriage Fit specific sections */}
          {isMarriageFit && (
            <>
              {/* Percentage Display */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">결혼 적합도</h2>
                <div className="bg-gradient-to-r from-rose-100 via-pink-100 to-fuchsia-100 dark:from-rose-900/30 dark:via-pink-900/30 dark:to-fuchsia-900/30 rounded-xl p-6 text-center">
                  <div className="text-6xl font-bold text-rose-600 dark:text-rose-400 mb-2">{result.percentage}%</div>
                  <div className="text-sm text-rose-700 dark:text-rose-300 mb-4">{result.verdict}</div>
                  <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-rose-400 to-pink-500 h-3 rounded-full transition-all"
                      style={{ width: `${result.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Compatibility */}
              <div className="mb-8 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-xl">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  궁합
                </h3>
                <p className="text-sm text-purple-700 dark:text-purple-300">{result.compatibility}</p>
              </div>

              {/* Strengths & Concerns */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    강점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.length > 0 ? result.strengths.map((item) => (
                      <li key={item} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    )) : (
                      <li className="text-sm text-green-700 dark:text-green-300">-</li>
                    )}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    걱정되는 점
                  </h3>
                  <ul className="space-y-1">
                    {result.concerns.length > 0 ? result.concerns.map((item) => (
                      <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    )) : (
                      <li className="text-sm text-amber-700 dark:text-amber-300">특별히 없어요!</li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Advice */}
              <div className="mb-8 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4">
                <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  조언
                </h3>
                <ul className="space-y-1">
                  {result.advice.map((item) => (
                    <li key={item} className="text-sm text-indigo-700 dark:text-indigo-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Discuss Topics */}
              <div className="mb-8 bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  꼭 대화할 주제
                </h3>
                <ul className="space-y-1">
                  {result.discussTopics.map((item) => (
                    <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Before Marriage */}
              <div className="mb-8 bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4">
                <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  결혼 전에 할 일
                </h3>
                <ul className="space-y-1">
                  {result.beforeMarriage.map((item) => (
                    <li key={item} className="text-sm text-pink-700 dark:text-pink-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Encouragement */}
              <div className="mb-8 p-4 bg-rose-50 dark:bg-rose-900/30 rounded-xl">
                <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  응원 메시지
                </h3>
                <p className="text-sm text-rose-700 dark:text-rose-300">{result.encouragement}</p>
              </div>
            </>
          )}

          {/* Couple Comm specific sections */}
          {isCoupleComm && (
            <>
              {/* Score Display */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">소통 점수</h2>
                <div className="bg-gradient-to-r from-blue-100 via-indigo-100 to-violet-100 dark:from-blue-900/30 dark:via-indigo-900/30 dark:to-violet-900/30 rounded-xl p-6 text-center">
                  <div className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-2">{result.score}점</div>
                  <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{result.grade}등급</div>
                  <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-500 h-3 rounded-full transition-all"
                      style={{ width: `${result.score}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Communication Style */}
              <div className="mb-8 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-xl">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  소통 스타일
                </h3>
                <p className="text-sm text-purple-700 dark:text-purple-300">{result.communicationStyle}</p>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    강점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.length > 0 ? result.strengths.map((item) => (
                      <li key={item} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    )) : (
                      <li className="text-sm text-green-700 dark:text-green-300">-</li>
                    )}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    약점
                  </h3>
                  <ul className="space-y-1">
                    {result.weaknesses.length > 0 ? result.weaknesses.map((item) => (
                      <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    )) : (
                      <li className="text-sm text-amber-700 dark:text-amber-300">특별히 없어요!</li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Improvement Tips */}
              <div className="mb-8 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4">
                <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  개선 팁
                </h3>
                <ul className="space-y-1">
                  {result.improvementTips.map((item) => (
                    <li key={item} className="text-sm text-indigo-700 dark:text-indigo-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Daily Practice & Conflict Tips */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    매일 실천하기
                  </h3>
                  <ul className="space-y-1">
                    {result.dailyPractice.map((item) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    갈등 시 팁
                  </h3>
                  <ul className="space-y-1">
                    {result.conflictTips.map((item) => (
                      <li key={item} className="text-sm text-orange-700 dark:text-orange-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Encouragement */}
              <div className="mb-8 p-4 bg-pink-50 dark:bg-pink-900/30 rounded-xl">
                <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  응원 메시지
                </h3>
                <p className="text-sm text-pink-700 dark:text-pink-300">{result.encouragement}</p>
              </div>
            </>
          )}

          {/* Dating Pattern specific sections */}
          {isDatingPattern && (
            <>
              {/* Pattern Explanation */}
              <div className="mb-8 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-xl">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  패턴 설명
                </h3>
                <p className="text-sm text-purple-700 dark:text-purple-300">{result.patternExplanation}</p>
              </div>

              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">특징</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-violet-50 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* In Relationship */}
              <div className="mb-8 bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4">
                <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  연애할 때
                </h3>
                <ul className="space-y-1">
                  {result.inRelationship.map((item) => (
                    <li key={item} className="text-sm text-pink-700 dark:text-pink-300 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Breakup Pattern & Root Cause */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    이별 패턴
                  </h3>
                  <p className="text-sm text-amber-700 dark:text-amber-300">{result.breakupPattern}</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4">
                  <h3 className="font-bold text-slate-800 dark:text-slate-300 mb-2 flex items-center gap-2">
                    <Brain className="w-4 h-4" />
                    근본 원인
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300">{result.rootCause}</p>
                </div>
              </div>

              {/* Growth Tips */}
              <div className="mb-8 bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  성장을 위한 팁
                </h3>
                <ul className="space-y-1">
                  {result.growthTips.map((item) => (
                    <li key={item} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal Partner & Warning */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    이상적인 파트너
                  </h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300">{result.idealPartner}</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    주의할 점
                  </h3>
                  <p className="text-sm text-red-700 dark:text-red-300">{result.warningForSelf}</p>
                </div>
              </div>

              {/* Encouragement */}
              <div className="mb-8 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl">
                <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  응원 메시지
                </h3>
                <p className="text-sm text-indigo-700 dark:text-indigo-300">{result.encouragement}</p>
              </div>
            </>
          )}

          {/* Hidden Desire Test UI */}
          {isHiddenDesire && (
            <>
              {/* Core Desire */}
              <div className="mb-8 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-xl">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  핵심 욕망
                </h3>
                <p className="text-sm text-purple-700 dark:text-purple-300">{result.coreDesire}</p>
              </div>

              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">특징</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-violet-50 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Unconscious Behaviors */}
              <div className="mb-8 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4">
                <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  무의식적 행동
                </h3>
                <ul className="space-y-1">
                  {result.unconsciousBehaviors.map((item) => (
                    <li key={item} className="text-sm text-indigo-700 dark:text-indigo-300 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Strengths & Shadow Side */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" />
                    강점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                  <h3 className="font-bold text-gray-800 dark:text-gray-300 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    그림자 면
                  </h3>
                  <ul className="space-y-1">
                    {result.shadowSide.map((item) => (
                      <li key={item} className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Fulfillment Tips */}
              <div className="mb-8 bg-teal-50 dark:bg-teal-900/30 rounded-xl p-4">
                <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  욕망 충족 팁
                </h3>
                <ul className="space-y-1">
                  {result.fulfillmentTips.map((item) => (
                    <li key={item} className="text-sm text-teal-700 dark:text-teal-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warning & Affirmation */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    주의
                  </h3>
                  <p className="text-sm text-amber-700 dark:text-amber-300">{result.warning}</p>
                </div>
                <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    긍정 확언
                  </h3>
                  <p className="text-sm text-pink-700 dark:text-pink-300">{result.affirmation}</p>
                </div>
              </div>
            </>
          )}

          {/* Seduction Style Test UI */}
          {isSeductionStyle && (
            <>
              {/* Core Charm */}
              <div className="mb-8 p-4 bg-rose-50 dark:bg-rose-900/30 rounded-xl">
                <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  핵심 매력
                </h3>
                <p className="text-sm text-rose-700 dark:text-rose-300">{result.coreCharm}</p>
              </div>

              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">특징</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-pink-50 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Seduction Methods */}
              <div className="mb-8 bg-fuchsia-50 dark:bg-fuchsia-900/30 rounded-xl p-4">
                <h3 className="font-bold text-fuchsia-800 dark:text-fuchsia-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  유혹 방법
                </h3>
                <ul className="space-y-1">
                  {result.seductionMethods.map((item) => (
                    <li key={item} className="text-sm text-fuchsia-700 dark:text-fuchsia-300 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full"></span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" />
                    강점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
                    <X className="w-4 h-4" />
                    약점
                  </h3>
                  <ul className="space-y-1">
                    {result.weaknesses.map((item) => (
                      <li key={item} className="text-sm text-red-700 dark:text-red-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Best & Worst Target */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    잘 통하는 상대
                  </h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300">{result.bestTarget}</p>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    안 통하는 상대
                  </h3>
                  <p className="text-sm text-amber-700 dark:text-amber-300">{result.worstTarget}</p>
                </div>
              </div>

              {/* Tips */}
              <div className="mb-8 bg-teal-50 dark:bg-teal-900/30 rounded-xl p-4">
                <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  유혹 팁
                </h3>
                <ul className="space-y-1">
                  {result.tips.map((item) => (
                    <li key={item} className="text-sm text-teal-700 dark:text-teal-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Signature */}
              <div className="mb-8 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl">
                <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  시그니처 매력
                </h3>
                <p className="text-sm text-indigo-700 dark:text-indigo-300">{result.signature}</p>
              </div>
            </>
          )}

          {/* True Nature Test UI */}
          {isTrueNature && (
            <>
              {/* Hidden Self & Public Mask */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-800 dark:bg-gray-900 rounded-xl p-4">
                  <h3 className="font-bold text-gray-200 mb-2 flex items-center gap-2">
                    <Moon className="w-4 h-4" />
                    숨겨진 나
                  </h3>
                  <p className="text-sm text-gray-300">{result.hiddenSelf}</p>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-4 border border-gray-200 dark:border-gray-600">
                  <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                    <Sun className="w-4 h-4" />
                    겉으로 보이는 나
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.publicMask}</p>
                </div>
              </div>

              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">내면의 특징</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Triggers */}
              <div className="mb-8 bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4">
                <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  트리거 (본성이 나올 때)
                </h3>
                <ul className="space-y-1">
                  {result.triggers.map((item) => (
                    <li key={item} className="text-sm text-orange-700 dark:text-orange-300 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dark Side & Strengths */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
                  <h3 className="font-bold text-gray-800 dark:text-gray-300 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    어두운 면
                  </h3>
                  <ul className="space-y-1">
                    {result.darkSide.map((item) => (
                      <li key={item} className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" />
                    숨겨진 강점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Acceptance Tips */}
              <div className="mb-8 bg-teal-50 dark:bg-teal-900/30 rounded-xl p-4">
                <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  자기 수용 팁
                </h3>
                <ul className="space-y-1">
                  {result.acceptanceTips.map((item) => (
                    <li key={item} className="text-sm text-teal-700 dark:text-teal-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warning & Affirmation */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    주의
                  </h3>
                  <p className="text-sm text-amber-700 dark:text-amber-300">{result.warning}</p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    긍정 확언
                  </h3>
                  <p className="text-sm text-indigo-700 dark:text-indigo-300">{result.affirmation}</p>
                </div>
              </div>
            </>
          )}

          {/* Cheating Risk Test UI */}
          {isCheatingRisk && (
            <>
              {/* Level Indicator */}
              <div className="mb-8 p-4 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-xl">
                <h3 className="font-bold text-white mb-3 text-center">바람기 레벨</h3>
                <div className="flex justify-between items-center px-2">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div
                      key={level}
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                        level === result.level
                          ? 'bg-white text-gray-900 scale-125 shadow-lg'
                          : 'bg-white/30 text-white'
                      }`}
                    >
                      {level}
                    </div>
                  ))}
                </div>
              </div>

              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">특징</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-orange-50 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Risk Factors & Warning Signals */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    위험 요소
                  </h3>
                  <ul className="space-y-1">
                    {result.riskFactors.map((item) => (
                      <li key={item} className="text-sm text-red-700 dark:text-red-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    경고 신호
                  </h3>
                  <ul className="space-y-1">
                    {result.warningSignals.map((item) => (
                      <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Loyalty Factors */}
              <div className="mb-8 bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  충성 요인
                </h3>
                <ul className="space-y-1">
                  {result.loyaltyFactors.map((item) => (
                    <li key={item} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Partner Advice & Self Advice */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    파트너를 위한 조언
                  </h3>
                  <ul className="space-y-1">
                    {result.partnerAdvice.map((item) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                    <Brain className="w-4 h-4" />
                    자기 성찰
                  </h3>
                  <ul className="space-y-1">
                    {result.selfAdvice.map((item) => (
                      <li key={item} className="text-sm text-purple-700 dark:text-purple-300 flex items-center gap-1">
                        <Lightbulb className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Conclusion */}
              <div className="mb-8 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl">
                <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  결론
                </h3>
                <p className="text-sm text-indigo-700 dark:text-indigo-300">{result.conclusion}</p>
              </div>
            </>
          )}

          {/* Obsession Level Test UI */}
          {isObsessionLevel && (
            <>
              {/* Level Indicator */}
              <div className="mb-8 p-4 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-xl">
                <h3 className="font-bold text-white mb-3 text-center">집착 레벨</h3>
                <div className="flex justify-between items-center px-2">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div
                      key={level}
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                        level === result.level
                          ? 'bg-white text-gray-900 scale-125 shadow-lg'
                          : 'bg-white/30 text-white'
                      }`}
                    >
                      {level}
                    </div>
                  ))}
                </div>
              </div>

              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">특징</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-rose-50 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* In Relationship */}
              <div className="mb-8 bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4">
                <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  연애할 때
                </h3>
                <ul className="space-y-1">
                  {result.inRelationship.map((item) => (
                    <li key={item} className="text-sm text-pink-700 dark:text-pink-300 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Triggers & Warning Signals */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    트리거
                  </h3>
                  <ul className="space-y-1">
                    {result.triggers.map((item) => (
                      <li key={item} className="text-sm text-orange-700 dark:text-orange-300 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    경고 신호
                  </h3>
                  <ul className="space-y-1">
                    {result.warningSignals.map((item) => (
                      <li key={item} className="text-sm text-red-700 dark:text-red-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Healthy Tips */}
              <div className="mb-8 bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  건강한 관계를 위한 팁
                </h3>
                <ul className="space-y-1">
                  {result.healthyTips.map((item) => (
                    <li key={item} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Partner Advice & Self Care */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    파트너에게
                  </h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300">{result.partnerAdvice}</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    자기 돌봄
                  </h3>
                  <p className="text-sm text-purple-700 dark:text-purple-300">{result.selfCareAdvice}</p>
                </div>
              </div>
            </>
          )}

          {/* Gender Identity Test UI */}
          {isGenderIdentity && (
            <>
              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">특징</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-purple-50 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expression & Comfort */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    표현 방식
                  </h3>
                  <ul className="space-y-1">
                    {result.expression.map((item) => (
                      <li key={item} className="text-sm text-pink-700 dark:text-pink-300 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    편안함
                  </h3>
                  <ul className="space-y-1">
                    {result.comfort.map((item) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Social Tips & Self Acceptance */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-teal-50 dark:bg-teal-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    사회적 팁
                  </h3>
                  <ul className="space-y-1">
                    {result.socialTips.map((item) => (
                      <li key={item} className="text-sm text-teal-700 dark:text-teal-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-violet-50 dark:bg-violet-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-violet-800 dark:text-violet-300 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    자기 수용
                  </h3>
                  <ul className="space-y-1">
                    {result.selfAcceptance.map((item) => (
                      <li key={item} className="text-sm text-violet-700 dark:text-violet-300 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Resources */}
              <div className="mb-8 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4">
                <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  참고 자료
                </h3>
                <ul className="space-y-1">
                  {result.resources.map((item) => (
                    <li key={item} className="text-sm text-indigo-700 dark:text-indigo-300 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Affirmation */}
              <div className="mb-8 p-4 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 dark:from-pink-900/30 dark:via-purple-900/30 dark:to-blue-900/30 rounded-xl">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  긍정 확언
                </h3>
                <p className="text-sm text-purple-700 dark:text-purple-300 font-medium">{result.affirmation}</p>
              </div>
            </>
          )}

          {/* Youtuber Type Test UI */}
          {isYoutuberType && (
            <>
              {/* Channel Name */}
              <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/30 rounded-xl text-center">
                <h3 className="font-bold text-red-800 dark:text-red-300 mb-2">예상 채널명</h3>
                <p className="text-lg font-bold text-red-700 dark:text-red-300">{result.channelName}</p>
              </div>

              {/* Content Style */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">콘텐츠 스타일</h2>
                <div className="flex flex-wrap gap-2">
                  {result.contentStyle.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-rose-50 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" />
                    강점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    약점
                  </h3>
                  <ul className="space-y-1">
                    {result.weaknesses.map((item) => (
                      <li key={item} className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Equipment & Upload */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Wrench className="w-4 h-4" />
                    필요 장비
                  </h3>
                  <ul className="space-y-1">
                    {result.equipment.map((item) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    업로드 주기
                  </h3>
                  <p className="text-sm text-purple-700 dark:text-purple-300">{result.uploadFrequency}</p>
                  <p className="text-xs text-purple-600 dark:text-purple-400 mt-2">타겟: {result.targetAudience}</p>
                </div>
              </div>

              {/* Growth Tips */}
              <div className="mb-8 bg-teal-50 dark:bg-teal-900/30 rounded-xl p-4">
                <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  성장 팁
                </h3>
                <ul className="space-y-1">
                  {result.growthTips.map((item) => (
                    <li key={item} className="text-sm text-teal-700 dark:text-teal-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Famous Example & Expected Subscribers */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    유사 유튜버
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {result.famousExample.map((item) => (
                      <span key={item} className="text-sm text-pink-700 dark:text-pink-300 bg-pink-100 dark:bg-pink-800/50 px-2 py-0.5 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    예상 구독자
                  </h3>
                  <p className="text-lg font-bold text-indigo-700 dark:text-indigo-300">{result.expectedSubscribers}</p>
                </div>
              </div>

              {/* Hashtags */}
              <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">추천 해시태그</h3>
                <div className="flex flex-wrap gap-2">
                  {result.hashtags.map((tag) => (
                    <span key={tag} className="text-sm text-gray-600 dark:text-gray-300">{tag}</span>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Attention Seeker Test UI */}
          {isAttentionSeeker && (
            <>
              {/* Level Indicator */}
              <div className="mb-8 p-4 bg-gradient-to-r from-blue-500 via-yellow-500 to-red-500 rounded-xl">
                <h3 className="font-bold text-white mb-3 text-center">관종력 레벨</h3>
                <div className="flex justify-between items-center px-2">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div
                      key={level}
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                        level === result.level
                          ? 'bg-white text-gray-900 scale-125 shadow-lg'
                          : 'bg-white/30 text-white'
                      }`}
                    >
                      {level}
                    </div>
                  ))}
                </div>
              </div>

              {/* Characteristics */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">특징</h2>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-amber-50 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Behaviors & Social Media */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    행동 패턴
                  </h3>
                  <ul className="space-y-1">
                    {result.behaviors.map((item) => (
                      <li key={item} className="text-sm text-orange-700 dark:text-orange-300 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2 flex items-center gap-2">
                    <Smartphone className="w-4 h-4" />
                    SNS 행동
                  </h3>
                  <ul className="space-y-1">
                    {result.socialMedia.map((item) => (
                      <li key={item} className="text-sm text-pink-700 dark:text-pink-300 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Strengths & Watch Out */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" />
                    강점
                  </h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-green-700 dark:text-green-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    주의할 점
                  </h3>
                  <ul className="space-y-1">
                    {result.watchOut.map((item) => (
                      <li key={item} className="text-sm text-red-700 dark:text-red-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Healthy Tips */}
              <div className="mb-8 bg-teal-50 dark:bg-teal-900/30 rounded-xl p-4">
                <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  건강한 관심 추구 팁
                </h3>
                <ul className="space-y-1">
                  {result.healthyTips.map((item) => (
                    <li key={item} className="text-sm text-teal-700 dark:text-teal-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inner Need */}
              <div className="mb-8 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-xl">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  내면의 욕구
                </h3>
                <p className="text-sm text-purple-700 dark:text-purple-300">{result.innerNeed}</p>
                <p className="text-xs text-purple-600 dark:text-purple-400 mt-2">비슷한 타입: {result.famousExample}</p>
              </div>
            </>
          )}

          {/* MBTI Shadow Test UI */}
          {isMbtiShadow && (
            <>
              {/* MBTI Comparison */}
              <div className="mb-8 grid grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 text-center">
                  <h3 className="text-sm text-blue-600 dark:text-blue-400 mb-1">평소 모습</h3>
                  <div className="text-2xl font-bold text-blue-800 dark:text-blue-300">{result.mainMbti}</div>
                  <div className="text-xs text-blue-600 dark:text-blue-400 mt-2">
                    {result.mainTraits.slice(0, 2).join(', ')}
                  </div>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4 text-center">
                  <h3 className="text-sm text-purple-600 dark:text-purple-400 mb-1">숨겨진 모습</h3>
                  <div className="text-2xl font-bold text-purple-800 dark:text-purple-300">{result.shadowMbti}</div>
                  <div className="text-xs text-purple-600 dark:text-purple-400 mt-2">
                    {result.shadowTraits.slice(0, 2).join(', ')}
                  </div>
                </div>
              </div>

              {/* When Shadow Appears */}
              <div className="mb-8 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4">
                <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2">숨겨진 나가 나타날 때</h3>
                <ul className="space-y-1">
                  {result.whenShadowAppears.map((item) => (
                    <li key={item} className="text-sm text-indigo-700 dark:text-indigo-300 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Balance Tips */}
              <div className="mb-8 bg-teal-50 dark:bg-teal-900/30 rounded-xl p-4">
                <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  균형 팁
                </h3>
                <ul className="space-y-1">
                  {result.balanceTips.map((item) => (
                    <li key={item} className="text-sm text-teal-700 dark:text-teal-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* MBTI Stress Test UI */}
          {isMbtiStress && (
            <>
              {/* Normal vs Stress */}
              <div className="mb-8 grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">평소 상태</h3>
                  <p className="text-sm text-green-700 dark:text-green-300">{result.normalState}</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-2">스트레스 상태</h3>
                  <p className="text-sm text-red-700 dark:text-red-300">{result.stressState}</p>
                </div>
              </div>

              {/* Triggers & Reactions */}
              <div className="mb-8 grid md:grid-cols-2 gap-4">
                <div className="bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2">스트레스 원인</h3>
                  <ul className="space-y-1">
                    {result.stressTriggers.map((item) => (
                      <li key={item} className="text-sm text-orange-700 dark:text-orange-300">• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-rose-50 dark:bg-rose-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2">스트레스 반응</h3>
                  <ul className="space-y-1">
                    {result.stressReactions.map((item) => (
                      <li key={item} className="text-sm text-rose-700 dark:text-rose-300">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Recovery Methods */}
              <div className="mb-8 bg-teal-50 dark:bg-teal-900/30 rounded-xl p-4">
                <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-2">회복 방법</h3>
                <div className="flex flex-wrap gap-2">
                  {result.recoveryMethods.map((item) => (
                    <span key={item} className="px-3 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Alpha Gen Test UI */}
          {isAlphaGen && (
            <>
              {/* Score Gauge */}
              <div className="mb-8 bg-cyan-50 dark:bg-cyan-900/30 rounded-xl p-4">
                <h3 className="font-bold text-cyan-800 dark:text-cyan-300 mb-3 text-center">이해력 점수</h3>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 h-4 rounded-full transition-all duration-500"
                    style={{ width: `${result.score}%` }}
                  ></div>
                </div>
                <div className="text-center mt-2 text-2xl font-bold text-cyan-800 dark:text-cyan-300">{result.score}점</div>
              </div>

              {/* Alpha Terms */}
              <div className="mb-8 bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-3">알파세대 용어</h3>
                <div className="space-y-2">
                  {result.alphaTerms.map((term) => (
                    <div key={term.term} className="flex items-center gap-2">
                      <span className="font-bold text-purple-700 dark:text-purple-300">{term.term}:</span>
                      <span className="text-sm text-purple-600 dark:text-purple-400">{term.meaning}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Generation Gap */}
              <div className="mb-8 bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">세대 차이</h3>
                <ul className="space-y-1">
                  {result.generationGap.map((item) => (
                    <li key={item} className="text-sm text-blue-700 dark:text-blue-300">• {item}</li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* Digital Native Test UI */}
          {isDigitalNative && (
            <>
              {/* Score */}
              <div className="mb-8 bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 text-center">디지털 적응 점수</h3>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-emerald-500 h-4 rounded-full"
                    style={{ width: `${result.score}%` }}
                  ></div>
                </div>
                <div className="text-center mt-2 text-2xl font-bold text-green-800 dark:text-green-300">{result.score}점</div>
              </div>

              {/* Digital Skills */}
              <div className="mb-8">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">디지털 스킬</h3>
                <div className="flex flex-wrap gap-2">
                  {result.digitalSkills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recommended Tools */}
              <div className="mb-8 bg-teal-50 dark:bg-teal-900/30 rounded-xl p-4">
                <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-2">추천 도구</h3>
                <div className="flex flex-wrap gap-2">
                  {result.recommendedTools.map((tool) => (
                    <span key={tool} className="px-2 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 rounded text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Future Readiness */}
              <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl text-center">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-1">미래 준비도</h3>
                <p className="text-sm text-blue-700 dark:text-blue-300">{result.futureReadiness}</p>
              </div>
            </>
          )}

          {/* Midnight Snack Test UI */}
          {isMidnightSnack && (
            <>
              {/* Favorite Snacks */}
              <div className="mb-8">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">최애 야식</h3>
                <div className="flex flex-wrap gap-2">
                  {result.favoriteSnacks.map((snack) => (
                    <span key={snack} className="px-3 py-1.5 bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 rounded-full text-sm">
                      {snack}
                    </span>
                  ))}
                </div>
              </div>

              {/* Snacking Style */}
              <div className="mb-8 bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4">
                <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2">야식 스타일</h3>
                <p className="text-sm text-orange-700 dark:text-orange-300">{result.snackingStyle}</p>
              </div>

              {/* Perfect Night */}
              <div className="mb-8 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4">
                <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
                  <Moon className="w-4 h-4" />
                  완벽한 야식 타임
                </h3>
                <p className="text-sm text-indigo-700 dark:text-indigo-300">{result.perfectNight}</p>
              </div>

              {/* Calorie Warning */}
              <div className="mb-8 p-3 bg-red-50 dark:bg-red-900/30 rounded-lg">
                <p className="text-sm text-red-600 dark:text-red-400 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  {result.calorieWarning}
                </p>
              </div>

              {/* Hashtags */}
              <div className="mb-8 flex flex-wrap gap-2">
                {result.hashtags.map((tag) => (
                  <span key={tag} className="text-sm text-blue-600 dark:text-blue-400">{tag}</span>
                ))}
              </div>
            </>
          )}

          {/* Travel Style Test UI */}
          {isTravelStyle && (
            <>
              {/* Travel Traits */}
              <div className="mb-8">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">여행 성향</h3>
                <div className="flex flex-wrap gap-2">
                  {result.travelTraits.map((trait) => (
                    <span key={trait} className="px-3 py-1 bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300 rounded-full text-sm">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              {/* Perfect Trip & Destinations */}
              <div className="mb-8 grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">완벽한 여행</h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300">{result.perfectTrip}</p>
                </div>
                <div className="bg-teal-50 dark:bg-teal-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-2">추천 여행지</h3>
                  <div className="flex flex-wrap gap-1">
                    {result.destinations.map((dest) => (
                      <span key={dest} className="text-sm text-teal-700 dark:text-teal-300">• {dest}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Must Haves */}
              <div className="mb-8 bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2">여행 필수템</h3>
                <div className="flex flex-wrap gap-2">
                  {result.mustHaves.map((item) => (
                    <span key={item} className="px-2 py-1 bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 rounded text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Travel Partner */}
              <div className="mb-8 p-4 bg-rose-50 dark:bg-rose-900/30 rounded-xl">
                <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-1">이상적인 여행 메이트</h3>
                <p className="text-sm text-rose-700 dark:text-rose-300">{result.travelPartner}</p>
              </div>
            </>
          )}

          {/* Shopping Type Test UI */}
          {isShoppingType && (
            <>
              {/* Shopping Style */}
              <div className="mb-8">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">쇼핑 스타일</h3>
                <div className="flex flex-wrap gap-2">
                  {result.shoppingStyle.map((style) => (
                    <span key={style} className="px-3 py-1 bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300 rounded-full text-sm">
                      {style}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="mb-8 grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">강점</h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-green-700 dark:text-green-300">✓ {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-2">약점</h3>
                  <ul className="space-y-1">
                    {result.weaknesses.map((item) => (
                      <li key={item} className="text-sm text-red-700 dark:text-red-300">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Best For & Danger Zone */}
              <div className="mb-8 grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">이럴 때 강함</h3>
                  <ul className="space-y-1">
                    {result.bestFor.map((item) => (
                      <li key={item} className="text-sm text-blue-700 dark:text-blue-300">• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    위험 지역
                  </h3>
                  <p className="text-sm text-orange-700 dark:text-orange-300">{result.dangerZone}</p>
                </div>
              </div>

              {/* Perfect Store */}
              <div className="mb-8 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-xl">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-1">딱 맞는 쇼핑 장소</h3>
                <p className="text-sm text-purple-700 dark:text-purple-300">{result.perfectStore}</p>
              </div>
            </>
          )}

          {/* Pet Match Test UI */}
          {isPetMatch && (
            <>
              {/* Match Score */}
              <div className="mb-8 bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4 text-center">
                <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2">궁합 점수</h3>
                <div className="text-4xl font-bold text-amber-600 dark:text-amber-400">{result.matchScore}%</div>
              </div>

              {/* Why Match */}
              <div className="mb-8 bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">왜 잘 맞나요?</h3>
                <ul className="space-y-1">
                  {result.whyMatch.map((item) => (
                    <li key={item} className="text-sm text-green-700 dark:text-green-300">✓ {item}</li>
                  ))}
                </ul>
              </div>

              {/* Care Level & Lifestyle */}
              <div className="mb-8 grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">케어 난이도</h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300">{result.careLevel}</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">함께하는 라이프</h3>
                  <ul className="space-y-1">
                    {result.lifestyle.slice(0, 3).map((item) => (
                      <li key={item} className="text-sm text-purple-700 dark:text-purple-300">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Alternative Pets */}
              <div className="mb-8 bg-rose-50 dark:bg-rose-900/30 rounded-xl p-4">
                <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2">이런 반려동물도 잘 맞아요</h3>
                <div className="flex flex-wrap gap-2">
                  {result.alternativePets.map((pet) => (
                    <span key={pet} className="px-3 py-1 bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300 rounded-full text-sm">
                      {pet}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Zombie Survival Test UI */}
          {isZombieSurvival && (
            <>
              {/* Survival Rate */}
              <div className="mb-8 bg-gray-800 dark:bg-gray-900 rounded-xl p-4 text-center">
                <h3 className="font-bold text-green-400 mb-2">생존 확률</h3>
                <div className="text-5xl font-bold text-green-500">{result.survivalRate}%</div>
              </div>

              {/* Best Role & Team Value */}
              <div className="mb-8 grid md:grid-cols-2 gap-4">
                <div className="bg-green-900/30 dark:bg-green-900/50 rounded-xl p-4">
                  <h3 className="font-bold text-green-400 mb-2">생존 역할</h3>
                  <p className="text-sm text-green-300">{result.bestRole}</p>
                </div>
                <div className="bg-blue-900/30 dark:bg-blue-900/50 rounded-xl p-4">
                  <h3 className="font-bold text-blue-400 mb-2">팀에서의 가치</h3>
                  <p className="text-sm text-blue-300">{result.teamValue}</p>
                </div>
              </div>

              {/* Survival Strategy */}
              <div className="mb-8 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl p-4">
                <h3 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2">생존 전략</h3>
                <div className="flex flex-wrap gap-2">
                  {result.survivalStrategy.map((strategy) => (
                    <span key={strategy} className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 rounded-full text-sm">
                      {strategy}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="mb-8 grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">강점</h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-green-700 dark:text-green-300">✓ {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-2">약점</h3>
                  <ul className="space-y-1">
                    {result.weaknesses.map((item) => (
                      <li key={item} className="text-sm text-red-700 dark:text-red-300">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Death Scenario */}
              <div className="mb-8 p-3 bg-gray-800 dark:bg-gray-900 rounded-lg">
                <p className="text-sm text-red-400 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  예상 사망 시나리오: {result.deathScenario}
                </p>
              </div>
            </>
          )}

          {/* Island Survival Test UI */}
          {isIslandSurvival && (
            <>
              {/* Survival Days */}
              <div className="mb-8 bg-cyan-50 dark:bg-cyan-900/30 rounded-xl p-4 text-center">
                <h3 className="font-bold text-cyan-800 dark:text-cyan-300 mb-2">예상 생존 기간</h3>
                <div className="text-5xl font-bold text-cyan-600 dark:text-cyan-400">{result.survivalDays}일</div>
              </div>

              {/* First Priority */}
              <div className="mb-8 bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  첫 번째 우선순위
                </h3>
                <p className="text-sm text-amber-700 dark:text-amber-300">{result.firstPriority}</p>
              </div>

              {/* Survival Strategy */}
              <div className="mb-8 bg-teal-50 dark:bg-teal-900/30 rounded-xl p-4">
                <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-2">생존 전략</h3>
                <div className="flex flex-wrap gap-2">
                  {result.survivalStrategy.map((strategy) => (
                    <span key={strategy} className="px-3 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 rounded-full text-sm">
                      {strategy}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="mb-8 grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">강점</h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-green-700 dark:text-green-300">✓ {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-2">약점</h3>
                  <ul className="space-y-1">
                    {result.weaknesses.map((item) => (
                      <li key={item} className="text-sm text-red-700 dark:text-red-300">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Rescue & Comparison */}
              <div className="mb-8 grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">구조 가능성</h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300">{result.rescueProbability}</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">비슷한 캐릭터</h3>
                  <p className="text-sm text-purple-700 dark:text-purple-300">{result.famousComparison}</p>
                </div>
              </div>
            </>
          )}

          {/* MBTI Office Test UI */}
          {isMbtiOffice && (
            <>
              {/* Office Role & Work Style */}
              <div className="mb-8 grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">직장에서의 역할</h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300">{result.officeRole}</p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2">업무 스타일</h3>
                  <p className="text-sm text-indigo-700 dark:text-indigo-300">{result.workStyle}</p>
                </div>
              </div>

              {/* Strengths & Challenges */}
              <div className="mb-8 grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">강점</h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-green-700 dark:text-green-300">✓ {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2">도전 과제</h3>
                  <ul className="space-y-1">
                    {result.challenges.map((item) => (
                      <li key={item} className="text-sm text-orange-700 dark:text-orange-300">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Survival Tips */}
              <div className="mb-8 bg-violet-50 dark:bg-violet-900/30 rounded-xl p-4">
                <h3 className="font-bold text-violet-800 dark:text-violet-300 mb-2">직장 생존 팁</h3>
                <div className="flex flex-wrap gap-2">
                  {result.survivalTips.map((tip) => (
                    <span key={tip} className="px-3 py-1 bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 rounded-full text-sm">
                      {tip}
                    </span>
                  ))}
                </div>
              </div>

              {/* Compatibility */}
              <div className="mb-8 grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">잘 맞는 동료</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {result.bestWith.map((type) => (
                      <span key={type} className="px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded text-sm">{type}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-2">힘든 동료</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {result.worstWith.map((type) => (
                      <span key={type} className="px-2 py-1 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 rounded text-sm">{type}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stress Signal */}
              <div className="mb-8 p-3 bg-amber-50 dark:bg-amber-900/30 rounded-lg">
                <p className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  스트레스 신호: {result.stressSignal}
                </p>
              </div>
            </>
          )}

          {/* MBTI Dating Test UI */}
          {isMbtiDating && (
            <>
              {/* Love Style & Communication */}
              <div className="mb-8 grid md:grid-cols-2 gap-4">
                <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2">연애 스타일</h3>
                  <p className="text-sm text-pink-700 dark:text-pink-300">{result.loveStyle}</p>
                </div>
                <div className="bg-rose-50 dark:bg-rose-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2">소통 방식</h3>
                  <p className="text-sm text-rose-700 dark:text-rose-300">{result.communicationStyle}</p>
                </div>
              </div>

              {/* Dating Traits */}
              <div className="mb-8 bg-fuchsia-50 dark:bg-fuchsia-900/30 rounded-xl p-4">
                <h3 className="font-bold text-fuchsia-800 dark:text-fuchsia-300 mb-2">연애할 때 특징</h3>
                <div className="flex flex-wrap gap-2">
                  {result.datingTraits.map((trait) => (
                    <span key={trait} className="px-3 py-1 bg-fuchsia-100 dark:bg-fuchsia-900/50 text-fuchsia-700 dark:text-fuchsia-300 rounded-full text-sm">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths & Challenges */}
              <div className="mb-8 grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">연애 강점</h3>
                  <ul className="space-y-1">
                    {result.loveStrengths.map((item) => (
                      <li key={item} className="text-sm text-green-700 dark:text-green-300">✓ {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2">연애 도전</h3>
                  <ul className="space-y-1">
                    {result.loveChallenges.map((item) => (
                      <li key={item} className="text-sm text-orange-700 dark:text-orange-300">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Ideal Date Ideas */}
              <div className="mb-8 bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">이상적인 데이트</h3>
                <div className="flex flex-wrap gap-2">
                  {result.idealDateIdeas.map((idea) => (
                    <span key={idea} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                      {idea}
                    </span>
                  ))}
                </div>
              </div>

              {/* Best Match & Conflict Style */}
              <div className="mb-8 grid md:grid-cols-2 gap-4">
                <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2">잘 맞는 유형</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {result.bestMatch.map((type) => (
                      <span key={type} className="px-2 py-1 bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300 rounded text-sm">{type}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2">갈등 스타일</h3>
                  <p className="text-sm text-amber-700 dark:text-amber-300">{result.conflictStyle}</p>
                </div>
              </div>

              {/* Growth Tip */}
              <div className="mb-8 p-3 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg">
                <p className="text-sm text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  성장 팁: {result.growthTip}
                </p>
              </div>
            </>
          )}

          {/* Driving Personality Test UI */}
          {isDrivingPersonality && (
            <>
              {/* Driving Style & Road Rage */}
              <div className="mb-8 grid md:grid-cols-2 gap-4">
                <div className="bg-gray-100 dark:bg-gray-700/50 rounded-xl p-4">
                  <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">운전 스타일</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.drivingStyle}</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-2">로드레이지 레벨</h3>
                  <p className="text-sm text-red-700 dark:text-red-300">{result.roadRageLevel}</p>
                </div>
              </div>

              {/* Characteristics */}
              <div className="mb-8 bg-slate-100 dark:bg-slate-800/50 rounded-xl p-4">
                <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-2">운전 특징</h3>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((char) => (
                    <span key={char} className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm">
                      {char}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths & Dangers */}
              <div className="mb-8 grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">장점</h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-green-700 dark:text-green-300">✓ {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-2">주의할 점</h3>
                  <ul className="space-y-1">
                    {result.dangers.map((item) => (
                      <li key={item} className="text-sm text-red-700 dark:text-red-300">⚠ {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tips */}
              <div className="mb-8 bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">안전 운전 팁</h3>
                <div className="flex flex-wrap gap-2">
                  {result.tips.map((tip) => (
                    <span key={tip} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                      {tip}
                    </span>
                  ))}
                </div>
              </div>

              {/* Music Style */}
              <div className="mb-8 p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                <p className="text-sm text-purple-700 dark:text-purple-300 flex items-center gap-2">
                  <Music className="w-4 h-4" />
                  드라이브 음악: {result.musicStyle}
                </p>
              </div>
            </>
          )}

          {/* Karaoke Type Test UI */}
          {isKaraokeType && (
            <>
              {/* Signature & With Friends */}
              <div className="mb-8 grid md:grid-cols-2 gap-4">
                <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">시그니처</h3>
                  <p className="text-sm text-purple-700 dark:text-purple-300">{result.signature}</p>
                </div>
                <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2">친구들과 함께하면</h3>
                  <p className="text-sm text-pink-700 dark:text-pink-300">{result.withFriends}</p>
                </div>
              </div>

              {/* Characteristics */}
              <div className="mb-8 bg-fuchsia-50 dark:bg-fuchsia-900/30 rounded-xl p-4">
                <h3 className="font-bold text-fuchsia-800 dark:text-fuchsia-300 mb-2">노래방 특징</h3>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((char) => (
                    <span key={char} className="px-3 py-1 bg-fuchsia-100 dark:bg-fuchsia-900/50 text-fuchsia-700 dark:text-fuchsia-300 rounded-full text-sm">
                      {char}
                    </span>
                  ))}
                </div>
              </div>

              {/* Song Style & Strengths */}
              <div className="mb-8 grid md:grid-cols-2 gap-4">
                <div className="bg-violet-50 dark:bg-violet-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-violet-800 dark:text-violet-300 mb-2">선호 장르</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {result.songStyle.map((style) => (
                      <span key={style} className="px-2 py-1 bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 rounded text-sm">{style}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">강점</h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-green-700 dark:text-green-300">✓ {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Recommended Songs */}
              <div className="mb-8 bg-rose-50 dark:bg-rose-900/30 rounded-xl p-4">
                <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2">추천곡</h3>
                <div className="flex flex-wrap gap-2">
                  {result.recommendedSongs.map((song) => (
                    <span key={song} className="px-3 py-1 bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300 rounded-full text-sm">
                      🎵 {song}
                    </span>
                  ))}
                </div>
              </div>

              {/* Fun Facts */}
              <div className="mb-8 bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2">재밌는 사실</h3>
                <ul className="space-y-1">
                  {result.funFacts.map((fact) => (
                    <li key={fact} className="text-sm text-amber-700 dark:text-amber-300">😄 {fact}</li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* Fashion Personality Test UI */}
          {isFashionPersonality && (
            <>
              {/* Style Keywords */}
              <div className="mb-8 bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4">
                <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2">스타일 키워드</h3>
                <div className="flex flex-wrap gap-2">
                  {result.styleKeywords.map((keyword) => (
                    <span key={keyword} className="px-3 py-1 bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300 rounded-full text-sm">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Color Palette & Wardrobe */}
              <div className="mb-8 grid md:grid-cols-2 gap-4">
                <div className="bg-fuchsia-50 dark:bg-fuchsia-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-fuchsia-800 dark:text-fuchsia-300 mb-2">컬러 팔레트</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {result.colorPalette.map((color) => (
                      <span key={color} className="px-2 py-1 bg-fuchsia-100 dark:bg-fuchsia-900/50 text-fuchsia-700 dark:text-fuchsia-300 rounded text-sm">{color}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-rose-50 dark:bg-rose-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2">필수 아이템</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {result.wardrobe.map((item) => (
                      <span key={item} className="px-2 py-1 bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300 rounded text-sm">{item}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Characteristics */}
              <div className="mb-8 bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">패션 특징</h3>
                <ul className="space-y-1">
                  {result.characteristics.map((char) => (
                    <li key={char} className="text-sm text-purple-700 dark:text-purple-300">• {char}</li>
                  ))}
                </ul>
              </div>

              {/* Shopping Style & Fashion Icon */}
              <div className="mb-8 grid md:grid-cols-2 gap-4">
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2">쇼핑 스타일</h3>
                  <p className="text-sm text-amber-700 dark:text-amber-300">{result.shoppingStyle}</p>
                </div>
                <div className="bg-violet-50 dark:bg-violet-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-violet-800 dark:text-violet-300 mb-2">패션 아이콘</h3>
                  <p className="text-sm text-violet-700 dark:text-violet-300">{result.fashionIcon}</p>
                </div>
              </div>

              {/* Improvement */}
              <div className="mb-8 p-3 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg">
                <p className="text-sm text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  스타일 업그레이드: {result.improvement}
                </p>
              </div>
            </>
          )}

          {/* Food Taste Test UI */}
          {isFoodTaste && (
            <>
              {/* Eating Style & Personality */}
              <div className="mb-8 grid md:grid-cols-2 gap-4">
                <div className="bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2">식사 스타일</h3>
                  <p className="text-sm text-orange-700 dark:text-orange-300">{result.eatingStyle}</p>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2">음식 성격</h3>
                  <p className="text-sm text-amber-700 dark:text-amber-300">{result.personality}</p>
                </div>
              </div>

              {/* Food Preferences */}
              <div className="mb-8 bg-yellow-50 dark:bg-yellow-900/30 rounded-xl p-4">
                <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2">음식 취향</h3>
                <div className="flex flex-wrap gap-2">
                  {result.foodPreferences.map((pref) => (
                    <span key={pref} className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300 rounded-full text-sm">
                      {pref}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recommended & Avoid Foods */}
              <div className="mb-8 grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">추천 음식</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {result.recommendedFoods.map((food) => (
                      <span key={food} className="px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded text-sm">🍽️ {food}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-2">피해야 할 음식</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {result.avoidFoods.map((food) => (
                      <span key={food} className="px-2 py-1 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 rounded text-sm">❌ {food}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Characteristics */}
              <div className="mb-8 bg-rose-50 dark:bg-rose-900/30 rounded-xl p-4">
                <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2">특징</h3>
                <ul className="space-y-1">
                  {result.characteristics.map((char) => (
                    <li key={char} className="text-sm text-rose-700 dark:text-rose-300">• {char}</li>
                  ))}
                </ul>
              </div>

              {/* Dining Tip */}
              <div className="mb-8 p-3 bg-teal-50 dark:bg-teal-900/30 rounded-lg">
                <p className="text-sm text-teal-700 dark:text-teal-300 flex items-center gap-2">
                  <Utensils className="w-4 h-4" />
                  식사 팁: {result.diningTip}
                </p>
              </div>
            </>
          )}

          {/* Room Cleaning Test UI */}
          {isRoomCleaning && (
            <>
              {/* Room Style & Personality */}
              <div className="mb-8 grid md:grid-cols-2 gap-4">
                <div className="bg-sky-50 dark:bg-sky-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-sky-800 dark:text-sky-300 mb-2">방 스타일</h3>
                  <p className="text-sm text-sky-700 dark:text-sky-300">{result.roomStyle}</p>
                </div>
                <div className="bg-cyan-50 dark:bg-cyan-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-cyan-800 dark:text-cyan-300 mb-2">정리 성격</h3>
                  <p className="text-sm text-cyan-700 dark:text-cyan-300">{result.personality}</p>
                </div>
              </div>

              {/* Characteristics */}
              <div className="mb-8 bg-teal-50 dark:bg-teal-900/30 rounded-xl p-4">
                <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-2">정리 특징</h3>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((char) => (
                    <span key={char} className="px-3 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 rounded-full text-sm">
                      {char}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths & Challenges */}
              <div className="mb-8 grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">강점</h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-green-700 dark:text-green-300">✓ {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2">도전 과제</h3>
                  <ul className="space-y-1">
                    {result.challenges.map((item) => (
                      <li key={item} className="text-sm text-orange-700 dark:text-orange-300">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Cleaning Tips */}
              <div className="mb-8 bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">정리 팁</h3>
                <div className="flex flex-wrap gap-2">
                  {result.cleaningTips.map((tip) => (
                    <span key={tip} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                      {tip}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ideal Room */}
              <div className="mb-8 p-3 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg">
                <p className="text-sm text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  이상적인 방: {result.idealRoom}
                </p>
              </div>
            </>
          )}

          {/* Hobby Recommend Test UI */}
          {isHobbyRecommend && (
            <>
              {/* Personality & Difficulty */}
              <div className="mb-8 grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">취미 성향</h3>
                  <p className="text-sm text-green-700 dark:text-green-300">{result.personality}</p>
                </div>
                <div className="bg-emerald-50 dark:bg-emerald-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2">난이도</h3>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300">{result.difficulty}</p>
                </div>
              </div>

              {/* Recommended Hobbies */}
              <div className="mb-8 bg-teal-50 dark:bg-teal-900/30 rounded-xl p-4">
                <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-2">추천 취미</h3>
                <div className="flex flex-wrap gap-2">
                  {result.recommendedHobbies.map((hobby) => (
                    <span key={hobby} className="px-3 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 rounded-full text-sm">
                      🎯 {hobby}
                    </span>
                  ))}
                </div>
              </div>

              {/* Why Match */}
              <div className="mb-8 bg-cyan-50 dark:bg-cyan-900/30 rounded-xl p-4">
                <h3 className="font-bold text-cyan-800 dark:text-cyan-300 mb-2">왜 맞을까?</h3>
                <ul className="space-y-1">
                  {result.whyMatch.map((reason) => (
                    <li key={reason} className="text-sm text-cyan-700 dark:text-cyan-300">✓ {reason}</li>
                  ))}
                </ul>
              </div>

              {/* Benefits & Start Tips */}
              <div className="mb-8 grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">기대 효과</h3>
                  <ul className="space-y-1">
                    {result.benefits.map((benefit) => (
                      <li key={benefit} className="text-sm text-blue-700 dark:text-blue-300">💫 {benefit}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2">시작 팁</h3>
                  <ul className="space-y-1">
                    {result.startTips.map((tip) => (
                      <li key={tip} className="text-sm text-indigo-700 dark:text-indigo-300">📝 {tip}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Related Hobbies */}
              <div className="mb-8 bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">관련 취미</h3>
                <div className="flex flex-wrap gap-1.5">
                  {result.relatedHobbies.map((hobby) => (
                    <span key={hobby} className="px-2 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded text-sm">{hobby}</span>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Morning Night Test UI */}
          {isMorningNight && (
            <>
              {/* Chronotype & Peak Hours */}
              <div className="mb-8 grid md:grid-cols-2 gap-4">
                <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2">생체리듬 유형</h3>
                  <p className="text-sm text-amber-700 dark:text-amber-300">{result.chronotype}</p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2">최고 집중 시간</h3>
                  <p className="text-sm text-orange-700 dark:text-orange-300">{result.peakHours}</p>
                </div>
              </div>

              {/* Characteristics */}
              <div className="mb-8 bg-yellow-50 dark:bg-yellow-900/30 rounded-xl p-4">
                <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2">특징</h3>
                <div className="flex flex-wrap gap-2">
                  {result.characteristics.map((char) => (
                    <span key={char} className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300 rounded-full text-sm">
                      {char}
                    </span>
                  ))}
                </div>
              </div>

              {/* Lifestyle */}
              <div className="mb-8 bg-rose-50 dark:bg-rose-900/30 rounded-xl p-4">
                <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2">생활 패턴</h3>
                <ul className="space-y-1">
                  {result.lifestyle.map((item) => (
                    <li key={item} className="text-sm text-rose-700 dark:text-rose-300">• {item}</li>
                  ))}
                </ul>
              </div>

              {/* Strengths & Challenges */}
              <div className="mb-8 grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">강점</h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-green-700 dark:text-green-300">✓ {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-2">도전 과제</h3>
                  <ul className="space-y-1">
                    {result.challenges.map((item) => (
                      <li key={item} className="text-sm text-red-700 dark:text-red-300">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tips */}
              <div className="mb-8 bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">생활 팁</h3>
                <div className="flex flex-wrap gap-2">
                  {result.tips.map((tip) => (
                    <span key={tip} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                      {tip}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ideal Schedule */}
              <div className="mb-8 p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
                <p className="text-sm text-indigo-700 dark:text-indigo-300 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  이상적인 스케줄: {result.idealSchedule}
                </p>
              </div>
            </>
          )}

          {/* Season Personality Test UI */}
          {isSeasonPersonality && (
            <>
              {/* Season & Love Style */}
              <div className="mb-8 grid md:grid-cols-2 gap-4">
                <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2">당신의 계절</h3>
                  <p className="text-sm text-pink-700 dark:text-pink-300">{result.season}</p>
                </div>
                <div className="bg-rose-50 dark:bg-rose-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2">연애 스타일</h3>
                  <p className="text-sm text-rose-700 dark:text-rose-300">{result.loveStyle}</p>
                </div>
              </div>

              {/* Color Palette */}
              <div className="mb-8 bg-fuchsia-50 dark:bg-fuchsia-900/30 rounded-xl p-4">
                <h3 className="font-bold text-fuchsia-800 dark:text-fuchsia-300 mb-2">컬러 팔레트</h3>
                <div className="flex flex-wrap gap-2">
                  {result.colorPalette.map((color) => (
                    <span key={color} className="px-3 py-1 bg-fuchsia-100 dark:bg-fuchsia-900/50 text-fuchsia-700 dark:text-fuchsia-300 rounded-full text-sm">
                      {color}
                    </span>
                  ))}
                </div>
              </div>

              {/* Characteristics & Personality */}
              <div className="mb-8 grid md:grid-cols-2 gap-4">
                <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">특징</h3>
                  <ul className="space-y-1">
                    {result.characteristics.map((char) => (
                      <li key={char} className="text-sm text-purple-700 dark:text-purple-300">• {char}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-violet-50 dark:bg-violet-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-violet-800 dark:text-violet-300 mb-2">성격</h3>
                  <ul className="space-y-1">
                    {result.personality.map((trait) => (
                      <li key={trait} className="text-sm text-violet-700 dark:text-violet-300">• {trait}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Strengths & Best Activities */}
              <div className="mb-8 grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">강점</h3>
                  <ul className="space-y-1">
                    {result.strengths.map((item) => (
                      <li key={item} className="text-sm text-green-700 dark:text-green-300">✓ {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-teal-50 dark:bg-teal-900/30 rounded-xl p-4">
                  <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-2">추천 활동</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {result.bestActivities.map((activity) => (
                      <span key={activity} className="px-2 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 rounded text-sm">{activity}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Advice */}
              <div className="mb-8 p-3 bg-amber-50 dark:bg-amber-900/30 rounded-lg">
                <p className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  조언: {result.advice}
                </p>
              </div>
            </>
          )}

          {/* Compatibility (only for soul-animal, color, mbti) */}
          {(isSoulAnimal || isColor || isMBTI) && (
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
              <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                <Heart className="w-4 h-4" />
                {isColor ? '잘 맞는 컬러' : isMBTI ? '잘 맞는 유형' : '잘 맞는 동물'}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {result.compatibility.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
              <h3 className="font-bold text-red-800 dark:text-red-300 mb-2">
                {isColor ? '주의할 컬러' : isMBTI ? '주의할 유형' : '주의할 동물'}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {result.incompatibility.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 rounded text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          )}

          {/* Share Buttons */}
          <div className="space-y-4 text-center">
            <h3 className="font-bold text-gray-900 dark:text-white">결과 공유하기</h3>
            <ShareButtons 
              title={`${test.title} 결과 - ${isPetMatch ? result.petName : result.title}`}
              description={shareText}
              hashtags={test.tags}
            />
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 mt-6">
            <button
              onClick={handleRetry}
              className="py-3 border border-gray-200 dark:border-gray-600 rounded-xl font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              다시하기
            </button>
            <Link
              href="/"
              className="py-3 border border-gray-200 dark:border-gray-600 rounded-xl font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              홈으로
            </Link>
          </div>
        </div>
      </div>

      {/* Ad Banner - AdSense 승인 후 활성화 */}
      {/* <AdBanner className="mt-6" /> */}

      {/* Similar Tests Recommendation */}
      <div className="mt-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
        <h2 className="font-bold text-gray-900 dark:text-white mb-4">🎯 비슷한 테스트 추천</h2>
        <div className="grid grid-cols-2 gap-3">
          {getSimilarTests(slug, 4).map((similarTest) => (
            <Link
              key={similarTest.slug}
              href={`/test/${similarTest.slug}`}
              className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group"
            >
              <div className="font-medium text-sm text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 line-clamp-2">
                {similarTest.title}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {similarTest.shortDescription}
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {similarTest.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="text-xs px-1.5 py-0.5 bg-gray-200 dark:bg-gray-600 rounded text-gray-600 dark:text-gray-300">
                    #{tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>

      
    </div>
  );
}
