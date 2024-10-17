import { Link } from "react-router-dom"
import rentCategoryImage from '../assets/jpg/industrial.jpeg'
import saleCategoryImage from '../assets/jpg/transporte.jpeg'
import Slider from "../components/Slider"

const Explore = () => {
    return (
        <div className="explore">
            <header>
                <p className="pageHeader">ahorros transformables en CAE.</p>
            </header>

            <main>
                <Slider />

                <p className="exploreCategoryHeading">Categories</p>
                <div className="exploreCategories">
                    <Link to='/category/rent'>
                        <img src={rentCategoryImage} alt="rent" className="exploreCategoryImg" />
                        <p className="exploreCategoryName">Places For Rent</p>
                    </Link>

                    <Link to='/category/sale'>
                        <img src={saleCategoryImage} alt="sale" className="exploreCategoryImg" />
                        <p className="exploreCategoryName">Places For Sale</p>
                    </Link>
                </div>
            </main>
        </div>
    )
}

export default Explore