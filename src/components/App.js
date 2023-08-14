import React from 'react';
import Menu from '../components/Menu.jsx';
import '../styles/App.css';
import { useState } from 'react/cjs/react.development.js';
function App() {

  const menuItems = [
    {
      id: 1,
      title: 'buttermilk pancakes',
      category: 'breakfast',
      price: 15.99,
      img: 'https://www.allrecipes.com/thmb/UXv_24LIE376MRgVvZDBJKa856w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/24530-ButtermilkPancakes-II-mfs-4X3-3385-b9e08648074145d18c538731c2be4215.jpg',
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: 'diner double',
      category: 'lunch',
      price: 13.99,
      img: 'https://media.istockphoto.com/id/1268633498/photo/double-burgers-at-diner.jpg?s=612x612&w=0&k=20&c=CpKoRkrmH_Z6F1m7OSE773-2dbxvl1HaH79zetf3VSg=',
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: 'godzilla milkshake',
      category: 'shakes',
      price: 6.99,
      img: 'https://i2-prod.glasgowlive.co.uk/incoming/article16335490.ece/ALTERNATES/s1200b/0_DSC_5334-copy-1.jpg',
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: 'country delight',
      category: 'breakfast',
      price: 20.99,
      img: 'https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/egczbsry/23920a22-00e5-487e-b806-12cce921d489',
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: 'egg attack',
      category: 'lunch',
      price: 22.99,
      img: 'data:image/jpeg;base64,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',
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: 'oreo dream',
      category: 'shakes',
      price: 18.99,
      img: 'https://loskitchenco.com/wp-content/uploads/2020/07/IMG_2722-scaled.jpg',
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: 'bacon overflow',
      category: 'breakfast',
      price: 8.99,
      img: 'https://www.lovebakesgoodcakes.com/wp-content/uploads/2022/04/Bacon-Wrapped-Jalapeno-Poppers-square.jpg',
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: 'american classic',
      category: 'lunch',
      price: 12.99,
      img: 'https://media.cnn.com/api/v1/images/stellar/prod/170206144051-cobb-salad-2.jpg?q=w_3008,h_2000,x_0,y_0,c_fill',
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: 'quarantine buddy',
      category: 'shakes',
      price: 16.99,
      img: 'data:image/jpeg;base64,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',
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

  const [category, setCategory] = useState('all');
  const [dishes, setDishes] = useState(menuItems);

  const filterDishesByCategory = (category) => {
    if (category === 'all') {
      setDishes(menuItems);
    } else {
      const filteredDishes = menuItems.filter((dish) => dish.category === category);
      setDishes(filteredDishes);
    }
    setCategory(category);
  };

  return (
    <>
    
    <div className='heading'>
      <h1>Our Menu</h1>
      <hr className='heading-hr' />
    </div>
    
    <div className='filter-btns'>
      <button 
      onClick={() => filterDishesByCategory('all')} type='button'>All</button>
      <button
      onClick={() => filterDishesByCategory('breakfast')}
      type='button'>Breakfast</button>
      <button
      onClick={() => filterDishesByCategory('lunch')} type='button'>Lunch</button>
      <button
      onClick={() => filterDishesByCategory('shakes')}
      type='button'>Shakes</button>
    </div>

     <div className='parent'>
       <Menu dishes={dishes} />
     </div>
    
     </>
  );
}

export default App;