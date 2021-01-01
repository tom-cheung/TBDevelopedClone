import {connect} from 'react-redux'
import ResponseForm from './answer_form'
import {postResponse} from '../../actions/responses_actions'


const mapStateToProps = (state, props)=> { 
    return (
    {newResponse: {
        consultation: '',
        answer: '',
        user: state.session.user.id
    },
    formType: 'Respond',})
}

const mapDispatchToProps = dispatch => ({
    processForm: (questionID, newResponse) => dispatch(postResponse(questionID, newResponse)) 
})

export default connect(mapStateToProps,mapDispatchToProps)(ResponseForm)