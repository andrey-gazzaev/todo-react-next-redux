/** Base filter parameters. */
export namespace BaseFilterParams {
  /** Search filter. */
  export type Search = {
    /** Search line. */
    search?: string;
  };

  /** Pagination. */
  export type Pagination = {
    /** Page number. */
    pageNumber?: number;

    /** Page size. */
    pageSize?: number;
  };

  /** Search and pagination filters. */
  export type Combined = Search & Pagination;

  /** Required search and pagination filters. */
  export type RequiredCombined = Required<Combined>;

  /** Default page size option. */
  export const DEFAULT_PAGE_SIZE_OPTIONS = [5, 10, 25, 50];

  /** Filter param for creation date. */
  export const CREATION_DATE_FILTER_FIELD = "createdAt";

  /** Filter param for modification date. */
  export const MODIFICATION_DATE_FILTER_FIELD = "modifiedAt";

  /** Default filter values. */
  export const DEFAULT: RequiredCombined = {
    pageNumber: 0,
    pageSize: DEFAULT_PAGE_SIZE_OPTIONS[0],
    search: "",
  };

  /** Filter values for all items. */
  export const ALL_ITEMS: RequiredCombined = {
    pageNumber: 0,
    pageSize: 9999,
    search: "",
  };
}
