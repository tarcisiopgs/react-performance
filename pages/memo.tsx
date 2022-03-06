import type { NextPage } from 'next';
import { memo } from 'react';
import { Container } from 'react-bootstrap';
import { loremIpsum } from 'lorem-ipsum';
import { v4 as uuidv4 } from 'uuid';

import Header from '../components/header';

interface DataProps {
  id: string;
  title: string;
}

interface ChildProps {
  data: DataProps;
}

const data = Array.from({ length: 1000 }, () => ({
  id: uuidv4(),
  title: loremIpsum(),
}));

const ChildComponent = ({ data }: ChildProps) => {
  return (
    <div>
      <span>{data.id}</span>
      <p>{data.title}</p>
    </div>
  );
};

const Child = memo(ChildComponent, (prevProps, nextProps) => {
  return Object.is(prevProps, nextProps);
});

const MemoPage: NextPage = () => {
  return (
    <>
      <Header />
      <Container>
        <br />
        <h1>memo</h1>
        <br />
        {data.map(item => (
          <Child key={item.id} data={item} />
        ))}
      </Container>
    </>
  );
};

export default MemoPage;
