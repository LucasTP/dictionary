import React from 'react';
import type { ReactElement } from 'react';

import Divider from 'antd/es/divider';
import Layout, { Content, Header } from 'antd/es/layout/layout';
import Space from 'antd/es/space';

import { AppHeader } from './AppHeader';
import { VocabularyList } from './VocabularyList';

const rootStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
};

const headerStyle: React.CSSProperties = {
  backgroundColor: 'transparent',
  padding: 0,
  lineHeight: 'inherit',
  height: 'inherit',
};

const contentStyle: React.CSSProperties = {
  backgroundColor: 'transparent',
};

const layoutStyle: React.CSSProperties = {
  backgroundColor: 'transparent',
};

export function AppLayout(): ReactElement {
  return (
    <>
      <Space direction="vertical" style={rootStyle}>
        <Layout style={layoutStyle}>
          <Header style={headerStyle}>
            <AppHeader />
          </Header>
          <Divider orientation="left">Dictionary</Divider>
          <Content style={contentStyle}>
            <VocabularyList />
          </Content>
        </Layout>
      </Space>
    </>
  );
}
