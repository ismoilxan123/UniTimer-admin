import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import { ConfigProvider } from "antd";
import Home from "./pages/Home";
import Fakultet from "./pages/Fakultet";
import Kafedra from "./pages/Kafedra";
import Xona from "./pages/Xona";
import Uqituvchi from "./pages/Uqituvchi";
import Fan from "./pages/Fan";
import Guruh from "./pages/Guruh";
import Patok from "./pages/Patok";
import Jadval from "./pages/Jadval";
import XonaBandligi from "./pages/XonaBandligi";
import JadvalExcel from "./pages/JadvalExcel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "xonaBandligi",
        element: <XonaBandligi />,
      },
      {
        path: "fakultet",
        element: <Fakultet />,
      },
      {
        path: "kafedra",
        element: <Kafedra />,
      },
      {
        path: "xona",
        element: <Xona />,
      },
      {
        path: "uqituvchi",
        element: <Uqituvchi />,
      },
      {
        path: "fan",
        element: <Fan />,
      },
      {
        path: "guruh",
        element: <Guruh />,
      },
      {
        path: "patok",
        element: <Patok />,
      },
      {
        path: "jadval",
        element: <Jadval />,
      },
      {
        path: "jadvalExcel",
        element: <JadvalExcel />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#bc8e5c",
            fontSize: 16,
          },
        }}
      >
        <RouterProvider router={router}></RouterProvider>
      </ConfigProvider>
    </>
  );
};

export default App;
