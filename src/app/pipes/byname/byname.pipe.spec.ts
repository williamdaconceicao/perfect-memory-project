import { ByNamePipe } from './byname.pipe';
import { Movie } from 'src/model/Movie.model';

describe('ByNamePipe', () => {
  let pipe: ByNamePipe;
  let items: Movie[];

  beforeEach(() => {
    pipe = new ByNamePipe();
    items = [
      {
        original_title: 'Titanic A',
        vote_average: 7.6,
        poster_path: '',
        id: 1,
        release_date: '',
        runtime: 0
      },
      {
        original_title: 'Titanica',
        vote_average: 7.6,
        poster_path: '',
        id: 2,
        release_date: '',
        runtime: 0
      },
      {
        original_title: 'TITANICB',
        vote_average: 7.6,
        poster_path: '',
        id: 3,
        release_date: '',
        runtime: 0
      },
      {
        original_title: 'Titanicc',
        vote_average: 7.6,
        poster_path: '',
        id: 4,
        release_date: '',
        runtime: 0
      },
    ];
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    it('should filter movies by name', () => {
      const result = pipe.transform(items, 'Titanicc');
      expect(result).toEqual([
        jasmine.objectContaining({
          original_title: 'Titanicc',
        })
      ]);
    });

    it('should return an empty array when items are empty', () => {
      expect(pipe.transform([], 'Titanic')).toEqual([]);
    });

    it('should return the list when searchText is empty', () => {
      expect(pipe.transform(items, '')).toEqual(items);
    });

    it('should return an empty array when searchText is not empty and there are no matches', () => {
      expect(pipe.transform(items, '  ')).toEqual([]);
    });

    it('should filter movies by name with searchText in upper case', () => {
      expect(pipe.transform(items, 'TITANICC')).toEqual([
        jasmine.objectContaining({ original_title: 'Titanicc' })
      ]);
    });

    it('should filter movies by name with original title in upper case', () => {
      expect(pipe.transform(items, 'TiTAniCb')).toEqual([
        jasmine.objectContaining({ original_title: 'TITANICB' })
      ]);
    });
  });
});
