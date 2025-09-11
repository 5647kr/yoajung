import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { eventList } from "../slices/EventSlice";
import styled from "styled-components";

const CommunityDetailPage = memo(() => {
  const params = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.EventSlice);

  useEffect(() => {
    dispatch(eventList());
  }, []);

  const post = data.find((db) => db.id === params.id);

  console.log(post);

  console.log(params);

  return (
    <DetailSection>
      <h2>이벤트</h2>
      <p>요아정(요거트 아이스크림의 정석)의 이벤트입니다.</p>
      <h3>{post.title}</h3>
      <img src={post.img} alt="" />
      <pre>
        {post.content}
      </pre>
    </DetailSection>
  );
});

export default CommunityDetailPage;

const DetailSection = styled.section`
  padding-block: 4rem;
  h2 {
    font-size: 3rem;
    font-weight: bolder;
  }
  & > p {
    font-size: 1.2rem;
    color: #aaa;
    margin-top: 2rem;
    padding-bottom: 4rem;
    border-bottom: 3px solid #000;
  }
  h3 {
    font-size: 1.8rem;
    font-weight: bolder;
    border-bottom: 1px solid #000;
    padding-block: 1rem;
  }
  img {
    width: 50%;
    vertical-align: top;
    margin-bottom: 4rem;
  }
  pre {
    font-size: 1.4rem;
  }
`;
