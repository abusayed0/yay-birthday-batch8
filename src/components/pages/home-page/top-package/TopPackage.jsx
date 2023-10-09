import PropTypes from 'prop-types';

const TopPackage = ({ topPackageData }) => {
    console.log(topPackageData);
    const { id, thumbnail, name, description, price } = topPackageData;
    return (
        <div className='border flex flex-col'>
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
                    <button className="px-3 md:px-4 bg-btnPrimaryBg py-2 text-xl text-white font-medium hover:bg-[#12486B]">Now Details</button>
                </div>
            </div>
        </div>
    );
};
TopPackage.propTypes = {
    topPackageData: PropTypes.object.isRequired
};
export default TopPackage;