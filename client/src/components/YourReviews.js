import React , {useState, useEffect} from 'react';
import ReviewCard from './ReviewCard';
import {v4 as uuid} from 'uuid'


function YourReviews({reviews, removeReview}){
  const [userReviews, setUserReviews] = useState([])

  useEffect(() => {
    fetch(`/reviews/users/me`)
    .then(res => res.json())
    .then(data =>{
      setUserReviews(data)
    })
  },[])


  function handleRemoveReview(review){
    fetch(`http://localhost:3000/reviews/${review.id}`,{
      method:"DELETE",
    }).then (()=>{
      setUserReviews(userReviews.filter(el=> {
        console.log("after delete", userReviews)
        return (el.id !==review.id)
      }))
        
    })
  }

  const reviewGen = (userReviews == []) ? null : userReviews.map((review) => {
    return(
    <ReviewCard key={uuid()} review={review} removeReview = {handleRemoveReview}/>
    )})

    return (
      <div className='your_review_container'> 
        {
          userReviews.map((review) => {
            return(
            <ReviewCard key={uuid()} review={review} removeReview = {handleRemoveReview}/>
            )})
        }

          {/* {reviewGen} */}

      </div>
    )
  

}

export default YourReviews;