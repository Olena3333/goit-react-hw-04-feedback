import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  box-shadow: 0px 4px 10px 4px gray;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  gap: 20px;
  align-items: center;
  max-width: 800px;
  padding: 20px;
`;

export const StyledBtnList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  & button {
    margin: 10px;
    padding: 10px;
    background-color: #cfcfcf;
  }
  & button:hover {
    background-color: #091ec2;
    color: white;
  }
`;
