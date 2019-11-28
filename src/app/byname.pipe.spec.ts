import { ByNamePipe } from './byname.pipe';

describe('ByNamePipe', () => {
  it('create an instance', () => {
    const pipe = new ByNamePipe();
    expect(pipe).toBeTruthy();
  });
});
