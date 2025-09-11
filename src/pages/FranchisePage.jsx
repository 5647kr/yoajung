import { memo, useState } from "react";
import HeroSection from "../components/HeroSection";
import styled from "styled-components";
import bgImg from "../assets/img/franchiseImg.jpg";
import specialBgImg from "../assets/img/franchiseHeroImg.jpg";
import bannerTitle from "../assets/img/BannerTitle.png";
import bannerImg from "../assets/img/BannerImg.jpg";
import contentLeftImg from "../assets/img/contentLeftImg.png";
import contentRightImg from "../assets/img/contentRightImg.png";
import logo from "../assets/img/logo.png";
import contentImg1 from "../assets/img/contentImg1.png";
import contentImg2 from "../assets/img/contentImg2.png";
import no1 from "../assets/img/no1.png";
import number1 from "../assets/img/number1.png";
import share from "../assets/img/share.png";
import store from "../assets/img/store.png";
import title650 from "../assets/img/650Title.png";
import content1 from "../assets/img/content1.png";
import content2 from "../assets/img/content2.png";
import content3 from "../assets/img/content3.png";
import franchiseList1 from "../assets/img/franchiseList1.png";
import franchiseList2 from "../assets/img/franchiseList2.png";
import franchiseList3 from "../assets/img/franchiseList3.png";
import franchiseList4 from "../assets/img/franchiseList4.png";
import franchiseList5 from "../assets/img/franchiseList5.png";
import franchiseList6 from "../assets/img/franchiseList6.png";
import cost from "../assets/img/cost.png";

const FranchisePage = memo(() => {
  const [menuState, setMenuState] = useState("special");

  const handleClick = (e) => {
    setMenuState(e.target.value);
  };
  return (
    <>
      <HeroSection bgImg={bgImg}>
        <h2>FRANCHISE</h2>
        <p>창업</p>
      </HeroSection>
      <BtnWrap>
        <ul>
          <li>
            <MenuBtn
              value="special"
              onClick={handleClick}
              $active={menuState === "special"}
            >
              스페셜 요아정
            </MenuBtn>
          </li>
          <li>
            <MenuBtn
              value="order"
              onClick={handleClick}
              $active={menuState === "order"}
            >
              창업절차
            </MenuBtn>
          </li>
          <li>
            <MenuBtn
              value="cost"
              onClick={handleClick}
              $active={menuState === "cost"}
            >
              개설비용
            </MenuBtn>
          </li>
          <li>
            <MenuBtn
              value="qna"
              onClick={handleClick}
              $active={menuState === "qna"}
            >
              창업문의
            </MenuBtn>
          </li>
        </ul>
      </BtnWrap>
      <SpecialSection>
        <div>
          <p>프리미엄 디저트의 시작</p>
          <h2>카페 요아정</h2>
          <p>
            요거트 아이스크림을 시작으로 건강하고 신선한 프리미엄 디저트를 통해
            <br /> 배달 플랫폼을 넘어 오프라인 플랫폼까지 점유율을 높여가며
            <br /> 국내는 물론, K-디저트로서 입지를 다져 해외 진출에도 열중을
            다하고 있습니다.
          </p>
        </div>
      </SpecialSection>
      <BannerSection>
        <img src={bannerTitle} alt="" />
        <img src={bannerImg} alt="" />
        <img src={bannerTitle} alt="" />
      </BannerSection>
      <ContentSection>
        <img src={contentLeftImg} alt="" />
        <div>
          <h2>
            요아정의 메뉴는
            <br />
            <span>100% 생과일로 신선함 2배 UP!</span>
          </h2>
          <ul>
            <li>
              <img src={contentImg1} alt="" />
              <div>
                <h3>
                  요아정 <br />
                  요거트 아이스크림
                </h3>
                <p>
                  다양한 토핑과 생과일들을 활용하여
                  <br /> 나만의 조합으로 먹을 수 있는 맛있는
                  <br /> 요거트 아이스크림
                </p>
              </div>
            </li>
            <li>
              <img src={contentImg2} alt="" />
              <div>
                <h3>요아정 그릭 요거트</h3>
                <p>
                  첨가물 없이
                  <br /> 원유와 유산균으로만 만든
                  <br /> 꾸덕하고 진한 그릭요거트
                </p>
              </div>
            </li>
          </ul>
        </div>
        <img src={contentRightImg} alt="" />
      </ContentSection>
      <IntroSection>
        <div>
          <h2>
            성공 소자본 창업의 길 <br />
            <span>검증된 1위, 요아정 창업하세요!</span>
          </h2>
          <ImgWrap>
            <div>
              <img src={title650} alt="" />
              <img src={store} alt="" />
            </div>
            <img src={number1} alt="" />
            <div>
              <img src={no1} alt="" />
              <img src={share} alt="" />
            </div>
          </ImgWrap>
          <ContentWrap>
            <ul>
              <li>
                <img src={content1} alt="content1" />
              </li>
              <li>
                <img src={content2} alt="content2" />
              </li>
              <li>
                <img src={content3} alt="content3" />
              </li>
            </ul>
          </ContentWrap>
        </div>
      </IntroSection>
      <FranchiseListSection>
        <div>
          <p>FRANCHISE</p>
          <h2>창업절차</h2>
        </div>
        <ul>
          <li>
            <img src={franchiseList1} alt="절차1" />
          </li>
          <li>
            <img src={franchiseList2} alt="절차2" />
          </li>
          <li>
            <img src={franchiseList3} alt="절차3" />
          </li>
          <li>
            <img src={franchiseList4} alt="절차4" />
          </li>
          <li>
            <img src={franchiseList5} alt="절차5" />
          </li>
          <li>
            <img src={franchiseList6} alt="절차6" />
          </li>
        </ul>
      </FranchiseListSection>
      <CostSection>
        <h2>개설비용</h2>
        <img src={cost} alt="" />
      </CostSection>
      <FaqSection>
        <h2>창업문의</h2>
        <form>
          <InputWrap>
            <p>고객명</p>
            <div>
              <input type="text" />
            </div>
          </InputWrap>
          <InputWrap>
            <p>연락처</p>
            <div>
              <input type="text" />
            </div>
          </InputWrap>
          <InputWrap>
            <p>창업희망지역</p>
            <div>
              <label htmlFor="city">선택</label>
              <input type="radio" id="city" />
              <label htmlFor="store">선택</label>
              <input type="radio" id="store" />
            </div>
          </InputWrap>
          <InputWrap>
            <p>점포보유유무</p>
            <div>
              <label htmlFor="yes">있음</label>
              <input type="radio" id="yes" />
              <label htmlFor="no">없음</label>
              <input type="radio" id="no" />
            </div>
          </InputWrap>
          <InputWrap>
            <p>상세문의내용</p>
            <div>
              <textarea />
            </div>
          </InputWrap>
          <CheckWrap>
            <input type="checkbox" />
            <label>개인정보수집 및 동의</label>
          </CheckWrap>
          <button>신청하기</button>
        </form>
      </FaqSection>
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

const SpecialSection = styled.section`
  grid-column: 1 / -1;
  background: url(${specialBgImg}) no-repeat center / cover;
  width: 100%;
  padding-block: 10rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  & > div {
    grid-column: 3 / 11;
  }
  h2 {
    font-size: 4rem;
    font-weight: bolder;
    padding-block: 2rem;
  }
  p {
    font-size: 2rem;
    font-weight: bold;
  }
  p:last-child {
    font-size: 1.6rem;
    font-weight: 300;
  }
`;

const BannerSection = styled.section`
  grid-column: 1 / -1;
  img {
    width: 100%;
  }
`;

const ContentSection = styled.section`
  grid-column: 1 / -1;
  background-color: #ffe7e7;
  display: flex;
  justify-content: center;
  gap: 10rem;
  padding: 0 10rem;
  height: 70rem;
  overflow-y: hidden;
  div {
    flex-grow: 1;
  }
  h2 {
    padding-top: 8rem;
    text-align: center;
    font-size: 2.6rem;
  }
  h2 > span {
    font-weight: bolder;
  }
  h2::before {
    content: "";
    width: 2vw;
    height: 2vw;
    display: block;
    margin: 0 auto;
    margin-bottom: 2rem;
    background: url(${logo}) no-repeat center / contain;
  }
  & > img {
    width: 18%;
  }
  ul {
    margin-top: 6rem;
    display: flex;
    gap: 6rem;
  }
  li {
    width: 100%;
    position: relative;
  }
  li > img {
    width: 100%;
  }
  li > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
  }

  h3 {
    font-size: 2rem;
    font-weight: bolder;
    margin-bottom: 2rem;
  }

  li > div > p {
    font-size: 1.6rem;
  }
`;

const IntroSection = styled.section`
  padding-block: 6rem;
  h2 {
    font-size: 2rem;
    text-align: center;
  }

  span {
    font-weight: bolder;
  }
`;

const ImgWrap = styled.div`
  margin-top: 6rem;
  display: flex;
  img {
    width: 100%;
  }
  & > img {
    width: 40%;
  }
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

const ContentWrap = styled.div`
  margin-top: 8rem;
  background-color: #ffe7e7;
  padding: 4rem 8rem;
  border-radius: 30px;
  ul {
    display: flex;
    justify-content: center;
    gap: 4rem;
  }
  li {
    width: 100%;
  }
  li > img {
    width: 50%;
    object-fit: contain;
    display: block;
    margin: 0 auto;
  }
`;

const FranchiseListSection = styled.section`
  padding-block: 6rem;
  & > div p,
  h2 {
    color: #f73c5a;
    font-weight: bolder;
    text-align: center;
  }
  & > div p {
    font-size: 1.6rem;
  }
  & > div h2 {
    font-size: 3rem;
    color: black;
    margin-top: 1rem;
  }
  ul {
    margin-top: 6rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6rem;
    row-gap: 2rem;
  }
  li {
    width: 100%;
  }

  img {
    width: 100%;
  }
`;

const CostSection = styled.section`
  padding-block: 6rem;
  h2 {
    font-size: 3rem;
    color: black;
    margin-bottom: 6rem;
    text-align: center;
    font-weight: bolder;
  }

  img {
    width: 100%;
  }
`;

const FaqSection = styled.section`
  grid-column: 1 / -1;
  padding-block: 6rem;
  background-color: #ffe7e7;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  h2 {
    font-size: 3rem;
    color: black;
    margin-bottom: 6rem;
    text-align: center;
    grid-column: 3 / 11;
    font-weight: bolder;
  }
  form {
    grid-column: 4 / 10;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  form > div ~ div {
    margin-top: 2rem;
  }
  button {
    margin-top: 4rem;
    text-align: center;
    width: 24rem;
    font-size: 2rem;
    background-color: #000;
    color: #fff;
    border-radius: 5rem;
    padding-block: 1.2rem;
    font-weight: bolder;
  }
`;

const InputWrap = styled.div`
width: 100%;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid #eee;
  background-color: #fff;
  display: flex;
  align-items: center;
  & > p {
    padding-inline: 1rem;
    font-size: 2rem;
    letter-spacing: 1rem;
    border-right: 1px solid #ffe7e7;
    width: 30%;
    text-align: center;
  }
  & > div {
    width: 70%;
    padding-left: 2rem;
    display: flex;
    gap: 2rem;
  }
  input,
  textarea {
    border: none;
    width: 100%;
    font-size: 2rem;
  }
  input:focus,
  textarea:focus {
    outline: none;
  }
  textarea {
    resize: none;
    height: 8rem;
  }
  input[type="radio"] {
    display: none;
  }
  label {
    width: 100%;
    padding-block: 1rem;
    text-align: center;
    border-radius: 1rem;
    border: 1px solid #ddd;
    color: #ddd;
    font-size: 1.6rem;
  }
`;

const CheckWrap = styled.div`
  text-align: center;
  margin-top: 2rem;
  label {
    margin-left: 1rem;
    font-size: 1.6rem;
  }
`

export default FranchisePage;
