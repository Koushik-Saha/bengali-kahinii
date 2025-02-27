import React from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const limit = Number(searchParams.get("limit")) || 15;

    const goToPage = (newPage: number) => {
        router.push(`${pathname}?page=${newPage}&limit=${limit}`);
    };

    // Generate pagination numbers
    const getPageNumbers = () => {
        const pages = [];
        if (currentPage > 2) pages.push(1);
        if (currentPage > 3) pages.push("...");
        if (currentPage > 1) pages.push(currentPage - 1);
        pages.push(currentPage);
        if (currentPage < totalPages) pages.push(currentPage + 1);
        if (currentPage < totalPages - 2) pages.push("...");
        if (currentPage < totalPages - 1) pages.push(totalPages);
        return pages;
    };

    return (
        <div className="flex justify-center space-x-2 mt-4 bg-green-100 p-4 rounded-lg">
            {getPageNumbers().map((page, index) =>
                    typeof page === "number" ? (
                        <button
                            key={index}
                            onClick={() => goToPage(page)}
                            className={`px-4 py-2 border rounded-md cursor-pointer ${
                                currentPage === page ? "bg-green-300 font-bold" : "bg-green-200"
                            }`}
                        >
                            {page}
                        </button>
                    ) : (
                        <span key={index} className="px-4 py-2 border rounded-md text-gray-500">
            {page}
          </span>
                    )
            )}
            {currentPage < totalPages && (
                <button
                    onClick={() => goToPage(currentPage + 1)}
                    className="px-4 py-2 border rounded-md bg-green-200 font-semibold cursor-pointer"
                >
                    Next →
                </button>
            )}
        </div>
    );
};

export default Pagination;
