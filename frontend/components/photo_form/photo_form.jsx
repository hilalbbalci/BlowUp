import React from 'react';
import { IoArrowUp } from "react-icons/io5";
import axios from 'axios';

class UploadPhoto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: {
                photo: {
            title: "",
            description: "",
            userId: this.props.userId, 
            post: ""
            }}, 
            photoFile: null,
            photoUrl: null,
            selectForm: 0,
        };
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    Update(field) {
        return e => this.setState({photo: {photo: Object.assign(
            {},
            this.state.photo.photo,
            { [field]: e.target.value } 
        )},
            photoFile: this.state.photoFile,
            photoUrl: this.state.photoUrl,
            selectForm: this.state.selectForm,
        });
    }
  

    handleFile(e) {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result, selectForm: 1 });
        };

        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
            const formData = new FormData();
            formData.append("photo[title]", this.state.photo.photo.title);
            formData.append("photo[description]", this.state.photo.photo.description);
            formData.append("photo[userId]", this.state.photo.photo.userId);
            formData.append("photo[post]", this.state.photoFile);

        axios.get("https://ty559p5ri0.execute-api.us-west-1.amazonaws.com/default/getImageURL")
            .then(resp =>
                fetch(resp.data.uploadURL, {
                    method: "PUT",
                    body: this.state.photoFile
                }
                ).then(resp => {
                    this.setState(prevState => {
                        let photo = Object.assign({}, prevState.photo); 
                        let url = resp.url.split("?");
                        photo.photo.post = url[0];     
                        this.props.createPhoto(photo).then(resp => {
                            this.props.history.push(`/photos/${resp.photo.id}`);
                        });
                    });
                }));
        // 


    }

    //         this.props.createPhoto(formData)
    //         .then(resp => {
    //             this.props.history.push(`/photos/${resp.photo.id}`);
    //         });

    // }
    handleCancel(e) {
        this.setState({ selectForm: 0 });
    }
   


    render() {
        const preview = this.state.photoUrl ? <img className="upload_form_preview_img" src={(this.state.photoUrl)} /> : null

        if (this.state.selectForm === 0) {
            return (
                <div className="upload-container">
                    <IoArrowUp size="30"/>
                    <h2>Upload photos</h2>
                    <label className="upload-label">
                        Select Photo
                        <input type="file" onChange={this.handleFile} style={{ display: "none" }} />
                    </label>                        
                    <div className="requirements-for-photos">
                        <div>
                            <h3>Photo requirements</h3>
                            .jpg only
                            Max. photo dimensions are 200MP/megapixels
                        </div>
                        <div>
                            <h3>Licensing requirements</h3>
                            Min. photo dimensions are 3MP/megapixels
                            No watermarks, logos, or borders
                            No NSFW content
                        </div>
                    </div>
                </div>
            )
        }

        if (this.state.selectForm > 0) {
            return (
                <div className="upload-container-with-image">
                    <div className="upload-container-left">
                        <label className="add-photo">
                            + Add
                            <input type="file" onChange={this.handleFile} style={{ display: "none" }} />
                        </label>
                        {preview}
                    </div>
                    <form className="upload-photo-form">
                        <label>Title
                            <br />
                            <input className="upload-input" type="text" value={this.state.photo.photo.title} onChange={this.Update("title")} />
                            {/* {this.state.tError ? <p className="errors">Title can not be empty</p> : null} */}
                        </label>
                        <br />
                        <label>Description
                            <br />
                            <textarea cols="35" rows="3" className="upload-textarea" type="text" value={this.state.photo.photo.description} onChange={this.Update("description")} />
                        </label>
                        <div className="cancel-submit">
                            <button className="upload-button-cancel" onClick={this.handleCancel}>Cancel</button>
                            <input className="upload-button-upload" onClick={this.handleSubmit} type="submit" value="Upload" />
                        </div>
                    </form>
                </div>
            )
        }
    }
}

export default UploadPhoto;
