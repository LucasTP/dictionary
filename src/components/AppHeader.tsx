/* eslint-disable no-console */
import React from 'react';

import type { ReactElement } from 'react';
import { Col, Row } from 'antd/es/grid';
import Form from 'antd/es/form';
import Input from 'antd/es/input';
import Button from 'antd/es/button';

import { ELanguages, IVocabulary, NewWordFormValues } from '../models/vocabulary';
import { useDictionary } from '../hooks/useDictionary';

const headerStyle: React.CSSProperties = {
  margin: '1rem',
};

const newWordFormStyle: React.CSSProperties = {
  display: 'inline-flex',
  gap: '1rem',
};

export function AppHeader(): ReactElement {
  const [form] = Form.useForm();
  const { addNewWord } = useDictionary();

  const onFinish = async (values: NewWordFormValues) => {
    const { newWord, definition } = values;
    const payload: IVocabulary = {
      newWord: newWord.toLowerCase(),
      definition,
      lang: ELanguages.English,
      similarWords: [],
      pronunciation: '',
      exampleSentences: [],
      partOfSpeech: '',
    };
    await addNewWord(payload);
  };

  return (
    <Row justify="center" style={headerStyle}>
      <Col>
        <Form form={form} name="add-new-word" autoComplete="off" onFinish={onFinish} style={newWordFormStyle}>
          <Form.Item name="newWord" rules={[{ required: true, message: 'Please input a word!' }]}>
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
