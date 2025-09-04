import { memo, useState, useEffect } from "react";
import styled from "styled-components";
import heroImg from "../assets/img/heroImg.jpg";
import logo from "../assets/img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { faqList } from "../slices/FaqSlice";
import { eventList } from "../slices/EventSlice";

const CommunityPage = memo(() => {
  const [menuState, setMenuState] = useState("event");
  const dispatch = useDispatch();

  const { status, data, loading } = useSelector((state) => {
    switch (menuState) {
      case "event":
        return state.EventSlice;
      case "faq":
        return state.FaqSlice;
      default:
        return state.EventSlice;
    }
  });

  useEffect(() => {
    switch (menuState) {
      case "event":
        dispatch(eventList());
        break;
      case "faq":
        dispatch(faqList());
        break;
      default:
        dispatch(eventList());
    }
  }, [menuState]);

  console.log(data, status);

  const handleClick = (e) => {
    setMenuState(e.target.value);
  };

  return (
    <>
      <HeroSection>
        <div>
          <h2>COMMUNITY</h2>
          <p>커뮤니티</p>
        </div>
      </HeroSection>
      <BtnWrap>
        <ul>
          <li>
            <MenuBtn
              value="event"
              onClick={handleClick}
              $active={menuState === "event"}
            >
              이벤트
            </MenuBtn>
          </li>
          <li>
            <MenuBtn
              value="faq"
              onClick={handleClick}
              $active={menuState === "faq"}
            >
              FAQ
            </MenuBtn>
          </li>
          <li>
            <MenuBtn
              value="qna"
              onClick={handleClick}
              $active={menuState === "qna"}
            >
              고객의 소리
            </MenuBtn>
          </li>
        </ul>
      </BtnWrap>
      <ContentWrap>
        {menuState === "event" && (
          <EventComponents data={data} loading={loading} />
        )}
        {menuState === "faq" && <FaqComponents data={data} loading={loading} />}
        {menuState === "qna" && <QnaComponents data={data} loading={loading} />}
      </ContentWrap>
    </>
  );
});

export default CommunityPage;

const EventComponents = memo(({ data = [], loading = false }) => {
  if (loading) return <p>로딩중...</p>;

  const items = Array.isArray(data) ? data : [];

  
    // return (
    //   <>
    //     <h2>이벤트</h2>
    //     <EventList>
    //       <li>등록된 이벤트가 없습니다.</li>
    //     </EventList>
    //   </>
    // );

  return (
    <>
      <h2>이벤트</h2>
      <EventList>
        {items && items.length > 0 && items.map((item) => (
          <li key={item.id}>
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </li>
        ))}
      </EventList>
    </>
  );
});

const FaqComponents = memo(({ data = [], loading = false }) => {
  if (loading) return <p>로딩중...</p>;

  const items = Array.isArray(data) ? data : [];

  if (items.length === 0)
    return (
      <>
        <h2>FAQ</h2>
        <FaqList>
          <li>등록된 FAQ가 없습니다.</li>
        </FaqList>
      </>
    );

  return (
    <>
      <h2>FAQ</h2>
      <FaqList>
        {items.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </li>
        ))}
      </FaqList>
    </>
  );
});

const QnaComponents = memo(() => {
  return (
    <>
      <h2>고객의 소리</h2>
    </>
  );
});

const HeroSection = styled.section`
  grid-column: 1 / -1;
  background: url(${heroImg}) no-repeat 100% 100% / cover;
  position: relative;
  height: 20rem;
  div {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
  }
  h2 {
    text-align: center;
    font-size: 2vw;
    font-weight: bolder;
  }
  p {
    font-size: 1.4vw;
  }
`;

const BtnWrap = styled.section`
  padding-block: 2rem;
  width: 100%;
  ul {
    display: flex;
    justify-content: center;
  }
  li {
    width: 10%;
  }
  li ~ li {
    border-left: 1px solid #ddd;
  }
`;

const MenuBtn = styled.button`
  background-color: transparent;
  border: none;
  text-align: center;
  width: 100%;
  cursor: pointer;
  color: ${(props) => (props.$active ? "#f63f5d" : "black")};
  font-weight: ${(props) => (props.$active ? "bolder" : "normal")};
`;

const ContentWrap = styled.section`
  margin-top: 10rem;
  h2 {
    font-size: 2.4vw;
    font-weight: bolder;
    text-align: center;
  }
  h2::before {
    content: "";
    width: 2vw;
    height: 2vw;
    display: inline-block;
    margin-right: 1vw;
    background: url(${logo}) no-repeat center / contain;
  }
`;

const EventList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding-block: 3rem;
  li {
    border: 1px solid #ddd;
  }
  img {
    width: 100%;
  }
  p {
    font-size: 1.4rem;
    padding: 2rem;
    word-break: keep-all;
    color: #aaa;
  }
`;

const FaqList = styled.ul`
  padding-block: 3rem;

  li {
    border: 1px solid #ddd;
    padding: 4rem;
    border-radius: 20px;
  }
  li ~ li {
    margin-top: 3em;
  }
  h3 {
    font-size: 1.2vw;
    font-weight: bolder;
    color: #f63f5d;
  }
  p {
    padding-left: 2rem;
    margin-top: 1rem;
    font-size: 1.2vw;
  }
`;
