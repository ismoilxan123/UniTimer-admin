import CrudPage from "../layout/CrudPage";

const columns = [
  {
    title: "Fan",
    dataIndex: "fan",
    key: "fan",
  },
];

const forms = [
  {
    type: "text",
    label: "fan",
    name: "fan",
  },
];

const Fan = () => {
  return (
    <CrudPage
      pageColumns={columns}
      title="Fan"
      pageForm={forms}
      collectionName={"Fan"}
    ></CrudPage>
  );
};

export default Fan;
