import React, { Component } from "react";
import styled from "styled-components";
import SortSelect from "./SortSelect";
import PriseSelect from "./PriceSelect";


const DropdownBlock = styled.div`
    display: flex;
    justify-content: space-between;

`;


export default class DropdownCategory extends Component {
    render() {
        return (
            <DropdownBlock>
                <SortSelect/>
                <PriseSelect/>
            </DropdownBlock>
           
        );
    }
}