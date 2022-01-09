import React from 'react'
import Sidebar from '../../components/Sidebar/sidebar';
import { useForm } from "react-hook-form";
import styles from '../addPokeWiki/addPokeWiki.module.css'
// import Card from '../../components/cards/card';
import { useState } from 'react';



const AddPokeWiki  = () => {

   const { register, handleSubmit, formState: { errors } } = useForm();
   const [ lastData, setLastData ] = useState([]);

   const onSubmit = data => {
       console.log(data);
       fetch('http://localhost:3010/createPokeWiki', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify(data)
       })
   }


   return (
       <div className={styles.create}>
          <Sidebar />
         
           <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
           <h2>Create new PokeWiki</h2>
               <label>Name</label>
               <input type="text"  {...register("name", { required: true, pattern: /^[A-Za-z]+$/i  })} />
               {errors.name?.type === 'required' && <p className={styles.error}>This field is required</p>}
               {errors.name?.type === 'pattern' && <p className={styles.error}>Incorrect name</p>}
               <br/>
               <label>Description</label>
               <textarea  {...register("description", { required: true })} >
               {errors.description && <p className={styles.error}>This field is required</p>}
               </textarea>
               <br/>
               <label>Url</label>
               <input type="text"  {...register("Url", { required: true })} />
               {errors.url && <p className={styles.error}>This field is required</p>}
               <br/>
               <label>ThumbnailUrl</label>
               <input type="text"  {...register("thumbnailUrl", { required: true })} />
               {errors.thumbnailUrl && <p className={styles.error}>This field is required</p>}
               <br/>
               <label>LargeImg</label>
               <input type="text"  {...register("largeImg", { required: true })} />
               {errors.largeImg && <p className={styles.error}>This field is required</p>}
               <br/>
               <input className={styles.enviar} type="submit" onClick={() => setLastData[lastData.length-1]} />
           </form>
           {/* <Card item={lastData} /> */}
       </div>
   );
};

export default AddPokeWiki;
