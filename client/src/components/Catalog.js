import CardInfo from './CardInfo'
function Catalog({mapInfo, submitText}){
    return(
        <div className= "catalog"> 
            <div className="topCatalog">
                <CardInfo mapInfo={mapInfo} submitText={submitText} />
            </div>
            <div className="bottomCatalog"> 
            
            </div>
        </div>

    )
}

export default Catalog;