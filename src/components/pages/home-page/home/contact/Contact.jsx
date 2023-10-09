
const Contact = () => {
    return (
        <div className="mt-20 bg-[#f5f8e8] flex gap-8 flex-col md:flex-row items-center p-5 ">
            <div className="md:w-1/2">
                <div className="max-w-[400px] mx-auto">
                    <h2 className="text-4xl font-medium">Making Your Birthday Truly Unforgettable</h2>
                    <p className="mt-3 text-xl">Fill this form and we will get in touch with you shortly.
                    </p>
                </div>
            </div>
            <div className="md:w-1/2 bg-[#F5FCCD] p-7">
                <h3 className="text-3xl font-bold">Contact Us</h3>
                <div className="mt-5 flex flex-col gap-3 items-start">
                    <input type="text" name="name" id="name" className="w-full p-3" placeholder="Your Name" />
                    <input type="email" name="email" id="email" className="w-full p-3" placeholder="Email" />
                    <input type="text" name="birthday" id="birthday" className="w-full p-3" placeholder="Birthday Date" />
                    <textarea name="meassage" id="meassage" rows="5" placeholder="Your Meassage" className="p-3 w-full resize-none"></textarea>
                    <button className="text-xl font-semibold text-white px-5 py-2 bg-orange-600 hover:bg-orange-800" type="submit">Send</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;