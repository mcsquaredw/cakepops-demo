import Layout from '../components/Layout';

const Index = () => (
  <Layout>
    <section id="home">
      <div className="container">
        <div className="jumbotron mx-0 p-0">
          <h1 className="display-1 text-light p-3">
            Welcome to Cheryl's Cake Pops!
          </h1>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-grape-solid text-eggplant">
                <div className="card-title ">
                  <h4>Fresh-Made Cake Pops!</h4>
                </div>
              </div>
              <div className="card-body">
                <p className="card-text text-eggplant">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nesciunt repellendus eum, exercitationem reiciendis, ratione
                  doloremque.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-header bg-grape-solid">
                <div className="card-title">
                  <h4>Customised Cake Pops!</h4>
                </div>
              </div>
              <div className="card-body">
                <p className="card-text text-eggplant">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fuga, ut! Sunt debitis, beatae hic assumenda.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-header bg-grape-solid">
                <div className="card-title">
                  <h4>With Free Delivery!</h4>
                </div>
              </div>
              <div className="card-body">
                <p className="card-text text-eggplant">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                  quos commodi amet neque autem ducimus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <style jsx>{`
      #home {
        margin-top: 100px;
        font-family: 'Lobster', cursive;
      }

      .card {
        min-height: 250px;
      }

      .jumbotron {
        background-color: rgba(73, 39, 74, 0.8);
      }
    `}</style>
  </Layout>
);

export default Index;
