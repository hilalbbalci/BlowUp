import React from 'react';

class ProfilePhotoUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photoFile: null,
            photoUrl: null,
            selectedPhoto: 0
        }
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Update(field) {
    //     return e => this.setState({ [field]: e.target.value });
    // }

    handleFile(e) {
        const file = e.target.files[0];
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
        const formData = new FormData();
        
        formData.append("user[profile]", this.state.photoFile);
    
        // this.props.updateUser(formData)
        // .then(resp => this.props.history.push(`/users/${resp.id}`));


    }
   
    render() {

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
