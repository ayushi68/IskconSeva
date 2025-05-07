import React from "react";

const TermsAndConditions: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 font-[Times New Roman] text-justify">
            <h1 className="text-4xl font-bold text-center mb-8">Terms and Conditions</h1>

            <section className="mb-6">
                <p className="mb-4">
                    Thank you for visiting <strong>hkmbhilai.com</strong>, the official website of the <strong>Hare Krishna Movement, Bhilai-Raipur</strong>. By accessing this site, you agree to abide by the terms and conditions outlined below.
                </p>
                <p className="mb-4">
                    If you do not agree with these terms, please do not use this website. These terms may be updated or modified from time to time. We recommend checking back regularly for any changes.
                </p>
            </section>

            <Section title="Ownership & Copyright">
                <p>
                    This website is owned and maintained by Hare Krishna Movement, Bhilai-Raipur. Unless otherwise stated, all materials, images, and content on this website are protected by copyright law.
                </p>
                <p>
                    Reproduction, framing, modification, transmission, or distribution of website content, in whole or in part, is strictly prohibited without prior written permission.
                </p>
            </Section>

            <Section title="Linking Policy">
                <p>
                    You may link to our website, provided you obtain prior permission. Any such link should not imply endorsement or affiliation unless clearly agreed upon.
                </p>
            </Section>

            <Section title="Feedback and Submissions">
                <p>
                    We welcome feedback, suggestions, and ideas related to the website. However, unless explicitly stated otherwise, all submissions including comments, graphics, and other material will be considered non-confidential.
                </p>
                <p>
                    By submitting, you agree not to provide any copyrighted or proprietary information.
                </p>
            </Section>

            <Section title="Usage Restrictions">
                <p>
                    You may not license, transfer, modify, or sell any information obtained from this site without written authorization.
                </p>
                <p>
                    Any permitted use of website content must include proper credit to the Hare Krishna Movement, Bhilai-Raipur, India.
                </p>
            </Section>

            <Section title="Contact Us">
                <p>
                    If you have questions, feedback, or notice any inaccuracies on the website, please reach out to us at:
                </p>
                <p>
                    <strong>Email:</strong> <a href="mailto:info@hkmraipur-bhilai.org" className="text-blue-600 underline">info@hkmraipur-bhilai.org</a>
                </p>
                <p>
                    <strong>Phone:</strong> 0771 - 4056774
                </p>
                <p>
                    <strong>Website:</strong> <a href="https://hkmbhilai.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">hkmbhilai.com</a>
                </p>
            </Section>
            
        </div>
    );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 border-b pb-1">{title}</h2>
        <div className="space-y-3 text-gray-700 text-base">{children}</div>
    </section>
);

export default TermsAndConditions;
