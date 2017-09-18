import styled from 'styled-components';
import Name from './Name'
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border:2px solid rgba(0,0,0, 0.05);
  background-color:rgba(43, 54, 71, 0.3);
  border-radius:5px;
  padding-left:5px;

  ${props => props.selected && `
    -webkit-box-shadow: 0px 0px 8px 0px rgba(180,200,250,1);
    -moz-box-shadow: 0px 0px 8px 0px rgba(180,200,250,1);
    box-shadow: 0px 0px 8px 0px rgba(180,200,250,1);
    border: 1px solid #b4c8fa;
    background-color: rgba(0,0,0,0.3);
    z-index:1;
  `}
  
  ${props => props.public && `
    &:hover {
      background-color:rgba(0,0,0,0.5);
      cursor:pointer;
      
    }
  `}

  &:hover ${Name} {
    color:'white';
  }

${props => !props.public && `
    background-color:rgba(100,0,0,0.2);
`}

  ${Name}{
    color:${props => props.selected ? 'white' : '#848484'};
  }
  .private-profile{
    display: flex;
    position:absolute;
    padding:20px;
    right:0;
    top:5;
    color:darkred;
    font-size:0.6em;
  }
`;

export default Wrapper;
