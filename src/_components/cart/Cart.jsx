import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, resetCart } from '../../redux/cartReducer';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const products = useSelector((state) => state.cart.products)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = () => {
    let total = 0
    products.forEach((item) => {
      total += item.price * item.quantity
    })
    return total.toFixed(2)
  }
  return (
    <div className='cart absolute right-[20px] top-[80px] z-[999] p-[20px] bg-white w-[300px]'>
      <h1 className='font-normal text-[24px] mb-[30px] text-gray-500'>Products in your Cart</h1>
      {products?.map((item) => (
        <div className="item flex items-center justify-between gap-5 mb-2.5" key={item.id}>
          <img className='w-[100px] h-[120px] object-cover' src={item.img} alt="" />
          <div className="details">
            <h1 className='font-medium text-lg text-gray-500 mb-[10px]'>{item.title}</h1>
            <p className='text-gray-500 mb-[10px] text-[14px]'>{item.desc?.substring(0, 100)}</p>
            <div className="price text-blue-500">{item.quantity} x ${item.price}</div>
          </div>
          <div onClick={()=> dispatch(removeItem(item.id))}>
          <DeleteOutlineIcon className='text-red-500 cursor-pointer'   />
          </div>
        </div>
      ))}
      <div className="total flex justify-between font-medium my-[20px] text-lg">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button className=' p-2.5 flex items-center justify-between gap-5 cursor-pointer border-none bg-blue-500 text-white text-[14px] font-medium mb-5'
          onClick={() => products.length > 0 ? navigate('/checkout') : alert('السلة فارغة! أضف منتجات أولاً')}>PROCEED TO CHECKOUT</button>
      <span className='text-red-500 cursor-pointer text-[12px]' onClick={()=> dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

export default Cart