import React from 'react'

const Footer = () => {

    let style = {
        color: 'olive',
        fontSize: "15px",
        position: 'absolute',
        bottom: '0'
    }
    return (
        <section className="white-text">
            <span style={style}>Wanderlust <i class="copyright outline icon"></i>  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/andy-reyes-3b16ba6a/"><i class="fa fa-linkedin-square"></i></a></span>
        </section>
    )

}

export default Footer
