import SubTitle from "./../components/SubTitle";
import "./AddItemPage.css";
import removeIcon from "./../assets/icon_remove.svg";

const AddItemPage = () => {
  return (
    <form action="">
      <main className="main">
        <div className="inner">
          <div className="tit_box">
            <SubTitle name="상품 등록하기" />
            <div className="add_submit">
              <button className="btn_blue sml">등록</button>
            </div>
          </div>
          <div className="add_form">
            <ul className="add_form_list">
              <li>
                <label htmlFor="add_img" className="title">
                  상품이미지
                </label>
                <div className="input_box">
                  <input type="file" id="add_img" />
                </div>
              </li>
              <li>
                <label htmlFor="add_name" className="title">
                  상품명
                </label>
                <div className="input_box">
                  <input type="text" id="add_name" className="inp_reset" placeholder="상품명을 입력해주세요" />
                </div>
              </li>
              <li>
                <label htmlFor="add_introduce" className="title">
                  상품 소개
                </label>
                <div className="input_box">
                  <textarea name="" id="add_introduce" className="inp_reset" placeholder="상품 소개를 입력해주세요"></textarea>
                </div>
              </li>
              <li>
                <label htmlFor="add_price" className="title">
                  판매가격
                </label>
                <div className="input_box">
                  <input type="text" id="add_price" className="inp_reset" placeholder="판매 가격을 입력해주세요" />
                </div>
              </li>
              <li>
                <label htmlFor="add_tag" className="title">
                  태그
                </label>
                <div className="input_box">
                  <input type="text" id="add_tag" className="inp_reset" placeholder="태그를 입력해주세요" />
                </div>
                <ul className="tag_list">
                  <li>
                    <span>#티셔츠</span>
                    <button className="btn_reset remove">
                      <img src={removeIcon} alt="티셔츠 삭제하기" />
                    </button>
                  </li>
                  <li>
                    <span>#상의</span>
                    <button className="btn_reset remove">
                      <img src={removeIcon} alt="상의 삭제하기" />
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </form>
  );
};

export default AddItemPage;
