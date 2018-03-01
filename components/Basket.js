const Basket = () => (
  <div>
    <button
      className="btn btn-grape-on-eggplant ml-auto dropdown-toggle"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <i className="fa fa-shopping-cart" /> Basket{' '}
      <span className="badge bg-grape-solid">2</span>
    </button>
    <div
      className="dropdown-menu dropdown-menu-right"
      aria-labelledby="dropdownMenuButton"
    >
      <div className="dropdown-item">
        <div className="row py-2 align-items-center">
          <div className="col-md-2">
            <img
              src="static/cakepops.jpg"
              alt="Cake Pops"
              className="img img-fluid d-flex flex-column"
            />
          </div>
          <div className="col-md-6">
            <h4>Cake Pops</h4>
          </div>
          <div className="col-md-3">
            <div className="input-group">
              <button className="input-group-addon">+</button>
              <input type="text" className="form-control text-center" defaultValue="25" />
              <button className="input-group-addon">-</button>
            </div>
          </div>
          <div className="col-md-1">
            <button className="btn btn-danger btn-block btn-md-inline">
              <i className="fa fa-trash display-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="dropdown-item">
        <div className="row py-2 align-items-center">
          <div className="col-md-2">
            <img
              src="static/cakepops2.jpg"
              alt=""
              className="img img-fluid d-flex flex-column"
            />
          </div>
          <div className="col-md-6">
            <h4>Other Cake Pops</h4>
          </div>
          <div className="col-md-3">
            <div className="input-group">
              <button className="input-group-addon">+</button>
              <input type="text" className="form-control text-center" defaultValue="50" />
              <button className="input-group-addon">-</button>
            </div>
          </div>
          <div className="col-md-1">
            <button className="btn btn-danger btn-block btn-md-inline">
              <i className="fa fa-trash display-5 " />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Basket;
