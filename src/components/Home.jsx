import * as React from "react";
import About from './About/About';
import Team from './Team/Team';
import ContactForm from './Contact/ContactForm';
// import { Link } from "gatsby";

function Home() {
    return (<>
        <About />
        <Team />
        <ContactForm />
        </>
        );
}

export default Home;
