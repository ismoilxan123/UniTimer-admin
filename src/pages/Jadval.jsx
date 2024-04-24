import {
  Button,
  Card,
  Col,
  Divider,
  Flex,
  Form,
  Row,
  Select,
  message,
} from "antd";
import useGuruhlar from "../hooks/useGuruhlar";
import JadvalCard from "../components/JadvalCard";
import useFan from "../hooks/useFan";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const yonalish = [
  {
    id: 1,
    yonal: "Biologiya",
  },
  {
    id: 2,
    yonal: "Kimyo",
  },
  {
    id: 3,
    yonal: "Ekologiya",
  },
  {
    id: 4,
    yonal: "Geografiya",
  },
];

const Jadval = () => {
  const { guruhlarLoading, guruhlar } = useGuruhlar();
  const { fanLoading, fan } = useFan();
  const [jadvalLoading, setJadvalLoading] = useState(false);
  const [nextPage, setNextPage] = useState(false);
  function a() {
    setJadvalLoading(true);
    setTimeout(() => {
      message.success("Jadval Yaratildi!");
      setJadvalLoading(false);
      setNextPage(true);
    }, 3000);
  }
  return (
    <div>
      <h1>Jadval Yaratish</h1>
      <Divider />
      <Form layout="vertical" name="uqituvchi">
        <Flex justify="space-between" align="center" style={{ width: "100%" }}>
          <Form.Item
            label="Yo'nalishni tanlang"
            name="yo'nalish"
            rules={[
              {
                required: true,
                message: `Iltimos yo'nalishni kiriting!`,
              },
            ]}
          >
            <Select
              size="large"
              placeholder="Yo'nalishni tanlang!"
              options={yonalish.map((y) => ({ value: y.id, label: y.yonal }))}
              style={{
                width: 500,
                fontWeight: 700,
                textAlign: "center",
              }}
              loading={guruhlarLoading}
            />
          </Form.Item>
          <Form.Item
            label="Patokni tanlang"
            name="patok"
            rules={[
              {
                required: true,
                message: `Iltimos patokni kiriting!`,
              },
            ]}
          >
            <Select
              size="large"
              placeholder="Patokni tanlang!"
              options={guruhlar.map((g) => ({ value: g.id, label: g.guruh }))}
              style={{
                width: 500,
                fontWeight: 700,
                textAlign: "center",
              }}
              loading={guruhlarLoading}
            />
          </Form.Item>
        </Flex>
        <Divider />
        <Row style={{ width: "2120px" }} gutter={16}>
          <Col span={8}>
            <JadvalCard fan={fan} />
          </Col>
          <Col span={8}>
            <JadvalCard fan={fan} />
          </Col>
        </Row>
        <Divider />
        <Row style={{ width: "2120px" }} gutter={16}>
          <Col span={8}>
            <JadvalCard fan={fan} />
          </Col>
          <Col span={8}>
            <JadvalCard fan={fan} />
          </Col>
        </Row>
        <div style={{ height: 30 }}></div>
        <Form.Item
          style={{
            textAlign: "right",
          }}
        >
          <NavLink to={`${nextPage ? "/jadvalExcel" : ""}`}>
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              style={{
                height: 50,
                fontSize: 24,
                textAlign: "center",
                fontWeight: 700,
              }}
              loading={jadvalLoading}
              onClick={() => a()}
            >
              Jadval yaratish
            </Button>
          </NavLink>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Jadval;
