import React from "react";
import BodyComponent from "../../components/BodyComponent/BodyComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import Header from "../../components/Header/Header";
export default function Home() {
  return <div>
        <Header/>
        <BodyComponent size={4}/>
        <FooterComponent/>
     </div>
}

