import {
  DeleteFilled,
  EditFilled,
  PlusCircleOutlined,
} from "@ant-design/icons";
import {
  Button,
  Divider,
  Drawer,
  Flex,
  Form,
  Input,
  Select,
  Space,
  Table,
} from "antd";
import { useEffect, useState } from "react";
import useUqituvchi from "../hooks/useCrud";
import { useForm } from "antd/es/form/Form";

const CrudPage = ({
  pageColumns,
  title,
  pageForm,
  collectionName,
  selectOptions,
  selectLoading,
}) => {
  const [form] = useForm();
  const {
    loading,
    data,
    addUqituvchi,
    open,
    setOpen,
    deleteUqituvchi,
    setEdit,
    edit,
    updateUqituvchi,
  } = useUqituvchi(collectionName);

  const onFinish = (values) => {
    if (edit) {
      updateUqituvchi(edit.id, values);
    } else {
      addUqituvchi(values);
    }
  };

  useEffect(() => {
    if (!open) {
      form.resetFields();
    }
  }, [open]);

  useEffect(() => {
    if (open && edit) {
      form.setFieldsValue(edit);
    }
  }, [open]);

  const handleEdit = (record) => {
    setEdit(record);
    setOpen(true);
  };
  const columns = [
    {
      title: "№",
      dataIndex: "id",
      key: "id",
      render: (record, id, index) => index + 1,
      width: 50,
    },
    ...pageColumns,
    {
      title: "Harakatlar",
      key: "harakatlar",
      width: 120,
      render: (record) => (
        <Space>
          <Button
            onClick={() => deleteUqituvchi(record.id)}
            type="primary"
            danger
            icon={<DeleteFilled />}
          ></Button>
          <Button
            onClick={() => handleEdit(record)}
            type="primary"
            icon={<EditFilled />}
          ></Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Flex justify="space-between" align="center">
        <h1>{title}lar</h1>
        <Button
          onClick={() => setOpen(true)}
          type="primary"
          size="large"
          icon={<PlusCircleOutlined />}
        />
      </Flex>
      <Divider />
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        rowKey="id"
      />
      <Drawer
        title={edit ? `${title}ni tahrirlash` : `Yangi ${title} qo'shish`}
        open={open}
        onClose={() => setOpen(false)}
        placement="right"
        width={500}
      >
        <Form
          form={form}
          layout="vertical"
          name="uqituvchi"
          onFinish={onFinish}
        >
          {pageForm.map((pF) =>
            pF.type === "select" ? (
              <Form.Item
                label={pF.label.charAt(0).toUpperCase() + pF.label.slice(1)}
                name={pF.name}
                rules={[
                  {
                    required: true,
                    message: `Iltimos ${pF.label}ni kiriting!`,
                  },
                ]}
              >
                <Select
                  loading={selectLoading}
                  options={selectOptions.map((option) => ({
                    value: option[pF.label],
                    label: option[pF.label],
                  }))}
                />
              </Form.Item>
            ) : pF.type === "selectMultiple" ? (
              <Form.Item
                label={pF.label.charAt(0).toUpperCase() + pF.label.slice(1)}
                name={pF.name}
                rules={[
                  {
                    required: true,
                    message: `Iltimos ${pF.label}ni kiriting!`,
                  },
                ]}
              >
                <Select
                  mode="tags"
                  loading={selectLoading}
                  options={selectOptions.map((option) => ({
                    value: option[pF.label],
                    label: option[pF.label],
                  }))}
                />
              </Form.Item>
            ) : (
              <Form.Item
                label={pF.label.charAt(0).toUpperCase() + pF.label.slice(1)}
                name={pF.name}
                rules={[
                  {
                    required: true,
                    message: `Iltimos ${pF.label}ni kiriting!`,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            )
          )}
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              {edit ? "Tahrirlash" : "Qo'shish"}
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default CrudPage;
