"use client";
import React from "react";
import SubHeader from "@/components/layouts/SubHeader";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    adminName: "Mohamed Omar",
    Role: "Content Admin",
    Email: "Mo@gmail.com",
    status: "Active",
    availableColors: ["red", "blue", "green"],
  },
  {
    id: 2,
    adminName: "Mohamed Omar",
    Role: "Content Admin",
    Email: "Mo@gmail.com",
    status: "Inactive",
    availableColors: ["red", "blue", "green"],
  },
];

export default function Manegment() {
  const router = useRouter(); 

  const handleEyeClick = (id: number) => {
    router.push(`/dashboard/manegment/${id}`);
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto">
        <SubHeader title="Admin Management">
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center w-full sm:w-auto">
            <div className="relative w-full sm:w-[140px] lg:w-64">
              <Input
                placeholder="Search product name"
                className="pl-10 border-[#eeeeee] bg-white border-2 focus:outline-none py-3"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#888888]" />
            </div>
            <Link href="/dashboard/manegment/add">
              <Button>
                + New Admin
              </Button>
            </Link>
          </div>
        </SubHeader>

        <div className="overflow-x-auto bg-white rounded-lg">
          <table className="min-w-full text-center border-collapse">
        
          <thead>
  <tr className="border-b">
    <th className="py-4 px-6 text-black font-bold text-left">Admin Name</th>
    <th className="py-4 px-6 text-black font-bold text-left">Role</th>
    <th className="py-4 px-6 text-black font-bold text-left">Email</th>
    <th className="py-4 px-6 text-black font-bold text-left">Action</th>
  </tr>
</thead>
<tbody>
  {products.map((product) => (
    <tr key={product.id} className="border-b text-left">
      <td className="py-4 px-6 text-[#36383a]">{product.adminName}</td>
      <td className="py-4 px-6 text-[#36383a]">{product.Role}</td>
      <td className="py-4 px-6 text-[#36383a]">{product.Email}</td>
      <td className="py-4 px-6 text-left">
        <div className="w-[94.67px] h-[28px] rounded-lg flex items-center justify-start space-x-2">
          <button onClick={() => handleEyeClick(product.id)}>
            <i className="fa-solid fa-pencil text-[#a19f9f]"></i>
          </button>
          <div className="w-px h-5 bg-[#eeeeee]"></div>
          <button>
            <i className="fa-solid fa-star text-yellow-400"></i>
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
