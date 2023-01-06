import styled, { keyframes } from "styled-components";

function generateRandomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

const glowing = keyframes`
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
`;

export const Backdrop = styled.div`
  display: grid;
  place-items: center;
  background-color: #${generateRandomColor()};
  width: 100vw;
  height: 100vh;
`;

export const QuoteBox = styled.div`
  background-color: #${generateRandomColor()};
  border-radius: 15px;
  padding: 15px;
  width: 30%;
  min-width: 250px;
`;

export const Marks = styled.span`
  font-family: "Moon Dance", cursive;
  font-size: 40px;
  line-height: 0;
`;

export const Quote = styled.blockquote`
  text-align: center;
  filter: drop-shadow(0 0 4px white);
  font-family: "Playfair Display", serif;
`;

export const Author = styled.p`
  font-family: "Moon Dance", cursive;
  text-align: right;
  font-size: 20px;
  filter: drop-shadow(0 0 4px white);
  margin-bottom: 15px;
`;

export const Button = styled.button`
  font-family: "Playfair Display", serif;
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: ${glowing} 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #222;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
`;

export const Tweet = styled.a`
  color: black;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 50%;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  background-color: transparent;
  border: none;
  outline: none;
  vertical-align: bottom;
  margin-left: 15px;
  display: inline-block;
  &:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: ${glowing} 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 50%;
  }
`;
