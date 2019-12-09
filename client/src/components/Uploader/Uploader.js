import React from 'react';
import "./Uploader.css";

class Uploader extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            file: null
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler = (event) => {
        console.log('File', event.target.files[0]);

        this.setState({
            file: event.target.files[0]
        })

        console.log('File', this.state.file);
    }

    render() {
        return (
            <div className="card-image">
                <input type="file" name="Add Image" className="card-image-button" onChange={this.onChangeHandler}/>
                <div className="card-image-holder">

                </div>
            </div>
        )
    }
}


export default Uploader;