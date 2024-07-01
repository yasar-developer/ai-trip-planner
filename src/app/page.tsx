import React from 'react';

type HotelCardProps = {
  imageSrc: string;
  name: string;
  description: string;
};

const HotelCard: React.FC<HotelCardProps> = ({ imageSrc, name, description }) => (
  <div className="flex flex-col flex-1 pb-5 rounded-lg border border-solid bg-white bg-opacity-30 border-zinc-100">
    <img loading="lazy" src={imageSrc} alt={`${name} hotel`} className="w-full aspect-[1.25]" />
    <div className="flex flex-col justify-center mt-5">
      <div className="flex flex-col">
        <div className="justify-center text-base font-semibold leading-6 text-black text-opacity-90">{name}</div>
        <div className="justify-center mt-2 text-sm font-light leading-6 text-black text-opacity-50">{description}</div>
      </div>
    </div>
  </div>
);

type TourCardProps = {
  imageSrc: string;
  name: string;
  description: string;
  duration: string;
  location: string;
};

const TourCard: React.FC<TourCardProps> = ({ imageSrc, name, description, duration, location }) => (
  <div className="flex flex-col grow justify-center text-sm text-black text-opacity-90 max-md:mt-8">
    <div className="flex flex-col py-px bg-white rounded-lg border border-solid border-zinc-100">
      <img loading="lazy" src={imageSrc} alt={`${name} tour`} className="w-full aspect-[1.43]" />
      <div className="flex flex-col px-4 py-3 rounded-none">
        <div className="justify-center leading-[157%]">{name}</div>
        <div className="flex flex-wrap gap-1 pt-2 mt-6 leading-[143%]">
          <div className="justify-center px-2.5 py-px rounded-full border border border-solid bg-neutral-200">{duration}</div>
          <div className="justify-center px-2.5 py-px whitespace-nowrap rounded-full border border border-solid bg-neutral-200">{location}</div>
        </div>
      </div>
    </div>
  </div>
);

type ItineraryItemProps = {
  time: string;
  title: string;
  description: string;
  iconSrc: string;
  hasBookTour?: boolean;
  imageSrc?: string;
};

const ItineraryItem: React.FC<ItineraryItemProps> = ({ time, title, description, iconSrc, hasBookTour, imageSrc }) => (
  <div className="flex flex-col justify-center mt-3 max-md:max-w-full">
    <div className="flex flex-col justify-center blur-none max-md:max-w-full">
      <div className={`flex ${imageSrc ? 'gap-2' : ''} py-2.5 pr-2.5 pl-px bg-white rounded-2xl border border border-solid shadow-md ${imageSrc ? 'max-md:flex-wrap' : ''}`}>
        <div className={`flex flex-col ${imageSrc ? 'flex-1' : ''} max-md:max-w-full`}>
          <div className="flex flex-col justify-center px-2 text-xs font-light leading-6 text-neutral-400 max-md:max-w-full">
            <div className="flex flex-col justify-center items-start py-1 max-md:pr-5 max-md:max-w-full">
              <div className="justify-center">{time}</div>
            </div>
          </div>
          <div className="flex gap-3 pr-20 pl-3 mt-2 max-md:flex-wrap max-md:pr-5">
            <div className="flex justify-center items-center px-1 my-auto w-6 h-6 bg-purple-600 rounded-full">
              <img loading="lazy" src={iconSrc} alt="" className="w-4 aspect-square" />
            </div>
            <div className="justify-center text-xl font-medium leading-7 text-gray-900">{title}</div>
          </div>
          <div className="flex flex-col justify-center px-2 mt-2 text-base font-light leading-6 text-neutral-400 max-md:max-w-full">
            <div className="justify-center px-1 py-2 rounded-xl max-md:max-w-full">{description}</div>
          </div>
          {hasBookTour && (
            <div className="flex gap-2 px-3 mt-2 text-base font-bold leading-6 text-purple-300 max-md:flex-wrap">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/091eb9f687f4f5a4ae97ec7060f10e3a1f6fcd161917dd8881439511f94cdb9d?apiKey=79050f2e54364c9b998b189296d8e734&" alt="" className="shrink-0 my-auto w-4 aspect-square" />
              <div className="max-md:max-w-full">Book a Tour</div>
            </div>
          )}
        </div>
        {imageSrc && (
          <div className="flex flex-col justify-end items-center pt-14">
            <img loading="lazy" src={imageSrc} alt="" className="aspect-square w-[90px]" />
          </div>
        )}
      </div>
    </div>
  </div>
);

const MyComponent: React.FC = () => {
  const hotels = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c812e0c9c4c28e7bc4b4c57c2c8bdfb1cb089a443f15a8ac7669231988d8a664?apiKey=79050f2e54364c9b998b189296d8e734&",
      name: "The Leela Palace Chennai …",
      description: "Experience luxury and serenity at this 5-star hotel with views of the Bay of Bengal."
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cea5b64aa7f69760dcddb151c0afdff2ad0dbfc5516fdf5b783999b51f5e1295?apiKey=79050f2e54364c9b998b189296d8e734&",
      name: "ITC Grand Chola Chennai -…",
      description: "Indulge in the grandeur and relaxation at one of the largest hotels in India."
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c3c62d81ee4712a286b45f1de2a396c6e1d1b64fefc9984c5b2ec3b1a7d155ff?apiKey=79050f2e54364c9b998b189296d8e734&",
      name: "Taj Coromandel Chennai - …",
      description: "Enjoy a peaceful stay at this elegant hotel known for its hospitality and comfort."
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/53cef31e41e1046489c18092764f5338c9faa97db41be197512d17a10e272784?apiKey=79050f2e54364c9b998b189296d8e734&",
      name: "Park Hyatt Chennai - Vela…",
      description: "Relax in the tranquil surroundings of this upscale hotel with top-notch amenities."
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?apiKey=79050f2e54364c9b998b189296d8e734&",
      name: "The Raintree Hotel - St. M…",
      description: "Stay at this eco-friendly hotel for a soothing experience amidst nature and luxury."
    }
  ];

  const tours = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0293084d938983a0e0dcdde0d5c5e8e1cffc5e07ae72e5244520765e1769f906?apiKey=79050f2e54364c9b998b189296d8e734&",
      name: "Heritage Walk - Mylapore",
      description: "Explore the cultural and architectural heritage of Chennai in a leisurely walk.",
      duration: "1 day",
      location: "Chennai"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/11c6242647eacb079a0e768e0755bf5414df76a3b4d48c5738b2abba8146304a?apiKey=79050f2e54364c9b998b189296d8e734&",
      name: "Chennai City Cultural Tour",
      description: "Discover the rich culture and history of Chennai on a relaxing guided tour.",
      duration: "1 day",
      location: "Chennai"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/04471104a67963ca0f65ec77c526a484e35d405075e80325552166b831d2639b?apiKey=79050f2e54364c9b998b189296d8e734&",
      name: "Eco Tour - Guindy National…",
      description: "Enjoy a peaceful day exploring the unique biodiversity of this urban national park.",
      duration: "1 day",
      location: "Chennai"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f3a979d8db79f92ef41154eeaf9652dce0ba91f68b0044861fe7d3d2d94c5935?apiKey=79050f2e54364c9b998b189296d8e734&",
      name: "Art and Crafts Tour - Chol…",
      description: "Immerse yourself in the artistic ambiance and creativity at this tranquil artist commune.",
      duration: "1 day",
      location: "Chennai"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?apiKey=79050f2e54364c9b998b189296d8e734&",
      name: "Beach and Temple Tour - …",
      description: "Relax on the pristine beaches and visit ancient temples on this serene day tour.",
      duration: "1 day",
      location: "Chennai"
    }
  ];

  return (
    <div className="flex flex-col justify-center bg-[linear-gradient(0deg,#FFF_0%,#FFF_100%,#FFF)]">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-col self-center max-w-full w-[900px]">
          <header className="flex flex-col justify-center px-4 max-md:max-w-full">
            <div className="flex flex-col max-w-[900px] max-md:max-w-full">
              <nav className="flex z-10 flex-col pt-8 w-[46px]">
                <div className="flex flex-col justify-center">
                  <div className="flex flex-col justify-center p-3.5 rounded-xl">
                    <div className="flex flex-col justify-center">
                      <div className="flex justify-center items-center">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2eef449fac01638cd2827539ac2ec782fe147ac92b8f938332799b14b388ddfa?apiKey=79050f2e54364c9b998b189296d8e734&" alt="" className="aspect-square w-[18px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
              <h1 className="flex flex-col justify-center pt-10 text-6xl tracking-tighter text-black leading-[67.2px] max-md:max-w-full max-md:text-4xl">
                <div className="pb-2 max-md:max-w-full max-md:text-4xl">
                  AI Trip Planner 🌴
                </div>
              </h1>
              <p className="justify-center text-xl tracking-wide leading-7 text-purple-700 max-md:max-w-full">
                Plan your dream trip with personalized itineraries.
              </p>
            </div>
          </header>
          <main className="flex flex-col justify-center mt-5 max-md:max-w-full">
            <section className="flex flex-col pb-12 max-w-[900px] max-md:max-w-full">
              <div className="flex flex-col flex-wrap justify-center max-md:max-w-full">
                <div className="flex flex-col px-4 max-md:max-w-full">
                  <div className="flex flex-col text-base leading-6 text-black max-md:max-w-full">
                    <div className="flex flex-wrap gap-2 items-start pr-20 pb-4 max-md:pr-5">
                      <div className="flex flex-col justify-center px-2 rounded-full bg-neutral-100 max-w-[300px]">
                        <div className="flex flex-col justify-center">
                          <div className="justify-center">2 days</div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center px-2 whitespace-nowrap rounded-full bg-neutral-100 max-w-[300px]">
                        <div className="flex flex-col justify-center">
                          <div className="justify-center">Chennai</div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center px-2 whitespace-nowrap rounded-full bg-neutral-100 max-w-[300px]">
                        <div className="flex flex-col justify-center">
                          <div className="justify-center">Relaxation</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-end pr-2 pl-16 whitespace-nowrap max-md:pl-5 max-md:max-w-full">
                      <div className="flex gap-0">
                        <button className="flex gap-1 p-2">
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c2953f06d09310f1f0cd7b6b31de8408f7c1d4ae5059ed2942bf06730fc5a98?apiKey=79050f2e54364c9b998b189296d8e734&" alt="" className="shrink-0 my-auto w-5 aspect-square" />
                          <span className="justify-center">Rerun</span>
                        </button>
                        <button className="flex gap-1 p-2">
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e29da78e6ae7fbeec60057c47cbc17214585ea0f186a04a0b9d68c36070a878f?apiKey=79050f2e54364c9b998b189296d8e734&" alt="" className="shrink-0 my-auto w-5 aspect-square" />
                          <span className="justify-center">Copy</span>
                        </button>
                        <button className="flex gap-1 p-2">
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a91dab119bd3fd53970a668e7bcce8d400a8c93d7202f8a1f247ac1ae1fc79c5?apiKey=79050f2e54364c9b998b189296d8e734&" alt="" className="shrink-0 w-6 aspect-square" />
                          <span className="justify-center">Save</span>
                        </button>
                        <button className="flex gap-1 p-2">
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/67cdd1d5149a97aa3277254c786555524f850418eea1b1fbe6383d8ad11f324e?apiKey=79050f2e54364c9b998b189296d8e734&" alt="" className="shrink-0 my-auto w-5 aspect-square" />
                          <span className="justify-center">Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <article className="flex flex-col justify-center p-px bg-white rounded-2xl border border border-solid max-w-[1916px] max-md:max-w-full">
                    <div className="flex flex-col justify-center pb-12 max-md:max-w-full">
                      <div className="flex flex-col max-md:max-w-full">
                        <div className="flex flex-col justify-center text-4xl font-bold text-center text-white leading-[60px] max-md:max-w-full">
                          <div className="flex overflow-hidden relative flex-col justify-center w-full min-h-[320px] max-md:max-w-full">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d6073c01f85c38e08281dd37c62770ee08d558bf871f25852991c076c601017?apiKey=79050f2e54364c9b998b189296d8e734&" alt="Chennai cityscape" className="object-cover absolute inset-0 size-full" />
                            <div className="flex relative justify-center items-center px-16 py-20 bg-black bg-opacity-20 max-md:px-5 max-md:max-w-full">
                              <h2 className="justify-center px-9 py-2 mt-2 mb-4 max-w-full rounded-xl w-[500px] max-md:px-5 max-md:max-w-full">
                                2-Day Relaxation Trip to <br /> Chennai
                              </h2>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col max-md:max-w-full">
                          <div className="flex flex-col px-4 pt-4 pb-7 max-md:max-w-full">
                            <div className="flex flex-col max-md:max-w-full">
                              <h3 className="justify-center text-2xl font-semibold leading-6 text-black max-md:max-w-full">
                                Day 1 - Marina Beach Area
                              </h3>
                              <div className="flex flex-col mt-6 max-md:max-w-full">
                                <ItineraryItem
                                  time="8:00 AM"
                                  title="Saravana Bhavan"
                                  description="Start your day with a traditional South Indian breakfast, perfect for a relaxed morning."
                                  iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/4288ded5db6f47d2bfd9a43b489b2d0eef26d4b672ddc214ecb84fe53846545e?apiKey=79050f2e54364c9b998b189296d8e734&"
                                />
                                <ItineraryItem
                                  time="10:00 AM"
                                  title="Walk along Marina Beach"
                                  description="A soothing walk on India's longest beach to enjoy the sea breeze and morning calm."
                                  iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/0b24e4c715f5af249791ce7936a6b94aee43a6dafcaa3b2348285d4ebf61ab25?apiKey=79050f2e54364c9b998b189296d8e734&"
                                  hasBookTour={true}
                                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b4035f5c57484695e72acb16ba98cfa25727b700aca21504ee70fd3cba48f7f3?apiKey=79050f2e54364c9b998b189296d8e734&"
                                />
                                <ItineraryItem
                                  time="1:00 PM"
                                  title="Mylapore Temple Visit"
                                  description="Explore the peaceful Kapaleeshwarar Temple and absorb the spiritual atmosphere."
                                  iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/0b24e4c715f5af249791ce7936a6b94aee43a6dafcaa3b2348285d4ebf61ab25?apiKey=79050f2e54364c9b998b189296d8e734&"
                                  hasBookTour={true}
                                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/5f7e0860ae886e33664613710ffdd240a220d79eab37a7cf5d9a6c7d60639544?apiKey=79050f2e54364c9b998b189296d8e734&"
                                />
                                <ItineraryItem
                                  time="4:00 PM"
                                  title="San Thome Cathedral"
                                  description="Visit this serene and historic Roman Catholic cathedral to enjoy some quiet contemplation."
                                  iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/0b24e4c715f5af249791ce7936a6b94aee43a6dafcaa3b2348285d4ebf61ab25?apiKey=79050f2e54364c9b998b189296d8e734&"
                                  hasBookTour={true}
                                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/0f070182da23d83cd6a184761cb98b897588553cd74c95d4f809e2870afd1b68?apiKey=79050f2e54364c9b998b189296d8e734&"
                                />
                                <ItineraryItem
                                  time="8:00 PM"
                                  title="Dakshin at Crowne Plaza"
                                  description="Unwind with a relaxing dinner featuring the finest South Indian delicacies."
                                  iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/4288ded5db6f47d2bfd9a43b489b2d0eef26d4b672ddc214ecb84fe53846545e?apiKey=79050f2e54364c9b998b189296d8e734&"
                                />
                                <ItineraryItem
                                  time="10:00 PM"
                                  title="Stargazing at Elliot's Beach"
                                  description="End your evening with the tranquil activity of stargazing by the beach."
                                  iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/0b24e4c715f5af249791ce7936a6b94aee43a6dafcaa3b2348285d4ebf61ab25?apiKey=79050f2e54364c9b998b189296d8e734&"
                                  hasBookTour={true}
                                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/bd4e12e81984fe926edcfa4b6ed653f1635e87021929905c0346777ce1cba343?apiKey=79050f2e54364c9b998b189296d8e734&"
                                />
                                <ItineraryItem
                                  time="Bedtime"
                                  title="Find hotels in Chennai"
                                  description="Choose from a range of hotels for a restful night's sleep by the seaside."
                                  iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/3ee04e66e3e8f5b9516ca4a5515218209a659dad7ab8a9f46dd3d327329e9924?apiKey=79050f2e54364c9b998b189296d8e734&"
                                />
                                  <div className="flex flex-col justify-end pt-20">
                                    <div className="flex flex-col justify-end pt-2">
                                      <button className="flex gap-0 justify-center px-3 py-2 bg-purple-600 rounded-lg max-w-[174px]">
                                        <span className="text-sm font-bold leading-5 text-center text-white">Find hotels</span>
                                        <div className="flex flex-col justify-center pl-2 my-auto">
                                          <div className="flex flex-col justify-center items-start">
                                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff31f66c00e1defcc6792f3ca357d4328bb54939b69974e10792137c440c0283?apiKey=79050f2e54364c9b998b189296d8e734&" alt="" className="w-3.5 aspect-square" />
                                          </div>
                                        </div>
                                      </button>
                                    </div>
                                  </div>
                              </div>
                            </div>
                            <div className="flex flex-col mt-10 max-md:max-w-full">
                              <h3 className="justify-center text-2xl font-semibold leading-6 text-black max-md:max-w-full">
                                Day 2 - Central Chennai
                              </h3>
                              <div className="flex flex-col mt-6 max-md:max-w-full">
                                <ItineraryItem
                                  time="8:00 AM"
                                  title="Amethyst Café"
                                  description="Enjoy a leisurely breakfast in the calming ambiance of a restored warehouse turned café."
                                  iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/4288ded5db6f47d2bfd9a43b489b2d0eef26d4b672ddc214ecb84fe53846545e?apiKey=79050f2e54364c9b998b189296d8e734&"
                                />
                                <ItineraryItem
                                  time="10:00 AM"
                                  title="Government Museum Tour"
                                  description="Educational and laid-back tour of Chennai's rich history and culture."
                                  iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/0b24e4c715f5af249791ce7936a6b94aee43a6dafcaa3b2348285d4ebf61ab25?apiKey=79050f2e54364c9b998b189296d8e734&"
                                  hasBookTour={true}
                                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/29f30544c754261051a0e2593a3e800167b8aa37e2049abb5253f6339ef40285?apiKey=79050f2e54364c9b998b189296d8e734&"
                                />
                                <ItineraryItem
                                  time="1:00 PM"
                                  title="Higginbothams Book Store"
                                  description="Relax with a book at India's oldest bookshop and iconic landmark."
                                  iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/2621ec1941f2bb20fd4a31144450a4e52b4a02ca7ddd76007725568193a48b23?apiKey=79050f2e54364c9b998b189296d8e734&"
                                  hasBookTour={true}
                                />
                                <ItineraryItem
                                  time="4:00 PM"
                                  title="National Art Gallery"
                                  description="A tranquil afternoon admiring traditional Indian paintings and sculptures."
                                  iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/2621ec1941f2bb20fd4a31144450a4e52b4a02ca7ddd76007725568193a48b23?apiKey=79050f2e54364c9b998b189296d8e734&"
                                  hasBookTour={true}
                                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/934e5018a22f92f9d0cc99798f48ff82e2f3e442d3d6a57e29112cfce9a3d416?apiKey=79050f2e54364c9b998b189296d8e734&"
                                />
                                <ItineraryItem
                                  time="8:00 PM"
                                  title="Southern Spice at Taj Coromandel"
                                  description="Wind down your day with a sumptuous South Indian meal at one of Chennai's premium restaurants."
                                  iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a1c3efe951da0f75354acb098883786250fcbae54e469e891d7bc21a1b9aa912?apiKey=79050f2e54364c9b998b189296d8e734&"
                                />
                                <ItineraryItem
                                  time="10:00 PM"
                                  title="Chennai City Centre Mall"
                                  description="An evening of leisurely shopping and entertainment."
                                  iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/2621ec1941f2bb20fd4a31144450a4e52b4a02ca7ddd76007725568193a48b23?apiKey=79050f2e54364c9b998b189296d8e734&"
                                  hasBookTour={true}
                                />
                                <ItineraryItem
                                  time="Bedtime"
                                  title="Find hotels in Chennai"
                                  description="After a day of exploration, relax in a comfortable hotel in the heart of the city."
                                  iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/70fe0904d8028433d2a7e36558d5c4c33b7a0b55bd4dc088cd3448720fd22cfa?apiKey=79050f2e54364c9b998b189296d8e734&"
                                />
                                  <div className="flex flex-col justify-end pt-20">
                                    <div className="flex flex-col justify-end pt-2">
                                      <button className="flex gap-0 justify-center px-3 py-2 bg-purple-600 rounded-lg max-w-[174px]">
                                        <span className="text-sm font-bold leading-5 text-center text-white">Find hotels</span>
                                        <div className="flex flex-col justify-center pl-2 my-auto">
                                          <div className="flex flex-col justify-center items-start">
                                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c86a64dfb50e459dda18a67f22bcd99d327b0ebf3e1014fbd3b49acf94132c1?apiKey=79050f2e54364c9b998b189296d8e734&" alt="" className="w-3.5 aspect-square" />
                                          </div>
                                        </div>
                                      </button>
                                    </div>
                                  </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  <section className="flex flex-col justify-center px-4 mt-2 text-2xl leading-8 text-black max-md:max-w-full">
                    <h3 className="pt-4 pb-1.5 max-md:max-w-full">Recommended Hotels</h3>
                  </section>
                  <div className="flex overflow-x-auto gap-5 justify-end py-4 pl-4 mt-2 max-md:flex-wrap">
                    {hotels.map((hotel, index) => (
                      <HotelCard key={index} {...hotel} />
                    ))}
                  </div>
                  <section className="flex flex-col justify-center px-4 mt-2 text-2xl leading-8 text-black max-md:max-w-full">
                    <h3 className="pt-4 pb-1.5 max-md:max-w-full">Recommended Tours</h3>
                  </section>
                  <div className="flex overflow-x-auto gap-5 justify-end py-4 pl-4 mt-2 max-md:flex-wrap">
                    {tours.map((tour, index) => (
                      <TourCard key={index} {...tour} />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      <div className="flex flex-col px-6 pb-10 mt-5 max-md:px-5 max-md:max-w-full">
        <section className="flex flex-col px-12 py-10 bg-white rounded-3xl border border border-solid shadow-md max-md:px-5 max-md:max-w-full">
          <h3 className="pb-4 text-3xl leading-9 text-black max-md:max-w-full">
            You might also find those itineraries interesting:
          </h3>
          <div className="flex flex-col pt-4 max-md:max-w-full">
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <TourCard
                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/52bdfdd03af00fdfa15289bbf07a9d7b0b31b6daf40d8f739035041fe192cd58?apiKey=79050f2e54364c9b998b189296d8e734&"
                  name="Relaxation in Chennai for 1 day"
                  description=""
                  duration="1 day"
                  location="Chennai"
                />
                <TourCard
                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b2a6f2f1737316e50bc4c96a41c1cf151e94ec521269a91e3a97aba5683d2b08?apiKey=79050f2e54364c9b998b189296d8e734&"
                  name="3 Days Relaxation in Chennai"
                  description=""
                  duration="3 days"
                  location="Chennai"
                />
                <TourCard
                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b2a6f2f1737316e50bc4c96a41c1cf151e94ec521269a91e3a97aba5683d2b08?apiKey=79050f2e54364c9b998b189296d8e734&"
                  name="4-Day Relaxation Trip in Chennai"
                  description=""
                  duration="4 days"
                  location="Chennai"
                />
              </div>
            </div>
            <div className="mt-8 max-w-full w-[492px]">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <TourCard
                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d1037f2a7c2b85bd1196bb92bec1c6c2ddd93d86615e95cc61b230da7a9665b2?apiKey=79050f2e54364c9b998b189296d8e734&"
                  name="5-Day Relaxation Trip in Chennai"
                  description=""
                  duration="5 days"
                  location="Chennai"
                />
                <TourCard
                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/02dc798ce0183a91f549c153af18526586a80857bd925c507999287343851329?apiKey=79050f2e54364c9b998b189296d8e734&"
                  name="6 Days of Relaxation in Chennai"
                  description=""
                  duration="6 days"
                  location="Chennai"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="flex flex-col items-center px-16 pt-10 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col px-8 max-w-full w-[1280px] max-md:px-5">
          <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col">
              <div className="justify-center text-base leading-6 text-gray-600">AI Trip Planner</div>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d1d6248cba43a0bb529d1852ac01d147aa2e54b9ce7d8510e37f12c0abb7894?apiKey=79050f2e54364c9b998b189296d8e734&" alt="AI Trip Planner logo" className="mt-6 w-14 aspect-square" />
              <div className="flex gap-5 justify-between items-center mt-6">
                <a href="#" className="flex justify-center items-center self-stretch my-auto">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4d1220ad2437375c7c4db7ba949baf27752c7250d999522854847961ba416ae?apiKey=79050f2e54364c9b998b189296d8e734&" alt="Facebook" className="w-6 aspect-square" />
                </a>
                <a href="#" className="flex justify-center items-center self-stretch my-auto">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3214b5f6e52cd14895494902aeab16ac8fd6a025aa010046089f6c3e514e706?apiKey=79050f2e54364c9b998b189296d8e734&" alt="Twitter" className="w-6 aspect-square" />
                </a>
                <a href="#" className="flex justify-center items-center self-stretch">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bc328d5268e377c7e0748636c9aea13fe2dba14a21eb3a5fef7afeb762eaa03?apiKey=79050f2e54364c9b998b189296d8e734&" alt="Instagram" className="w-7 aspect-square" />
                </a>
              </div>
            </div>
            <div className="flex flex-col pb-14 text-base leading-6 max-md:max-w-full">
              <h4 className="justify-center text-gray-700 max-md:max-w-full">Explore More</h4>
              <div className="flex flex-col justify-center mt-8 text-gray-600 max-md:max-w-full">
                <div className="flex gap-3 max-md:flex-wrap">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/41acbe5af07edbfee6a16ff99a41e92e9cccb04d6abf136772f4f582b88980ec?apiKey=79050f2e54364c9b998b189296d8e734&" alt="" className="shrink-0 w-12 aspect-square" />
                  <div className="flex flex-col">
                    <h5 className="justify-center font-semibold">Marcos GPT</h5>
                    <p className="justify-center">Chat with Marcos and refine your trip (ChatGPT plus users)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col pt-10 pb-10 mt-10 border border-t border-solid max-md:max-w-full">
            <p className="justify-center text-base leading-6 text-gray-600 max-md:max-w-full">
              © 2024 BuildAI.Space LTD. All rights reserved.
            </p>
            <p className="flex gap-0 pr-20 text-xs leading-4 text-gray-400 max-md:flex-wrap max-md:pr-5">
              By using BuildAI, you agree to our <a href="#" className="justify-center font-semibold">Terms of Service</a> and <a href="#" className="justify-center font-semibold">Privacy Policy</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MyComponent;