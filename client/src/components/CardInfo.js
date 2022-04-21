import React, {useState} from "react";

function CardInfo({mapInfo}){
    const [reviewContent, setReviewContent] = useState("")

    function handleChange(charity){
        setReviewContent(charity.target.value)
    }

    function handleSubmit(charity){
            charity.preventDefault()
            console.log(reviewContent)
            fetch("/reviews",{
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                Accept: "application/json"  ,
            },
            body: JSON.stringify({
                "review_content": reviewContent,
                "user_id": 5,
                "charity_id": 353
            })
            })
            .then((r) => r.json())
    }
    

    return(
<div className="wrapper">
            <div className="container">
                <div className="top"></div>
                <div className="bottom">
                    <div className="left">
                        <div className="details">
                            <h1>{mapInfo.organization_name}</h1>
                        </div>
                        <a href={mapInfo.website}>Go Support</a> 
                            <form onSubmit = {handleSubmit} >
                                <input className="textBox" type="text" placeholder="Submit a review" onChange={(charity) => handleChange(charity)}/> 
                            </form>
                    </div>
                    <div className='right'>
                         <p className ='details'>{mapInfo.program_description}</p>
                    </div>

                </div>
            </div>
        </div>               

    )
}

export default CardInfo; 

                

                // {mapInfo.program_description}