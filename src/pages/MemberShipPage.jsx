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
import level1 from "../assets/img/level1.png";
import level2 from "../assets/img/level2.png";
import level3 from "../assets/img/level3.png";
import level4 from "../assets/img/level4.png";
import orderTitle1 from "../assets/img/orderTitle1.png";
import orderTitle2 from "../assets/img/orderTitle2.png";
import orderPhone from "../assets/img/orderPhone.png";
import list1 from "../assets/img/list1.png";
import list2 from "../assets/img/list2.png";
import list3 from "../assets/img/list3.png";

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
          <CardList>
            <li>
              <img src={member1} alt="맴버십 이미지1" />
              <div>
                <h3>
                  언제 어디서나
                  <br />
                  편하게 주문
                </h3>
                <p>
                  가벼운 매장과 메뉴 추천으로
                  <br />
                  빠르고 쉽게 주문 가능
                </p>
              </div>
            </li>
            <li>
              <img src={member2} alt="맴버십 이미지2" />
              <div>
                <h3>
                  요아정 앱에서만!
                  <br />
                  회원 전용 이벤트
                </h3>
                <p>
                  프리퀀시 등 다양한 이벤트에
                  <br />
                  참여할 수 있습니다.
                </p>
              </div>
            </li>
            <li>
              <img src={member3} alt="맴버십 이미지3" />
              <div>
                <h3>
                  주문할 수록 커지는
                  <br />
                  멤버십 혜택!
                </h3>
                <p>
                  4단계 등급별
                  <br />
                  쿠폰과 적립금 혜택을 누리세요.
                </p>
              </div>
            </li>
          </CardList>
          <MemberLevelContent>
            <div>
              <h3>MEMBERSHIP LEVEL</h3>
              <p>맴버십 단계</p>
              <ul>
                <li>
                  <img src={level1} alt="level1" />
                </li>
                <li>
                  <img src={level2} alt="level2" />
                </li>
                <li>
                  <img src={level3} alt="level3" />
                </li>
                <li>
                  <img src={level4} alt="level4" />
                </li>
              </ul>
            </div>
          </MemberLevelContent>
        </MemberLevelWrap>
      </MemberShipSection>
      <MemberOrderSection>
        <OrderTitle>
          <img src={orderTitle1} alt="yoajung" />
          <img src={orderTitle2} alt="order" />
          <h3>요아정 오더로 더욱 간편하게!</h3>
          <p>
            기다리지 말고 요아정 앱 오더로
            <br />
            빠르고 쉽게 요아정을 만나보세요!
          </p>
          <ul>
            <li>#간편주문</li>
            <li>#빠른 결제</li>
            <li>#바로포장</li>
          </ul>
        </OrderTitle>
        <OrderList>
          <img src={orderPhone} alt="폰 이미지" />
          <ul>
            <li>
              <img src={list1} alt="" />
            </li>
            <li>
              <img src={list2} alt="" />
            </li>
            <li>
              <img src={list3} alt="" />
            </li>
          </ul>
        </OrderList>
      </MemberOrderSection>
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
  padding-top: 10rem;
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

const MemberLevelWrap = styled.div`
  box-shadow: inset 0 0 10px red;
  margin-top: 20rem;
  background-color: #fef2f0;
  position: relative;
`;

const CardList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 3rem;
  position: absolute;
  top: -10rem;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  li {
    width: 100%;
    position: relative;
  }
  img {
    width: 100%;
    vertical-align: top;
  }
  div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin-top: 3rem;
    width: 100%;
  }
  h3 {
    font-size: 1.6rem;
    font-weight: bolder;
  }
  p {
    margin-top: 2rem;
    font-size: 1.4rem;
  }
`;

const MemberLevelContent = styled.div`
  background-color: #fff4f4;
  padding: 26rem 0 10rem;
  & > div {
    background-color: black;
    width: 100rem;
    border-radius: 5rem;
    margin: 0 auto;
    padding: 6rem;
  }
  h3,
  p {
    color: white;
  }
  h3 {
    font-size: 3rem;
    font-weight: bolder;
  }
  p {
    font-size: 1.6rem;
    margin: 2rem 0 6rem;
  }

  ul {
    display: flex;
    gap: 2rem;
    margin-top: 8rem;
    li {
      width: 100%;
    }
    img {
      width: 100%;
    }
  }
`;

const MemberOrderSection = styled.section`
  grid-column: 1 / -1;
  background-color: #ffe6e9;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding-block: 20rem 10rem;
`;

const OrderTitle = styled.div`
  grid-column: 3 / 7;
  img {
    width: 45%;
  }
  h3 {
    font-size: 3rem;
    margin-top: 4rem;
    font-weight: bolder;
  }
  p {
    font-size: 1.6rem;
    margin: 4rem 0 8rem;
  }
  ul {
    display: flex;
    gap: 2rem;
  }
  li {
    background-color: #000;
    border-radius: 50px;
    padding: 1rem 2rem;
    color: #fff;
    font-size: 1.4rem;
  }
`;

const OrderList = styled.div`
  grid-column: 8 / -1;
  margin-top: -10rem;
  position: relative;
  & > img {
    width: 50%;
  }
  ul {
    position: absolute;
    top: 50%;
    left: 18%;
    transform: translateY(-40%);
    display: flex;
    gap: 2rem;
    overflow-x: auto;
  }
  li {
    width: 100%;
  }
  li > img {
    width: 100%;
  }
`;

export default MemberShipPage;
