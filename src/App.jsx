import "./App.css";
import Badge from "./components/Badge";
import Banner from "./components/Banner/index";
import Card from "./components/Card/index";
import Testimonials from "./components/Testimonials/index";

function App() {
  return (
    <main>
      <h1>Component Library</h1>
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
      <h2>Banners</h2>
      <section className="banner-section">
        <div className="banner-container-multiline">
          <Banner className="multiline" type="success">
            <div className="banner">
              <Banner.Success />
              <div className="information">
                <Banner.Title>Congratulations!</Banner.Title>
                <Banner.Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptatibus rerum aperiam facilis animi reprehenderit rem
                  dicta quasi adipisci minus.
                </Banner.Text>
              </div>
            </div>
          </Banner>

          <Banner className="multiline" type="attention">
            <div className="banner">
              <Banner.Attention />
              <div className="information">
                <Banner.Title>Attention!</Banner.Title>
                <Banner.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  labore magni nobis doloremque libero temporibus unde eos
                  corporis possimus eaque quasi distinctio cumque rem odit est,
                  veniam ab. Autem, animi.
                </Banner.Text>
              </div>
            </div>
          </Banner>

          <Banner className="multiline" type="error">
            <div className="banner">
              <Banner.Error />
              <div className="information">
                <Banner.Title>
                  There is a problem with your application!
                </Banner.Title>
                <Banner.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur, exercitationem pariatur? Illo omnis, ipsam,
                  accusantium assumenda recusandae saepe.
                </Banner.Text>
              </div>
            </div>
          </Banner>

          <Banner className="multiline" type="information">
            <div className="banner">
              <Banner.Information />
              <div className="information">
                <Banner.Title>Update available</Banner.Title>
                <Banner.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur.
                </Banner.Text>
              </div>
            </div>
          </Banner>
        </div>
        <div className="banner-container-singleline">
          <Banner className="singleline" type="success">
            <div className="banner">
              <Banner.Success />
              <div className="information">
                <Banner.Title>Congratulations!</Banner.Title>
              </div>
            </div>
          </Banner>

          <Banner className="singleline" type="attention">
            <div className="banner">
              <Banner.Attention />
              <div className="information">
                <Banner.Title>Attention!</Banner.Title>
              </div>
            </div>
          </Banner>

          <Banner className="singleline" type="error">
            <div className="banner">
              <Banner.Error />
              <div className="information">
                <Banner.Title>
                  There is a problem with your application!
                </Banner.Title>
              </div>
            </div>
          </Banner>

          <Banner className="singleline" type="information">
            <div className="banner">
              <Banner.Information />
              <div className="information">
                <Banner.Title>Update available</Banner.Title>
              </div>
            </div>
          </Banner>
        </div>
      </section>
      <h2>Cards</h2>
      <section className="card-section">
        <Card>
          <Card.Icon />
          <Card.Title>Easy Deployment</Card.Title>
          <Card.Text>
            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
            magna sit morbi lobortis.
          </Card.Text>
        </Card>
      </section>
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
