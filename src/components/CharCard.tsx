import type { ThaiChar } from '../data/thaiData';

interface CharCardProps {
  data: ThaiChar;
  fontMode: 'loop' | 'noloop';
}

/**
 * CharCard Component
 * タイ文字を表示するカードコンポーネント
 */
export default function CharCard({ data, fontMode }: CharCardProps) {
  const { char, name, meaning, class: charClass } = data;

  // 子音クラスに応じたボーダーカラー
  const borderColorClass = getBorderColor(charClass);

  // フォントスタイルクラス
  const fontClass = fontMode === 'loop' ? 'font-loop' : 'font-noloop';

  return (
    <div
      data-testid="char-card"
      className={`
        ${borderColorClass}
        bg-white dark:bg-gray-800
        rounded-lg
        border-2
        p-4
        shadow-sm
        hover:shadow-md
        transition-shadow
        duration-200
        flex
        flex-col
        items-center
        justify-center
        gap-2
      `}
    >
      {/* 文字 */}
      <div className={`${fontClass} text-5xl md:text-6xl font-semibold text-gray-900 dark:text-gray-100`}>
        {char}
      </div>

      {/* 読み */}
      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {name}
      </div>

      {/* 意味 */}
      <div className="text-xs text-gray-500 dark:text-gray-400">
        {meaning}
      </div>
    </div>
  );
}

/**
 * 子音クラスに応じたボーダーカラーを返す
 */
function getBorderColor(charClass: ThaiChar['class']): string {
  switch (charClass) {
    case 'high':
      return 'border-red-400 dark:border-red-500';
    case 'mid':
      return 'border-blue-400 dark:border-blue-500';
    case 'low':
      return 'border-green-400 dark:border-green-500';
    case 'none':
    default:
      return 'border-gray-300 dark:border-gray-600';
  }
}
