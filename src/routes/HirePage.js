import React from 'react';
import ContactForm from './HirePage/components/ContactForm';
import './HirePage/components/styles/HirePage.scss'
import Footer from './homePage/components/Footer';

function HirePage(){
    return (
        <div className='HirePageDiv'>
            <div className='HireColor'>
                <ContactForm/>
            </div>
            <Footer/>
        </div>
    )
}

export default HirePage;