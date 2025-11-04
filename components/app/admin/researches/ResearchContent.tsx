"use client";

import ResearchCard from "@/components/app/admin/researches/ResearchCard";
import SearchFilterCard from "@/components/app/admin/researches/SearchFilterCard";
import { ResearchType } from "@/lib/types";
import DetailsModal from "@/components/app/admin/DetailsModal";
import { useState } from "react";

const ResearchContent = ({ researches }: { researches: ResearchType[] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentData, setCurrentData] = useState([]);

  const handleOpenModal = (researchData: any) => {
    setIsModalOpen(true);
    setCurrentData(researchData);
  };

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
            />
          ))}
        </div>
      </div>

      <DetailsModal
        isModalOpen={isModalOpen}
        isCloseModal={() => {
          setIsModalOpen(false);
          setCurrentData([]);
        }}
        currentData={currentData}
      />
    </>
  );
};

export default ResearchContent;
