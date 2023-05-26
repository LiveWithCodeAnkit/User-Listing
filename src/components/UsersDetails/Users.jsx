import React from "react";
import { useGlobalContext } from "../hook/useUsers";
import loader from "../../assets/gg.gif";
const Users = () => {
  const { data, isLoading, page, total_pages, getPrevPage, getNextPage } =
    useGlobalContext();
  const isFirstPage = page === 1;
  const isLastPage = total_pages === page;
  if (isLoading) {
    return (
      <>
        <div className="loader">
          <img src={loader} alt="no img" />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="heading">
        <h1>Checkout out Users' details</h1>
      </div>
      <div className="container">
        <div className="card-first">
          {data.map((curPost) => {
            const { email, first_name, last_name, avatar } = curPost;
            return (
              <div className="card-inside">
                <img src={avatar} alt="No img" />
                <span>
                  {first_name} {last_name}
                </span>
                <span>{email}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container">
        <div className="pagination-btn">
          <button onClick={getPrevPage} disabled={isFirstPage}>
            Prev
          </button>
          <p>
            {page} of {total_pages}
          </p>
          <button onClick={getNextPage} disabled={isLastPage}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Users;
