import { BaseOptions, BaseFilterOptions, BaseSortingOptions } from './base';

export type Chapter = {
  _id: string,
  chapterName: string,
  book: string,
};

export type ChapterGettingOptions = BaseOptions & {
  filterOptions?: {
    [key in keyof Chapter]?: BaseFilterOptions
  },
  sortingOptions?: {
    [key in keyof Chapter]?: BaseSortingOptions
  }
};