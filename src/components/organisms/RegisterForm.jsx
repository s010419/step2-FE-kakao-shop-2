import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import { register } from "../../services/user.js";
import { useNavigate } from "react-router-dom";

const staticServerUrl = process.env.REACT_APP_PATH || "";

const RegisterForm = () => {
  const navigate = useNavigate();

  const { value, handleOnChange } = useInput({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const registerReq = () => {
    register({
      email: value.email,
      password: value.password,
      username: value.username,
    })
      // 응답 데이터를 이용하여 회원가입 성공 여부를 확인하고, 처리
      .then((res) => {
        alert("회원가입 성공!");
        // 회원가입 성공 시 '/' 경로로 이동
        navigate(staticServerUrl + "/");
      })
      // 에러 났을 시
      .catch((error) => {
        // 에러 처리
        alert("회원가입 요청에 실패했습니다. 다시 시도해주세요.");
      });
  };

  return (
    <Container>
      <InputGroup
        id="username"
        type="text"
        name="username"
        placeholder="사용자 이름을 입력해주세요"
        label="이름"
        value={value.username}
        onChange={handleOnChange}
      />
      <InputGroup
        id="email"
        type="email"
        name="email"
        placeholder="이메일(아이디)를 입력해주세요"
        label="이메일"
        value={value.email}
        onChange={handleOnChange}
      />
      <InputGroup
        id="password"
        type="password"
        name="password"
        placeholder="********"
        label="비밀번호"
        value={value.password}
        onChange={handleOnChange}
      />
      <InputGroup
        id="passwordConfirm"
        type="password"
        name="passwordConfirm"
        placeholder="********"
        label="비밀번호 확인"
        value={value.passwordConfirm}
        onChange={handleOnChange}
      />
      <Button
        onClick={() => {
          registerReq();
        }}
      >
        회원가입
      </Button>
    </Container>
  );
};

export default RegisterForm;
