import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
const Seo = ({title}) => {
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    );
};
Seo.propTypes = {
    title:  PropTypes.string.isRequired
};
export default Seo;