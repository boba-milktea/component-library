import "./App.css";
import Badge from "./components/Badge";
import Banner from "./components/Banner/index";
import Card from "./components/Card/index";
import Testimonials from "./components/Testimonials/index";

function App() {
  return (
    <main>
      <h1>Component Library</h1>

      {/* ====================== Bades ====================== */}
      <h2>Badges</h2>
      <section className="badge-section">
        <div class="square-badges">
          <Badge color="gray" className="square">
            Badge
          </Badge>
          <Badge color="red" className="square">
            Badge
          </Badge>
          <Badge color="yellow" className="square">
            Badge
          </Badge>
          <Badge color="green" className="square">
            Badge
          </Badge>
          <Badge color="blue" className="square">
            Badge
          </Badge>
          <Badge color="indigo" className="square">
            Badge
          </Badge>
          <Badge color="purple" className="square">
            Badge
          </Badge>
          <Badge color="pink" className="square">
            Badge
          </Badge>
        </div>
        <div class="pill-badges">
          <Badge color="gray" className="pill">
            Badge
          </Badge>
          <Badge color="red" className="pill">
            Badge
          </Badge>
          <Badge color="yellow" className="pill">
            Badge
          </Badge>
          <Badge color="green" className="pill">
            Badge
          </Badge>
          <Badge color="blue" className="pill">
            Badge
          </Badge>
          <Badge color="indigo" className="pill">
            Badge
          </Badge>
          <Badge color="purple" className="pill">
            Badge
          </Badge>
          <Badge color="pink" className="pill">
            Badge
          </Badge>
        </div>
      </section>

      {/* ====================== Banners ====================== */}
      <h2>Banners</h2>
      <section className="banner-section">
        <div className="banner-container-multiline">
          <Banner className="multiline" type="success">
            <Banner.Success>
              <img src="../src/assets/check-circle.png" alt="success icon" />
            </Banner.Success>
            <Banner.Text>
              <Banner.Title>Congratulations!</Banner.Title>
              <Banner.Description>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatibus rerum aperiam facilis animi reprehenderit rem dicta
                quasi adipisci minus.
              </Banner.Description>
            </Banner.Text>
          </Banner>
          <Banner className="multiline" type="attention">
            <Banner.Attention>
              <img src="../src/assets/exclamation.png" alt="Attention icon" />
            </Banner.Attention>
            <Banner.Text>
              <Banner.Title>Attention!</Banner.Title>
              <Banner.Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                labore magni nobis doloremque libero temporibus unde eos
                corporis possimus eaque quasi distinctio cumque rem odit est,
                veniam ab. Autem, animi.
              </Banner.Description>
            </Banner.Text>
          </Banner>

          <Banner className="multiline" type="error">
            <Banner.Error>
              <img src="../src/assets/x-circle.png" alt="Error icon" />
            </Banner.Error>
            <Banner.Text>
              <Banner.Title>
                There is a problem with your application!
              </Banner.Title>
              <Banner.Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, exercitationem pariatur? Illo omnis, ipsam,
                accusantium assumenda recusandae saepe.
              </Banner.Description>
            </Banner.Text>
          </Banner>

          <Banner className="multiline" type="information">
            <Banner.Information>
              <img src="../src/assets/icon.png" alt="Information icon" />
            </Banner.Information>
            <Banner.Text>
              <Banner.Title>Update available</Banner.Title>
              <Banner.Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur.
              </Banner.Description>
            </Banner.Text>
          </Banner>
        </div>

        <div className="banner-container-singleline">
          <Banner className="singleline" type="success">
            <Banner.Success>
              <img src="../src/assets/check-circle.png" alt="success icon" />
            </Banner.Success>
            <Banner.Text>
              <Banner.Title>Congratulations!</Banner.Title>
            </Banner.Text>
          </Banner>
          <Banner className="singleline" type="attention">
            <Banner.Attention>
              <img src="../src/assets/exclamation.png" alt="Attention icon" />
            </Banner.Attention>
            <Banner.Text>
              <Banner.Title>Attention!</Banner.Title>
            </Banner.Text>
          </Banner>
          <Banner className="singleline" type="error">
            <Banner.Error>
              <img src="../src/assets/x-circle.png" alt="Error icon" />
            </Banner.Error>
            <Banner.Text>
              <Banner.Title>
                There is a problem with your application!
              </Banner.Title>
            </Banner.Text>
          </Banner>
          <Banner className="singleline" type="information">
            <Banner.Information>
              <img src="../src/assets/icon.png" alt="Information icon" />
            </Banner.Information>
            <Banner.Text>
              <Banner.Title>Update available!</Banner.Title>
            </Banner.Text>
          </Banner>
        </div>
      </section>

      {/* ====================== Cards ====================== */}
      <h2>Cards</h2>
      <section className="card-section">
        <Card>
          <Card.Icon>
            <img src="../src/assets/upload-icon.png" alt="upload icon" />
          </Card.Icon>
          <Card.Title>Easy Deployment</Card.Title>
          <Card.Text>
            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
            magna sit morbi lobortis.
          </Card.Text>
        </Card>
      </section>

      {/* ====================== Testimonials ====================== */}
      <h2>Testimonials</h2>
      <section className="testimonials">
        <Testimonials>
          <Testimonials.Img>
            <img src="../../../src/assets/image.png" alt="testimonial image" />
          </Testimonials.Img>
          <Testimonials.Text>
            <Testimonials.Icon>
              <img src="../../../src/assets/quote-icon.png" alt="quote icon" />
            </Testimonials.Icon>
            <Testimonials.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
              nulla vitae laoreet augue. Amet feugiat est integer dolor auctor
              adipiscing nunc urna, sit.
            </Testimonials.Description>
            <Testimonials.Signature>
              May Andersons <br /> Workcation, CTO
            </Testimonials.Signature>
          </Testimonials.Text>
          {/*
        <Testimonials.Text>
            <Testimonials.Icon>
              <img src="../../../src/assets/quote-icon.png" alt="quote icon" />
            </Testimonials.Icon>
            <Testimonials.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
              nulla vitae laoreet augue. Amet feugiat est integer dolor auctor
              adipiscing nunc urna, sit.
            </Testimonials.Description>
            <Testimonials.Signature>
              May Andersons <br /> Workcation, CTO
            </Testimonials.Signature>
          </Testimonials.Text> */}
        </Testimonials>
      </section>
    </main>
  );
}

export default App;
