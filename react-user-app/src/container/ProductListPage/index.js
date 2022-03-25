import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductBySlug } from '../../actions/product.actions';
import Layout from '../../components/Layout';
import './style.css';

const ProductListPage = (props) => {


    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    const [priceRange, setPriceRange] = useState({
        under5k: 5000,
        under10k: 1000,
        under15k: 15000,
        under20k: 20000,
        under25k: 25000,
        under30k: 30000,
        under35k: 35000,
        under40k: 40000,
        under45k: 45000,
        under50k: 50000
    })

    useEffect(() => {
        const { match } = props;
        dispatch(getProductBySlug(match.params.slug))
    }, [])

    return (


        <Layout>

            {
                Object.keys(product.productByPrice).map((key, index) => {
                   return (
                    <div className='card'>
                    <div className='cardHeader'>
                        <div>  { props.match.params.slug } under {priceRange[key]} </div>
                        <button> view All </button>
                    </div>
                    <div style={{ display: 'flex' }}>
                        {
                            product.productByPrice[key].map(product =>
                                <div className='productContainer'>
                                    <div className='productImgContainer'>
                                        <img />
                                    </div>
                                    <div className='productInfo'>
                                        <div style={{ margin: '5px 0' }}> {product.name} </div>
                                        <div>
                                            <span> 4.3 </span>
                                            <span> 33344 </span>
                                        </div>
                                        <div className='produtPrice'> {product.price} </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
                   )
                })
            }


            {/* {
                Object.keys(product.productByPrice).map((key, index) => {
                    return (
                        <Card style={{ width: '18rem' }}>
                            <div> { props.match.params.slug } {priceRange[key]} </div>
                            {
                                product.productByPrice[key].map(product => 
                                    <>
                                        <Card.Img variant="top" src="" />
                            <Card.Body>
                                <Card.Title> {product.name} </Card.Title>
                                <Card.Text>
                                    <div> {product.price} </div>
                                </Card.Text>
                                <Button variant="primary">View All</Button>
                            </Card.Body>
                                    </>
                                )
                            }

                        </Card>
                    )
                })
            } */}

        </Layout>



    )
}

export default ProductListPage;