import styled from 'styled-components'


const Title = styled.span`
  font-size: 36px;
  font-weight: bold;
  border-left: solid 15px #a3dea2;
  padding-left: 17px;
`


function SectionTitle({ children }) {
  return (
    <Title>{children}</Title>  
  );
}

export default SectionTitle;
