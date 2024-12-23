import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="w-full bg-[#33B44A33] py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">
          {/* Logo and Description */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center ">
              <Image
                src="/assets/icons/main-icon.svg"
                alt="Logo"
                width={40}
                height={40}
              />
              <span className="text-xl font-bold text-primary"> Grosary</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s.
            </p>
            <div className="mt-6 flex space-x-4">
              <div className="border border-black rounded-full p-2">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Image
                    src="/assets/icons/fb.svg"
                    alt="Facebook"
                    className="h-5 w-5"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
             <div className="border border-black rounded-full p-2">
             <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Image
                  src="/assets/icons/instagram.svg"
                  alt="Instagram"
                  className="h-5 w-5"
                  width={20}
                  height={20}
                />
              </Link>
             </div>
              <div className="border border-black rounded-full p-2">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Image
                  src="/assets/icons/twitter.svg"
                  alt="Twitter"
                  className="h-5 w-5"
                  width={20}
                  height={20}
                />
              </Link>
              </div>
                <div className="border border-black rounded-full p-2">
                <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Image
                  src="/assets/icons/linkedln.svg"
                  alt="Linkedin"
                  className="h-5 w-5"
                  width={20}
                  height={20}
                />
              </Link>
                </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              {["About Us", "Contact Us", "Blog", "FAQ", "Privacy Policy"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* My Account Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold">My Account</h3>
            <ul className="mt-4 space-y-2">
              {["Login", "My Account", "Orders", "Checkout", "Wishlist"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Information Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold">Information</h3>
            <ul className="mt-4 space-y-2">
              {[
                "Shipping Policy",
                "Return Policy",
                "Terms & Condition",
                "Payment Methods",
                "Order Tracking",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Subscribe to our weekly Newsletter and receive updates via email.
            </p>
            <div className="mt-4 flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Enter Your Email Here..."
                className="max-w-xs"
              />
              <Button className="max-w-[100px]">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-muted-foreground">
              All Rights Reserved @ Company 2023. Design & Develop By{" "}
              <Link href="#" className="text-primary hover:underline">
                Victasoft LLP
              </Link>
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">We Accept</span>
              <div className="flex space-x-2 ">
                <Image
                  src="/assets/images/payments.png"
                  alt="Payment Methods"
                  width={300}
                  height={50}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
