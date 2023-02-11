import React from "react";

const Skeleton = () => {
  const skeletonItems = [...Array(10).keys()];
  return (
    <>
      <div className="flex flex-wrap justify-center items-start">
        {skeletonItems.map((_, idx) => {
          return (
            <div key={idx} class="p-4 max-w-sm w-64 ">
              <div class="animate-pulse flex space-x-4">
                <div class="flex-1 space-y-6 py-1">
                  <div class="space-y-3">
                    <div class="h-40 dark:bg-slate-500 bg-slate-700 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Skeleton;
