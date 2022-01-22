import React, { Fragment, useEffect } from "react";

import logo from "../images/IO-Logo.png";
import backgroundImage from "../images/galaxy_2.jpg";

import ResponsiveSidebar from "../components/responsiveSidebar";

import SocialLinks from "../components/socialLinks";
import SocialBtn from "../components/socialBtn";
import links from "../data/links.js";
import Hero from "../components/hero";
import Section from "../components/section";
import Footer from "../components/footer";

let introLink = links.find((link) => link.name === "Intro Video");

const Home = (props) => {
    let dummySections = [];
    for (let x = 0; x < 5; x++) {
        dummySections.push(
            <Section>
                <h2>The date according to Go is:</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Perferendis laborum quasi temporibus obcaecati doloremque!
                    Temporibus possimus ut animi voluptatibus minus nobis
                    quisquam voluptatem vero repellat. Consequuntur alias
                    deleniti neque reprehenderit? Lorem ipsum dolor sit, amet
                    consectetur adipisicing elit. Doloremque incidunt iure atque
                    labore quia in quod aut sed ad voluptatum, facilis corporis
                    magnam fuga asperiores ipsum eveniet autem eum tempore.
                    Dolorem optio quas nisi enim blanditiis at, aut quasi
                    doloribus odio esse adipisci. Corrupti excepturi error
                    dolores harum suscipit quae sequi fugiat dolor quos cum?
                    Cupiditate possimus ipsum eos voluptatem? Impedit nostrum
                    qui fugit reiciendis perspiciatis quo hic repellat
                    blanditiis provident praesentium quam, at modi porro
                    perferendis reprehenderit quidem maiores pariatur
                    voluptatibus laboriosam deleniti placeat quos ex. Illo,
                    eaque quos.
                </p>
            </Section>
        );
    }

    useEffect(() => {
        document.title = "World Of IO";
    }, []);

    return (
        <Fragment>
            <ResponsiveSidebar
                orientation="left"
                drawer={[]}
                sidebar={["vertical", "noHeader"]}
                sidebarAction="heroHide"
            >
                <h3 className="fs-600">Social Links</h3>
                <SocialLinks></SocialLinks>
            </ResponsiveSidebar>
            <ResponsiveSidebar
                orientation="right"
                drawer={[]}
                sidebar={["vertical", "noHeader"]}
                sidebarAction="heroHide"
            >
                <h3 className="fs-600">Social Links</h3>
                <SocialLinks></SocialLinks>
            </ResponsiveSidebar>

            <Hero background={backgroundImage}>
                <h1 className="fs-700 color-white">World Of IO</h1>
                <img src={logo} alt="" />
                <SocialBtn
                    link={introLink.link}
                    classes={`${introLink.classes} fs-400`}
                    name={introLink.name}
                    key={introLink.name}
                ></SocialBtn>
            </Hero>
            <Section>
                <SocialBtn
                    link={introLink.link}
                    classes={`${introLink.classes} fs-400`}
                    name={introLink.name}
                    key={introLink.name}
                ></SocialBtn>
                <h2>History Of IO</h2>
            </Section>
            {dummySections}

            <Section bgType="image" bgData={backgroundImage}>
                <h2>This is a different section</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ullam facere, tempora quisquam fugiat illo quas provident,
                    accusamus debitis harum tenetur magnam voluptatem nemo
                    soluta molestias. Tempore quisquam illum similique illo?
                    Nihil ratione earum assumenda, aliquam non omnis facere amet
                    possimus libero unde provident nobis. Minima dolorum
                    doloribus commodi quas error voluptas, ut dolores voluptatum
                    eius esse ipsum repellendus molestias temporibus. Voluptatem
                    quos excepturi ipsa cumque expedita hic ullam ab?
                    Consectetur, obcaecati quis exercitationem explicabo, cumque
                    consequuntur architecto autem animi culpa, ipsum optio quas
                    expedita rerum iusto dignissimos maxime a harum? Commodi,
                    magni mollitia doloremque velit tenetur alias magnam eaque
                    harum quasi hic soluta nobis laborum at ea quae adipisci
                    animi expedita, iusto non optio reprehenderit id reiciendis.
                    Eum, ipsum tempora!
                </p>
            </Section>
            <Section bgType="color" bgData="var(--color-primary)">
                <h2>This is a different section</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ullam facere, tempora quisquam fugiat illo quas provident,
                    accusamus debitis harum tenetur magnam voluptatem nemo
                    soluta molestias. Tempore quisquam illum similique illo?
                    Nihil ratione earum assumenda, aliquam non omnis facere amet
                    possimus libero unde provident nobis. Minima dolorum
                    doloribus commodi quas error voluptas, ut dolores voluptatum
                    eius esse ipsum repellendus molestias temporibus. Voluptatem
                    quos excepturi ipsa cumque expedita hic ullam ab?
                    Consectetur, obcaecati quis exercitationem explicabo, cumque
                    consequuntur architecto autem animi culpa, ipsum optio quas
                    expedita rerum iusto dignissimos maxime a harum? Commodi,
                    magni mollitia doloremque velit tenetur alias magnam eaque
                    harum quasi hic soluta nobis laborum at ea quae adipisci
                    animi expedita, iusto non optio reprehenderit id reiciendis.
                    Eum, ipsum tempora!
                </p>
            </Section>
            <Section bgType="color" bgData="blue">
                <h2>This is a different section</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ullam facere, tempora quisquam fugiat illo quas provident,
                    accusamus debitis harum tenetur magnam voluptatem nemo
                    soluta molestias. Tempore quisquam illum similique illo?
                    Nihil ratione earum assumenda, aliquam non omnis facere amet
                    possimus libero unde provident nobis. Minima dolorum
                    doloribus commodi quas error voluptas, ut dolores voluptatum
                    eius esse ipsum repellendus molestias temporibus. Voluptatem
                    quos excepturi ipsa cumque expedita hic ullam ab?
                    Consectetur, obcaecati quis exercitationem explicabo, cumque
                    consequuntur architecto autem animi culpa, ipsum optio quas
                    expedita rerum iusto dignissimos maxime a harum? Commodi,
                    magni mollitia doloremque velit tenetur alias magnam eaque
                    harum quasi hic soluta nobis laborum at ea quae adipisci
                    animi expedita, iusto non optio reprehenderit id reiciendis.
                    Eum, ipsum tempora!
                </p>
            </Section>
            <Section bgType="image" bgData={backgroundImage}>
                <h2>This is a different section</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ullam facere, tempora quisquam fugiat illo quas provident,
                    accusamus debitis harum tenetur magnam voluptatem nemo
                    soluta molestias. Tempore quisquam illum similique illo?
                    Nihil ratione earum assumenda, aliquam non omnis facere amet
                    possimus libero unde provident nobis. Minima dolorum
                    doloribus commodi quas error voluptas, ut dolores voluptatum
                    eius esse ipsum repellendus molestias temporibus. Voluptatem
                    quos excepturi ipsa cumque expedita hic ullam ab?
                    Consectetur, obcaecati quis exercitationem explicabo, cumque
                    consequuntur architecto autem animi culpa, ipsum optio quas
                    expedita rerum iusto dignissimos maxime a harum? Commodi,
                    magni mollitia doloremque velit tenetur alias magnam eaque
                    harum quasi hic soluta nobis laborum at ea quae adipisci
                    animi expedita, iusto non optio reprehenderit id reiciendis.
                    Eum, ipsum tempora!
                </p>
            </Section>
            <Section>
                <h2>This is a different section</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ullam facere, tempora quisquam fugiat illo quas provident,
                    accusamus debitis harum tenetur magnam voluptatem nemo
                    soluta molestias. Tempore quisquam illum similique illo?
                    Nihil ratione earum assumenda, aliquam non omnis facere amet
                    possimus libero unde provident nobis. Minima dolorum
                    doloribus commodi quas error voluptas, ut dolores voluptatum
                    eius esse ipsum repellendus molestias temporibus. Voluptatem
                    quos excepturi ipsa cumque expedita hic ullam ab?
                    Consectetur, obcaecati quis exercitationem explicabo, cumque
                    consequuntur architecto autem animi culpa, ipsum optio quas
                    expedita rerum iusto dignissimos maxime a harum? Commodi,
                    magni mollitia doloremque velit tenetur alias magnam eaque
                    harum quasi hic soluta nobis laborum at ea quae adipisci
                    animi expedita, iusto non optio reprehenderit id reiciendis.
                    Eum, ipsum tempora!
                </p>
            </Section>
            <Footer
                className="color-white"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></Footer>
        </Fragment>
    );
};

export default Home;
