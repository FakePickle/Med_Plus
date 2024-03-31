import React from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Heading, Img } from "../../components";
import Header from "../../components/Header";

export default function InventoryPage() {
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
              <Header className="flex self-stretch justify-center items-center p-1.5 bg-white-A700_01" />
              <div className="flex flex-col items-center w-[65%] md:w-full gap-3.5 p-[29px] sm:p-5 bg-teal-50 shadow-sm rounded-[23px]">
                <div className="flex items-start gap-3.5">
                  <Heading size="md" as="h1" className="!text-blue_gray-600 !text-[20.64px]">
                    Inventory
                  </Heading>
                  <Img src="images/img_thumbs_up_blue_gray_600.svg" alt="thumbsup_three" className="h-[18px] mt-2" />
                </div>
                <div className="flex justify-center w-[86%] md:w-full mb-11 p-2.5 bg-white-A700_01 shadow-md rounded-[14px]">
                  <div className="flex flex-col w-full mt-[7px] mb-4">
                    <div className="flex md:flex-col items-center gap-2">
                      <div className="flex flex-col items-start md:self-stretch flex-1">
                        <Heading size="md" as="h2" className="!text-[20.64px]">
                          24 Items in your Inventory
                        </Heading>
                        <Heading as="h3" className="mt-[11px] !text-[12.99px]">
                          ABC Vendor
                        </Heading>
                        <Heading as="h4" className="mt-[11px] ml-[21px] md:ml-0 !text-[12.99px]">
                          Medicine
                        </Heading>
                        <div className="flex sm:flex-col self-stretch items-center mt-[13px] ml-[15px] gap-3 md:ml-0">
                          <div className="flex flex-col items-start justify-center h-[149px] w-full md:h-auto sm:w-full p-1.5 bg-[url(/public/images/img_group_33.svg)] bg-cover bg-no-repeat rounded-[7px]">
                            <Img src="images/img_group_37.svg" alt="image" className="h-[91px] w-full md:h-auto" />
                            <Heading size="xs" as="h5" className="mt-2 ml-0.5 md:ml-0 !text-[10.91px]">
                              Thermometer{" "}
                            </Heading>
                            <div className="flex items-center mb-1 ml-[3px] md:ml-0">
                              <Img src="images/img_mask.svg" alt="mask_one" className="h-[6px]" />
                              <Heading size="xs" as="h6" className="h-[15px] !text-[10.91px]">
                                190
                              </Heading>
                            </div>
                          </div>
                          <div className="flex flex-col self-end items-start w-full sm:w-full gap-[3px]">
                            <div className="flex self-stretch items-center h-[113px] md:h-auto pb-[5px] px-[5px] bg-[url(/public/images/img_group_33.svg)] bg-cover bg-no-repeat">
                              <Heading as="p" className="w-[98%] !text-[12.99px]">
                                <>
                                  Manufacture Date
                                  <br />
                                  DD/MM/YYYY
                                  <br />
                                  Expiry
                                  <br />
                                  DD//MM/YYYY
                                  <br />
                                  Description:{" "}
                                </>
                              </Heading>
                            </div>
                            <Heading
                              as="p"
                              className="flex justify-center items-center h-[23px] ml-[5px] px-6 py-0.5 md:ml-0 sm:px-5 !text-[12.99px] bg-blue_gray-100_01 rounded-[3px]"
                            >
                              Stock - 10
                            </Heading>
                          </div>
                          <div className="flex flex-col items-start justify-center h-[149px] w-full md:h-auto sm:w-full p-1.5 bg-[url(/public/images/img_group_33.svg)] bg-cover bg-no-repeat rounded-[7px]">
                            <Img src="images/img_group_37.svg" alt="image_one" className="h-[91px] w-full md:h-auto" />
                            <Heading size="xs" as="p" className="mt-2 ml-0.5 md:ml-0 !text-[10.91px]">
                              Thermometer{" "}
                            </Heading>
                            <div className="flex items-center mb-1 ml-[3px] md:ml-0">
                              <Img src="images/img_mask.svg" alt="mask_three" className="h-[6px]" />
                              <Heading size="xs" as="p" className="h-[15px] !text-[10.91px]">
                                190
                              </Heading>
                            </div>
                          </div>
                        </div>
                        <Heading as="p" className="mt-[23px] ml-[21px] md:ml-0 !text-[12.99px]">
                          Wounds
                        </Heading>
                      </div>
                      <div className="flex flex-col self-end items-start w-[24%] md:w-full mb-[42px] gap-1.5">
                        <div className="flex self-stretch items-center h-[113px] md:h-auto pb-[5px] px-[5px] bg-[url(/public/images/img_group_33.svg)] bg-cover bg-no-repeat">
                          <Heading as="p" className="w-[98%] !text-[12.99px]">
                            <>
                              Manufacture Date
                              <br />
                              DD/MM/YYYY
                              <br />
                              Expiry
                              <br />
                              DD//MM/YYYY
                              <br />
                              Description:{" "}
                            </>
                          </Heading>
                        </div>
                        <div className="flex justify-center w-[68%] md:w-full ml-[9px] md:ml-0 bg-blue_gray-100_01 rounded-[3px]">
                          <Heading as="p" className="self-start !text-[12.99px]">
                            Stock - 4
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center w-[49%] md:w-full mt-[9px] ml-[15px] gap-2.5 md:ml-0">
                      <div className="flex flex-col items-start justify-center h-[149px] w-full md:h-auto p-1.5 bg-[url(/public/images/img_group_33.svg)] bg-cover bg-no-repeat rounded-[7px]">
                        <Img src="images/img_group_37.svg" alt="image_two" className="h-[91px] w-full md:h-auto" />
                        <Heading size="xs" as="p" className="mt-2 ml-0.5 md:ml-0 !text-[10.91px]">
                          Thermometer{" "}
                        </Heading>
                        <div className="flex items-center mb-1 ml-[3px] md:ml-0">
                          <Img src="images/img_mask.svg" alt="mask_five" className="h-[6px]" />
                          <Heading size="xs" as="p" className="h-[15px] !text-[10.91px]">
                            190
                          </Heading>
                        </div>
                      </div>
                      <div className="flex flex-col items-start w-full gap-3">
                        <div className="flex self-stretch items-center h-[113px] md:h-auto pb-[5px] px-[5px] bg-[url(/public/images/img_group_33.svg)] bg-cover bg-no-repeat">
                          <Heading as="p" className="w-[98%] !text-[12.99px]">
                            <>
                              Manufacture Date
                              <br />
                              DD/MM/YYYY
                              <br />
                              Expiry
                              <br />
                              DD//MM/YYYY
                              <br />
                              Description:{" "}
                            </>
                          </Heading>
                        </div>
                        <Input
                          color="blue_gray_100_01"
                          size="sm"
                          shape="round"
                          name="date"
                          placeholder={`Stock-8`}
                          className="w-[67%] ml-[7px] pl-[30px] md:ml-0 sm:px-5 font-bold"
                        />
                      </div>
                    </div>
                    <div className="flex justify-between mt-11 ml-1.5 gap-5 md:ml-0">
                      <Button shape="round" className="sm:px-5 min-w-[256px]">
                        Make Changes
                      </Button>
                      <Button shape="round" className="sm:px-5 min-w-[256px]">
                        How are we Selling?
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
