import { WorldCup } from './types';

export const japaneseAnimeWorldCup: WorldCup = {
  id: 'japanese-anime',
  slug: 'japanese-anime',
  title: 'アニメワールドカップ',
  description: 'あなたの一番好きなアニメは？',
  emoji: '📺',
  category: 'lifestyle',
  backgroundColor: 'from-blue-500 to-purple-500',
  participantCount: 78340,
  items: [
    // ジャンプ系
    { id: 'one-piece', name: 'ONE PIECE', image: '🏴‍☠️', description: '海賊王に俺はなる！' },
    { id: 'naruto', name: 'NARUTO', image: '🍥', description: '火影になるってばよ！' },
    { id: 'demon-slayer', name: '鬼滅の刃', image: '⚔️', description: '全集中！' },
    { id: 'jujutsu-kaisen', name: '呪術廻戦', image: '👁️', description: '領域展開！' },
    { id: 'my-hero', name: '僕のヒーローアカデミア', image: '💪', description: 'Plus Ultra!' },
    { id: 'dragon-ball', name: 'ドラゴンボール', image: '🐉', description: 'かめはめ波！' },
    { id: 'haikyuu', name: 'ハイキュー!!', image: '🏐', description: '飛べ！' },
    { id: 'bleach', name: 'BLEACH', image: '⚔️', description: '卍解！' },
    { id: 'chainsaw-man', name: 'チェンソーマン', image: '🪚', description: 'デンジの冒険' },
    { id: 'spy-family', name: 'SPY×FAMILY', image: '🕵️', description: 'アーニャピーナッツが好き' },
    
    // スタジオジブリ
    { id: 'spirited-away', name: '千と千尋の神隠し', image: '🛁', description: '宮崎駿の傑作' },
    { id: 'totoro', name: 'となりのトトロ', image: '🌳', description: '森の妖精トトロ' },
    { id: 'howl', name: 'ハウルの動く城', image: '🏰', description: 'ソフィーの冒険' },
    { id: 'mononoke', name: 'もののけ姫', image: '🐺', description: 'サンとアシタカ' },
    { id: 'laputa', name: '天空の城ラピュタ', image: '🏰', description: 'バルス！' },
    
    // 新海誠
    { id: 'your-name', name: '君の名は。', image: '☄️', description: '入れ替わりの物語' },
    { id: 'weathering', name: '天気の子', image: '🌧️', description: '陽菜さん！' },
    { id: 'suzume', name: 'すずめの戸締まり', image: '🚪', description: '災害と再生の物語' },
    
    // その他人気作
    { id: 'evangelion', name: 'エヴァンゲリオン', image: '🤖', description: '逃げちゃダメだ' },
    { id: 'attack-titan', name: '進撃の巨人', image: '👹', description: '駆逐してやる！' },
    { id: 'death-note', name: 'デスノート', image: '📓', description: '計画通り' },
    { id: 'steins-gate', name: 'シュタインズ・ゲート', image: '⏰', description: 'エル・プサイ・コングルゥ' },
    { id: 'code-geass', name: 'コードギアス', image: '♟️', description: 'ルルーシュの反逆' },
    { id: 'violet', name: 'ヴァイオレット・エヴァーガーデン', image: '💌', description: '愛してるを知りたい' },
    { id: 'made-abyss', name: 'メイドインアビス', image: '🕳️', description: '深淵への冒険' },
    { id: 'frieren', name: '葬送のフリーレン', image: '🧙‍♀️', description: '魔法使いフリーレン' },
    { id: 'oshi-no-ko', name: '推しの子', image: '⭐', description: 'アイドルの闇' },
    { id: 'bocchi', name: 'ぼっち・ざ・ろっく', image: '🎸', description: '陰キャバンド' },
    { id: 'sword-art', name: 'ソードアート・オンライン', image: '🗡️', description: '仮想世界の冒険' },
    { id: 'konosuba', name: 'この素晴らしい世界に祝福を', image: '✨', description: '異世界コメディ' },
    { id: 're-zero', name: 'Re:ゼロ', image: '🔄', description: '死に戻りの物語' },
    { id: 'mob-psycho', name: 'モブサイコ100', image: '💯', description: '超能力少年モブ' },
  ]
};
