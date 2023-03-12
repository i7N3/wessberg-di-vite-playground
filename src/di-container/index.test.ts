import { describe, expect, it } from 'vitest';
import { manualDi, automaticDi } from '.';

describe('di-container', () => {
  it('sample', () => {
    expect(manualDi()).toBeUndefined();
    expect(automaticDi()).toBeUndefined();
  });
});
