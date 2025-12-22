import { WorldCup } from './types';

export const japaneseCelebritiesWorldCup: WorldCup = {
  id: 'japanese-celebrities',
  slug: 'japanese-celebrities',
  title: '日本有名人ワールドカップ',
  description: 'あなたの一番好きな日本の有名人は？',
  emoji: '🌟',
  category: 'lifestyle',
  backgroundColor: 'from-red-500 to-pink-500',
  participantCount: 52180,
  items: [
    // 俳優・女優
    { id: 'kimura-takuya', name: '木村拓哉', image: '👨', description: 'SMAPの元メンバー、国民的俳優' },
    { id: 'aragaki-yui', name: '新垣結衣', image: '👩', description: '人気女優ガッキー' },
    { id: 'suda-masaki', name: '菅田将暉', image: '🎭', description: '実力派若手俳優' },
    { id: 'ishihara-satomi', name: '石原さとみ', image: '💄', description: '国民的女優' },
    { id: 'yamada-ryosuke', name: '山田涼介', image: '⭐', description: 'Hey! Say! JUMP' },
    { id: 'nagasawa-masami', name: '長澤まさみ', image: '🎬', description: '実力派女優' },
    { id: 'sakaguchi-kentaro', name: '坂口健太郎', image: '🌟', description: 'モデル兼俳優' },
    { id: 'hirose-suzu', name: '広瀬すず', image: '💫', description: '若手人気女優' },
    
    // アイドル・歌手
    { id: 'arashi', name: '嵐', image: '🌀', description: '国民的アイドルグループ' },
    { id: 'aimyon', name: 'あいみょん', image: '🎸', description: '人気シンガーソングライター' },
    { id: 'yoasobi', name: 'YOASOBI', image: '🌙', description: '夜に駆けるで大ブレイク' },
    { id: 'king-gnu', name: 'King Gnu', image: '👑', description: '白日で大ヒット' },
    { id: 'kenshi-yonezu', name: '米津玄師', image: '🎵', description: 'Lemonで社会現象' },
    { id: 'lisa', name: 'LiSA', image: '🔥', description: '紅蓮華で鬼滅ブーム' },
    { id: 'official-hige', name: 'Official髭男dism', image: '🎹', description: 'Pretenderで大ヒット' },
    { id: 'ado', name: 'Ado', image: '🎤', description: 'うっせぇわで大ブレイク' },
    { id: 'mr-children', name: 'Mr.Children', image: '🎸', description: '国民的バンド' },
    { id: 'sakanaction', name: 'サカナクション', image: '🐟', description: '新宝島で人気' },
    
    // お笑い芸人
    { id: 'matsumoto-hitoshi', name: '松本人志', image: '😂', description: 'ダウンタウンの天才' },
    { id: 'sanma', name: '明石家さんま', image: '😄', description: 'お笑い怪獣' },
    { id: 'exit', name: 'EXIT', image: '🤣', description: 'チャラ男コンビ' },
    { id: 'sandwich-man', name: 'サンドウィッチマン', image: '🥪', description: '好感度No.1芸人' },
    { id: 'chidori', name: '千鳥', image: '🐦', description: 'クセが強い漫才' },
    
    // スポーツ選手
    { id: 'ohtani-shohei', name: '大谷翔平', image: '⚾', description: '二刀流の天才' },
    { id: 'naomi-osaka', name: '大坂なおみ', image: '🎾', description: 'テニス世界女王' },
    { id: 'hanyu-yuzuru', name: '羽生結弦', image: '⛸️', description: 'フィギュアの王者' },
    { id: 'rikako-ikee', name: '池江璃花子', image: '🏊', description: '水泳の天才' },
    
    // 監督・クリエイター
    { id: 'miyazaki-hayao', name: '宮崎駿', image: '🎥', description: 'ジブリの巨匠' },
    { id: 'shinkai-makoto', name: '新海誠', image: '🌌', description: '君の名は。監督' },
    { id: 'kojima-hideo', name: '小島秀夫', image: '🎮', description: 'メタルギア生みの親' },
    { id: 'matsuko-deluxe', name: 'マツコ・デラックス', image: '💜', description: 'テレビの女王' },
  ]
};
