import type { NextPage } from 'next';
import { useCallback } from 'react';
import { Button, Container } from 'react-bootstrap';

import Header from '../components/header';

interface ChildProps {
  onClick: () => void;
}

const FirstChild = ({ onClick }: ChildProps) => {
  return (
    <div>
      <h2>First child</h2>
      <br />
      <SecondChild onClick={onClick} />
    </div>
  );
};

const SecondChild = ({ onClick }: ChildProps) => {
  return (
    <div>
      <h3>Second child</h3>
      <br />
      <ThirdChild onClick={onClick} />
    </div>
  );
};

const ThirdChild = ({ onClick }: ChildProps) => {
  return (
    <div>
      <h4>Third child</h4>
      <br />
      <Button onClick={onClick}>Press me!</Button>
    </div>
  );
};

const UseCallbackPage: NextPage = () => {
  const handleClick = useCallback(() => {
    alert('Element click');
  }, []);

  return (
    <>
      <Header />
      <Container>
        <br />
        <h1>useCallback</h1>
        <br />
        <FirstChild onClick={handleClick} />
      </Container>
    </>
  );
};

export default UseCallbackPage;
