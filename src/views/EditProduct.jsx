import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Row,
  Col,
  Card,
  CardBody
} from 'reactstrap';



const EditProduct = () => {
  //get product with axios
  const initial_product={
    name: 'laptop',
    description: 'huge with good instructions',
    price: '11',
    Manufacturer: 'asus',
    Category: 'tech',
    image: null
  }


  const [product, setProduct] = useState({
    name: initial_product.name,
    description: initial_product.description,
    price: initial_product. price,
    Manufacturer: initial_product.Manufacturer,
    Category: initial_product.Category,
    image: null
  });

  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
  };


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProduct(prevProduct => ({
      ...prevProduct,
      image: file
    }));

    // Create image preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the product data to a backend
    console.log('Product submitted:', product);
    // Reset form after submission
    setProduct({
      name: '',
      description: '',
      price: '',
      Manufacturer: '',
      Category: '',

      image: null
    });

    setPreviewImage(null);
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md="8" lg="6">
          <Card>
            <CardBody>
              <h2 className="text-center mb-4">Edit your Product</h2>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="productName">Product Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="productName"
                    placeholder="Enter product name"
                    value={product.name}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="productDescription">Product Description</Label>
                  <Input
                    type="textarea"
                    name="description"
                    id="productDescription"
                    placeholder="Enter product description"
                    value={product.description}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="productPrice">Price</Label>
                  <Input
                    type="number"
                    name="price"
                    id="productPrice"
                    placeholder="Enter product price"
                    value={product.price}
                    onChange={handleChange}
                    min="0"
                    step="0.01"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="Manufacturer">Manufacturer</Label>
                  <Input
                    type="text"
                    name="manufacturer"
                    id="Manufacturer"
                    placeholder="Enter Manufacturer Name"
                    value={product.Manufacturer}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="Category">Category</Label>
                  <Input
                    type="text"
                    name="Category"
                    id="Category"
                    placeholder="Enter Category"
                    value={product.Category}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>


                <FormGroup>
                  <Label for="productImage">
                    <Button color="primary">Upload Image</Button>
                  </Label>
                  <Input
                    type="file"
                    name="image"
                    id="productImage"
                    onChange={handleImageChange}
                    accept="image/*"
                  />
                  {previewImage && (
                    <div className="mt-2 text-center">
                      <img
                        src={previewImage}
                        alt="Product Preview"
                        className="img-fluid rounded"
                        style={{ maxHeight: '200px' }}
                      />
                    </div>
                  )}
                </FormGroup>

                <Button
                  color="primary"
                  block
                  className="mt-3"
                >
                  Update Product
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EditProduct;
// here u can edit product