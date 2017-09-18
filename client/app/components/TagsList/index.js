import React from 'react';
import Ul from './Ul';
import Li from './Li';
import { List } from 'immutable';
function TagsList(props) {
    const {tags} =  props 
    console.log(tags)
    if(tags === undefined || tags.length === 0){
        return <h6>No Tags</h6>;
    }
    let list = tags.map((item, idx) => (
            <Li key={idx}>{item}</Li>
        ))
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
