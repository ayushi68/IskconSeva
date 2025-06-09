import React, { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';

// Define the type for GopalForm user data
interface GopalUser {
  id: string;
  name: string;
  gender: string;
  contact: string;
  dob: string;
  classGroup: string;
  schoolName: string;
  address: string;
  center: string;
  bloodGroup: string;
  guardianName: string;
  guardianOccupation: string;
  guardianContact: string;
  guardianEmail: string;
  referralSource: string;
  issues: string;
  joiningDate: string;
  reason: string;
  regTxnId: string;
  regReceiptNo: string;
  transTxnId: string;
  transReceiptNo: string;
  lastPaidMonth: string;
  uptoWhichMonthPaid: string;
  totalFeesPaid: number;
  paymentStatus: 'Up to Date' | 'Overdue' | 'N/A';
}

// Fetch user details by name, id, or contact
const fetchUser = async (loginInput: { name: string; id: string; contact: string }): Promise<GopalUser | null> => {
  try {
    const res = await fetch('/api/gopalforms/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginInput),
    });
    if (!res.ok) throw new Error('Failed to authenticate');
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

// Submit tuition fee payment
const submitPayment = async ({ id, amount, monthPaid }: { id: string; amount: number; monthPaid: string }) => {
  try {
    const res = await fetch(`/api/gopalforms/${id}/fees`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, monthPaid }),
    });
    if (!res.ok) throw new Error('Failed to submit payment');
    return await res.json();
  } catch (error) {
    console.error('Error submitting payment:', error);
    throw error;
  }
};

const TuitionFeesForm: React.FC = () => {
  const [loginInput, setLoginInput] = useState({ name: '', id: '', contact: '' });
  const [paymentInput, setPaymentInput] = useState({ amount: '', monthPaid: '' });

  // Fetch user details
  const { data: user, isLoading, error, refetch } = useQuery({
    queryKey: ['user', loginInput],
    queryFn: () => fetchUser(loginInput),
    enabled: false, // Only fetch when user submits login
  });

  // Mutation for submitting payment
  const mutation = useMutation({
    mutationFn: submitPayment,
    onSuccess: () => {
      refetch(); // Refresh user data after payment
      setPaymentInput({ amount: '', monthPaid: '' }); // Reset form
      alert('Payment submitted successfully');
    },
    onError: (error) => {
      alert(`Error submitting payment: ${(error as Error).message}`);
    },
  });

  // Handle login input changes
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginInput({ ...loginInput, [name]: value });
  };

  // Handle login submission
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginInput.name && !loginInput.id && !loginInput.contact) {
      alert('Please enter at least one of Name, ID, or Contact');
      return;
    }
    refetch();
  };

  // Handle payment input changes
  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentInput({ ...paymentInput, [name]: value });
  };

  // Handle payment submission
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert('Please log in first');
      return;
    }
    if (!paymentInput.amount || !paymentInput.monthPaid) {
      alert('Please enter both amount and month paid');
      return;
    }
    if (!/^\d{4}-\d{2}$/.test(paymentInput.monthPaid)) {
      alert('Month paid must be in YYYY-MM format');
      return;
    }
    mutation.mutate({
      id: user.id,
      amount: Number(paymentInput.amount),
      monthPaid: paymentInput.monthPaid,
    });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Tuition Fees Submission</h1>

      {/* Login Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleLoginSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            name="name"
            value={loginInput.name}
            onChange={handleLoginChange}
            placeholder="Enter Name"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="id"
            value={loginInput.id}
            onChange={handleLoginChange}
            placeholder="Enter ID"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="contact"
            value={loginInput.contact}
            onChange={handleLoginChange}
            placeholder="Enter Contact"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Log In
          </button>
        </form>
      </div>

      {isLoading && <div className="text-center">Loading...</div>}
      {error && (
        <div className="text-red-500 text-center">
          Error: {(error as Error).message}
        </div>
      )}

      {/* User Details Section */}
      {user && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Your Details</h2>
          <div className="grid md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-md">
            <p><span className="font-medium">ID:</span> {user.id}</p>
            <p><span className="font-medium">Name:</span> {user.name}</p>
            <p><span className="font-medium">Gender:</span> {user.gender}</p>
            <p><span className="font-medium">Contact:</span> {user.contact}</p>
            <p><span className="font-medium">Date of Birth:</span> {user.dob}</p>
            <p><span className="font-medium">Class Group:</span> {user.classGroup}</p>
            <p><span className="font-medium">School Name:</span> {user.schoolName}</p>
            <p><span className="font-medium">Address:</span> {user.address}</p>
            <p><span className="font-medium">Center:</span> {user.center}</p>
            <p><span className="font-medium">Blood Group:</span> {user.bloodGroup}</p>
            <p><span className="font-medium">Guardian Name:</span> {user.guardianName}</p>
            <p><span className="font-medium">Guardian Occupation:</span> {user.guardianOccupation}</p>
            <p><span className="font-medium">Guardian Contact:</span> {user.guardianContact}</p>
            <p><span className="font-medium">Guardian Email:</span> {user.guardianEmail}</p>
            <p><span className="font-medium">Referral Source:</span> {user.referralSource}</p>
            <p><span className="font-medium">Issues:</span> {user.issues}</p>
            <p><span className="font-medium">Joining Date:</span> {user.joiningDate}</p>
            <p><span className="font-medium">Reason:</span> {user.reason}</p>
            <p><span className="font-medium">Registration Txn ID:</span> {user.regTxnId}</p>
            <p><span className="font-medium">Registration Receipt No:</span> {user.regReceiptNo}</p>
            <p><span className="font-medium">Transaction Txn ID:</span> {user.transTxnId}</p>
            <p><span className="font-medium">Transaction Receipt No:</span> {user.transReceiptNo}</p>
            <p><span className="font-medium">Last Paid Month:</span> {user.lastPaidMonth}</p>
            <p><span className="font-medium">Up to Which Month Paid:</span> {user.uptoWhichMonthPaid}</p>
            <p><span className="font-medium">Total Fees Paid:</span> ₹{user.totalFeesPaid.toFixed(2)}</p>
            <p><span className="font-medium">Payment Status:</span> {user.paymentStatus}</p>
          </div>
        </div>
      )}

      {/* Payment Submission Section */}
      {user && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Submit Tuition Fees</h2>
          <form onSubmit={handlePaymentSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="number"
              name="amount"
              value={paymentInput.amount}
              onChange={handlePaymentChange}
              placeholder="Enter Amount (₹)"
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="monthPaid"
              value={paymentInput.monthPaid}
              onChange={handlePaymentChange}
              placeholder="Month Paid (YYYY-MM)"
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? 'Submitting...' : 'Submit Payment'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TuitionFeesForm;