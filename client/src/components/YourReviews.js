import React , {useState, useEffect} from 'react';
import ReviewCard from './ReviewCard';
import {v4 as uuid} from 'uuid'


function YourReviews({reviews, removeReview}){
  const [userReviews, setUserReviews] = useState([])
  const [targetReview, setTargetReview] = useState([])
  const [editReviewContent, setEditReviewContent] = useState("")
  let test;

  useEffect(() => {
    fetch(`/reviews/users/me`)
    .then(res => res.json())
    .then(data =>{
      setUserReviews(data)
    })
  },[])


  function handleRemoveReview(review){
    fetch(`/reviews/${review.id}`,{
      method:"DELETE",
    }).then (()=>{
      setUserReviews(userReviews.filter(el=> {
        console.log("after delete", userReviews)
        return (el.id !==review.id)
      }))       
    })
  }
  function handleText(e){
    test = e.target.value
    console.log(test)
    // setEditReviewContent(e.target.value)

    

  }
  function handleChange(review){
    setTargetReview(review)
  }

  function handleSubmit(review){
    review.preventDefault()
    const selected = targetReview
    fetch(`/reviews/${selected.id}`,{
      method:"PATCH", headers: {
        "Content-Type": "application/json",
    },body: JSON.stringify({
      review_content: test
    }),
    })
    review.target.reset()

  }


    return (
      <div className='your_review_container'> 
        { 
          userReviews.map((review) => {
            return(
            <ReviewCard key={uuid()} review={review} removeReview = {handleRemoveReview} handleChange={handleChange} handleSubmit={handleSubmit} handleText={handleText}/>
            )})
        }

          {/* {reviewGen} */}

      </div>
    )
  

}

export default YourReviews;