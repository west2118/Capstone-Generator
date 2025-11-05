"use client";

import { deleteResearch } from "@/app/actions/research";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle, Loader, Trash2, X } from "lucide-react";
import { useEffect, useTransition } from "react";
import { toast } from "react-toastify";

type DeleteModalProps = {
  isModalOpen: boolean;
  isCloseModal: () => void;
  researchId: string;
};

export function DeleteModal({
  isModalOpen,
  isCloseModal,
  researchId,
}: DeleteModalProps) {
  const [isPending, startTransition] = useTransition();

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

  const handleDelete = () => {
    startTransition(async () => {
      try {
        const result = await deleteResearch(researchId);

        if (result.success) {
          isCloseModal();

          toast.success(result.message);
        } else {
          toast.error(result.message);
        }
      } catch (error: any) {
        toast.error(error.message);
      }
    });
  };

  if (!isModalOpen) return null;

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return (
    <div
      onClick={isCloseModal}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Card
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md mx-4 border-0 shadow-xl">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-red-100 text-red-600">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <CardTitle className="text-lg font-semibold text-black">
                Delete Research Project?
              </CardTitle>
            </div>
            <Button
              onClick={isCloseModal}
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-500 hover:text-gray-700 hover:bg-gray-100">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <CardDescription className="text-black/70 text-left pt-2">
            This will permanently delete your research project and all
            associated data. This action cannot be undone.
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="flex gap-3">
            <Button
              onClick={isCloseModal}
              disabled={isPending}
              variant="outline"
              className="flex-1 border-gray-300 text-black hover:bg-gray-50">
              Cancel
            </Button>
            <Button
              onClick={handleDelete}
              disabled={isPending}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white">
              {isPending ? <Loader className="animate-spin h-5 w-5" /> : ""}
              Delete Project
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
