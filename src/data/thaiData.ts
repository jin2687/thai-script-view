/**
 * タイ文字データ構造
 * Thai Script Character Data
 */

export type ThaiChar = {
  char: string;    // 文字 (例: ก)
  name: string;    // 読み (例: Ko Kai)
  meaning: string; // 意味 (例: 鶏)
  class: 'high' | 'mid' | 'low' | 'none'; // 子音クラス（高/中/低/なし）
  category: 'consonant' | 'vowel' | 'number' | 'tone'; // カテゴリ
};

/**
 * 子音 (Consonants)
 * 44子音を含む
 */
export const consonants: ThaiChar[] = [
  // 中子音 (Mid Consonants) - 9文字
  { char: 'ก', name: 'Ko Kai', meaning: '鶏', class: 'mid', category: 'consonant' },
  { char: 'จ', name: 'Cho Chan', meaning: '皿', class: 'mid', category: 'consonant' },
  { char: 'ฎ', name: 'Do Chada', meaning: '冠', class: 'mid', category: 'consonant' },
  { char: 'ฏ', name: 'To Patak', meaning: '槍', class: 'mid', category: 'consonant' },
  { char: 'ด', name: 'Do Dek', meaning: '子供', class: 'mid', category: 'consonant' },
  { char: 'ต', name: 'To Tao', meaning: '亀', class: 'mid', category: 'consonant' },
  { char: 'บ', name: 'Bo Baimai', meaning: '葉', class: 'mid', category: 'consonant' },
  { char: 'ป', name: 'Po Pla', meaning: '魚', class: 'mid', category: 'consonant' },
  { char: 'อ', name: 'O Ang', meaning: '盆', class: 'mid', category: 'consonant' },

  // 高子音 (High Consonants) - 11文字
  { char: 'ข', name: 'Kho Khai', meaning: '卵', class: 'high', category: 'consonant' },
  { char: 'ฃ', name: 'Kho Khuat', meaning: '瓶', class: 'high', category: 'consonant' },
  { char: 'ฉ', name: 'Cho Ching', meaning: 'シンバル', class: 'high', category: 'consonant' },
  { char: 'ฐ', name: 'Tho Than', meaning: '台座', class: 'high', category: 'consonant' },
  { char: 'ถ', name: 'Tho Thung', meaning: '袋', class: 'high', category: 'consonant' },
  { char: 'ผ', name: 'Pho Phung', meaning: '蜂', class: 'high', category: 'consonant' },
  { char: 'ฝ', name: 'Fo Fa', meaning: '蓋', class: 'high', category: 'consonant' },
  { char: 'ศ', name: 'So Sala', meaning: '東屋', class: 'high', category: 'consonant' },
  { char: 'ษ', name: 'So Rue Si', meaning: '仙人', class: 'high', category: 'consonant' },
  { char: 'ส', name: 'So Sua', meaning: '虎', class: 'high', category: 'consonant' },
  { char: 'ห', name: 'Ho Hip', meaning: '箱', class: 'high', category: 'consonant' },

  // 低子音 (Low Consonants) - 24文字
  { char: 'ค', name: 'Kho Khwai', meaning: '水牛', class: 'low', category: 'consonant' },
  { char: 'ฅ', name: 'Kho Khon', meaning: '人', class: 'low', category: 'consonant' },
  { char: 'ฆ', name: 'Kho Rakhang', meaning: '鐘', class: 'low', category: 'consonant' },
  { char: 'ง', name: 'Ngo Ngu', meaning: '蛇', class: 'low', category: 'consonant' },
  { char: 'ช', name: 'Cho Chang', meaning: '象', class: 'low', category: 'consonant' },
  { char: 'ซ', name: 'So So', meaning: '鎖', class: 'low', category: 'consonant' },
  { char: 'ฌ', name: 'Cho Choe', meaning: '木', class: 'low', category: 'consonant' },
  { char: 'ญ', name: 'Yo Ying', meaning: '女性', class: 'low', category: 'consonant' },
  { char: 'ฑ', name: 'Tho Montho', meaning: 'モントー', class: 'low', category: 'consonant' },
  { char: 'ฒ', name: 'Tho Phuthao', meaning: '老人', class: 'low', category: 'consonant' },
  { char: 'ณ', name: 'No Nen', meaning: '修行者', class: 'low', category: 'consonant' },
  { char: 'ท', name: 'Tho Thahan', meaning: '兵士', class: 'low', category: 'consonant' },
  { char: 'ธ', name: 'Tho Thong', meaning: '旗', class: 'low', category: 'consonant' },
  { char: 'น', name: 'No Nu', meaning: 'ねずみ', class: 'low', category: 'consonant' },
  { char: 'พ', name: 'Pho Phaan', meaning: '盆', class: 'low', category: 'consonant' },
  { char: 'ฟ', name: 'Fo Fan', meaning: '歯', class: 'low', category: 'consonant' },
  { char: 'ภ', name: 'Pho Samphao', meaning: '帆船', class: 'low', category: 'consonant' },
  { char: 'ม', name: 'Mo Ma', meaning: '馬', class: 'low', category: 'consonant' },
  { char: 'ย', name: 'Yo Yak', meaning: '巨人', class: 'low', category: 'consonant' },
  { char: 'ร', name: 'Ro Ruea', meaning: '船', class: 'low', category: 'consonant' },
  { char: 'ล', name: 'Lo Ling', meaning: '猿', class: 'low', category: 'consonant' },
  { char: 'ว', name: 'Wo Waen', meaning: '指輪', class: 'low', category: 'consonant' },
  { char: 'ฬ', name: 'Lo Chula', meaning: '凧', class: 'low', category: 'consonant' },
  { char: 'ฮ', name: 'Ho Nokhuk', meaning: 'フクロウ', class: 'low', category: 'consonant' },
];

/**
 * 母音 (Vowels)
 * 主要な母音記号を含む
 */
export const vowels: ThaiChar[] = [
  { char: 'ะ', name: 'Sara A', meaning: '短母音 a', class: 'none', category: 'vowel' },
  { char: 'า', name: 'Sara Aa', meaning: '長母音 aa', class: 'none', category: 'vowel' },
  { char: 'ิ', name: 'Sara I', meaning: '短母音 i', class: 'none', category: 'vowel' },
  { char: 'ี', name: 'Sara Ii', meaning: '長母音 ii', class: 'none', category: 'vowel' },
  { char: 'ึ', name: 'Sara Ue', meaning: '短母音 ue', class: 'none', category: 'vowel' },
  { char: 'ื', name: 'Sara Uue', meaning: '長母音 uue', class: 'none', category: 'vowel' },
  { char: 'ุ', name: 'Sara U', meaning: '短母音 u', class: 'none', category: 'vowel' },
  { char: 'ู', name: 'Sara Uu', meaning: '長母音 uu', class: 'none', category: 'vowel' },
  { char: 'เ', name: 'Sara E', meaning: '母音 e', class: 'none', category: 'vowel' },
  { char: 'แ', name: 'Sara Ae', meaning: '母音 ae', class: 'none', category: 'vowel' },
  { char: 'โ', name: 'Sara O', meaning: '母音 o', class: 'none', category: 'vowel' },
  { char: 'ใ', name: 'Sara Ai Maimuan', meaning: '母音 ai', class: 'none', category: 'vowel' },
  { char: 'ไ', name: 'Sara Ai Maimalai', meaning: '母音 ai', class: 'none', category: 'vowel' },
  { char: 'ำ', name: 'Sara Am', meaning: '母音 am', class: 'none', category: 'vowel' },
  { char: 'ๅ', name: 'Lakkhangyao', meaning: '繰り返し記号', class: 'none', category: 'vowel' },
  { char: '็', name: 'Mai Taikhu', meaning: '短縮記号', class: 'none', category: 'vowel' },
];

/**
 * 数字 (Numbers)
 * タイ数字 0-9
 */
export const numbers: ThaiChar[] = [
  { char: '๐', name: 'Soon', meaning: '0', class: 'none', category: 'number' },
  { char: '๑', name: 'Nueng', meaning: '1', class: 'none', category: 'number' },
  { char: '๒', name: 'Song', meaning: '2', class: 'none', category: 'number' },
  { char: '๓', name: 'Sam', meaning: '3', class: 'none', category: 'number' },
  { char: '๔', name: 'Si', meaning: '4', class: 'none', category: 'number' },
  { char: '๕', name: 'Ha', meaning: '5', class: 'none', category: 'number' },
  { char: '๖', name: 'Hok', meaning: '6', class: 'none', category: 'number' },
  { char: '๗', name: 'Chet', meaning: '7', class: 'none', category: 'number' },
  { char: '๘', name: 'Paet', meaning: '8', class: 'none', category: 'number' },
  { char: '๙', name: 'Kao', meaning: '9', class: 'none', category: 'number' },
];

/**
 * 声調記号 (Tone Marks)
 */
export const toneMarks: ThaiChar[] = [
  { char: '่', name: 'Mai Ek', meaning: '第1声調', class: 'none', category: 'tone' },
  { char: '้', name: 'Mai Tho', meaning: '第2声調', class: 'none', category: 'tone' },
  { char: '๊', name: 'Mai Tri', meaning: '第3声調', class: 'none', category: 'tone' },
  { char: '๋', name: 'Mai Chattawa', meaning: '第4声調', class: 'none', category: 'tone' },
  { char: '์', name: 'Thanthakhat', meaning: '無音記号', class: 'none', category: 'tone' },
  { char: 'ํ', name: 'Nikhahit', meaning: '鼻音記号', class: 'none', category: 'tone' },
];

/**
 * 全データ統合
 */
export const allCharacters: ThaiChar[] = [
  ...consonants,
  ...vowels,
  ...numbers,
  ...toneMarks,
];

/**
 * カテゴリ別にデータを取得
 */
export function getCharactersByCategory(category: ThaiChar['category']): ThaiChar[] {
  switch (category) {
    case 'consonant':
      return consonants;
    case 'vowel':
      return vowels;
    case 'number':
      return numbers;
    case 'tone':
      return toneMarks;
    default:
      return [];
  }
}
