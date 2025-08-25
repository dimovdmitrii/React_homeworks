import React, { useState } from "react";
import { Form, Input, Button, Card, Typography } from "antd";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({ name: "", description: "" });
  const [submittedData, setSubmittedData] = useState(null);

  const onFinish = () => {
    setSubmittedData(formData);
  };

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <Typography.Title level={3}>
        Форма с использованием Ant Design
      </Typography.Title>
      <Form
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        initialValues={formData}
        onValuesChange={(changed, all) => setFormData(all)}
      >
        <Form.Item
          label="Имя"
          rules={[{ required: true, message: "Пожалуйста, введите имя!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Описание"
          rules={[{ required: true, message: "Пожалуйста, введите описание!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Form>
      {submittedData && (
        <Card title="Отправленные данные:" style={{ marginTop: 20 }}>
          <p>
            <Typography.Text strong>Имя:</Typography.Text> {submittedData.name}
          </p>
          <p>
            <Typography.Text strong>Описание:</Typography.Text>{" "}
            {submittedData.description}
          </p>
        </Card>
      )}
    </div>
  );
}

export default App;
