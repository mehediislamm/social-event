import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from 'react-icons/fa';


const Login = () => {
    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
    }

    return (
            
            <div>
                <h2 className="text-3xl text-center">Please Login</h2>
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
               <p className="text-center mb-5"> <hr /> or <hr /></p> 
               <div className="flex gap-5 mb-5 mx-32 md:mx-[278px] lg:mx-[520px]">
                <button className="btn ">
                    <FaGithub></FaGithub>
                    GITHUB</button>
                <button className="btn ">
                <FaGoogle></FaGoogle>
                    GOOGLE</button>
               </div>

                <p className="text-xl text-center mb-5">Do not have an account <Link to={'/register'} className=" text-blue-600 text-xl font-bold">Register</Link></p>
            </div>
        
    );
};

export default Login;