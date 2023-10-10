import { Link, useLocation, useNavigate } from "react-router-dom";
import {AiFillGoogleCircle} from "react-icons/ai"
import { useContext } from "react";
import { AuthContext } from "../../../context-provider/AuthProvider";
import toast from "react-hot-toast";
const Login = () => {

  const {emailPassLogin, googleLogIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";
  // console.log(from);

  const handleGoogleLogin = () => {
    googleLogIn()
    .then(success => {
      const currentUser = success.user;
      console.log(currentUser);
      toast.success("Login Successful!");
      navigate(from, {replace: true});
    })
    .catch(error => {
      const errorMessage = error.message;
      toast.error(errorMessage);
    })
  };

  const handleEmailPassLogin = (e) => {
    e.preventDefault();

    // get form data 
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(email, password);

    // login with email password 
    emailPassLogin(email, password)
    .then(success => {
      const currentUser = success.user;
      console.log(currentUser);
      toast.success('Login Successfull!')
      navigate(from, {replace: true});
      
    })
    .catch(error => {
      const errorMessage = error.message;
      console.log(errorMessage);
      toast.error(errorMessage);
    })

  };
  return (
    <div className="mt-20 bg-[#f5f8e8]  p-5 md:p-8 w-full md:w-4/5 lg:w-3/5 mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold">Please Login</h2>
      <form onSubmit={handleEmailPassLogin} className="mt-5 flex flex-col gap-3  items-start">
        <div className="w-full">
          <label htmlFor="email" className="text-xl">Enter your email <span className="text-red-600">*</span></label>
          <input type="email" name="email" id="email" className="mt-1 w-full p-3" placeholder="Email" required />
        </div>
        <div className="w-full">
          <label htmlFor="password" className="text-xl">Enter your password <span className="text-red-600">*</span></label>
          <input type="password" name="password" id="password" className="mt-1 w-full p-3" placeholder="Password" required />
        </div>
        <button className="px-6 py-2 text-white font-bold bg-btnPrimaryBg hover:bg-[#12486B]">Login</button>
      </form>
      <div className="mt-4">
        <div className="flex items-center gap-3">
          <hr className="h-[2px] bg-black flex-1" />
          <p className="text-xl">Or login with</p>
          <hr className="h-[2px] bg-black flex-1" />
        </div>
        <div className="mt-3 flex justify-center">
          <button onClick={handleGoogleLogin} className="px-4 py-2 text-white font-semibold bg-[#ea4335] flex items-center gap-1">
            <AiFillGoogleCircle className="text-2xl"/>
            <span className="text-xl"> Google</span>
            </button>
        </div>
      </div>
      <p className="text-xl mt-8 text-center">Do not have an account? please <Link to="/register" className="underline decoration-orange-600 hover:no-underline">register</Link>.</p>
    </div>
  );
};

export default Login;