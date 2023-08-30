import React from 'react'
import NavBarComponent from './../../components/NavBarComponent/NavBarComponent';
import CardComponent from './../../components/CardComponent/CardComponent';
import { Row } from 'antd';
import { WrapperProduct,WrapperNavbar } from './style';

const TypeProductPage = () => {
  return (
    <Row style={{ padding:'0 120px', background:'#efefef', flexWrap:'nowrap', paddingTop:'10px' }}>
        <WrapperNavbar span={4}>
            <NavBarComponent/>
        </WrapperNavbar>
        <WrapperProduct span={20}>
             <CardComponent/>
             <CardComponent/>
             <CardComponent/>
             <CardComponent/>
             <CardComponent/>
             <CardComponent/>
             <CardComponent/>
             <CardComponent/>
        </WrapperProduct>
        
    </Row>
  )
}

export default TypeProductPage