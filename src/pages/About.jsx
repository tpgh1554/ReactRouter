import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>여기는 소개 입니다.</h1>
      <p>리액트 라우트를 사용해 봅니다.</p>
      <Link to="/">홈으로 이동</Link>
    </>
  );
};
export default About;
