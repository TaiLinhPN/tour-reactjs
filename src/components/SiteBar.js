import Find from "./filter/Find"
import FiltPrice from "./filter/FiltPrice"

function SiteBar() {
    return (
        <dic className="filter">
            <div className="find">Tìm Kiếm</div>
            <div className="filter-box">
                <Find/>
                <FiltPrice/>
                

            </div>

        </dic>
    )
}

export default SiteBar