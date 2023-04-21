import React from 'react';

import { ConfigProvider } from 'antd';
import { AppLayout } from './components/AppLayout';

const App = () => (
  <ConfigProvider>
    <AppLayout />
  </ConfigProvider>
);

export default App;
