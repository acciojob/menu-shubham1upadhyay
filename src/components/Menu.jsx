import React from 'react';
import '../styles/Menu.css';

const Menu = ({dishes})=>{

    return (
       
        <div className='grand-father'>
            {dishes.map((x)=>
            <div className='father'>
                <div className='son1'>
                    <img src={x.img} alt='image' />
                </div>
                
                <div className='son2'>

                    <div className='son2-child1'>
                        <h3 className='title'>{x.title}</h3>
                        <h3 className='price'>$ {x.price}</h3>
                    </div>

                    <div className='son2-child2'>
                        <p>{x.desc}</p>
                    </div>


                </div>

            </div>
        )}
        </div>

    );
}

export default Menu;