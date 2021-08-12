import React from 'react';
// import { Redirect } from 'react-router-dom';
import { IoArrowUp } from "react-icons/io5";


class UploadPhoto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            title: "",
            description: "",
            userId: this.props.userId,
            photoFile: null,
            photoUrl: null,
            selectForm: 0,
        };
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    Update(field) {
        return e => this.setState({ [field]: e.target.value });
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
            formData.append("photo[title]", this.state.title);
            formData.append("photo[description]", this.state.description);
            formData.append("photo[userId]", this.state.userId);
            formData.append("photo[post]", this.state.photoFile);
            this.props.createPhoto(formData).then(rest => this.props.history.push(`/photos/${rest.id}`));
        
    }
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
                            <input className="upload-input" type="text" value={this.state.title} onChange={this.Update("title")} />
                            {this.state.tError ? <p className="errors">Title can not be empty</p> : null}
                        </label>
                        <br />
                        <label>Description
                            <br />
                            <textarea cols="35" rows="3" className="upload-textarea" type="text" value={this.state.description} onChange={this.Update("description")} />
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
