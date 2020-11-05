import styled from 'styled-components'
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG } from './constants/style'


const Navbar = styled.div`
  font-size: 18px;
  cursor: pointer;
  padding: 13px 25px;
  text-decoration: none;
  color: black;

  & + & {
    margin-left: 40px;

    ${MEDIA_QUERY_MD} {
      margin-left: 0px;
    }
  }

  &:hover {
    background: #ff7286;
    border-radius: 8px;
    color: #fefefe;
    transition: all 0.2s;
  }

  ${MEDIA_QUERY_MD} {
    margin: 0 auto;
  }
`

export default function NavbarSingle({ as, href, content }) {
  return (
    <Navbar as={as} href={href}>{content}</Navbar>
  );
}
