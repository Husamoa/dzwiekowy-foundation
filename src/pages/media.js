import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import {RiFacebookBoxFill} from "react-icons/ri";

const MediaPage = () => {
    return (
        <Layout>
            <h1>Kontakt</h1>
            <p>
                Prosimy o kontakt telefoniczny lub przez formularz kontaktowy.
            </p>
            <ul>
                <li>
                    <Link to="/contact">Formularz kontaktowy</Link>
                </li>
                <li>
                    mail: <a
                    href="mailto:tenisstolowydzwiekowy@gmail.com">tenisstolowydzwiekowy@gmail.com</a>
                </li>
                <li>
                    tel: <a href="tel:+48668336781">668 336 781</a>
                </li>
            </ul>
            <h4>Zapraszam do obejrzenia spotu promującego Tenis Stołowy Dźwiękowy i polubienia nas na &nbsp;
                    <a sx={indexStyles.socialIcons} style={{fontSize: "32px"}} href={'https://www.facebook.com/dzwiekowy'} target="_blank" rel='noreferrer'>{
                        <RiFacebookBoxFill/>}</a>
            </h4>
            <div className="responsive-container">
                <iframe className="responsive-iframe" title="Spot Tenisa Stołowego Dźwiękowego"
                        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdzwiekowy%2Fvideos%2F363264254438433%2F&show_text=0&width=560"
                        allowFullScreen={true}/>
            </div>
        </Layout>
    )
}

export default MediaPage

const indexStyles = {
    socialIcons: {
        "a":{
            color: "socialIcons",
            ":hover":{
                color:"socialIconsHover",
            }
        }
    }
}