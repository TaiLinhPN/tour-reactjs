import Find from "./filter/Find"
import FiltPrice from "./filter/FiltPrice"
import CheckBox from "./filter/CheckBox"

function SiteBar() {
    return (
        <div className="filter">
            <div className="find">Tìm Kiếm</div>
            <div className="filter-box">
                <Find/>
                <FiltPrice/>
                <CheckBox/>
                

            </div>

        </div>
    )
}

export default SiteBar