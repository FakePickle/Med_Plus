import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Heading, Img, Input, Button } from "../../Component";

export default function PaymentPage() {
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
              <header className="flex self-stretch justify-center items-center p-2 bg-white-A700_01">
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
              <div className="flex flex-col items-center w-[65%] md:w-full gap-[15px] p-7 sm:p-5 bg-teal-50 shadow-xs rounded-[23px]">
                <Heading size="lg" as="h1" className="!text-blue_gray-600 !text-[20.64px] ">
                  Payment
                </Heading>
                <div className="flex justify-center items-start h-[587px] w-[92%] md:w-full md:h-auto mb-[45px] p-[13px] bg-[url(/public/images/img_group_10.svg)] bg-cover bg-no-repeat">
                  <div className="flex md:flex-col justify-between items-start w-[93%] md:w-full mb-[69px] gap-5">
                    <div className="flex flex-col items-start w-[44%] md:w-full">
                      <Heading size="lg" as="h2" className="self-center !text-[20.64px]">
                        Payment Options{" "}
                      </Heading>
                      <Heading size="lg" as="h3" className="mt-4 ml-[3px] md:ml-0 !text-[20.64px]">
                        UPI
                      </Heading>
                      <Heading as="h4" className="mt-[3px] ml-[3px] md:ml-0 !text-[12.99px]">
                        Add new UPI ID
                      </Heading>
                      <Input
                        size="sm"
                        shape="round"
                        name="welcome_back_🏻"
                        placeholder={`Enter your UPI ID`}
                        className="w-[70%] mt-2.5 ml-[3px] md:ml-0 sm:pr-5"
                      />
                      <div className="flex w-auto h-auto mt-[11px] ml-[3px] gap-1.5 md:ml- bg-teal-200 rounded">
                        <Heading as="h5" className="self-end pl-2 pr-1 !text-white-A700_01 !text-[11.99px]">
                          Place order & Pay{" "}
                        </Heading>
                        <div className="flex self-end pr-4 items-center gap-[3px]">
                          <Img
                            src="images/img_settings_white_a700_01.svg"
                            alt="settings_one"
                            className="self-end h-[10px] mb-[3px]"
                          />
                          <Heading as="h6" className="!text-white-A700_01 !text-[12.5px] !font-black">
                            XXXX
                          </Heading>
                        </div>
                      </div>
                      <div className="self-stretch h-px w-full mt-[19px] bg-gray-600" />
                      <Heading size="lg" as="h5" className="mt-1.5 ml-[3px] md:ml-0 !text-[20.64px]">
                        Other options
                      </Heading>
                      <div className="flex flex-col self-stretch mt-[18px] ml-[3px] gap-7 md:ml-0">
                        <div className="flex justify-between items-center gap-5 flex-1">
                          <div className="flex items-center gap-[17px]">
                            <div className="flex flex-col items-center justify-center p-[7px] bg-white-A700_01 rounded-[7px]">
                              <div className="flex mt-[5px] mb-1 p-0.5 bg-blue_gray-600 rounded-[3px]">
                                <Img src="images/img_user.svg" alt="creditdebit" className="self-end h-[15px]" />
                              </div>
                            </div>
                            <Heading as="p" className="self-end !text-[12.99px] mb-3">
                              Credit/Debit Card
                            </Heading>
                          </div>
                          <Img src="images/img_arrow_right.svg" alt="creditdebit" className="self-end h-[8px] mb-5" />
                        </div>
                        <div className="flex justify-between items-center gap-5 flex-1">
                          <div className="flex items-center gap-[17px]">
                            <div className="flex flex-col items-center justify-center p-[7px] bg-white-A700_01 rounded-[7px]">
                              <div className="flex mt-[5px] mb-1 p-0.5 bg-blue_gray-600 rounded-[3px]">
                                <Img src="images/img_user.svg" alt="user_one" className="self-end h-[15px]" />
                              </div>
                            </div>
                            <Heading as="p" className="self-end !text-[12.99px] mb-3">
                              Wallets
                            </Heading>
                          </div>
                          <Img
                            src="images/img_arrow_right.svg"
                            alt="arrowright_one"
                            className="self-end h-[8px] mb-5"
                          />
                        </div>
                        <div className="flex justify-between items-center gap-5 flex-1">
                          <div className="flex items-start gap-[17px]">
                            <div className="flex flex-col items-center justify-center mb-0.5 p-[7px] bg-white-A700_01 rounded-[7px]">
                              <div className="flex mt-[5px] mb-1 p-0.5 bg-blue_gray-600 rounded-[3px]">
                                <Img src="images/img_user.svg" alt="user_one" className="self-end h-[15px]" />
                              </div>
                            </div>
                            <Heading as="p" className="self-end !text-[12.99px] mb-3">
                              Net Banking{" "}
                            </Heading>
                          </div>
                          <Img
                            src="images/img_arrow_right.svg"
                            alt="arrowright_one"
                            className="self-end h-[8px] mb-5"
                          />
                        </div>
                        <div className="flex justify-between items-center gap-5 flex-1">
                          <div className="flex items-start gap-[17px]">
                            <div className="flex flex-col items-center justify-center mb-0.5 p-[7px] bg-white-A700_01 rounded-[7px]">
                              <div className="flex mt-[5px] mb-1 p-0.5 bg-blue_gray-600 rounded-[3px]">
                                <Img src="images/img_user.svg" alt="user_one" className="self-end h-[15px]" />
                              </div>
                            </div>
                            <Heading as="p" className="self-end !text-[12.99px] mb-3">
                              Cash on Delivery{" "}
                            </Heading>
                          </div>
                          <Img
                            src="images/img_arrow_right.svg"
                            alt="arrowright_one"
                            className="self-end h-[8px] mb-5"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start w-[40%] md:w-full gap-[42px]">
                      <Heading size="lg" as="h5" className="ml-[66px] md:ml-0 !text-[20.64px]">
                        Bill Summary{" "}
                      </Heading>
                      <div className="flex flex-col md:flex-row sm:flex-col self-stretch gap-2.5">
                        <div className="flex justify-between gap-5 flex-1">
                          <Heading as="p" className="!text-[12.99px]">
                            Total MRP
                          </Heading>
                          <div className="flex self-start items-center gap-[3px]">
                            <Img src="images/img_settings.svg" alt="xxxx_one" className="self-end h-[10px] mb-[3px]" />
                            <Heading as="p" className="!text-[12.5px] !font-black">
                              XXXX
                            </Heading>
                          </div>
                        </div>
                        <div className="flex justify-between gap-5 flex-1">
                          <Heading as="p" className="!text-[12.99px]">
                            Discount on MRP
                          </Heading>
                          <div className="flex self-start items-center gap-[3px]">
                            <Img
                              src="images/img_settings.svg"
                              alt="settings_one"
                              className="self-end h-[10px] mb-[3px]"
                            />
                            <Heading as="p" className="!text-[12.5px] !font-black">
                              XXXX
                            </Heading>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col self-stretch gap-1.5">
                        <div className="flex justify-between gap-5 flex-1">
                          <Heading as="p" className="!text-[12.99px]">
                            Cart Value
                          </Heading>
                          <div className="flex self-start items-center gap-[3px] ">
                            <Img src="images/img_settings.svg" alt="xxxx_one" className="self-end h-[10px] mb-[12px]" />
                            <Heading as="p" className="!text-[12.5px] !font-black">
                              XXXX
                            </Heading>
                          </div>
                        </div>
                        <div className="flex justify-between gap-5 flex-1">
                          <Heading as="p" className="self-end !text-[12.99px]">
                            Delivery Fee
                          </Heading>
                          <div className="flex self-start items-center gap-[3px]">
                            <Img
                              src="images/img_settings.svg"
                              alt="settings_one"
                              className="self-end h-[10px] mb-[12px]"
                            />
                            <Heading as="p" className="!text-[12.5px] !font-black mb-[px]">
                              XXXX
                            </Heading>
                          </div>
                        </div>
                        <div className="flex justify-between gap-5 flex-1">
                          <Heading as="p" className="self-end !text-[12.99px]">
                            Handling Fee
                          </Heading>
                          <div className="flex self-start items-center gap-[3px]">
                            <Img
                              src="images/img_settings.svg"
                              alt="settings_one"
                              className="self-end h-[10px] mb-[15px]"
                            />
                            <Heading as="p" className="!text-[12.5px] !font-black">
                              XXXX
                            </Heading>
                          </div>
                        </div>
                      </div>
                      <div className="flex self-stretch justify-between gap-5">
                        <Heading as="p" className="self-end !text-black-900 !text-[12.99px] mb-3">
                          Amount to be paid
                        </Heading>
                        <div className="flex self-start items-center gap-[3px]">
                          <Img src="images/img_music.svg" alt="music_one" className="self-end h-[10px] mb-[3px]" />
                          <Heading as="p" className="!text-black-900 !text-[12.5px] !font-black">
                            XXXX
                          </Heading>
                        </div>
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
  );
}
