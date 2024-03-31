import React from "react";
import { CloseSVG } from "../../assets/images";
import { Img, Input, Heading } from "./..";

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header {...props}>
      <div className="self-start h-[53px] w-[73%] relative">
        <div className="h-[53px] w-[53px] right-[3%] bottom-0 top-0 my-auto bg-blue_gray-600 absolute rounded-[26px]" />
        <div className="flex md:flex-col items-center w-full bottom-[1.00px] right-0 left-0 m-auto absolute md:relative">
          <div className="flex items-center w-[15%] md:w-full gap-2.5">
            <Img src="images/img_lock.svg" alt="lock_one" className="h-[44px]" />
            <Heading as="p" className="self-end mb-[11px] !text-[12.99px] !font-black">
              MEDPLUS
            </Heading>
          </div>
          <div className="flex sm:flex-col justify-between items-center md:self-stretch ml-9 gap-5 p-2.5 md:ml-0 bg-white-A700_01 shadow-xs flex-1 rounded-[12px]">
            <div className="flex items-center ml-5 gap-3.5 md:ml-0">
              <Img src="images/img_linkedin.svg" alt="linkedin_one" className="h-[20px]" />
              <Heading as="p" className="self-end !text-[12.99px]">
                ABC Vendor
              </Heading>
            </div>
            <div className="flex justify-center items-center w-[46%] sm:w-full gap-3.5">
              <div className="h-full w-px bg-gray-600" />
              <Input
                size="sm"
                shape="square"
                name="search"
                placeholder={`Search for Medicine,Shop`}
                value={searchBarValue}
                onChange={(e) => setSearchBarValue(e)}
                prefix={
                  <div className="flex justify-center items-center w-[21px] h-[21px]">
                    <Img src="images/img_search.svg" alt="search" className="cursor-pointer" />
                  </div>
                }
                suffix={
                  searchBarValue?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue("")} height={21} width={21} />
                  ) : null
                }
                className="gap-[18px] sm:pr-5 text-gray-600 font-bold flex-grow"
              />
            </div>
          </div>
          <Img src="images/img_favorite.svg" alt="favorite_one" className="h-[17px] md:w-full ml-[47px] md:ml-0" />
          <Img
            src="images/img_thumbs_up.svg"
            alt="thumbsup_one"
            className="self-start h-[18px] md:w-full mt-3 ml-[35px] md:ml-0"
          />
          <Img
            src="images/img_lock_blue_gray_600.svg"
            alt="lock_three"
            className="h-[21px] md:w-full ml-[34px] md:ml-0"
          />
        </div>
      </div>
    </header>
  );
}
