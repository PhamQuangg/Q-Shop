import React from "react"
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperTypeProduct,WrapperButtonMore,WrapperProduct } from "./style";
import SliderComponent from "../../components/SliderComponent/SliderConponent";
import slider1 from './../../assets/image/slider1.webp'
import slider2 from './../../assets/image/slider2.webp'
import slider3 from './../../assets/image/slider3.webp'
import CardComponent from "../../components/CardComponent/CardComponent";
import NavBarComponent from "../../components/NavBarComponent/NavBarComponent";

const HomePage = () => {
    const arr = ['Tivi', 'Tu lanh','May giat','Laptop']
    return(
        <>
            <div style={{ padding:' 0 120px' }}>
                <WrapperTypeProduct>
                {arr.map((item)=> {
                    return(
                        <TypeProduct name={item} key = {item} />
                    )
                })}
                </WrapperTypeProduct>
                </div>
                <div id="container" style={{ backgroundColor: '#efefef' ,padding:"0 120px"}}>
                    <SliderComponent arrImages={[slider1, slider2,slider3]}/>
                <WrapperProduct>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                </WrapperProduct>
                <div style={{ width:'100%', display:'flex',justifyContent:'center',marginTop:'10px' }}>
                <WrapperButtonMore textbutton="Xem Thêm" type="outline" styleButton={{ 
                    border: '1px solid rgb(11,116,229)', color: 'rgb(11,116,229)',
                    width: '240px', height: '38px', borderRadius: '4px'
                    
                    }}
                    styleTextButton={{ fontWeight: 500 }}/>
                </div>
                <NavBarComponent/>
            </div>
        </>
    )
}
export default HomePage