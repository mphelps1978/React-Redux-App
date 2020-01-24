import React from 'react'
import { connect } from 'react-redux'
import { ClipLoader } from "react-spinners";
import { Button } from 'reactstrap';
import '../buttons.css'

import {fetchActivity} from '../actions/'

const classes = `btn btn-info btn-lg btn-radius btn-outline btn-outline-light `;

function Quote(props) {
  return (
    <div>
<Button
className={classes}
onClick={props.fetchActivity}>Get Quote</Button>
      {!props.activity && !props.isLoading && (
        <h2>Become Inspired!</h2>
      )}
      {props.isLoading && (
        <div className="loader">
        <ClipLoader
        color='white'
        loading={props.isLoading}/>
        </div>
      )}
      {props.activity && !props.isLoading &&
      <div><h2 className="quote">"{props.activity.quoteText}"</h2><h4 classname="author">-{props.activity.quoteAuthor}</h4></div>}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    activity: state.activity,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchActivity }
)(Quote);

