import React from 'react';
import axios from 'axios';

class ProfilePhotoUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.currentUser,
            photoFile: null,
            photoUrl: null,
            selectedPhoto: 0,
        };
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    

    handleFile(e) {
        const file = e.target.files[0];
        // console.log(file.name)
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result, selectedPhoto: 1});
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
       

        axios.get("https://ty559p5ri0.execute-api.us-west-1.amazonaws.com/default/getImageURL")
        .then(resp=>
            fetch(resp.data.uploadURL, {
            method: "PUT",
            body: this.state.photoFile }
            ).then(resp=> {
                // this.setState({user: {profile: resp.url}});
                this.setState(prevState => {
                    let user = Object.assign({}, prevState.user);  // creating copy of state variable jasper
                    user.profile = resp.url;                     // update the name property, assign a new value
                    this.props.updateUser(user);
                });
                // console.log(this.state.user);
            }));
        // 


    }
   
    render() {
        console.log(this.props.currentUser);
        const preview = this.state.photoUrl ? <img className="upload_form_preview_img" src={(this.state.photoUrl)} /> : null

        if (this.state.selectedPhoto === 0) {
            return (
                <div className="upload-container">
                    <h2>Upload photos</h2>
                    <label className="upload-label">
                        Select Photo
                        <input type="file" onChange={this.handleFile} style={{ display: "none" }} />
                    </label>
                </div>
            )
        }

        if (this.state.selectedPhoto > 0) {
            return (
                <div className="upload-container-with-image">
                    <div className="upload-container-left">
                        {preview}
                    </div>
                    <form className="upload-photo-form">
                    
                        <div className="cancel-submit">
                            <input className="upload-button-upload" onClick={this.handleSubmit} type="submit" value="Upload" />
                        </div>
                    </form>
                </div>
            )
        }
    }
}

export default ProfilePhotoUpload;
