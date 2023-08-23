import React, { useState, useEffect } from 'react';
import styled from 'styled-components'; // Import styled components
import ProductItem from '../ProductItem';

const ProductsContainer = styled.div`
  margin-top: 10vh;
  padding:20px;
  text-align:start;
`;

const Heading = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  margin-top:40px;
`;

const StyledList = styled.ul`
  list-style: none;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 20px;
  max-width:270px;
`;

const Products = () => {
  const api = 'http://localhost:5100/products';
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API and update the state
    fetch(api)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <ProductsContainer>

      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://img.freepik.com/free-vector/flat-spring-twitter-header_23-2149257350.jpg?size=626&ext=jpg&ga=GA1.2.1493657015.1690885278&semt=ais" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://img.freepik.com/free-vector/beautiful-banner-floral-leaves-template_21799-2812.jpg?size=626&ext=jpg&ga=GA1.2.1493657015.1690885278&semt=ais" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://img.freepik.com/free-psd/spring-sale-social-media-cover-template_47987-15231.jpg?size=626&ext=jpg&ga=GA1.2.1493657015.1690885278&semt=ais" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <Heading>Products</Heading>
      <StyledList>
        {products.map(product => (
          <ListItem key={product._id}>
            <ProductItem
            id={product._id}
              img={product.image}
              name={product.productname}
              description={product.description}
              price={product.price}
            />
          </ListItem>
        ))}
      </StyledList>
    </ProductsContainer>
  );
};

export default Products;
