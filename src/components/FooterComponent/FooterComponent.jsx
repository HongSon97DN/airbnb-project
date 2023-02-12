import React from 'react'

export default function FooterComponent() {
    return (
        <section className='footer'>
            <div className="my_container">
                <div className="footer_top">
                    <div className="ft_support w_25">
                        <div className="title">
                            <h3>Support</h3>
                        </div>
                        <ul className="ft_list">
                            <li>
                                <span>Help Center</span>
                            </li>
                            <li>
                                <span>AirCover</span>
                            </li>
                            <li>
                                <span>Supporting people with disabilities</span>
                            </li>
                            <li>
                                <span>Cancellation options</span>
                            </li>
                            <li>
                                <span>Our COVID-19 Response</span>
                            </li>
                            <li>
                                <span>Report a neighborhood concern</span>
                            </li>
                        </ul>
                    </div>
                    <div className="ft_community w_25">
                        <div className="title">
                            <h3>Community</h3>
                        </div>
                        <ul className="ft_list">
                            <li>
                                <span>Airbnb.org: disaster relief housing</span>
                            </li>
                            <li>
                                <span>Combating discrimination</span>
                            </li>
                        </ul>
                    </div>
                    <div className="ft_guest w_25">
                        <div className="title">
                            <h3>Hosting</h3>
                        </div>
                        <ul className="ft_list">
                            <li>
                                <span>Airbnb your home</span>
                            </li>
                            <li>
                                <span>AirCover for Hosts</span>
                            </li>
                            <li>
                                <span>Explore hosting resources</span>
                            </li>
                            <li>
                                <span>Visit our community forum</span>
                            </li>
                            <li>
                                <span>How to host responsibly</span>
                            </li>
                        </ul>
                    </div>
                    <div className="ft_airbnb w_25">
                        <div className="title">
                            <h3>Airbnb</h3>
                        </div>
                        <ul className="ft_list">
                            <li>
                                <span>Newsroom</span>
                            </li>
                            <li>
                                <span>Learn about new features</span>
                            </li>
                            <li>
                                <span>Letter from our founders</span>
                            </li>
                            <li>
                                <span>Careers</span>
                            </li>
                            <li>
                                <span>Investors</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="ft_left">
                        <div className='aribnb_inc'>
                            <span className='ft_border'>© 2022 Airbnb, Inc.</span>
                        </div>
                        <span className='pad'>·</span>
                        <div className='aribnb_inc'>
                            <span className='ft_border'>Privacy</span>
                        </div>
                        <span className='pad'>·</span>
                        <div className='aribnb_inc'>
                            <span className='ft_border'>Terms</span>
                        </div>
                        <span className='pad'>·</span>
                        <div className='aribnb_inc'>
                            <span className='ft_border'>Site map</span>
                        </div>
                    </div>
                    <div className="ft_right">
                        <div className="right_language">
                            <div className="aribnb_inc">
                                <i className="fa-sharp fa-solid fa-globe"></i>
                                <span className='ft_border'>English(US)</span>
                            </div>
                            <div className="aribnb_inc">
                                <span className='lan_vn'>$</span>
                                <span className='ft_border'>USD</span>
                            </div>
                        </div>
                        <div className="right_social">
                            <div className="social_icon">
                                <i className="fa-brands fa-facebook-f"></i>
                            </div>
                            <div className="social_icon">
                                <i className="fa-brands fa-twitter"></i>
                            </div>
                            <div className="social_icon">
                                <i className="fa-brands fa-square-instagram"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


