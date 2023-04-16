import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Initial_Carousel from "./Other_Pages/Initial_Carousel";
import Login from "./Login";
import News_Cards from "./News_Cards";
import All_Games from "./All_Games";
import Services from "./Other_Pages/Services";
import Insta_Idols from "./Other_Pages/Insta_Idols";
import Contact_Button from "./Contact_Button";
import Bgmi_Table from "./BGMI/Bgmi_Table";
import FF_Table from "./FREE FIRE/FF_Table";
import Valo_Table from "./VALORANT/Valo_Table";
import Bgmi_Register from "./BGMI/bgmi_register";
import Bgmi_Teams from "./BGMI/Bgmi_Team";
import Valo_Teams from "./VALORANT/Valo_Team";
import FF_Teams from "./FREE FIRE/FF_Team";
import FF_Register from "./FREE FIRE/ff_register";
import Valo_Register from "./VALORANT/valo_register";
import Cod_Register from "./COD/cod_register";
import Bgmi_History from "./BGMI/Bgmi_History";
import FF_History from "./FREE FIRE/FF_History";
import Valo_History from "./VALORANT/Valo_History";
import Contact_Info from "./Contact_Details";
import Footer from "./Other_Pages/Footer";
import Coming_Soon from "./Other_Pages/Coming_Soon";
import PrivacyPolicy from "./Footer_Comps/PrivacyPolicy";
import TermsConditions from "./Footer_Comps/TermsConditions";
import Aboutus from "./Footer_Comps/Aboutus";

function App() {
  return (
    <div>

      <Router>

        <Routes>

          <Route path="/" element={[<Contact_Button />, <Navbar />, <Initial_Carousel />, 
          <News_Cards />, <All_Games />, <Services />, <Insta_Idols />, <Footer />]} />

          <Route path="/login" element={<Login />} />

          <Route path="/contact-info" element={<Contact_Info />} />

          <Route path="/bgmi-points-table" element={<Bgmi_Table />} />
          <Route path="/ff-points-table" element={<FF_Table />} />
          <Route path="/valo-points-table" element={<Valo_Table />} />

          <Route path="/bgmi" element={<Bgmi_Register />} />
          <Route path="/valorant" element={<Valo_Register />} />
          <Route path="/free fire" element={<FF_Register />} />
          <Route path="/call of duty" element={<Cod_Register />} />

          <Route path="/all-bgmi" element={<Bgmi_History />} />
          <Route path="/all-ff" element={<FF_History />} />
          <Route path="/all-valo" element={<Valo_History />} />

          <Route path="/bgmi-team" element={<Bgmi_Teams />} />
          <Route path="/ff-team" element={<FF_Teams />} />
          <Route path="/valo-team" element={<Valo_Teams />} />

          <Route path="/coming-soon" element={<Coming_Soon />} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/Aboutus" element={<Aboutus />} />

        </Routes>

      </Router>

    </div>
  );
}

export default App;
