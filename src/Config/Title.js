import styled from "styled-components";
import { colors, font_size } from "./Var";

export const Title = styled.h1`
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
export const SmTitle = styled.h2`
	margin-top: 10px;
	margin-bottom: 10px;
	padding-left: 5px;
	font-family: Roboto;
	font-size: 1.8rem;
	font-weight: 400;
	color: #040505;
`;
