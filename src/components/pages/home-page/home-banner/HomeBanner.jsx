
const HomeBanner = () => {
    return (
        <div className="mt-20 md:min-h-[500px] bg-[url('https://i.ibb.co/9WqG9KZ/children-celebrating-birthday-23-2148155321.jpg')] bg-no-repeat bg-cover bg-center bg-[rgba(0,0,0,0.6)] bg-blend-overlay p-5 flex justify-center items-center">
            <div className="text-center max-w-[500px] flex flex-col gap-4">
                <h2 className="text-white text-3xl md:text-4xl font-bold">Creating Memorable Birthday Experiences</h2>
                <p className="text-white text-xl">Welcome to Yay Birthday – Your go-to destination for crafting unforgettable birthday celebrations. From cakes to decorations, we make every moment special.</p>
               <div className="relative">
                    <input className="w-full p-2 md:p-3" type="email" name="email" id="email" placeholder="Your Email"/>
                    <button className="absolute right-0 px-2 md:px-3 bg-btnPrimaryBg h-full text-xl text-white font-medium hover:bg-[#12486B]">Book Now</button>
               </div>
            </div>
        </div>
    );
};

export default HomeBanner;