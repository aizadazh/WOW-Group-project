import React, { Component } from "react";
import { TabBox, TabInput, TabLabel, TabButton, TabIcon, TabTitleText} from "../../Config/TabStyle";

class SearchTab extends Component {  
    render(){
      return (
            <form>
                <div>
                <TabTitleText>тема</TabTitleText>
                    <TabBox>
                        <TabInput type="text"  placeholder="&nbsp;"/>
                        <TabLabel>What are you looking for?</TabLabel>
                        <TabButton>
                          <TabIcon className="icon-search "></TabIcon>
                        </TabButton>
                    </TabBox>
                </div>
            </form>       
                   
      )
    }
  }
export default SearchTab