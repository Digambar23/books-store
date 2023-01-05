import { useState } from 'react';

export const ExUsestate = () => {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState('');
  const [config, setConfig] = useState({
    count: 0,
    name: ''
  });

  const handleCount = (type) => {
//   setName(type);

    if (type === 'inc') {
    //   setCount(count + 1);
    const obj = {
        name: type,
        count: config.count + 1
    }
    setConfig(obj);
    } else {
    //   setCount(count - 1);
    const obj = {
        name: type,
        count: config.count - 1
    }
    setConfig(obj);
    }
    console.log('handleCount', type);
  };
  return (
    <>
    <div style={{ display: 'flex' }}>
      <button onClick={() => handleCount('dec')}>Decrement</button>
      <div style={{ marginRight: '10px', marginLeft: '10px' }}>
        count : {config.count}
      </div>
      <button onClick={() => handleCount('inc')}>Increment</button>
    </div>
    <h1>My name is {config.name}</h1>
    </>
  );
};
