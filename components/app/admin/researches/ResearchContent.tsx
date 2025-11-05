"use client";

import ResearchCard from "@/components/app/admin/researches/ResearchCard";
import SearchFilterCard from "@/components/app/admin/researches/SearchFilterCard";
import { ResearchType } from "@/lib/types";
import DetailsModal from "@/components/app/admin/DetailsModal";
import { startTransition, useCallback, useState } from "react";
import Pagination from "../Pagination";
import { DeleteModal } from "../DeleteModal";

type ResearchContentProps = {
  researches: ResearchType[];
  limit: number;
  page: number;
  total: number | undefined;
  totalPages: number | undefined;
};

const ResearchContent = ({
  researches,
  total,
  totalPages,
  page,
  limit,
}: ResearchContentProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentData, setCurrentData] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const handleOpenModal = useCallback((researchData: any) => {
    startTransition(() => {
      setIsModalOpen(true);
      setCurrentData(researchData);
    });
  }, []);

  const handleDeleteModal = useCallback((researchId: string) => {
    startTransition(() => {
      setIsDeleteModalOpen(true);
      setCurrentId(researchId);
    });
  }, []);

  const handleCloseDetailsModal = useCallback(() => {
    setIsModalOpen(false);
    setCurrentData([]);
  }, []);

  const handleCloseDeleteModal = useCallback(() => {
    setIsDeleteModalOpen(false);
    setCurrentId("");
  }, []);

  return (
    <>
      <div className="container mx-auto px-6">
        {/* Search and Filter Section */}
        <SearchFilterCard />

        {/* Research Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researches?.map((research) => (
            <ResearchCard
              key={research._id}
              research={research}
              handleOpenModal={handleOpenModal}
              handleDeleteModal={handleDeleteModal}
            />
          ))}
        </div>

        {researches.length >= 9 && (
          <div className="flex justify-between items-center mt-10">
            <Pagination
              total={total}
              totalPages={totalPages}
              page={page}
              limit={limit}
            />
          </div>
        )}
      </div>

      <DetailsModal
        isModalOpen={isModalOpen}
        isCloseModal={handleCloseDetailsModal}
        currentData={currentData}
      />

      <DeleteModal
        isModalOpen={isDeleteModalOpen}
        isCloseModal={handleCloseDeleteModal}
        researchId={currentId}
      />
    </>
  );
};

export default ResearchContent;
