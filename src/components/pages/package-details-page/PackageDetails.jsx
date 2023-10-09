import { useLoaderData, useParams } from "react-router-dom";
import {CgEditBlackPoint} from "react-icons/cg"

const PackageDetails = () => {
    const { id: currentPackageId } = useParams();
    const allPackages = useLoaderData();

    const currentPackage = allPackages.find(onePackage => onePackage.id === +currentPackageId);
    const { id, thumbnail, name, description, price, advantages } = currentPackage;

    return (
        <div className="mt-20 flex gap-10  flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-[300px] md:h-auto relative">
                <img className="absolute h-full w-full" src={thumbnail} alt="" />
            </div>
            <div className="w-full md:w-1/2">
                <div className="flex flex-col gap-2">
                    <h3 className="text-3xl md:text-4xl font-semibold">{name}</h3>
                    <p className="text-xl">{description}</p>
                    <h4 className="text-2xl md:text-3xl font-bold">{price}</h4>
                </div>
                <ul className="mt-6 flex flex-col gap-2">
                    {
                        advantages.map((advantage, index) => <li
                            key={index}
                            className="flex gap-2 items-center text-[#12486B]"
                        >
                            <CgEditBlackPoint className="text-2xl"/>
                            <span className="text-xl">{advantage}</span>
                        </li>)
                    }
                </ul>
                <div className="mt-6">
                    <button className="px-4 py-3 text-white font-semibold bg-orange-600 hover:bg-orange-800">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default PackageDetails;