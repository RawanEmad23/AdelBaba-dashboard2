"use client";
import React from 'react';
import SubHeader from '@/components/layouts/SubHeader'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaSearch } from 'react-icons/fa';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const products = [
  {
    ticketid: 1,
    sentby: 'Mohamed Omar',
    subject: 'Technical issue',
    Date: "Mo@gmail.com",
    Email: "Mo@gmail.com",
    status: "Active",
    availableColors: ['red', 'blue', 'green'],
  },
  {
    ticketid: 2,
    sentby: 'Mohamed Omar',
    subject: 'Technical issue',
    Date: "Mo@gmail.com",
    Email: "Mo@gmail.com",
    status: "Inactive",
    availableColors: ['red', 'blue', 'green'],
  },
];

export default function supportandtickets() {
  const router = useRouter();  

  const handleEyeClick = (id: number) => {
    router.push(`/dashboard/supportandtickets/${id}`);

  };

  return (
    <div className="p-4  min-h-screen">
      <div className="container mx-auto">

      <div className="flex justify-between items-center mb-8 flex-col sm:flex-row">
      <SubHeader title="Support and Tickets" />

  <div className="flex flex-col sm:flex-row gap-4 sm:items-center w-full sm:w-auto">
    <div className="relative w-full sm:w-[140px] lg:w-64">
      <Input
        placeholder="Search product name"
        className="pl-10 border-[#eeeeee] bg-white border-2 rounded-full focus:outline-none py-3"
      />
      <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#888888]" />
    </div>

  </div>
</div>


        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full border border-gray-200 text-center">
            <thead>
              <tr className="border-b">
                <th className="py-4 px-6 text-black font-bold">Ticket id</th>
                <th className="py-4 px-6 text-black font-bold">Sent by</th>
                <th className="py-4 px-6 text-black font-bold">subject</th>
                <th className="py-4 px-6 text-black font-bold">Date</th>
                <th className="py-4 px-6 text-black font-bold">Email</th>
                <th className="py-4 px-6 text-black font-bold">Status</th>
                <th className="py-4 px-6 text-black font-bold">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b">
                  <td className="py-4 px-6 text-[#36383a]">{product.ticketid}</td>
                  <td className="py-4 px-6 text-[#36383a]">{product.sentby}</td>
                  <td className="py-4 px-6 text-[#36383a]">{product.subject}</td>
                  <td className="py-4 px-6 text-[#36383a]">{product.Date}</td>
                  <td className="py-4 px-6 text-[#36383a]">{product.Date}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-4 py-2 rounded-lg font-semibold text-white ${
                        product.status === 'Inactive' ? 'bg-[#ffaeb0]' : 'bg-[#92fba2]'
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="w-[94.67px] h-[28px] border-2 border-[#eeeeee] rounded-lg flex items-center justify-center space-x-2">
                      <button >
                        <i className="fa-solid fa-pencil text-[#a19f9f]"></i>
                      </button>
                      <div className="w-px h-5 bg-[#eeeeee]"></div>
                      <button   onClick={() => handleEyeClick(product.ticketid)}>
                        <i className="fa-solid fa-eye text-[#292d32]"></i>
                      </button>
                      <div className="w-px h-5 bg-[#eeeeee]"></div>
                      <button>
                        <i className="fa-solid fa-trash text-[#e13e3e]"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}