import React from 'react'
import { WrapperLableText,WrapperTextValue,WrapperContent } from './style'
import { Checkbox, Rate} from 'antd'

const NavBarComponent = () => {
    const onChange = ()=>{}
    const renderContent= (type, options) =>{
        switch(type){
            case 'text':
                return options.map((option)=>{
                        return(
                            <WrapperTextValue>{option}</WrapperTextValue>
                        )
                })
            case 'checkbox':
                return( <Checkbox.Group style={{ width: '100%' , display:'flex', flexDirection:'column'}} onChange={onChange}>
                    {options.map((option)=>{
                        return (
                            <Checkbox value={option.value}>{option.label}</Checkbox>
                        )
                    })}
                
                  </Checkbox.Group>
                )
            case 'star':
                 return( 
                    options.map((option)=>{
                        console.log('check',option)
                        return (
                            <div style={{ display:'flex', gap:'4px', fontSize:'12px' }}>
                                <Rate style={{ fontSize:'12px' }} disabled defaultValue={option}/>
                                <span>{`Từ ${option} sao`}</span>
                            </div>
                        )
                    })
                        
                )
            case 'price':
                return( 
                    options.map((option)=>{
                        return (
                           <div style={{ borderRadius:'10px', backgroundColor:'#ccc', width:'fit-content', padding:'4px' }}>{option}</div>
                        )
                    })
                        
                )
            default:
                return{}
        }
    }
    return (
        <div>
            <WrapperLableText>Lable</WrapperLableText>
            <WrapperContent>
                {renderContent('text',['Tu lanh', 'TV','May giat'])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('checkbox',[
                    {value: 'a', label:'A'},
                    {value: 'b', label:'B'}
                ])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('star',[5,4,3])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('price',['Dưới 40','Trên 50'])}
            </WrapperContent>
        </div>
    )
}

export default NavBarComponent