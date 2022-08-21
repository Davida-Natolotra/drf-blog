import "./App.scss";
import { Container, Row, Col } from "reactstrap";
import Login from "./components/login";

function App() {
  return (
    <Container>
      <Row>
        <Col xs={3}>
          <Login />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
