import React, {useState} from "react";

function CardInfo({mapInfo, submitText}){
    const [reviewContent, setReviewContent] = useState("")

    function handleChange(charity){
        setReviewContent(charity.target.value)
    }

    function handleSubmit(charity){
            fetch("/reviews",{
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({reviewContent})
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
                            <form >
                                <input className="textBox" type="text" placeholder="Submit a review" onChange={(charity) => handleChange(charity)}/> 
                                <button onClick={(e)=>handleSubmit(e)}> Enter </button>
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