import React from 'react';

import Item from './Item';
import Wrapper from './Wrapper';

function DoubleListItem(props) {
  return (
    <Wrapper>
      <Item>
        {props.item}
      </Item>
    </Wrapper>
  );
}

DoubleListItem.propTypes = {
  item: React.PropTypes.any,
};

export default DoubleListItem;
