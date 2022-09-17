import { BaseOptions, BaseFilterOptions, BaseSortingOptions } from './base';

export type Book = {
  _id: string,
  name: string,
};

export type BookGettingOptions = BaseOptions & {
  filterOptions?: {
    [key in keyof Book]?: BaseFilterOptions
  },
  sortingOptions?: {
    [key in keyof Book]?: BaseSortingOptions
  }
};