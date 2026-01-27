'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import ShareButtons from '@/components/ShareButtons';

type GameType = 'mafia' | 'spy' | 'werewolf' | 'custom';

interface Role {
  name: string;
  emoji: string;
  description: string;
  team?: string;
}

interface GameConfig {
  id: GameType;
  name: string;
  emoji: string;
  description: string;
  roles: Role[];
  minPlayers: number;
  maxPlayers: number;
}

const GAMES: GameConfig[] = [
  {
    id: 'mafia',
    name: '마피아 게임',
    emoji: '🔫',
    description: '시민 vs 마피아의 심리 대결!',
    minPlayers: 4,
    maxPlayers: 12,
    roles: [
      { name: '마피아', emoji: '🔫', description: '밤에 시민을 제거', team: '마피아' },
      { name: '시민', emoji: '👤', description: '토론으로 마피아를 찾아라', team: '시민' },
      { name: '경찰', emoji: '👮', description: '밤에 한 명 조사', team: '시민' },
      { name: '의사', emoji: '👨‍⚕️', description: '밤에 한 명 보호', team: '시민' },
    ],
  },
  {
    id: 'spy',
    name: '스파이폴',
    emoji: '🕵️',
    description: '스파이를 찾아라! 스파이는 장소를 알아내라!',
    minPlayers: 4,
    maxPlayers: 10,
    roles: [
      { name: '스파이', emoji: '🕵️', description: '장소를 모른다! 눈치로 알아내라', team: '스파이' },
      { name: '요원', emoji: '👤', description: '장소를 알고 있다. 스파이를 찾아라', team: '요원' },
    ],
  },
  {
    id: 'werewolf',
    name: '원나잇 늑대인간',
    emoji: '🐺',
    description: '단 하룻밤! 누가 늑대인가?',
    minPlayers: 3,
    maxPlayers: 10,
    roles: [
      { name: '늑대인간', emoji: '🐺', description: '들키지 않고 생존하라', team: '늑대' },
      { name: '마을사람', emoji: '🏠', description: '늑대를 찾아라', team: '마을' },
      { name: '점술사', emoji: '🔮', description: '다른 플레이어의 카드를 확인', team: '마을' },
      { name: '도둑', emoji: '🦹', description: '중앙 카드와 교환 가능', team: '마을' },
      { name: '말썽꾼', emoji: '🃏', description: '두 플레이어의 카드를 교환', team: '마을' },
      { name: '무덤지기', emoji: '⚰️', description: '자신이 죽으면 승리', team: '제3세력' },
    ],
  },
];

interface PlayerRole {
  playerName: string;
  role: Role;
  revealed: boolean;
}

export default function RolePickerPage() {
  const [selectedGame, setSelectedGame] = useState<GameType | null>(null);
  const [playerCount, setPlayerCount] = useState(6);
  const [playerNames, setPlayerNames] = useState<string[]>([]);
  const [nameInput, setNameInput] = useState('');
  const [assignedRoles, setAssignedRoles] = useState<PlayerRole[]>([]);
  const [currentReveal, setCurrentReveal] = useState<number | null>(null);
  const [step, setStep] = useState<'select' | 'players' | 'result'>('select');

  const currentGame = GAMES.find(g => g.id === selectedGame);

  const addPlayer = useCallback(() => {
    if (nameInput.trim() && playerNames.length < (currentGame?.maxPlayers || 12)) {
      setPlayerNames(prev => [...prev, nameInput.trim()]);
      setNameInput('');
    }
  }, [nameInput, playerNames.length, currentGame?.maxPlayers]);

  const removePlayer = useCallback((index: number) => {
    setPlayerNames(prev => prev.filter((_, i) => i !== index));
  }, []);

  const assignRoles = useCallback(() => {
    if (!currentGame || playerNames.length < currentGame.minPlayers) return;

    const roles: Role[] = [];

    if (selectedGame === 'mafia') {
      const mafiaCount = Math.floor(playerNames.length / 4) || 1;
      const hasPolice = playerNames.length >= 5;
      const hasDoctor = playerNames.length >= 6;

      for (let i = 0; i < mafiaCount; i++) {
        roles.push(currentGame.roles[0]);
      }
      if (hasPolice) roles.push(currentGame.roles[2]);
      if (hasDoctor) roles.push(currentGame.roles[3]);

      while (roles.length < playerNames.length) {
        roles.push(currentGame.roles[1]);
      }
    }
    else if (selectedGame === 'spy') {
      roles.push(currentGame.roles[0]);
      while (roles.length < playerNames.length) {
        roles.push(currentGame.roles[1]);
      }
    }
    else if (selectedGame === 'werewolf') {
      const wolfCount = Math.floor(playerNames.length / 4) || 1;

      for (let i = 0; i < wolfCount; i++) {
        roles.push(currentGame.roles[0]);
      }

      const specialRoles = currentGame.roles.slice(2);
      const specialCount = Math.min(specialRoles.length, Math.floor(playerNames.length / 2));
      for (let i = 0; i < specialCount; i++) {
        roles.push(specialRoles[i]);
      }

      while (roles.length < playerNames.length) {
        roles.push(currentGame.roles[1]);
      }
    }

    // Shuffle
    for (let i = roles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [roles[i], roles[j]] = [roles[j], roles[i]];
    }

    const assigned: PlayerRole[] = playerNames.map((name, index) => ({
      playerName: name,
      role: roles[index],
      revealed: false,
    }));

    setAssignedRoles(assigned);
    setStep('result');
  }, [currentGame, selectedGame, playerNames]);

  const revealRole = useCallback((index: number) => {
    setCurrentReveal(index);
  }, []);

  const hideRole = useCallback(() => {
    setAssignedRoles(prev => prev.map((p, i) =>
      i === currentReveal ? { ...p, revealed: true } : p
    ));
    setCurrentReveal(null);
  }, [currentReveal]);

  const resetGame = useCallback(() => {
    setStep('select');
    setSelectedGame(null);
    setPlayerNames([]);
    setAssignedRoles([]);
    setCurrentReveal(null);
  }, []);

  return (
    <div className="space-y-6">
      {/* Back link */}
      <Link href="/games" className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 text-sm inline-block">
        ← 게임 목록
      </Link>

      {/* Game Selection */}
      {step === 'select' && (
        <>
          <div className="text-center">
            <div className="text-6xl mb-4">🎭</div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">역할 뽑기</h2>
            <p className="text-gray-500 dark:text-gray-400">게임을 선택하세요!</p>
          </div>

          <div className="space-y-4">
            {GAMES.map((game) => (
              <button
                key={game.id}
                onClick={() => {
                  setSelectedGame(game.id);
                  setStep('players');
                }}
                className="w-full bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-2xl p-6 text-left transition-all border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{game.emoji}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{game.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{game.description}</p>
                    <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">
                      {game.minPlayers}~{game.maxPlayers}명
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </>
      )}

      {/* Player Input */}
      {step === 'players' && currentGame && (
        <>
          <button
            onClick={() => setStep('select')}
            className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 text-sm"
          >
            ← 게임 선택으로
          </button>

          <div className="text-center">
            <span className="text-4xl">{currentGame.emoji}</span>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-2">{currentGame.name}</h2>
          </div>

          {/* Player Name Input */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
              플레이어 이름 입력 ({playerNames.length}/{currentGame.maxPlayers}명)
            </p>
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addPlayer()}
                placeholder="이름 입력"
                className="flex-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600"
              />
              <button
                onClick={addPlayer}
                disabled={playerNames.length >= currentGame.maxPlayers}
                className="px-6 bg-indigo-500 hover:bg-indigo-400 disabled:bg-gray-300 dark:disabled:bg-gray-600 text-white font-bold rounded-xl"
              >
                추가
              </button>
            </div>

            {/* Player List */}
            {playerNames.length > 0 && (
              <div className="space-y-2">
                {playerNames.map((name, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-white dark:bg-gray-700/50 px-4 py-2 rounded-lg"
                  >
                    <span className="text-gray-900 dark:text-white">{index + 1}. {name}</span>
                    <button
                      onClick={() => removePlayer(index)}
                      className="text-red-500 hover:text-red-400 text-sm"
                    >
                      삭제
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Role Preview */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">등장 역할</p>
            <div className="flex flex-wrap gap-2">
              {currentGame.roles.map((role, index) => (
                <span
                  key={index}
                  className="bg-white dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-white"
                >
                  {role.emoji} {role.name}
                </span>
              ))}
            </div>
          </div>

          {/* Start Button */}
          <button
            onClick={assignRoles}
            disabled={playerNames.length < currentGame.minPlayers}
            className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 disabled:from-gray-300 disabled:to-gray-300 dark:disabled:from-gray-600 dark:disabled:to-gray-600 text-white font-bold rounded-xl transition-all text-xl"
          >
            {playerNames.length < currentGame.minPlayers
              ? `최소 ${currentGame.minPlayers}명 필요`
              : '🎭 역할 배정!'}
          </button>
        </>
      )}

      {/* Role Reveal */}
      {step === 'result' && currentGame && (
        <>
          {currentReveal !== null ? (
            // Single Role Reveal
            <div className="text-center">
              <div className="bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 rounded-3xl p-8">
                <p className="text-gray-500 dark:text-gray-400 mb-2">{assignedRoles[currentReveal].playerName}님의 역할</p>
                <div className="text-8xl mb-4">{assignedRoles[currentReveal].role.emoji}</div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {assignedRoles[currentReveal].role.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">{assignedRoles[currentReveal].role.description}</p>
                {assignedRoles[currentReveal].role.team && (
                  <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                    팀: {assignedRoles[currentReveal].role.team}
                  </p>
                )}
              </div>

              <button
                onClick={hideRole}
                className="w-full py-4 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-white font-bold rounded-xl mt-6"
              >
                확인 완료 (다음 사람에게 넘기기)
              </button>
            </div>
          ) : (
            // Player List
            <>
              <div className="text-center">
                <span className="text-4xl">{currentGame.emoji}</span>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-2">역할 배정 완료!</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm">각자 자신의 이름을 눌러 역할을 확인하세요</p>
              </div>

              <div className="space-y-3">
                {assignedRoles.map((player, index) => (
                  <button
                    key={index}
                    onClick={() => !player.revealed && revealRole(index)}
                    disabled={player.revealed}
                    className={`w-full p-4 rounded-xl text-left transition-all ${
                      player.revealed
                        ? 'bg-gray-100 dark:bg-gray-800 opacity-50'
                        : 'bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 hover:scale-[1.02]'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-900 dark:text-white font-bold">{player.playerName}</span>
                      {player.revealed ? (
                        <span className="text-gray-400 dark:text-gray-500">확인 완료 ✓</span>
                      ) : (
                        <span className="text-indigo-500">역할 확인 →</span>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* All Revealed */}
              {assignedRoles.every(p => p.revealed) && (
                <div className="bg-green-50 dark:bg-green-500/20 border border-green-200 dark:border-green-500/30 rounded-xl p-4 text-center">
                  <p className="text-green-600 dark:text-green-400">✓ 모두 역할 확인 완료! 게임을 시작하세요!</p>
                </div>
              )}

              {/* Share */}
              <div className="text-center">
                <ShareButtons
                  title={`${currentGame.name} 역할 배정 완료!`}
                  description={`${playerNames.length}명이 ${currentGame.name}을 시작합니다! 🎭`}
                />
              </div>

              {/* Reset */}
              <button
                onClick={resetGame}
                className="w-full py-4 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-white font-bold rounded-xl"
              >
                새 게임 시작
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
}
