//import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { useState} from "react";
import Card from "../components/Card";
//import ProductItem from "./ProductItem";

const Products = (props) => {
    const [SearchValue,setSearchValue] = useState('');
    const Cards = [1,2,3,4,5,6,7,8,9,10,11,12];

    const onChangeHandle = (props) => {
        setSearchValue(props);
        console.log(SearchValue);
    }

   /* const AddCards = (props) => {
        //Cards.map((card)=>{
            //return(
                <h2>Holis</h2>
            //);
        //})
    }*/

    return(
        <div>
            <h1>Products</h1>
            <SearchBar onChange={onChangeHandle} value={SearchValue}/>
            {
                Cards.map((card,index) => {
                    return <Card key={index} title='Holis World!!'>Holis {card}</Card>
                })
            }
        </div>
    );
}

export default Products;