import styled from "styled-components";

const HeroSection = ({ className, children, bgImg }) => {
  return (
    <SectionWrap className={className} $bgImg={bgImg}>
      <TitleWrap>{children}</TitleWrap>
    </SectionWrap>
  );
};

const SectionWrap = styled.section`
  grid-column: 1 / -1;
  background: ${({ $bgImg }) =>
    `url(${$bgImg}) no-repeat center center / cover`};
  position: relative;
  min-height: 24rem;
`;

const TitleWrap = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    font-size: 3vw;
    font-weight: bolder;
    color: white;
  }
  p {
    font-size: 1.8rem;
    color: white;
    font-weight: bold;
  }
`;

export default HeroSection;
