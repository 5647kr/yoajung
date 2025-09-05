import { memo, useState } from "react";
import HeroSection from "../components/HeroSection";
import styled from "styled-components";
import bgImg from "../assets/img/membershipBg.jpg";
import appBg from "../assets/img/appBg.jpg";
import appImg1 from "../assets/img/appImg1.png";
import appImg2 from "../assets/img/appImg2.png";
import appTitle from "../assets/img/appTitle.png";
import appLink1 from "../assets/img/appLink1.png";
import appLink2 from "../assets/img/appLink2.png";
import logo from "../assets/img/logo.png";
import member1 from "../assets/img/memberImg1.png";
import member2 from "../assets/img/memberImg2.png";
import member3 from "../assets/img/memberImg3.png";

const MemberShipPage = memo(() => {
  const [menuState, setMenuState] = useState("event");

  const handleClick = (e) => {
    setMenuState(e.target.value);
  };
  return (
    <>
      <HeroSection bgImg={bgImg}>
        <h2>MEMBERSHIP</h2>
        <p>요아정 맴버십 소개</p>
      </HeroSection>
      <BtnWrap>
        <ul>
          <li>
            <MenuBtn
              value="event"
              onClick={handleClick}
              $active={menuState === "event"}
            >
              요아정 APP 소개
            </MenuBtn>
          </li>
          <li>
            <MenuBtn
              value="faq"
              onClick={handleClick}
              $active={menuState === "faq"}
            >
              맴버십 혜택
            </MenuBtn>
          </li>
          <li>
            <MenuBtn
              value="qna"
              onClick={handleClick}
              $active={menuState === "qna"}
            >
              요아정 오더
            </MenuBtn>
          </li>
        </ul>
      </BtnWrap>
      <AppSection bgImg={appBg}>
        <ImgWrap>
          <img src={appImg1} alt="" />
          <img src={appImg2} alt="" />
        </ImgWrap>
        <ContentWrap>
          <img src={appTitle} alt="앱 소개" />
          <h2>요아정 앱으로 편리하게!</h2>
          <p>
            지금 바로 요아정 APP에서
            <br />
            다양한 이벤트와 멤버십 혜택을 확인하세요!
          </p>
          <div>
            <a
              href="https://apps.apple.com/kr/app/%EC%9A%94%EA%B1%B0%ED%8A%B8%EC%95%84%EC%9D%B4%EC%8A%A4%ED%81%AC%EB%A6%BC%EC%9D%98%EC%A0%95%EC%84%9D/id6450559213"
              target="blank"
            >
              <img src={appLink1} alt="" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.wmpoplus.yoajung"
              target="blank"
            >
              <img src={appLink2} alt="" />
            </a>
          </div>
        </ContentWrap>
      </AppSection>
      <MemberShipSection>
        <h2>
          YOAJUNG <span>MEMBERSHIP</span>
        </h2>
        <p>요아정만의 멤버십 혜택</p>
        <MemberLevelWrap>
          <MemberContentWrap>
            <ul>
              <li>
                <h2>
                  언제 어디서나 <br />
                  편하게 주문
                </h2>
                <p>
                  가벼운 매장과 메뉴 추천으로
                  <br />
                  빠르고 쉽게 주문 가능
                </p>
              </li>
              <li>
                <h2>
                  언제 어디서나 <br />
                  편하게 주문
                </h2>
                <p>
                  가벼운 매장과 메뉴 추천으로
                  <br />
                  빠르고 쉽게 주문 가능
                </p>
              </li>
              <li>
                <h2>
                  언제 어디서나 <br />
                  편하게 주문
                </h2>
                <p>
                  가벼운 매장과 메뉴 추천으로
                  <br />
                  빠르고 쉽게 주문 가능
                </p>
              </li>
            </ul>
          </MemberContentWrap>
        </MemberLevelWrap>
      </MemberShipSection>
    </>
  );
});

const BtnWrap = styled.section`
  grid-column: 1 / -1;
  padding-block: 2rem;
  width: 100%;
  position: sticky;
  z-index: 999;
  top: 0;
  background-color: white;
  ul {
    display: flex;
    justify-content: center;
  }
  li {
    width: 20%;
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

const AppSection = styled(HeroSection)`
  padding-block: 16rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  & > div {
    grid-column: 3 / 11;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ImgWrap = styled.div`
  position: relative;
  background-color: white;
  border-radius: 50%;
  width: 40rem;
  height: 25rem;
  transform: rotate(-30deg);
  img {
    position: absolute;
    width: 60%;
    transform: rotate(30deg);
  }
  img:first-child {
    left: 30px;
    top: -20%;
  }
  img:last-child {
    left: 100px;
    top: 8%;
  }
`;

const ContentWrap = styled.div`
  img {
    width: 30vw;
    vertical-align: top;
  }
  h2 {
    font-size: 3rem;
    padding: 3rem 0 4rem;
  }

  div {
    display: flex;
    gap: 2rem;
    margin-top: 4rem;
  }

  div > a img {
    width: 16rem;
  }
`;

const MemberShipSection = styled.section`
  grid-column: 1 / -1;
  padding-block: 10rem;
  text-align: center;
  position: relative;
  & > h2 {
    font-size: 2.4vw;
    font-weight: bolder;
  }
  & > h2::before {
    content: "";
    width: 2vw;
    height: 2vw;
    display: inline-block;
    margin-right: 1vw;
    background: url(${logo}) no-repeat center / contain;
  }
  span {
    color: #f63f5d;
  }
  p {
    margin-top: 0.5rem;
    font-size: 1.4rem;
  }
`;

const MemberLevelWrap = styled(HeroSection)`
  background-color: #fff5f5;
  margin-top: 30rem;
  position: relative;
`;

const MemberContentWrap = styled.div`
  width: 100%;
  position: absolute;
  top: -50%;
  transform: translateY(-10%);
  ul {
    width: 50%;
    margin: 0 auto;
    display: flex;
    gap: 2rem;
  }
  li {
    width: 100%;
    padding: 14rem 0 10rem;
    background: url(${member1}) no-repeat center / contain;
  }
  li > h2, li > p {
    color: black;
  }

  li > h2 {
    font-size: 1.8rem;
    padding-block: 2rem;
  }
  li > p {
    font-size: 1.2rem;
  }
`;



export default MemberShipPage;
