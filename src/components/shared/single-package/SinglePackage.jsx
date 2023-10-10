import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';

const SinglePackage = ({ singlePackageData }) => {
    const { id, thumbnail, name, description, price } = singlePackageData;
    const navigate = useNavigate();
    return (
        <div data-aos="zoom-in-up"  className='border flex flex-col'>
            <div>
                <img className="w-full h-[200px]" src={thumbnail} alt="" />
            </div>
            <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-semibold">{name}</h3>
                    <p className="mt-2 text-xl">{description}</p>
                </div>
                <div className="mt-2 flex items-center justify-between">
                    <h4 className="text-3xl">{price}</h4>
                    <button onClick={() => navigate(`/${id}/details`)} className="px-3  bg-btnPrimaryBg py-2 text-xl text-white font-medium hover:bg-[#12486B]">Know Details</button>
                </div>
            </div>
        </div>
    );
};
SinglePackage.propTypes = {
    singlePackageData: PropTypes.object.isRequired
};
export default SinglePackage;