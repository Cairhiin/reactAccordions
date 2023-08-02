import Accordion from "./components/Accordion";
import Image1 from "./assets/images/image1.jpg";
import Image2 from "./assets/images/image2.jpg";
import Image3 from "./assets/images/image3.jpg";
import Image4 from "./assets/images/image4.jpg";
import Image5 from "./assets/images/image5.jpg";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <section id="accordion-1">
          <Accordion title="Accordion 1">
            <div data-title="Image 1">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et a in
                blanditiis illum nostrum tenetur quod magnam sequi voluptatem
                voluptas veritatis eum, dolorem accusantium perferendis
                voluptate illo soluta vel omnis.
              </p>
              <img src={Image1} alt="Lorem ipsum dolor" />
            </div>
            <div data-title="Image 2">
              <p>
                Nihil praesentium magni reprehenderit reiciendis nam quas
                voluptatem eveniet quam, ullam dignissimos, molestias
                exercitationem blanditiis necessitatibus culpa soluta
                laboriosam. Commodi ut dolorum laudantium saepe esse, nostrum
                exercitationem molestias unde quas.
              </p>
              <img src={Image2} alt="Lorem ipsum dolor" />
            </div>
            <div data-title="Image 3">
              <p>
                Impedit vel velit voluptatum tempora sint amet repudiandae
                praesentium tempore suscipit cumque est quisquam recusandae
                atque, non rerum soluta corrupti saepe unde temporibus porro,
                laborum sapiente nam et hic. Magnam!
              </p>
              <img src={Image3} alt="Lorem ipsum dolor" />
            </div>
            <div data-title="Image 4">
              <p>
                Cum dolore officiis animi alias sint et magni consequatur iusto
                veritatis cumque sapiente laudantium dolorum pariatur veniam,
                ad, exercitationem magnam facere nobis! Ab, explicabo molestiae
                blanditiis consequatur dolor recusandae optio.
              </p>
              <img src={Image4} alt="Lorem ipsum dolor" />
            </div>
            <div data-title="Image 5">
              <p>
                Maxime, illo atque consectetur voluptate nobis voluptas incidunt
                fuga, hic obcaecati, doloremque qui dicta alias assumenda fugit
                culpa enim itaque ipsa? Nisi repellat nam praesentium maiores
                laborum error quam amet!
              </p>
              <img src={Image5} alt="Lorem ipsum dolor" />
            </div>
          </Accordion>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
