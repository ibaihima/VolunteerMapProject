import Catalog from './Catalog'
import Map from './Map';
function Home() {
    return(
        <div className="home-page">
            <div className="rightPage">
                <Catalog />
                <Map/>
            </div>
        </div>

    )
}


export default Home;