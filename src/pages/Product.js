import React, { Component } from "react";
import CategoryData from "../data/category.json";


export default class Product extends Component{
    render(){
        const prodId = this.props.match.params.id;
        let prodCard;
        for(var i=0; i<CategoryData.length; i++){
            if(CategoryData[i].id===prodId){
                prodCard = CategoryData[i];
                break;
            }
        }
        if(prodCard===undefined)
            return <h2>Товар не найден</h2>;
        else
            return <h2>Товар {prodCard.name}</h2>;
    }
}