import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 3em;
  display: flex;
  align-items: center;
  position: relative;
  border-top: 1px solid #eee;
  flex: 1 0 25%;
  &:first-child {
    border-top: none;
  }
`;

export default Wrapper;
