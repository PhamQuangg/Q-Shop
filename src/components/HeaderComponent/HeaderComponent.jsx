import React from 'react';
import { Badge, Col, Row } from 'antd';
import Search from 'antd/es/input/Search';
import { WrapperHeader, WrapperTextHeader, WrapperTextHeaderChild,WrapperHeaderAcc,WrapperTextHeaderChildCart} from './style';
import {UserOutlined,CaretDownOutlined,ShoppingCartOutlined} from '@ant-design/icons';

const onSearch = (value) => console.log(value);
const HeaderComponent = () => {
    return(
    <WrapperHeader>
        <Col span={6}>
            <WrapperTextHeader>Q-SHOP</WrapperTextHeader>

            <WrapperTextHeaderChild>MUA SẮM THẢ GA</WrapperTextHeaderChild>
        </Col>
        <Col span={12}>
                <Search
                    placeholder="input search text"
                    allowClear
                    size="large"
                    onSearch={onSearch}
                 />
        </Col>
        <Col span={6} style={{ display:'flex'  }}>
            
            <WrapperHeaderAcc>
              <UserOutlined style={{ fontSize:'30px', color:'#fff', margin:'5px'  }} />
              <div>
                <span style={{ fontSize:'12px', color:'#fff' }}>
                    Đăng nhập/Đăng Ký
                </span>
                <div>
                    <span style={{ fontSize:'12px', color:'#fff' }}>
                        Tài khoản
                    </span>
                    <CaretDownOutlined style={{ color:'#fff'  }}/>
                </div>
                </div>
            </WrapperHeaderAcc>
            <div>
                <Badge count={5} size='small'>
                    <ShoppingCartOutlined  style={{ fontSize:'30px', color:'#fff', marginLeft:'30px'  }}/>
                </Badge>
                <WrapperTextHeaderChildCart>Giỏ hàng</WrapperTextHeaderChildCart>
            </div>
        </Col>
      </WrapperHeader>
    )
}
export default HeaderComponent