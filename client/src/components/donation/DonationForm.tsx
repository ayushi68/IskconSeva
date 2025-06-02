import React, { useState, useEffect } from "react";
import { useRoute } from "wouter";
import { donationCategories, DonationCategory, SubCategory, SuperSubCategory } from "../../lib/donationdata";

interface DonationFormProps {
  preselectedCategoryId?: string;
}

const DonationForm: React.FC<DonationFormProps> = ({ preselectedCategoryId }) => {
  const [match, params] = useRoute("/donation-form/:categoryId");
  const categoryIdFromUrl = match ? params.categoryId : null;
  const initialCategoryId = preselectedCategoryId || categoryIdFromUrl || "";

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

  const selectedCategory: DonationCategory | undefined = donationCategories.find(
    (category) => category.id === selectedCategoryId
  );

  const subCategories: SubCategory[] = selectedCategory?.subCategories || [];

  const selectedSubCategory: SubCategory | undefined = subCategories.find(
    (sub) => sub.id === selectedSubCategoryId
  );

  const superSubCategories: SuperSubCategory[] = selectedSubCategory?.superSubCategories ?? [];

  const selectedSuperSubCategory: SuperSubCategory | undefined = superSubCategories.find(
    (superSub) => superSub.id === selectedSuperSubCategoryId
  );

  const rawAmounts = selectedSuperSubCategory?.amounts || selectedSubCategory?.amounts || [];
  const amountsToShow: number[] = rawAmounts.length > 0 ? rawAmounts.map((amount) =>
    typeof amount === "string" ? parseInt(amount, 10) : amount
  ) : [1000, 2000, 5000]; // Fallback amounts if none are defined
  const customAmountAllowed = selectedSuperSubCategory?.customAmountAllowed ?? selectedSubCategory?.customAmountAllowed ?? true;

  // Debugging logs for categories and amounts
  useEffect(() => {
    console.log("Donation Categories:", donationCategories);
    console.log("Selected Category:", selectedCategory);
    console.log("Sub Categories:", subCategories);
    console.log("Selected Sub Category:", selectedSubCategory);
    console.log("Super Sub Categories:", superSubCategories);
    console.log("Selected Super Sub Category:", selectedSuperSubCategory);
    console.log("amountsToShow:", amountsToShow);
    console.log("customAmountAllowed:", customAmountAllowed);
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
    console.log("State Update:", {
      selectedCategoryId,
      selectedSubCategoryId,
      selectedSuperSubCategoryId,
      amountsToShow,
      customAmountAllowed,
      selectedAmount,
      customAmount,
    });
  }, [
    selectedCategoryId,
    selectedSubCategoryId,
    selectedSuperSubCategoryId,
    amountsToShow,
    customAmountAllowed,
    selectedAmount,
    customAmount,
  ]);

  useEffect(() => {
    console.log("isLoading state:", isLoading);
  }, [isLoading]);

  useEffect(() => {
    if (selectedCategoryId && subCategories.length > 0) {
      setSelectedSubCategoryId(subCategories[0].id);
    } else {
      setSelectedSubCategoryId("");
    }
    setSelectedSuperSubCategoryId("");
    // Only reset amounts if the current selectedAmount is not in the new amountsToShow
    if (selectedAmount !== null && !amountsToShow.includes(selectedAmount)) {
      setSelectedAmount(null);
      setCustomAmount("");
    }
  }, [selectedCategoryId, subCategories, amountsToShow, selectedAmount]);

  useEffect(() => {
    if (selectedSubCategoryId && superSubCategories.length > 0) {
      setSelectedSuperSubCategoryId(superSubCategories[0].id);
    } else {
      setSelectedSuperSubCategoryId("");
    }
    // Only reset amounts if the current selectedAmount is not in the new amountsToShow
    if (selectedAmount !== null && !amountsToShow.includes(selectedAmount)) {
      setSelectedAmount(null);
      setCustomAmount("");
    }
  }, [selectedSubCategoryId, superSubCategories, amountsToShow, selectedAmount]);

  const handleAmountClick = (amount: number) => {
    console.log("handleAmountClick called with amount:", amount);
    setSelectedAmount(amount);
    setCustomAmount(amount.toString());
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log("Custom amount input event triggered. Value:", value);
    console.log("Input element:", e.target);
    if (value === "" || (Number(value) > 0 && !isNaN(Number(value)))) {
      console.log("Updating customAmount to:", value);
      setCustomAmount(value);
      console.log("Clearing selectedAmount");
      setSelectedAmount(null);
    } else {
      console.log("Invalid custom amount input. No state update.");
    }
  };

  const handlePayment = async () => {
    console.log("handlePayment started", { selectedAmount, customAmount });
    const amountToPay = selectedAmount || parseInt(customAmount);
    console.log("Amount to pay:", amountToPay);
    if (!amountToPay || isNaN(amountToPay) || amountToPay <= 0) {
      setPaymentStatus("Please select or enter a valid donation amount.");
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
    console.log("Initiating Razorpay payment");

    const options = {
      key: "rzp_test_1DP5mmL5tltz8K",
      amount: amountToPay * 100,
      currency: "INR",
      name: "HKM Bhilai Donation",
      description: `Donation for ${selectedCategory?.title} - ${selectedSubCategory?.title || "General"} ${
        selectedSuperSubCategory ? `- ${selectedSuperSubCategory.title}` : ""
      }`,
      handler: async function (response: any) {
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
            razorpayOrderId: response.razorpay_order_id || undefined,
            razorpaySignature: response.razorpay_signature || undefined,
            message: message || undefined,
            receiveMahaprasad,
            address: receiveMahaprasad ? address : undefined,
            city: receiveMahaprasad ? city : undefined,
            pincode: receiveMahaprasad ? pincode : undefined,
            state: receiveMahaprasad ? state : undefined,
          };

          const apiResponse = await fetch("/api/donations", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
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
          } else {
            setPaymentStatus(`Failed to save donation: ${result.message || "Unknown error"}`);
          }
        } catch (error) {
          setPaymentStatus(`Error saving donation: ${error instanceof Error ? error.message : "Unknown error"}`);
        } finally {
          setIsLoading(false);
          console.log("Payment processing completed");
        }
      },
      prefill: {
        name: donorName,
        email: donorEmail,
        contact: donorPhone,
      },
      notes: {
        payment_method: paymentMethod,
        message: message || "No message provided",
        receive_mahaprasad: receiveMahaprasad ? "Yes" : "No",
        ...(receiveMahaprasad && { address, city, pincode, state }),
      },
      theme: {
        color: "#0d9488",
      },
      method: {
        upi: paymentMethod === "upi",
        card: paymentMethod === "card",
        netbanking: paymentMethod === "bank_transfer",
      },
      modal: {
        ondismiss: () => {
          setIsLoading(false);
          setPaymentStatus("Payment cancelled.");
          console.log("Payment modal dismissed");
        },
      },
    };

    try {
      const razorpay = new (window as any).Razorpay(options);
      razorpay.on("payment.failed", function (response: any) {
        setPaymentStatus(`Payment failed: ${response.error.description}`);
        setIsLoading(false);
        console.log("Payment failed:", response.error);
      });
      razorpay.open();
      console.log("Razorpay modal opened");
    } catch (error) {
      setPaymentStatus("Error initializing payment. Please try again.");
      setIsLoading(false);
      console.error("Razorpay initialization error:", error);
    }
  };

  if (!donationCategories || donationCategories.length === 0 || !selectedCategoryId) {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-16 bg-gradient-to-b from-amber-50 to-gray-100 min-h-screen">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800 tracking-wide">
          Donation Form Unavailable
        </h2>
        <p className="text-red-500 text-center">
          {selectedCategoryId
            ? "No donation categories available. Please contact support."
            : "No preselected category provided. Please provide a category to proceed."}
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-16 bg-gradient-to-b from-amber-50 to-gray-100 min-h-screen">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800 tracking-wide">
        Make a Meaningful Donation
      </h2>
      <div className="max-w-2xl mx-auto bg-white p-8 sm:p-10 rounded-3xl shadow-2xl border border-gray-100">
        {/* Personal Information */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-5 border-l-4 border-teal-600 pl-4 flex items-center">
            <svg className="w-6 h-6 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            Personal Information
          </h3>
          <div className="space-y-5">
            <div>
              <label className="block text-gray-600 font-semibold mb-2 text-sm uppercase tracking-wide">
                Full Name
              </label>
              <input
                type="text"
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
                className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 bg-gray-50 text-gray-700 shadow-sm hover:border-teal-300"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold mb-2 text-sm uppercase tracking-wide">
                Date of Birth
              </label>
              <input
                type="date"
                value={donorDob}
                onChange={(e) => setDonorDob(e.target.value)}
                max="2025-06-01"
                className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 bg-gray-50 text-gray-700 shadow-sm hover:border-teal-300"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold mb-2 text-sm uppercase tracking-wide">
                Email Address
              </label>
              <input
                type="email"
                value={donorEmail}
                onChange={(e) => setDonorEmail(e.target.value)}
                className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 bg-gray-50 text-gray-700 shadow-sm hover:border-teal-300"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold mb-2 text-sm uppercase tracking-wide">
                Contact Number
              </label>
              <input
                type="tel"
                value={donorPhone}
                onChange={(e) => setDonorPhone(e.target.value)}
                pattern="\d{10}"
                title="Phone number must be 10 digits"
                className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 bg-gray-50 text-gray-700 shadow-sm hover:border-teal-300"
                required
              />
            </div>
          </div>
        </div>

        {/* Donation Category */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-5 border-l-4 border-teal-600 pl-4 flex items-center">
            <svg className="w-6 h-6 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2v-4c0-1.1-.9-2-2-2zM12 4a8 8 0 00-8 8h2a6 6 0 0112 0h2a8 8 0 00-8-8z"></path>
            </svg>
            Donation Category
          </h3>
          <div className="space-y-5">
            <div>
              <label className="block text-gray-600 font-semibold mb-2 text-sm uppercase tracking-wide">
                Donation Category
              </label>
              <p className="text-gray-700 p-4 bg-gray-50 rounded-xl border border-gray-200">
                {selectedCategory?.title || "No category selected"}
              </p>
            </div>

            {subCategories.length > 0 ? (
              <div>
                <label className="block text-gray-600 font-semibold mb-2 text-sm uppercase tracking-wide">
                  Subcategory
                </label>
                <select
                  value={selectedSubCategoryId}
                  onChange={(e) => {
                    console.log("Subcategory changed to:", e.target.value);
                    setSelectedSubCategoryId(e.target.value);
                  }}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 bg-gray-50 text-gray-700 shadow-sm hover:border-teal-300"
                >
                  <option value="">Select a subcategory</option>
                  {subCategories.map((sub) => (
                    <option key={sub.id} value={sub.id}>
                      {sub.title}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              selectedCategoryId && (
                <p className="text-gray-500 text-sm italic">
                  No subcategories available for this category.
                </p>
              )
            )}

            {superSubCategories.length > 0 && selectedSubCategoryId && (
              <div>
                <label className="block text-gray-600 font-semibold mb-2 text-sm uppercase tracking-wide">
                  Super Subcategory
                </label>
                <select
                  value={selectedSuperSubCategoryId}
                  onChange={(e) => {
                    console.log("Super Subcategory changed to:", e.target.value);
                    setSelectedSuperSubCategoryId(e.target.value);
                  }}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 bg-gray-50 text-gray-700 shadow-sm hover:border-teal-300"
                >
                  <option value="">Select a super subcategory</option>
                  {superSubCategories.map((superSub) => (
                    <option key={superSub.id} value={superSub.id}>
                      {superSub.title}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Amount Section */}
            {selectedCategoryId && (
              <div>
                {/* {console.log("Rendering amount section because selectedCategoryId =", selectedCategoryId)} */}
                {(selectedSubCategory || selectedSuperSubCategory) ? (
                  <>
                    <label className="block text-gray-600 font-semibold mb-2 text-sm uppercase tracking-wide">
                      Amount (INR)
                    </label>
                    {amountsToShow.length > 0 ? (
                      <div className="flex flex-wrap gap-4 mb-4" onClick={() => console.log("Parent div of buttons clicked")}>
                        {amountsToShow.map((amount, index) => (
                          <button
                            key={index}
                            onClick={(e) => {
                              console.log("Button element clicked:", e.currentTarget);
                              console.log("Button clicked for amount:", amount);
                              console.log("isLoading at click:", isLoading);
                              handleAmountClick(amount);
                            }}
                            onMouseDown={() => console.log("Mouse down on amount button:", amount)}
                            className={`px-5 py-2 rounded-xl border transition duration-300 pointer-events-auto z-10 ${
                              selectedAmount === amount
                                ? "bg-teal-600 text-white border-teal-600 shadow-md"
                                : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-teal-50 hover:border-teal-300"
                            } cursor-pointer`}
                          >
                            ₹{amount.toLocaleString("en-IN")}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-sm italic mb-4">
                        No preset amounts available for this selection.
                      </p>
                    )}
                    {customAmountAllowed && (
                      <input
                        type="number"
                        placeholder="Enter a donation amount"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        onFocus={() => console.log("Custom amount input focused")}
                        onBlur={() => console.log("Custom amount input blurred")}
                        min="1"
                        step="1"
                        className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 bg-gray-50 text-gray-700 shadow-sm hover:border-teal-300 pointer-events-auto z-10 cursor-text"
                      />
                    )}
                  </>
                ) : (
                  <p className="text-gray-500 text-sm italic mb-4">
                    Please select a subcategory to view donation amounts.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Payment Information */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-5 border-l-4 border-teal-600 pl-4 flex items-center">
            <svg className="w-6 h-6 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
            </svg>
            Payment Information
          </h3>
          <div className="space-y-4">
            <label className="block text-gray-600 font-semibold mb-2 text-sm uppercase tracking-wide">
              Payment Method
            </label>
            <div className="flex flex-col space-y-3">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-3 h-5 w-5 text-teal-600 focus:ring-teal-500 border-gray-300 transition duration-200"
                />
                <span className="text-gray-700 font-medium">Credit/Debit Card</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="upi"
                  checked={paymentMethod === "upi"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-3 h-5 w-5 text-teal-600 focus:ring-teal-500 border-gray-300 transition duration-300"
                />
                <span className="text-gray-700 font-medium">UPI</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bank_transfer"
                  checked={paymentMethod === "bank_transfer"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-3 h-5 w-5 text-teal-600 focus:ring-teal-500 border-gray-300 transition duration-200"
                />
                <span className="text-gray-700 font-medium">Bank Transfer</span>
              </label>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-5 border-l-4 border-teal-600 pl-4 flex items-center">
            <svg className="w-6 h-6 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
            </svg>
            Additional Information
          </h3>
          <div>
            <label className="block text-gray-600 font-semibold mb-2 text-sm uppercase tracking-wide">
              Message (Optional)
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 bg-gray-50 text-gray-700 shadow-sm hover:border-teal-300"
              rows={4}
              placeholder="Share a message or special request with us"
            />
          </div>
        </div>

        {/* Mahaprasad Checkbox */}
        <div className="mb-10">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={receiveMahaprasad}
              onChange={(e) => setReceiveMahaprasad(e.target.checked)}
              className="mr-3 h-5 w-5 text-teal-600 focus:ring-teal-500 border-gray-300 rounded transition duration-200"
            />
            <span className="text-gray-700 font-semibold text-sm">
              I would like to receive Mahaprasad
            </span>
          </label>
        </div>

        {/* Address Fields (Conditional) */}
        {receiveMahaprasad && (
          <div className="mb-10 space-y-5">
            <h3 className="text-2xl font-bold text-gray-800 mb-5 border-l-4 border-teal-600 pl-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              Delivery Address
            </h3>
            <div>
              <label className="block text-gray-600 font-semibold mb-2 text-sm uppercase tracking-wide">
                Address
              </label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 bg-gray-50 text-gray-700 shadow-sm hover:border-teal-300"
                rows={3}
                placeholder="Enter your full address"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold mb-2 text-sm uppercase tracking-wide">
                City
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 bg-gray-50 text-gray-700 shadow-sm hover:border-teal-300"
                placeholder="Enter your city"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold mb-2 text-sm uppercase tracking-wide">
                Pincode
              </label>
              <input
                type="text"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 bg-gray-50 text-gray-700 shadow-sm hover:border-teal-300"
                placeholder="Enter your pincode"
                pattern="\d{6}"
                title="Pincode must be 6 digits"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold mb-2 text-sm uppercase tracking-wide">
                State
              </label>
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 bg-gray-50 text-gray-700 shadow-sm hover:border-teal-300"
                placeholder="Enter your state"
                required
              />
            </div>
          </div>
        )}

        {/* Payment Status Message */}
        {paymentStatus && (
          <div
            className={`mb-6 p-4 rounded-xl text-sm shadow-sm ${
              paymentStatus.includes("successful")
                ? "bg-green-100 text-green-800 border-l-4 border-green-500"
                : "bg-red-100 text-red-800 border-l-4 border-red-500"
            }`}
          >
            {paymentStatus}
          </div>
        )}

        {/* Complete Donation Button */}
        <button
          onClick={handlePayment}
          className="w-full py-4 rounded-xl font-semibold text-white transition duration-300 flex items-center justify-center shadow-lg bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600"
        >
          Complete Donation
        </button>
      </div>
    </div>
  );
};

export default DonationForm;