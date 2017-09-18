import React from 'react';
import { List } from 'immutable';
import Ul from './Ul';
import Li from './Li';

function TagsList(props) {
  const { tags } = props;
  if (tags === undefined || tags.length === 0) {
    return <h6>No Tags</h6>;
  }
  const list = tags.map((item, idx) => (
    <Li key={idx}>{item}</Li>
  ));
  return (
    <div>
      <Ul>
        {list}
      </Ul>
    </div>
  );
}

TagsList.propTypes = {
  tags: React.PropTypes.instanceOf(List),
};

export default TagsList;
