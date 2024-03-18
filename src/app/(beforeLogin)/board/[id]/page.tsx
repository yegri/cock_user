"use client";
import BoardDetailPage from "@/assets/features/Board/Detail";
import { useParams } from "next/navigation";

const BoardDetail = () => {
  const { id } = useParams() as { id: string };

  return <BoardDetailPage postId={id} />;
};

export default BoardDetail;
