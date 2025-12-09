import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function ContactUs() {
  return (
    <div className="flex flex-col md:flex-row bg-gray-50 p-8 rounded-lg shadow-sm max-w-6xl mx-auto my-12">
      <div className="md:w-1/2 p-4">
        <h2 className="max-w-2xl font-fredoka text-balance text-4xl font-medium md:text-6xl mb-4">Contact Info</h2>
        <p className="text-gray-600 mb-6">
          We are here to support you on your journey with child care.
        </p>

        <div className="space-y-4">
          <div className="flex items-center">
            <Phone className="text-primary mr-3" size={20} />
            <div>
              <p className="font-semibold text-gray-700">Phone</p>
              <p className="text-gray-600">+1 (587) 691-3889</p>
            </div>
          </div>

          <div className="flex items-center">
            <Mail className="text-primary mr-3" size={20} />
            <div>
              <p className="font-semibold text-gray-700">Email Address</p>
              <p className="text-gray-600">hello@mmdkids.ca</p>
            </div>
          </div>

          <div className="flex items-center">
            <MapPin className="text-primary mr-3" size={20} />
            <div>
              <p className="font-semibold text-gray-700">Location</p>
              <p className="text-gray-600">1021 3 Ave South, Lethbridge, Alberta T1J0J3</p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 p-4 mt-8 md:mt-0">
        <form className="space-y-4">
          <Input type="text" placeholder="Your Name" className="w-full p-3 border rounded-md" />
          <Input type="email" placeholder="Email Address" className="w-full p-3 border rounded-md" />
          <Input type="text" placeholder="Subject" className="w-full p-3 border rounded-md" />
          <Textarea placeholder="Messages" rows={5} className="w-full p-3 border rounded-md"></Textarea>
          <Button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-md font-semibold">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}