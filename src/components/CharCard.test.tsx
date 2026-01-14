import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CharCard from './CharCard';
import type { ThaiChar } from '../data/thaiData';

describe('CharCard', () => {
  const mockCharData: ThaiChar = {
    char: 'ก',
    name: 'Ko Kai',
    meaning: '鶏',
    class: 'mid',
    category: 'consonant',
  };

  it('renders character correctly', () => {
    render(<CharCard data={mockCharData} fontMode="loop" />);

    const charElement = screen.getByText('ก');
    expect(charElement).toBeInTheDocument();
  });

  it('renders name correctly', () => {
    render(<CharCard data={mockCharData} fontMode="loop" />);

    const nameElement = screen.getByText('Ko Kai');
    expect(nameElement).toBeInTheDocument();
  });

  it('renders meaning correctly', () => {
    render(<CharCard data={mockCharData} fontMode="loop" />);

    const meaningElement = screen.getByText('鶏');
    expect(meaningElement).toBeInTheDocument();
  });

  it('applies loop font class when fontMode is "loop"', () => {
    render(<CharCard data={mockCharData} fontMode="loop" />);

    const charElement = screen.getByText('ก');
    expect(charElement).toHaveClass('font-loop');
  });

  it('applies noloop font class when fontMode is "noloop"', () => {
    render(<CharCard data={mockCharData} fontMode="noloop" />);

    const charElement = screen.getByText('ก');
    expect(charElement).toHaveClass('font-noloop');
  });

  it('applies mid class border color for mid consonant', () => {
    render(<CharCard data={mockCharData} fontMode="loop" />);

    const card = screen.getByTestId('char-card');
    expect(card).toHaveClass('border-blue-400');
  });

  it('applies high class border color for high consonant', () => {
    const highConsonant: ThaiChar = {
      ...mockCharData,
      char: 'ข',
      name: 'Kho Khai',
      class: 'high',
    };
    render(<CharCard data={highConsonant} fontMode="loop" />);

    const card = screen.getByTestId('char-card');
    expect(card).toHaveClass('border-red-400');
  });

  it('applies low class border color for low consonant', () => {
    const lowConsonant: ThaiChar = {
      ...mockCharData,
      char: 'ค',
      name: 'Kho Khwai',
      class: 'low',
    };
    render(<CharCard data={lowConsonant} fontMode="loop" />);

    const card = screen.getByTestId('char-card');
    expect(card).toHaveClass('border-green-400');
  });

  it('applies neutral border color for vowels/numbers/tones', () => {
    const vowel: ThaiChar = {
      char: 'ะ',
      name: 'Sara A',
      meaning: '短母音 a',
      class: 'none',
      category: 'vowel',
    };
    render(<CharCard data={vowel} fontMode="loop" />);

    const card = screen.getByTestId('char-card');
    expect(card).toHaveClass('border-gray-300');
  });

  it('renders with small size', () => {
    render(<CharCard data={mockCharData} fontMode="loop" size="small" />);

    const charElement = screen.getByText('ก');
    expect(charElement).toHaveClass('text-2xl');
  });

  it('renders with medium size (default)', () => {
    render(<CharCard data={mockCharData} fontMode="loop" size="medium" />);

    const charElement = screen.getByText('ก');
    expect(charElement).toHaveClass('text-4xl');
  });

  it('renders with large size', () => {
    render(<CharCard data={mockCharData} fontMode="loop" size="large" />);

    const charElement = screen.getByText('ก');
    expect(charElement).toHaveClass('text-6xl');
  });
});
