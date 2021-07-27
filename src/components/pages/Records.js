import React from "react"
import ResultsTable from "../../containers/results/resultsTable"

// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';

export  default function Records (props){
    return (
        <div>
      
        <ResultsTable
          results={props.results}
        />
      </div>
    )
}

// function mapStateToProps(state) {
//   return {
//       results: state.results
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//       saveAndGetResultToState: bindActionCreators(saveAndGetResult, dispatch),
//   }
// }

//  export default connect(mapStateToProps, mapDispatchToProps)(Records);