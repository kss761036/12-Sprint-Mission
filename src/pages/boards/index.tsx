import fetchBoardList from "@/lib/fetch-board-list";
import { InferGetServerSidePropsType } from "next";
import styles from "./board.module.css";
import BoardBestList from "@/components/board-best-list";
import BoardList from "@/components/board-list";
import Link from "next/link";
import { useState } from "react";

export const getServerSideProps = async () => {
  const list = await fetchBoardList(1, 3, "like");
  const commonList = await fetchBoardList(1, 10, "recent");
  return {
    props: {
      list,
      commonList,
    },
  };
};

export default function Page({
  list,
  commonList,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [sortState, setSortState] = useState(false);
  const [order, setOrder] = useState("recent");

  const onSortToggle = () => {
    setSortState(!sortState);
  };

  const sortChange = (state: string) => {
    if (state !== order) {
      setOrder(state);
    }
    setSortState(false);
  };

  return (
    <>
      <div className="common_title">베스트 게시글</div>
      <ul className={styles.board_best}>
        {list.length === 0 ? (
          <p>데이터가 없습니다.</p>
        ) : (
          list.map((el) => <BoardBestList key={el.id} {...el} />)
        )}
      </ul>
      <div className={styles.boart_common_wrap}>
        <div className={styles.boart_common_title}>
          <div className="common_title">게시글</div>
          <Link className="btn" href="">
            글쓰기
          </Link>
        </div>

        <div className={styles.board_common_sort}>
          <div className={styles.sch_box}>
            <img src="/assets/img/icon_search.svg" alt="검색" />
            <input type="text" placeholder="검색할 상품을 입력해주세요" />
          </div>
          <div className={styles.select_box} onClick={onSortToggle}>
            <p>{order === "recent" ? "최신순" : "좋아요순"}</p>
            {sortState && (
              <ul>
                <li
                  onClick={() => {
                    sortChange("recent");
                  }}>
                  최신순
                </li>
                <li
                  onClick={() => {
                    sortChange("like");
                  }}>
                  좋아요순
                </li>
              </ul>
            )}
          </div>
        </div>

        <ul className={styles.board_common}>
          {commonList.length === 0 ? (
            <p>데이터가 없습니다.</p>
          ) : (
            commonList.map((el) => <BoardList key={el.id} {...el} />)
          )}
        </ul>
      </div>
    </>
  );
}
