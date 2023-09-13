function Dashboard() {
  return (
    <div className="m-3">
      <h1>Dashboard</h1>
      <hr />
      <div className="ms-3">
        <h2>Published Courses (24)</h2>
        <hr />
        <div className="d-flex flex-row flex-wrap">
          <div className="m-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src="/images/react.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/kanbas/courses/home" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="m-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src="/images/react.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="m-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src="/images/react.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="m-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src="/images/react.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
