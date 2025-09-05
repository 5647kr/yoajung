import { memo, useEffect } from "react";
import styled from "styled-components";
import heroImg from "../assets/img/heroImg.jpg";
import title from "../assets/img/title.png";
import subTitle from "../assets/img/subTitle.png";
import appLink from "../assets/img/appStore.png";
import searchStore from "../assets/img/storeSearch.png";
import yogurt1 from "../assets/img/yogurt1.png";
import logo from "../assets/img/logo.png";
import interview1 from "../assets/img/interview1.jpg";
import logowhite from "../assets/img/logowhite.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { mainDb } from "../slices/MainSlice";

const MainPage = memo(() => {
  const { data } = useSelector((state) => state.MainSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mainDb());
  }, []);

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
      <InterviewSection>
        <InterviewTitleWrap>
          <img src={logowhite} alt="요아정 로고" />
          <h2>
            GLOBAL <br />
            YOAJUNG
          </h2>
          <p>
            글로벌로 나아가는 <br />
            요아정 이야기
          </p>
        </InterviewTitleWrap>
        <InterviewImgWrap>
          <img src={interview1} alt="요아정 인터뷰" />
        </InterviewImgWrap>
        <InterviewContentWrap>
          <ol>
            <li>
              <h2>01</h2>
              <p>
                요아정은 하와이 최대 쇼핑몰
                <strong>
                  <br /> 알라모아나를 시작으로 해외
                  <br /> 진출의 첫 발을 내디뎠습니다.
                </strong>
              </p>
            </li>
            <li>
              <h2>02</h2>
              <p>
                현재 미국, 홍콩, 중국, <br />
                일본, 호주, 싱가포르 <br />
                <strong>
                  해외 6개국으로 사업을 확장하며
                  <br /> 글로벌 디저트 브랜드로
                  <br /> 성장하고 있습니다.
                </strong>
              </p>
            </li>
          </ol>
        </InterviewContentWrap>
        <InterviewBtnWrap>
          <button>〈</button>
          <button>〉</button>
        </InterviewBtnWrap>
      </InterviewSection>

      <CommunitySection>
        <div>
          <h2>COMMUNITY</h2>
          <p>
            요아정의 다양한 소식과
            <br />
            이벤트를 확인해보세요!
          </p>
        </div>
        <CommunityList>
          <ul>
            <li>공지사항1</li>
            <li>공지사항2</li>
            <li>공지사항3</li>
            <li>공지사항4</li>
            <li>공지사항5</li>
            <li>공지사항6</li>
            <li>공지사항7</li>
            <li>공지사항8</li>
          </ul>
          <a href="#">자세히 보기</a>
        </CommunityList>
      </CommunitySection>
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
    transition: transform 0.5s ease;
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
  grid-column: 1 / -1;
  display: flex;
  position: relative;
`;

const InterviewTitleWrap = styled.div`
  width: calc(100% / 4);
  background-color: #0074bc;
  color: var(--white-color);
  padding: 6rem 2rem;
  text-align: right;
  img {
    width: 3vw;
    vertical-align: top;
  }
  h2 {
    margin-block: 2vw;
    font-size: 3vw;
    font-weight: bolder;
  }
  p {
    font-size: 1vw;
    line-height: 1.6vw;
  }
`;

const InterviewImgWrap = styled.div`
  width: 50%;
  img {
    width: 100%;
    vertical-align: top;
  }
`;

const InterviewContentWrap = styled.div`
  background-color: #e5f4ff;
  width: calc(100% / 4);
  padding: 6rem 2rem;
  ol {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  li {
    flex-grow: 1;
    height: 50%;
  }
  h2 {
    font-size: 1.8vw;
    font-weight: bolder;
    color: #0074bc;
    padding-bottom: 1rem;
    position: relative;
  }
  h2::after {
    content: "";
    width: 2rem;
    height: 2px;
    display: block;
    background-color: #0074bc;
  }
  p {
    font-size: 1.4vw;
  }
  strong {
    font-weight: bolder;
  }
`;

const InterviewBtnWrap = styled.div`
  box-shadow: inset 0 0 10px red;
  position: absolute;
  bottom: 0;
  right: 26%;
  button {
    background-color: #fff;
    border: none;
    color: #0074bc;
    font-weight: bolder;
    cursor: pointer;
    font-size: 2vw;
    padding: 0.5rem 1.5rem;
    aspect-ratio: 1 / 1;
  }
  button:first-child {
    border-right: 1px solid #eee;
  }
`;

const CommunitySection = styled.section`
  padding-block: 20%;
  display: flex;
  justify-content: space-between;
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
  p {
    text-align: center;
    margin-top: 3rem;
    font-size: 1.4vw;
  }

  div:last-child {
    margin-top: 4rem;
  }
`;

const CommunityList = styled.div`
  width: 50%;
  ul {
    width: 100%;
    max-width: 100%;
    height: 160px;
    overflow-y: auto;
    border-bottom: 1px solid #ddd;
  }
  li {
    padding: 1rem 2rem;
    border-bottom: 1px solid #ddd;
    font-size: 1.6vw;
  }
  li:last-child {
    border-bottom: none;
  }
  a {
    display: block;
    width: fit-content;
    margin-left: auto;
    margin-top: 2rem;
    text-align: right;
    padding: 1rem 2vw;
    background-color: var(--black-color);
    color: var(--white-color);
    border-radius: 2rem;
    font-size: 1.4vw;
  }
`;
