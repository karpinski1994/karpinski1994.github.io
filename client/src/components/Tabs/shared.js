import styled from 'styled-components'

const TabButtons = styled.div`display: 'flex'`;

const TabItems = styled.div`
  /* position: 'relative'; */
  /* min-height: 160; */
  display: flex;
  flex-wrap: 'wrap';
  max-width: 100%;
`;

const TabItem = styled.div`
  display: ${({isOpen}) => {
    return isOpen ? 'flex' : 'none'
    }};
  
`;

function preventClose(state, changes) {
  if (changes.type === 'closing' && state.openIndexes.length < 2) {
    return {...changes, openIndexes: state.openIndexes}
  }
  return changes
}

function single(state, changes) {
  if (changes.type === 'opening') {
    return {openIndexes: changes.openIndexes.slice(-1)}
  }
  return changes
}

function combineReducers(...reducers) {
  return (state, changes) => {
    for (let reducer of reducers) {
      const result = reducer(state, changes)
      if (result !== changes) {
        return result
      }
    }
    return changes
  }
}

export {
  TabItem,
  TabItems,
  TabButtons,
  combineReducers,
  preventClose,
  single,
}
