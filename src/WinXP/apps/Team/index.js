import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const Team = () => {

  return (
    <Div>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>

      <h1>$GONE Interns</h1>
       </Div> 
  );
};
const Div = styled.div`
height: 100%;
width: 100%;
position: absolute;
display: flex;
overflow: hidden;
flex-direction: column;
background: linear-gradient(to right, #edede5 0%, #ede8cd 100%);
`;


export default Team;