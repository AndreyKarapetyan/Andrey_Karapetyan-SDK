export type BaseFilterOptions = {
  isIn?: string[];
  isNotIn?: string[];
  gt?: number;
  gte?: number;
  lt?: number;
  lte?: number;
};

export type BasePaginationOptions = {
  limit?: number,
  page?: number,
  offset?: number
};

export type BaseSortingOptions = 'asc' | 'desc';

export type BaseOptions = {
  filterOptions?: {
    [key: string]: BaseFilterOptions
  },
  sortingOptions?: {
    [key: string]: BaseSortingOptions
  },
  paginationOptions?: BasePaginationOptions
};