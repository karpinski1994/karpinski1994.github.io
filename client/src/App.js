import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductsView from 'containers/Products/View';
import ProductsForm from 'containers/Products/Form';
import Nav from 'components/Nav';
import styled from 'styled-components';
import { Panel } from 'containers/Products/View';
import Slider from 'components/Slider';

import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  margin: 40px 40px;
`;

const getCurrentQrTypeFromUrl = (props) => {
  return props.match.params.type;
};

const FirstStepAdvanced = ({ id }) => (
  <div>
    <div>
      Choose Qr type
      <div>
        <Link to={'/createqr/standard/1'}>Standard</Link>
      </div>
      <div>
        <Link to={'/createqr/advanced/1'}>Advanced</Link>
      </div>
    </div>
  </div>
);
const SecondStepAdvanced = () => <div> SECOND STEP CONTENT</div>;
const ThirdStepAdvanced = () => <div> THIRD STEP CONTENT</div>;

const FirstStepStandard = () => (
  <div>
    {' '}
    <div>
      Choose Qr type
      <div>
        <Link to={'/createqr/standard/1'}>Standard</Link>
      </div>
      <div>
        <Link to={'/createqr/advanced/1'}>Advanced</Link>
      </div>
    </div>
  </div>
);
const SecondStepStandard = () => (
  <div>@£123@£$123@£@£231SECOND STEP STANDARD</div>
);
const ThirdStepStandard = () => <div>asdad123@£!@£ THIRD STEP STANDARD</div>;

// It would be better to do decorator that will count steps automatically
// use Map instead of Object

const stepsCounterService = new StepsCounter();

const Step = (props) => {
  console.log('XXXX LL: Step -> props', props);
  // console.log('Step navConfig: ', navConfig)
  return (
    <div onClick={() => props.onNavClick(props.id)}>
      <div>{props.children}</div>
    </div>
  );
};


const Wizard = (props) => {
  const curStep = +window.location.pathname[
    window.location.pathname.length - 1
  ];
  const url = window.location.pathname.replace(/\/\s*$/, '').split('/');
  const onNavClick = (id) => {
    // history.push(`${qrType}/${id}`);
  };

  // IMPORTANT! Note here we dont need to iterate over everything we can extract nav and redirect to appropriate step's conent
  // or just to render something like children[currentStep (default 0/1)]
  // up to the person who will implement the details
  // then this component also will be easy to test 
  return (
    props.children && (
      <div>
        <ul>
          {props.children.map((child, id) => {
            console.log('chid: ', child);
            return (
              <div>
                <Link to={`/createqr/${url[2]}/${id}`}>
                  {child.props.navConfig.title} {child.props.navConfig.icon}
                </Link>
              </div>
            );
          })}
        </ul>
        <div>------------------------</div>
        {React.Children.map(props.children, (child, id) => {
          // stepsCounterService.addStep(qrType)
          // console.log('steps: ', stepsCounterService.getStepsConfig())
          if (id === curStep) {
            // IMPORTANT here we can inject whatever we want to child
            // ex. transfer of information wheter the step is finished
            return React.cloneElement(child, {
              id,
              onNavClick,
              ...child.props,
              ...child.children,
            });
          }
          return null;
        })}
      </div>
    )
  );
};

const StepNav = ({ children }) => <div>swinja</div>;

const advancedStepsFactory = () => {
  return [
    <Step navConfig={{ title: 'zero step', icon: 'swine' }}>
      <FirstStepAdvanced />
    </Step>,
    <Step
      navConfig={{
        title: 'First step',
        icon: 'Star',
      }}
    >
      <SecondStepAdvanced />
    </Step>,
    <Step
      navConfig={{
        title: 'Second step',
        icon: 'Star',
      }}
    >
      <ThirdStepAdvanced />
    </Step>,
    <Step
      navConfig={{
        title: 'Third step',
        icon: 'Star',
      }}
    >
      <div>Forth step</div>
    </Step>,
    <Step
      navConfig={{
        title: 'Forth step',
        icon: 'someicon',
      }}
    >
      <span>Fifth step</span>
    </Step>,
     <Step
     navConfig={{
       title: 'Eight step',
       icon: 'someicon',
     }}
   >
     <span>Fifth step</span>
   </Step>,
  ];
};
// decoupling class from instances
// it is a quasi factory (compound components)
// LOOK HOW EASY IS TO TEST SUCH A COMPONENT/ RESUE
const standardStepsFactory = () => {
  return [
    <Step navConfig={{ title: 'StandardSteps first step', icon: 'swine' }}>
      <FirstStepStandard />
    </Step>,
    <Step
      navConfig={{
        title: 'Second step',
        icon: 'Star',
      }}
    >
      <SecondStepStandard />
    </Step>,
    <Step
      navConfig={{
        title: 'Third step',
        icon: 'Star',
      }}
    >
      <div>Third step standard</div>
    </Step>,
    <Step
      navConfig={{
        title: 'Forth step',
        icon: 'someicon',
      }}
    >
      <span>forth step standard</span>
    </Step>,
    <Step
      navConfig={{
        title: 'Forth step',
        icon: 'someicon',
      }}
    >
      <span>Another step standard CONTENT</span>
    </Step>,
    <Step
      navConfig={{
        title: 'Forth step',
        icon: 'someicon',
      }}
    >
      <span>YADADAADADA</span>
    </Step>,
  ];
};
// ANOTHER EASY TO TEST COMPONENT
const PopulatedWizard = (props) => {
  return (
    <Wizard>
      {/* first step common for every path */}
      {[
        <Step
          navConfig={{
            title: '0000000000',
            icon: '0000000',
          }}
        >
          <span>
            Choose Qr type
            <div>
              {/* IMPORTANT Note It looks like hardcoded like calum did but here we have less code to change with every addition / removal of step */}
              {/* another thing is links will come from BE (qrtypes) */}
              <Link to={'/createqr/standard/0'}>Standard</Link>
            </div>
            <div>
              <Link to={'/createqr/advanced/0'}>Advanced</Link>
            </div>
          </span>
        </Step>,
        ...stepsStrategy(),
      ]}
    </Wizard>
  );
};

// IMPORTANT Note ok this is object oriented (in react it is called Compound components), but component under the hood are just objects
// it is also functional - input / output oriented with the difference that here input is a url and type  
const stepsStrategy = () => {
  const url = window.location.pathname.replace(/\/\s*$/, '').split('/');
  const qrType = url[2];
  // IMPORTANT Note - strategy deciding about path in a runtime without 'asking for it' - 'tell dont ask'
  // https://softwareengineering.stackexchange.com/questions/157526/explanation-on-how-tell-dont-ask-is-considered-good-oo
  // https://medium.com/better-programming/design-patterns-using-the-strategy-pattern-in-javascript-3c12af58fd8a
  switch (qrType) {
    case 'advanced':
      return advancedStepsFactory();
      break;
    default:
      return standardStepsFactory();
    // code block
  }
};

const Home = () => {
  const qrTypes = Object.entries(stepsCounterService.getStepsConfig());
  // links also genereted dinamically from service
  return (
    <div>
      Choose Qr type
      <div>
        
        <Link to={'/createqr/standard/1'}>Create a QR</Link>
      </div>
    </div>
  );
};


const qrTypes = ['standard', 'advanced'];

const Comp = () => <div>COMP</div>;
// TODO: Add better RWD
function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <div id="nav">
          <Link to="/">Home</Link>
        </div>
        <Content>
          <Route path="/" exact component={Home} />

          <Route path={`/createqr/:type/:id`} component={PopulatedWizard} />
          {/* it is just chaning url */}
          {/* <button >back</button>
          <button >next</button> */}
        </Content>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
