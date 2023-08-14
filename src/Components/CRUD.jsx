const test = console.log
import { useState, useEffect } from "react";

let option = "movies"

const Crud = () => {

const [productArr, setProductArr] = useState([])
const [productIds, setProductIds] = useState([])

useEffect(() => {
    fetch(`http://localhost:5001/api/${option}`)
        .then(response => response.json())
        .then(console.log)
}, []);

test(productArr)

const productIdArr = productArr.map(product => setProductArr(product))
test(productIdArr)




















}





















export default Crud;