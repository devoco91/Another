import React from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';



c 
export default function App() {
  const config = {
    public_key: 'FLWPUBK_TEST-7f251b060e30a4e6328d606d77c37581-X',
    tx_ref: 'LASOP_'+Math.floor((Math.random() * 1000000000) +1),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
    email: userData.email,
      phonenumber: userData.tell,
      name: userData.fname,
    },
    customizations: {
      title: 'Training fee',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
     <h1>{userData.fName} {userData.lName}</h1>

      <button
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Payment with React hooks
      </button>
    </div>
  );
}
