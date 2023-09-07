import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import './Veg.css';

function Veg() {
  const [foodItems, setFoodItems] = useState([]);
  const [collapseStates, setCollapseStates] = useState([]);

  const handleCollapse = (index) => {
    const updatedStates = [...collapseStates];
    updatedStates[index] = !updatedStates[index];
    setCollapseStates(updatedStates);
  };

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/food/veg');
        const vegItems = response.data;
        setFoodItems(vegItems);
        setCollapseStates(new Array(vegItems.length).fill(false));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchFoodItems();
  }, []);

  return (
    <div>
      <h1>All veg items here!!</h1>
      <Container>
        <Row className="mt-5">
          {foodItems.map((item, index) => (
            <Col key={index} md={4} className='mb-5'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>{item.food}</Card.Title>
                  <Card.Text>{item.recipe}</Card.Text>
                  <Button 
                    className="button"
                    onClick={() => handleCollapse(index)}
                  >
                    {collapseStates[index] ? 'Close' : 'See Recipe'} 
                  </Button>
                </Card.Body>
                <Collapse in={collapseStates[index]}>
                  <Card.Footer>
                    <p>Collapsible content here</p>
                  </Card.Footer>
                </Collapse>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Veg;
