import { useNavigate } from "react-router-dom";

const ErrroPage = () => {
    const navigate = useNavigate();
    return (
        <div className="w-screen h-screen flex flex-col gap-2 justify-center items-center">
            <h3 className="text-4xl font-bold">OOps! Somethig Wrong.</h3>
            <button onClick={() => navigate("/")} className="bg-btnPrimaryBg hover:bg-[#12486B] text-xl font-semibold px-4 py-2 text-white">Go Home</button>
        </div>
    );
};

export default ErrroPage;