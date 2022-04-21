import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import SocialLogin from '../SocialLogin/SocialLogin';
import { useState } from 'react';


const Register = () => {
  const [agree,setAgree] = useState(false)
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user ,loading,error 
      ] = useCreateUserWithEmailAndPassword(auth ,{sendEmailVerification : true});
      
    
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value ;
        const email = event.target.email.value;
        const password = event.target.password.value ;
        const agree = event.target.terms.checked;
        console.log(name,email,password);
        
        await  createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName : name});
        
        if(user){
          navigate('/home')
          console.log(user , error.messages);
         
      }
        
        
      };

      if(user){
        
          console.log(user);
      }
    return (
        <div className='register'>
            <h2 className='text-center'>Create a new account..</h2>
            <form action="" className='mt-4' onSubmit={handleRegister}>
                <input type="text" name="name" placeholder='Your Name' id="" />
                <input  type="email" name="email" placeholder='Your Email' required id="" />
                <input  type="password" name="password" placeholder='Your Password' required id="" />
                <input onClick={()=>setAgree(!agree)} type="checkbox"   name="terms" id="terms" />
                <label className={`${!agree ? '' : 'text-primary'} ps-2 `} htmlFor="checkbox" >Accept Trems and condition!!</label>
                <input disabled={!agree} type="submit"  className={`w-50 mt-3 mx-auto btn btn-primary`} value="Register" />
            </form>
            <p>
          Already have an acount ?{" "}
          <Link
            className="text-danger text-text-decoration-none pe-auto"
             to='/login'
          >
            Go to login
          </Link>
        </p>
        <SocialLogin/>
        </div>
    );
};

export default Register;