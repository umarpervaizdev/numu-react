import React from 'react';
import PropTypes from 'prop-types';

const Header = ({title}) => {
    return (
        <div>

        </div>
    )
}

Header.defaultProps = {
    title: 'Brad'
};

Header.propTypes = {
    title: PropTypes.string
};
export default Header