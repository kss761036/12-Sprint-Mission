import productImg from "./../assets/item.png";
import wishIcon from "./../assets/icon_wish.svg";
import menuIcon from "./../assets/menu_dot.svg";
import backIcon from "./../assets/icon_back.svg";
import "./ProductDetailPage.css";

const ProductDetailPage = () => {
  return (
    <main className="main">
      <div className="inner">
        <div className="product_detaile_wrap">
          <div className="product_detail_item">
            <div className="thum">
              <img src={productImg} alt="" />
            </div>
            <div className="content">
              <div className="tit">아이패드 미니 팔아요</div>
              <div className="price">500,000원</div>
              <div className="info">
                <p>상품 소개</p>
                <div className="desc">
                  액정에 잔기스랑 주변부 스크래치있습니다만 예민하신분아니면 전혀 신경쓰이지않을정도입니다. <br />
                  박스 보관중입니다. <br />
                  메모용과 넷플릭스용으로만쓰던거라 뭘 해보질 않아 기능이나 문제점을 못느꼈네요
                  <br />잘 안써서 싸게넘깁니다! 택배거래안합니다.
                </div>
              </div>
              <div className="info">
                <p>상품 태그</p>
                <ul className="tag">
                  <li>#아이패드미니</li>
                  <li>#애플</li>
                  <li>#가성비</li>
                </ul>
              </div>
              <div className="profile_box">
                <div className="name_area">
                  <div className="profile">
                    <img src={productImg} alt="" />
                  </div>
                  <div className="name">
                    <p>총명한판다</p>
                    <div className="date">2024.01.02</div>
                  </div>
                </div>
                <button className="btn_reset wish_area">
                  <div className="icon">
                    <img src={wishIcon} alt="" />
                  </div>
                  <div className="numb">123</div>
                </button>
              </div>
            </div>
          </div>
          <div className="product_detail_comment">
            <div className="comment_top">
              <div className="tit">문의하기</div>
              <div className="textarea_box">
                <textarea className="inp_reset" name="" id="" placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."></textarea>
              </div>
              <button type="button" className="btn_blue sml" disabled>
                등록
              </button>
            </div>
            <ul className="comment_list">
              <li>
                <div className="comment_menu">
                  <button type="button" className="btn_reset">
                    <img src={menuIcon} alt="" />
                  </button>
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
                </div>
                <div className="text_area">혹시 사용기간이 어떻게 되실까요?</div>
                <div className="name_area">
                  <div className="profile">
                    <img src={productImg} alt="" />
                  </div>
                  <div className="name">
                    <p>총명한판다</p>
                    <div className="date">2024.01.02</div>
                  </div>
                </div>
              </li>
              <li>
                <div className="comment_menu">
                  <button type="button" className="btn_reset">
                    <img src={menuIcon} alt="" />
                  </button>
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
                </div>
                <div className="text_area">혹시 사용기간이 어떻게 되실까요?</div>
                <div className="name_area">
                  <div className="profile">
                    <img src={productImg} alt="" />
                  </div>
                  <div className="name">
                    <p>총명한판다</p>
                    <div className="date">2024.01.02</div>
                  </div>
                </div>
              </li>
              <li>
                <div className="comment_menu">
                  <button type="button" className="btn_reset">
                    <img src={menuIcon} alt="" />
                  </button>
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
                </div>
                <div className="text_area">혹시 사용기간이 어떻게 되실까요?</div>
                <div className="name_area">
                  <div className="profile">
                    <img src={productImg} alt="" />
                  </div>
                  <div className="name">
                    <p>총명한판다</p>
                    <div className="date">2024.01.02</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="detail_btn">
            <button type="button" className="btn_blue lg">
              목록으로 돌아가기 <img src={backIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;
