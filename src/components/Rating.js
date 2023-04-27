import React from 'react'

function convert(ratings){
    const arr = [0,0,0,0,0];
    for(let i=0;i<5;i++){
        if(ratings>=1){
            ratings = ratings-1;
            arr[i]++;
        }
        else if(ratings<1 && ratings>0){
            arr[i]=ratings;
            ratings = 0;
        }
        else{
            break
        }
    }
    return arr;
}

export default function Rating({props,color}) {
    if(props==='NA'){
        return(
            <div>
                <span className='ratings-five-star' style={{marginLeft:'0px',fontStyle:'oblique',fontSize:'10px'}}>Rating Not Available</span>
            </div>
        )
    }
    const rat_array = convert(parseFloat(props))
    return (
        <div className='react-comp'>
            <span className='ratings-five-star' style={{marginLeft:'0px'}}>
                {rat_array.map((item,index) =>{
                    if(item<=1 && item>0.7) return <i className="fa-solid fa-star fa-sm" id={index} style={{color:`${color}`}}></i>
                    else if(item>=0 && item<=0.2) return <i className="fa-regular fa-star fa-sm" id={index} style={{color:`${color}`}}></i>
                    else return <i className="fa-solid fa-star-half-stroke" id={index} style={{color:`${color}`}}></i>
                })}
                <span className='badge bg-dark' style={{color:`${color}`}}>{props}</span>
            </span>
        </div>
    )
}
