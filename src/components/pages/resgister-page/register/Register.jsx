import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context-provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        
        // get form data 
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const photoUrl = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        // console.log(name, photoUrl, email, password);

        // create user 
        createUser(email, password)
        .then(success => {
            const currentUser = success.user;
            console.log(currentUser);
            toast.success('Resgistration Successful!')
        })
        .catch(error => {
            const errorMesssage = error.message;
            console.log(errorMesssage);
        })
    };
    return (
        <div className="mt-20 bg-[#f5f8e8] p-5 md:p-8 w-full md:w-4/5 lg:w-3/5 mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold">Please Register</h2>
            <form onSubmit={handleRegister} className="mt-5 flex flex-col gap-3 items-start">
                <div className="w-full">
                    <label htmlFor="name" className="text-xl">Enter your name <span className="text-red-600">*</span></label>
                    <input type="text" name="name" id="name" className="mt-1 w-full p-3" placeholder="Name" required />
                </div>
                <div className="w-full">
                    <label htmlFor="photo" className="text-xl">Enter your photo url <span className="text-red-600">*</span></label>
                    <input type="text" name="photo" id="photo" className="mt-1 w-full p-3" placeholder="Photo url" required />
                </div>
                <div className="w-full">
                    <label htmlFor="email" className="text-xl">Enter your email <span className="text-red-600">*</span></label>
                    <input type="email" name="email" id="email" className="mt-1 w-full p-3" placeholder="Email" required />
                </div>
                <div className="w-full">
                    <label htmlFor="password" className="text-xl">Enter your password <span className="text-red-600">*</span></label>
                    <input type="password" name="password" id="password" className="mt-1 w-full p-3" placeholder="Password" required />
                </div>
                <button className="px-6 py-2 text-white font-bold bg-btnPrimaryBg hover:bg-[#12486B]">Register</button>
            </form>

            <p className="text-xl mt-8 text-center">Already have an account? please <Link to="/login" className="underline decoration-orange-600 hover:no-underline">login</Link>.</p>
        </div>
    );
};

export default Register;