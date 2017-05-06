import tinycolor from "tinycolor2"

export const heights=[{
    name   : "normal",
    height : "120px"
},{
    name   : "large",
    height : "150px"
},{
    name   : "extraLarge",
    height : "200px"
},{
    name   : "auto",
    height : "auto"
}]

export const colors=[{
    name            : "classic",
    headBgColor     : "white",
    headFgColor     : "#1758D1",
    contentBgColor  : tinycolor("#CCCCCC").lighten(100).toString(),
    contentFgColor  : "black",
    linkColor       : "blue"
},{
    name            : "midGray",  
    headBgColor     : "#CCCCCC",
    headFgColor     : "black",
    contentBgColor  : tinycolor("#CCCCCC").lighten(100).toString(),
    contentFgColor  : "white",
    linkColor       : "blue"
},{
    name            : "darkPink",  
    headBgColor     : "#9D0F3C",
    headFgColor     : "black",
    contentBgColor  : tinycolor("#9D0F3C").lighten().toString(),
    contentFgColor  : "white",
    linkColor       : "blue"
},{
    name            : "splBlue",  
    headBgColor     : "#005985",
    headFgColor     : "white",
    contentBgColor  : "#017CB5",
    contentFgColor  : "white",
    linkColor       : "blue"
},{
    name            : "NiceGreen",
    headBgColor     : "#015E23",
    headFgColor     : "black",
    contentBgColor  :  tinycolor("#015E23").lighten().toString(),
    contentFgColor  : "white",
    linkColor       : "blue"
},{
    name            : "uberBg", 
    headBgColor     : "#262247",
    headFgColor     : "black",
    contentBgColor  : tinycolor("#262247").lighten().toString(),
    contentFgColor  : "white",
    linkColor       : "blue"
},{
    name            : "googleMoron", 
    headBgColor     : "#79302A",
    headFgColor     : "black",
    contentBgColor  : tinycolor("#79302A").lighten().toString(),
    contentFgColor  : "white",
    linkColor       : "blue"
},{
    name            : "decentBlue",   
    headBgColor     : "#101E56",
    headFgColor     : "black",
    contentBgColor  : tinycolor("#101E56").lighten().toString(),
    contentFgColor  : "white",
    linkColor       : "blue"
}]
