import styled from "styled-components";
import { colors} from "../../Config/Var";
import { Link } from "react-router-dom";


export const BtnProduct = styled(Link)`
    margin: 0;
    padding: 0 70px;
    width: 100%;
    height: 25px;
    background: ${colors.prodbtn};
    display: flex;
    align-content: center;
    color: ${colors.white};
    font-family: Roboto;
    font-size: 1.2rem;
    text-decoration: none;
    
`;


