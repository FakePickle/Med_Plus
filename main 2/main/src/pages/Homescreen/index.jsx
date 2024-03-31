import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img, Heading, Button, Text, Input } from "../../components";

export default function HomescreenPage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <>
      <Helmet>
        <title>homescreen</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="h-[1380px] w-full md:h-auto bg-white-A700 relative">
        <Img src="images/img_ellipse_4.png" alt="image" className="h-[2644px] w-full object-cover" />
        <div className="w-full pb-[1375px] bottom-[-1336.00px] right-0 left-0 m-auto md:pb-5 bg-gradient absolute rounded-[50%]">
          <div>
            <div className="flex flex-col gap-6">
              <div>
                <header>
                  <div className="p-[11px] bg-white-A700">
                    <div className="flex md:flex-col justify-center items-center w-full mx-auto max-w-[1036px]">
                      <div className="flex justify-center items-center w-[15%] md:w-full gap-2.5">
                        <Img src="images/img_lock.svg" alt="lock_one" className="h-[44px]" />
                        <Heading size="xs" as="p" className="self-end mb-[11px] !text-[12.99px] !font-black">
                          MEDPLUS
                        </Heading>
                      </div>
                      <div className="md:self-stretch ml-9 p-2.5 md:ml-0 bg-white-A700 shadow-md flex-1 rounded-[12px]">
                        <div className="flex md:flex-col justify-center items-center gap-3">
                          <div className="flex items-start gap-3.5 flex-wrap">
                            <Img src="images/img_linkedin.svg" alt="linkedin_one" className="h-[20px]" />
                            <Heading size="xs" as="p" className="!text-[12.99px]">
                              Indraprastha Institute of Information Technology
                            </Heading>
                            <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-[6px]" />
                          </div>
                          <div className="h-full w-px md:w-full md:h-px bg-gray-600" />
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
                            className="flex items-center justify-center w-[45%] h-[22px] md:w-full pr-[35px] gap-[18px] sm:pr-5 text-gray-600 text-[12.99px] font-bold"
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
                        className="h-[18px] md:w-full ml-[35px] md:ml-0"
                      />
                      <Img
                        src="images/img_lock_blue_gray_600.svg"
                        alt="lock_three"
                        className="h-[21px] md:w-full ml-[35px] md:ml-0"
                      />
                    </div>
                  </div>
                  <div className="p-[13px] bg-white-A700 shadow-bs">
                    <ul className="flex self-end justify-center w-full gap-[25px] mx-auto max-w-[1070px] flex-wrap">
                      <li>
                        <a href="#" className="self-start">
                          <Heading size="xs" as="p" className="!text-[12.99px]">
                            Pain Relief
                          </Heading>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="self-start">
                          <Heading size="xs" as="p" className="!text-[12.99px]">
                            Cold and Flu
                          </Heading>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="self-start">
                          <Heading size="xs" as="p" className="!text-[12.99px]">
                            Diabetes Care
                          </Heading>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="self-end">
                          <Heading size="xs" as="p" className="!text-[12.99px]">
                            Digestive Health
                          </Heading>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="self-start">
                          <Heading size="xs" as="p" className="!text-[12.99px]">
                            First Aid
                          </Heading>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="self-start">
                          <Heading size="xs" as="p" className="!text-[12.99px]">
                            Skin Care
                          </Heading>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="self-end">
                          <Heading size="xs" as="p" className="!text-[12.99px]">
                            Child and Baby Care
                          </Heading>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="self-start">
                          <Heading size="xs" as="p" className="!text-[12.99px]">
                            Heart Health
                          </Heading>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="self-end">
                          <Heading size="xs" as="p" className="!text-[12.99px]">
                            Eye care
                          </Heading>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="self-start">
                          <Heading size="xs" as="p" className="!text-[12.99px]">
                            Ear Care
                          </Heading>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="self-end">
                          <Heading size="xs" as="p" className="!text-[12.99px]">
                            Respiratory Health
                          </Heading>
                        </a>
                      </li>
                    </ul>
                  </div>
                </header>
                <div className="h-[396px] bg-[url(/public/images/img_group_8.png)] bg-cover bg-no-repeat relative">
                  <div className="h-[275px] w-[74%] left-[4%] top-[8%] m-auto absolute">
                  <Text
  as="p"
  className="w-[81%] left-[0.00px] top-[0.00px] m-auto uppercase !text-[46.56px] absolute"
  style={{ color: 'white' }}
>
  <>
    Revolutionizing Healthcare,
    <br />
    Delivering Vital Medicine with Speed, Innovation, and Accessibility!
  </>
</Text>
                    <Img
                      src="images/img_group_29.svg"
                      alt="image_one"
                      className="h-[269px] right-[0.30px] bottom-0 top-0 my-auto absolute"
                    />
                  </div>
                  <Heading as="h1" className="bottom-[0.29px] left-[3%] m-auto !text-[20.64px] absolute">
                    All Offers
                  </Heading>
                  <Button
                    leftIcon={<Img src="images/img_minimize.svg" alt="minimize" />}
                    className="flex items-center justify-center h-[48px] gap-[15px] right-[22.00px] top-[29.00px] px-4 m-auto text-gray-600 text-center text-[20.64px] font-bold bg-white-A700 min-w-[196px] absolute rounded-[9px]"
                  >
                    Download App
                  </Button>
                </div>
                <div className="flex md:flex-col items-center w-full mt-[13px] mx-auto md:p-5 max-w-[1323px]">
                  <div className="flex md:flex-col items-center md:self-stretch flex-1">
                    <Button className="flex items-center justify-center h-[34px] w-[34px] z-[1] bg-white-A700 shadow-sm rounded-md">
                      <Img src="images/img_arrow_down.svg" />
                    </Button>
                    <div className="flex md:flex-col md:self-stretch ml-[-6px] gap-[13px] md:ml-0 relative flex-1">
                      <div className="flex w-full p-[21px] sm:p-5 bg-white-A700 shadow-lg cursor-pointer rounded-md hover:shadow-bs1">
                        <Heading as="h2" className="w-[98%] !text-[20.64px] !font-bold">
                          Get upto ₹500 cashback via Simpl.
                        </Heading>
                      </div>
                      <div className="flex w-full p-[21px] sm:p-5 bg-white-A700 shadow-lg cursor-pointer rounded-md hover:shadow-bs1">
                        <Heading as="h3" className="!text-[20.64px] !font-bold">
                          Get ₹100 PayZapp Voucher on transactions above ₹999
                        </Heading>
                      </div>
                      <div className="flex w-full p-[21px] sm:p-5 bg-white-A700 shadow-lg cursor-pointer rounded-md hover:shadow-bs1">
                        <Heading as="h4" className="w-[84%] !text-[20.64px] !font-bold">
                          Save upto Rs. 5000 in tax under Section 80D.
                        </Heading>
                      </div>
                      <div className="flex w-full p-[21px] sm:p-5 bg-white-A700 shadow-lg cursor-pointer rounded-md hover:shadow-bs1">
                        <Heading as="h5" className="w-[84%] !text-[20.64px] !font-bold">
                          FLAT 25% OFF on first 3 medicine orders
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <Button className="flex items-center justify-center h-[34px] w-[34px] ml-[-8px] md:ml-0 relative bg-white-A700 shadow-xs rounded-md">
                    <Img src="images/img_arrow_down.svg" />
                  </Button>
                </div>
              </div>
              <div className="flex justify-between w-full gap-5 mx-auto md:p-5 max-w-[1355px] flex-wrap">
                <Heading as="h6" className="self-end !text-[20.64px]">
                  Popular Products
                </Heading>
                <a href="#" className="self-start">
                  <Heading as="h5" className="!text-[20.64px]">
                    View All
                  </Heading>
                </a>
              </div>
              <div className="flex flex-col items-center w-full gap-3.5 mx-auto md:p-5 max-w-[1355px]">
                <div className="flex md:flex-col w-[93%] md:w-full gap-[17px]">
                  <div className="flex flex-col items-start h-[282px] w-full md:h-auto p-[5px] bg-[url(/public/images/img_group_33.svg)] bg-cover bg-no-repeat rounded-[14px]">
                    <Img
                      src="images/img_group_37.svg"
                      alt="thermometer_one"
                      className="h-[173px] w-full md:h-auto mt-[7px] ml-1.5 md:ml-0"
                    />
                    <Heading as="h5" className="mt-[7px] ml-2.5 md:ml-0 !text-[20.64px]">
                      Thermometer{" "}
                    </Heading>
                    <div className="flex items-center ml-3 md:ml-0">
                      <Img src="images/img_mask.svg" alt="image" className="h-[12px]" />
                      <Heading as="h5" className="h-[29px] !text-[20.64px]">
                        190
                      </Heading>
                    </div>
                    <div className="flex self-center items-start gap-[5px]">
                      <Heading size="s" as="p" className="!text-blue_gray-600 !text-[15.14px]">
                        ADD TO CART{" "}
                      </Heading>
                      <Img src="images/img_thumbs_up.svg" alt="add_to_cart_one" className="h-[13px] w-[14px] mt-0.5" />
                    </div>
                  </div>
                  <div className="flex flex-col items-start h-[282px] w-full md:h-auto p-[5px] bg-[url(/public/images/img_group_33.svg)] bg-cover bg-no-repeat rounded-[14px]">
                    <Img
                      src="images/img_group_37.svg"
                      alt="image"
                      className="h-[173px] w-full md:h-auto mt-[7px] ml-1.5 md:ml-0"
                    />
                    <Heading as="h5" className="mt-[7px] ml-2.5 md:ml-0 !text-[20.64px]">
                      Thermometer{" "}
                    </Heading>
                    <div className="flex items-center ml-3 md:ml-0">
                      <Img src="images/img_mask.svg" alt="mask_one" className="h-[12px]" />
                      <Heading as="h5" className="h-[29px] !text-[20.64px]">
                        190
                      </Heading>
                    </div>
                    <div className="flex self-center items-start gap-[5px]">
                      <Heading size="s" as="p" className="!text-blue_gray-600 !text-[15.14px]">
                        ADD TO CART{" "}
                      </Heading>
                      <Img
                        src="images/img_thumbs_up_blue_gray_600.png"
                        alt="thumbsup_one"
                        className="w-[14px] mt-0.5 object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start h-[282px] w-full md:h-auto p-[5px] bg-[url(/public/images/img_group_33.svg)] bg-cover bg-no-repeat rounded-[14px]">
                    <Img
                      src="images/img_group_37.svg"
                      alt="image"
                      className="h-[173px] w-full md:h-auto mt-[7px] ml-1.5 md:ml-0"
                    />
                    <Heading as="h5" className="mt-[7px] ml-2.5 md:ml-0 !text-[20.64px]">
                      Thermometer{" "}
                    </Heading>
                    <div className="flex items-center ml-3 md:ml-0">
                      <Img src="images/img_mask.svg" alt="mask_one" className="h-[12px]" />
                      <Heading as="h5" className="h-[29px] !text-[20.64px]">
                        190
                      </Heading>
                    </div>
                    <div className="flex self-center items-start gap-[5px]">
                      <Heading size="s" as="p" className="!text-blue_gray-600 !text-[15.14px]">
                        ADD TO CART{" "}
                      </Heading>
                      <Img
                        src="images/img_thumbs_up_blue_gray_600.png"
                        alt="thumbsup_one"
                        className="w-[14px] mt-0.5 object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start h-[282px] w-full md:h-auto p-[5px] bg-[url(/public/images/img_group_33.svg)] bg-cover bg-no-repeat rounded-[14px]">
                    <Img
                      src="images/img_group_37.svg"
                      alt="image"
                      className="h-[173px] w-full md:h-auto mt-[7px] ml-1.5 md:ml-0"
                    />
                    <Heading as="h5" className="mt-[7px] ml-2.5 md:ml-0 !text-[20.64px]">
                      Thermometer{" "}
                    </Heading>
                    <div className="flex items-center ml-3 md:ml-0">
                      <Img src="images/img_mask.svg" alt="mask_one" className="h-[12px]" />
                      <Heading as="h5" className="h-[29px] !text-[20.64px]">
                        190
                      </Heading>
                    </div>
                    <div className="flex self-center items-start gap-[5px]">
                      <Heading size="s" as="p" className="!text-blue_gray-600 !text-[15.14px]">
                        ADD TO CART{" "}
                      </Heading>
                      <Img src="images/img_thumbs_up.svg" alt="thumbsup_one" className="h-[13px] w-[14px] mt-0.5" />
                    </div>
                  </div>
                </div>
                <div className="flex self-stretch justify-between items-start gap-5 flex-wrap">
                  <Heading as="h5" className="mt-1.5 !text-[20.64px]">
                    New Products
                  </Heading>
                  <a href="#">
                    <Heading as="h5" className="!text-[20.64px]">
                      View All
                    </Heading>
                  </a>
                </div>
                <div className="flex md:flex-col w-[93%] md:w-full gap-[17px]">
                  <div className="flex flex-col items-start h-[282px] w-full md:h-auto p-[5px] bg-[url(/public/images/img_group_33.svg)] bg-cover bg-no-repeat rounded-[14px]">
                    <Img
                      src="images/img_group_37.svg"
                      alt="thermometer_one"
                      className="h-[173px] w-full md:h-auto mt-[7px] ml-1.5 md:ml-0"
                    />
                    <Heading as="h5" className="mt-[7px] ml-2.5 md:ml-0 !text-[20.64px]">
                      Thermometer{" "}
                    </Heading>
                    <div className="flex items-center ml-3 md:ml-0">
                      <Img src="images/img_mask.svg" alt="image" className="h-[12px]" />
                      <Heading as="h5" className="h-[29px] !text-[20.64px]">
                        190
                      </Heading>
                    </div>
                    <div className="flex self-center items-start gap-[5px]">
                      <Heading size="s" as="p" className="!text-blue_gray-600 !text-[15.14px]">
                        ADD TO CART{" "}
                      </Heading>
                      <Img src="images/img_thumbs_up.svg" alt="add_to_cart_one" className="h-[13px] w-[14px] mt-0.5" />
                    </div>
                  </div>
                  <div className="flex flex-col items-start h-[282px] w-full md:h-auto p-[5px] bg-[url(/public/images/img_group_33.svg)] bg-cover bg-no-repeat rounded-[14px]">
                    <Img
                      src="images/img_group_37.svg"
                      alt="image"
                      className="h-[173px] w-full md:h-auto mt-[7px] ml-1.5 md:ml-0"
                    />
                    <Heading as="h5" className="mt-[7px] ml-2.5 md:ml-0 !text-[20.64px]">
                      Thermometer{" "}
                    </Heading>
                    <div className="flex items-center ml-3 md:ml-0">
                      <Img src="images/img_mask.svg" alt="mask_one" className="h-[12px]" />
                      <Heading as="h5" className="h-[29px] !text-[20.64px]">
                        190
                      </Heading>
                    </div>
                    <div className="flex self-center items-start gap-[5px]">
                      <Heading size="s" as="p" className="!text-blue_gray-600 !text-[15.14px]">
                        ADD TO CART{" "}
                      </Heading>
                      <Img
                        src="images/img_thumbs_up_blue_gray_600.png"
                        alt="thumbsup_one"
                        className="w-[14px] mt-0.5 object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start h-[282px] w-full md:h-auto p-[5px] bg-[url(/public/images/img_group_33.svg)] bg-cover bg-no-repeat rounded-[14px]">
                    <Img
                      src="images/img_group_37.svg"
                      alt="image"
                      className="h-[173px] w-full md:h-auto mt-[7px] ml-1.5 md:ml-0"
                    />
                    <Heading as="h5" className="mt-[7px] ml-2.5 md:ml-0 !text-[20.64px]">
                      Thermometer{" "}
                    </Heading>
                    <div className="flex items-center ml-3 md:ml-0">
                      <Img src="images/img_mask.svg" alt="mask_one" className="h-[12px]" />
                      <Heading as="h5" className="h-[29px] !text-[20.64px]">
                        190
                      </Heading>
                    </div>
                    <div className="flex self-center items-start gap-[5px]">
                      <Heading size="s" as="p" className="!text-blue_gray-600 !text-[15.14px]">
                        ADD TO CART{" "}
                      </Heading>
                      <Img
                        src="images/img_thumbs_up_blue_gray_600.png"
                        alt="thumbsup_one"
                        className="w-[14px] mt-0.5 object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start h-[282px] w-full md:h-auto p-[5px] bg-[url(/public/images/img_group_33.svg)] bg-cover bg-no-repeat rounded-[14px]">
                    <Img
                      src="images/img_group_37.svg"
                      alt="image"
                      className="h-[173px] w-full md:h-auto mt-[7px] ml-1.5 md:ml-0"
                    />
                    <Heading as="h5" className="mt-[7px] ml-2.5 md:ml-0 !text-[20.64px]">
                      Thermometer{" "}
                    </Heading>
                    <div className="flex items-center ml-3 md:ml-0">
                      <Img src="images/img_mask.svg" alt="mask_one" className="h-[12px]" />
                      <Heading as="h5" className="h-[29px] !text-[20.64px]">
                        190
                      </Heading>
                    </div>
                    <div className="flex self-center items-start gap-[5px]">
                      <Heading size="s" as="p" className="!text-blue_gray-600 !text-[15.14px]">
                        ADD TO CART{" "}
                      </Heading>
                      <Img src="images/img_thumbs_up.svg" alt="thumbsup_one" className="h-[13px] w-[14px] mt-0.5" />
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
