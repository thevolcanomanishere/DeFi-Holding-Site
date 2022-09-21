import DeFiCoachLogo from "/public/logo.png";
import autoAnimate from "@formkit/auto-animate";
import { getCalApi } from "@calcom/embed-react";
import { useEffect, useRef, useState } from "react";

const App = () => {
  const [show, setShow] = useState(false);
  const parent = useRef(null);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      if (cal) cal("ui", { styles: { branding: { brandColor: "#000000" } } });
    })();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <img src={DeFiCoachLogo} alt="DeFi Coach" className="w-96" />
      <div className="flex flex-row justify-center space-x-3">
        <p className="text-xl font-light text-center text-white border-b border-white">
          <a target="_blank" href="https://www.youtube.com/watch?v=k9HYC0EJU6E">
            What is DeFi?
          </a>
        </p>
        {/* <p
          onClick={() => setShow(!show)}
          className="text-xl font-light text-center text-white border-b border-white"
        >
          DeFi Video Course
        </p> */}
      </div>
      {show ? (
        <div className="flex flex-col justify-center">
          <div>Here is the text</div>
        </div>
      ) : (
        <div className="flex flex-col justify-center">
          <p className="m-auto mt-10 text-2xl text-center text-white"></p>
          <button
            className="p-4 px-4 py-2 m-auto mt-10 font-bold text-white bg-blue-600 border-b-4 border-blue-900 rounded hover:bg-blue-400 hover:border-blue-600"
            name="15 minute meeting"
            data-cal-link="alex-mcgon/15min"
          >
            Book 15 minute meeting 📆
          </button>
        </div>
      )}
    </main>
  );
};

export default App;
