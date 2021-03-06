import React, { PropTypes, Component } from 'react'

//Css
import layoutStyle from 'components/layout.css'
import style from './land.css'

//Custom components
import FilePreviewByType from 'components/helpers/filePreviewByType/filePreviewByType'

class App extends Component { 

  render() {
    return ( 
    	<div className={style.tileContainer}>		    

		    {/*title*/}
	    	<div className={style.titleContainer}>
	    		<a href="/topic" style={{"textDecoration": "none"}}>
	    		<div className={style.titleWrap+" flex-row-start-start"} style={{"height":this.props.tileStyle.titleHeight,"padding":this.props.tileStyle.titlePadding}}>
	    			<div className={style.iconWrap+" vertical-center"} style={{"width":this.props.tileStyle.titleIconWidth}}>
	    				<img src={this.props.data.logoUrl} />
	    			</div>
	    			<div className={style.title+" vertical-center"}>
	    				<span style={{"fontSize": this.props.tileStyle.titleFontSize}}>
	    				{this.props.data.title}
	    				</span>	    				
	    			</div>		    			
	    		</div>
	    		</a>
	    	</div>

	    	{/*desc wrap*/}
	    	<div className={style.tileDescWrap} >
	    		<a href="/topic" style={{"textDecoration": "none"}}>
	    		<div className={" card-2"}>
			    	{/*image*/}
			    	<div className={style.tileImgWrap}  style={{"height":this.props.tileStyle.imgHeight}}>
			    		<FilePreviewByType fallback={"/assets/img/defaultImg.jpg"} file={this.props.data.contentUrl}/>			    			    	  
				    </div>

					{/*desc*/}
			    	<div className={style.descBx+" "}>
				    	<div className={style.subtitle+" "}>
				    		<span style={{"fontSize": this.props.tileStyle.subTitleFontSize}}>
				    		{this.props.data.subTitle}
				    		</span>	
				    	</div>
				    	<div className={style.metadetails+" flex-row-start-start"}>
				    		<div className={style.details1+" vertical-center"}>
				    			<span>-&nbsp;</span>
				    			<span className={style.profname}>
				    			{this.props.data.teacherName}
				    			</span>
				    		</div>
				    		<div className={style.details2+" vertical-center"}>
				    			<span>/ {this.props.data.teacherProfession}</span>
				    		</div>	
				    	</div>

				    	<div className={style.metadetails+" flex-row-start-start"}>
				    		<div className={style.details1+" vertical-center"}>				    			
				    			<span style={{"fontSize": "16px","color":"green","fontWeight":"600"}} >
				    				{this.props.data.cost} CLP
				    			</span>
				    		</div>				    			
				    	</div>	    	  
				    </div>
			    </div>
			    </a>
			</div> 			    	  
		    
	    </div>	
    	  	
    );
  }
}

export default App;
