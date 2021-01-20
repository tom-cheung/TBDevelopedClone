import React from 'react'
import QuestionIndex from '../question/question_index'
import ResolvedIndex from '../resolved/resolved_index'
import '../../assets/stylesheets/bulletin_board.css'
import CreateQuestionFormContainer from '../question/create_question_form_container'
import MessengerContainer from '../messenger/messenger_container'



class BulletinBoard extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            idx: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.props.fetchQuestions()
    }


    handleClick(num){
        this.setState({idx: num})
    }


    isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    render(){
        

        // console.log(this.props.questions)

        if(this.isEmpty(this.props.questions)){
            return(
                null
            )
        }else{
            // console.log(this.props.questions)
            const questionArray = []
            const resolvedArray = []
            const usernames = []
            Object.values(this.props.questions).forEach(question => {
                if(question.solved === false){
                    questionArray.push(question)
                }else{
                    resolvedArray.push(question)
                }
                usernames.push(question.user)

            })
            return(
                <div className="bulletin_container">
                    <div className='bulletin_content'>
                        <div className='bulletin_left'>
                            <div className='qr'>
                                <div className='questionsTab' onClick={() => this.handleClick(0)}>Questions</div>
                                <div className='resolvedQuestionsTab' onClick={() => this.handleClick(1)}>Resolved</div>
                            </div>

                            {this.state.idx === 0 ? <QuestionIndex questions={questionArray} /> 
                            : 
                            <ResolvedIndex resolved={resolvedArray}/>}
                        </div>

                        <div className="bulletin_spacing"></div>
                        
                        <div className='questionForm'>
                            <CreateQuestionFormContainer />
                        </div>
                    </div>
                </div>
            )
        }
    }


}

export default BulletinBoard


