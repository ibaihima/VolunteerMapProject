import React , {useState, useEffect} from 'react';
import ReviewCard from './ReviewCard';
import {v4 as uuid} from 'uuid'


function YourReviews({removeCharity}){

    const [userReviews, setUserReviews] = useState([])
    useEffect(() => {
    let current_user = JSON.parse(localStorage.getItem('user'))
    fetch(`[TODO]`)
    .then(res => res.json())
    .then(data =>{
        if (data.errorMessage) {
        setUserReviews([])
        }
        else {
            setUserReviews(data)
        }
        console.log(data)
    })
    },[])

    function handleRemoveCharity(charity){
        fetch(`[TODO]`,{
          method:"DELETE",
        }).then (()=>{
          console.log("delete call",userReviews)
          setUserReviews(userReviews.filter(el=> {
            console.log("after delete", userReviews)
            return (el.id !==charity.id)
          }))
            
        })
      }

    return (
        <div className='row'>
        {       
            userReviews.map((charity) => {
                return(

                <ReviewCard key={uuid()} review={charity} removeCharity = {handleRemoveCharity}/>
                )
            })
        }

    </div>
    )

}

export default YourReviews;