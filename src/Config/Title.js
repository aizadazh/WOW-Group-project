import styled from "styled-components";
import { colors, font_size } from "./var";

const Title = styled.h2`
border-bottom:2px dotted #cc6600;
margin-top:20px;
margin-bottom:10px;
padding-top:0px;
padding-bottom:5px;
font-size:${font_size.title};
font-weight:bold;
color:${colors.dark_2};
font-family:Tahoma, Geneva, sans-serif;
letter-spacing:1px;
 
`;
const SmTitle = styled.h2`
    font-size:${font_size.title_sm};
	text-transform:uppercase;
	font-family:Tahoma, Geneva, sans-serif;
	font-weight:bold;
	letter-spacing:2px;
	color:${colors.dark_2};
	border-bottom:2px solid #cccccc;
`;
export { Title, SmTitle };