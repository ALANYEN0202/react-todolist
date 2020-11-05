import styled from 'styled-components';
import Navbar from './Navbar'
import Logo from './Logo'
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG } from './constants/style'

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;

  ${MEDIA_QUERY_MD} {
    flex-direction: column;
  }
`
const TitleWrapper = styled.div`
  margin-left: 96px;

  ${MEDIA_QUERY_MD} {
    padding: 0px;
    text-align: center;
  }
`
const ListWrapper = styled.div`
  display: flex;
  padding: 34px 121px 34px 0px
  ${MEDIA_QUERY_MD} {
    padding: 0px;
  }
`


export default function NavbarList() {
  return (
    <div className="Navbar" style={{marginTop: "26px",marginBottom: "32px",}}>
        <NavbarWrapper>
          <TitleWrapper>
            <Logo />
          </TitleWrapper>
          <ListWrapper>
          <Navbar as="a" href="/abc" content="抽個大獎" />
          <Navbar as="a" href="/def" content="我要點餐" />
          <Navbar as="a" href="/def" content="查詢訂單" />
          <Navbar as="a" href="/def" content="常見問題" />
          </ListWrapper>
        </NavbarWrapper>
    </div>
  );
}
