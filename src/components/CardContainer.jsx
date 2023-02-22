import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { data } from "../helper/data";
import PlayerCard from "./PlayerCard";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { Container } from "react-bootstrap";

const CardContainer = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <Form.Control
        placeholder="Search Player..."
        type="search"
        className="w-50 m-auto"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Container className="card-container rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">
          {data
            .filter((player) =>
              player.name.toLowerCase().includes(search.trim().toLowerCase())
            )
            .map((player, i) => {
              return (
                <Col xl={3} md={6} key={i}>
                  <PlayerCard {...player} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
