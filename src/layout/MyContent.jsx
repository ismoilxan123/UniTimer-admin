import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
const MyContent = () => {
  return (
    <Content style={{ padding: 24, background: "#fff", borderRadius: "12px" }}>
      <Outlet />
    </Content>
  );
};

export default MyContent;
