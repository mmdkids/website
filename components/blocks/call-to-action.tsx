import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function CallToAction() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col items-center justify-center lg:flex-row lg:justify-between">
        <div className="mb-8 lg:mb-0 lg:w-1/2">
          <Image
            src="/blocks/child.png" // Replace with your image path
            alt="Father and child"
            width={700}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="bg-green-700 p-8 rounded-lg shadow-lg text-white lg:w-1/2 lg:ml-8">
          <h2 className="text-3xl font-bold mb-4">Are You Ready to Explore More?</h2>
          <p className="text-lg mb-6">
            Don&apos;t miss out on more creative ideas, parenting tips, and fun activities! Stay connected with us for the latest updates and exclusive offers.
          </p>
          <Button asChild className="bg-yellow-400 text-green-900 hover:bg-yellow-500">
            <Link href="#join">
              Join Our Community <span className="ml-2">&rarr;</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}