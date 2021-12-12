import React from "react";
import PropTypes from 'prop-types';
import { ThemeEnum, NameEnum, SizeEnum } from './ButtonEnums';
import './Button.scss';
import Icon from '@mui/material/Icon';
type ThemeEnum = typeof ThemeEnum[keyof typeof ThemeEnum];
type NameEnum = typeof NameEnum[keyof typeof NameEnum];
type SizeEnum = typeof SizeEnum[keyof typeof SizeEnum];

export interface BaseButtonProps { 
    label?: string;
    icon?: string;
    disabled?: boolean;
    theme?: ThemeEnum;
    name?: NameEnum;
    id?: string;
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
    iconPosition?: string;
    size?: SizeEnum;
}

export const BaseButton = ({
    handleClick,
    name,
    id,
    disabled,
    icon,
    label,
    theme,
    iconPosition,
    size,
}: BaseButtonProps) => {
    
    return (
        <button
            name={name}
            id={id}
            onClick={handleClick}
            disabled={disabled}
            className={
                `default
                ${name}
                ${theme === 'dark' ? 'dark' : ''}
                ${disabled && 'disabled'}
                ${iconPosition === 'right' && 'icon-right'}
                ${size && size}`
            }
      >
        {icon && <Icon>{icon}</Icon>}
        {label && <label>{label}</label>}
      </button>
    );
  };