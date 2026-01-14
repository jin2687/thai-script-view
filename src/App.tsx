import { useState } from 'react';
import CharCard from './components/CharCard';
import { getCharactersByCategory } from './data/thaiData';
import type { ThaiChar } from './data/thaiData';

type FontMode = 'loop' | 'noloop';
type Category = ThaiChar['category'];

function App() {
  const [fontMode, setFontMode] = useState<FontMode>('loop');
  const [category, setCategory] = useState<Category>('consonant');

  const characters = getCharactersByCategory(category);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
            🇹🇭 Thai Script Dual-View
          </h1>

          {/* Font Mode Toggle */}
          <div className="flex justify-center mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-2 shadow-md inline-flex gap-2">
              <button
                onClick={() => setFontMode('loop')}
                className={`
                  px-6 py-2 rounded-md font-medium transition-all duration-200
                  ${
                    fontMode === 'loop'
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }
                `}
              >
                Loop (有頭)
              </button>
              <button
                onClick={() => setFontMode('noloop')}
                className={`
                  px-6 py-2 rounded-md font-medium transition-all duration-200
                  ${
                    fontMode === 'noloop'
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }
                `}
              >
                No-Loop (無頭)
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-2 shadow-md inline-flex gap-2 flex-wrap justify-center">
              <TabButton
                active={category === 'consonant'}
                onClick={() => setCategory('consonant')}
                label="子音 (Consonants)"
              />
              <TabButton
                active={category === 'vowel'}
                onClick={() => setCategory('vowel')}
                label="母音 (Vowels)"
              />
              <TabButton
                active={category === 'number'}
                onClick={() => setCategory('number')}
                label="数字 (Numbers)"
              />
              <TabButton
                active={category === 'tone'}
                onClick={() => setCategory('tone')}
                label="記号 (Tones)"
              />
            </div>
          </div>

          {/* Class Legend (子音の時のみ表示) */}
          {category === 'consonant' && (
            <div className="flex justify-center gap-4 text-sm flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-red-400 rounded"></div>
                <span className="text-gray-700 dark:text-gray-300">高子音 (High)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-blue-400 rounded"></div>
                <span className="text-gray-700 dark:text-gray-300">中子音 (Mid)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-green-400 rounded"></div>
                <span className="text-gray-700 dark:text-gray-300">低子音 (Low)</span>
              </div>
            </div>
          )}
        </header>

        {/* Character Grid */}
        <main>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {characters.map((char) => (
              <CharCard key={char.char} data={char} fontMode={fontMode} />
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>タイ文字学習アプリ | Thai Script Learning App</p>
          <p className="mt-2">Loop: Sarabun (公文書) | No-Loop: Kanit (モダン)</p>
        </footer>
      </div>
    </div>
  );
}

/**
 * Tab Button Component
 */
interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  label: string;
}

function TabButton({ active, onClick, label }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-md font-medium transition-all duration-200 border-2
        ${
          active
            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
            : 'border-transparent bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
        }
      `}
    >
      {label}
    </button>
  );
}

export default App;
