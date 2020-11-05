import styled from 'styled-components'
import SectionTitle from './SectionTitle'
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG, Section } from './constants/style'
import Img1 from './public/img/f-001.png'
import Img2 from './public/img/f-002.png'
import Img3 from './public/img/f-003.png'
import Img4 from './public/img/f-004.png'

const SectionImg = styled.div`
  display: flex;
  margin-top: 36px;
  
  ${MEDIA_QUERY_MD} {
    flex-direction: column;
  }
`
const Div = styled.div`
  width: 25%;

  ${MEDIA_QUERY_MD} {
    width: 100%;
  }
`
function Img({ src }) {
  return (
    <Div>
      <img src={src} style={{width: '100%'}} />
    </Div>
  )
}




function SectionBannerImg() {
  return (
    <div className="Section-Img">
      <Section>
          <SectionTitle>Menu 搶先看</SectionTitle>
        <SectionImg>
          <Img src={Img1} />
          <Img src={Img2} />
          <Img src={Img3} />
          <Img src={Img4} />
        </SectionImg>
      </Section>
    </div>
  );
}

export default SectionBannerImg;
