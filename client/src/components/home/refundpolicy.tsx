import React from "react";

const RefundCancellationPolicy: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800 font-sans text-justify">
      <h1 className="text-4xl font-bold text-center mb-8">
        Refund & Cancellation Policy
      </h1>

      <Section title="General Policy">
        <p>
          Thank you for supporting Hare Krishna Movement, Bhilai. Your
          contributions are invaluable. We assure you that your donation
          transactions are safe and secure, and tax exempted under Section 80G
          of the Indian Income Tax Act.
        </p>
        <p>
          Transactions successfully debited by the payment gateway but not
          confirmed back to our system will be treated as failed transactions.
          Such transactions are eligible for a refund within 10–15 working days
          after reconciliation.
        </p>
        <p>All bookings and donation transactions are final. Cancellation is not allowed.</p>
      </Section>

      <Section title="Donation Cancellation & Rejection">
        <p>Hare Krishna Movement, Bhilai, reserves the right to cancel a donation if:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>No purpose is indicated for the donation.</li>
          <li>Donor details such as name, address, and contact number are missing.</li>
          <li>PAN number is not submitted for donations of ₹10,000/- or above.</li>
        </ul>
      </Section>

      <Section title="Transaction Failures">
        <p>
          If you experience issues such as slow internet or payment gateway
          failure, and the donation is debited without confirmation, please
          contact us. We will verify the status and update you accordingly.
        </p>
      </Section>

      <Section title="Refund Policy">
        <ul className="list-disc list-inside space-y-2">
          <li>
            Refund requests must be made within <strong>3 days</strong> of the
            transaction by contacting us via email at{" "}
            <a href="mailto:hkmbhilai@gmail.com" className="text-blue-600 underline">
              hkmbhilai@gmail.com
            </a>{" "}
            with proof of payment and the reason for the refund.
          </li>
          <li>
            Refunds will be processed within <strong>10 working days</strong> of request approval.
          </li>
          <li>
            If the donation receipt or 80G certificate has already been issued,
            refunds will not be processed.
          </li>
          <li>Refunds will be returned to the original payment method.</li>
          <li>International refunds may take longer due to banking procedures.</li>
        </ul>
      </Section>

      <Section title="Multiple or Erroneous Payments">
        <p>
          In the event of multiple payments or errors, please contact us. If
          found valid, the extra amount will be refunded in full.
        </p>
      </Section>

      <Section title="Product Returns & Non-Refundable Items">
        <p>
          If you've made a physical purchase (e.g., books, CDs), returns are
          accepted only under the following conditions:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>The item is unused and in original packaging.</li>
          <li>Return request is raised within 30 days of delivery.</li>
          <li>
            Items like perishable goods, health/personal care items, or
            downloadable products are non-returnable.
          </li>
        </ul>
      </Section>

      <Section title="Shipping & Exchanges">
        <p>
          Return shipping must be paid by the buyer. If the product is over ₹6,000 (or $75 internationally), we recommend
          using a trackable service. Return address:
        </p>
        <address className="not-italic mt-2">
          622 Manglam Electronic Market,<br />
          Jaipur, Rajasthan, India - 302001
        </address>
        <p>
          If the return is approved, refunds or exchanges will be processed
          accordingly.
        </p>
      </Section>

      <Section title="Cancellation of Services">
        <ul className="list-disc list-inside space-y-2">
          <li>
            The management reserves the right to cancel any donation or booking
            at its sole discretion.
          </li>
          <li>
            Service requests already activated cannot be canceled. Amount paid
            is non-refundable in such cases.
          </li>
          <li>
            Cancellation confirmations will be emailed if accepted and refunds
            processed in 10 working days.
          </li>
        </ul>
      </Section>

      <Section title="Chargebacks and Fraud">
        <p>
          Donations cannot be charged back unless fraud is proven through proper
          investigation by authorities. Any issued tax receipts in such cases
          will be considered invalid.
        </p>
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

export default RefundCancellationPolicy;
