import './Experts.css'
import React from 'react';
import expert1 from '../../../img/expert-1.jpg'
import expert2 from '../../../img/expert-2.jpg'
import expert3 from '../../../img/expert-3.jpg'
import expert4 from '../../../img/expert-4.jpg'
import Expert from '../Expert/Expert';

const experts = [
    {id:1,name:"Adam Lin" , img:expert1},
    {id:1,name:"Ady Linds" , img:expert2},
    {id:1,name:"Indana Jonsa" , img:expert3},
    {id:1,name:"Hash Nalin" , img:expert4},
    {id:1,name:"Adam Zamnus" , img:expert2},
    {id:1,name:"Kusab Sin" , img:expert1}
]

const Experts = () => {
    return (
        <div id='experts' className='container'>
            <h2 className='text-primary text-center my-4'>Our Experts</h2>
            <div className="row mx-auto">
                {
                   experts.map(expert=><Expert key={expert.id} expert={expert}></Expert>) 
                }
                
            </div>
        </div>
    );
};

export default Experts;