/* eslint-disable no-undef */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";



const Login = () => {
    const {signIn, signInGoogle} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleGoogle =e =>{
        e.preventDefault();

     
        // signInGoogle(auth, Provider)
        // .then(result=>{
        //     console.log(result.user);
        // })
        // .catch(error=>{
        //     console.error(error);
        // })
    }

    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn (email,password)
        .then(result=>{
            console.log(result.user);
            navigate(location?.state ? location.state:'/');
        })
        .catch(error=>{
            console.error(error);
        })
    }

    return (
            
            <div className="bg-[#e5e9ee] rounded-xl">
                <h2 className="text-3xl text-center pt-5 font-bold text-yellow-800 ">Please Login</h2>
                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto mb-3">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className="divider mx-auto w-1/2">OR</div>
               <div className="flex mb-5 gap-5 justify-center">
                <button className="btn ">
                    <FaGithub></FaGithub>
                    GITHUB</button>
                <button onClick={handleGoogle} className="btn ">
                <FaGoogle></FaGoogle>
                    GOOGLE</button>
               </div>

                <p className="text-xl text-center mb-5 pb-5">Do not have an account <Link to={'/register'} className=" text-blue-600 text-xl font-bold">Register</Link></p>
            </div>
        
    );
};

export default Login;