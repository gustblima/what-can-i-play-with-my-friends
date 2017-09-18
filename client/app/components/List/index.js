import React from 'react';

import Ul from './Ul';
import Wrapper from './Wrapper';
import immutable from 'immutable';

function List(props) {
  const ComponentToRender = props.component;
  let content = (<div></div>);
  if (props.items) {
    content = props.items.map((item, index) => (
      <ComponentToRender key={`item-${index}`} index={index} item={item} {...props} />
    ));
  } else {
    // Otherwise render a single component
    content = (<ComponentToRender />);
  }
  return (
    <Wrapper>
      <Ul>
        {content}
      </Ul>
    </Wrapper>
  );
}

List.propTypes = {
  component: React.PropTypes.func.isRequired,
  items: React.PropTypes.instanceOf(immutable.List),
};

export default List;
