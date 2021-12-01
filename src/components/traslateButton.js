import React,{useState} from 'react';
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Bl,Lan} from '../pages/pagesStyles';
import {DropLink} from '../components/Navbar/NavbarElements';



//const [value,setValue]= useState('en');


const languages=[
  {
   
    code:'en',
    name:'English',
    country_code:'gb'

},
    {

      code:'sp',
      name:'Spanish',
      country_code:'ES'
  }


];


const Styles={
  dp:{
 
     cursor:"pointer"

  },
  
}
function TranslateButton() {
  const{t}=useTranslation();
 
   return (
      
     <div class="dropdown">
  <button class="btn btn dropdown-toggle mx-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <Lan>{t('language')}  </Lan><Bl><FontAwesomeIcon icon={faGlobe}/></Bl>
  </button>
<ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
    {languages.map((lan)=>(

      <li key={lan.country_code}>    
    <li><div class="dropdown-item " style={Styles.dp} onClick={()=>i18next.changeLanguage(lan.code)}>
        <span >{lan.name}</span>
        </div>
        </li>  
     </li>
   ))}
    </ul>
    </div>
   
      )
      
}

export default TranslateButton;


