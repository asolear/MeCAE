import { Routes, Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import terciario from '../assets/jpg/terciario.jpeg'
import industrial from '../assets/jpg/industrial.jpeg'
import transporte from '../assets/jpg/transporte.jpeg'
import residencial from '../assets/jpg/residencial.jpeg'
import Slider from "../components/Slider"

const Explore = () => {
    return (
        <div className="explore">
            <header>
                <p className="pageHeader" style={{ textAlign: "center", margin: "20px 0" }}>Mercado de ahorros energéticos .</p>
            </header>

            <main>
                {/* <Slider /> */}

                <p className="exploreCategoryHeading">Sectores</p>
                <div className="exploreCategories">
                    <Link to='/category/rent'>
                        <img src={terciario} alt="rent" className="exploreCategoryImg" />
                        <p className="exploreCategoryName">Industrial</p>
                    </Link>

                    <Link to='/category/sale'>
                        <img src={industrial} alt="sale" className="exploreCategoryImg" />
                        <p className="exploreCategoryName">industrial</p>
                    </Link>

                    <Link to='/category/sale'>
                        <img src={transporte} alt="sale" className="exploreCategoryImg" />
                        <p className="exploreCategoryName">transporte</p>
                    </Link>

                    <Link to='/category/sale'>
                        <img src={residencial} alt="sale" className="exploreCategoryImg" />
                        <p className="exploreCategoryName">residencial</p>
                    </Link>
                </div>
            </main>


        </div>
    )
}

export default Explore