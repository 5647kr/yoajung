import { memo, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getFooter } from "../slices/FooterSlice";
import { Link } from "react-router-dom";
import Icons from "../assets/icons/css_sprites.png";
import { ArrowUp } from "lucide-react";

const Footer = memo(() => {
  const { data } = useSelector((state) => state.FooterSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFooter());
  }, []);

  return (
    <FooterWrap>
      <div>
        <FooterTitle>
          <Link to={"#"} />
          <button>
            <ArrowUp color="#fff" strokeWidth={2} />
          </button>
        </FooterTitle>
        <FooterNav>
          <ul>
            {data?.nav?.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </FooterNav>
        <FooterInfo>
          <p>
            [인증범위 : 대외서비스(홈페이지, 맥딜리버리, 채용, VOC, 쿠폰앱)
            (심사받지 않은 물리적 인프라 영역 제외)]
            <br />
            [유효기간 : 2024. 08. 07. ~ 2027. 08. 06.]
          </p>
          <h2>
            {data?.company} | 대표이사:{data?.ceo} | 사업자등록번호:
            {data?.regNumber} | 전화주문: {data?.phone}
          </h2>
        </FooterInfo>
        <FooterCopyRight>
          <p>COPYRIGHT © 2019 ALL RIGHTS RESERVED BY McDonald's.</p>
        </FooterCopyRight>
      </div>
    </FooterWrap>
  );
});

export default Footer;

const FooterWrap = styled.footer`
  background-color: var(--black-color);
  & > div {
    max-width: 1440px;
    margin: 0 auto;
    padding-inline: 4rem;
    color: var(--white-color);
  }
  & > div div {
    padding-block: 2rem;
    font-size: 1.6rem;
  }
  & > div div:not(:last-child) {
    border-bottom: 1px solid #555;
  }
  `;

const FooterTitle = styled.div`
  display: flex;
  justify-content: space-between;
  & > a {
    width: 40px;
    height: 40px;
    background: url(${Icons}) -730px -495px;
  }
  & > button {
    background-color: transparent;
    border: none;
    padding-inline: 0.8rem;
    cursor: pointer;
  }
  `;

const FooterNav = styled.div`
  & > ul {
    display: flex;
  }
  li {
    width: 100%;
    font-weight: bold;
    color: var(--white-color);
  }
  li:first-child {
    color: var(--sub-color);
  }
  `;

const FooterInfo = styled.div`
  p {
    padding-left: 7.6rem;
    color: var(--white-color);
  }
  h2 {
    padding-top: 2.4rem;
    font-weight: 600;
    color: var(--white-color);
  }
  `;

const FooterCopyRight = styled.div`
  p {
    font-weight: 300;
    color: var(--white-color);
  }
`