import Layout from '../components/Layout';

const Order = () => (
  <Layout>
    <section id="order">
      <div className="container">
        <div className="row py-3 my-5 align-items-center">
          <div className="col-md-8">
            <h1>Order Form</h1>
            <form action="#">
              <div className="input-group py-2">
                <span className="input-group-addon">
                  <i className="fa fa-birthday-cake" />
                </span>
                <select name="cake-type" className="form-control">
                  <option selected>Select Your Cake!</option>
                  <option value="vanilla">Vanilla</option>
                  <option value="chocolate">Chocolate</option>
                  <option value="chocolate-chip">Choc-Chip</option>
                  <option value="coffee">Coffee</option>
                </select>
              </div>
              <div className="input-group py-2">
                <span className="input-group-addon">
                  <i className="fa fa-stop-circle" />
                </span>
                <select name="filling-type" className="form-control">
                  <option selected>Select Your Filling!</option>
                  <option value="milk-chocolate">Milk Chocolate</option>
                  <option value="dark-chocolate">Dark Chocolate</option>
                  <option value="strawberry-jam">Strawberry Jam</option>
                  <option value="none">None</option>
                </select>
              </div>
              <div className="input-group py-2">
                <span className="input-group-addon">
                  <i className="fa fa-bullseye" />
                </span>
                <select name="coating-type" className="form-control">
                  <option className="text-muted" selected>
                    Select Your Coating!
                  </option>
                  <option value="milk-chocolate">Milk Chocolate</option>
                  <option value="dark-chocolate">Dark Chocolate</option>
                  <option value="white-chocolate">White Chocolate</option>
                  <option value="strawberry-chocolate">
                    Strawberry Chocolate
                  </option>
                </select>
              </div>
              <div className="input-group py-2">
                <span className="input-group-addon">
                  <i className="fa fa-bomb" />
                </span>
                <select name="sprinkles-type" className="form-control">
                  <option selected>Select Your Sprinkles!</option>
                  <option value="blue-and-pink">Blue and Pink Sprinkles</option>
                  <option value="silver-and-gold">
                    Silver and Gold Sprinkles
                  </option>
                  <option value="purple">Purple Sprinkles</option>
                </select>
              </div>
              <div className="input-group py-2">
                <span className="input-group-addon">How many?</span>
                <button className="input-group-addon">+</button>
                <input
                  name="quantity"
                  type="text"
                  className="form-control text-center"
                  value="1"
                />
                <button className="input-group-addon">-</button>
              </div>
              <input
                type="submit"
                className="btn btn-block btn-grape-on-eggplant"
                value="Add To Your Basket"
              />
            </form>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <img
                  src="static/cakepops2.jpg"
                  alt="Cake pops made by Cheryl"
                  className="img img-fluid"
                />
                <div className="card-img-overlay d-flex flex-column text-center justify-content-end">
                  <div>Customised Cake Pops</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <style jsx>{`
      #order {
        margin-top: 100px;
        color: #49274A;
        background-color: #94618E;
      }
    `}</style>
  </Layout>
);

export default Order;
