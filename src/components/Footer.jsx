import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFooter } from "../slices/FooterSlice";
import styled from "styled-components";

const Footer = memo(() => {
  const { status, data, loading } = useSelector((state) => state.FooterSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFooter());
  }, []);

  return (
    <FooterWrap>
      <ImgWrap>
        <img src="/assets/img/yoajungLogo2.png" alt="요아정 푸터 로고" />
      </ImgWrap>
      <ContentWrap>
        <ul>
          <li>
            <span>
              <strong>대표자</strong>: {data?.ceo}
            </span>
          </li>
          <li>
            <span>
              <strong>사업자번호</strong>: {data?.number}
            </span>
          </li>
          <li>
            <span>
              <strong>주소</strong>: {data?.address}
            </span>
          </li>
        </ul>
        <ul>
          <li>
            <span>
              <strong>제휴문의</strong>: {data?.partnership}
            </span>
          </li>
          <li>
            <span>
              <strong>CS문의</strong>: {data?.cs}
            </span>
          </li>
          <li>
            <span>
              <strong>대표전화</strong>: {data?.phone}
            </span>
          </li>
        </ul>
        <p>Copyright ⓒ 요거트아이스크림의정석. all Rights Reserved.</p>
      </ContentWrap>
    </FooterWrap>
  );
});

export default Footer;

const FooterWrap = styled.footer`
  width: 100%;
  height: 30rem;
  padding: 3rem 10rem;
  background-color: #f63f5d;
`;

const ImgWrap = styled.div`
  padding-block: 2rem;
  border-bottom: 1px solid var(--white-color);
  & img {
    width: 7rem;
  }
`;

const ContentWrap = styled.div`
  padding-top: 4rem;
  color: var(--white-color);
  font-size: 1.2rem;
  & ul {
    display: flex;
  }
  & strong {
    font-weight: bold;
  }
  & span {
    margin-right: 1rem;
  }
  & p {
    margin-top: 1rem;
    font-weight: bold;
  }
`;
