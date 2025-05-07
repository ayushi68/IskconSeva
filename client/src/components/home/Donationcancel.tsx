import React from "react";

const DonationPolicy: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 font-sans text-justify">
            <h1 className="text-4xl font-bold text-center mb-8">
                Donation Cancellation & Refund Policy
            </h1>

            <section className="mb-6">
                <p className="mb-4">
                    Thank you for your generous donation in support of the activities of the
                    <strong> Hare Krishna Movement, Bhilai</strong>. All donations are gratefully acknowledged, and
                    income-tax approval order details are provided on your donation receipt.
                </p>
                <p>
                    To make you feel secure and respected in your association with us, we maintain a transparent
                    donation cancellation and refund policy. We ensure all donations are processed as per the
                    donor’s signed mandates — both offline and online.
                </p>
            </section>

            <Section title="When a Donation May Be Refused or Cancelled">
                <ul className="list-disc list-inside space-y-2">
                    <li>Donations without a specified purpose.</li>
                    <li>Missing donor details such as name, address, or contact number.</li>
                    <li>
                        Failure to submit a PAN number when donating ₹10,000 or more (as per Indian income tax
                        rules).
                    </li>
                </ul>
            </Section>

            <Section title="Transaction Errors & Technical Failures">
                <p>
                    If your donation is processed but you do not receive a confirmation message due to issues like
                    slow internet, server failure, or technical problems, and the amount is debited from your
                    account, please contact us. We will verify and promptly inform you of the transaction status.
                </p>
            </Section>

            <Section title="Refund Requests">
                <p>
                    We treat all refund-related complaints, grievances, or disputes seriously and aim to resolve
                    them quickly, fairly, and confidentially.
                </p>
                <p>
                    In the rare event of an erroneous deduction or if a donor wishes to cancel the donation, the
                    donor should email us at{" "}
                    <a href="mailto:hkmbhilai@gmail.com" className="text-blue-600 underline">
                        hkmbhilai@gmail.com
                    </a>{" "}
                    with the following:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>Proof of the deducted amount (e.g., bank statement, transaction ID).</li>
                    <li>Written communication requesting a refund.</li>
                    <li>Requests must be submitted within two days of the transaction.</li>
                </ul>
                <p className="mt-2">
                    We will respond within <strong>7 working days</strong> of receiving the request.
                </p>
            </Section>

            <Section title="Important Notes">
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        If a receipt has already been issued, the original must be returned to our official
                        address.
                    </li>
                    <li>
                        If a tax exemption certificate has been issued, the refund request cannot be processed.
                    </li>
                    <li>Refunds will be made to the original credit card or payment method used.</li>
                    <li>International refunds may take additional working days to process.</li>
                </ul>
            </Section>

            <section className="mt-10 text-sm text-gray-500 text-center">
                <p>© {new Date().getFullYear()} Hare Krishna Movement, Bhilai. All rights reserved.</p>
            </section>
        </div>
    );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 border-b pb-1">{title}</h2>
        <div className="space-y-3 text-gray-700 text-base">{children}</div>
    </section>
);

export default DonationPolicy;
