import { Collapse } from 'antd';
import "./Faq.css"
const { Panel } = Collapse;

const textone = " A dog is a type of domesticated animal. Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.";

const texttwo = "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
;

const textthree = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const textfour = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const textfive = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const App = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className='faq__container'>
    <div className='faq__container_primary'>
        <h1>What about us?</h1>
    </div>
    <div className='collaps__container'>
    <div className='collaps__container_sub'>
    <Collapse defaultActiveKey={['1']} onChange={onChange}>
      <Panel header="This is panel header 1" key="1">
        <p>{textone}</p>
      </Panel>
      <Panel header="This is panel header 2" key="2">
        <p>{texttwo}</p>
      </Panel>
      <Panel header="This is panel header 3" key="3">
        <p>{textthree}</p>
      </Panel>
      <Panel header="This is panel header 3" key="3">
        <p>{textfour}</p>
      </Panel>
      <Panel header="This is panel header 3" key="3">
        <p>{textfive}</p>
      </Panel>
    </Collapse>
    </div>
    </div>
    </div>
  );
};
export default App;