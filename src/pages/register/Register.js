import React from 'react'
import styles from '../register/register.module.css'

import { useForm } from "react-hook-form";


const Register = () => {
 
   const { register, handleSubmit, formState: { errors } } = useForm();

   const onSubmit = data => {
       console.log(data);
       fetch('http://localhost:3010/users', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify(data)
       })
       .then(response => {
          if(!response.ok) throw new Error("It could´t be uploaded")
          return response.json();
       })
       .then(json => {
          alert('user created');
       })
       .catch(error => {
          alert(error);
       })
   }

   return (
      <div className={styles.create}>
        

         <h2>Log in</h2>
         
         <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
         <h2>Create new User</h2>
             <label>Name</label>
             <input type="text"  {...register("name", { required: true, pattern: /^[A-Za-z]+$/i  })} />
             {errors.name?.type === 'required' && <p className={styles.error}>This field is required</p>}
             {errors.name?.type === 'pattern' && <p className={styles.error}>Incorrect name</p>}
             <br/>

             <label>Last Name</label>
             <input  {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })} />
             {errors.lasName && <p className={styles.error}>This field is required</p>}
             
             <br/>
             <label>Email</label>
             <input type="text"  {...register("email", { required: true })} />
             {errors.email && <p className={styles.error}>This field is required</p>}
             <br/>

             <label>Bio</label>
             <textarea type="text"  {...register("largeImg", { required: true })}></textarea>
             {errors.largeImg && <p className={styles.error}>This field is required</p>}
             <br/>

             <input className={styles.enviar} type="submit" label="Send" />
         </form>
     
      </div>
   )
}

export default Register;
