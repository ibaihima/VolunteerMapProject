import React from 'react';


function ReviewCard({review, removeReview, handleSubmit, handleChange,handleText}) {
    return(
        <div className="wrapper">
            <div className="container">
                <div className="top"></div>
                <div className="bottom">
                    <div className="left">
                        <h3 id="charity_name"> Charity Name:</h3>
                        <h3 className='album_title'>{review.charity.organization_name}</h3>
                        <div>                    
                        </div>
                    </div>
                    <div className='right'>
                        <h3 className="review_text">Your Review:</h3>
                        <h3>{review.review_content}</h3>
                        <button className="album_remove_button" onClick={() => removeReview(review)}>Remove review</button>
                        <form className='edit_form' onSubmit={handleSubmit} onChange={()=>handleChange(review)}> 
                            <label>Edit Review</label>
                            <input className="textBox" type="text" onChange={handleText}/> 
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard;