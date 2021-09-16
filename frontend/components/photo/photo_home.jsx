import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class PhotoHome extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPhotos();
        this.props.fetchUsers();
    }
  

    render() {
        const { photos } = this.props;
        const { users } = this.props;
        if (!photos) return null;
        if (!users) return null;
      
        
        
        return (
            <div className="photo-index-box">
                <div className="entry-img-editor-choice">
                    <img src={photos[3]? photos[3].post : null } />
                </div>
                <div className="column-of-header">
                    <h1>The best of the best</h1>
                    <p>Our editors are always on the lookout for jaw dropping content for you to discover and stay inspired. Check back weekly to see what’s new.</p>
                    <Link to="">View Editors' Choice</Link>  
                </div>
                <div className="editor-choice">
                    <img src={photos[1] ? photos[1].post : null}/>
                </div>
            </div>
           
        )
    }

};

export default PhotoHome;
