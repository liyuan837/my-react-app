/**
 * Created by stb on 2018/1/30.
 */
import { connect } from 'react-redux'
import  { withRouter }  from  'react-router-dom';
import Main from'../components/main'
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
let MainSmart =  connect(
    mapStateToProps, mapDispatchToProps
)(Main)

export default MainSmart
