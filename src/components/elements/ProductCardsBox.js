import React, { Component } from "react";
import styled from "styled-components";
import { Col} from "styled-bootstrap-grid";
//import CategoryCard from "./CategoryСard";
import DropdownCategory from "./DropdownCategory";
import { colors} from "../../Config/Var";
//import CategoryData from "../../data/category.json";


const MainProductBox = styled.div`
    display: flex;
    flex-direction: column;
    background: ${colors.white};
`;

const ProductBox = styled.div`
    display: flex;
    flex-wrap: wrap;
`;



export default class ProductCardBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
}
    componentDidMount() {
        fetch(`http://wow.kg/crm/api/?action=view&object=api_products&id=223`, {mode: 'no-cors'})
        .then(response => response.json())
        .then(json => { 
            this.setState({
                isLoaded: true,
                items: json,
            })
        });
    }
    
    render() {
        let {isLoaded, items} = this.state;

        if (!isLoaded) {
            return <div>Loading... </div>
        } else {
            return (
                <Col md={12} lg={10} xl={10}>
                    <MainProductBox>
                        <DropdownCategory/>
                        <ProductBox>
                        { items.map(item => (
                            <div key={item.id}>{item.id}</div>
                        ))}
                        </ProductBox>
                    </MainProductBox>
                </Col>
            );
        }
    }
        
}


// export default class ProductCardBox extends Component {
//     render() {
//         return (
//             <Col md={12} lg={10} xl={10}>
//                 <MainProductBox>
//                     <DropdownCategory/>
//                     <ProductBox>
//                     {
//                         CategoryData.map(function(item){
//                             return <CategoryCard key={item.id}/>
//                         })
//                     }
//                     </ProductBox>
//                 </MainProductBox>
//             </Col>
//         );
//     }
// }