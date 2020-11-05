import styled from 'styled-components';



const Title = styled.div`
  color: #489846;
  font-size: 36px;
  text-decoration: none;
`




export default function Logo() {
  return (
    <Title as="a" href="/">Just A Bite!</Title> 
  );
}
