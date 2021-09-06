import { spinners } from './spinners';

describe('spinners', () => {
  it('should work', () => {
    expect(spinners().color).toEqual('cyan');
  });
});
