import React from "react";
import { Card, Col, Divider, Row } from "antd";
import { NavLink } from "react-router-dom";

const homeCards = [
  {
    id: 1,
    title: "Ustozlar bandligini ko'rish",
  },
  {
    id: 2,
    title: "Guruhlar jadvalini ko'rish",
  },
  {
    id: 3,
    title: "Coming soon....",
  },
  {
    id: 4,
    title: "Coming soon....",
  },
  {
    id: 5,
    title: "Coming soon....",
  },
];

const App = () => (
  <div>
    <h1>Home</h1>
    <Divider />
    <Row gutter={16}>
      <Col span={8}>
        <NavLink to="/xonaBandligi">
          <Card
            className="custom-card"
            style={{
              backgroundColor: "#bc8e5c",
              color: "#fff",
              cursor: "pointer",
              marginBottom: 24,
            }}
            title=" Xona bandligini ko'rish"
            bordered={false}
          ></Card>
        </NavLink>
      </Col>
      {homeCards.map((home) => (
        <Col span={8}>
          <Card
            className="custom-card"
            style={{
              backgroundColor: "#bc8e5c",
              color: "#fff",
              cursor: "pointer",
              marginBottom: 24,
            }}
            title={home.title}
            bordered={false}
          ></Card>
        </Col>
      ))}
    </Row>
  </div>
);
export default App;
