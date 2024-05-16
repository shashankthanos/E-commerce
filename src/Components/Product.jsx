import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Product = ({cart,setCart}) => {
    const [product, setProduct] = useState()

    let navigate=useNavigate()

    let param = useParams()
    console.log(param);
    let id = param.id

    let cartButton=()=>{
        setCart([...cart,product])
        navigate('/cart')
    }

    useEffect(() => {
        fetch(`http://dummyjson.com/products/${id}`)
            .then(resp => resp.json()).then(data => setProduct(data))
    }, [id])

    if (!product) {
        return <div>
            loading........
        </div>
    }
    return (
        <div className=' h-50 w-50 m-5 '>
            <div id="carouselExampleControls" className="carousel slide h-75" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={product.images[2]} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={product.images[3]} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={product.images[1]} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </button>
            </div>
            <div>
                <button className='btn btn-primary' onClick={()=>navigate('/')}>back</button>
                <button className='btn btn-primary' onClick={cartButton}>Add to Cart</button>               
            </div>
        </div>
    )
}

export default Product