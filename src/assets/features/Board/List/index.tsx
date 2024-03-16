import BoardItem from "@/assets/components/Items/BoradItem";
import * as styles from "./index.css";
import BoardNewItem from "@/assets/components/Items/BoardNewItem";
import prisma from "@/app/lib/prisma";
import Link from "next/link";

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true }, // 작성자의 이름만을 선택
      },
    },
  });

  // 각 게시물의 작성자 이름만을 추출하여 반환
  return posts.map((post) => ({
    ...post,
    authorName: post.author?.name || "Unknown", // 작성자 이름 또는 'Unknown'으로 설정
  }));
}

export default async function BoardListPage() {
  const posts = await getPosts();
  console.log({ posts });

  return (
    <div className={styles.root}>
      <div className={styles.hotPost}>
        <h2>인기 게시글</h2>
        <div className={styles.hotPostItemBox}>
          {/* <BoardItem id={dummy.id} /> */}
        </div>
      </div>

      <div className={styles.newPost}>
        <div className={styles.topBox}>
          <h2>최근 게시글</h2>
          <Link href="/board/write" className={styles.goWrite}>
            게시글 작성 &gt;
          </Link>
        </div>

        <div className={styles.newPostBox}>
          {posts.map((post) => {
            return (
              <BoardNewItem
                key={post.id}
                id={post.id}
                title={post.title}
                content={post.content}
                authorName={post.authorName}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
