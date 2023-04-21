import React from 'react';
import type { ReactElement } from 'react';

import Table from 'antd/es/table';

import { useDictionary } from '../hooks/useDictionary';
import { ELanguages } from '../models/vocabulary';

export function VocabularyList(): ReactElement {
  const { dictionary, fetchDictionary } = useDictionary(ELanguages.English);

  const columns = [
    {
      title: 'New Word',
      dataIndex: 'newWord',
      key: 'newWord',
    },
    {
      title: 'Definition',
      dataIndex: 'definition',
      key: 'definition',
    },
  ];

  React.useEffect(() => {
    fetchDictionary();
  }, []);

  return <Table dataSource={dictionary} columns={columns} />;
}

export default React.memo(VocabularyList);
