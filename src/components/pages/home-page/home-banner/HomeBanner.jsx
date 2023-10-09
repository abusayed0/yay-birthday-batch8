import { useNavigate } from "react-router-dom";

const HomeBanner = () => {
    const navigate = useNavigate();
    return (
        <div className="mt-20 md:min-h-[500px] bg-[url('https://i.ibb.co/9WqG9KZ/children-celebrating-birthday-23-2148155321.jpg')] bg-no-repeat bg-cover bg-center bg-[rgba(0,0,0,0.6)] bg-blend-overlay p-5 flex justify-center items-center">
            <div className="text-center max-w-[500px] flex flex-col items-center gap-4">
                <h2 className="text-white text-3xl md:text-4xl font-bold">Creating Memorable Birthday Experiences</h2>
                <p className="text-white text-xl">Welcome to Yay Birthday – Your go-to destination for crafting unforgettable birthday celebrations. From cakes to decorations, we make every moment special.</p>

                <button onClick={() => navigate("/packages")} className="px-3 py-2 bg-orange-600 text-xl text-white font-medium hover:bg-orange-800">Contact</button>
            </div>
        </div >
    );
};

export default HomeBanner;