import React from "react";
import Navbar2 from "../Navbar/Navbar2";
import "../Component_Styles/footer_comps.css";
import Footer from "../Other_Pages/Footer";

function PrivacyPolicy(){
    return(
        <div>
        <Navbar2 />
            <div className="Top-sec">
                <p className="top-text">IIITDM KURNOOL ESPORTS <br />PRIVACY POLICY</p>
                <p className="date-text">Effective Date : 06-04-2023</p>
            </div>
            <hr className="line" />
            <div className="full-content">
                <p className="contentp">At our <span className="bold-text">IIITDM Esports</span> website, we take your privacy seriously. This privacy policy outlines the types of personal information we collect, how we use that information, and how we protect it.</p>
                <h1 className="headings">1. Information we collect</h1>
                <p className="contentp">We may collect personal information such as your name, email address, and other details when you register with us. We may also collect information about your gaming habits and statistics, such as your favorite games, scores, and other related data. Additionally, we may use cookies to collect information about your browsing history on our website.</p>
                <h1 className="headings">2. How we use your information</h1>
                <p className="contentp">We may use the information we collect from you for the following purposes:</p>
                <ul>
                    <li className="contentp">To provide our services to you and to manage your account.</li>
                    <li className="contentp">To improve our Website and services, including by analyzing user behavior and preferences.</li>
                    <li className="contentp">To communicate with you about your account or our services.</li>
                    <li className="contentp">To comply with legal obligations and to protect our rights and interests.</li>
                    <li className="contentp">To display player statistics to our users.</li>
                </ul>
                <h1 className="headings">3. How we protect your information</h1>
                <p className="contentp">We take appropriate measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. We use industry-standard security measures to safeguard your information, including SSL encryption and firewalls. We also limit access to your information to authorized personnel only.</p>
                <h1 className="headings">4. Sharing your information</h1>
                <p className="contentp">We may share your information with third parties in the following circumstances:</p>
                <ul>
                    <li className="contentp">Service Providers: We may share your information with third-party service providers that perform services on our behalf, such as hosting, analytics, and customer support.</li>
                    <li className="contentp">Compliance with Laws: We may disclose your information to comply with applicable laws or regulations, to respond to a subpoena, court order, or other legal request.</li>
                </ul>
                <p className="contentp">We will not sell, rent, or share your personal information with any third-party companies or individuals without your consent, except as required by law. We may share your information with trusted partners who assist us in providing our services, such as payment processors, analytics providers, or other service providers. We will only share the minimum necessary information with these partners, and we will require them to keep your information confidential.</p>
                <h1 className="headings">5. Your rights</h1>
                <p className="contentp">You have the right to access, correct, update, or delete your personal information at any time. You can do so by contacting us directly. You also have the right to object to the processing of your information, and to withdraw your consent at any time.</p>
                <h1 className="headings">6. Changes to this policy</h1>
                <p className="contentp">We may update this privacy policy from time to time. If we make significant changes to the policy, we will notify you by email or by posting a notice on our website.</p>
                <h1 className="headings">7. Contact us</h1>
                <p className="contentp">If you have any questions or concerns about our privacy policy, please contact us at <span className="email-id">esports@iiitk.ac.in</span>.</p>
            </div>
            <Footer />
        </div>
    );
}
export default PrivacyPolicy;