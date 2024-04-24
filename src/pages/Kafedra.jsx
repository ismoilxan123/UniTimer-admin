import useFakultet from "../hooks/useFakultet";
import CrudPage from "../layout/CrudPage";
const columns = [
  {
    title: "Fakultet",
    dataIndex: "fakultet",
    key: "fakultet",
  },
  {
    title: "Kafedra",
    dataIndex: "kafedra",
    key: "kafedra",
  },
];

const forms = [
  {
    type: "select",
    label: "fakultet",
    name: "fakultet",
  },
  {
    type: "text",
    label: "kafedra",
    name: "kafedra",
  },
];

const Kafedra = () => {
  const { loading, fakultet } = useFakultet();
  return (
    <CrudPage
      title="Kafedra"
      pageColumns={columns}
      pageForm={forms}
      collectionName="Kafedra"
      selectOptions={fakultet}
      selectLoading={loading}
    ></CrudPage>
  );
};

export default Kafedra;
