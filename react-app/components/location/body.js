import React, { PropTypes, Component } from 'react'

//Css
import layoutStyle from 'components/layout.css'
import style from './location.css'

import FilePreviewByType from 'components/helpers/filePreviewByType/filePreviewByType'
import {GoogleMapLoader, GoogleMap, Polyline, Marker} from 'react-google-maps'
let GoogleMapsAPI = window.google.maps;

class App extends Component { 

  render() {    

    return ( 
    	<div className={layoutStyle.screenfull} style={{"backgroundColor":"white"}}>
        <div className={style.presentbxContainer+' horizontal-center'}>  
          <div className={layoutStyle.screen980+" "+style.presentbxWrap+" flex-column-center"} > 
            <span style={{"fontSize":"32px","color":"gray","fontWeight":"500"}}>
              Our locations
            </span>
          </div>
        </div> 

        <div className={style.pageContainer+' horizontal-center'}>  
          <div className={layoutStyle.screen980+" "} >            

            <div className={"flex-row-space-start"} style={{"marginTop":"34px","width":"100%","padding":"20px","backgroundColor":"#efeded"}}>
              <div style={{"width":"30%"}}>
                <div>
                  <span style={{"fontSize":"16px","color":"gray","fontWeight":"500"}}>
                    We teach at:
                  </span>
                </div>
                <div style={{"marginTop":"3px"}}>
                  <span style={{"fontSize":"16px","color":"black","fontWeight":"400"}}>
                    Sancho de la hoz,3431,
                  </span>
                </div>
                <div style={{"marginTop":"1px"}}>
                  <span style={{"fontSize":"16px","color":"black","fontWeight":"400"}}>
                    Santaigo Centro,Santaigo,Chile.
                  </span>
                </div>

                <div style={{"marginTop":"1px"}}>                  
                  <div className={'flex-row-start-start'}>                  
                    <div >
                      <span style={{"fontSize":"16px","color":"black","fontWeight":"400"}}>
                      Phone: +56988882471
                      </span>
                    </div>
                  </div>                  
                </div>

                <div style={{"marginTop":"1px"}}>                  
                  <div className={'flex-row-start-start'}>                  
                    <div >
                      <span style={{"fontSize":"16px","color":"black","fontWeight":"400"}}>
                      Email: concatco@sus.com
                      </span>
                    </div>
                  </div>                  
                </div>

              </div>
              <div style={{"width":"69%", "height":"255px","border":"1px solid #ccc"}}>
                <GoogleMapLoader
                  containerElement={
                    <div style={{height: "100%", width: "100%"}} />
                  }
                  googleMapElement={
                    <GoogleMap
                      defaultZoom={11}
                      defaultCenter={{ lat: -33.4374017, lng: -70.6519052 }}                          
                    >                      
                    </GoogleMap>
                  }
                />   
              </div>                          
            </div>

            <div className={"flex-row-space-start"} style={{"marginTop":"34px","width":"100%","borderBottom":"1px solid gray"}}>              
              <div>
                <span style={{"fontSize":"20px","color":"black","fontWeight":"400"}}>
                  Souvenirs
                </span>
              </div>                                       
            </div>

            <div style={{"margin":"0px 0px 30px 0px","width":"100%"}}>               
              <div className="row">
                <div className="col-xs-12 col-md-6">
                  {/*image*/}            
                  <div style={{"height":"240px","marginTop":"15px"}}>
                    <FilePreviewByType fallback={"/assets/img/defaultImg.jpg"} file={"assets/img/1s.jpg"}/>                       
                  </div>
                  <div style={{"width":"100%","padding":"10px","backgroundColor":"rgba(0, 0, 0, 0.88)"}}>
                    <div>
                      <span style={{"color":"white","fontSize":"14px"}}>
                        MS Excel @ santaigo
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-6">
                  {/*image*/}            
                  <div style={{"height":"240px","marginTop":"15px"}}>
                    <FilePreviewByType fallback={"/assets/img/defaultImg.jpg"} file={"assets/img/2s.jpg"}/>                       
                  </div>
                  <div style={{"width":"100%","padding":"10px","backgroundColor":"rgba(0, 0, 0, 0.88)"}}>
                    <div>
                      <span style={{"color":"white","fontSize":"14px"}}>
                        MS Excel @ santaigo
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-6">
                  {/*image*/}            
                  <div style={{"height":"240px","marginTop":"15px"}}>
                    <FilePreviewByType fallback={"/assets/img/defaultImg.jpg"} file={"assets/img/3s.jpg"}/>                       
                  </div>
                  <div style={{"width":"100%","padding":"10px","backgroundColor":"rgba(0, 0, 0, 0.88)"}}>
                    <div>
                      <span style={{"color":"white","fontSize":"14px"}}>
                        MS Excel @ santaigo
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-6">
                  {/*image*/}            
                  <div style={{"height":"240px","marginTop":"15px"}}>
                    <FilePreviewByType fallback={"/assets/img/defaultImg.jpg"} file={"assets/img/4s.jpg"}/>                       
                  </div>
                  <div style={{"width":"100%","padding":"10px","backgroundColor":"rgba(0, 0, 0, 0.88)"}}>
                    <div>
                      <span style={{"color":"white","fontSize":"14px"}}>
                        MS Excel @ santaigo
                      </span>
                    </div>
                  </div>
                </div>                             
              </div>                                       
            </div>

          </div>
        </div>

	    </div>    	  	
    );
  }
}


export default App;
