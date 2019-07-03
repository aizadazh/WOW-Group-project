import styled from 'styled-components';
import { colors } from "../Config/Var";

const HeaderTopRightBlock = styled.div`
	padding-bottom: 0;
	padding-top: 0;
	width: 100%;
	display: flex;
	background: #f0f0f0;
	font-weight: bold;
	textDecoration: none;
	color: ${colors.black_1};
`;

const TopRightLinks = styled.div`
	width: 100%;
	margin-left: 80px;
	padding: 0;
	display: flex;
	align-content: space-between;
	justify-content: flex-end; 
	textDecoration: none;
`;
const TopRightLink1 = styled.div`
	margin-left: 20px; 
	padding: 0;
	display: flex;
	align-content: space-between;
	justify-content: flex-end;
	textDecoration: none;
	color: ${colors.black_1};
	&:hover {
        color: ${colors.srh};   
    }
`;
const UlRate = styled.ul`
    display: flex;
    list-style-type: none;
    width: 100%;
    justify-content: left;
    flex-direction: column;    
    align-items: flex-start;
   
    
`;
const LiRate = styled.li`
    margin-top: 15px;
    a {
    color: ${colors.a};
    }
    &:hover{
        color: ${colors.sub};
    } 
    
`;

export { HeaderTopRightBlock, TopRightLinks, TopRightLink1, UlRate, LiRate };
