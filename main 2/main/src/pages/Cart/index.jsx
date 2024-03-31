import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Heading, Img, Input } from "../../Component";

export default function CartPage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Muthuraj's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700_01">
        <div className="self-end bg-gradient rounded-[50%]">
          <div className="w-full mb-[5px] mx-auto md:p-5 max-w-[1434px]">
            <div className="flex flex-col items-center gap-[46px]">
              <header className="flex self-stretch justify-center items-center p-1.5 bg-white-A700_01">
                <div className="self-start h-[53px] w-[73%] relative">
                  <div className="h-[53px] w-[53px] right-[3%] bottom-0 top-0 my-auto bg-blue_gray-600 absolute rounded-[26px]" />
                  <div className="flex md:flex-col items-center w-full bottom-[1.00px] right-0 left-0 m-auto absolute md:relative">
                    <div className="flex items-center w-[15%] md:w-full gap-2.5">
                      <Img src="images/img_lock.svg" alt="lock_one" className="h-[44px]" />
                      <Heading as="p" className="self-end mb-[11px] !text-[12.99px] !font-black">
                        MEDPLUS
                      </Heading>
                    </div>
                    <div className="md:self-stretch ml-9 p-2.5 md:ml-0 bg-white-A700_01 shadow-md flex-1 rounded-[12px]">
                      <div className="flex md:flex-col justify-center items-center gap-3.5">
                        <Img
                          src="images/img_linkedin.svg"
                          alt="linkedin_one"
                          className="self-start h-[20px] md:w-full"
                        />
                        <Heading as="p" className="self-end !text-[12.99px]">
                          Indraprastha Institute of Information Technology
                        </Heading>
                        <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-[6px] md:w-full" />
                        <div className="rounded-full w-px md:w-full md:h-px bg-gray-600 " />
                        <Input
                          shape="round"
                          
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
                          className="bg-transparent border border-transparent pl-2 pr-8 py-1 text-gray-600 flex-grow outline-none gap-[18px] sm:pr-5 text-gray-600 flex-grow"
                        />
                      </div>
                    </div>
                    <Img
                      src="images/img_favorite.svg"
                      alt="favorite_one"
                      className="h-[17px] md:w-full ml-[47px] md:ml-0"
                    />
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
              <div className="flex flex-col items-center w-[65%] md:w-full gap-[17px] p-[26px] sm:p-5 bg-teal-50 shadow-xs rounded-[23px]">
                <div className="flex items-start gap-2.5">
                  <Heading size="lg" as="h1" className="!text-blue_gray-600 !text-[20.64px]">
                    Cart
                  </Heading>
                  <Img
                    src="images/img_thumbs_up_blue_gray_600.svg"
                    alt="thumbsup_three"
                    className="h-[18px] mt-[6px]"
                  />
                </div>
                <div className="flex flex-col w-[85%] md:w-full mb-[47px] p-4 bg-white-A700_01 shadow-sm rounded-[14px]">
                  <div className="flex flex-col items-center w-full">
                    <div className="flex flex-col self-stretch items-start gap-3">
                      <Heading size="lg" as="h2" className="!text-[24.64px]">
                        3 Items in your Cart
                      </Heading>
                      <div className="flex self-stretch justify-between gap-5 flex-wrap">
                        <Heading as="h3" className="self-start !text-[15.99px]">
                          Indraprastha Institute of Information Technology
                        </Heading>
                        <Heading as="h4" className="!text-[15.99px]">
                          Change Address
                        </Heading>
                      </div>
                    </div>
                    <div className="justify-center w-[55%] mt-[20px] gap-20 grid-cols-[repeat(auto-fill,_minmax(148px_,_1fr))] grid">
                      <div className="flex flex-col items-start justify-center h-[149px] w-full md:h-auto p-1.5 bg-[url(/public/images/img_group_33.svg)] bg-cover bg-no-repeat rounded-[7px]">
                        <Img
                          src="images/img_group_37.svg"
                          alt="thermometer_one"
                          className="h-[91px] w-full md:h-auto"
                        />
                        <Heading size="xs" as="h5" className="mt-2 ml-0.5 md:ml-0 !text-[20.91px]">
                          Thermometer{" "} - Rs.190
                        </Heading>
          
                      </div>
                      
                      <div className="flex flex-col items-start justify-center h-[149px] w-full md:h-auto p-1.5 bg-[url(/public/images/img_group_33.svg)] bg-cover bg-no-repeat rounded-[7px]">
                        <Img src="images/img_group_37.svg" alt="image" className="h-[91px] w-full md:h-auto" />
                        <Heading size="xs" as="p" className="mt-2 ml-0.5 md:ml-0 !text-[20.91px]">
                          Thermometer{" "} - Rs.190
        
                        </Heading>

                      </div>
                      
                      <div className="flex justify-center w h-6 bg-blue_gray-100_01 rounded-[3px]">
                        <div className="flex justify-between items-center w-full gap-5 flex-wrap">
                          <Heading as="p" className="self-start !text-[12.99px]">
                            -
                          </Heading>
                          <Heading as="p" className="self-start !text-[12.99px]">
                            1
                          </Heading>
                          <Heading as="p" className="self-start !text-[12.99px]">
                            +
                          </Heading>
                        </div>
                      </div>
                      <div className=" w h-6 bg-blue_gray-100_01 rounded-[3px] mb+1800">
                        <div className="flex justify-between items-center w-full gap-5 flex-wrap">
                          <Heading as="p" className="self-start !text-[12.99px]">
                            -
                          </Heading>
                          <Heading as="p" className="self-start !text-[12.99px]">
                            1
                          </Heading>
                          <Heading as="p" className="self-start !text-[12.99px]">
                            +
                          </Heading>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-center h-[149px] w-full md:h-auto p-1.5 bg-[url(/public/images/img_group_33.svg)] bg-cover bg-no-repeat rounded-[7px]">
  <Img src="images/img_group_37.svg" alt="image" className="h-[91px] w-full md:h-auto" />
  <Heading size="xs" as="p" className="mt-2 ml-0.5 md:ml-0 !text-[20.91px]">
    Thermometer{" "} - Rs.190
  </Heading>
</div>
<div className="flex justify-center w h-6 bg-blue_gray-100_01 rounded-[3px]">
  <div className="flex justify-between items-center w-full gap-5 flex-wrap">
    <Heading as="p" className="self-start !text-[12.99px]">
      -
    </Heading>
    <Heading as="p" className="self-start !text-[12.99px]">
      1
    </Heading>
    <Heading as="p" className="self-start !text-[12.99px]">
      +
    </Heading>
  </div>
</div>



                    </div>
                    <div className="flex self-stretch justify-between items-start mt-[73px] gap-5">
                      <div className="flex flex-col items-start">
                        <Heading size="lg" as="h5" className="!text-[20.64px]">
                          Cart Total
                        </Heading>
                        <div className="flex items-center ml-[3px] gap-[5px] md:ml-0">
                          <Img src="images/img_settings.svg" alt="settings_one" className="h-[17px]" />
                          <Heading size="lg" as="h5" className="!text-[20.64px]">
                            XXXX
                          </Heading>
                        </div>
                      </div>
                      <Button shape="round" className="mt-[5px] sm:px-5 font-black min-w-[256px]">
                        Proceed to Checkout
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
