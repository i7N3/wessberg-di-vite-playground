import { describe, expect, it } from 'vitest';
import { diEntry } from '.';

describe('di-container', () => {
  it('sample', () => {
    expect(diEntry()).toBeUndefined();
  });
});
