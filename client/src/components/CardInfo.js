function CardInfo({mapInfo, submitText}){

    function handleSubmit(charity){
        charity.preventDefault();
        console.log(charity)
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
                                <input className="textBox" type="text" placeholder="Submit a review" onSubmit={handleSubmit}/> 
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