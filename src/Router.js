// Router.js
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CountriesList from "./componets/CountriesList"
import CountryDetails from "./componets/CountryDetails"
import Navbar from "./componets/Navbar"
import data from './countries.json'

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navbar />}>
                        <Route path='/countries' element={<CountriesList allCountries={data} />}>
                            <Route path=':cca3' element={<CountryDetails allCountries={data}/>} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router
