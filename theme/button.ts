
import styled from "styled-components";

  const Button = styled.button`
  background: ${props => props.theme.colors.blue};
  color: "#fffff";
  color:white;
  font-size: 1.1em;
  margin: 1em;
  padding: 0.25em 1em;

  font-family: 'ManropeLight';
  width: 12rem;
  height: 2.5rem;
  cursor: pointer;


  border: ${props => props.theme.colors.blue};
  border-radius: 3px;
`;

 const ButtonDark = styled.button`
  background: ${props => props.theme.colors.black};
  color: #ffffff;
  color:white;
  font-size: 1.1em;

  padding: 0.25em 1em;

  font-family: 'ManropeLight';
  width: 10rem;
  height: 2.5rem;
cursor: pointer;


  border: ${props => props.theme.colors.blue};
  border-radius: 3px;
`;



export {Button , ButtonDark};
