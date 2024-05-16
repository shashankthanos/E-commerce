import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({ data, search }) => {
    if (!data) {
        return <div>
            loading........
        </div>
    }
    return (
        <div className="container-fluid pl-5 d-flex flex-wrap">
            {
                data.filter(x => x.title.toLowerCase().includes(search)).map((api) => (
                    <div className="card m-5 w-25" style={{ width: "20rem" }} key={api.id}>
                        <img src={api.thumbnail} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{api.title}</h5>
                            <p className="card-text">{api.description}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <h6 className=''>&#8377;{`${((api.price * 80) - (api.price - api.discountPercentage))}`}</h6>
                                <strike>{`${api.price * 80}`}</strike>
                                <span className='text-primary'>{` ${api.discountPercentage}% off`}</span>
                            </li>
                            <li className="list-group-item text-danger">Stock:  {api.stock}  left</li>
                        </ul>
                        <div className="card-body">
                            <Link to={`${api.id}`} className="btn btn-outline-primary">View</Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Home