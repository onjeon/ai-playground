'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import Link from 'next/link';
import ShareButtons from '@/components/ShareButtons';

type GameState = 'intro' | 'countdown' | 'playing' | 'finished';

interface Beat {
  time: number;
  hit: boolean;
  accuracy: number; // ms 차이
}

const BPM_OPTIONS = [
  { bpm: 80, name: '느린 템포', difficulty: '쉬움' },
  { bpm: 100, name: '보통 템포', difficulty: '보통' },
  { bpm: 120, name: '빠른 템포', difficulty: '어려움' },
];

const TOTAL_BEATS = 16;
const TOLERANCE = 200; // ±200ms 내로 맞추면 OK

export default function RhythmTestPage() {
  const [gameState, setGameState] = useState<GameState>('intro');
  const [selectedBPM, setSelectedBPM] = useState(100);
  const [countdown, setCountdown] = useState(4);
  const [currentBeat, setCurrentBeat] = useState(0);
  const [beats, setBeats] = useState<Beat[]>([]);
  const [lastHitAccuracy, setLastHitAccuracy] = useState<number | null>(null);
  const [visualBeat, setVisualBeat] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const beatTimesRef = useRef<number[]>([]);
  const audioContextRef = useRef<AudioContext | null>(null);

  const beatInterval = 60000 / selectedBPM; // ms per beat

  // 비트 사운드 재생
  const playBeatSound = useCallback((isMetronome: boolean = false) => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    }
    
    const ctx = audioContextRef.current;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.frequency.value = isMetronome ? 800 : 600;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.1);
  }, []);

  // 게임 시작
  const startGame = useCallback(() => {
    setGameState('countdown');
    setCountdown(4);
    setCurrentBeat(0);
    setBeats([]);
    beatTimesRef.current = [];

    // 4박자 카운트다운
    let count = 4;
    const countdownInterval = setInterval(() => {
      playBeatSound(true);
      setVisualBeat(true);
      setTimeout(() => setVisualBeat(false), 100);
      
      count--;
      setCountdown(count);
      
      if (count === 0) {
        clearInterval(countdownInterval);
        // 실제 게임 시작
        setGameState('playing');
        
        // 비트 타이밍 기록
        const startTime = Date.now();
        for (let i = 0; i < TOTAL_BEATS; i++) {
          beatTimesRef.current.push(startTime + (i + 1) * beatInterval);
        }
        
        // 메트로놈 시작
        let beatCount = 0;
        intervalRef.current = setInterval(() => {
          playBeatSound(true);
          setVisualBeat(true);
          setTimeout(() => setVisualBeat(false), 100);
          
          beatCount++;
          setCurrentBeat(beatCount);
          
          if (beatCount >= TOTAL_BEATS) {
            clearInterval(intervalRef.current!);
            setTimeout(() => {
              setGameState('finished');
            }, 500);
          }
        }, beatInterval);
      }
    }, beatInterval);
  }, [beatInterval, playBeatSound]);

  // 탭/클릭 핸들러
  const handleTap = useCallback(() => {
    if (gameState !== 'playing') return;
    
    const tapTime = Date.now();
    const expectedTime = beatTimesRef.current[beats.length];
    
    if (!expectedTime) return;
    
    const accuracy = tapTime - expectedTime;
    const isHit = Math.abs(accuracy) <= TOLERANCE;
    
    playBeatSound(false);
    setLastHitAccuracy(accuracy);
    
    setBeats(prev => [...prev, {
      time: tapTime,
      hit: isHit,
      accuracy: Math.abs(accuracy),
    }]);
    
    setTimeout(() => setLastHitAccuracy(null), 300);
  }, [gameState, beats.length, playBeatSound]);

  // 키보드 이벤트
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.key === ' ') {
        e.preventDefault();
        handleTap();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleTap]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // 결과 계산
  const hitBeats = beats.filter(b => b.hit);
  const accuracy = beats.length > 0 ? Math.round((hitBeats.length / beats.length) * 100) : 0;
  const avgTiming = hitBeats.length > 0
    ? Math.round(hitBeats.reduce((sum, b) => sum + b.accuracy, 0) / hitBeats.length)
    : 0;

  const getGrade = () => {
    if (accuracy >= 95 && avgTiming < 50) return { grade: 'S', description: '완벽한 리듬감! 프로 뮤지션!', color: 'text-yellow-400' };
    if (accuracy >= 85 && avgTiming < 80) return { grade: 'A', description: '훌륭해요! 뛰어난 리듬감!', color: 'text-green-400' };
    if (accuracy >= 70) return { grade: 'B', description: '좋아요! 괜찮은 리듬감!', color: 'text-blue-400' };
    if (accuracy >= 50) return { grade: 'C', description: '연습이 더 필요해요', color: 'text-orange-400' };
    return { grade: 'D', description: '박자를 놓치셨군요!', color: 'text-red-400' };
  };

  const result = getGrade();

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/physical" className="text-gray-400 hover:text-white transition-colors">
            ← 피지컬 테스트
          </Link>
          <h1 className="text-lg font-bold text-white">리듬 감각 테스트</h1>
          <div className="w-24"></div>
        </div>
      </div>

      {/* Intro */}
      {gameState === 'intro' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🎵</div>
            <h2 className="text-2xl font-bold text-white mb-4">리듬 감각 테스트</h2>
            <p className="text-gray-400 mb-2">
              비트에 맞춰 탭하세요!
            </p>
            <p className="text-gray-500 text-sm">
              당신의 리듬감과 타이밍 감각을 테스트합니다
            </p>
          </div>

          {/* BPM Selection */}
          <div className="bg-gray-800 rounded-2xl p-6 mb-6">
            <p className="text-gray-400 text-sm mb-4 text-center">템포 선택</p>
            <div className="grid grid-cols-3 gap-3">
              {BPM_OPTIONS.map((option) => (
                <button
                  key={option.bpm}
                  onClick={() => setSelectedBPM(option.bpm)}
                  className={`py-3 px-4 rounded-xl font-bold transition-all ${
                    selectedBPM === option.bpm
                      ? 'bg-pink-500 text-white'
                      : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                  }`}
                >
                  <div>{option.bpm} BPM</div>
                  <div className="text-xs opacity-70">{option.difficulty}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-6 mb-6">
            <h3 className="text-white font-bold mb-4 text-center">🎯 게임 방법</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>1. 4박자 카운트다운 후 시작됩니다</p>
              <p>2. 메트로놈 소리에 맞춰 화면을 탭하세요</p>
              <p>3. 스페이스바 또는 화면 터치로 탭!</p>
              <p>4. {TOTAL_BEATS}박자를 완료하세요</p>
            </div>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-6">
            <p className="text-yellow-400 text-sm text-center">
              🎧 소리가 재생됩니다. 볼륨을 확인해주세요!
            </p>
          </div>

          <button
            onClick={startGame}
            className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 text-white font-bold rounded-xl transition-all active:scale-[0.98] text-xl"
          >
            🎵 테스트 시작!
          </button>
        </div>
      )}

      {/* Countdown */}
      {gameState === 'countdown' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-400 mb-4">준비하세요!</p>
            <div className={`text-9xl font-bold transition-transform ${visualBeat ? 'scale-125 text-pink-400' : 'text-white'}`}>
              {countdown}
            </div>
            <p className="text-gray-500 mt-4">비트에 맞춰 탭할 준비!</p>
          </div>
        </div>
      )}

      {/* Playing */}
      {gameState === 'playing' && (
        <div 
          className="max-w-2xl mx-auto px-4 py-8 min-h-[60vh] flex flex-col"
          onClick={handleTap}
        >
          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>탭: {beats.length} / {TOTAL_BEATS}</span>
              <span>적중: {hitBeats.length}</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all"
                style={{ width: `${(currentBeat / TOTAL_BEATS) * 100}%` }}
              />
            </div>
          </div>

          {/* Beat Visualization */}
          <div className="flex-1 flex items-center justify-center">
            <div 
              className={`w-48 h-48 rounded-full flex items-center justify-center transition-all duration-100 ${
                visualBeat 
                  ? 'bg-pink-500 scale-110' 
                  : lastHitAccuracy !== null
                    ? Math.abs(lastHitAccuracy) <= TOLERANCE
                      ? 'bg-green-500 scale-105'
                      : 'bg-red-500 scale-95'
                    : 'bg-gray-700'
              }`}
            >
              <span className="text-6xl">🎵</span>
            </div>
          </div>

          {/* Feedback */}
          {lastHitAccuracy !== null && (
            <div className="text-center mb-4">
              <span className={`text-lg font-bold ${
                Math.abs(lastHitAccuracy) <= 50 ? 'text-yellow-400' :
                Math.abs(lastHitAccuracy) <= TOLERANCE ? 'text-green-400' :
                'text-red-400'
              }`}>
                {Math.abs(lastHitAccuracy) <= 50 ? 'Perfect!' :
                 Math.abs(lastHitAccuracy) <= TOLERANCE ? 'Good!' :
                 'Miss!'}
              </span>
            </div>
          )}

          <div className="text-center">
            <p className="text-gray-500 text-sm">화면을 탭하거나 스페이스바를 누르세요!</p>
          </div>
        </div>
      )}

      {/* Finished */}
      {gameState === 'finished' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-3xl p-8 text-center mb-6">
            <p className="text-gray-400 mb-2">테스트 완료!</p>
            <div className={`text-8xl font-bold mb-2 ${result.color}`}>{result.grade}</div>
            <p className="text-white text-xl mb-6">{result.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-800/50 rounded-xl p-4">
                <p className="text-gray-400 text-sm">정확도</p>
                <p className="text-3xl font-bold text-white">{accuracy}%</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4">
                <p className="text-gray-400 text-sm">평균 타이밍</p>
                <p className="text-3xl font-bold text-white">±{avgTiming}ms</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4">
                <p className="text-gray-400 text-sm">적중</p>
                <p className="text-3xl font-bold text-green-400">{hitBeats.length}</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4">
                <p className="text-gray-400 text-sm">미스</p>
                <p className="text-3xl font-bold text-red-400">{beats.length - hitBeats.length}</p>
              </div>
            </div>

            {/* Beat Timeline */}
            <div className="bg-gray-800/50 rounded-xl p-4">
              <p className="text-gray-400 text-sm mb-3">비트 타이밍</p>
              <div className="flex gap-1 justify-center flex-wrap">
                {beats.map((beat, index) => (
                  <div
                    key={index}
                    className={`w-6 h-6 rounded-full ${
                      beat.accuracy <= 50 ? 'bg-yellow-400' :
                      beat.hit ? 'bg-green-400' : 'bg-red-400'
                    }`}
                    title={`${beat.accuracy}ms`}
                  />
                ))}
              </div>
              <div className="flex justify-center gap-4 mt-2 text-xs text-gray-500">
                <span>🟡 Perfect</span>
                <span>🟢 Good</span>
                <span>🔴 Miss</span>
              </div>
            </div>
          </div>

          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm mb-3">결과 공유하기</p>
            <ShareButtons 
              title={`리듬 감각 테스트 결과: ${result.grade}등급!`}
              description={`${selectedBPM}BPM에서 정확도 ${accuracy}%, 평균 타이밍 ±${avgTiming}ms! 🎵`}
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={startGame}
              className="flex-1 py-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 text-white font-bold rounded-xl transition-all active:scale-[0.98]"
            >
              다시 하기
            </button>
            <Link
              href="/physical"
              className="flex-1 py-4 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-xl transition-colors text-center"
            >
              다른 테스트
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
