import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import instagram from '../images/instagram1.png'
import face from '../images/face.png'
import logo from '../images/logo1.png'


export const Header = ({ startLogout }) => (
    <header className="header">
        <div className="content-container" >
            <div className="header__content">
                <Link className="header_title" to="/home" >
                    <img className="logo" src={logo}/>
                     <h1>Naruto</h1>
                </Link>
                <div className="social_icons">
                    <img src={instagram} />
                    <img src={face} />
                </div>
            </div>
        </div>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);
// <NavLink to="/portfolio" activeClassName='is-active' exact>Portfolio</NavLink>
// <NavLink to="/contact" activeClassName='is-active'>Create Expense</NavLink>