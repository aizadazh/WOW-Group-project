import styled from "styled-components";
import { colors} from "../../Config/Var";

export const BtnSelect = styled.button`
    margin: 0 auto;
    width: 100%;
    height: 30px;
    background: ${colors.prodbtn};
    display: flex;
    color: ${colors.white};
    font-family: Roboto;
    font-size: 1rem;
    border: 0px;
    border-radius: 3px;
    displey: flex;
    justify-content: center;
    &:hover {
        background: ${colors.prodbtnhov};
    }
`;


