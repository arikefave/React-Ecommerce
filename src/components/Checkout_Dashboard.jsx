import React from "react";
import { FiX } from "react-icons/fi";

const Checkout_Dashboard = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full px-5 lg:px-40 lg:pb-10 gap-0 lg:gap-10">
      <div className="w-full lg:w-[20%] text-cBlack">
        <div className="bg-[#F5F5F5] text-sm p-2.5">
          <p className="font-medium">Account Dashboard</p>
          <p>My Orders</p>
          <p>My Downloadable Products</p>
          <p className="border-b border-[#BDBDBD] pb-2">My Wish List</p>
          <p className="mt-2">Address Book</p>
          <p>Account Information</p>
          <p>Stored Payment Methods</p>
          <p className="border-b border-[#BDBDBD] pb-2">Billing Agreements</p>
          <p className="mt-2">My Product</p>
          <p>Reviews</p>
          <p>Newsletter</p>
          <p>Subscriptions</p>
        </div>
        <div className="my-2">
          <div className="flex items-center justify-center mb-1">
            <h5 className="font-semibold mb-2 text-cBlack">Compare Products</h5>
            <small className="text-[10px] text-cGrey_1">(2 items)</small>
          </div>
          <div className="flex font-light text-sm leading-5 mb-0.5">
            <FiX className="mr-1" />
            <small className="underline text-cBlack">Summit Watch</small>
          </div>
          <div className="flex font-light text-sm leading-5 mb-1">
            <FiX className="mr-1" />
            <small className=" underline text-cBlack">
              Cruise Dual Analog Watch
            </small>
          </div>
          <div className="flex gap-7 mt-4">
            <button className="rounded-sm bg-cGreen text-white font-bold text-sm leading-5 p-2 hover:bg-cGreen/70 hover:shadow-lg transition-all duration-300 ease-in-out">
              Compare
            </button>
            <button className="text-sm leading-5 underline text-cFilterGrey">
              Clear All
            </button>
          </div>
        </div>
        <div className="gap-2 text-cBlack my-5">
          <h6 className="font-semibold">My Wish List</h6>
          <p className="font-light text-sm leading-5">
            You have no items in your wish list.
          </p>
        </div>
        <div className="my-2">
          <div className="flex items-center justify-center mb-1">
            <h5 className="font-semibold mb-2 text-cBlack">Compare Products</h5>
            <small className="text-[10px] text-cGrey_1">(2 items)</small>
          </div>
          <div className="flex font-light text-sm leading-5 mb-0.5">
            <FiX className="mr-1" />
            <small className="underline text-cBlack">Summit Watch</small>
          </div>
          <div className="flex font-light text-sm leading-5 mb-1">
            <FiX className="mr-1" />
            <small className=" underline text-cBlack">
              Cruise Dual Analog Watch
            </small>
          </div>
          <div className="flex gap-7 mt-4">
            <button className="rounded-sm bg-cGreen text-white font-bold text-sm leading-5 p-2 hover:bg-cGreen/70 hover:shadow-lg transition-all duration-300 ease-in-out">
              Compare
            </button>
            <button className="text-sm leading-5 underline text-cFilterGrey">
              Clear All
            </button>
          </div>
        </div>
        <div className="my-2">
          <h5 className="font-semibold mb-2 text-cBlack">Recently Ordered</h5>
          <div className="flex items-center justify-center gap-2">
            <input
              type="radio"
              name="shippingOption"
              value="fixed"
              className="appearance-none w-4 h-4 p-1 bg-white border-2 border-gray-300 rounded-full checked:bg-cGreen checked:border-cGreen relative checked:after:content-[''] checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:w-2 checked:after:h-2 checked:after:bg-white checked:after:rounded-full checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 transition-all focus:ring-2 focus:ring-cGreen focus:ring-opacity-50"
            />
            <p className="text-sm underline">Wayfarer Messenger Bag</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <input
              type="radio"
              name="shippingOption"
              value="fixed"
              className="appearance-none w-4 h-4 p-1 bg-white border-2 border-gray-300 rounded-full checked:bg-cGreen checked:border-cGreen relative checked:after:content-[''] checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:w-2 checked:after:h-2 checked:after:bg-white checked:after:rounded-full checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 transition-all focus:ring-2 focus:ring-cGreen focus:ring-opacity-50"
            />
            <p className="text-sm underline">Wayfarer Messenger Bag</p>
          </div>
          <div className="flex gap-7 mt-4">
            <button className="rounded-sm bg-cGreen text-white font-bold text-sm leading-5 p-2 hover:bg-cGreen/70 hover:shadow-lg transition-all duration-300 ease-in-out">
              Add to Cart
            </button>
            <button className="text-sm leading-5 underline text-cFilterGrey">
              Clear All
            </button>
          </div>
        </div>
        <div className="my-2">
          <div className="flex items-center justify-between">
            <h5 className="font-semibold mb-2 text-cBlack">My Wish List</h5>
            <small className="text-[10px] text-cGrey_1">(2 items)</small>
          </div>
          <div className="py-2">
            <div className="flex items-start gap-3 mt-2 text-cFilterGrey">
              <div className="flex items-center w-[80px] h-[90px]">
                <img src="/Greychair.png" alt="product" />
              </div>
              <div className="flex">
                <div>
                  <p className="text-sm underline">Go-Get’r Pushup Grips</p>
                  <p className="font-bold text-sm my-1">$45.00</p>
                  <button className="rounded-sm bg-cGreen text-white font-bold text-sm leading-4 px-1.5 py-2 hover:bg-cGreen/70 hover:shadow-lg transition-all duration-300 ease-in-out">
                    Add to Cart
                  </button>
                </div>
              </div>
              <FiX className="font-bold text-lg leading-5" />
            </div>
            <div className="flex items-start gap-3 my-5 text-cFilterGrey">
              <div className="flex items-center w-[80px] h-[90px]">
                <img src="/Greychair.png" alt="product" />
              </div>
              <div className="flex">
                <div>
                  <p className="text-sm underline">Go-Get’r Pushup Grips</p>
                  <p className="font-bold text-sm my-1">$45.00</p>
                  <button className="rounded-sm bg-cGreen text-white font-bold text-sm leading-4 px-1.5 py-2 hover:bg-cGreen/70 hover:shadow-lg transition-all duration-300 ease-in-out">
                    Add to Cart
                  </button>
                </div>
              </div>
              <FiX className="font-bold text-lg leading-5" />
            </div>
            <div className="flex items-start gap-3 mt-2 text-cFilterGrey">
              <div className="flex items-center w-[80px] h-[90px]">
                <img src="/Greychair.png" alt="product" />
              </div>
              <div className="flex">
                <div>
                  <p className="text-sm underline">Go-Get’r Pushup Grips</p>
                  <p className="font-bold text-sm my-1">$45.00</p>
                  <button className="rounded-sm bg-cGreen text-white font-bold text-sm leading-4 px-1.5 py-2 hover:bg-cGreen/70 hover:shadow-lg transition-all duration-300 ease-in-out">
                    Add to Cart
                  </button>
                </div>
              </div>
              <FiX className="font-bold text-lg leading-5" />
            </div>
          </div>
          <button className="text-sm leading-5 underline text-cFilterGrey">
            Go to Wish List
          </button>
        </div>
      </div>
      <div className="w-full lg:w-[80%]">
        <h1 className="font-light text-[40px] text-cGrey_1 mb-2">
          My Dashboard
        </h1>
        <div>
          <h2 className="font-semibold text-lg text-cBlack border-b border-[#BDBDBD] pb-1">
            Account Information
          </h2>
          <div className="flex flex-col lg:flex-row gap-0 lg:gap-64 items-center">
            <div>
              <p className="font-medium text-cFilterGrey mt-4">
                Contact Information
              </p>
              <div className="text-cGrey_1 text-sm">
                <p>Veronica Costello</p>
                <p>roni_cost@example.com</p>
                <div className="flex gap-2">
                  <p className="border-r border-cGrey_1 pr-2 underline">Edit</p>
                  <p className="underline">Change Password</p>
                </div>
              </div>
            </div>
            <div>
              <p className="font-medium text-cFilterGrey mt-2">Newsletters</p>
              <div className="text-cGrey_1 text-sm">
                <p>You aren't subscribed to our newsletter</p>
                <p className="underline">Edit</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-12">
          <div className="flex items-center gap-2 pb-1 border-b border-[#BDBDBD]">
            <h2 className="font-semibold text-lg text-cBlack">Address Book</h2>
            <p className="text-sm text-cGrey_1">Manage Addresses</p>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-56 lg:items-center">
            <div>
              <p className="font-medium text-cFilterGrey mt-4">
                Contact Information
              </p>
              <div className="text-cGrey_1 text-sm">
                <p>Veronica Costello</p>
                <p>6146 Honey Bluff Parkway</p>
                <p>Calder, Michigan, 49628-7978</p>
                <p>United States</p>
                <p>T: (555) 229-3326</p>
                <p className="underline">Edit Address</p>
              </div>
            </div>
            <div>
              <p className="font-medium text-cFilterGrey mt-2">Newsletters</p>
              <div className="text-cGrey_1 text-sm">
                <p>Veronica Costello</p>
                <p>6146 Honey Bluff Parkway</p>
                <p>Calder, Michigan, 49628-7978</p>
                <p>United States</p>
                <p>T: (555) 229-3326</p>
                <p className="underline">Edit Address</p>
              </div>
            </div>
          </div>
        </div>
        {/* ordersin a table */}
        <div>
          <div className="flex items-center gap-2 pb-1 border-b border-[#BDBDBD] mt-3">
            <h2 className="font-semibold text-lg text-cBlack">Recent Orders</h2>
            <p className="text-sm text-cGrey_1 underline">View All</p>
          </div>
          <div className="overflow-x-auto">
            <table className="table-auto w-full min-w-[600px]">
              <thead className="border-b border-[#E0E0E0] font-medium text-[#333333] text-sm">
                <tr>
                  <th className="text-left py-3">Order #</th>
                  <th className="text-left py-3">Date</th>
                  <th className="text-left py-3">Ship To</th>
                  <th className="text-left py-3">Order Total</th>
                  <th className="text-left py-3">Status</th>
                  <th className="text-left py-3">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm text-cFilterGrey">
                <tr className="border-b border-[#E0E0E0]">
                  <td className="py-3">000000003</td>
                  <td className="py-3">5/21/19</td>
                  <td className="py-3">Veronica Costello</td>
                  <td className="py-3">$96.60</td>
                  <td className="py-3">Pending</td>
                  <td className="py-3">View Order | Reorder</td>
                </tr>
                <tr className="border-b border-[#E0E0E0]">
                  <td className="py-3">000000003</td>
                  <td className="py-3">5/21/19</td>
                  <td className="py-3">Veronica Costello</td>
                  <td className="py-3">$96.60</td>
                  <td className="py-3">Pending</td>
                  <td className="py-3">View Order | Reorder</td>
                </tr>
                <tr className="border-b border-[#E0E0E0]">
                  <td className="py-3">000000003</td>
                  <td className="py-3">5/21/19</td>
                  <td className="py-3">Veronica Costello</td>
                  <td className="py-3">$96.60</td>
                  <td className="py-3">Pending</td>
                  <td className="py-3">View Order | Reorder</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout_Dashboard;
