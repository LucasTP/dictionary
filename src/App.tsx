import React from 'react';

import { Button, ConfigProvider } from 'antd';

const App = () => (
  <ConfigProvider>
    <Button type="primary">Button</Button>
  </ConfigProvider>
);

export default App;
