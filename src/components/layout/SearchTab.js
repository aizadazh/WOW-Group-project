import React, { Component } from "react";
import {SearchBox, Input, Label, SearchButton, SearchIcon} from "../../Config/HeaderTopStyle";

class SearchTab extends Component {  
    render(){
      return (
            <form>
                <div>
                    <SearchBox>
                        <Input type="text"  placeholder="&nbsp;"/>
                        <Label>What are you looking for?</Label>
                        <SearchButton>
                          <SearchIcon className="icon-search "></SearchIcon>
                        </SearchButton>
                    </SearchBox>
                </div>
            </form>       
                   
      )
    }
  }
export default SearchTab