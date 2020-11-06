import styled from "styled-components";
import bannerImage from "./public/img/2.jpg";
const Banner = styled.div`
  background: url(${bannerImage}) center/cover no-repeat;
  height: 580px;
  width: 100%;
  position: relative;

  &:after {
    content: "";
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }
`;
const BannerTitle = styled.h2`
  font-size: 60px;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

function BannerList() {
  return (
    <Banner>
      <BannerTitle>咬一口廚房</BannerTitle>
    </Banner>
  );
}

export default BannerList;
