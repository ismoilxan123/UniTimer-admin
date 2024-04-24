import CrudPage from "../layout/CrudPage";

const columns = [
  {
    title: "Guruh",
    dataIndex: "guruh",
    key: "guruh",
  },
  {
    title: "Guruh sig'imi",
    dataIndex: "guruhSigimi",
    key: "guruhSigimi",
  },
];

const forms = [
  {
    type: "text",
    label: "guruh",
    name: "guruh",
  },
  {
    type: "text",
    label: "guruh sig'imi",
    name: "guruhSigimi",
  },
];

const Guruh = () => {
  return (
    <CrudPage
      pageColumns={columns}
      title="Guruh"
      pageForm={forms}
      collectionName={"Guruh"}
    ></CrudPage>
  );
};

export default Guruh;
