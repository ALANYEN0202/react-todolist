import styled from 'styled-components'
import SectionTitle from './SectionTitle'
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG, Section } from './constants/style'



function Iframe({ src, width, height, frameborder, style, ariaHidden, tabindex }) {
  return (
    <div>
      <iframe src={src} width={width} height={height} frameborder={frameborder} style={style} aria-hidden={ariaHidden} tabindex={tabindex}>
      </iframe>
    </div>
  )
}




function Map() {
  const src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0027469618385!2d121.56235021448099!3d25.0339808444473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6da9c9e1f%3A0x1206bcf082fd10a6!2zMTEw5Y-w5YyX5biC5L-h576p5Y2A5L-h576p6Lev5LqU5q61N-iZnw!5e0!3m2!1szh-TW!2stw!4v1594801962374!5m2!1szh-TW!2stw"
  const width = "100"
  const height = "450"
  const frameborder = "0"
  const style = {
    border: "0",
    width: "95%",
    marginTop: "36px",
  }
  const ariaHidden = "false"
  const tabindex = "0"
  return (
    <div className="Map">
      <Section>
          <SectionTitle>我們在哪裡</SectionTitle>
        <Iframe src={src} width={width} height={height} frameborder={frameborder} style={style}  ariaHidden={ariaHidden} tabindex={tabindex} />
      </Section>
    </div>
  );
}

export default Map;
