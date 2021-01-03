import React from 'react';
import { Link } from 'react-router-dom'
import '../../assets/stylesheets/reset.css';
import '../../assets/stylesheets/navbar.scss';




class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div>
                    <Link to={'/profile'}>Profile</Link>
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div className='right-navbar'>
                    <Link to={'/login'} className='signinButton'>Sign in</Link>
                    <Link to={'/signup'} className='signupButton'>TRY FOR FREE</Link>
                </div>
            );
        }
    }

    render() {
        const tbdevelopedHeader = () => {
            if(this.props.loggedIn === false){
                return(
                    <Link to='/'><h1>TBDeveloped</h1></Link>
                )
            }else{
                return (
                    <Link to='/bulletin'><h1>TBDeveloped</h1></Link>
                )
            }
        }
        return (
            <div className='navbar-container'>
                <div className='nav-header-bar'>
                    <div className='left-navbar'>
                        <div className='brand-navbar'>{tbdevelopedHeader()}</div>
                        
                        <div className='team-navbar'>About
                            <div className='team-container'>
                                <div className='teamInfo-navbar'>
                                    <div>
                                        <div className='individual-member'>
                                            <div>Oliver Lopez</div>
                                        </div>
                                        <div className='individual-member'>
                                            <div>Shane Sharareh</div>   
                                        </div>
                                        <div className='individual-member'>
                                            <div>Thomas Cheung</div>
                                        </div>
                                        <div className='individual-member'>
                                            <div>William Leung</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 

                    </div>

                    <div>{ this.getLinks()}</div>
                </div>
            </div>
        );
    }
}

export default NavBar;
