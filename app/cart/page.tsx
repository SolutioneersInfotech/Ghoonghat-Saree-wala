import React from 'react';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import Header from '@/components/header';

const CartPage = () => {
  return (
    <>
    <div className="h-32 bg-rose-600">
        <Header/>
        </div>
    
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-8 font-cinzel">Your Shopping Cart</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left - Products */}
        <div className="md:col-span-2 space-y-6">
          {/* Cart Item */}
          <div className="flex border border-rose-500 rounded p-4 gap-4 items-center">
            <img
              src="/bridal-saree.jpeg"
              alt="Plaid Shirt & Skirt Set"
              className="w-24 h-32 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="text-lg font-medium">Plaid Shirt & Buttoned Skirt Set</h3>
              <p className="text-sm text-gray-600">Color: Olive/Multi</p>
              <p className="text-sm text-gray-600">Size: S</p>
              <p className="text-sm text-green-600">In Stock</p>
              <div className="mt-2 text-sm  space-x-4"> 
                <Button variant="outline" className="border border-rose-500 text-rose-500 hover:bg-rose-50 text-sm" >Edit</Button>
                <Button variant="outline" className="border border-rose-500 text-rose-500 hover:bg-rose-50 text-sm" >Move to Wishlist</Button>
                <Button variant="outline" className="border border-rose-500 text-rose-500 hover:bg-rose-50 text-sm" >Save for Later</Button>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <p className="text-base font-semibold">Rs. 4,250.00</p>
              <select className="border rounded px-2 py-1 text-sm w-16">
                <option>1</option>
                <option>2</option>
              </select>
              <p className="text-sm text-gray-600">Total: Rs. 4,250.00</p>
              <button className="text-red-500 hover:text-red-600">
                <Trash2 size={18} />
              </button>
            </div>
          </div>

          {/* Repeat this block for each product */}
        </div>

        {/* Right - Order Summary */}
        <div className="border border-rose-500  hover:bg-rose-50 rounded p-6 shadow-md h-fit">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

          <div className="space-y-2 text-sm mb-4">
            <div className="flex justify-between">
              <span>Sub Total:</span>
              <span className="font-medium">Rs. 7,040.00</span>
            </div>
          </div>

          <label htmlFor="coupon" className="text-sm font-medium block mt-4 mb-1">
            Coupon Code:
          </label>
          <input
            type="text"
            id="coupon"
            placeholder="Enter coupon"
            className="border px-3 py-2 w-full rounded text-sm mb-2 border-rose-500 hover:bg-rose-50"
          />
          <p className="text-xs text-gray-500 mb-4 ">
            Coupon code will be applied on the checkout page
          </p>

          <div className="flex justify-between text-base font-semibold mb-6">
            <span>Total:</span>
            <span>Rs. 7,040.00</span>
          </div>

          <Button className="w-full bg-rose-500  hover:bg-pink-600 text-white  mb-2">
            Proceed to Checkout
          </Button>
          <Button variant="outline" className="w-full border-rose-500 text-rose-500 hover:bg-rose-50">
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
    </>
  );
};

export default CartPage;
