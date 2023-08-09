// GNB.jsx

import { Link } from "react-router-dom";
import "../../styles/atoms/GNB.css";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../store/slices/userSlice";

const staticServerUrl = process.env.REACT_APP_PATH || "";

function GNB() {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  // 로그아웃 버튼 클릭 시 호출되는 함수
  const handleLogout = () => {
    // 로컬 스토리지에서 토큰 제거
    localStorage.removeItem("token");
    // Redux 상태에서 토큰을 null로 설정하여 로그아웃 상태로 변경
    dispatch(setToken(null));
    alert("정상적으로 로그아웃되었습니다.");
  };

  return (
    <header className="header">
      <div className="contents">
        {/* 홈 페이지로 이동하는 로고 이미지 */}
        <Link to={staticServerUrl + "/"}>
          <img
            src={staticServerUrl + "/images/logoKakao.png"}
            alt="logoKakao.png"
            height={30}
          />
        </Link>
        <nav>
          <div className="navigation">
            <span>
              {/* 장바구니로 이동하는 링크 */}
              <Link to={staticServerUrl + "/cart"}>
                <img
                  src={staticServerUrl + "/images/cart.png"}
                  alt="cart.png"
                  height={30}
                />
              </Link>
            </span>
            <span className="line">|</span>
            <span>
              {/* 로그인 상태에 따라 다른 UI 표시 */}
              {token ? (
                <>
                  {/* 로그인 상태일 때 사용자 이름과 로그아웃 버튼 */}
                  <span>{token}님</span>
                  <span className="line">|</span>
                  <button
                    onClick={handleLogout}
                    style={{
                      border: "none",
                      background: "none",
                      color: "black",
                      cursor: "pointer",
                    }}
                  >
                    로그아웃
                  </button>
                </>
              ) : (
                <>
                  {/* 로그인 및 회원가입 링크 */}
                  <Link
                    to={staticServerUrl + "/login"}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    로그인
                  </Link>
                  <span className="line">|</span>
                  <Link
                    to={staticServerUrl + "/signup"}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    회원가입
                  </Link>
                </>
              )}
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default GNB;
