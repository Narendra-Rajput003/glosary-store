"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export default function SignInForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-2">
            <Image
              src="/assets/icons/main-icon.svg"
              width={49}
              height={44}
              alt="Grosary Main Icon"
              priority
            />
            <div>
              <h2 className="text-green-600 font-bold text-xl md:text-2xl">
                GROSARY
              </h2>
              <div className="flex space-x-1 md:space-x-2 text-xs md:text-sm text-gray-600">
                <span>Super</span>
                <span>Market</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="emailOrPhone">Email or Phone</Label>
              <Input
                id="emailOrPhone"
                type="text"
                placeholder="Enter Email or Phone"
                className="w-full"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter Your Password"
                className="w-full"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 border border-[#33B44A]"
            >
              Sign In
            </Button>
          </form>
          <div>
          <span className="block text-center text-xs text-muted-foreground mt-3">Forgot Password ?</span>
          </div>
          <div className="mt-6 text-center text-sm bg-[#33B44A] text-white py-2 rounded-md">
            <p className="text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link
                href="/sign-up"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Sign Up
              </Link>
            </p>
          </div>
          <span className="block text-center text-xs text-muted-foreground mt-3">
            Copyright 2022 supermarket. All rights reserved
          </span>
        </CardContent>
      </Card>
    </div>
  );
}