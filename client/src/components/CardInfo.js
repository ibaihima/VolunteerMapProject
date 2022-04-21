function CardInfo({mapInfo, submitText}){
    return(
<div className="wrapper">
            <div className="container">
                <div className="top"></div>
                <div className="bottom">
                    <div className="left">
                        <div className="details">
                            <h1>{mapInfo.organization_name}</h1>
                        </div>
                        <div>
                        <button className="list" >Add To List</button>                         
                        </div>
                        <a href={mapInfo.website}>Go Support</a>
                    </div>
                    <div className='right'>
                         <p className ='details'>{mapInfo.program_description}</p>
                    </div>
                    <div>
                        <input className="textBox" type="text" name="text" placeholder="Submit a review" onSubmit={(review) => submitText(review)} /> 
                    </div>
                </div>
            </div>
        </div>               
    )
}

export default CardInfo; 

                

                // {mapInfo.program_description}