import React, { useState } from "react";
import { Card, Divider, Flex, Modal, Select } from "antd";
import useKafedra from "../hooks/useKafedra";
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

const App = () => {
  const { loading, kafedra } = useKafedra();
  const [open, setOpen] = useState(false);
  const [cardLoading, setCardLoading] = useState(true);
  return (
    <>
      <Flex justify="space-between" align="center">
        <h1>Xona bandligi</h1>
        <>
          <Select
            options={kafedra.map((kaf) => ({
              value: kaf.id,
              label: kaf.kafedra,
            }))}
            size="large"
            placeholder="Kafedra yoki Binoni tanlang!"
            style={{ width: 500 }}
            loading={loading}
          />
          <Select
            options={smenaOption.map((smen) => ({
              value: smen.value,
              label: smen.label,
            }))}
            size="large"
            placeholder="Dars smenasini tanlang"
            style={{ width: 300 }}
            loading={loading}
            onChange={() => setCardLoading(false)}
          />
        </>
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
          title="Kafedra (bino)da 2 ta bo'sh xona mavjud "
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={1000}
        >
          <Card>
            {xonaRaqami.map((xona) =>
              xona.bant ? (
                <Card.Grid className="xonaDanger" style={xonaStyle}>
                  {xona.raqam}
                </Card.Grid>
              ) : (
                <Card.Grid className="xonaSuccess" style={xonaStyle}>
                  {xona.raqam}
                </Card.Grid>
              )
            )}
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
export default App;
