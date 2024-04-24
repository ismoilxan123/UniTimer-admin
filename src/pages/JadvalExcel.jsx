import React, { useState } from "react";
import { Button, Card, Divider, Flex, Modal, Select } from "antd";
import useKafedra from "../hooks/useKafedra";
import useGuruhlar from "../hooks/useGuruhlar";
import useGuruh from "../hooks/useGuruh";
import { DownloadOutlined } from "@ant-design/icons";
import pfdJadval from "./../../pdf/jadval.pdf";

const gridStyle = {
  width: "13.88%",
  textAlign: "center",
  margin: 2.5,
  cursor: "pointer",
};
const xonaStyle = {
  width: "13.75%",
  textAlign: "center",
  margin: 2.5,
};

const smenaOption = [
  {
    value: 1,
    label: "Birinchi smena",
  },
  {
    value: 2,
    label: "Ikkinchi smena",
  },
  {
    value: 3,
    label: "Kechki smena",
  },
];
const xonaRaqami = [
  {
    raqam: "320",
    bant: true,
  },
  {
    raqam: "321",
    bant: true,
  },
  {
    raqam: "322",
    bant: false,
  },
  {
    raqam: "323",
    bant: true,
  },
  {
    raqam: "324",
    bant: false,
  },
  {
    raqam: "325",
    bant: true,
  },
  {
    raqam: "326",
    bant: true,
  },
  {
    raqam: "327",
    bant: false,
  },
  {
    raqam: "330",
    bant: true,
  },
  {
    raqam: "333",
    bant: true,
  },
  {
    raqam: "334",
    bant: true,
  },
  {
    raqam: "335",
    bant: true,
  },
  {
    raqam: "336",
    bant: true,
  },
  {
    raqam: "337",
    bant: false,
  },
  {
    raqam: "338",
    bant: true,
  },
  {
    raqam: "337",
    bant: true,
  },
];

const xonalarArr = [1, 2, 3, 4, 5, 6];

const JadvalExel = () => {
  const { loading, kafedra } = useKafedra();
  const { guruhlar } = useGuruhlar();
  const { guruh } = useGuruh();
  const [open, setOpen] = useState(false);
  const [cardLoading, setCardLoading] = useState(true);
  return (
    <>
      <Flex justify="space-between" align="center">
        <h1>Jadval yaratildi</h1>
        <Select
          options={guruhlar.map((gur) => ({
            value: gur.id,
            label: gur.guruh,
          }))}
          size="large"
          placeholder="Patokni tanlang!"
          style={{ width: 500 }}
          loading={loading}
        />
        <Select
          options={guruh.map((g) => ({
            value: g.id,
            label: g.guruh,
          }))}
          size="large"
          placeholder="Guruhni tanlang"
          style={{ width: 300 }}
          loading={loading}
          onChange={() => setCardLoading(!cardLoading)}
        />
        <Button size="large" type="primary" icon={<DownloadOutlined />}>
          <a href={pfdJadval} download={"Dars_Jadvalidfd"}>
            Yuklab olish
          </a>
        </Button>
      </Flex>
      <Divider />
      <Card loading={cardLoading}>
        <Card.Grid className="evenDays" style={gridStyle}>
          VAQT
        </Card.Grid>
        <Card.Grid className="oddDays" style={gridStyle}>
          Dushanba
        </Card.Grid>
        <Card.Grid className="evenDays" style={gridStyle}>
          Seshanba
        </Card.Grid>
        <Card.Grid className="oddDays" style={gridStyle}>
          Chorshanba
        </Card.Grid>
        <Card.Grid className="evenDays" style={gridStyle}>
          Payshanba
        </Card.Grid>
        <Card.Grid className="oddDays" style={gridStyle}>
          Juma
        </Card.Grid>
        <Card.Grid className="evenDays" style={gridStyle}>
          Shanba
        </Card.Grid>
        <Card.Grid className="oddDays" style={gridStyle}>
          08:00-09:20
        </Card.Grid>
        <Modal
          title="Dars jadvali"
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={500}
        >
          <Card
            title="Dushanba"
            type="inner"
            bordered={false}
            style={{
              width: "100%",
              backgroundColor: "#bc8e5c",
            }}
          >
            <p>1. Zoogeografiya Mirzahalilov.M</p>
            <Divider
              style={{
                marginTop: 10,
                marginBottom: 10,
                borderColor: "#fff",
              }}
            />
            <p>2. Entomologiay Shermatov.M</p>
            <Divider
              style={{
                marginTop: 10,
                marginBottom: 10,
                borderColor: "#fff",
              }}
            />
            <p>3. Teriologiya Mahmudov.M</p>
          </Card>
        </Modal>
        {xonalarArr.map((xona) => (
          <Card.Grid
            onClick={() => setOpen(true)}
            className="xonalar"
            style={gridStyle}
          >
            Xonalar
          </Card.Grid>
        ))}
        <Card.Grid className="evenDays" style={gridStyle}>
          09:30-10:50
        </Card.Grid>
        {xonalarArr.map((xona) => (
          <Card.Grid
            onClick={() => setOpen(true)}
            className="xonalar"
            style={gridStyle}
          >
            Xonalar
          </Card.Grid>
        ))}
        <Card.Grid className="oddDays" style={gridStyle}>
          11:00-12:20
        </Card.Grid>
        {xonalarArr.map((xona) => (
          <Card.Grid
            onClick={() => setOpen(true)}
            className="xonalar"
            style={gridStyle}
          >
            Xonalar
          </Card.Grid>
        ))}
      </Card>
    </>
  );
};
export default JadvalExel;
