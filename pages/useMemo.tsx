import type { NextPage } from 'next';
import { useMemo, useState } from 'react';
import { Button, Container } from 'react-bootstrap';

import Header from '../components/header';

const UseMemoPage: NextPage = () => {
  const [data, setData] = useState<number[]>([]);

  const handleGenerate = () => {
    setData(
      Array.from({ length: 10 }, () =>
        Math.round(Math.random() * (10 - 1) + 1),
      ),
    );
  };

  const total = useMemo(() => {
    return data.reduce((a, b) => {
      return a + b;
    }, 0);
  }, [data]);

  return (
    <>
      <Header />
      <Container>
        <br />
        <h1>useMemo</h1>
        <br />
        <Button onClick={handleGenerate}>Generate numbers</Button>
        <br />
        <br />
        {data.join(', ')}
        <br />
        Total: {total}
      </Container>
    </>
  );
};

export default UseMemoPage;
