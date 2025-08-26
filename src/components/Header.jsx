import React, { memo, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../slices/MenuSlice";
import MenuLink from "./MenuLink";

const Header = memo(() => {
  // 리덕스 스토어에서 상태 변수 꺼내기
  const { status, data, loading } = useSelector((state) => state.MenuSlice);

  // 액션함수를 호출할 수 있는 함수
  const dispatch = useDispatch();

  // 컴포넌트가 마운트될 때 메뉴를 가져오는 액션을 디스패치
  useEffect(() => {
    dispatch(getMenu());
  }, []);

  return (
    <HeaderWrap>
      <LogoWrap>
        <a href="/">
          <img src="/assets/img/yoajungLogo.png" alt="요아정 로고" />
        </a>
      </LogoWrap>
      <MenuList>
        <ul>
          {Array.isArray(data) &&
            data?.map((v) => {
              return (
                <li key={v.id}>
                  <MenuLink to={v.url}>{v.text}</MenuLink>
                </li>
              );
            })}
        </ul>
      </MenuList>
    </HeaderWrap>
  );
});

export default Header;

const HeaderWrap = styled.header`
  width: 100%;
  padding-block: 0.7rem;
  display: flex;
  position: relative;
`;

const LogoWrap = styled.div`
  width: 5%;
  margin-left: 5%;
  img {
    width: 100%;
    vertical-align: top;
    aspect-ratio: 1 / 1;
  }
`

const MenuList = styled.div`
  width: 50%;
  position: absolute;
  left: 35%;
  bottom: 24%;
  & ul {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`;
