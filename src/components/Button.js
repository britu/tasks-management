import PropTypes from 'prop-types'

const Button = ({ title, toggleShow, color}) => {
    return (
        <div className='btn' style = {{ backgroundColor : color }} onClick={toggleShow}>
             {title}
        </div>
    )
}

Button.defaultProps = {
    title : 'Add'
}

Button.propTypes = {
    title: PropTypes.string
}

export default Button
