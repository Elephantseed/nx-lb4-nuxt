// import { SpinnerLib } from './spinner-lib';
//
// describe('spinnerLib', () => {
//   it('should work', () => {
//     const spinnerLib = new SpinnerLib()
//     expect(spinnerLib).toHaveProperty('spinner');
//   });
// });

import {nodeServerLib} from './spinner-lib';

describe('spinnerLib', () => {
  it('should work', () => {
    expect(nodeServerLib()).toBe('node-server-lib');
  });
});
