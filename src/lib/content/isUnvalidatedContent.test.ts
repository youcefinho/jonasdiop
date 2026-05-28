import { describe, expect, it } from 'vitest';
import { isUnvalidatedContent, stripUnvalidatedSegments } from './isUnvalidatedContent';

describe('isUnvalidatedContent', () => {
  it('detects [À VALIDER JONAS] markers', () => {
    expect(isUnvalidatedContent('[À VALIDER JONAS — anecdote personnelle]')).toBe(true);
  });

  it('detects [TO VALIDATE] english markers', () => {
    expect(isUnvalidatedContent('[TO VALIDATE WITH JONAS — Calendly URL]')).toBe(true);
  });

  it('detects mixed text with embedded placeholder', () => {
    expect(isUnvalidatedContent('Depuis [À VALIDER JONAS — année], j’ai accompagné...')).toBe(true);
  });

  it('detects dev comments (Formulaire wire Sprint 6)', () => {
    expect(isUnvalidatedContent('[Formulaire wire Sprint 6 — GHL integration]')).toBe(true);
  });

  it('detects dev comments (Grid articles GHL Blog API)', () => {
    expect(
      isUnvalidatedContent('[Grid articles — GHL Blog API headless Sprint 5. Jonas publie...]')
    ).toBe(true);
  });

  it('returns false for legitimate copy with brackets', () => {
    expect(isUnvalidatedContent('Vous gagnez [25%] de temps en moyenne')).toBe(false);
  });

  it('returns false for empty / null', () => {
    expect(isUnvalidatedContent('')).toBe(false);
    expect(isUnvalidatedContent(null)).toBe(false);
    expect(isUnvalidatedContent(undefined)).toBe(false);
  });
});

describe('stripUnvalidatedSegments', () => {
  it('removes pure placeholder leaving null', () => {
    expect(stripUnvalidatedSegments('[À VALIDER JONAS — date]')).toBeNull();
  });

  it('strips embedded placeholder, keeps surrounding text', () => {
    expect(stripUnvalidatedSegments('NEQ : [À VALIDER JONAS]')).toBe('NEQ :');
  });

  it('cleans orphan whitespace + comma', () => {
    expect(stripUnvalidatedSegments('Depuis [À VALIDER JONAS — année], j’ai accompagné')).toBe(
      'Depuis, j’ai accompagné'
    );
  });

  it('leaves real copy unchanged', () => {
    expect(stripUnvalidatedSegments('Pas d’épuisement.')).toBe('Pas d’épuisement.');
  });
});
