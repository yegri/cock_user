"use client";
import PostForm from "@/assets/components/Board/PostForm";
import { useParams } from "next/navigation";

const BoardEdit = () => {
  const { id } = useParams() as { id: string };

  return <PostForm postId={id} />;
};

export default BoardEdit;
