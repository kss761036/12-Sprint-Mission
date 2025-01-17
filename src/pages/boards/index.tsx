import fetchBoardList from "@/lib/fetch-board-list";
import { InferGetServerSidePropsType } from "next";
import styles from "@/styles/Board.module.css";
import Link from "next/link";

export const getServerSideProps = async () => {
  const list = await fetchBoardList(1, 3, "like");
  return {
    props: {
      list,
    },
  };
};

export default function Page({
  list,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}. ${month}. ${day}`;
  };

  return (
    <>
      <div className="common_title">베스트 게시글</div>
      <ul className={styles.board_best}>
        {list.length === 0 ? (
          <p>데이터가 없습니다.</p>
        ) : (
          list.map((el) => (
            <li key={el.id}>
              <Link href="">
                <div className={styles.best}>
                  <img src="/assets/img/icon_best.svg" alt="베스트" />
                  Best
                </div>
                <div className={styles.content}>
                  <h4>{el.title}</h4>
                  {el.image ? (
                    <figure>
                      <img src={el.image as string} alt={el.title} />
                    </figure>
                  ) : null}
                </div>
                <div className={styles.description}>
                  <h4>{el.writer.nickname}</h4>
                  <div className={styles.wish}>
                    <img src="/assets/img/icon_wish.svg" alt="찜" />
                    <span>{el.likeCount}</span>
                  </div>
                  <div className={styles.date}>{formatDate(el.createdAt)}</div>
                </div>
              </Link>
            </li>
          ))
        )}
      </ul>
      <div className="common_title">게시글</div>
    </>
  );
}
