import styled from 'styled-components'
import SectionTitle from './SectionTitle'
import Author1 from './public/img/p-1.png'
import Author2 from './public/img/p-2.png'
import Author3 from './public/img/p-3.png'
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG, Section } from './constants/style'




const Comments = styled.div`
  display: flex;
  margin-top: 98px;
  ${MEDIA_QUERY_MD} {
    flex-direction: column;
  }
`
const CommentList = styled.div`
  position: relative;
  border-radius: 5px;
  box-shadow: -1.4px -1.4px 4px 0 #d8eaef;
  border: solid 1px #c7e5ec;
  width: 33%;

  & + & {
    margin-left: 5px;
  }

  ${MEDIA_QUERY_MD} {
    width: 100%;
    margin-left: 0px;
    margin-top: 60px
  }
`
const Text = styled.div`
  padding: 93px 19px 39px;
`
function Img({ src }) {
  return (
    <img src={src} style={{
      position: 'absolute',
      left: '35%',
      top: '-31%',
    }}/>
  )
}


function Comment() {
  return (
    <div className="Comment">
      <Section>
        <SectionTitle>吃過都說好</SectionTitle>
        <Comments>
          <CommentList>
            <Img src={Author1} />
            <Text>
              我一生疲於建國，去過日本，去過歐洲，卻從未到過台北101，也從來沒有吃過這麼好吃的東西...今天在時空旅行者的幫助下我終於吃到了...此生再無遺憾 QAQ!!
            </Text>
          </CommentList>
          <CommentList>
            <Img src={Author2} />
            <Text>
              三雙鞋等於30，兩個人加一雙鞋等於20，一雙冰淇淋加一雙冰淇淋加一個人等於13，那$#%$#%^%$^##$%等於多少...唉，大概咬一口就知道了!!!
            </Text>
          </CommentList>
          <CommentList>
            <Img src={Author3} />
            <Text>
              自從呱呱呱呱呱以後，我呱呱呱呱呱，非常感謝呱呱呱呱呱，下次呱呱呱呱呱我呱呱呱呱呱，一定呱呱呱呱呱!!!
            </Text>
          </CommentList>
        </Comments>
      </Section>
    </div>
  );
}

export default Comment;
