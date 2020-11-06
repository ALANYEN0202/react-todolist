import styled from "styled-components";
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG } from "./constants/style";
import Logo from "./Logo";

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 100px;
  background-color: #e8efee;

  ${MEDIA_QUERY_MD} {
    flex-direction: column-reverse;
    padding: 0px 20px 10px;
  }
`;
const FooterInfo = styled.div`
  margin-top: 44px;
  margin-bottom: 39px;

  ${MEDIA_QUERY_MD} {
    margin: 0px;
  }
`;
const Info = styled.div`
  font-size: 14px;
  & + & {
    margin-top: 16px;
  }
`;
const FooterLink = styled.div`
  text-align: center;
  margin-top: 35px;
  ${MEDIA_QUERY_MD} {
    margin: 0px;
  }
`;
const LinkCorner = styled.div``;
const Link = styled.span`
  font-size: 14px;
  text-decoration: none;
  color: black;
`;

export default function FooterList() {
  return (
    <div className="FooterList">
      <FooterWrapper>
        <FooterInfo>
          <Info>餐館地址: 天上地下天堂路三分之一里六段520號</Info>
          <Info>訂位專線：02-1314-5566</Info>
          <Info>
            營業時間：週一〜週五 09:00~18:00 /
            週六、週日、國定假日（含連假）休息
          </Info>
          <Info>email：service@justabite.com.tw</Info>
        </FooterInfo>
        <FooterLink>
          <Logo />
          <LinkCorner>
            <Link as="a" href="/facebook">
              {" "}
              Facebook/{" "}
            </Link>
            <Link as="a" href="/instagram">
              {" "}
              Instagram/
            </Link>
            <Link as="a" href="/youtube">
              Youtube
            </Link>
          </LinkCorner>
        </FooterLink>
      </FooterWrapper>
    </div>
  );
}
