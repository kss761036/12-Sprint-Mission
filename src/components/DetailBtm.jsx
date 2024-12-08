import menuIcon from "./../assets/menu_dot.svg";
import profileIcon from "./../assets/icon_profile.png";
import React, { useEffect, useState } from "react";
import axios from "axios";

const DetailBtm = ({ id }) => {
  const [comment, setComment] = useState([]);
  const [commentMenu, setCommentMenu] = useState(null);
  const [textValue, setTextValue] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleCommentMenu = (id) => {
    setCommentMenu(commentMenu === id ? null : id);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://panda-market-api.vercel.app/products/${id}/comments?limit=10`);
        setComment(response.data.list);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="product_detail_comment">
      <div className="comment_top">
        <div className="tit">문의하기</div>
        <div className="textarea_box">
          <textarea
            className="inp_reset"
            name=""
            id=""
            onChange={handleTextChange}
            value={textValue}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."></textarea>
        </div>
        <button type="button" className="btn_blue sml" disabled={textValue !== "" ? false : true}>
          등록
        </button>
      </div>
      <ul className="comment_list">
        {comment.map((el) => {
          const dateString = el.updatedAt;
          const date = new Date(dateString);
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const day = String(date.getDate()).padStart(2, "0");
          const formattedDate = `${year}.${month}.${day}`;

          return (
            <li key={el.id}>
              <div className="comment_menu">
                <button type="button" className="btn_reset" onClick={() => handleCommentMenu(el.id)}>
                  <img src={menuIcon} alt="" />
                </button>
                {commentMenu === el.id && (
                  <ul>
                    <li>
                      <button type="button" className="btn_reset">
                        수정하기
                      </button>
                    </li>
                    <li>
                      <button type="button" className="btn_reset">
                        삭제하기
                      </button>
                    </li>
                  </ul>
                )}
              </div>
              <div className="text_area">{el.content}</div>
              <div className="name_area">
                <div className="profile">
                  <img src={el.writer.image ? el.writer.image : profileIcon} alt={el.writer.nickname} onError={(e) => (e.target.src = profileIcon)} />
                </div>
                <div className="name">
                  <p>{el.writer.nickname}</p>
                  <div className="date">{formattedDate}</div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DetailBtm;
