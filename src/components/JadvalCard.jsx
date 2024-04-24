import { Card, Divider, Flex, Form, Select } from "antd";
import { useState } from "react";
import useUqituvchi from "../hooks/useUqituvchi";

const maruzaSoati = [
  {
    id: 1,
    soat: "10",
  },
  {
    id: 2,
    soat: "15",
  },
  {
    id: 3,
    soat: "20",
  },
  {
    id: 4,
    soat: "25",
  },
  {
    id: 5,
    soat: "30",
  },
  {
    id: 6,
    soat: "40",
  },
  {
    id: 7,
    soat: "50",
  },
];

const JadvalCard = ({ fan }) => {
  const [cardLoading, setCardLoading] = useState(true);
  const { uqituvchi, uqituvchiLoading } = useUqituvchi();

  return (
    <Card
      type="inner"
      title={
        <Select
          size="large"
          placeholder="Fanni tanlang!"
          onChange={() => setCardLoading(false)}
          options={fan.map((f) => ({ value: f.fan, label: f.fan }))}
          style={{ width: "100%" }}
        />
      }
      loading={cardLoading}
      bordered={false}
    >
      <Flex align="center" gap={30}>
        <Form.Item
          label="Ma'ruza soati"
          rules={[
            {
              required: true,
              message: `Iltimos maruzani kiriting!`,
            },
          ]}
        >
          <Select
            size="large"
            placeholder="Ma'ruza soati!"
            options={maruzaSoati.map((mS) => ({
              value: mS.soat,
              label: mS.soat,
            }))}
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item
          label="Amaliy soati"
          rules={[
            {
              required: true,
              message: `Iltimos amaliy kiriting!`,
            },
          ]}
        >
          <Select
            size="large"
            placeholder="Amaliy soati!"
            options={maruzaSoati.map((mS) => ({
              value: mS.soat,
              label: mS.soat,
            }))}
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item
          label="Laboratoriya soati"
          rules={[
            {
              required: true,
              message: `Iltimos laboratoriya kiriting!`,
            },
          ]}
        >
          <Select
            size="large"
            placeholder="Laboratoriya soati!"
            options={maruzaSoati.map((mS) => ({
              value: mS.soat,
              label: mS.soat,
            }))}
            style={{ width: "100%" }}
          />
        </Form.Item>
      </Flex>
      <Divider style={{ marginTop: -10 }} />
      <Flex align="center" gap={10}>
        <Form.Item
          label="Ma'ruza o'qituvchisi"
          rules={[
            {
              required: true,
              message: `Iltimos maruzani kiriting!`,
            },
          ]}
        >
          <Select
            size="large"
            placeholder="Ma'ruza o'qituvchisi!"
            options={uqituvchi.map((u) => ({
              value: u.lastName,
              label: u.lastName,
            }))}
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item
          label="Amaliy o'qituvchisi"
          rules={[
            {
              required: true,
              message: `Iltimos amaliyni kiriting!`,
            },
          ]}
        >
          <Select
            size="large"
            placeholder="Amaliy o'qituvchisi!"
            options={uqituvchi.map((u) => ({
              value: u.lastName,
              label: u.lastName,
            }))}
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item
          label="Laboratoriya o'qituvchisi"
          rules={[
            {
              required: true,
              message: `Iltimos laboratoriyani kiriting!`,
            },
          ]}
        >
          <Select
            size="large"
            placeholder="Laboratoriya o'qituvchisi!"
            options={uqituvchi.map((u) => ({
              value: u.lastName,
              label: u.lastName,
            }))}
            style={{ width: "100%" }}
          />
        </Form.Item>
      </Flex>
    </Card>
  );
};

export default JadvalCard;
