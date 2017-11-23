import {connect} from 'react-redux'
import Home from '../components/home'

const mapStateToProps = state => {
    return {}
} 

const mapDispatchToProps = dispatch => {
    return {}
}

const CHome = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)

export default CHome