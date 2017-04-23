import React, { PropTypes, Component } from 'react'

//Css
import layoutStyle from 'components/layout.css'
import style from './land.css'

class App extends Component { 

  render() {
    return ( 
    	<div style={{...this.props.style}} className={style.tileContainer+" card-2"}>		    

		    {/*title*/}
	    	<div className={style.titleContainer}>
	    		<div className={style.titleWrap+" flex-row-start-start"}>
	    			<div className={style.iconWrap+" vertical-center"}>
	    				<img src="assets/img/msexcel.png" />
	    			</div>
	    			<div className={style.title+" vertical-center"}>
	    				<span>MS EXCEL</span>
	    			</div>		    			
	    		</div>
	    	</div>

	    	{/*desc wrap*/}
	    	<div className={style.tileDescWrap}>
		    	{/*image*/}
		    	<div className={style.tileImgWrap}>
			    	<img src="assets/img/prof.png"	className={style.tileImg} />		    	  
			    </div>

				{/*desc*/}
		    	<div className={style.descBx+" "}>
			    	<div className={style.subtitle+" "}>
			    		<span>What makes Earth so special?</span>	
			    	</div>
			    	<div className={style.metadetails+" flex-row-start-start"}>
			    		<div className={style.details1+" vertical-center"}>
			    			<span>-&nbsp;</span>
			    			<span className={style.profname}>RT Bathula</span>
			    		</div>
			    		<div className={style.details2+" vertical-center"}>
			    			<span>/ Software Developer,Filmmaker</span>
			    		</div>	
			    	</div>	    	  
			    </div>
			</div> 			    	  
		    
	    </div>	
    	  	
    );
  }
}

export default App;
