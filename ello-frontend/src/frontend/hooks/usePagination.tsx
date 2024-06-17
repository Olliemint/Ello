type PaginatedResult<T> = {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
  data: T[];
};

export function getPaginatedItems<T>(
  items: T[],
  page: number = 1,
  pageSize: number = 100
): PaginatedResult<T> {
  const offset = (page - 1) * pageSize;
  const pagedItems = items.slice(offset, offset + pageSize);

  return {
    page,
    pageSize,
    total: items.length,
    totalPages: Math.ceil(items.length / pageSize),
    data: pagedItems,
  };
}
