import styled from 'styled-components';
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG } from './constants/style'

const Footer = styled.footer`
  width: 100%;
  padding: 12px 0px;
  background-color: #35564b;
  text-align: center;
  color: #ffffff;
`



export default function FooterLogo() {
  return (
    <div className="Footer">
      <Footer>Copyright © 2020 Just A Bite All Rights Reserved. 咬一口股份有限公司版權所有</Footer>
    </div>
  );
}
