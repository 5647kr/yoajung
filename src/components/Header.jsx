import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../slices/HeaderSlice";
import Icons from "../assets/icons/css_sprites.png";

const Header = memo(() => {
  // 리덕스 스토어에서 상태 변수 꺼내기
  const { data } = useSelector((state) => state.HeaderSlice);
  const [isHover, setIsHover] = useState(false);
  const [menuClicked, setMenuClicked] = useState("");
  const [subMenu, setSubMenu] = useState("");

  // 액션함수를 호출할 수 있는 함수
  const dispatch = useDispatch();

  // 컴포넌트가 마운트될 때 메뉴를 가져오는 액션을 디스패치
  useEffect(() => {
    dispatch(getMenu());
  }, []);

  const handleMenu = (title) => {
    setMenuClicked(title);
  };

  const resetMenu = () => {
    setMenuClicked("");
  };

  const handleSubMenu = (id) => {
    console.log(id);
    setSubMenu(id);
  };

  return (
    <>
      <HeaderWrap>
        <Link to="/" onClick={resetMenu} />
        <div>
          <MenuWrap $isHover={isHover}>
            <ul>
              {data?.map((menu) => (
                <MenuItem
                  key={menu.id}
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
                  $isActive={menuClicked === menu.title}
                >
                  <Link to={menu.url} onClick={(e) => handleMenu(menu.title)}>
                    {menu.title}
                  </Link>
                  <SubMenu $isHover={isHover}>
                    {menu?.subMenu.map((sub) => (
                      <SubMenuItem key={sub.id} $isActive={subMenu === sub.id}>
                        <Link
                          to={sub.url}
                          onClick={() => {
                            handleMenu(menu.title);
                            handleSubMenu(sub.id);
                          }}
                        >
                          {sub.subTitle}
                        </Link>
                      </SubMenuItem>
                    ))}
                  </SubMenu>
                </MenuItem>
              ))}
            </ul>
          </MenuWrap>
          <BtnWrap>
            <Link to={"/store/rent"} onClick={resetMenu}>
              임차문의
            </Link>
            <span>KR</span>
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
      width: 100vw;
      height: 560px;
      position: absolute;
      left: 0;
      top: 80px;
      background-color: #f6f6f6;
      display: ${({ $isHover }) => ($isHover ? "block" : "none")};
      z-index: 5;
    }
  }
`;

const MenuItem = styled.li`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 10;
  &:hover {
    background-color: var(--main-color);
  }
  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 4px;
    display: ${({ $isActive }) => ($isActive ? "block" : "none")};
    background-color: var(--main-color);
  }
  & > a {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.4rem;
    font-weight: 800;
  }
`;

const SubMenu = styled.ul`
  display: ${({ $isHover }) => ($isHover ? "block" : "none")};
  height: 560px;
  padding-top: 4rem;
  z-index: 20;
`;

const SubMenuItem = styled.li`
  padding-block: 2rem;
  & > a {
    font-size: 2rem;
    text-align: center;
    padding-bottom: 0.2rem;
    font-weight: ${({ $isActive }) => ($isActive ? "700" : "500")};
  }
  &:hover {
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
  span {
    font-size: 1.6rem;
    padding: 1rem;
    background-color: var(--main-color);
    border-radius: 50%;
    border: none;
    font-weight: 700;
  }
`;
