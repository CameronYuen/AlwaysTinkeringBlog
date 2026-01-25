import React from "react";
import { Link } from "react-router-dom";

function MonthArchive() {
  return (
    <>
      <main className="mt-12 px-24 max-sm:px-4">
        <section className=" flex items-center flex-col">
          <h2 className="text-center text-5xl text-slate-800 font-semibold">
            Monthly Archive
          </h2>
          <div className="archiveContainer w-2/3 max-sm:w-11/12 mt-12 flex flex-col gap-6">
            <p className="text-center text-slate-600 text-lg">
              No posts yet. Check back soon!
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default MonthArchive;
