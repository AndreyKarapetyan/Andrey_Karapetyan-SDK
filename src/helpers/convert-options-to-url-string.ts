import { BaseFilterOptions, BaseOptions, BasePaginationOptions, BaseSortingOptions } from "../types/base";

function convertFilterOptions(filterOptions?: { [key: string]: BaseFilterOptions }): string {
  if (!filterOptions) {
    return '';
  }
  return Object.keys(filterOptions)
    .flatMap((key) => [
      (filterOptions[key].isIn && `${key}=${filterOptions[key].isIn!.join()}`),
      (filterOptions[key].isNotIn && `${key}!=${filterOptions[key].isNotIn!.join()}`),
      ((filterOptions[key].gt || filterOptions[key].gt === 0) && `${key}>${filterOptions[key].gt}`),
      ((filterOptions[key].gte || filterOptions[key].gte === 0) && `${key}>=${filterOptions[key].gte}`),
      ((filterOptions[key].lt || filterOptions[key].lt === 0) && `${key}<${filterOptions[key].lt}`),
      ((filterOptions[key].lte || filterOptions[key].lte === 0) && `${key}<=${filterOptions[key].lte}`),
    ])
    .filter((val) => Boolean(val))
    .join('&');
}

function convertSortingOptions(sortingOptions?: { [key: string]: BaseSortingOptions }): string {
  if (!sortingOptions) {
    return '';
  }
  return Object.keys(sortingOptions)
    .map((key) => `sort=${key}:${sortingOptions[key]}`)
    .join('&');
}

function convertPaginationOptions(paginationOptions?: BasePaginationOptions): string {
  if (!paginationOptions) {
    return '';
  }
  return Object.entries(paginationOptions).map((entry) => entry.join('=')).join('&');
}

export default function convertOptionsToURLString(options?: BaseOptions): string {
  if (!options) {
    return '';
  }
  const { filterOptions, sortingOptions, paginationOptions } = options;
  const filterURLString = convertFilterOptions(filterOptions);
  const sortingURLString = convertSortingOptions(sortingOptions);
  const paginationURLString = convertPaginationOptions(paginationOptions);
  return [filterURLString, sortingURLString, paginationURLString]
    .filter((val) => Boolean(val))
    .join('&');
}