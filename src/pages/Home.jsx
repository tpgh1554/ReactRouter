import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>여기가 홈 입니다.</h1>
      <p>가장 먼저 보이는 페이지 입니다.</p>
      <Link to="/about">소개 페이지로 이동</Link>
      <p>
        <Link to="/Profile/frontend">Frontend Profile</Link>
      </p>
      <p>
        <Link to="/Profile/backend">Backend Profile</Link>
      </p>
      <p>
        <Link to="/Profile/dba">DBA Profile</Link>
      </p>
      <p>
        <Link to="/Age/10">Age</Link>
      </p>
    </>
  );
};
export default Home;
