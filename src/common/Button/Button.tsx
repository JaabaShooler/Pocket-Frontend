import classnames from 'classnames';
import { motion } from 'framer-motion';
import React from 'react';

import styles from './Button.module.css';

type ButtonVariant = 'primary';

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  disabled?: boolean;
  loading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: ButtonVariant;
}

export const Button: React.FC<ButtonProps> = ({
  disabled = false,
  loading = false,
  startIcon,
  endIcon,
  variant = 'primary',
  children,
  ...props
}) => {
  const classes = classnames(styles.button, styles[variant]);
  return (
    <motion.div whileHover={{ scale: 1.025 }} whileTap={{ scale: 0.9 }}>
      <button className={classes} disabled={loading || disabled} {...props}>
        {!!startIcon && <span>{startIcon}</span>}
        {!loading && children}
        {!!endIcon && <span>{endIcon}</span>}
      </button>
    </motion.div>
  );
};
