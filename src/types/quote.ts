import { BaseOptions, BaseFilterOptions, BaseSortingOptions } from './base';

export type Quote = {
  _id: string,
  dialog: string,
  movie: string,
  character: string,
  id: string
};


export type QuoteGettingOptions = BaseOptions & {
  filterOptions?: {
    [key in keyof Quote]?: BaseFilterOptions
  },
  sortingOptions?: {
    [key in keyof Quote]?: BaseSortingOptions
  }
};