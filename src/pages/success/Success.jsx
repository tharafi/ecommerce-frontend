import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaWhatsapp, FaCheckCircle } from 'react-icons/fa';

const Success = () => {
  const { state } = useLocation();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">تم تأكيد طلبك بنجاح!</h2>
        <p className="mb-4">رقم الطلب: {Math.floor(Math.random() * 1000000)}</p>
        
        {state?.orderDetails && (
          <div className="mb-6 text-center">
            <p><strong>الزبون:</strong> {state.orderDetails.customer}</p>
            <p><strong>الهاتف:</strong> {state.orderDetails.phone}</p>
            <p><strong>المجموع:</strong> {state.orderDetails.total} دج</p>
          </div>
        )}

        <a 
          href={`https://wa.me/213657200453`} 
          className="bg-green-500 text-white py-2 px-4 rounded inline-flex items-center justify-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp /> التواصل عبر واتساب
        </a>
      </div>
    </div>
  );
};

export default Success;