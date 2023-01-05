// import logo from './logo.svg';
import './App.css';
// import ExUseEffect from './components/hooks/SelectBox';
// import { ExUsestate } from './components/hooks/exUsestate';
// import { Practice } from './components/practice/Practice';
import SelectBox from './components/hooks/SelectBox';
function App() {
  const options = [
    {
      "value": "1",
      "label": "Not Identified"
    },
    {
      "value": "2",
      "label": "Closed"
    },
    {
      "value": "3",
      "label": "Communicated"
    },
    {
      "value": "4",
      "label": "Identified"
    },
    {
      "value": "5",
      "label": "Resolved"
    },
    {
      "value": "6",
      "label": "Cancelled"
    }
  ];
  const optionsList = [
    {
      "value": "jack",
      "label": "Jack"
    },
    {
      "value": "lucy",
      "label": "Lucy"
    },
    {
      "value": "disabled",
      "label": "Disabled"
    },
    {
      "value": "Yiminghe",
      "label": "yiminghe"
    }
  ];
  return (
    <div className='App1'>
      <h1>Book Store</h1>
      {/* <ExUsestate />
      <ExUseEffect /> */}
      {/* <Practice /> */}
      <SelectBox list={options} />
      --------------------

      <SelectBox list={optionsList} /> 

    </div>
  );
}

export default App;
