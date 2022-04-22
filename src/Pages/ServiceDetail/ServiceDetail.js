import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams()
    const [service,setService] = useState({})
    useEffect(()=>{
        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url)
        .then(res=>res.json())
        .then(data => setService(data))
    },[])
    return (
        <div className='w-75 mx-auto text-center my-4'>
            
            <h2>Service:{service.name}</h2>
            <div className='m-4 text-center'>
                <Link to={"/checkout"}>
            <Button className='btn btn-primary '>Go For Checkout</Button>
            </Link>
            </div>
            
            
        </div>
    );
};

export default ServiceDetail;