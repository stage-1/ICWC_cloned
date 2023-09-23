import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

export default function Sourcing() {
  return (
    <>
      <div className="w-full h-full max-w-[1600px] bg-[#182835] px-16 py-[5%] my-[5%] flex-col justify-center items-start gap-20 inline-flex">
        <div className="self-stretch flex flex-col h-full lg:flex-row justify-start lg:items-start gap-6 lg:gap-20 inline-flex">
          <div className="grow shrink basis-0 ">
            <span className="text-neutral-400 text-2xl font-bold font-['Roboto'] leading-[28.80px]">
              TIMEPIECE SOURCING
              <br />
            </span>
            <span className="text-gray-800 text-white mt-4 p-1 text-5xl font-bold font-['Roboto'] leading-[57.60px]">
              Looking to acquire a watch?
            </span>
          </div>
          <div className="h-full grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex bg-[#182835] py-12  h-full">
            <div className="self-stretch max-w-[400px] lg:max-w-[700px] text-gray-800 text-[1.2rem] font-normal font-['Roboto'] leading-[27px] text-white ">
              We&apos;ll source and qualify the watch you&apos;re looking for,
              even if we don&apos;t have it. You tell us the specs, we&apos;ll
              find it. Our team will look far and wide for that specific
              timepiece.
            </div>
            <div className="pt-4 justify-start items-start gap-4 inline-flex">
              <Button
                variant="gradiant"
                className="px-6 py-3 bg-white border border-gray-800 justify-center items-center gap-2 flex"
              >
                <p className="text-black text-xl font-['Roboto']">Contact Us</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
