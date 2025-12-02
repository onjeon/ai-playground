'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import Link from 'next/link';
import ShareButtons from '@/components/ShareButtons';

type GameState = 'idle' | 'calibration' | 'testing' | 'finished';

interface FrequencyResult {
  frequency: number;
  label: string;
  heard: boolean;
}

const frequencies = [
  { hz: 250, label: '저음 (250Hz)' },
  { hz: 500, label: '저음 (500Hz)' },
  { hz: 1000, label: '중음 (1kHz)' },
  { hz: 2000, label: '중음 (2kHz)' },
  { hz: 4000, label: '고음 (4kHz)' },
  { hz: 8000, label: '고음 (8kHz)' },
  { hz: 12000, label: '초고음 (12kHz)' },
  { hz: 15000, label: '초고음 (15kHz)' },
];

function getGrade(heardCount: number): { grade: string; emoji: string; description: string; color: string } {
  const percentage = (heardCount / frequencies.length) * 100;
  
  if (percentage === 100) {
    return { grade: '완벽', emoji: '🎵', description: '모든 주파수를 들을 수 있어요! 청력이 매우 좋습니다.', color: 'text-green-400' };
  } else if (percentage >= 87.5) {
    return { grade: '우수', emoji: '👂', description: '대부분의 주파수를 잘 들어요! 청력이 좋은 편입니다.', color: 'text-blue-400' };
  } else if (percentage >= 75) {
    return { grade: '양호', emoji: '👍', description: '일반적인 청력 범위입니다. 고주파가 조금 약할 수 있어요.', color: 'text-cyan-400' };
  } else if (percentage >= 62.5) {
    return { grade: '보통', emoji: '⚠️', description: '일부 주파수가 잘 안 들려요. 환경 요인일 수도 있어요.', color: 'text-yellow-400' };
  } else {
    return { grade: '주의', emoji: '⚡', description: '청력 검사를 권장드려요. 기기나 환경 문제일 수도 있습니다.', color: 'text-orange-400' };
  }
}

export default function HearingTestPage() {
  const [gameState, setGameState] = useState<GameState>('idle');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<FrequencyResult[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const initAudio = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    }
    return audioContextRef.current;
  }, []);

  const playTone = useCallback((frequency: number, duration: number = 2000) => {
    const audioContext = initAudio();
    
    // Stop any existing tone
    if (oscillatorRef.current) {
      oscillatorRef.current.stop();
      oscillatorRef.current.disconnect();
    }
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + 0.1);
    gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + (duration / 1000) - 0.1);
    gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + (duration / 1000));
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillatorRef.current = oscillator;
    gainNodeRef.current = gainNode;
    
    oscillator.start();
    setIsPlaying(true);
    
    setTimeout(() => {
      oscillator.stop();
      setIsPlaying(false);
    }, duration);
  }, [volume, initAudio]);

  const stopTone = useCallback(() => {
    if (oscillatorRef.current) {
      oscillatorRef.current.stop();
      oscillatorRef.current.disconnect();
      oscillatorRef.current = null;
    }
    setIsPlaying(false);
  }, []);

  const startCalibration = useCallback(() => {
    setGameState('calibration');
    playTone(1000, 3000);
  }, [playTone]);

  const startTest = useCallback(() => {
    setGameState('testing');
    setCurrentIndex(0);
    setResults([]);
  }, []);

  const playCurrentFrequency = useCallback(() => {
    if (currentIndex < frequencies.length) {
      playTone(frequencies[currentIndex].hz, 2000);
    }
  }, [currentIndex, playTone]);

  const recordResult = useCallback((heard: boolean) => {
    stopTone();
    
    const newResult: FrequencyResult = {
      frequency: frequencies[currentIndex].hz,
      label: frequencies[currentIndex].label,
      heard,
    };
    
    setResults(prev => [...prev, newResult]);
    
    if (currentIndex + 1 >= frequencies.length) {
      setGameState('finished');
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, stopTone]);

  const resetGame = useCallback(() => {
    stopTone();
    setGameState('idle');
    setCurrentIndex(0);
    setResults([]);
  }, [stopTone]);

  useEffect(() => {
    return () => {
      stopTone();
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [stopTone]);

  const heardCount = results.filter(r => r.heard).length;
  const grade = getGrade(heardCount);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/physical" className="text-gray-400 hover:text-white transition-colors">
            ← 목록으로
          </Link>
          <h1 className="text-lg font-bold text-white">청력 테스트</h1>
          <div className="w-16"></div>
        </div>
      </div>

      {/* Idle Screen */}
      {gameState === 'idle' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-gray-800 rounded-2xl p-8 text-center mb-6">
            <div className="text-6xl mb-4">🎧</div>
            <h2 className="text-2xl font-bold text-white mb-4">청력 테스트</h2>
            <p className="text-gray-400 mb-6">
              다양한 주파수의 소리를 재생하여<br/>
              당신의 청력 범위를 테스트합니다.
            </p>
            
            <div className="bg-yellow-900/30 border border-yellow-600/30 rounded-xl p-4 mb-6 text-left">
              <p className="text-yellow-400 font-bold mb-2">⚠️ 주의사항</p>
              <ul className="text-yellow-300/80 text-sm space-y-1">
                <li>• <strong>반드시 이어폰/헤드폰</strong>을 착용하세요</li>
                <li>• 조용한 환경에서 진행하세요</li>
                <li>• 볼륨을 너무 크게 하지 마세요</li>
                <li>• 이 테스트는 재미용이며 의료 진단이 아닙니다</li>
              </ul>
            </div>

            <button
              onClick={startCalibration}
              className="w-full py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl transition-colors"
            >
              테스트 시작
            </button>
          </div>

          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-2">📊 테스트 정보</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• 250Hz ~ 15kHz 범위의 8가지 주파수 테스트</li>
              <li>• 일반적인 대화: 250Hz ~ 4kHz</li>
              <li>• 나이가 들수록 고주파 청력이 감소합니다</li>
              <li>• 15kHz 이상은 청소년만 들을 수 있는 경우가 많아요</li>
            </ul>
          </div>
        </div>
      )}

      {/* Calibration Screen */}
      {gameState === 'calibration' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-gray-800 rounded-2xl p-8 text-center">
            <div className="text-6xl mb-4">🔊</div>
            <h2 className="text-2xl font-bold text-white mb-4">볼륨 조절</h2>
            <p className="text-gray-400 mb-6">
              1kHz 기준음이 재생됩니다.<br/>
              편안하게 들리도록 볼륨을 조절하세요.
            </p>
            
            <div className="mb-6">
              <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center ${
                isPlaying ? 'bg-cyan-500 animate-pulse' : 'bg-gray-700'
              }`}>
                <span className="text-4xl">{isPlaying ? '🎵' : '🔇'}</span>
              </div>
            </div>

            <div className="mb-6">
              <label className="text-gray-400 text-sm block mb-2">볼륨: {Math.round(volume * 100)}%</label>
              <input
                type="range"
                min="0.1"
                max="0.5"
                step="0.05"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-full accent-cyan-500"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => playTone(1000, 2000)}
                className="flex-1 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-xl transition-colors"
              >
                다시 듣기
              </button>
              <button
                onClick={startTest}
                className="flex-1 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl transition-colors"
              >
                테스트 시작
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Testing Screen */}
      {gameState === 'testing' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-gray-800 rounded-2xl p-8 text-center">
            {/* Progress */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>진행률</span>
                <span>{currentIndex + 1} / {frequencies.length}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-cyan-500 h-2 rounded-full transition-all"
                  style={{ width: `${((currentIndex) / frequencies.length) * 100}%` }}
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">
              {frequencies[currentIndex].label}
            </h2>
            <p className="text-gray-400 mb-6">
              {frequencies[currentIndex].hz}Hz
            </p>

            <div className="mb-8">
              <div className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center transition-all ${
                isPlaying ? 'bg-cyan-500 scale-110' : 'bg-gray-700'
              }`}>
                <span className="text-5xl">{isPlaying ? '🎵' : '👂'}</span>
              </div>
            </div>

            {!isPlaying ? (
              <button
                onClick={playCurrentFrequency}
                className="w-full py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl transition-colors mb-4"
              >
                소리 재생
              </button>
            ) : (
              <div className="mb-4">
                <p className="text-cyan-400 animate-pulse">소리가 재생 중입니다...</p>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => recordResult(true)}
                className="flex-1 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-colors"
              >
                ✓ 들렸어요
              </button>
              <button
                onClick={() => recordResult(false)}
                className="flex-1 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors"
              >
                ✗ 안 들렸어요
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Finished Screen */}
      {gameState === 'finished' && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-gray-800 rounded-2xl p-8 text-center mb-6">
            <div className="text-6xl mb-4">{grade.emoji}</div>
            <h2 className={`text-3xl font-bold mb-2 ${grade.color}`}>{grade.grade}</h2>
            <p className="text-gray-400 mb-6">{grade.description}</p>
            
            <div className="bg-gray-700 rounded-xl p-4 mb-6">
              <p className="text-gray-400 text-sm">청취 가능 주파수</p>
              <p className="text-3xl font-bold text-white">{heardCount}<span className="text-lg text-gray-400">/{frequencies.length}</span></p>
            </div>

            {/* Frequency Results */}
            <div className="mb-6">
              <p className="text-gray-400 text-sm mb-3">주파수별 결과</p>
              <div className="grid grid-cols-4 gap-2">
                {results.map((result, i) => (
                  <div 
                    key={i}
                    className={`p-3 rounded-lg ${
                      result.heard 
                        ? 'bg-green-500/20 border border-green-500/30' 
                        : 'bg-red-500/20 border border-red-500/30'
                    }`}
                  >
                    <p className={`text-xs ${result.heard ? 'text-green-400' : 'text-red-400'}`}>
                      {result.frequency >= 1000 ? `${result.frequency / 1000}k` : result.frequency}Hz
                    </p>
                    <p className="text-lg">{result.heard ? '✓' : '✗'}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="bg-gray-700/50 rounded-xl p-4 mb-6 text-left">
              <p className="text-gray-400 text-sm mb-2">📊 주파수 범위 설명</p>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">저음 (250-500Hz)</span>
                  <span className="text-gray-300">베이스, 남성 목소리</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">중음 (1-2kHz)</span>
                  <span className="text-gray-300">대화, 악기 소리</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">고음 (4-8kHz)</span>
                  <span className="text-gray-300">새소리, 치찰음</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">초고음 (12-15kHz)</span>
                  <span className="text-gray-300">나이 들면 감소</span>
                </div>
              </div>
            </div>
          </div>

          {/* Share */}
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm mb-3">결과 공유하기</p>
            <ShareButtons 
              title={`청력 테스트 결과: ${heardCount}/${frequencies.length} (${grade.grade})`}
              description={`나의 청력 테스트 결과! ${heardCount}개 주파수 청취 가능 ${grade.emoji}`}
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={resetGame}
              className="flex-1 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl transition-colors"
            >
              다시 하기
            </button>
            <Link
              href="/physical"
              className="flex-1 py-4 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-xl transition-colors text-center"
            >
              목록으로
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
