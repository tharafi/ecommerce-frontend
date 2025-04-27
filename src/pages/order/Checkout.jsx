import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetCart } from '../../redux/cartReducer';

const Checkout = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    wilaya: '',
    commune: '',
    address: '',
    phone: '',
  });
  const [isSending, setIsSending] = React.useState(false);
  const navigate = useNavigate();

  const totalPrice = () => {
    return products.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };


  const sendWhatsAppMessage = () => {
    setIsSending(true);
    
    const phoneNumber = "213657200453";
    const itemsList = products.map(item => 
      `- ${item.title} (${item.quantity} x ${item.price} دج)`
    ).join('%0A');
  
    const message = `*طلب جديد*%0A%0A
      *الزبون:* ${formData.firstName} ${formData.lastName}%0A
      *الهاتف:* ${formData.phone}%0A
      *العنوان:* ${formData.wilaya}، ${formData.commune}، ${formData.address}%0A%0A
      *المنتجات:*%0A${itemsList}%0A%0A
      *المجموع:* ${totalPrice()} دج`;
  
    // إنشاء عنصر مؤقت لنسخ الرسالة
    const tempInput = document.createElement('textarea');
    tempInput.value = decodeURIComponent(message);
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  
    // محاولة فتح واتساب مع عرض تعليمات واضحة
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const whatsappUrl = isMobile 
      ? `whatsapp://send?phone=${phoneNumber}&text=${message}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
  
    const newWindow = window.open(whatsappUrl, '_blank');
    
    // التحقق من فتح النافذة بنجاح
    setTimeout(() => {
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        alert(`تم نسخ تفاصيل الطلب إلى الحافظة.\n\n`);
      }
      
      // إتمام العملية بغض النظر عن النتيجة
      dispatch(resetCart());
      navigate('/success', {
        state: {
          orderDetails: {
            customer: `${formData.firstName} ${formData.lastName}`,
            phone: formData.phone,
            total: totalPrice(),
            whatsappNumber: phoneNumber,
            orderMessage: decodeURIComponent(message)
          }
        }
      });
      setIsSending(false);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (products.length === 0) {
      alert('السلة فارغة! أضف منتجات أولاً');
      return;
    }
    sendWhatsAppMessage();
  };

  return (
    <div className="checkout p-[50px]">
      <h1 className="text-2xl font-bold mb-8">إتمام الطلب</h1>
      
      <div className="flex gap-8 flex-col md:flex-row">
        {/* عرض المنتجات */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">طلباتك</h2>
          {products.length === 0 ? (
            <p className="text-gray-500">لا توجد منتجات في السلة</p>
          ) : (
            <>
              {products.map((item) => (
                <div key={item.id} className="flex items-center gap-4 mb-4 p-4 border-b">
                  <img src={item.img} alt={item.title} className="w-20 h-20 object-cover" />
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-gray-600 text-sm">
                      {item.quantity} × {item.price} دج
                    </p>
                  </div>
                </div>
              ))}
              <div className="mt-6 text-xl font-bold">
                المجموع: {totalPrice()} دج
              </div>
            </>
          )}
        </div>

        {/* نموذج التوصيل */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">معلومات التوصيل</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4 flex-col md:flex-row">
              <div className="flex-1">
                <label className="block mb-1">الاسم</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-1">اللقب</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1">الولاية</label>
              <select
                name="wilaya"
                value={formData.wilaya}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              >
                <option value="">اختر الولاية</option>
                <option value="الجزائر">الجزائر</option>
                <option value="وهران">وهران</option>
                {/* أضف بقية الولايات */}
              </select>
            </div>

            <div>
              <label className="block mb-1">البلدية</label>
              <input
                type="text"
                name="commune"
                value={formData.commune}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block mb-1">العنوان التفصيلي</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block mb-1">رقم الهاتف</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
                pattern="[0]{1}[5-7]{1}[0-9]{8}"
                title="رقم هاتف جزائري صحيح (مثال: 0551234567)"
              />
            </div>

            <button
              type="submit"
              disabled={products.length === 0 || isSending}
              className={`w-full py-2 rounded text-white ${products.length === 0 ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} ${isSending ? 'opacity-70' : ''}`}
            >
              {isSending ? 'جاري الإرسال...' : 'تأكيد الطلب'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;