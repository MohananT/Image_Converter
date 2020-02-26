import React from 'react';
import axios from 'axios';
import "./Uploader.css";

class Uploader extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            file: null,
            imgSrc: null
        }

    }

    onChangeHandler = (event) => {
        console.log('File', event.target.files[0]);

        this.setState({
            file: event.target.files[0]
        })

        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        // console.log(reader.readAsDataURL(event.target.files[0]));
        reader.onloadend = (e) => {
            this.setState({
                imgSrc: [reader.result]
            })
        }

        console.log('File', this.state.file);
    }

    uploadCheck = (event) => {
        const formdata = new FormData();
        formdata.append('file', this.state.file);
        axios.post("http://localhost:5000/api/upload", formdata, {
        })
        .then(res => {
            console.log(res.statusText);
        })
    }

    render() {
        const { file } = this.state;
        return (
            <div className="card-image">
                <input type="file" name="Add Image" className="card-image-button" 
                onChange={this.onChangeHandler}/>
                <div className="card-image-holder">
                    {file ? <img src={this.state.imgSrc} /> : null}
                </div>
                <button onClick={this.uploadCheck}>upload</button>
            </div>
        )
    }
}


export default Uploader;