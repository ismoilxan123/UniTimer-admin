import { Header } from "antd/es/layout/layout";
import { Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const MyHeader = ({ collapse, setCollapse }) => {
  return (
    <Header style={{ background: "#00152A", padding: 0 }}>
      <Button
        type="text"
        icon={
          collapse ? (
            <MenuUnfoldOutlined style={{ color: "#fff", fontSize: 20 }} />
          ) : (
            <MenuFoldOutlined style={{ color: "#fff", fontSize: 20 }} />
          )
        }
        onClick={() => {
          setCollapse(!collapse);
        }}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
    </Header>
  );
};

export default MyHeader;
