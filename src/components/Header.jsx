import logo from "./../assets/logo.svg";
import mypage from "./../assets/mypage_btn.svg";
import "./Header.css";

const Header = () => {
    return(
        <div className="header">
            <div className="inner">
                <div className="logo">
                    <a href="">
                        <img src={logo} alt="판다마켓 로고" />
                    </a>
                </div>
                <nav className="menu">
                    <ul className="menu_list">
                        <li>
                            <a href="">자유게시판</a>
                        </li>
                        <li className="active">
                            <a href="">중고마켓</a>
                        </li>
                    </ul>
                </nav>
                <div className="mypage">
                    <a href="">
                        <img src={mypage} alt="마이페이지" />
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Header;
