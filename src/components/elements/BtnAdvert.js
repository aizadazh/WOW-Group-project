import styled from "styled-components";
import { colors} from "../../Config/Var";
import { Link } from "react-router-dom";


export const BtnAdvert = styled(Link)`
    margin: 0;
    padding: 0 70px;
    width: 30%;
    height: 2em;
    background: ${colors.prodbtn};
    display: flex;
    align-content: center;
    color: ${colors.white};
    font-family: Roboto;
    font-size: 1.2rem;
    text-decoration: none;
    &:hover {
        background: ${colors.prodbtnhov};
    }
`;


