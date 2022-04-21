import CardInfo from './CardInfo'
function Catalog({mapInfo, submitText, charityId}){
    return(
        <div className= "catalog"> 
            <div className="topCatalog">
                <CardInfo mapInfo={mapInfo} submitText={submitText} charityId={charityId}/>
            </div>
            <div className="bottomCatalog"> 
            
            </div>
        </div>

    )
}

export default Catalog;