import React from 'react';
import type { ReactElement } from 'react';

import Table from 'antd/es/table';

import { useDictionary } from '../hooks/useDictionary';
import { IVocabulary } from '../models/vocabulary';

export function VocabularyList(): ReactElement {
  const { fetchDictionary } = useDictionary();

  const [dictionary, setDictionary] = React.useState<IVocabulary[]>([]);
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
    fetchDictionary()
      .then((data) => {
        setDictionary(data.eng);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error('[ERROR][FETCH][DICTIONARY]: ', err);
      });
  }, []);

  return <Table dataSource={dictionary} columns={columns} rowKey="newWord" />;
}

export default React.memo(VocabularyList);
