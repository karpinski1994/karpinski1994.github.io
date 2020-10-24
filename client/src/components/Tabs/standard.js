import React from 'react'
import {TabItem, TabItems, TabButtons} from './shared'
import Tabs from './tabs'
import TabButton from './TabButton';

function StandardTabs({items}) {
  return (
    <Tabs>
      {({openIndexes, handleItemClick}) => (
        <>
          <TabButtons>
            {items.map((item, index) => (
              <TabButton
                title={item.title}
                key={item.title}
                isOpen={openIndexes.includes(index)}
                onClick={() => handleItemClick(index)}
              />
            ))}
          </TabButtons>
          <TabItems>
            {items.map((item, index) => (
              <TabItem
                key={index}
                isOpen={openIndexes.includes(index)}
              >
                {items[index].contents}
              </TabItem>
            ))}
          </TabItems>
        </>
      )}
    </Tabs>
  )
}

export {StandardTabs}