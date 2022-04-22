import React from 'react';


function ReviewCard({review, removeReview}) {
    return(
        <div className="wrapper">
            <div className="container">
                <div className="top"></div>
                <div className="bottom">
                    <div className="left">
                        <div className="details">
                        <h3 className='album_title'>{review.charity.organization_name}</h3>
                        </div>
                        <div>                    
                        </div>
                    </div>
                    <div className='right'>
                        <h3>{review.review_content}</h3>
                        <button id="album_remove_button" onClick={() => removeReview(review)}>Remove review</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard;