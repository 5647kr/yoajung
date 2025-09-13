import { memo, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../slices/HeaderSlice";
import Icons from "../assets/icons/css_sprites.png";

const Header = memo(() => {
  // 리덕스 스토어에서 상태 변수 꺼내기
  const { data } = useSelector((state) => state.HeaderSlice);

  // 액션함수를 호출할 수 있는 함수
  const dispatch = useDispatch();

  // 컴포넌트가 마운트될 때 메뉴를 가져오는 액션을 디스패치
  useEffect(() => {
    dispatch(getMenu());
  }, []);

  console.log(data);

  return (
    <>
      <HeaderWrap>
        <Link to="/" />
        <div>
          <MenuWrap>
            <ul>
              {data?.map((menu) => (
                <li key={menu.id}>
                  <Link to={menu.url}>{menu.title}</Link>
                  <SubMenu>
                    {menu?.subMenu.map((sub) => (
                      <li key={sub.id}>
                        <Link to={sub.url}>{sub.subTitle}</Link>
                      </li>
                    ))}
                  </SubMenu>
                </li>
              ))}
            </ul>
          </MenuWrap>
          <BtnWrap>
            <Link to={"/store/rent"}>임차문의</Link>
            <button>KR</button>
          </BtnWrap>
        </div>
      </HeaderWrap>
    </>
  );
});

export default Header;

const HeaderWrap = styled.header`
  max-width: 1440px;
  height: 8rem;
  margin: 0 auto;
  padding-inline: 4rem;
  display: flex;
  align-items: center;
  box-shadow: var(--shadow-color);
  & > a {
    width: 64px;
    height: 64px;
    background: url(${Icons}) -730px -411px no-repeat;
  }
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 14rem;
    width: calc(100% - 10rem);
    height: 100%;
    margin-left: 10rem;
  }
`;

const MenuWrap = styled.nav`
  flex-grow: 6;
  height: 100%;

  & > ul {
    height: 100%;
    display: flex;
    &::before {
      content: "";
      width: 100%;
      height: 560px;
      position: absolute;
      left: 0;
      top: 80px;
      background-color: #f6f6f6;
      display: none; //none으로 수정
    }
  }
  & > ul:hover::before {
    display: block;
  }
  & > ul > li {
    position: relative;
    width: 100%;
    height: 100%;
  }
  & > ul > li > a {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.4rem;
    font-weight: 800;
    position: relative;
  }
  & > ul > li:hover {
    background-color: var(--main-color);
  }
  & > ul:hover ul {
    display: block;
  }
`;

const SubMenu = styled.ul`
  display: none; // none으로 수정
  height: 560px;
  padding-top: 4rem;
  & > li {
    padding-block: 2rem;
  }
  & > li > a {
    font-size: 2rem;
    text-align: center;
    padding-bottom: 0.2rem;
  }
  & > li:hover {
    text-decoration: underline;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 100%;
  a {
    font-size: 1.6rem;
    padding: 1rem 2rem;
    border-radius: 2rem;
    background-color: var(--shadow-color);
    font-weight: 700;
  }
  button {
    font-size: 1.6rem;
    padding: 1rem;
    background-color: var(--main-color);
    border-radius: 50%;
    border: none;
    font-weight: 700;
  }
`;
