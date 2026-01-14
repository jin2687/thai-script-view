import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders app title', () => {
    render(<App />);
    const title = screen.getByText(/Thai Script Dual-View/i);
    expect(title).toBeInTheDocument();
  });

  it('renders font mode toggle', () => {
    render(<App />);
    const loopButton = screen.getByRole('button', { name: /^Loop$/i });
    const noLoopButton = screen.getByRole('button', { name: /^No-Loop$/i });

    expect(loopButton).toBeInTheDocument();
    expect(noLoopButton).toBeInTheDocument();
  });

  it('toggles font mode when clicked', () => {
    render(<App />);

    const loopButton = screen.getByRole('button', { name: /^Loop$/i });
    const noLoopButton = screen.getByRole('button', { name: /^No-Loop$/i });

    // デフォルトでLoopが選択されている
    expect(loopButton).toHaveClass('bg-blue-500');

    // No-Loopをクリック
    fireEvent.click(noLoopButton);
    expect(noLoopButton).toHaveClass('bg-blue-500');

    // Loopをクリック
    fireEvent.click(loopButton);
    expect(loopButton).toHaveClass('bg-blue-500');
  });

  it('renders category tabs', () => {
    render(<App />);

    const consonantTab = screen.getByRole('button', { name: /子音/i });
    const vowelTab = screen.getByRole('button', { name: /母音/i });
    const numberTab = screen.getByRole('button', { name: /数字/i });
    const toneTab = screen.getByRole('button', { name: /記号/i });

    expect(consonantTab).toBeInTheDocument();
    expect(vowelTab).toBeInTheDocument();
    expect(numberTab).toBeInTheDocument();
    expect(toneTab).toBeInTheDocument();
  });

  it('filters characters by category when tab is clicked', () => {
    render(<App />);

    // デフォルトでは子音が表示されている
    const consonantTab = screen.getByRole('button', { name: /子音/i });
    expect(consonantTab).toHaveClass('border-blue-500');

    // 母音タブをクリック
    const vowelTab = screen.getByRole('button', { name: /母音/i });
    fireEvent.click(vowelTab);
    expect(vowelTab).toHaveClass('border-blue-500');

    // 数字タブをクリック
    const numberTab = screen.getByRole('button', { name: /数字/i });
    fireEvent.click(numberTab);
    expect(numberTab).toHaveClass('border-blue-500');

    // 記号タブをクリック
    const toneTab = screen.getByRole('button', { name: /記号/i });
    fireEvent.click(toneTab);
    expect(toneTab).toHaveClass('border-blue-500');
  });

  it('displays character cards', () => {
    render(<App />);

    // 子音が表示されているか確認（最初の文字「ก」をチェック）
    const firstChar = screen.getByText('ก');
    expect(firstChar).toBeInTheDocument();
  });

  it('displays class legend', () => {
    render(<App />);

    const highClass = screen.getByText(/高子音/i);
    const midClass = screen.getByText(/中子音/i);
    const lowClass = screen.getByText(/低子音/i);

    expect(highClass).toBeInTheDocument();
    expect(midClass).toBeInTheDocument();
    expect(lowClass).toBeInTheDocument();
  });

  it('renders card size toggle buttons', () => {
    render(<App />);

    const smallButton = screen.getByRole('button', { name: /小/i });
    const mediumButton = screen.getByRole('button', { name: /中/i });
    const largeButton = screen.getByRole('button', { name: /大/i });

    expect(smallButton).toBeInTheDocument();
    expect(mediumButton).toBeInTheDocument();
    expect(largeButton).toBeInTheDocument();
  });

  it('toggles card size when clicked', () => {
    render(<App />);

    const smallButton = screen.getByRole('button', { name: /小/i });
    const mediumButton = screen.getByRole('button', { name: /中/i });
    const largeButton = screen.getByRole('button', { name: /大/i });

    // デフォルトで中が選択されている
    expect(mediumButton).toHaveClass('bg-green-500');

    // 小をクリック
    fireEvent.click(smallButton);
    expect(smallButton).toHaveClass('bg-green-500');

    // 大をクリック
    fireEvent.click(largeButton);
    expect(largeButton).toHaveClass('bg-green-500');

    // 中をクリック
    fireEvent.click(mediumButton);
    expect(mediumButton).toHaveClass('bg-green-500');
  });
});
