import { BaseOptions, BaseFilterOptions, BaseSortingOptions } from './base';

export type Character = {
  _id: string,
  height: string,
  race: string,
  gender: string,
  birth: string,
  spouse: string,
  death: string,
  realm: string,
  hair: string,
  name: string,
  wikiUrl: string,
};

export type CharacterGettingOptions = BaseOptions & {
  filterOptions?: {
    [key in keyof Character]?: BaseFilterOptions
  },
  sortingOptions?: {
    [key in keyof Character]?: BaseSortingOptions
  }
};
