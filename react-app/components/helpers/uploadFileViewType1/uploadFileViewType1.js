import React, { PropTypes, Component } from 'react'
import Dropzone from 'react-dropzone'

//Components
import FileTools from './fileTools'
import UploadingBar from './uploadingBar'
import FilePreviewByType from 'components/helpers/filePreviewByType/filePreviewByType'

//Css
import style from './uploadFileViewType1.css'

class App extends Component {     

    render() {        

        return ( 		
        <div className={style.container}>          
            <div className={style.wrap}>

                {/*Image*/}
                <div className={style.imgContainer}>   
                    <FilePreviewByType className={style.imgTag} file={this.props.file}/>                       
                </div>

                {/*Absolute Tools*/}
                <FileTools remove={this.props.remove}/>
                {/*<UploadingBar />*/}

            </div>
        </div>    	  	
    );
  }
}

export default App
