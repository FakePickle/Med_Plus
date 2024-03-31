import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Heading, Img, Input } from "../../components";

export default function EditPage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Muthuraj's Application7</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="self-end bg-gradient rounded-[50%]">
          <div className="w-full mb-[5px] mx-auto md:p-5 max-w-[1434px]">
            <div className="flex flex-col items-center gap-[46px]">
              <header className="flex self-stretch justify-center items-center p-1.5 bg-white-A700">
                <div className="self-start h-[53px] w-[73%] relative">
                  <div className="h-[53px] w-[53px] right-[3%] bottom-0 top-0 my-auto bg-blue_gray-600 absolute rounded-[26px]" />
                  <div className="flex md:flex-col items-center w-full bottom-[1.00px] right-0 left-0 m-auto absolute md:relative">
                    <div className="flex items-center w-[15%] md:w-full gap-2.5">
                      <Img src="images/img_lock.svg" alt="lock_one" className="h-[44px]" />
                      <Heading as="p" className="self-end mb-[11px] !text-[12.99px] !font-black">
                        MEDPLUS
                      </Heading>
                    </div>
                    <div className="flex sm:flex-col justify-between items-center md:self-stretch ml-9 gap-5 p-2.5 md:ml-0 bg-white-A700 shadow-md flex-1 rounded-[12px]">
                      <div className="flex items-center ml-5 gap-3.5 md:ml-0">
                        <Img src="images/img_linkedin.svg" alt="linkedin_one" className="h-[20px]" />
                        <Heading as="p" className="self-end !text-[12.99px]">
                          ABC Vendor
                        </Heading>
                      </div>
                      <div className="flex justify-center items-center w-[46%] sm:w-full gap-3.5">
                        <div className="h-full w-px bg-gray-600" />
                        <Input
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
                          className="flex items-center justify-center h-[22px] pr-[35px] gap-[18px] sm:pr-5 text-gray-600 text-[12.99px] font-bold flex-grow"
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
              <div className="flex flex-col items-center w-[65%] md:w-full gap-3.5 p-[29px] sm:p-5 bg-teal-50 shadow-xs rounded-[23px]">
                <div className="flex items-start gap-3.5">
                  <Heading size="s" as="h1" className="!text-blue_gray-600 !text-[20.64px]">
                    Inventory
                  </Heading>
                  <Img src="images/img_thumbs_up_blue_gray_600.svg" alt="thumbsup_three" className="h-[18px] mt-0.5" />
                </div>
                <div className="flex justify-center w-[86%] md:w-full mb-11 p-[15px] bg-white-A700 shadow-sm rounded-[14px]">
                  <div className="flex flex-col items-start w-[91%] md:w-full mb-[7px]">
                    <Heading size="s" as="h2" className="!text-[20.64px]">
                      Edit Item
                    </Heading>
                    <Heading as="h3" className="mt-[13px] !text-[12.99px]">
                      ABC Vendor
                    </Heading>
                    <div className="flex sm:flex-col self-end justify-between w-[95%] md:w-full mt-[25px] gap-5">
                      <div className="h-[357px] w-[40%] md:h-auto sm:w-full relative">
                        <Heading as="h4" className="mt-[87px] mr-[34px] md:mr-0 !text-[12.99px]">
                          Item Name
                        </Heading>
                        <div className="h-[357px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto bg-[url(/public/images/img_group_8.svg)] bg-cover bg-no-repeat absolute">
                          <div className="flex flex-col items-start mt-[23px] mb-2">
                            <div className="flex gap-0.5 flex-wrap">
                              <Heading as="h5" className="self-start !text-[12.99px]">
                                Item Name
                              </Heading>
                              <Input
  shape="square"
  name="type"
  placeholder="Type"
  className="self-end !text-white-A700 !text-[12.99px] ml-1"
/>
                            </div>
                            <div className="flex self-center justify-between w-[48%] md:w-full mt-[18px] gap-5 flex-wrap">
                              <Heading as="p" className="!text-[12.99px] mt-2 ml-5">
                                DOM
                              </Heading>
                              <Heading as="p" className="!text-[12.99px] mt-2 mr-4">
                                DOE
                                
                              </Heading>
                            </div>
                            <div className="flex self-stretch items-center">
                              <Heading as="p" className="self-end !text-[12.99px]">
                                Date
                              </Heading>
                              
                                <Input
  shape="square"
  name="type"
  placeholder="Type "
  className="self-end ml-[31px] !text-white-A700 !text-[12.99px] z-[1] bg-blue_gray-100"
/>
                              
                            
                                  <Input
  shape="square"
  name="type"
  placeholder="Type "
  className="self-end ml-[31px] !text-white-A700 !text-[12.99px] z-[1] bg-blue_gray-100"
/>
                                
                            </div>
                            <div className="flex self-stretch items-center mt-[19px] gap-[5px]">
                              <Heading as="p" className="!text-[12.99px]">
                                Description
                                <Input
  shape="square"
  name="type"
  placeholder="Type "
  className="self-end  !text-white-A700 !text-[12.99px] z-[1] bg-blue_gray-100"
/>
                              </Heading>
                          
                            </div>
                            <div className="flex mt-2 ml-1.5 gap-3 md:ml-0 flex-wrap">
                              <Heading as="p" className="self-start !text-[12.99px]">
                                Category
                                <Input
  shape="square"
  name="type"
  placeholder="Type "
  className="self-end ml-[31px] !text-white-A700 !text-[12.99px] z-[1] bg-blue_gray-100"
/>
                              </Heading>
                              
                            </div>
                            <div className="flex flex-col w-[79%] md:w-full mt-[13px] ml-[18px] gap-[3px] md:ml-0">
                              <div className="flex justify-between gap-5 flex-wrap">
                                <Heading as="p" className="self-end !text-[12.99px] mt-[27px] ml-1">
                                  Price
                                  <Input
  shape="square"
  name="type"
  placeholder="Type "
  className="text-black !text-[12.99px] mt- ml-1"
/>
                                </Heading>
                                <Heading as="p" className="self-start !text-[12.99px] mt-[-55px] ml-[120px] " >
                                  Quantity
                                  <Input
  shape="square"
  name="type"
  placeholder="Type "
  className="text-black !text-[12.99px] mb-1"
/>
                                </Heading>

                              </div>
                            </div>
                            <Heading as="p" className=" ml-[20px] md:ml-0 !text-[12.99px] mb-[30px] mt-20">
                              Image Link:
                              <Input
  shape="square"
  name="type"
  placeholder="Type "
  className="text-black !text-[12.99px] mt- ml-1 z-[1] bg-blue_gray-100"
/>
                            </Heading>
                  
                            <Button className="flex self-center items-center justify-center h-[45px] mt-[9px] px-[35px] sm:px-5 text-white-A700_01 text-center text-[20.64px] font-black bg-teal-200 min-w-[150px] rounded-lg">
                              Add
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="h-[357px] w-[40%] sm:w-full p-[5px] bg-[url(/public/images/img_group_35.svg)] bg-cover bg-no-repeat relative">
                        <div className="flex flex-col w-[64%] gap-[27px] bottom-[23.00px] right-0 left-0 m-auto absolute">
                          <Button className="flex items-center justify-center h-[45px] w-full px-[22px] sm:px-5 text-white-A700_01 text-center text-[20.64px] font-black bg-teal-200 rounded-lg">
                            Delete Item
                          </Button>
                          <Button className="flex items-center justify-center h-[45px] w-full px-[35px] sm:px-5 text-white-A700_01 text-center text-[20.64px] font-black bg-teal-200 rounded-lg">
                            Edit
                          </Button>
                        </div>
                        <div className="flex flex-col items-start w-[75%] left-[21.00px] top-[40%] m-auto absolute">
                          <div className="self-stretch">
                            <div className="flex justify-between gap-5 z-[1] flex-wrap">
                              <Heading as="p" className="self-end !text-[12.99px]">
                                Price
                              </Heading>
                              <Heading as="p" className="self-start !text-[12.99px]">
                                Quantity
                              </Heading>
                            </div>
                            <div className="flex justify-between mt-[-2px] gap-5 relative">
                              <div className="h-[22px] w-[37%] bg-blue_gray-100" />
                              <Heading
                                as="p"
                                className="flex self-start justify-center items-center h-[22px]!text-white-A700 !text-[12.99px] bg-blue_gray-100"
                              >
                                
                                <Input
  shape="square"
  name="type"
  placeholder="Type "
  className=""
/>
                                
                              </Heading>
                              

                              
                            </div>
                          </div>
                          
                          <Input
  shape="square"
  name="type"
  placeholder="Type here"
  className="mt-[-17px] !text-white-A700 !text-[12.99px] relative "
/>
                        </div>
                        <div className="flex flex-col items-start w-[67%] right-[18.00px] top-[24.00px] m-auto absolute">
                          <Img src="images/img_rectangle_31.svg" alt="image" className="h-[22px] w-full md:h-auto" />
              
                          <Input
  shape="square"
  name="type"
  placeholder="Type here"
  className="mt-[-18px] !text-white-A700 !text-[12.99px] relative "
/>
                        </div>
                        <div className="flex flex-col items-start w-[92%] top-[29%] right-0 left-0 m-auto absolute">
                          <div className="self-stretch h-[22px] bg-blue_gray-100" />
                          <Input
  shape="square"
  name="type"
  placeholder="Type here"
  className="self-end !text-white-A700 !text-[12.99px] w-[92%] top-[29%] m-auto absolute right-0 left-0"
/>
                        </div>
                        <Heading as="p" className="left-[5.00px] top-[26.03px] m-auto !text-[12.99px] absolute">
                          Item Name
                        </Heading>
                        <Heading as="p" className="left-[10.00px] top-[24%] m-auto !text-[12.99px] absolute">
                          Description
                        </Heading>
                      </div>
                    </div>
                    <Button className="flex self-end items-center justify-center h-[45px] mt-[58px] mr-[174px] px-[35px] md:mr-0 sm:px-5 text-white-A700_01 text-center text-[20.64px] font-black bg-teal-200 min-w-[256px] rounded-lg">
                      Done
                    </Button>
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
