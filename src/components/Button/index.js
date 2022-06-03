import React, { forwardRef } from 'react'
import PropTypes from 'prop-types';
import classes from './index.module.css';

const styles = {
    disabled: classes.disabled,
    variant: {
        primary: classes.primary,
        secondary: classes.secondary,
    },
    hide: classes.hide,
}

const Button = forwardRef(
    (
        {
            children,
            type = 'button',
            variant = 'primary',
            disabled = false,
            hide = false,
            ...props
        }, ref
    ) => (
        <button
            ref={ref}
            disabled={disabled}
            type={type}
            className={`${styles.variant[variant]} ${disabled && styles.disabled}  ${hide && styles.hide}`}
            {...props}>
            {children}
        </button>
    ));

Button.propTypes = {
    children: PropTypes.node.isRequired,
    submit: PropTypes.oneOf(['submit', 'button']),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    hide: PropTypes.bool,
    variant: PropTypes.oneOf(['primary', 'secondary']),
}

export default Button