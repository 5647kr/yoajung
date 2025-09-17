import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getNewsList } from "../../slices/NewsListSlice";
import styled from "styled-components";
import { Section } from "../../components/Section";
import { ArrowLeft } from "lucide-react";

const NewsItem = memo(() => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.NewsListSlice);

  useEffect(() => {
    dispatch(getNewsList());
  }, []);

  if (!data || !Array.isArray(data)) {
    return null;
  }

  const handleBack = () => {
    navigate(-1);
  };

  const news = data.find((item) => item.id === params.id);
  console.log(news.imgUrl);

  return (
    <Section>
      <NewsDetailTitle>
        <button onClick={handleBack}>
          <ArrowLeft size={24} />
        </button>
        {news && <h2>{news.title}</h2>}
        {news && <p>{news.date}</p>}
      </NewsDetailTitle>
      <NewsContent>
        {news && news.imgUrl ? (
          <>
            <img src={news.imgUrl} alt="" />
          </>
        ) : (
          <>
            <h3>{news.subTitle}</h3>
            <p>{news.content}</p>
          </>
        )}
      </NewsContent>
    </Section>
  );
});

export default NewsItem;

const NewsDetailTitle = styled.div`
  padding-block: 2rem;
  border-bottom: 1px solid #9a9a9a;
  & > button {
    background-color: transparent;
    border: none;
    margin-bottom: 1.2rem;
    cursor: pointer;
  }
  & > h2 {
    font-size: 1.8rem;
    padding-bottom: 6px;
  }
  & > p {
    font-size: 1.5rem;
    color: #9a9a9a;
  }
`;

const NewsContent = styled.div`
  padding-block: 3.2rem;
  & > img {
    width: 100%;
    vertical-align: top;
  }
  & > h3 {
    font-size: 2rem;
    color: #666;
    text-align: center;
    font-weight: 700;
    padding-bottom: 2rem;
  }

  & > p {
    font-size: 1.6rem;
    
  }
`;
