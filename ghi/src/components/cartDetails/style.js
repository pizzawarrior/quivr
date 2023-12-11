import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0vh;
  bottom: 0vh;
  right: 0;
  width: 61em;
  background: #e3f5fd;
  padding: 5em 10em;
  z-index: 2;
  font-family: "Montserrat", sans-serif;

  h2 {
    text-align: start;
    font-size: 28px;
    color: #0d5274;
    font-family: "Montserrat", sans-serif;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  /* overflow-y: scroll; */
  display: grid;

  h1 {
    color: #0d5274;
    font-family: "Lilita One", sans-serif;
    letter-spacing: 2px;
  }
`;

export const StyleTable = styled.table`
  width: 100%;
  text-align: start;
  border: 1px solid lightgray;
  border-collapse: collapse;
  border-radius: 5px;
`;

export const STHead = styled.thead`
  /* position: sticky; */
  /* border: 1px; */
  /* background-color: #c8d7de; */
  background-color: #f5fde3;
  z-index: 100;
  text-align: left;
`;

export const STHeadTR = styled.tr`
  /* background-color: lightgrey; */
`;

export const STH = styled.th`
  padding: 20px;
  /* color: white; */
`;

export const STH1 = styled.th`
  padding: 20px 0 20px 105px;
  /* color: white; */
`;

export const STBody = styled.tbody``;

export const STR = styled.tr``;

export const STD1 = styled.td`
  border: 1px solid lightgray;
  padding-left: 20px;
  width: 25%;

  img {
    /* padding-left: 100px; */
    margin-left: 55px;
    padding-top: 3px;
    height: 150px;
  }
`;

export const STD2 = styled.td`
  border: 1px solid lightgray;
  padding-left: 20px;
  width: 60%;
`;
export const STD3 = styled.td`
  border: 1px solid lightgray;
  padding-left: 20px;
  width: 10%;
`;

export const StyledTotal = styled.div`
  text-align: end;
  padding-right: 20px;
`;

export const P1 = styled.p`
  font-weight: bold;
`;
export const P2 = styled.p``;

export const Button1 = styled.button`
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  margin-top: 1rem;
  background-color: #e76215;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin-left: 90%;
`;
