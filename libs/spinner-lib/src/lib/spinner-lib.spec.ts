import { SpinnerLib } from 'spinner-lib';

describe('spinnerLib', () => {
  it('should work', () => {
    const spinnerLib = new SpinnerLib()
    expect(spinnerLib).toHaveProperty('spinner');
  });
});
