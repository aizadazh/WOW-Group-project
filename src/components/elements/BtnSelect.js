import styled from "styled-components";
import { colors} from "../../Config/Var";

export const BtnSelect = styled.button`
    margin: 0;
    padding: 0 25px ;
    width: 100%;
    height: 30px;
    background: ${colors.prodbtn};
    display: flex;
    color: ${colors.white};
    font-family: Roboto;
    font-size: 1rem;
    &:hover {
        background: ${colors.prodbtnhov};
    }
`;


