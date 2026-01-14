import type { ThaiChar } from '../data/thaiData';

export type CardSize = 'small' | 'medium' | 'large';

interface CharCardProps {
  data: ThaiChar;
  fontMode: 'loop' | 'noloop';
  size?: CardSize;
}

/**
 * CharCard Component
 * タイ文字を表示するカードコンポーネント
 */
export default function CharCard({ data, fontMode, size = 'medium' }: CharCardProps) {
  const { char, name, meaning, class: charClass } = data;

  // 子音クラスに応じたボーダーカラー
  const borderColorClass = getBorderColor(charClass);

  // フォントスタイルクラス
  const fontClass = fontMode === 'loop' ? 'font-loop' : 'font-noloop';

  // サイズに応じたクラス
  const sizeClasses = getSizeClasses(size);

  return (
    <div
      data-testid="char-card"
      className={`
        ${borderColorClass}
        bg-white dark:bg-gray-800
        rounded-lg
        border-2
        ${sizeClasses.padding}
        shadow-sm
        hover:shadow-md
        transition-shadow
        duration-200
        flex
        flex-col
        items-center
        justify-center
        ${sizeClasses.gap}
      `}
    >
      {/* 文字 */}
      <div className={`${fontClass} ${sizeClasses.charSize} font-semibold text-gray-900 dark:text-gray-100`}>
        {char}
      </div>

      {/* 読み */}
      <div className={`${sizeClasses.nameSize} font-medium text-gray-700 dark:text-gray-300`}>
        {name}
      </div>

      {/* 意味 */}
      <div className={`${sizeClasses.meaningSize} text-gray-500 dark:text-gray-400`}>
        {meaning}
      </div>
    </div>
  );
}

/**
 * サイズに応じたスタイルクラスを返す
 */
function getSizeClasses(size: CardSize) {
  switch (size) {
    case 'small':
      return {
        padding: 'p-1.5',
        gap: 'gap-0.5',
        charSize: 'text-2xl md:text-3xl',
        nameSize: 'text-xs',
        meaningSize: 'text-xs',
      };
    case 'large':
      return {
        padding: 'p-4',
        gap: 'gap-2',
        charSize: 'text-6xl md:text-7xl',
        nameSize: 'text-sm',
        meaningSize: 'text-xs',
      };
    case 'medium':
    default:
      return {
        padding: 'p-3',
        gap: 'gap-1.5',
        charSize: 'text-4xl md:text-5xl',
        nameSize: 'text-sm',
        meaningSize: 'text-xs',
      };
  }
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
