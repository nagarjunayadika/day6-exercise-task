import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SidebarNav from './components/SidebarNav'
import Header from './components/Header'
import Blog from './components/Blog'
import LatestBlog from './components/LatestBlogs';
function App() {

  return (
    <>
    <Header />
    <Container className="blog-container">
      <Row className='position-relative'>
        <Col xs={3}>
        <SidebarNav />
        </Col>
        <Col xs={6}>
        <Blog />
        </Col>
        <Col xs={3}>
        <LatestBlog />
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App