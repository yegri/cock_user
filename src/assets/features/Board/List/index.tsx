import BoardItem from "@/assets/components/Items/BoradItem";
import * as styles from "./index.css";
import BoardNewItem from "@/assets/components/Items/BoardNewItem";
import prisma from "@/app/lib/prisma";

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return posts;
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
        <h2>최근 게시글</h2>
        <div className={styles.newPostBox}>
          {posts.map((post) => {
            return (
              <BoardNewItem
                key={post.id}
                id={post.id}
                title={post.title}
                content={post.content}
                authorName={post.author.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
