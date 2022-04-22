import React, {useState} from "react";

function CardInfo({mapInfo, charityId}){
    const [reviewContent, setReviewContent] = useState("")
    const [currentUser, setCurrentUser] = useState(null)

    fetch("/me")
    .then((r)=> r.json())
    .then((data) => setCurrentUser(data.id))

    function handleChange(charity){
        setReviewContent(charity.target.value)
    }

    function handleSubmit(charity){
            charity.preventDefault()
            fetch("/reviews",{
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                Accept: "application/json"  ,
            },
            body: JSON.stringify({
                "review_content": reviewContent,
                "user_id": currentUser,
                "charity_id": charityId
            })
            })
            .then((r) => r.json())
            charity.target.reset()
    }
    

    return(
<div className="wrapper">
            <div className="container">
                <div className="top"></div>
                <div className="bottom">
                    <div className="left">
                            <h1 className="details">{mapInfo.organization_name}</h1>
                        <a id="weblink" href={mapInfo.website}>Check them out!</a> 
                            <form className="submit_form" onSubmit = {handleSubmit} >
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

                