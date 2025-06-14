import React, { useState, useEffect } from "react";
import { useRoute } from "wouter";
import { donationCategories, DonationCategory, SubCategory, SuperSubCategory } from "../../lib/donationdata";
import { SevaOption, SevaAmount } from "../../lib/types";

interface DonationFormProps {
  preselectedCategoryId?: string;
  sevaOption?: SevaOption;
  selectedAmount?: SevaAmount;
  onClose?: () => void;
}

const DonationForm: React.FC<DonationFormProps> = ({ preselectedCategoryId }) => {
  // Initialize category from props or URL
  const [match, params] = useRoute("/donation-form/:categoryId");
  const categoryIdFromUrl = match ? params?.categoryId : null;
  const initialCategoryId = preselectedCategoryId || categoryIdFromUrl || "";

  // Form state
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(initialCategoryId);
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState<string>("");
  const [selectedSuperSubCategoryId, setSelectedSuperSubCategoryId] = useState<string>("");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donorName, setDonorName] = useState<string>("");
  const [donorDob, setDonorDob] = useState<string>("");
  const [donorEmail, setDonorEmail] = useState<string>("");
  const [donorPhone, setDonorPhone] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("card");
  const [message, setMessage] = useState<string>("");
  const [receiveMahaprasad, setReceiveMahaprasad] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [pincode, setPincode] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [paymentStatus, setPaymentStatus] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Derived data
  const selectedCategory = donationCategories.find((cat: DonationCategory) => cat.id === selectedCategoryId);
  const subCategories = selectedCategory?.subCategories || [];
  const selectedSubCategory = subCategories.find((sub: SubCategory) => sub.id === selectedSubCategoryId);
  const superSubCategories = selectedSubCategory?.superSubCategories || [];
  const selectedSuperSubCategory = superSubCategories.find((superSub: SuperSubCategory) => superSub.id === selectedSuperSubCategoryId);
  const rawAmounts = selectedSuperSubCategory?.amounts || selectedSubCategory?.amounts || [];
  const amountsToShow = rawAmounts.length > 0 
    ? rawAmounts.map((amt: number | string) => typeof amt === "string" ? parseInt(amt, 10) : amt)
    : [];
  const customAmountAllowed = subCategories.length > 0 
    ? (selectedSuperSubCategory?.customAmountAllowed ?? selectedSubCategory?.customAmountAllowed ?? true)
    : true; // Always allow custom amount if no subcategories

  // Debugging logs
  useEffect(() => {
    console.log({
      donationCategories,
      selectedCategory,
      subCategories,
      selectedSubCategory,
      superSubCategories,
      selectedSuperSubCategory,
      amountsToShow,
      customAmountAllowed,
    });
  }, [
    selectedCategory,
    subCategories,
    selectedSubCategory,
    superSubCategories,
    selectedSuperSubCategory,
    amountsToShow,
    customAmountAllowed,
  ]);

  useEffect(() => {
    console.log("State:", {
      selectedCategoryId,
      selectedSubCategoryId,
      selectedSuperSubCategoryId,
      selectedAmount,
      customAmount,
      isLoading,
    });
  }, [
    selectedCategoryId,
    selectedSubCategoryId,
    selectedSuperSubCategoryId,
    selectedAmount,
    customAmount,
    isLoading,
  ]);

  // Auto-select first subcategory when category changes or subCategories updates
  useEffect(() => {
    console.log("Subcategory selection effect triggered:", { selectedCategoryId, subCategories, selectedSubCategoryId });
    if (selectedCategoryId && subCategories.length > 0 && !selectedSubCategoryId) {
      const firstSubCategoryId = subCategories[0].id;
      console.log("Auto-selecting subcategory:", firstSubCategoryId);
      setSelectedSubCategoryId(firstSubCategoryId);
    } else if (!subCategories.length) {
      console.log("Clearing subcategory selection: no subcategories available");
      setSelectedSubCategoryId("");
    }
  }, [selectedCategoryId, subCategories]);

  // Auto-select first super subcategory when subcategory changes or superSubCategories updates
  useEffect(() => {
    console.log("Super subcategory selection effect triggered:", { selectedSubCategoryId, superSubCategories, selectedSuperSubCategoryId });
    if (selectedSubCategoryId && superSubCategories.length > 0 && !selectedSuperSubCategoryId) {
      const firstSuperSubCategoryId = superSubCategories[0].id;
      console.log("Auto-selecting super subcategory:", firstSuperSubCategoryId);
      setSelectedSuperSubCategoryId(firstSuperSubCategoryId);
    } else if (!superSubCategories.length) {
      console.log("Clearing super subcategory selection: no super subcategories available");
      setSelectedSuperSubCategoryId("");
    }
  }, [selectedSubCategoryId, superSubCategories]);

  // Reset selected amount when amounts change
  useEffect(() => {
    if (selectedAmount && amountsToShow.length > 0 && !amountsToShow.includes(selectedAmount)) {
      console.log("Resetting selected amount: not in amountsToShow", { selectedAmount, amountsToShow });
      setSelectedAmount(null);
      setCustomAmount("");
    }
  }, [amountsToShow, selectedAmount]);

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount(amount.toString());
    console.log("Selected amount:", amount);
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || (Number(value) > 0 && !isNaN(Number(value)))) {
      setCustomAmount(value);
      setSelectedAmount(null);
      console.log("Custom amount:", value);
    }
  };

  const handlePayment = async () => {
    const amountToPay = selectedAmount || parseInt(customAmount);
    if (!amountToPay || isNaN(amountToPay) || amountToPay <= 0) {
      setPaymentStatus("Please select or enter a valid donation amount.");
      return;
    }
    if (!selectedCategoryId) {
      setPaymentStatus("Please select a donation category.");
      return;
    }
    if (!donorName || !donorDob || !donorEmail || !donorPhone) {
      setPaymentStatus("Please fill in all required personal information.");
      return;
    }
    if (receiveMahaprasad && (!address || !city || !pincode || !state)) {
      setPaymentStatus("Please fill in all address fields for Mahaprasad delivery.");
      return;
    }

    setIsLoading(true);
    setPaymentStatus("");

    const options = {
      key: "rzp_test_1DP5mmL5tltz8K",
      amount: amountToPay * 100,
      currency: "INR",
      name: "HKM Bhilai Donation",
      description: `Donation for ${selectedCategory?.title || "General"}` +
        `${selectedSubCategory ? ` - ${selectedSubCategory.title}` : ""}` +
        `${selectedSuperSubCategory ? ` - ${selectedSuperSubCategory.title}` : ""}`,
      handler: async (response: { razorpay_payment_id: string; razorpay_order_id?: string; razorpay_signature?: string }) => {
        try {
          const donationData = {
            donorName,
            donorDob,
            donorEmail,
            donorPhone,
            donationCategory: selectedCategoryId,
            subCategory: selectedSubCategoryId || undefined,
            superSubCategory: selectedSuperSubCategoryId || undefined,
            amount: amountToPay,
            paymentMethod,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
            message: message || undefined,
            receiveMahaprasad,
            address: receiveMahaprasad ? address : undefined,
            city: receiveMahaprasad ? city : undefined,
            pincode: receiveMahaprasad ? pincode : undefined,
            state: receiveMahaprasad ? state : undefined,
          };

          const apiResponse = await fetch("/api/donations", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(donationData),
          });

          const result = await apiResponse.json();

          if (apiResponse.ok) {
            setPaymentStatus(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
            setDonorName("");
            setDonorDob("");
            setDonorEmail("");
            setDonorPhone("");
            setCustomAmount("");
            setSelectedAmount(null);
            setPaymentMethod("card");
            setMessage("");
            setReceiveMahaprasad(false);
            setAddress("");
            setCity("");
            setPincode("");
            setState("");
            if (!initialCategoryId) setSelectedCategoryId("");
            setSelectedSubCategoryId("");
            setSelectedSuperSubCategoryId("");
          } else {
            setPaymentStatus(`Failed to save donation: ${result.message || "Unknown error"}`);
          }
        } catch (error) {
          setPaymentStatus(`Error: ${error instanceof Error ? error.message : "Unknown error"}`);
        } finally {
          setIsLoading(false);
        }
      },
      prefill: { name: donorName, email: donorEmail, contact: donorPhone },
      notes: {
        payment_method: paymentMethod,
        message: message || "No message",
        receive_mahaprasad: receiveMahaprasad ? "Yes" : "No",
        ...(receiveMahaprasad && { address, city, pincode, state }),
      },
      theme: { color: "#0d9488" },
      method: {
        upi: paymentMethod === "upi",
        card: paymentMethod === "card",
        netbanking: paymentMethod === "bank_transfer",
      },
      modal: {
        ondismiss: () => {
          setIsLoading(false);
          setPaymentStatus("Payment cancelled.");
        },
      },
    };

    try {
      const razorpay = new (window as any).Razorpay(options);
      razorpay.on("payment.failed", (response: { error: { description: string } }) => {
        setPaymentStatus(`Payment failed: ${response.error.description}`);
        setIsLoading(false);
      });
      razorpay.open();
    } catch (error) {
      setPaymentStatus("Error initializing payment.");
      setIsLoading(false);
      console.error("Razorpay error:", error);
    }
  };

  if (!donationCategories.length) {
    return (
      <div className="container mx-auto px-4 py-16 bg-gradient-to-b from-amber-50 to-gray-100 min-h-screen">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          Donation Form Unavailable
        </h2>
        <p className="text-red-500 text-center">
          No donation categories available. Please contact support.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 bg-gradient-to-b from-amber-50 to-gray-100 min-h-screen">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
        Make a Meaningful Donation
      </h2>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
        <section className="mb-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-5 border-l-4 border-teal-600 pl-4 flex items-center">
            <svg className="w-6 h-6 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Personal Information
          </h3>
          <div className="space-y-5">
            <div>
              <label className="block text-gray-600 font-semibold mb-2 text-sm uppercase">Full Name</label>
              <input
                type="text"
                value={donorName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDonorName(e.target.value)}
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 bg-gray-50 text-gray-700"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold mb-2 text-sm uppercase">Date of Birth</label>
              <input
                type="date"
                value={donorDob}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDonorDob(e.target.value)}
                max="2025-06-08"
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 bg-gray-50 text-gray-700"
                required
              />
              <div className="mt-2 p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500 text-sm text-yellow-700">
                Providing your date of birth allows special puja and prayers on your birthday.
              </div>
            </div>
            <div>
              <label className="block text-gray-600 font-semibold mb-2 text-sm uppercase">Email Address</label>
              <input
                type="email"
                value={donorEmail}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDonorEmail(e.target.value)}
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 bg-gray-50 text-gray-700"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold mb-2 text-sm uppercase">Contact Number</label>
              <input
                type="tel"
                value={donorPhone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDonorPhone(e.target.value)}
                pattern="\d{10}"
                title="Phone number must be 10 digits"
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 bg-gray-50 text-gray-700"
                required
              />
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-5 border-l-4 border-teal-600 pl-4 flex items-center">
            <svg className="w-6 h-6 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2v-4c0-1.1-.9-2-2-2zM12 4a8 8 0 00-8 8h2a6 6 0 0112 0h2a8 8 0 00-8-8z" />
            </svg>
            Offer Seva
          </h3>
          <div className="space-y-5">
            {!initialCategoryId ? (
              <div>
                <label className="block text-gray-600 font-semibold mb-2 text-sm uppercase">Donation Category</label>
                <select
                  value={selectedCategoryId}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    console.log("Category selected:", e.target.value);
                    setSelectedCategoryId(e.target.value);
                    setSelectedSubCategoryId("");
                    setSelectedSuperSubCategoryId("");
                    setSelectedAmount(null);
                    setCustomAmount("");
                  }}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 bg-gray-50 text-gray-700"
                >
                  <option value="">Select a category</option>
                  {donationCategories.map((category: DonationCategory) => (
                    <option key={category.id} value={category.id}>
                      {category.title}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div>
                <label className="block text-gray-600 font-semibold mb-2 text-sm uppercase">Donation Category</label>
                <p className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-gray-700">
                  {selectedCategory?.title || "No category selected"}
                </p>
              </div>
            )}

            {subCategories.length > 0 && (
              <div>
                <label className="block text-gray-600 font-semibold mb-2 text-sm uppercase">Please select a Seva</label>
                <select
                  value={selectedSubCategoryId}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    console.log("Subcategory selected:", e.target.value);
                    setSelectedSubCategoryId(e.target.value);
                    setSelectedSuperSubCategoryId("");
                    setSelectedAmount(null);
                    setCustomAmount("");
                  }}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 bg-gray-50 text-gray-700"
                >
                  <option value="">Select a subcategory</option>
                  {subCategories.map((sub: SubCategory) => (
                    <option key={sub.id} value={sub.id}>
                      {sub.title}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {superSubCategories.length > 0 && (
              <div>
                <label className="block text-gray-600 font-semibold mb-2 text-sm uppercase">Seva specification</label>
                <select
                  value={selectedSuperSubCategoryId}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    console.log("Super subcategory selected:", e.target.value);
                    setSelectedSuperSubCategoryId(e.target.value);
                    setSelectedAmount(null);
                    setCustomAmount("");
                  }}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 bg-gray-50 text-gray-700"
                >
                  <option value="">Select a super subcategory</option>
                  {superSubCategories.map((superSub: SuperSubCategory) => (
                    <option key={superSub.id} value={superSub.id}>
                      {superSub.title}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {selectedCategoryId && (
              <div>
                <label className="block text-gray-600 font-semibold mb-2 text-sm uppercase">Amount (INR)</label>
                {subCategories.length > 0 && !selectedSubCategoryId ? (
                  <p className="text-gray-500 text-sm">Please select a Seva to view amounts.</p>
                ) : (
                  <>
                    {amountsToShow.length > 0 && (
                      <div className="flex flex-wrap gap-4 mb-4">
                        {amountsToShow.map((amount: number) => (
                          <button
                            key={amount}
                            onClick={() => handleAmountClick(amount)}
                            className={`px-5 py-2 rounded-xl border ${
                              selectedAmount === amount
                                ? "bg-teal-600 text-white border-teal-600"
                                : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-teal-50"
                            }`}
                            disabled={isLoading}
                          >
                            ₹{amount.toLocaleString("en-IN")}
                          </button>
                        ))}
                      </div>
                    )}
                    <input
                      type="number"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      placeholder="Enter custom amount"
                      min="1"
                      className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 bg-gray-50 text-gray-700"
                      disabled={isLoading}
                    />
                  </>
                )}
              </div>
            )}
          </div>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-5 border-l-4 border-teal-600 pl-4 flex items-center">
            <svg className="w-6 h-6 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            Payment Information
          </h3>
          <div className="space-y-3">
            <label className="block text-gray-600 font-semibold mb-2 text-sm uppercase">Payment Method</label>
            {["card", "upi", "bank_transfer"].map((method) => (
              <label key={method} className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method}
                  checked={paymentMethod === method}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPaymentMethod(e.target.value)}
                  className="mr-3 h-5 w-5 text-teal-600"
                  disabled={isLoading}
                />
                <span className="text-gray-700">
                  {method === "card" ? "Credit/Debit Card" : method === "upi" ? "UPI" : "Bank Transfer"}
                </span>
              </label>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-5 border-l-4 border-teal-600 pl-4 flex items-center">
            <svg className="w-6 h-6 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            Additional Information
          </h3>
          <div>
            <label className="block text-gray-600 font-semibold mb-2 text-sm uppercase">Message (Optional)</label>
            <textarea
              value={message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
              className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 bg-gray-50 text-gray-700"
              rows={4}
              placeholder="Share a message or special request"
              disabled={isLoading}
            />
            <p className="text-sm mt-2">
              By continuing, you agree to our{" "}
              <a href="/terms-and-services" className="text-teal-600">Terms and Conditions</a> and{" "}
              <a href="/privacy-policy" className="text-teal-600">Privacy Policy</a>.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={receiveMahaprasad}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setReceiveMahaprasad(e.target.checked)}
              className="mr-3 h-5 w-5 text-teal-600"
              disabled={isLoading}
            />
            <span className="text-gray-700 font-semibold text-sm">I would like to receive Mahaprasad (only in India)</span>
          </label>
        </section>

        {receiveMahaprasad && (
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-5 border-l-4 border-teal-600 pl-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Delivery Address
            </h3>
            <div className="space-y-5">
              <div>
                <label className="block text-gray-600 font-semibold mb-2 text-sm uppercase">Address</label>
                <textarea
                  value={address}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setAddress(e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 bg-gray-50 text-gray-700"
                  rows={3}
                  placeholder="Enter your full address"
                  required
                  disabled={isLoading}
                />
              </div>
              <div>
                <label className="block text-gray-600 font-semibold mb-2 text-sm uppercase">City</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 bg-gray-50 text-gray-700"
                  placeholder="Enter your city"
                  required
                  disabled={isLoading}
                />
              </div>
              <div>
                <label className="block text-gray-600 font-semibold mb-2 text-sm uppercase">Pincode</label>
                <input
                  type="text"
                  value={pincode}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPincode(e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 bg-gray-50 text-gray-700"
                  placeholder="Enter your pincode"
                  pattern="\d{6}"
                  title="Pincode must be 6 digits"
                  required
                  disabled={isLoading}
                />
              </div>
              <div>
                <label className="block text-gray-600 font-semibold mb-2 text-sm uppercase">State</label>
                <input
                  type="text"
                  value={state}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState(e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 bg-gray-50 text-gray-700"
                  placeholder="Enter your state"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>
          </section>
        )}

        {paymentStatus && (
          <div
            className={`mb-6 p-4 rounded-xl text-sm ${
              paymentStatus.includes("successful")
                ? "bg-green-100 text-green-800 border-l-4 border-green-500"
                : "bg-red-100 text-red-800 border-l-4 border-red-500"
            }`}
          >
            {paymentStatus}
          </div>
        )}

        <button
          onClick={handlePayment}
          className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600"
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : "Offer Seva"}
        </button>
      </div>
    </div>
  );
};

export default DonationForm;