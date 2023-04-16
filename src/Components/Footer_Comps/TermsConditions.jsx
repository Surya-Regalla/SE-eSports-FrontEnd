import React from "react";
import Navbar2 from "../Navbar/Navbar2";
import "../Component_Styles/footer_comps.css";
import Footer from "../Other_Pages/Footer";

function TermsConditions(){
    return(
        <div>
        <Navbar2 />
            <div className="Top-sec">
                <p className="top-text">IIITDM KURNOOL ESPORTS <br />Terms & Conditions</p>
                <p className="date-text">Effective Date : 06-04-2023</p>
            </div>
            <hr className="line" />
            <div className="full-content">
            <p className="contentp">Welcome to <span className="bold-text">IIITDM ESPORTS </span>, a website that provides easy registration and player statistics for esports enthusiasts. By using this website, you agree to comply with the following Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this website.</p>
                <h1 className="headings">1. Acceptance of Terms and Conditions</h1>
                <p className="contentp">By using this website, you agree to these Terms and Conditions, which may be updated by us from time to time without prior notice. If you continue to use the website after any such changes, it will be deemed as acceptance of the updated Terms and Conditions.</p>
                <h1 className="headings">2. Registration</h1>
                <p className="contentp">To access certain features on this website, You agree to provide accurate and complete information during registration. You  should follow all the rules and regulations provided in the registration page. Any violence of the rules may lead to removing access for registration.</p>
                <h1 className="headings">3. Use of the Website</h1>
                <p className="contentp">You agree to use the website in accordance with all applicable laws and regulations. You will not use this website for any illegal or unauthorized purpose, including but not limited to the following:</p>
                <ul>
                    <li className="contentp">Posting or transmitting any content that is obscene, offensive, or defamatory;</li>
                    <li className="contentp">Attempting to gain unauthorized access to any part of the website or its servers;</li>
                    <li className="contentp">Interfering with or disrupting the operation of the website or its servers;</li>
                    <li className="contentp">Posting or transmitting any viruses, worms, or other harmful code.</li>
                    <li className="contentp">Ownership of Content</li>
                </ul>
                <p className="contentp">All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of IIITDM ESPORTS or its licensors and is protected by copyright laws. You may not copy, reproduce, modify, distribute, or display any content from this website without the prior written consent of IIITDM ESPORTS.</p>
                <h1 className="headings">4. Player Statistics</h1>
                <p className="contentp">IIITDM ESPORTS provides player statistics for informational purposes only. While we strive to provide accurate and up-to-date information, we cannot guarantee the accuracy or completeness of the information provided. You acknowledge that the player statistics provided on this website are subject to change and may not be accurate in real-time.</p>
                <h1 className="headings">5. Disclaimer of Warranties</h1>
                <p className="contentp">This website and its content are provided "as is" without any warranty of any kind, express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. IIITDM ESPORTS does not warrant that the website will be uninterrupted or error-free, that defects will be corrected, or that the website or its servers are free of viruses or other harmful components.</p>
                <h1 className="headings">6. Limitation of Liability</h1>
                <p className="contentp">IIITDM ESPORTS will not be liable for any damages of any kind arising from the use of this website, including but not limited to direct, indirect, incidental, punitive, and consequential damages. This includes damages arising from any reliance on the information provided on this website, as well as damages arising from the inability to access or use the website.</p>
                <h1 className="headings">7. Indemnification</h1>
                <p className="contentp">You agree to indemnify and hold IIITDM ESPORTS harmless from any and all claims, damages, expenses, and liabilities (including reasonable attorneys' fees) arising from your use of this website or your breach of these Terms and Conditions.</p>
                <h1 className="headings">8. Governing Law</h1>
                <p className="contentp">These Terms and Conditions will be governed by and construed in accordance with the laws of [Andhra Pradesh/INDIA], without giving effect to any principles of conflicts of law.</p>
                <h1 className="headings">9. Termination</h1>
                <p className="contentp">IIITDM ESPORTS may terminate or suspend your access to the website at any time, without notice and for any reason, including but not limited to your breach of these Terms and Conditions</p>
                <h1 className="headings">10. Miscellaneous</h1>
                <p className="contentp">If any provision of these Terms is held to be unenforceable for any reason, such provision shall be amended only to the extent necessary to make it enforceable, and the remaining provisions of these Terms shall remain in full force and effect.</p>
                <p className="contentp">If you have any questions concerning these Terms & Conditions contained herein, you may contact <span className="email-id">esports@iiitk.ac.in</span> .</p>

            </div>
            <Footer />
        </div>
    );
}
export default TermsConditions;