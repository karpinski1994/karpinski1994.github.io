import React from 'react';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon'
import {navItems} from 'constants/navItems';

export const navList = navItems.map(item => 
  <Link href={item.url} key={item.url}>
    <ListItem button>
      <ListItemIcon>
        <Icon>{item.icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={item.title} />
    </ListItem>
  </Link> 
);
