import { Axios } from 'axios';
import convertOptionsToURLString from './helpers/convert-options-to-url-string';
import { Book, BookGettingOptions } from './types/book';
import { Chapter, ChapterGettingOptions } from './types/chapter';
import { Character, CharacterGettingOptions } from './types/character';
import { Movie, MovieGettingOptions } from './types/movie';
import { Quote, QuoteGettingOptions } from './types/quote';

type SDKInitOptions = {
  apiKey: string
};

export default class LordOfRingsSDK {
  private readonly request: Axios;

  constructor(sdkInitOptions: SDKInitOptions) {
    const { apiKey } = sdkInitOptions;
    this.request = new Axios({
      baseURL: 'https://the-one-api.dev/v2',
      headers: {
        authorization: `Bearer ${apiKey}`,
      },
    });
  }

  async getBooks(options?: BookGettingOptions): Promise<Book[]> {
    const optionsURLString = convertOptionsToURLString(options);
    const { data } = await this.request.get(`/book?${optionsURLString}`);
    const { docs } = JSON.parse(data);
    return docs;
  }

  async getMovies(options?: MovieGettingOptions): Promise<Movie[]> {
    const optionsURLString = convertOptionsToURLString(options);
    const { data } = await this.request.get(`/movie?${optionsURLString}`);
    const { docs } = JSON.parse(data);
    return docs;
  }

  async getCharacters(options: CharacterGettingOptions): Promise<Character[]> {
    const optionsURLString = convertOptionsToURLString(options);
    const { data } = await this.request.get(`/character?${optionsURLString}`);
    const { docs } = JSON.parse(data);
    return docs;
  }

  async getQuotes(options: QuoteGettingOptions): Promise<Quote[]> {
    const optionsURLString = convertOptionsToURLString(options);
    const { data } = await this.request.get(`/quote?${optionsURLString}`);
    const { docs } = JSON.parse(data);
    return docs;
  }

  async getChapters(options: ChapterGettingOptions): Promise<Chapter[]> {
    const optionsURLString = convertOptionsToURLString(options);
    const { data } = await this.request.get(`/chapter?${optionsURLString}`);
    const { docs } = JSON.parse(data);
    return docs;
  }
}
