import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG, Section } from "./constants/style";

const SectionText = styled.div`
  margin: 0px 10px;
`;

const SectionButton = styled.div`
  display: flex;
  margin-top: 84px;
  flex-item: center;
  justify-content: center;

  ${MEDIA_QUERY_MD} {
    flex-direction: column;
  }
`;
const Button = styled.button`
  padding: 61px 80px 67px;
  background: ${(props) => (props.primary ? "#a8e8e1" : "#f9f9b5")};
  border-radius: 10px;
  font-size: 36px;
  color: #3e613d;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
    font-weight: bold;
    transition: transform, font-weight 0.1s;
  }

  & + & {
    margin-left: 23px;
    ${MEDIA_QUERY_MD} {
      margin-left: 0px;
    }
  }
`;

function Text() {
  return (
    <div>
      <p>
        由於現代人生活忙碌，常以外食為主，當高糖、高鹽、高油成為人們的日常，會導致慢性疾病與肥胖的機率大增。
      </p>
      <p>
        我們定期走訪農田，選用最天然、營養的食材，以簡單的烹調方式處理，最大化忠實呈現食材原本的鮮味。
      </p>
      <p>
        咬一口不只賣餐點，我們希望能夠讓大家愛上料理的魅力，餐館特意打造全開放式廚房，烹調透明化，也不定時舉辦美食廚房DIY，讓大家體驗不需要過多調味，就能擁有千變萬化的食物口感。
      </p>
    </div>
  );
}

function Introduction() {
  return (
    <div className="SectionIntroduction">
      <Section>
        <SectionText>
          <SectionTitle>當輕食之風盛起</SectionTitle>
          <Text />
        </SectionText>
        <SectionButton>
          <Button primary as="a" href="/">
            我要點餐
          </Button>
          <Button as="a" href="/">
            查詢訂單
          </Button>
        </SectionButton>
      </Section>
    </div>
  );
}

export default Introduction;
