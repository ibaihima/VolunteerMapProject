import React from 'react';


function ReviewCard({charity, removeCharity}) {
    return(
        <div className="wrapper">
            <div className="container">
                <div className="top"></div>
                <div className="bottom">
                    <div className="left">
                        <div className="details">
                            <img src={charity.album_cover} alt={charity.album_title} />
                        </div>
                        <div>                    
                        </div>
                    </div>
                    <div className='right'>
                        <h3 className='album_title'>{charity.album_title}</h3>
                        <h3 className='album_artist'>{charity.album_artist}</h3>
                        <button id="album_remove_button" onClick={() => removeCharity(charity)}>Remove review</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard;