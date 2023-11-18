const Footer = ()=>{
    const currentYear = new Date().getFullYear();

    return(
        <footer className=" font-geist">
        <p>&copy; {currentYear} Abu Talha. All rights reserved.</p>
      </footer>
    )
}

export default Footer;