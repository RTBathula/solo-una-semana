import cookie from 'react-cookie'

export const getTokenCookie = () => {
  let token = cookie.load('token');
  return token ? token : null;
};

export const setTokenCookie = (token) => {  
  cookie.save('token', token, { path: '/' });
};

export const removeTokenCookie = () => {
  cookie.remove('token', { path: '/' });
};

export const getDriverIdMeTokenCookie = () => {
  let token = cookie.load('token');
  return token ?  JSON.parse(new Buffer(token.split('.')[1], 'base64').toString()).userId : null;
};

export const getHeadersConfig = () => {
  return {
    headers: {
      'Authorization': 'Bearer ' + cookie.load('token')
    }
  }
};

export const validarEmail = (email) => {
  let expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return expr.test(email);
};

export const hasWhiteSpace = (txt) => {
  return /^ *$/.test(txt)
};

export const validateTextField = (txt) => { 

  let error = null;
  if(!txt || txt=="" || (txt && hasWhiteSpace(txt))){
    error=" required"    
  }

  if(hasSpecialCharacters(txt)){
    error=" sin caracteres especiales"      
  }

  if(txt.length < 2){
    error=" con al menos dos (2) letras"      
  }

  txt = capitalizeFirstLetterAndTrim(txt);

  return {"txt":txt,"error":error}
};

export const validateUrl = (url) => {
  let re = /(ftp|http|https):\/\/[A-Za-z0-9\.-]{2,}\.[A-Za-z]{2}/;
  return re.test(url) 
};

export const containCapitalLetters = (string) => { 

  if(!string || string==""){
    return true
  } 

  for(var i=1;i<string.length;++i){    
    if(string[i] == string[i].toUpperCase()){
      return true
    }
  }

  return false
};


export const validateUrlWithoutHttp = (url) => {
  let re = /\/\/[A-Za-z0-9\.-]{2,}\.[A-Za-z]{2}/;
  return re.test(url) 
};

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const capitalizeFirstLetterAndTrim = (string) => {
    let newString = "";
    let arrString = string.split(" ");
    arrString.forEach((str) => { newString += capitalizeFirstLetter(str) + " "; });
    newString = newString.trim();
    if (string.lastIndexOf(" ")===string.length-1) newString += " ";
    return newString;
};

export const getFirstNumber = (number) => {
  return number.toString()[0];
};

export const trimValues = (obj) => {
  Object.keys(obj).forEach((key) => {
    obj[key] = obj[key].trim();
  });
  return obj;
};

export const hasSpecialCharacters = (string) => {
  let pattern = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);
  return pattern.test(string);
};

export const formatRUT = (identification) => {
  if (identification.length>12) return identification.slice(0, 12);
  identification = identification.toUpperCase();
  let newIdentification = "";
  identification = identification.trim();
  for (let i=0; i<identification.length; i++) {
    if (i >= 12) break;
    if (!isNaN(identification[i]) || (i==identification.length-1 && identification[i]=='K')) newIdentification += identification[i];
  }
  let resultIdentification = "";
  for (let i=newIdentification.length-1; i>=0; i--) {
    if (i==newIdentification.length-2) resultIdentification = "-" + resultIdentification;
    if (i==newIdentification.length-5 || i==newIdentification.length-8) resultIdentification = "." + resultIdentification;
    resultIdentification = newIdentification[i] + resultIdentification;
  }
  return resultIdentification;
};
