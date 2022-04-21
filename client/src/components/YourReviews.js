import React , {useState, useEffect} from 'react';
import ReviewCard from './ReviewCard';
import {v4 as uuid} from 'uuid'


function YourReviews({reviews, removeReview}){
  const [userReviews, setUserReviews] = useState([])

  useEffect(() => {
    // let current_user = JSON.parse(localStorage.getItem('user'))
    fetch(`/reviews/1`)
    .then(res => res.json())
    .then(data =>{
      setUserReviews(data)
      console.log(userReviews)
    })
  },[])

  function handleRemoveReview(review){
    fetch(`http://localhost:3000/reviews/1`,{
      method:"DELETE",
    }).then (()=>{
      console.log("delete call",userReviews)
      setUserReviews(userReviews.filter(el=> {
        console.log("after delete", userReviews)
        return (el.id !==review.id)
      }))
        
    })
  }

  // const reviewGen = (userReviews == []) ? null : userReviews.map((review) => {
  //   return(
  //   <ReviewCard key={uuid()} review={review} removeReview = {handleRemoveReview}/>
  //   )})

    return (
      <div> 
        {
          console.log(userReviews)
        }
        {/* {reviewGen} */}
      </div>
    )
  

}

export default YourReviews;