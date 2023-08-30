import { styled } from "styled-components";
import ButtonComponent from './../../components/ButtonComponent/ButtonComponent';

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    justify-content: flex-start;
    border-bottom: 1px solid grey;
    height: 44px;
    font-size: 12px;
`
export const WrapperButtonMore = styled(ButtonComponent)`
    &:hover{
        color: #fff;
        background: rgb(13,92,182);
        span{
            color: #fff;
        }
        
    }
    width:100%;
    text-align: center
`
export const WrapperProduct = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
    flex-wrap: wrap;
`