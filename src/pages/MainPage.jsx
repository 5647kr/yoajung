import { memo, useEffect } from "react";
import styled from "styled-components";
import heroImg from "../assets/img/heroImg.jpg";
import title from "../assets/img/title.png";
import subTitle from "../assets/img/subTitle.png";
import appLink from "../assets/img/appStore.png";
import searchStore from "../assets/img/storeSearch.png";
import yogurt1 from "../assets/img/yogurt1.png";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { mainDb } from "../slices/MainSlice";

const MainPage = memo(() => {
  const { status, data, loading } = useSelector((state) => state.MainSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mainDb());
  }, []);

  console.log(data);
  return (
    <>
      <HeroSection>
        <TitleWrap>
          <img src={title} alt="EAT FRESH" />
          <img src={subTitle} alt="EAT HEALTHY" />
          <h2>
            언제 어디서나 내맘대로,
            <br />
            프리미엄 디저트 브랜드 '요아정'
          </h2>
        </TitleWrap>
      </HeroSection>
      <AppSection>
        <div>
          <img src={appLink} alt="요아정 앱 바로가기" />
          <Link
            to="https://play.google.com/store/apps/details?id=com.wmpoplus.yoajung&pli=1"
            target="blank"
          >
            앱으로 바로 가기
          </Link>
        </div>
        <div>
          <img src={searchStore} alt="매장 검색하기" />
          <input type="text" placeholder="검색어를 입력하세요" />
        </div>
      </AppSection>
      <MenuSection>
        <div>
          <h2>BEST MENU</h2>
          <MenuBtn>
            <button>요거트아이스크림</button>
            <button>그릭요거트</button>
          </MenuBtn>
        </div>
        <MenuList>
          <li>
            <img src={yogurt1} alt="요거트1" />
            <p>요거트 1</p>
          </li>
          <li>
            <img src={yogurt1} alt="요거트1" />
            <p>요거트 1</p>
          </li>
          <li>
            <img src={yogurt1} alt="요거트1" />
            <p>요거트 1</p>
          </li>
          <li>
            <img src={yogurt1} alt="요거트1" />
            <p>요거트 1</p>
          </li>
        </MenuList>
      </MenuSection>
      <InterviewSection>인터뷰</InterviewSection>
      <CommunitySection>커뮤니티</CommunitySection>
    </>
  );
});

export default MainPage;

const HeroSection = styled.section`
  grid-column: 1 / -1;
  background: url(${heroImg}) no-repeat 100% 100% / cover;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
`;

const TitleWrap = styled.div`
  grid-column: 3 / 11;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-block: 8rem;
  img {
    width: 30vw;
    vertical-align: top;
  }
  h2 {
    margin-top: 2rem;
    font-size: 1.4vw;
  }
`;

const AppSection = styled.section`
  padding: 20% 0 16%;
  display: flex;
  gap: 10%;
  div {
    position: relative;
  }
  img {
    width: 100%;
    vertical-align: top;
  }
  a,
  input {
    position: absolute;
    bottom: 15%;
    left: 10%;
    font-size: 1vw;
    background-color: var(--white-color);
    padding: 1vw 1.5vw;
    border-radius: 2rem;
    border: none;
    font-weight: normal;
  }
`;

const MenuSection = styled.section`
  div {
    display: flex;
    justify-content: space-between;
  }
  h2 {
    font-size: 2.4vw;
    font-weight: bolder;
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

const MenuBtn = styled.div`
  button {
    background-color: transparent;
    border: none;
    font-size: 1vw;
    padding-inline: 3vw;
  }
  button:first-child {
    border-right: 1px solid #eee;
  }
`;

const MenuList = styled.ul`
  margin-block: 10%;
  display: flex;
  justify-content: center;
  gap: 2rem;
  li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
  }
  img {
    width: 10vw;
    transition: transform .5s ease;
  }
  img:hover {
    transform: scale(1.1);
  }
  p {
    font-size: 1.2vw;
  }
`;

const InterviewSection = styled.section`
  box-shadow: inset 0 0 10px green;
  padding-block: 8%;
`;

const CommunitySection = styled.section`
  box-shadow: inset 0 0 10px blue;
  padding-block: 8%;
`;
