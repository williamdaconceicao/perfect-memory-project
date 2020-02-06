import { ByYearPipe } from './byyear.pipe';
import { Movie } from 'src/model/Movie.model';

describe('ByYearPipe', () => {
  let pipe: ByYearPipe;
  let items: Movie[];

  beforeEach(() => {
    pipe = new ByYearPipe();
    items = [
      {
        original_title: '',
        vote_average: 7.6,
        poster_path: '',
        id: 1,
        release_date: '2019-25-12',
        runtime: 0
      },
      {
        original_title: '',
        vote_average: 7.6,
        poster_path: '',
        id: 2,
        release_date: '2018-25-12',
        runtime: 0
      },
      {
        original_title: '',
        vote_average: 7.6,
        poster_path: '',
        id: 3,
        release_date: '2017-25-12',
        runtime: 0
      },
      {
        original_title: '',
        vote_average: 7.6,
        poster_path: '',
        id: 4,
        release_date: '2016-25-12',
        runtime: 0
      },
    ];
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    it('should filter movies by year', () => {
      const result = pipe.transform(items, '2019');
      expect(result).toEqual([
        jasmine.objectContaining({
          release_date: '2019-25-12',
        })
      ]);
    });

    it('should return an empty array when items are empty', () => {
      expect(pipe.transform(null, '')).toEqual([]);
    });

    it('should return the list when searchYear is empty', () => {
      expect(pipe.transform(items, '')).toEqual(items);
    });

    it('should return an empty array when searchYear is not empty and there are no matches', () => {
      expect(pipe.transform(items, '  ')).toEqual([]);
    });
  });
});
