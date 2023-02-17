import { useEffect, useState } from "react"
import Cartt from "./cart"
import axios from "axios"
function Product() {
    const [products, setp] = useState([])
    const [cart,setc]=useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res) => {
            setp(res.data)
            console.log(res.data)
        })
    },[])
    function addt(product){
       setc([...cart,{...product,count:1}])
    }
    function isProductInCart(product){
        var x=cart.find(function(cp){
            if(cp.title===product.title){
                return true
            }
            else{
                return false
            }
        })
        return x
    }

    function getprod(product){
        var x=cart.find(function(cp){
            if(cp.title===product.title){
                return true
            }
            else{
                return false
            }
        })
        return x?x.count:0
    }
    function inCount(product){
        var temp=cart.map((cp)=>{
            if(cp.title===product.title){
                cp.count=cp.count+1
            }
            return cp 
        })
        setc([...temp])


    }
    function decCount(product){
        var temp=cart.map((cp)=>{
            if(cp.title===product.title){
                cp.count=cp.count-1

                if(cp.count<=0){
                    cp.count=0
                }
            }
           
            return cp 
        })
        setc([...temp])

    }
    return (
        <div className='d-flex flex-wrap border border-4  border-info p-2 w-100'>

            <div className="w-50">
                {products.length > 0 && (
                    products.map((product) => {

                        return <li className="d-flex">
                            <img src={product.image} width='100px' alt="" />
                            <div className="p-4">
                                <h4>  {product.title}</h4>
                                <h3>{product.price}</h3>
                                {
                                    isProductInCart(product) && (
                                        
                                    <>
                                    <button onClick={()=>{decCount(product)}}>-</button>
                                    <b>{getprod(product)}</b>
                                    <button onClick={()=>{inCount(product)}}>+</button>
                                    </>)
                                }

                                {
                                    !isProductInCart(product) &&
                                (<button onClick={()=>{addt(product)}}> Add to Cart</button>)
                                }
                               
                                
                            </div>
                        </li>
                    })
                )}
            </div>
            <div className="w-50">
                <Cartt cart={cart}/>
            </div>
        </div>
    )
}
export default Product