import axios from "axios";
import { AiFillCheckCircle } from "react-icons/ai";

const PricingCard = ({ price }) => {
  const dynamicSubTitle = (price) => {
    if (price.nickname === "10-Yard Dupmster") {
      return <p>3-day rental</p>;
    }
    if (price.nickname === "24 Hour Special: 20-Yard Dupmster") {
      return <p>Weekend special</p>;
    }
    if (price.nickname === "5-Yard Dupmster") {
      return <p>10-day rental</p>;
    }
    if (price.nickname === "15-Yard Dupmster") {
      return <p>3-day rental</p>;
    }
  };

  const dynamicDescription = (price) => {
    const liDesk = (
      <>
        <div className="border" />
        <div className="flex space-x-3">
          <AiFillCheckCircle
            className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
            aria-hidden="true"
          />
          <h2 className="text-sm text-gray-500">Neighborhood & HOA Friendly</h2>
        </div>
        <div className="border" />
        <div className="flex space-x-3">
          <AiFillCheckCircle
            className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
            aria-hidden="true"
          />
          <h2 className="text-sm text-gray-500">
            Eco-Friendly Waste Management
          </h2>
        </div>
        <div className="border" />
        <div className="flex space-x-3">
          <AiFillCheckCircle
            className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
            aria-hidden="true"
          />
          <h2 className="text-sm text-gray-500">Driveway Protection</h2>
        </div>
        <div className="border" />
      </>
    );
    if (price.nickname === "10-Yard Dupmster") {
      return (
        <div className="mt-6 space-y-4">
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-gray-500">$25 per day after 3 days</h2>
          </div>
          {liDesk}
        </div>
      );
    } else if (price.nickname === "15-Yard Dupmster") {
      return (
        <div className="mt-6 space-y-4">
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">$25 per day after 3 days</p>
          </div>
          {liDesk}
        </div>
      );
    } else if (price.nickname === "5-Yard Dupmster") {
      return (
        <div className="mt-6 space-y-4">
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">$25 per day after 10 days</p>
          </div>
          {liDesk}
        </div>
      );
    } else if (price.nickname === "24 Hour Special: 20-Yard Dupmster") {
      return (
        <div className="mt-6 space-y-4">
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">$25 per day after 3 days</p>
          </div>
          {liDesk}
        </div>
      );
    }
  };
  const handleSubscription = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      "/api/payment",
      {
        priceId: price.id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    window.location.assign(data);
  };
  return (
    <div className="border-gray-100 shadow-2xl border-4 text-center mt-10 max-w-[1040px]">
      <div>
        <div className="bg-gray-100 h-28 font-bold">
          <h4 className="text-3xl">{price.nickname}</h4>
          <p className="text-[#caa450]">{dynamicSubTitle(price)}</p>
          <h3>First 2,000lbs Included</h3>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center pt-4">
            <h1 className="text-5xl font-bold">
              {(price.unit_amount / 100).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </h1>
            <h3>Additional weight just $.05 / lb</h3>
          </div>
          <ul className="flex justify-center">
            <li className="text-xl font-bold">{dynamicDescription(price)}</li>
          </ul>
          <button
            onClick={handleSubscription}
            className="mt-8 flex w-full justify-center rounded-md border border-transparent bg-[#caa450] py-2 px-4 text-sm font-medium text-white shadow-sm"
          >
            Rent This Dumpster
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
