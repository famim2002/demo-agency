import React from "react";

const Question = () => {
  return (
    <section className="px-3 py-24">
      <div className="container">
        <div className="flex">
          <div>
            <h2
              className="text-[50px] text-prmiaryColor font-semibold font-headerFont max-w-md leading-15 
                                      md:text-[75px] md:leading-20"
            >
              FREQUENTLY ASKED QUESTIONS.,'?'{" "}
            </h2>
            <p className="text-[20px] text-sceondryColor font-medium font-textFont max-w-sm">
              Frequently asked question (FAQ) pages to find answars.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
