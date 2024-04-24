import useGuruh from "../hooks/useGuruh";
import CrudPage from "../layout/CrudPage";

const columns = [
  {
    title: "Kurs",
    dataIndex: "kurs",
    key: "kurs",
  },
  {
    title: "Dars smenasi",
    dataIndex: "darsSmena",
    key: "darsSmena",
  },
  {
    title: "Patok",
    dataIndex: "guruh",
    key: "guruh",
  },
  {
    title: "Dars mashg'inig kafedra (binosi)",
    dataIndex: "bino",
    key: "bino",
  },
];

const forms = [
  {
    type: "text",
    label: "kurs",
    name: "kurs",
  },
  {
    type: "text",
    label: "dars smenasi",
    name: "darsSmena",
  },
  {
    type: "selectMultiple",
    label: "guruh",
    name: "guruh",
  },
  {
    type: "text",
    label: "dars mashg'inig kafedra (binosi)",
    name: "bino",
  },
];

const Patok = () => {
  const { loading, guruh } = useGuruh();
  return (
    <CrudPage
      title="Patok"
      pageColumns={columns}
      pageForm={forms}
      collectionName="Patok"
      selectOptions={guruh}
    ></CrudPage>
  );
};

export default Patok;
