'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import ShareButtons from '@/components/ShareButtons';

interface Team {
  id: number;
  name: string;
  color: string;
  members: string[];
}

const teamColors = [
  'from-red-500 to-rose-500',
  'from-blue-500 to-indigo-500',
  'from-green-500 to-emerald-500',
  'from-yellow-500 to-orange-500',
  'from-purple-500 to-pink-500',
  'from-cyan-500 to-teal-500',
  'from-amber-500 to-yellow-500',
  'from-fuchsia-500 to-purple-500',
];

const teamEmojis = ['🔴', '🔵', '🟢', '🟡', '🟣', '🩵', '🟠', '🩷'];

const teamNames = [
  'A팀', 'B팀', 'C팀', 'D팀', 'E팀', 'F팀', 'G팀', 'H팀'
];

export default function TeamDividerPage() {
  const [peopleInput, setPeopleInput] = useState('');
  const [teamCount, setTeamCount] = useState(2);
  const [teams, setTeams] = useState<Team[]>([]);
  const [isDividing, setIsDividing] = useState(false);
  const [mode, setMode] = useState<'name' | 'number'>('name');
  const [numberCount, setNumberCount] = useState(8);

  // Parse people from input
  const getPeople = useCallback((): string[] => {
    if (mode === 'number') {
      return Array.from({ length: numberCount }, (_, i) => `${i + 1}번`);
    }
    return peopleInput
      .split(/[,\n]/)
      .map(name => name.trim())
      .filter(name => name.length > 0);
  }, [mode, numberCount, peopleInput]);

  const divideTeams = useCallback(() => {
    const people = getPeople();
    if (people.length < teamCount) return;

    setIsDividing(true);
    setTeams([]);

    setTimeout(() => {
      // Shuffle people
      const shuffled = [...people];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      // Divide into teams
      const newTeams: Team[] = Array.from({ length: teamCount }, (_, i) => ({
        id: i + 1,
        name: teamNames[i],
        color: teamColors[i],
        members: [],
      }));

      shuffled.forEach((person, index) => {
        newTeams[index % teamCount].members.push(person);
      });

      setTeams(newTeams);
      setIsDividing(false);
    }, 1500);
  }, [getPeople, teamCount]);

  const resetGame = useCallback(() => {
    setTeams([]);
  }, []);

  const people = getPeople();
  const canDivide = people.length >= teamCount && teamCount >= 2;

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/games" className="text-gray-400 hover:text-white transition-colors">
            ← 게임 목록
          </Link>
          <h1 className="text-lg font-bold text-white">팀 나누기</h1>
          <div className="w-20"></div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Title */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">👥</div>
          <h2 className="text-2xl font-bold text-white mb-2">팀 나누기</h2>
          <p className="text-gray-400">
            공정하게 팀을 나눠드려요!
          </p>
        </div>

        {teams.length === 0 ? (
          <>
            {/* Mode Selection */}
            <div className="bg-gray-800 rounded-2xl p-4 mb-6">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setMode('name')}
                  className={`py-3 rounded-xl font-bold transition-all ${mode === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-400 hover:bg-gray-600'}`}
                >
                  📝 이름 입력
                </button>
                <button
                  onClick={() => setMode('number')}
                  className={`py-3 rounded-xl font-bold transition-all ${mode === 'number' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-400 hover:bg-gray-600'}`}
                >
                  🔢 번호로
                </button>
              </div>
            </div>

            {/* Input Section */}
            <div className="bg-gray-800 rounded-2xl p-6 mb-6">
              {mode === 'name' ? (
                <div>
                  <label className="text-gray-400 text-sm block mb-2">
                    참가자 이름 (쉼표 또는 줄바꿈으로 구분)
                  </label>
                  <textarea
                    value={peopleInput}
                    onChange={(e) => setPeopleInput(e.target.value)}
                    placeholder="홍길동, 김철수, 이영희&#10;또는&#10;홍길동&#10;김철수&#10;이영희"
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-xl resize-none h-32"
                  />
                  <p className="text-gray-500 text-sm mt-2">
                    현재 {people.length}명 입력됨
                  </p>
                </div>
              ) : (
                <div>
                  <label className="text-gray-400 text-sm block mb-4 text-center">인원수</label>
                  <div className="flex items-center justify-center gap-4">
                    <button
                      onClick={() => setNumberCount(prev => Math.max(2, prev - 1))}
                      className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-xl text-white text-2xl font-bold"
                    >
                      -
                    </button>
                    <span className="text-4xl font-bold text-white w-16 text-center">{numberCount}</span>
                    <button
                      onClick={() => setNumberCount(prev => Math.min(50, prev + 1))}
                      className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-xl text-white text-2xl font-bold"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-gray-500 text-sm text-center mt-2">1번 ~ {numberCount}번</p>
                </div>
              )}
            </div>

            {/* Team Count */}
            <div className="bg-gray-800 rounded-2xl p-6 mb-6">
              <label className="text-gray-400 text-sm block mb-4 text-center">팀 수</label>
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => setTeamCount(prev => Math.max(2, prev - 1))}
                  className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-xl text-white text-2xl font-bold"
                >
                  -
                </button>
                <span className="text-4xl font-bold text-white w-16 text-center">{teamCount}</span>
                <button
                  onClick={() => setTeamCount(prev => Math.min(8, prev + 1))}
                  className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-xl text-white text-2xl font-bold"
                >
                  +
                </button>
              </div>
              <p className="text-gray-500 text-sm text-center mt-2">최소 2팀 ~ 최대 8팀</p>
              
              {/* Team Preview */}
              <div className="flex justify-center gap-2 mt-4">
                {Array.from({ length: teamCount }).map((_, i) => (
                  <span key={i} className="text-2xl">{teamEmojis[i]}</span>
                ))}
              </div>
            </div>

            {/* Info */}
            {canDivide && (
              <div className="bg-gray-800/50 rounded-xl p-4 mb-6 text-center">
                <p className="text-gray-400">
                  {people.length}명을 {teamCount}팀으로 나눕니다
                </p>
                <p className="text-gray-500 text-sm">
                  (팀당 약 {Math.floor(people.length / teamCount)}~{Math.ceil(people.length / teamCount)}명)
                </p>
              </div>
            )}

            {/* Divide Button */}
            <button
              onClick={divideTeams}
              disabled={!canDivide || isDividing}
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 disabled:from-gray-600 disabled:to-gray-600 text-white font-bold rounded-xl transition-all active:scale-[0.98] text-xl"
            >
              {isDividing ? '🔄 팀 나누는 중...' : '👥 팀 나누기!'}
            </button>

            {!canDivide && people.length > 0 && (
              <p className="text-red-400 text-sm text-center mt-2">
                인원수({people.length}명)가 팀 수({teamCount}팀)보다 많아야 합니다
              </p>
            )}
          </>
        ) : (
          <>
            {/* Results */}
            <div className="space-y-4 mb-6">
              {teams.map((team) => (
                <div
                  key={team.id}
                  className={`bg-gradient-to-r ${team.color} rounded-2xl p-6`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{teamEmojis[team.id - 1]}</span>
                    <h3 className="text-xl font-bold text-white">{team.name}</h3>
                    <span className="ml-auto bg-white/20 px-3 py-1 rounded-full text-white text-sm">
                      {team.members.length}명
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {team.members.map((member, index) => (
                      <span
                        key={index}
                        className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-white font-medium"
                      >
                        {member}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Share */}
            <div className="text-center mb-6">
              <p className="text-gray-400 text-sm mb-3">결과 공유하기</p>
              <ShareButtons 
                title="팀 나누기 결과!"
                description={teams.map(t => `${t.name}: ${t.members.join(', ')}`).join(' | ')}
              />
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={divideTeams}
                className="flex-1 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 text-white font-bold rounded-xl transition-all active:scale-[0.98]"
              >
                🔄 다시 섞기
              </button>
              <button
                onClick={resetGame}
                className="flex-1 py-4 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-xl transition-colors"
              >
                새로 시작
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
