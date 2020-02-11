import { FormatTimePipe } from './formatTime.pipe';

describe('FormatTimePipe', () => {
  let pipe: FormatTimePipe;

  beforeEach(() => {
    pipe = new FormatTimePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    it('should format the time', () => {
      const result = pipe.transform('192');
      expect(result).toEqual('3 hr 12 min');
    });

    it('should return 0 hr 0 min if the title is not provided', () => {
      const result = pipe.transform('');
      expect(result).toEqual('0 hr 0 min');
    });
  });
});
