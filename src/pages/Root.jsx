import { Layout } from "antd";
import Sidebar from "../layout/Sidebar";
import MyHeader from "../layout/MyHeader";
import MyContent from "../layout/MyContent";
// import SidebarOptions from "../layout/SidebarOptions";
import { useState } from "react";

const Root = () => {
  const [collapse, setCollapse] = useState(false);
  return (
    <Layout style={{ minHeight: "100%" }}>
      <Sidebar collapse={collapse} setCollapse={setCollapse} />
      <Layout>
        <MyHeader collapse={collapse} setCollapse={setCollapse} />
        <Layout style={{ padding: 24 }}>
          <MyContent />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Root;
