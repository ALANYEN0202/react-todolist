import styled from 'styled-components'

export const MEDIA_QUERY_MD = '@media screen and (max-width: 760px)'
export const MEDIA_QUERY_LG = '@media screen and (max-width: 1000px)'
export const Section = styled.section`
margin: 80px 0px 121px 0px;
text-align: center;

${MEDIA_QUERY_MD} {
  margin: 20px 0px;
}
`
