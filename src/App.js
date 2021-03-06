import React from "react";
import "./Style/style.css";
import HeaderContainer from "./Containers/HeaderContainer";
import { HashRouter, Route, Switch } from "react-router-dom";
import HomeContainer from "./Containers/HomeContainer";
import FormContainer from "./Containers/FormContainer";
import { CSSTransition } from "react-transition-group";
import BackDiscount from "./Components/BackDiscount";
import BackContact from "./Components/BackContact";
import axios from "axios";
import BackNewsContainer from "./Containers/BackNewsContainer";
import AboutContainer from "./Containers/AboutContainer";
import Footer from "./Components/Footer";
import BBHotel from "./Components/BBHotel";
import BBKaraoke from "./Components/BBKaraoke";
import BBClub from "./Components/BBClub";
import BackBranchs from "./Components/BackBranchs";
import BackServices from "./Components/BackServices";
import BranchContainer from "./Containers/BranchContainer";
import ServicesContainer from "./Containers/ServicesContainer";
import Error404 from "./Components/Error404";

const menu = [
   {
      url: "/contact",
      name: "Холбоо барих"
   },
   {
      url: "/form",
      name: "Бидэнтэй нэгдэх!"
   },
   {
      url: "/services",
      name: "Үйлчилгээ"
   },
   {
      url: "/discount",
      name: "Урамшуулал"
   },
   {
      url: "/news-posts",
      name: "Мэдээ мэдээлэл"
   },

   {
      url: "/about",
      name: "Бидний тухай"
   },
   {
      url: "/",
      name: "Нүүр хуудас"
   },
];

const menuMain = [ 
   {
      url: "/contact",
      name: "Холбоо барих"
   },
   {
      url: "/services",
      name: "Үйлчилгээ"
   }, 
   {
      url: "/discount",
      name: "Урамшуулал"
   },
   {
      url: "/about",
      name: "Бидний тухай"
   }
];

function App() {
   return (
      <HashRouter>
         <div className="App">
            <HeaderContainer data={menuMain} data2={menu} />
            <div style={{ position: "relative" }}>
               <Switch>
                  <Route path="/" exact component={HomeContainer} />
                  <Route path="/about" exact component={AboutContainer} />
                  <Route path="/news-posts" exact component={BackNewsContainer} />
                  <Route path="/contact" exact component={BackContact} />
                  <Route path="/discount" exact component={BackDiscount} />
                  <Route path="/branchs" exact component={BranchContainer} />
                  <Route path="/services" exact component={ServicesContainer} />
                  <Route path="/form" exact component={FormContainer} />
                  <Route component={Error404} />
               </Switch>
            </div>
         </div>
         <Footer data={menu} />
      </HashRouter>
   );
}

export default App;
