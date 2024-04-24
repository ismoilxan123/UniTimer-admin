import CrudPage from "../layout/CrudPage";

const columns = [
  {
    title: "Fakultet",
    dataIndex: "fakultet",
    key: "fakultet",
  },
];

const forms = [
  {
    type: "text",
    label: "fakultet",
    name: "fakultet",
  },
];
const Fakultet = () => {
  return (
    <CrudPage
      title="Fakultet"
      pageColumns={columns}
      pageForm={forms}
      collectionName="Fakultet"
    ></CrudPage>
  );
};

export default Fakultet;
