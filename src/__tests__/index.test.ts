import { describe, expect, test } from '@jest/globals';
import LordOfRingsSDK from '..';
import * as dotenv from 'dotenv';

dotenv.config()

describe('All SDK functions must properly work', () => {
  const sdk: LordOfRingsSDK = new LordOfRingsSDK({
    apiKey: process.env.API_KEY!
  });

  test('It should return all books', async () => {
    const books = await sdk.getBooks();
    const bookIds = books.map((book) => book._id);
    expect(bookIds).toEqual([
      '5cf5805fb53e011a64671582',
      '5cf58077b53e011a64671583',
      '5cf58080b53e011a64671584'
    ]);
  });

  test('It should return movies that have top three box office revenue', async () => {
    const movies = await sdk.getMovies({
      sortingOptions: {
        boxOfficeRevenueInMillions: 'desc',
      },
      paginationOptions: {
        limit: 3,
      }
    });
    const movieIds = movies.map((movie) => movie._id);
    expect(movieIds).toEqual([
      '5cd95395de30eff6ebccde57',
      '5cd95395de30eff6ebccde56',
      '5cd95395de30eff6ebccde5d'
    ]);
  });

  test('It should return the data of a specific character', async () => {
    const [character] = await sdk.getCharacters({
      filterOptions: {
        name: {
          isIn: ['Gandalf']
        }
      }
    });
    expect(character._id).toBe('5cd99d4bde30eff6ebccfea0');
  });

  test('It should return top 50 quotes in alphabetic order of two characters in a movie', async () => {
    const quotes = await sdk.getQuotes({
      filterOptions: {
        character: {
          isIn: ['5cd99d4bde30eff6ebccfd0d', '5cd99d4bde30eff6ebccfc15'],
        },
        movie: {
          isIn: ['5cd95395de30eff6ebccde5d']
        }
      },
      sortingOptions: {
        dialog: 'asc'
      },
      paginationOptions: {
        limit: 50
      }
    });
    expect(quotes).toHaveLength(50);
    for (let i = 0; i < quotes.length; i++) {
      if (i > 0) {
        expect(quotes[i].dialog >= quotes[i - 1].dialog).toBe(true);
      }
      expect(
        ['5cd99d4bde30eff6ebccfd0d', '5cd99d4bde30eff6ebccfc15'].includes(quotes[i].character)
      ).toBe(true);
      expect(quotes[i].movie).toBe('5cd95395de30eff6ebccde5d');
    }
  });

  test('It should return all chapters of a book with chapter names starting with "A"', async () => {
    const chapters = await sdk.getChapters({
      filterOptions: {
        book: {
          isIn: ['5cf5805fb53e011a64671582']
        },
        chapterName: {
          isIn: ['/^A/']
        }
      }
    });
    const chapterNames = chapters.map((chapter) => chapter.chapterName);
    expect(chapterNames).toHaveLength(6);
    expect(chapterNames.every((name) => name.startsWith('A'))).toBe(true);
  });
});