import styles from "./login.module.css"
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Sidebar from "../../components/Sidebar/sidebar";
import customFetch from '../../api';
import { setUserSession } from "../../api/auth";


const Login = () => {
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
        <div className={styles.login}>
          <div className={styles.sideclass}>
          
          </div>
          
        <div className={styles.content}>

            <div className={styles.login_inputs}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input type='email' placeholder="email" {...register("email", {required: true })}/>
                  {errors.email && <span className={styles.error}>email field is required</span>}
                          
                <input type='password' placeholder="password"{...register("password", { required: true })} />
                  {errors.password && <span>password field is required</span>}
                          
                <div className={styles.send_button}>
                  <input type="submit" value="Login" />
                </div>
              </form>
                <p>Don´t have an account? <Link className={styles.link} to='/users'>Sign up</Link></p>
            </div>
        </div>
          
          
        </div>
      );
    };
    
    export default Login;