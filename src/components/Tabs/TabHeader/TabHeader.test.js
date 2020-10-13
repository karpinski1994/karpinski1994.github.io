import React from 'react'
import { shallow } from 'enzyme'
import TabHeader, {Title} from '../index'

describe('the TabHeader component', () => {

  it('should render with a dynamic title', () => {
    const title = 'Test app';
    const component = shallow(<TabHeader title={title} />);
    expect(component.text()).toEqual(title);    
  })
  
  // it('should render with a btns and handle the onClick event', () => {
  //   const mockGoBack = jest.fn();
  //   const mockOpenForm = jest.fn();
  //   const component = shallow(<TabHeader goBack={mockGoBack} openForm={mockOpenForm}/>)
  //   expect(component).toMatchSnapshot();
  //   const goBackBtn = component.find(TabHeaderButton).at(0)
  //   const openFormBtn = component.find(TabHeaderButton).at(1)
  //   expect(goBackBtn.exists()).toBe(true);
  //   expect(openFormBtn.exists()).toBe(true);
  //   goBackBtn.simulate('click');
  //   openFormBtn.simulate('click');
  //   expect(mockGoBack).toHaveBeenCalled();
  //   expect(mockOpenForm).toHaveBeenCalled();
  // })
  
  // it('should render with a Form btn', () => {
  //   const component = shallow(<TabHeader openForm={() => {}}/>)
  //   expect(component).toMatchSnapshot();
  // })

  
})
