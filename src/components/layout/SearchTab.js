import React, { Component } from "react";
import { TabBox, TabInput, TabLabel, TabButton, TabIcon, TabTitleText,SearchBox } from "../../Config/TabStyle";
import { FiSearch } from "react-icons/fi";

class SearchTab extends Component {  
    render(){
      return (
        <SearchBox>
            <form>
                <div>
                <TabTitleText>тема</TabTitleText>
                    <TabBox>
                        <TabInput type="text"  placeholder="&nbsp;"/>
                        <TabLabel>What are you looking for? </TabLabel>
                        <TabButton>
                          <TabIcon><FiSearch/></TabIcon>
                        </TabButton>
                    </TabBox>
                </div>
            </form>       
            </SearchBox>          
      )
    }
  }
export default SearchTab