import React, { Component } from "react";
import styled from "styled-components";
import SortSelect from "./SortSelect";
import PriseSelect from "./PriceSelect";
import SizeSelect from "./SizeSelect";
import ColorSelect from "./ColorSelect";
import ButtonSelect from "./BtnSelect";


const DropdownBlock = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
`;

export default class DropdownCategory extends Component {
    render() {
        return (
            <DropdownBlock>
                <SortSelect/>
                <PriseSelect/>
                <SizeSelect/>
                <ColorSelect/>
                <ButtonSelect/>
            </DropdownBlock>
        );
    }
}