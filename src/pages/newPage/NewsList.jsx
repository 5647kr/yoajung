import { memo, useEffect } from "react";
import styled from "styled-components";
import { Section } from "../../components/Section";
import { Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getNewsList } from "../../slices/NewsListSlice";
import { Link } from "react-router-dom";

const NewsList = memo(() => {
  const { data } = useSelector((state) => state.NewsListSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsList());
  }, []);

  // 페이지네이션

  console.log(data);

  return (
    <Section>
      <NewsTitle>
        <h1>What's New</h1>
        <h2>공지사항</h2>
      </NewsTitle>
      <NewsInfo>
        <p>총 3건</p>
        <form>
          <input type="text" placeholder="검색어를 입력해주세요." />
          <button>
            <Search />
          </button>
        </form>
      </NewsInfo>
      <hr />
      <NewsListItem>
        {data && data.length > 0 && data.map((item) => (
          <li key={item.id}>
            <Link to={`/news/list/${item.id}`}>
              <h3>{item.title}</h3>
              <p>{item.date}</p>
            </Link>
          </li>
        ))}
      </NewsListItem>
    </Section>
  );
});

export default NewsList;

const NewsTitle = styled.div`
  padding-block: 3.2rem;
  h1,
  h2 {
    font-weight: 800;
  }
  & > h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  & > h2 {
    font-size: 3.6rem;
  }
`;

const NewsInfo = styled.div`
  padding: 1.2rem;
  border-radius: 1rem;
  background-color: var(--bg-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;
  & > p {
    font-size: 1.6rem;
    font-weight: 700;
  }
  & > form {
    width: 400px;
    height: 4.8rem;
    position: relative;
  }
  form > input {
    border: none;
    width: 100%;
    height: 100%;
    font-size: 1.6rem;
    padding: 0 4rem 0 2rem;
    border-radius: 1rem;
    background-color: var(--white-color);
    border: 1px solid var(--shadow-color);
  }
  form > input:focus {
    outline: none;
  }
  form > button {
    background-color: transparent;
    border: none;
    width: 2.4rem;
    height: 2.4rem;
    position: absolute;
    top: 50%;
    right: 1.2rem;
    transform: translateY(-50%);
  }
`;

const NewsListItem = styled.ul`
  & > li {
    padding: 2rem;
    border-bottom: 1px solid var(--shadow-color);
  }
  & > li > a > h3 {
    font-size: 1.8rem;
  }
  & > li > a > p {
    font-size: 1.6rem;
    color: #9a9a9a;
    margin-block: 1rem;
  }
`;
