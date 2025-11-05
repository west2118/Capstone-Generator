import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type PaginationProps = {
  limit: number;
  page: number;
  total: number | undefined;
  totalPages: number | undefined;
};

const Pagination = ({ total, totalPages, page, limit }: PaginationProps) => {
  const router = useRouter();

  if (!totalPages) return null;

  const maxPagesToShow = 5;
  let start = Math.max(1, page - Math.floor(maxPagesToShow / 2));
  let end = start + maxPagesToShow - 1;

  if (end > totalPages) {
    end = totalPages;
    start = Math.max(1, end - maxPagesToShow + 1);
  }

  const pageNumbers = Array.from(
    { length: end - start + 1 },
    (_, i) => start + i
  );

  const handlePageChange = (newPage: number) => {
    router.push(`?page=${newPage}`);
  };

  return (
    <>
      <div className="text-sm text-muted-foreground">
        Showing <span className="font-medium">{(page - 1) * limit + 1}</span> to{" "}
        <span className="font-medium">
          {Math.min(page * limit, total ?? 0)}
        </span>{" "}
        of <span className="font-medium">{total}</span> units
      </div>
      <div className="flex space-x-2">
        <Button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          variant="outline"
          size="sm">
          Previous
        </Button>

        {pageNumbers.map((num) => (
          <Button
            key={num}
            onClick={() => handlePageChange(num)}
            variant={num === page ? "default" : "outline"}
            size="sm">
            {num}
          </Button>
        ))}

        <Button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
          variant="outline"
          size="sm">
          Next
        </Button>
      </div>
    </>
  );
};

export default Pagination;
