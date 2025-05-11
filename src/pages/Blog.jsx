import React from "react";

const Blog = () => {
  return (
    <>
      <section className="px-3 py-18 overflow-hidden">
        <div className="container">
          <div className="flex flex-col gap-20">
            <div
              className="flex flex-col justify-between gap-10
          md:flex-row"
            >
              <h1
                className="text-[80px] text-prmiaryColor font-headerFont font-bold max-w-xl leading-25
            md:text-[110px]"
              >
                We always think
              </h1>
              <div className="flex flex-col gap-15">
                <small className="inline-block text-[22px] text-prmiaryColor font-textFont max-w-sm">
                  always think Add the best talent on the market, an agile
                  skilled management & seamless involvement
                </small>
                <div className="flex gap-2 md:gap-10">
                  <div>
                    <p className=" text-[35px] text-prmiaryColor font-textFont max-w-sm">
                      400+
                    </p>
                    <p className=" text-[22px] text-prmiaryColor font-textFont max-w-sm">
                      total post
                    </p>
                  </div>
                  <div>
                    <p className=" text-[35px] text-prmiaryColor font-textFont max-w-sm">
                      {" "}
                      99 +
                    </p>
                    <p className=" text-[22px] text-prmiaryColor font-textFont max-w-sm">
                      Blog writer
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 ">
              <div className="grid grid-cols-2 gap-5 ">
                <div className="blog_back rounded-xl rounded-bl-none rounded-tr-none"></div>
                <div className="blog_back rounded-xl rounded-tl-none rounded-br-none"></div>
              </div>
              <div className="grid grid-cols-2 gap-5 ">
                <div className="blog_back rounded-xl rounded-tl-none rounded-br-none"></div>
                <div className="blog_back rounded-xl rounded-tr-none rounded-bl-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
