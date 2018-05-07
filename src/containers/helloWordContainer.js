/**
 * Created by stb on 2018/1/30.
 */
import { connect } from 'react-redux'
import  { withRouter }  from  'react-router-dom';
import HellowWord from'../components/helloWorld'
import {getFistAction, clickAction} from '../actions/firstAction.js'
function mapStateToProps(state) {
    return {
        firstState: state.firstState
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getFistAction:() => dispatch(getFistAction()),
        clickAction:() => dispatch(clickAction())
    }
}
let HelloWordSmart =  connect(
    mapStateToProps, mapDispatchToProps
)(HellowWord)

export default HelloWordSmart
