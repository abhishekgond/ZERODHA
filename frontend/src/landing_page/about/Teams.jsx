import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function Teams() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBio = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-wrap justify-center gap-8 mt-28 px-4">
      {/* Card 1 */}
      <div className="flex flex-col items-center text-center bg-white p-6 w-full max-w-sm space-y-4">
        <img
          src="/images/Nikhil.jpg"
          alt="Nikhil Kamath"
          className="rounded-full w-48 h-48  sm:w-64 sm:h-64 md:w-60 md:h-60  object-cover"
        />
        <h1 className="text-2xl font-semibold">Nikhil Kamath</h1>
        <h3 className="text-lg text-gray-500">Co-founder & CFO</h3>
        <button
          onClick={toggleBio}
          className="flex items-center gap-1 text-blue-600 hover:underline focus:outline-none"
        >
          Bio{" "}
          <IoIosArrowDown
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isOpen && (
          <div className="bg-gray-100 p-4 rounded-md border text-sm text-gray-700 w-full mt-2">
            <p>
              Nikhil is an astute and experienced investor, and he heads
              financial planning at Zerodha. An avid reader, he always
              appreciates a good game of chess.
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center text-center bg-white p-6 w-full max-w-sm space-y-4">
        <img
          src="/images/Kailash.jpg"
          alt="Dr. Kailash Nadh"
          className="rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-60 md:h-60 object-cover"
        />
        <h1 className="text-2xl font-semibold">Dr. Kailash Nadh</h1>
        <h3 className="text-lg text-gray-500">CTO</h3>
        <button
          onClick={toggleBio}
          className="flex items-center gap-1 text-blue-600 hover:underline focus:outline-none"
        >
          Bio{" "}
          <IoIosArrowDown
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isOpen && (
          <div className="bg-gray-100 p-4 rounded-md border text-sm text-gray-700 w-full mt-2">
            <p>
              Kailash has a PhD in Artificial Intelligence & Computational
              Linguistics, and is the brain behind all our technology and
              products. He has been a developer from his adolescence and
              continues to write code every day.
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center text-center bg-white p-6 w-full max-w-sm space-y-4">
        <img
          src="/images/Venu.jpg"
          alt="Venu Madhav"
          className="rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-60 md:h-60 object-cover"
        />
        <h1 className="text-2xl font-semibold">Venu Madhav</h1>
        <h3 className="text-lg text-gray-500">COO</h3>
        <button
          onClick={toggleBio}
          className="flex items-center gap-1 text-blue-600 hover:underline focus:outline-none"
        >
          Bio{" "}
          <IoIosArrowDown
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isOpen && (
          <div className="bg-gray-100 p-4 rounded-md border text-sm text-gray-700 w-full mt-2">
            <p>
              Venu is the backbone of Zerodha taking care of operations and
              ensuring that we are compliant to rules and regulations. He has
              over a dozen certifications in financial markets and is also
              proficient in technical analysis. Workouts, cycling, and
              adventuring is what he does outside of Zerodha.
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center text-center bg-white p-6 w-full max-w-sm space-y-4">
        <img
          src="/images/Hanan.jpg"
          alt="Hanan Delvi"
          className="rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-60 md:h-60 object-cover"
        />
        <h1 className="text-2xl font-semibold">Hanan Delvi</h1>
        <h3 className="text-lg text-gray-500">CCO</h3>
        <button
          onClick={toggleBio}
          className="flex items-center gap-1 text-blue-600 hover:underline focus:outline-none"
        >
          Bio{" "}
          <IoIosArrowDown
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isOpen && (
          <div className="bg-gray-100 p-4 rounded-md border text-sm text-gray-700 w-full mt-2">
            <p>
              We take pride in the way we support our clients, and Hanan is
              responsible for this with his never ending flow of energy. He is
              the man behind many of our support initiatives that have helped us
              stay ahead of the game. A free thinker, Hanan can be seen posing
              as one in his free time.
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center text-center bg-white p-6 w-full max-w-sm space-y-4">
        <img
          src="/images/Seema.jpg"
          alt="Seema Patil"
          className="rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-60 md:h-60 object-cover"
        />
        <h1 className="text-2xl font-semibold">Seema Patil</h1>
        <h3 className="text-lg text-gray-500">Director</h3>
        <button
          onClick={toggleBio}
          className="flex items-center gap-1 text-blue-600 hover:underline focus:outline-none"
        >
          Bio{" "}
          <IoIosArrowDown
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isOpen && (
          <div className="bg-gray-100 p-4 rounded-md border text-sm text-gray-700 w-full mt-2">
            <p>
              Seema who has lead the quality team since the beginning of
              Zerodha, is now a director. She is an extremely disciplined
              fitness enthusiast.
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center text-center bg-white p-6 w-full max-w-sm space-y-4">
        <img
          src="/images/karthik.jpg"
          alt="Karthik Rangappa"
          className="rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-60 md:h-60 object-cover"
        />
        <h1 className="text-2xl font-semibold">Karthik Rangappa</h1>
        <h3 className="text-lg text-gray-500">Chief of Education</h3>
        <button
          onClick={toggleBio}
          className="flex items-center gap-1 text-blue-600 hover:underline focus:outline-none"
        >
          Bio{" "}
          <IoIosArrowDown
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isOpen && (
          <div className="bg-gray-100 p-4 rounded-md border text-sm text-gray-700 w-full mt-2">
            <p>
              Karthik "Guru" Rangappa single handledly wrote Varsity, Zerodha's
              massive educational program. He heads investor education
              initiatives at Zerodha and loves stock markets, classic rock,
              single malts, and photography.
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center text-center bg-white p-6 w-full max-w-sm space-y-4">
        <img
          src="/images/Austin.jpg"
          alt="Austin Prakesh"
          className="rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-60 md:h-60 object-cover"
        />
        <h1 className="text-2xl font-semibold">Austin Prakesh</h1>
        <h3 className="text-lg text-gray-500">Director Strategy</h3>
        <button
          onClick={toggleBio}
          className="flex items-center gap-1 text-blue-600 hover:underline focus:outline-none"
        >
          Bio{" "}
          <IoIosArrowDown
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isOpen && (
          <div className="bg-gray-100 p-4 rounded-md border text-sm text-gray-700 w-full mt-2">
            <p>
              Austin is a successful self-made entrepreneur from Singapore. His
              area of specialty revolves around helping organisations including
              grow by optimizing revenue streams and creating growth strategies.
              He is a boxing enthusiast and loves collecting exquisite watches.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Teams;
