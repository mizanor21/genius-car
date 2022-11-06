import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthContext/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                alert('Successfully create an account!', email)
                console.log(user);
                form.reset();
            })
            .catch(error => {
                const errorMessage = error.message;
                alert(errorMessage);
                console.error(error);
            })
    }
    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">

                        <div className="text-center w-1/2 lg:text-left">
                            <img src={img} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100 border-5">
                            <h1 className="text-5xl text-center py-5 font-bold">Sign Up</h1>
                            <form onSubmit={handleSubmit} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Your name" name='name' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email*</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password*</span>
                                    </label>
                                    <input type="text" placeholder="password" name='password' className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" className="btn btn-primary" value="Sign Up" />
                                </div>
                                <p>Already have an account? <Link to={'/login'} className='btn btn-link'>Login</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;