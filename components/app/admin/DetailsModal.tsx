import { ResearchType } from "@/lib/types";
import PreviewCard from "../PreviewCard";
import { useEffect } from "react";
import { X } from "lucide-react"; // ← import the X icon
import { Button } from "@/components/ui/button"; // optional (if using shadcn Button)

type DetailsModalProps = {
  isModalOpen: boolean;
  isCloseModal: () => void;
  currentData: any;
};

export default function DetailsModal({
  isModalOpen,
  isCloseModal,
  currentData,
}: DetailsModalProps) {
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return (
    <div
      onClick={isCloseModal}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div onClick={(e) => e.stopPropagation()} className="relative">
        <Button
          variant="ghost"
          size="icon"
          onClick={isCloseModal}
          className="absolute top-2 right-2 rounded-full hover:bg-gray-200">
          <X className="w-5 h-5" />
        </Button>

        <PreviewCard researchData={currentData} />
      </div>
    </div>
  );
}
