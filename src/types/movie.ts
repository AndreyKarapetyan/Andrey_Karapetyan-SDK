import { BaseOptions, BaseFilterOptions, BaseSortingOptions } from './base';

export type Movie = {
  _id: string,
  name: string,
  runtimeInMinutes: number,
  budgetInMillions: number,
  boxOfficeRevenueInMillions: number,
  academyAwardNominations: number,
  academyAwardWins: number,
  rottenTomatoesScore: number,
};

export type MovieGettingOptions = BaseOptions & {
  filterOptions?: {
    [key in keyof Movie]?: BaseFilterOptions
  },
  sortingOptions?: {
    [key in keyof Movie]?: BaseSortingOptions
  }
};