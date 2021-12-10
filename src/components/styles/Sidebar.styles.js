import styled from 'styled-components';
import pokemonHollow from './fonts/PokemonHollow.ttf';

export const SidebarDiv =  styled.div`
  width: 25vw;
  height: 100vh;
  background-color: #ffffff;
  float: left;
  position: absolute;
  left: 0;
  box-shadow: 100px 0px 50px -8px #000000;
`;

export const SidebarHeader = styled.div`
  height: 10vh;
  background-color: #045de9;
  background-image: linear-gradient(315deg, #045de9 0%, #09c6f9 74%);
  padding-top: 1px;
  text-align: center;

  @font-face {
    font-family: 'Pokemon';
    src: url(${pokemonHollow});
    font-weight: 300;
    font-style: normal;
  }

  h1{
    font-family: 'Pokemon', sans-serif;
    margin-top: -5px;
    color: blue;
  }

`;

export const SidebarBody = styled.div`
  height: 89.9vh;
  width: 25vw;
  background-color: #ffffff;
  text-align: center;
  position : absolute;
`;