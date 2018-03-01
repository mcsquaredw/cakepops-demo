import Layout from '../components/Layout';

export default () => (
  <Layout>
    <section id="about">
      <div className="container">
        <div className="row py-3 my-5 align-items-center">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <img
                  src="static/cheryl-thumb.jpg"
                  alt="The Baker"
                  className="img img-fluid"
                />
                <div className="card-img-overlay d-flex flex-column text-center justify-content-end">
                  <div>The Baker</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <h1>About the Baker</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
              dolorum porro aliquid esse nobis libero quidem error saepe, ut
              tempore sapiente amet voluptatem veniam consequatur ea modi,
              cumque nesciunt! Maiores.
            </p>
          </div>
        </div>
      </div>
    </section>
    <style jsx>{`
      #about {
        margin-top: 100px;
        color: #94618e;
        background-color: #49274a;
      }

      .card-img-overlay div {
        background-color: rgba(73, 39, 74, 0.8);
      }
    `}</style>
  </Layout>
);
