import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams()
    return (
        <div>
            <h2>Welcome To Detail.... {serviceId}</h2>
            <div className='m-4 text-center'>
                <Link to={"/checkout"}>
            <Button className='btn btn-primary '>Go For Checkout</Button>
            </Link>
            </div>
            
            
        </div>
    );
};

export default ServiceDetail;