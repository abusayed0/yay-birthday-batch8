import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import SinglePackage from "../../../shared/single-package/SinglePackage";
const TopPackages = ({data}) => {
    const navigate = useNavigate();
    return (
        <div className="mt-20">
           <h3 className="text-3xl font-bold text-center">Top packages of the month</h3> 
           <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    data.slice(0, 6).map(packageData => <SinglePackage
                     key={packageData.id}
                     singlePackageData={packageData}
                    />)
                }
           </div>
           <div className="mt-8 text-center">
                <button onClick={() => navigate("/packages")} className="px-3 md:px-4 bg-orange-600 py-2 text-xl text-white font-medium hover:bg-orange-800">All Packages</button>
           </div>
        </div>
    );
};
TopPackages.propTypes = {
    data: PropTypes.array.isRequired
};
export default TopPackages;