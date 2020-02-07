import { FormatTitlePipe } from './formatTitle.pipe';

describe('FormatTitlePipe', () => {
  let pipe: FormatTitlePipe;

  beforeEach(() => {
    pipe = new FormatTitlePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    it('should remove the content of a parenthesis inside the titles', () => {
      const result = pipe.transform('test(need to be remove)');
      expect(result).toEqual('test');
    });

    it('should return No Title if the title is not provided', () => {
      const result = pipe.transform('');
      expect(result).toEqual('No Title');
    });

    it('should work if the title do not contain parenthesis', () => {
      const result = pipe.transform('test');
      expect(result).toEqual('test');
    });
  });
});
