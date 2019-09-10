// import React, { Component } from "react";
// import styled from "styled-components";
// import { colors } from "../../Config/Var";
// import ProdImg from "../../static/images/product.jpg";
// import { Link } from "react-router-dom";


// const ProductTextContSl = styled.div`
//     background: ${colors.white}; 
//     position: absolute; 
//     bottom: -10em; 
//     width: 100%; 
//     border-radius: 1em;
//     transition: all 0.4s;
    
// `;
// const ProductText = styled.p`    
//     padding: 0 0.5em; 
//     font-family: 'Roboto'; 
//     font-size: 0.8em;
//     color: ${colors.dark_3};
//     font-weight: 400; 
// `;
// const CardContainerSl = styled.div`
//     position: relative; 
//     width: 13em; 
//     height: 16em; 
//     display: flex; 
//     flex-direction: column; 
//     border-radius: 1em;  
//     transition: all 0.4s;      
//     &:hover {
//         border-radius: 1em; 
//         background: ${colors.white}; 
//         transition: all 0.6s; 
//         z-index: 3; 
//       }
//       &:hover ${ProductTextContSl} {
//         bottom: 0; 
//         z-index: 1; 
//         border-radius: 1em; 
//         transition: all 0.6s; 
//         overflow: hidden; 
//         color: ${colors.white}; 
//     }
// `;
// const ProductImage = styled.div`
//     border-radius: 1em; 
//     width: 13em; 
//     height: 16em; 
//     overflow: hidden;
// `;
// const Img = styled.img`
//     width: 13em; 
//     height: auto; 
//     transition: all 0.4s;
//     &:hover {
//         transition: all 0.6s; transform: scale(1.04);
//     }
// `;
// const SmTitle = styled.h2`
//     margin: 0;   
//     padding-left: 0.5em; 
//     padding-top: 0.5em;   
//     font-family: 'Roboto'; 
//     font-size: 1.2rem; 
//     font-weight: 400; 
//     color: ${colors.dark_3}
// `;
// const BtnProduct = styled(Link)`
//     margin: 0 auto;
//     padding: 0 3em;
//     width: 100%;
//     height: 1.5em;
//     background: ${colors.prodbtn};
//     display: flex;
//     align-content: center;
//     color: ${colors.white};
//     font-family: Roboto;
//     font-size: 1.2rem;
//     text-decoration: none;
//     &:hover {
//         background: ${colors.prodbtnhov};
//     }
// `;


// export default class WomenCard extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             items: [],
//             isLoaded: false,
//         }
//     }
//     componentDidMount() {
//         axios.get(`http://wow.kg/crm/api/?action=view&object=api_products&id=223`)
//           .then(res => {
//             const items= res.api_products;
//             this.setState({ items});
//           })
//       }
//     render() {  let {isLoaded, items} = this.state;
//     if (!isLoaded) {
//         return <div>Loading... </div>
//     }
//     else{
//     return (
//             <CardContainerSl>                            
//                 <ProductImage>
//                     <Img src={ProdImg}/>
//                 </ProductImage>
                
//                 {items.map(item => (
//                     <ProductTextContSl key={item.id}>                    
//                         <SmTitle>{item.price} SOM</SmTitle> 
//                         <ProductText>{item.description}</ProductText> 
//                         <BtnProduct>Подробнее</BtnProduct>                       
//                     </ProductTextContSl>                
//                 ))}
//             </CardContainerSl>
//         );
//     }
// }
// }
