import React from 'react'
import { shallow } from 'enzyme'
import TabHeader, {Title} from '../../containers/Products/Tabs/index'

describe('the TabHeader component', () => {

  it('should render with a dynamic title', () => {
    const title = 'Test app';
    const component = shallow(<TabHeader title={title} />);
    expect(component.text()).toEqual(title);    
  })
  
})
