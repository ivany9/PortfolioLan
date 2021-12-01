import React ,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'flag-icon-css/css/flag-icon.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import {initReactI18next } from "react-i18next";
import App from './App';


i18n
  
  .use(initReactI18next) // passes i18n down to react-i18next

  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
   
    supportedLngs:['en','sp'],
    fallbackLng: "en",
     detection:{ order: ['cookie','htmlTag', 'localStorage','path','subdomain' ],
     caches: ['cookie']
  },

  backend:{
      loadPath: '/locales/{{lng}}/translation.json',
         
     },

    })



const loadingMarkup=(
 <div className="py-4 text-center">
   <h2>Loading..</h2>
   </div>



)


ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
