import SubTitle from "./../components/SubTitle";
import "./AddItemPage.css";
import removeIcon from "./../assets/icon_remove.svg";
import FileInput from "./../components/FileInput";
import { useState } from "react";

const AddItemPage = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    introduce: "",
    price: "",
    imgFile: null,
  });

  const handleChange = (name, value) => {
    if (name === "price") {
      const priceValue = value.replaceAll(",", "");
      const nextPrice = Number(priceValue) || 0;
      setInputValue((prev) => ({
        ...prev,
        [name]: nextPrice.toLocaleString(),
      }));
    } else {
      setInputValue((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <main className="main">
        <div className="inner">
          <div className="tit_box">
            <SubTitle name="상품 등록하기" />
            <div className="add_submit">
              <button type="submit" className="btn_blue sml">
                등록
              </button>
            </div>
          </div>
          <div className="add_form">
            <ul className="add_form_list">
              <li>
                <div htmlFor="add_img" className="title">
                  상품이미지
                </div>
                <div className="input_box input_file_box">
                  <FileInput name="imgFile" value={inputValue.imgFile} onChange={handleChange} />
                </div>
              </li>
              <li>
                <label htmlFor="add_name" className="title">
                  상품명
                </label>
                <div className="input_box">
                  <input type="text" id="add_name" name="name" className="inp_reset" value={inputValue.name} onChange={handleInputChange} placeholder="상품명을 입력해주세요" />
                </div>
              </li>
              <li>
                <label htmlFor="add_introduce" className="title">
                  상품 소개
                </label>
                <div className="input_box">
                  <textarea id="add_introduce" name="introduce" className="inp_reset" value={inputValue.introduce} onChange={handleInputChange} placeholder="상품 소개를 입력해주세요"></textarea>
                </div>
              </li>
              <li>
                <label htmlFor="add_price" className="title">
                  판매가격
                </label>
                <div className="input_box">
                  <input type="text" id="add_price" name="price" className="inp_reset" value={inputValue.price} onChange={handleInputChange} placeholder="판매 가격을 입력해주세요" />
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
                    <button type="button" className="btn_reset remove">
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
