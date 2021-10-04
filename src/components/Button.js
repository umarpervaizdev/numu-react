import React from 'react'
import PropTypes from 'prop-types';

const Button = ({color, text, functionality}) => {
    return (
        // <input type="submit" className="btn btn-success w-100" value="Add"/>
        <button type="button" className={'btn '+ color + ' w-100'}> {text} </button>
    )
}

Button.defaultProps = {
    color: 'btn-primary',
    text: 'Add',
    functionality: ''
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    functionality: PropTypes.string
}

export default Button
