import { useLoaderData } from "react-router-dom";
import SinglePackage from "../../../shared/single-package/SinglePackage";

const Packages = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {
                data.map(packageData => <SinglePackage
                 key={packageData.id}
                 singlePackageData={packageData}
                />)
            }
        </div>
    );
};

export default Packages;