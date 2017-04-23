import React, { PropTypes, Component } from 'react'


//Css
import style from './filePreviewByType.css'

class App extends Component {    
    
    render() {        

        let fileSrc  
        let fileExt

        if(!this.props.file || this.props.file==""){
            fileSrc=this.props.fallback
            fileExt = this.props.fallback.split(".").reverse()[0]
        }

        if(this.props.file && typeof this.props.file=="object"){
            fileSrc = this.props.file.preview
            fileExt = this.props.file.name.split(".").reverse()[0]
        }
        if(this.props.file && typeof this.props.file=="string"){
            fileSrc = this.props.file
            fileExt = this.props.file.split(".").reverse()[0]
        }        

        if(fileExt=="doc" || fileExt=="docx"){
            fileSrc="/assets/img/msword.png"
        }else if(fileExt=="ppt" || fileExt=="pptx"){
            fileSrc="/assets/img/msppt.png"
        }else if(fileExt=="xls" || fileExt=="xlsx"){
            fileSrc="/assets/img/msexcel.png"
        }else if(fileExt=="pdf"){
            fileSrc="/assets/img/pdf.png"
        }else if(fileExt!="jpg" && fileExt!="jpeg" && fileExt!="png" && fileExt!="tif" && fileExt!="gif" && fileExt!="svg"){
            fileSrc="/assets/img/file2.png"
        }

        let fileStyle = {
          backgroundImage    : `url("${fileSrc}")`,
          backgroundSize     : 'cover',
          backgroundPosition : 'center center',
          backgroundRepeat   : 'no-repeat'
        }

        return ( 		
            <div className={style.imgTag} style={{...fileStyle}} ></div>	  	
    );
  }
}

export default App
