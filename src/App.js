import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import Board from "./components/Board";
import {
  Container, Row,
} from "react-bootstrap";

export default function App() {
  return (
    <Container>
      <Row>
        <h1 className="header">Noughts and Crosses</h1>
      </Row>
      <Board></Board>
    </Container>
  );
}
