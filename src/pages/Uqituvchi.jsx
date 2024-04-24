import React from "react";
import CrudPage from "../layout/CrudPage";
import useKafedra from "../hooks/useKafedra";

const columns = [
  {
    title: "Kafedra",
    dataIndex: "kafedra",
    key: "kafedra",
  },
  {
    title: "Familya",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "Ism",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Sharf",
    dataIndex: "sharf",
    key: "sharf",
  },
  {
    title: "Qisqartmasi",
    dataIndex: "qisqartmasi",
    key: "qisqartmasi",
  },
];

const forms = [
  {
    type: "select",
    label: "kafedra",
    name: "kafedra",
  },
  {
    type: "text",
    label: "familya",
    name: "lastName",
  },
  {
    type: "text",
    label: "ism",
    name: "firstName",
  },
  {
    type: "text",
    label: "sharf",
    name: "sharf",
  },
];

const Uqituvchi = () => {
  const { loading, kafedra } = useKafedra();
  return (
    <CrudPage
      pageColumns={columns}
      title="O'qituvchi"
      pageForm={forms}
      collectionName="Uqituvchi"
      selectOptions={kafedra}
      selectLoading={loading}
    ></CrudPage>
  );
};

export default Uqituvchi;
