import React from 'react';
import { Link } from 'react-router-dom'
import '../../assets/stylesheets/reset.css';
import '../../assets/stylesheets/navbar.scss';
import dino2 from '../../assets/images/dino2.png';
import linkedin from '../../assets/images/linkedin.png';
import messageImg from '../../assets/images/chat.png'

//!{/* //!WL 1/19/ trying to kill chat connection */}
import MessengerContainer from '../messenger/messenger_container'
//!{/* //!WL 1/19/ trying to kill chat connection */}

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);

        // console.log('18', this.props.currentUser)

        //!{/* //!WL 1/19/ trying to kill chat connection */}
            this.state = {
                // showComponent: false,
                chats: []
                
            }
            this.openChat = this.openChat.bind(this);
            // this.chatItself = this.chatItself.bind(this);
            this.leaveChat = this.leaveChat.bind(this)
        //!{/* //!WL 1/19/ trying to kill chat connection */}
    }
    

    componentDidMount() {
        this.props.fetchUser()
    }

    componentDidUpdate(prevState, b) {
        // if (prevState.currentUser.questions.length != this.props.currentUser.questions.length) {
        //     console.log('updating')
        //     this.props.fetchUser()
        // }
    }

    logoutUser(e) {
        e.preventDefault();
        //!TEST

        let chatArr = [...this.state.chats];
        
        if(chatArr.length > 0 ){
            console.log(this.state.chats)
            for(let i = 0; i < chatArr.length; i ++){
                this.leaveChat(chatArr[i])
            }

        }
        
        //!TEST
        this.setState({
            chats: []
        })
        console.log(this.state.chats)
        // console.log(this.state.chats)
        this.props.logout();
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div className='lefty'>
                    <button onClick={this.logoutUser} className='logoutButton'>Logout</button>
                    <Link to={'/profile'} className='profileButton'>Profile</Link>
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
//!{/* //!WL 1/19/ trying to kill chat connection */}
    openChat(chat){

        console.log(chat)

        let chatsArray = this.state.chats

        if (!chatsArray.includes(chat)){
            if(chatsArray.length >= 3){
                let closeChat = chatsArray.shift();
                
                console.log('remove',closeChat);

                let leaveButton = document.getElementById(`leaveChat${closeChat._id}`)
                leaveButton.click()
                // delete chatsArray[chatsArray.indexOf(closeChat)]
                // chatsArray.splice(chatsArray.indexOf(chat), 1)
            }

            chatsArray.push(chat)
            this.setState({chats: chatsArray})
        }
        // console.log(chatsArray)
        // this.setState({chats: chatsArray})
        // console.log('all', this.state.chats)

    }

    // openChat(chat){
    //         let chatsArray = this.state.chats
    //     if (!chatsArray.includes(chat)){
    //         chatsArray.push(chat)
    //     }
    //     console.log(chatsArray)
    //         this.setState({chats: chatsArray})

    // }

    leaveChat(chat){ 
        let leaveButton = document.getElementById(`leaveChat${chat._id}`)
        // console.log(leaveButton)
        leaveButton.click()
        let chatsArray = this.state.chats
        // console.log(chatsArray[0])
        // delete chatsArray[chatsArray.indexOf(chat)]
        chatsArray.splice(chatsArray.indexOf(chat), 1)
        console.log(chatsArray)

        this.setState({chats: chatsArray})
    }

    isEmpty(currentUser) {
        return Object.values(currentUser).length === 0 
    }


    // chatItself(){
    //     // console.log('state', this.state.chatID)
    //     if(this.state.chatID === ''){
    //         return null
    //     }else{
    //         return(
    //             <div>
    //                 <MessengerContainer chatID={this.state.chatID}/>
    //             </div>
    //         )

    //     }
    // }
//!{/* //!WL 1/19/ trying to kill chat connection */}
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

                        
                        <Link to='/'><img alt="" src={dino2} className='brand-icon'/></Link>
                        <div className='brand-navbar'>{tbdevelopedHeader()}</div>


                        
                        <div className='team-navbar'>About
                            <div className='team-container'>
                                <div className='teamInfo-navbar'>
                                    <div className='teamInfo-group'>
                                        <div className='individual-member'>
                                            <a href='https://www.linkedin.com/in/oliverlopez23/' className='linked_a'>
                                                <img alt="" src={linkedin} className='linkedin-icon'/>
                                                <div className='person_name'>Oliver Lopez</div>
                                            </a>    
                                        </div>
                                        <div className='individual-member'>
                                            <a href='https://www.linkedin.com/in/shanesharareh/' className='linked_a'>
                                                <img alt="" src={linkedin} className='linkedin-icon'/>
                                                <div className='person_name'>Shane Sharareh</div>
                                            </a>    
                                        </div>
                                        <div className='individual-member'>
                                            <a href='https://www.linkedin.com/in/thomas-cheung-38953034/' className='linked_a'>
                                                <img alt="" src={linkedin} className='linkedin-icon'/>
                                                <div className='person_name'>Thomas Cheung</div>
                                            </a>  
                                        </div>
                                        <div className='individual-member'>
                                          <a href='https://www.linkedin.com/in/william-leung-60589a73/' className='linked_a'>
                                                <img alt="" src={linkedin} className='linkedin-icon'/>
                                                <div className='person_name'>William Leung</div>
                                            </a>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 

                    </div>

                    
                    <div >

                        { !this.isEmpty(this.props.currentUser) ? 

                        <div> 
                        {this.props.currentUser.activeChats.length > 0 ? 
                        <div>
                            <div className='chatDropdown'> 


                            
                            <img src={messageImg} className='messageImg'/>
                        <ul className='chatList'>
                            {this.props.currentUser.activeChats.map((chat) => {
                            
                                return (
                                    <div className='chat_list_items' onClick={() => this.openChat(chat)}>   
                                        {/* {console.log(chat)} */}
                                        <img src={`https://robohash.org/${this.props.currentUser.id === chat.posterID._id ? chat.responderID._id : chat.posterID._id }?100x100`} 
                                        className='robotNav' />
                                        
                                        <li className="chat_list_li">
                                            {this.props.currentUser.id === chat.posterID._id ? 
                                            `${chat.responderID.username} - ${chat.questionSubject.substring(0, 15)}` 
                                            : 
                                            `${chat.posterID.username} - ${chat.questionSubject.substring(0, 15)}`}
                                    
                                        </li>
                                            
                                            {/* {this.chatItself()} */}


                                    </div>
                                )
                            
                            
                        })}

                                
            
                                    
                            </ul>
                            </div>
                            <div className='chats'>
                                {this.state.chats.map(chat => {
                                    return(
                                        <div className='chatContainer'>
                                        
                                            <div> 
                                                <div className='test' > 
                                                    <button onClick={() => this.leaveChat(chat)} className='leaveChat' >X</button>

                                                    <div className='test2'> 
                                                        <marquee behavior="scroll" direction="left" scrollamount="3">
                                                        <div className='otherTest'> 
                                                            <img src={`https://robohash.org/${this.props.currentUser.id === chat.posterID._id ? chat.responderID._id : chat.posterID._id}?100x100`}
                                                                className='robotChat' />
                                                                

                                                            {this.props.currentUser.id === chat.posterID._id ?
                                                                `${chat.responderID.username}-${chat.questionSubject}`
                                                                :
                                                                `${chat.posterID.username}-${chat.questionSubject}`}
                                                                
                                                        </div>
                                                    
                                                        </marquee>
                                            
                                                    </div>
                                                </div>
                                                <div>
                                                <MessengerContainer chatID={chat._id} />
                                                </div>
                                            </div>

                                      </div>
                                    )
                                })}
                            </div>
                        </div>

                        :   <div className='chatDropdown'> 
                                <img src={messageImg} className='messageImg'/>
                                <div className='chatList'> No Active Chats!</div>
                            </div>

                    
                    }
                    </div>
                    : null
                    }
                        
                        
                    </div>

                    <div>{ this.getLinks()}</div>
                </div>
            </div>
        );
    }
}

export default NavBar;
