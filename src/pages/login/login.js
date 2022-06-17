import styles from "./login.module.css"
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import customFetch from '../../api';
import { setUserSession } from "../../api/auth";
import Sidebar from '../../components/Sidebar/sidebar';


const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/securedcontent/dashboard");
  }, [navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    customFetch("POST", "login", {body: data})
    .then(userSession => {
      setUserSession(userSession);
      navigate("/securedcontent/dashboard");
    }).catch(error => {
      console.error(error);
    });
  };
 
    
      return (
        <div className={styles.login}>
            <Sidebar />
          <div className={styles.content}>

              <div className={styles.login_inputs}>
                <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Log In</h2>
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