import React from 'react'
import '../pages/landingPage.css'
import { useGlobalContext } from '../context/shelterContext'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const {postalCode, setPostalCode} = useGlobalContext()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(postalCode.length !== 5) {
            return
        } else if (isNaN(postalCode)) {
            return
        } else {
            navigate('/searchResults')
        }

    }
    return (
        <>
            <section class="bgimage  px-4 py-5 img-fluid ">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className='row'>
                                <ul class="list-unstyled">
                                <div className='volunteer-title'><h1>Animal Volunteering Reimagined</h1>
                                <div className='blockquote'>Our primary goal is to keep people and pets together. We are bringing animal welfare organizations and community members together to engage in partnerships that support the bond of people and animals.</div>
                                </div>
                                </ul>
                                <form className='px-5 py-5' onSubmit={handleSubmit}>
                                    <input type="text" name="text" class="search" placeholder="Search by zip code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)}/>
                                    <button type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bgimage2'></section>
        </>


    )
}

export default LandingPage