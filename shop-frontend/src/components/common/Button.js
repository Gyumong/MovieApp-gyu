import React from 'react';
import styled,{css} from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
    margin-top:2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#fff;
    border: none;
    padding:8px 3px;
    border-radius: 3px;
    font-size: 11px;
    font-weight: 400;
    line-height: 20px;
    outline:none;
    cursor:pointer;

    background:${palette.gray[9]};

    &:hover{
        
        opacity: 0.5;
    }

    ${props =>
        props.fullWidth &&
        css`
            padding-top:0.75rem;
            padding-bottom:0.75rem;
            width:100%;
            font-size:1.125rem;
        `}
    
`;

const Button = props => <StyledButton {...props} />;

export default Button;