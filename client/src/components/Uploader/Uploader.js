import React from 'react';
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

    render() {
        const { file } = this.state;
        return (
            <div className="card-image">
                <input type="file" name="Add Image" className="card-image-button" 
                onChange={this.onChangeHandler}/>
                <div className="card-image-holder">
                    {file ? <img src={this.state.imgSrc} /> : null}
                </div>
            </div>
        )
    }
}


export default Uploader;