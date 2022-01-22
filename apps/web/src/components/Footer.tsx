import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Made with ❤️&nbsp; by&nbsp;
            <a
              href="https://github.com/guimochila"
              target="_blank"
              rel="noreferrer"
            >
              @guimochila
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
