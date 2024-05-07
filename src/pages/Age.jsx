import { Link, useParams, useNavigate } from "react-router-dom";

const Age = () => {
  const { age } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <h1>전달 받은 나이는 {age} 입니다.</h1>
      <Link to="/about">소개</Link>
      <p
        style={{ textDecoration: "underline" }}
        onClick={() => navigate("/about")}
      >
        소개페이지로 이동
      </p>
      <Link to="/">홈으로 이동</Link>
    </>
  );
};
export default Age;
