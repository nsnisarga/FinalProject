import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import "./Card.css"

const foodItems = [
  {
    imageUrl:
      'https://frozenbottle.com/cdn/shop/products/OhSoFruity.png?v=1673937747',
    title: 'GadBad Icecream',
    desc:"Gadbad Ice Cream - the best Mangalorean style layered ice cream dessert cups right at your doorstep. Few flavors of ice cream, nuts, fruits, syrup, jelly are all that you need. And you can make this Gudbud Ice Cream in just 5 mins!"
  },
  {
    imageUrl:
      'https://www.golokaso.com/wp-content/uploads/2017/02/GG-Lokaso-Blogpost49-Spicy-Margao-Fish-Thali-1024x1024.jpg',
    title: 'Fish Thali ',
    desc:"Fish Thali – consisting of Boiled Rice, Bangude Pulimunchi, (Mackerel Curry), Bangude Rava Fry (Mackerel Rava Fry), Cabbage Stir fry, salad and chapatis. This is how a regular meal at a Mangalorean fish eating family looks like, except for the chapatis.",

  },
  {
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBWwU2nsmSMus-QETSvU-cSECpuQ9F4WjaLQ&usqp=CAU',
    title: 'Gobu Manchurian', 
    desc:"Get ready to savor every bite of this tasty Gobi Manchurian! This popular Indian-Chinese recipe is filled with so much flavor and deliciousness. Make this popular dish in two ways by tossing fried cauliflower florets in a spicy, sweet-sour, umami sauce. Serve dry gobi manchurian as an appetizer snack and gobi manchurian with gravy as a main.", },
    {
      imageUrl:
        'https://img.freepik.com/free-photo/spaghetti-seafood-with-tomato-sauce-decorated-with-beautiful-ingredients_1150-26427.jpg?size=626&ext=jpg&ga=GA1.2.466923995.1693928191&semt=sph',
      title: 'Spaghetti',
      desc:"Spaghetti is a long, thin, solid, cylindrical pasta. It is a staple food of traditional Italian cuisine. Like other pasta, spaghetti is made of milled wheat, water, and sometimes enriched with vitamins and minerals. Italian spaghetti is typically made from durum-wheat semolina. ",
  
    },
    {
      imageUrl:
        'https://bing.com/th?id=OSK.2a20f4f6dcd9d453b879d295189aed8f',
      title: 'Dum Biryani ',
      desc:"Crave Biryani every now and then? Then, here's a quick and easy recipe to satiate your cravings. It is such a versatile dish that various kinds of biryanis can be prepared using different vegetables and meats. Whichever part of India you are in, there is an amazing chicken dum biryani recipe waiting to be enjoyed! Here, is the step-by-step method of a mouth-watering dum biryani that you must try at home.",
  
    },
    
    {
      imageUrl:
        'https://www.familyfoodonthetable.com/wp-content/uploads/2016/05/Cheddar-chicken-burgers-5-667x1000.jpg',
      title: 'Cheesy Burger', 
      desc:"We all know that beef gets the spotlight when it comes to classic burgers, but when it comes to alternatives, chicken burgers can get a bad rap. They often get left in the dust by other choices like salmon, turkey, and veggies. While they can definitely be a tad bit lean, that doesn’t mean they have to be boring! We spiced up these chicken patties to ensure they definitely weren’t lacking in the flavor department", },
  
      
      
   
];

function Cards() {
  const [collapseStates, setCollapseStates] = useState(
    new Array(foodItems.length).fill(false)
  );

  const handleCollapse = (index) => {
    const updatedStates = [...collapseStates];
    updatedStates[index] = !updatedStates[index];
    setCollapseStates(updatedStates);
  };

  return (
    <div>
      <Container>
        <Row className="mt-4">
          {foodItems.map((item, index) => (
            <Col key={index} md={4} className='mb-4'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Button 
                     className="button bg-primary" 
                    onClick={() => handleCollapse(index)}
                  >
                    {collapseStates[index] ? 'Close' : 'Read More'} 
                  </Button>
                </Card.Body>
                <Collapse in={collapseStates[index]}>
                  <Card.Footer>
                    <p>{item.desc}</p>
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

export default Cards;