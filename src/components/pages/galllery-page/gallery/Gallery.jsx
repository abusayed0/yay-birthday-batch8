
const Gallery = () => {
    return (
        <div className="mt-20">
            <h2 className="text-3xl font-semibold text-center">Few precious mement from last week events</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4 auto-rows-[300px]">
                <div className="md:col-span-2">
                    <img className="w-full h-full" src="https://i.ibb.co/XX9ZjrN/pexels-photo-7180617.jpg" alt="" />
                </div>
                <div className="md:col-span-3">
                    <img className="w-full h-full" src="https://i.ibb.co/18RDwd2/pexels-photo-7099925.jpg" alt="" />
                </div>
                <div className="md:col-span-2">
                    <img className="w-full h-full" src="https://i.ibb.co/TRQxLSB/pexels-photo-6800133.jpg" alt="" />
                </div>
                <div>
                    <img className="w-full h-full" src="https://i.ibb.co/XXxTMXD/pexels-photo-5805041.jpg" alt="" />
                </div>
                <div className="md:col-span-2">
                    <img className="w-full h-full" src="https://i.ibb.co/J3NNzjb/pexels-photo-8104206.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;