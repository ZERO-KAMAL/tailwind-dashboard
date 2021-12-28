import React, { useState } from 'react'
import { Transition } from '@headlessui/react' //for smooth transition between tabs
import { Link } from 'react-scroll'
function navbar() {
    return (
        <>
            <div className="container  w-full">
                <div className='flex'>
                    <div className="">
                        <div class="min-h-screen flex flex-row bg-gray-100 dark:bg-dark ">
                            <div class="flex flex-col w-56 bg-gray-800 overflow-hidden">
                                <div class="flex items-center justify-center h-20 shadow-md">
                                    <h1 class="text-3xl uppercase text-indigo-500">Job Analysis</h1>
                                </div>
                                <ul class="flex flex-col py-4">
                                    <li>
                                        <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500   ">
                                            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-home"></i></span>
                                            <span class="text-sm font-medium">Dashboard</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500  ">
                                            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-briefcase"></i></span>
                                            <span class="text-sm font-medium">Projects</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500  ">
                                            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-drink"></i></span>
                                            <span class="text-sm font-medium">Drink</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500  ">
                                            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-shopping-bag"></i></span>
                                            <span class="text-sm font-medium">Shopping</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500  ">
                                            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-chat"></i></span>
                                            <span class="text-sm font-medium">Chat</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500  ">
                                            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-user"></i></span>
                                            <span class="text-sm font-medium">Profile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500  ">
                                            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-log-out"></i></span>
                                            <span class="text-sm font-medium">Logout</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-full ">
                        <div class="flex flex-row items-center p-1 justify-between bg-white shadow-xs shadow-sm header">

                            <div className="flex items-center ">
                                <span className='inline-flex items-center justify-center h-12 w-12 text-3xl text-gray-400'> <i class='bx bx-menu-alt-left'></i></span>

                                <a href="" class="flex flex-row items-center h-12 ml-4  text-gray-500  ">Home</a>
                            </div>

                            <div className='logout flex items-center'>
                                <span className='inline-flex items-center justify-center h-12 w-12 text-3xl text-gray-400'> <i class='bx bx-exit'></i></span>
                                <a href="" class="flex flex-row items-center h-12 ml-2  text-gray-500  ">Logout</a>
                            </div>

                        </div>
                        <div className="main-content-wrapper px-3 sm:px-8 py-12">
                            <div>
                                <h2 class="text-2xl font-semibold leading-tight pb-6">Project Analysis</h2>
                            </div>
                            <div className="project-form">
                                <div className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Project Form
                                </div>
                            </div>
                            <div className="content-table">
                                <div class="container mx-auto ">
                                    <div class="py-2">

                                        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                            <div
                                                class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
                                            >
                                                <table class="min-w-full leading-normal">
                                                    <thead>
                                                        <tr>
                                                            <th
                                                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                                            >
                                                                Client / Invoice
                                                            </th>
                                                            <th
                                                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                                            >
                                                                Main Keyword
                                                            </th>
                                                            <th
                                                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                                            >
                                                                Child Keywords
                                                            </th>
                                                            <th
                                                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                                            >
                                                                Jobs
                                                            </th>
                                                            <th
                                                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
                                                            ></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <div class="flex">
                                                                    <div class="flex-shrink-0 w-10 h-10">
                                                                        <span>Sample</span>
                                                                    </div>

                                                                </div>
                                                            </td>
                                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <p class="text-gray-900 whitespace-no-wrap">$20,000</p>
                                                                <p class="text-gray-600 whitespace-no-wrap">USD</p>
                                                            </td>
                                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <p class="text-gray-900 whitespace-no-wrap">Sept 28, 2019</p>
                                                                <p class="text-gray-600 whitespace-no-wrap">Due in 3 days</p>
                                                            </td>
                                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <span
                                                                    class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                                                                >
                                                                    <span
                                                                        aria-hidden
                                                                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                                                    ></span>
                                                                    <span class="relative">Paid</span>
                                                                </span>
                                                            </td>
                                                            <td
                                                                class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
                                                            >
                                                                <button
                                                                    type="button"
                                                                    class="inline-block text-gray-500 hover:text-gray-700"
                                                                >
                                                                    <svg
                                                                        class="inline-block h-6 w-6 fill-current"
                                                                        viewBox="0 0 24 24"
                                                                    >
                                                                        <path
                                                                            d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                                                                        />
                                                                    </svg>
                                                                </button>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>




        </>
    )
}

export default navbar
//  <Link href="/home" activeClass='home' to='home' smooth='true' offset={50} duration={500} className='cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py02 rounded-md text-base font-medium '>Home
//                                 </Link>



