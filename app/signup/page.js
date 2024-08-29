'use client'
/*
NEXT STEP: MAKE SURE SIGN IN REDIRECT IS CONFIGURED, DIRECTING THE USER TO THE QUESTIONARRE AFTER SIGNING UP
*/
import React from "react";
import { Button } from "@nextui-org/react";
import { FcGoogle } from "react-icons/fc";
import {Divider} from "@nextui-org/divider";
import { Input, Autocomplete } from "@nextui-org/react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Link from 'next/link'
import { getProviders, signIn } from "next-auth/react"

async function SignUp()
{
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <div className="flex flex-col justify-center items-center pt-6">
            <h1 className="text-2xl md:text-4xl font-semibold mb-8">Sign up to get your news feed</h1>
            <Button className="rounded-full bg-[#4285F4] text-white w-64 mb-4" onClick={() => signIn("google")} endContent={<div className="bg-white rounded-full p-1 absolute right-[2px]"><FcGoogle  size={28}/></div>}><p className="mr-8 absolute left-5">Sign up with Google</p></Button>
            <div className="my-4 w-full sm:w-1/2 lg:w-1/3 px-4 flex flex-row justify-center items-center">
                <Divider className="" />
                <p className="absolute bg-white px-3">or</p>
            </div>
            <div className="flex flex-col my-4 w-full sm:w-1/2 lg:w-1/3 px-4 items-center space-y-12">
                <div className="flex flex-row space-x-8 w-full">
                    <Input
                    variant="bordered"
                    type="name"
                    label="First name"
                    labelPlacement={'outside'}
                    placeholder=" "
                    className="text-black"
                    />
                    <Input
                    variant="bordered"
                    type="name"
                    label="Last name"
                    labelPlacement={'outside'}
                    placeholder=" "
                    className="text-black"
                    />
                </div>
                <Input
                    variant="bordered"
                    type="email"
                    label="Email"
                    labelPlacement={'outside'}
                    placeholder=" "
                    className="text-black w-full"
                    isClearable
                    isRequired
                    />
                <Input
                    variant="bordered"
                    label="Password"
                    labelPlacement={'outside'}
                    placeholder="Password (8 or more characters)"
                    className="text-black w-full"
                    endContent={
                        <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                          {isVisible ? (
                            <IoMdEyeOff className="text-2xl text-default-400 pointer-events-none" />
                          ) : (
                            <IoMdEye className="text-2xl text-default-400 pointer-events-none" />
                          )}
                        </button>
                      }
                      isRequired
                      type={isVisible ? "text" : "password"}
                    />
                <div className="flex flex-col items-center space-y-4">
                    <Link href='/start'><Button className="bg-primary text-white text-lg">Create my account</Button></Link>
                    <p className="text-black font-light">Already have an account? <Link className="text-primary underline hover:opacity-90" href='/'>Log In</Link></p>
                </div>
                
            </div>
        </div>
    );
}

export default SignUp;