import { ByGenrePipe } from './bygenre.pipe';
import { Movie } from 'src/model/Movie.model';

describe('ByGenrePipe', () => {
  let pipe: ByGenrePipe;
  let items: Movie[];

  beforeEach(() => {
    pipe = new ByGenrePipe();
    items = [
      {
        original_title: 'Titanic A',
        vote_average: 7.6,
        poster_path: '',
        id: 1,
        release_date: '',
        genre_ids: [1, 6],
        runtime: 0
      },
      {
        original_title: 'Titanica',
        vote_average: 7.6,
        poster_path: '',
        id: 2,
        release_date: '',
        genre_ids: [1, 2],
        runtime: 0
      },
      {
        original_title: 'TITANICB',
        vote_average: 7.6,
        poster_path: '',
        id: 3,
        release_date: '',
        genre_ids: [27],
        runtime: 0
      },
      {
        original_title: 'Titanicc',
        vote_average: 7.6,
        poster_path: '',
        id: 4,
        release_date: '',
        genre_ids: [8, 7],
        runtime: 0
      },
    ];
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    it('should filter movies by genre', () => {
      const result = pipe.transform(items, {id: 1, name: 'Romance'});
      expect(result).toEqual([
        {
          original_title: 'Titanic A',
          vote_average: 7.6,
          poster_path: '',
          id: 1,
          release_date: '',
          genre_ids: [1, 6],
          runtime: 0
        },
        {
          original_title: 'Titanica',
          vote_average: 7.6,
          poster_path: '',
          id: 2,
          release_date: '',
          genre_ids: [1, 2],
          runtime: 0
        },
      ]);
    });

    it('should return an empty array when items are empty', () => {
      expect(pipe.transform(null, {id: 1, name: 'Romance'})).toEqual([]);
    });

    it('should return the list when searchGenre is not defined', () => {
      expect(pipe.transform(items, null)).toEqual(items);
    });

    it('should return an empty array when Genre is not empty and there are no matches', () => {
      expect(pipe.transform(items, {id: 0, name: 'test'})).toEqual([]);
    });
  });
});
