import useKafedra from "../hooks/useKafedra";
import CrudPage from "../layout/CrudPage";

const columns = [
  {
    title: "Kafedra (bino)",
    dataIndex: "kafedraBino",
    key: "kafedraBino",
  },
  {
    title: "Xona raqami",
    dataIndex: "xonaRaqami",
    key: "xonaRaqami",
  },
  {
    title: "Xona turni",
    dataIndex: "xonaTuri",
    key: "xonaTuri",
  },
  {
    title: "Xona sig'imi",
    dataIndex: "xonaSigimi",
    key: "xonaSigimi",
  },
];

const forms = [
  {
    type: "select",
    label: "kafedra",
    name: "kafedraBino",
  },
  {
    type: "text",
    label: "xona raqami (nomi)",
    name: "xonaRaqami",
  },
  {
    type: "text",
    label: "xona turi",
    name: "xonaTuri",
  },
  {
    type: "text",
    label: "xona sig'imi",
    name: "xonaSigimi",
  },
];

const Xona = () => {
  const { loading, kafedra } = useKafedra();
  return (
    <CrudPage
      title="Xona"
      pageColumns={columns}
      pageForm={forms}
      collectionName="Xona"
      selectOptions={kafedra}
      selectLoading={loading}
    ></CrudPage>
  );
};

export default Xona;
