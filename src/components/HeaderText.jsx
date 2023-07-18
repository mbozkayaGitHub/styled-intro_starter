import styled from 'styled-components';



const HeaderText = styled.h1`
 /* color: ${({color})=> (color ? "hotpink" : "black")}; */
color: ${({color})=> (color || "yellow")} ;
background-color:${({bgrenk})=> (bgrenk || "white")} ;
font-size:2rem;
text-align: center;

`;

export default HeaderText;
