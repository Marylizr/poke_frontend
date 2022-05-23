import React from 'react';
import styles from '../register/register.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import customFetch from '../../api';
import { setUserSession } from "../../api/auth";
import Sidebar from '../../components/Sidebar/sidebar';


const Register = () => {
   const navigate = useNavigate();

   useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) navigate("/dashboard");
    }, [navigate]);

    const { register, handleSubmit, formState: { errors } } = useForm();
  
    const onSubmit = (data) => {
      customFetch("POST", "users", {body: data})
      .then(userSession => {
        setUserSession(userSession);
        navigate("/dashboard");
      }).catch(error => {
          'REQUEST_FAILED'
        console.error(error);
      });
    }

   return (
      <div className={styles.create}>
         
         <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
         <h2>Create new User</h2>
             
             <input placeholder='your Name' type="text"  {...register("name", { required: true, pattern: /^[A-Za-z]+$/i  })} />
             {errors.name?.type === 'required' && <p className={styles.error}>This field is required</p>}
             {errors.name?.type === 'pattern' && <p className={styles.error}>Incorrect name</p>}
             

             <input placeholder='your Last Name' {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })} />
             {errors.lasName && <p className={styles.error}>This field is required</p>}
             
             <input placeholder='your email' type="text"  {...register("email", { required: true })} />
             {errors.email && <p className={styles.error}>This field is required</p>}
             

             <input placeholder='your safe password' type="password"  {...register("password", { required: true })} />
             {errors.password && <p className={styles.error}>This field is required</p>}
             
             <div className={styles.send_button}>
                <input type="submit" value="Sign Up" />
             </div>

             <p>Have an account? <Link className={styles.link} to='/login'>Log In</Link></p>

         </form>
     
      </div>
   )
}

export default Register;
