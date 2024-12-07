"use client";
import { useState } from "react";
import SkeletonComponent from "@/components/SkeletonComponent";
import eventsData from "./events.json";
const Events = () => {
  const [searchTerm] = useState("");
  const [selectedTag] = useState("all");
  const [eventList] = useState(eventsData);

  const filteredEvents = eventList.filter(
    (event) =>
      (selectedTag === "all" || event.tag === selectedTag) &&
      event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div
        className="w-full p-10"
        style={{
          backgroundColor: `white`,
          backgroundPosition: `center`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
        }}
      >
        <h3 className="my-[1.72rem] font-estiem text-center text-estiem lg:text-6xl md:text-5xl sm:text-4xl text-3xl uppercase font-black">
          estiem EVENTS
        </h3>

        {/* <div className="flex flex-col lg:flex-row items-center justify-center gap-4 my-4">
          <input
            type="text"
            placeholder="Search events..."
            className="p-3 border border-gray-300 rounded-lg bg-estiem text-white placeholder-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex gap-2">
            <button
              className={`p-3 border rounded-lg bg-estiem text-white ${
                selectedTag === "all" ? "bg-red-700" : ""
              }`}
              onClick={() => setSelectedTag("all")}
            >
              All
            </button>
            <button
              className={`p-3 border rounded-lg bg-estiem text-white ${
                selectedTag === "local" ? "bg-red-700" : ""
              }`}
              onClick={() => setSelectedTag("local")}
            >
              Local
            </button>
            <button
              className={`p-3 border rounded-lg bg-estiem text-white ${
                selectedTag === "international" ? "bg-red-700" : ""
              }`}
              onClick={() => setSelectedTag("international")}
            >
              International
            </button>
          </div>
        </div> */}

        <div className="lg:flex gap-20 justify-center my-[4rem] flex-wrap">
          {filteredEvents.map((event, index) => (
            <div key={index} className="event-card">
              <SkeletonComponent
                img={event.img}
                title={event.title}
                date={event.date}
                info={event.info}
                link={event.link}
                />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
