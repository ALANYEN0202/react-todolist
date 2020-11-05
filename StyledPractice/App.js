import styled from 'styled-components'
import NavbarList from './NavbarList'
import Banner from './Banner'
import Introtion from './Introduction'
import SectionImg from './SectionImg'
import Comment from './Comment'
import Map from './Map'
import FooterList from './FooterList'
import Footer from './Footer'

const Wrapper = styled.div``


function App() {
  return (
    <div className="App">
      <Wrapper>
       <NavbarList/>
       <Banner />
       <Introtion />
       <SectionImg />
       <Comment />
       <Map />
       <FooterList />
       <Footer />
      </Wrapper>
    </div>
  );
}

export default App;
