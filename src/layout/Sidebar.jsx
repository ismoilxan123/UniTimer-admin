import { NavLink, useLocation } from "react-router-dom";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import {
  HomeFilled,
  AppstoreOutlined,
  ProductOutlined,
  HddOutlined,
  UserOutlined,
  BookOutlined,
  TeamOutlined,
  ApiOutlined,
  TableOutlined,
  AppstoreAddOutlined,
  PartitionOutlined,
} from "@ant-design/icons";

const Sidebar = ({ collapse, setCollapse }) => {
  const loaction = useLocation();
  return (
    <Sider width={250} collapsed={collapse} style={{ background: "#00152A" }}>
      <div className="logo__border">
        {collapse ? (
          <div className="logo__box">
            <h2 className="logo">U</h2>
          </div>
        ) : (
          <div className="logo__box">
            <h2 className="logo">UniTime Planner</h2>
          </div>
        )}
      </div>
      <br />
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={[location.pathname]}
        items={[
          {
            key: "/home",
            icon: <HomeFilled />,
            label: <NavLink to={"/home"}>Home</NavLink>,
          },
          {
            key: "2",
            icon: <AppstoreAddOutlined />,
            label: "Qo'shish",
            children: [
              {
                key: "/fakultet",
                path: "/fakultet",
                label: <NavLink to="/fakultet">Fakultet</NavLink>,
                icon: <AppstoreOutlined />,
              },
              {
                key: "/kafedra",
                path: "/kafedra",
                label: <NavLink to="/kafedra">Kafedra</NavLink>,
                icon: <ProductOutlined />,
              },
              {
                key: "/xona",
                path: "/xona",
                label: <NavLink to="/xona">Xona</NavLink>,
                icon: <HddOutlined />,
              },
              {
                key: "/uqituvchi",
                path: "/uqituvchi",
                label: <NavLink to="/uqituvchi">O'qituvchi</NavLink>,
                icon: <UserOutlined />,
              },
              {
                key: "/fan",
                path: "/fan",
                label: <NavLink to="/fan">Fan</NavLink>,
                icon: <BookOutlined />,
              },
              {
                key: "/guruh",
                path: "/guruh",
                label: <NavLink to="/guruh">Guruh</NavLink>,
                icon: <TeamOutlined />,
              },
            ],
          },
          {
            key: "9",
            icon: <PartitionOutlined />,
            label: "Yaratish",
            children: [
              {
                key: "/patok",
                path: "/patok",
                label: <NavLink to="/patok">Patok</NavLink>,
                icon: <ApiOutlined />,
              },
              {
                key: "/jadval",
                path: "/jadval",
                label: (
                  <NavLink onClick={() => setCollapse(true)} to="/jadval">
                    Jadval
                  </NavLink>
                ),
                icon: <TableOutlined />,
              },
            ],
          },
        ]}
      />
    </Sider>
  );
};

export default Sidebar;
