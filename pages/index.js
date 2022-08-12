import { useEffect, useState } from "react";
import useSWR from "swr";
import AppButton from "../components/AppButton";
import Slider from "../components/AppSlider";

export default function Home() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data: dataSlides } = useSWR("/api/slider", fetcher);
  const { data: data } = useSWR("/api/data", fetcher);
  const [labels, setLabels] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [tabActive, setTabActive] = useState(0);

  useEffect(() => {
    document.body.classList.add("bg-gray-100");
  }, []);

  useEffect(() => {
    if (data) {
      data.forEach((item) => {
        setLabels((prev) => [...prev, item.label]);
        setDescriptions((prev) => [...prev, item.description]);
      });
    }
  }, [data]);

  return (
    <div>
      <Slider slides={dataSlides} />
      <div className="relative -top-14 container mx-auto">
        <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 shadow sm:flex">
          {labels.map((label, index) => (
            <li className="w-full" key={index}>
              <AppButton
                className={`inline-block p-4 w-full text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 active focus:outline-none ${
                  index === tabActive ? "bg-gray-200" : ""
                }`}
                aria-current="page"
                onClick={() => setTabActive(index)}
              >
                {label}
              </AppButton>
            </li>
          ))}
        </ul>
        <div className="mt-10 bg-white pb-10">
          {descriptions.map((item, index) => (
            <div
              className={` ${index === tabActive ? "block" : "hidden"}`}
              key={index}
            >
              {typeof item === "object" ? (
                <div className="p-3 flex gap-10">
                  {item.map((content, index) => (
                    <div key={index}>
                      <h1 className="text-xl mb-1 mt-5" key={index}>
                        {content.llabel.toUpperCase()}
                      </h1>
                      <p className="text-sm">{content.ldesc}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-3">{item}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
