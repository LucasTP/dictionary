import React from 'react';

import type { ReactElement } from 'react';
import { Col, Row } from 'antd/es/grid';
import Form from 'antd/es/form';
import Input from 'antd/es/input';
import Button from 'antd/es/button';

interface INewWordFormValues {
  newWord: string;
  definition: string;
}

const headerStyle: React.CSSProperties = {
  margin: '1rem',
};

const newWordFormStyle: React.CSSProperties = {
  display: 'inline-flex',
  gap: '1rem',
};

const formItemStyle: React.CSSProperties = {
  margin: 0,
};

export function AppHeader(): ReactElement {
  const [form] = Form.useForm();

  const onFinish = (values: INewWordFormValues): void => {
    console.log('Success:', values);
  };

  return (
    <Row justify="center" style={headerStyle}>
      <Col>
        <Form form={form} name="add-new-word" autoComplete="off" onFinish={onFinish} style={newWordFormStyle}>
          <Form.Item name="newWord" style={formItemStyle} rules={[{ required: true, message: 'Please input a word!' }]}>
            <Input autoFocus placeholder="Add a new word" />
          </Form.Item>
          <Form.Item name="definition" rules={[{ required: true, message: 'Please input a definition!' }]}>
            <Input placeholder="Add a new definition" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
