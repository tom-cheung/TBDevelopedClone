import React from 'react'
import AnswerIndexItemContainer from '../answer/answer_index_item_container'

class AnswerIndex extends React.Component {
   constructor(props) {
       super(props)



       this.createChat = this.createChat.bind(this);
   }

   async createChat(questionID, responseID, responderID, posterID, questionSubject){
        let newChat = {
            questionID: questionID, 
            responseID: responseID, 
            posterID: posterID,
            responderID: responderID,
            questionSubject: questionSubject
        };
       await this.props.createChat(newChat);
        this.props.fetchUser()

   }
    


    render() {
        let questionID = this.props.questionID;
        return(

        <div>
            {this.props.responses.map((response, i) =>{
                    return(
                    <div className= "answer-index-container" key={i}>
                        <AnswerIndexItemContainer fetchQuestion={this.props.fetchQuestion}  response={response} questionID = {this.props.questionID} currentUserID={this.props.currentUserID} />
                        <button className="chatButton" onClick={ () => {this.createChat(questionID, response._id, response.user._id, this.props.posterID, this.props.questionSubject)}}> Start a chat with {response.user.username}!</button>
                    </div>
                    )
            })}
        </div>
        )
    }
}

export default AnswerIndex

// 'responseID': response._id, 'responderID':response.user._id, 'posterID': this.props.posterID

                                
