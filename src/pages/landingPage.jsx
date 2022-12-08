import React from 'react'
import '../pages/landingPage.css'


const LandingPage = () => {
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
                                <form className='px-5 py-5' action="" method="GET">
                                    <input type="text" name="text" class="search" placeholder="Search by zip code" />
                                    <input type="submit" name="submit" class="submit" value="Search" />
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