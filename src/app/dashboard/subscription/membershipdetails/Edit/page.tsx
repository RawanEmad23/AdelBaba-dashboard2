import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
export default function EditMemberInformation() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-around">
      <div className="bg-white p-8 rounded-lg shadow-lg  w-full">
        <h2 className="text-2xl font-semibold mb-6">Edit Member Information</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 px-16  gap-6">
          
          <div>
          <label className="block text-gray-600 mb-2">Company Name</label>
                <Input type="text"
              placeholder="Tech Company"
              className="w-1/2  border-gray-300 rounded-full  p-5" />
             
      
          
          </div>
          <div>
          <label className="block text-gray-600 mb-2">Company Name</label>
                <Input type="text"
              placeholder="Tech Company"
             className="w-1/2  border-gray-300 rounded-full  p-5"/>
              </div>
              <div>
          <label className="block text-gray-600 mb-2">Company Name</label>
                <Input type="text"
              placeholder="Tech Company"
             className="w-1/2  border-gray-300 rounded-full  p-5"/>
              </div>
              <div>
          <label className="block text-gray-600 mb-2">Company Name</label>
                <Input type="text"
              placeholder="Tech Company"
             className="w-1/2  border-gray-300 rounded-full  p-5"/>
              </div>
              <div>
          <label className="block text-gray-600 mb-2">Company Name</label>
                <Input type="text"
              placeholder="Tech Company"
             className="w-1/2  border-gray-300 rounded-full  p-5"/>
              </div>
          <div>
          <label className="block text-gray-600 mb-2">Company Name</label>
                <Input type="text"
              placeholder="Tech Company"
             className="w-1/2  border-gray-300 rounded-full  p-5"/>
              </div>

              <div>
          <label className="block text-gray-600 mb-2">Company Name</label>
                <Input type="text"
              placeholder="Tech Company"
             className="w-1/2  border-gray-300 rounded-full  p-5"/>
              </div>
              <div>
          <label className="block text-gray-600 mb-2">Company Name</label>
                <Input type="text"
              placeholder="Tech Company"
             className="w-1/2  border-gray-300 rounded-full  p-5"/>
              </div>
              <div>
          <label className="block text-gray-600 mb-2">Company Name</label>
                <Input type="text"
              placeholder="Tech Company"
             className="w-1/2  border-gray-300 rounded-full  p-5"/>
              </div>


              <div>
          <label className="block text-gray-600 mb-2">Company Name</label>
                <Input type="text"
              placeholder="Tech Company"
             className="w-1/2  border-gray-300 rounded-full  p-5"/>
              </div>
        </form>
        <div className="mt-6 flex justify-center items-center">
          <button className="bg-[#f3b852] text-white py-2 px-32 rounded-lg ">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
