import React from 'react';
import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions/photo_actions';
class Entry extends React.Component {
   
    render() {
       
        return (
            <div className="entry-image-box">
                <img src="https://blowup-dev.s3.us-west-1.amazonaws.com/buzlugol.jpeg"/>
            </div>
        );


    };

};
export default Entry;

