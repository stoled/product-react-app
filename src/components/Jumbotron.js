import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import backImage from '../assets/back.jpg';

const Styles = styled.div``;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid>
      <Container>
        <h1>Fluid jumbotron</h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space of
          its parent.
        </p>
      </Container>
    </Jumbo>
  </Styles>  
)