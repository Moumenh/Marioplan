import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import SignedInLinks from './signedinlinks';
import SignedOutLinks from './signedoutlinks';


const Navbar = ({auth}) => {
    const links = auth.uid ? <SignedInLinks/> : <SignedOutLinks/>
    return(
        <nav className="nar-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className='brand-logo'>MarioPlan</Link>
                { auth.isLoaded && links }
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth // using this to access uid and use it
    }
}

export default connect(mapStateToProps)(Navbar);