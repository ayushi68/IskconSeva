import React from "react";

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 font-sans text-justify">
            <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>

            <section className="mb-6">
                <p className="mb-4">
                    Thank you for visiting our website. We are committed to handling the information we collect with the utmost care and protecting your privacy.
                </p>
                <p className="mb-4">
                    This website is operated by the <strong>Hare Krishna Movement, Bhilai-Raipur</strong>. In this policy, "we", "us", and "our" refer to the Hare Krishna Movement, Bhilai-Raipur.
                </p>
                <p>
                    Effective from <strong>1st April 2024</strong>, this policy outlines what data we collect, why we collect it, how it is used, and your choices regarding this data.
                </p>
            </section>

            <Section title="Contact Information">
                <p className="mb-2">
                    If you have any questions or concerns, please contact us at:
                </p>
                <address className="not-italic">
                    <strong>HARE KRISHNA MOVEMENT - BHILAI</strong><br />
                    Akshaya Patra Campus, Sector - 6, Bhilai, Durg - 490006.<br />
                    <br />
                    <strong>HARE KRISHNA MOVEMENT - RAIPUR</strong><br />
                    Plot No - 9/28, Block No - 14, Opp. Central Bank of India, Civil Lines, Raipur - 492001.<br />
                    <br />
                    Phone: 0771 - 4056774<br />
                    Email: <a className="text-blue-600 underline" href="mailto:info@hkmraipur-bhilai.org">info@hkmraipur-bhilai.org</a><br />
                    Website: <a className="text-blue-600 underline" href="https://hkmraipur-bhilai.org" target="_blank" rel="noopener noreferrer">hkmraipur-bhilai.org</a>
                </address>
            </Section>

            <Section title="Personal Information">
                <p>
                    You can browse our website without providing any personal data. We collect personally identifiable information only when you voluntarily provide it.
                </p>
                <p>
                    We do not sell or trade this information. It is not shared unless required by law or authorized by you.
                </p>
            </Section>

            <Section title="Donations">
                <p>
                    When donating online, we collect your name, contact details, and address for acknowledgment and delivery purposes. Additional spiritual details may be collected for specific rituals.
                </p>
            </Section>

            <Section title="Life Patron">
                <p>
                    Personal details such as name, contact, and scheme details are collected to facilitate communication regarding temple programs.
                </p>
            </Section>

            <Section title="Donor’s Personal Data">
                <p>
                    Donor information is retained as required by law and used only for temple-related communication.
                </p>
            </Section>

            <Section title="Talent Information">
                <p>
                    We may request your skills (e.g., music, graphics) to engage you in volunteer activities.
                </p>
            </Section>

            <Section title="Online Contests">
                <p>
                    During events, we collect participant and guardian details for communication and logistics like prize delivery.
                </p>
            </Section>

            <Section title="Free Puja">
                <p>
                    On auspicious occasions, we collect names and details for puja and sankalpa purposes.
                </p>
            </Section>

            <Section title="Event Registration">
                <p>
                    Events like Culture Camp require personal details for verification and updates.
                </p>
            </Section>

            <Section title="Charitable Activities">
                <p>
                    For scholarships, we collect academic and financial data to determine eligibility.
                </p>
            </Section>

            <Section title="WhatsApp Subscription">
                <p>
                    To join our WhatsApp Broadcast Group, we collect your name and WhatsApp number.
                </p>
            </Section>

            <Section title="Third-Party Tools">
                <p>
                    We use tools like AWeber, Tawk.to, RazorPay, and Google Analytics. Refer to their individual policies for details.
                </p>
            </Section>

            <Section title="Security">
                <p>
                    We follow physical and digital safeguards to protect your data from unauthorized access or misuse.
                </p>
            </Section>

            <Section title="Cookies">
                <p>
                    Some third-party tools may use cookies. You can disable them in your browser, but it may limit site functionality.
                </p>
            </Section>

            <Section title="External Links">
                <p>
                    We are not responsible for the privacy practices of other websites we link to.
                </p>
            </Section>

            <Section title="Amendments to this Policy">
                <p>
                    This policy may be updated periodically. Please review this page for the latest changes.
                </p>
            </Section>

            <Section title="Jurisdiction">
                <p>
                    This policy is governed by the laws of India.
                </p>
            </Section>
        </div>
    );
};

// Reusable section component
const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 border-b pb-1">{title}</h2>
        <div className="space-y-3 text-gray-700 text-base">{children}</div>
    </section>
);

export default PrivacyPolicy;
