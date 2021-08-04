import React from 'react';
// import { Redirect } from 'react-router-dom';

class UploadPhoto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            title: "",
            description: "",
            ownerId: this.props.currentUser,
            redirect: false,
            photoFile: null,
            photoUrl: null,
            tError: false,
            // selectForm: 0,
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
        }
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.titleError() === false) {
            const formData = new FormData();
            formData.append("photo[title]", this.state.title);
            formData.append("photo[description]", this.state.description);
            formData.append("photo[ownerId]", this.state.ownerId);
            formData.append("photo[photo]", this.state.photoFile);
            this.props.createPhoto(formData).then(rest => this.props.history.push(`/photos/${rest.photo.id}`));
        }
    }



    handleCancel(e) {
        this.setState({ selectForm: 0 });
    }
    titleError() {
        if (this.state.title.length !== 0) {
            return false;
        }
        this.setState({ tError: true });
    }


    render() {
        const preview = this.state.photoUrl ? <img className="upload_form_preview_img" src={this.state.photoUrl} /> : null

        // if (this.state.selectForm == 0) {
            return (
                <div className="upload_container">
                    <h3>Upload</h3>
                    <div className="upload_form_container">
                        <i className="fas fa-arrow-up"></i>
                        <h2>Upload photos</h2>
                        
                        <label className="upload_lable" for="selectedFile">
                            Select Photo
                            <input type="file" onChange={this.handleFile} id="selectedFile" style={{ display: "none" }} />
                        </label>
                        <div className="requirements_for_photos">
                            <h3>Photo requirements</h3>
                            .jpg only
                            Max. photo dimensions are 200MP/megapixels
                            <h3>Licensing requirements</h3>
                            Min. photo dimensions are 3MP/megapixels
                            No watermarks, logos, or borders
                            No NSFW content
                        </div>
                    </div>
                </div>
            )
        // }

        // if (this.state.selectForm == 1) {
        //     return (
        //         <div className="upload_container">
        //             <h3>Upload</h3>
        //             <div className="upload_container_from_two">
        //                 <div className="upload_form_preview">
        //                     {preview}
        //                 </div>
        //                 <form className="upload_form">
        //                     <h4>art selected</h4>
        //                     <label>Title:
        //                         <input className="upload_input" type="text" value={this.state.title} onChange={this.Update("title")} />
        //                         {this.state.tError ? <p className="errors">Title can not be empty</p> : null}
        //                     </label>
        //                     <label>Description:
        //                         <textarea cols="40" rows="6" className="upload_textarea" type="text" value={this.state.description} onChange={this.Update("description")} />
        //                     </label>
        //                     <div>
        //                         <button className="upload_button_cancel" onClick={this.handleCancel}>Cancel</button>
        //                         <input className="upload_button_upload" onClick={this.handleSubmit} type="submit" value="Upload" />
        //                     </div>
        //                 </form>
        //             </div>
        //         </div>
        //     )
        // }
    }
}

export default UploadPhoto;
