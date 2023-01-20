import styles from "./originSection.module.scss";

import Section from "components/containers/section";

const OriginSection = (props) => {
    return (
        <Section
            id={props.id}
            containerClass={`${styles.section} glass-primary`}
        >
            <h2 className="fs-700 header-ioverse-gradient">The Origin Of IO</h2>
            <h3 className="fs-200">
                info below was copied from{" "}
                <a href="https://worldofio.fandom.com/wiki/Io">this</a> wiki
                page
            </h3>
            <p>
                &emsp; &ensp; &ensp;Io was first discovered by the inhabitants
                of Earth in either 1609 or 1610 by a human named Galileo
                Galilei. It, along with the three other moons of Jupiter, were
                the first astronomical objects recorded that orbit a planet
                other than Earth. Io was continually studied for centuries
                afterwards, with increasingly sophisticated technological means,
                in order to better understand its characteristics and place in
                the universe.
            </p>
            <p>
                &emsp; &ensp; &ensp;Some time before the fall of Auroran Prime
                (Earth), Io became inhabited by a population of magically gifted
                beings known as the Astari. The Astari, under the guidance of
                their gods Divyana and Voidranu, were able to make the moon
                capable of supporting life, and they put in place a mystical
                barrier to protect themselves from their enemies. At one time,
                this would be reserved for their immortal enemy, Kaasma, but the
                fall of Auroran Prime led to its survivors, named the Aurorans,
                to seek a new home. Thus a war began between the native Astari
                and the Auroran Federation.
            </p>
            <p>
                &emsp; &ensp; &ensp;The war carried on for a long period of
                time, until an uneasy stalemate was reached. Becoming
                increasingly more desperate, the technologically advanced
                Aurorans turned to less than ethical means to give them the
                advantage in conquering Io as their new home. To that end, they
                began the Lagos Project. Using the captured Astari named Lagos,
                the Aurorans sought to unlock the secrets of the Astari magics
                through forcibly experimenting on their subject. This also
                involved cloning the Astari multiple times and, occasionally,
                feeding him to a machine called the Inevitable to disassemble
                and analyze his genetic structure. The Aurorans eventually
                learned much of the Astari's magic as a result.
            </p>
            <p>
                &emsp; &ensp; &ensp;At one point during the stalemate the
                Aurorans enlisted one of the Lagos clones into their military
                structure, stationing him on Jupiter, which they had also fought
                the Astrai for possession of. This Lagos eventually learned the
                truth of his origins from Kaasma, the ancient enemy of his
                people. This spurred Lagos to seek revenge on his captors and
                the Astari that he believed had abandoned him to his fate. Thus,
                with the aid of Kaasma, Lagos caused the planet of Jupiter to
                undergo a catastrophic transformation turning it into the Nova.
            </p>
            <p>
                &emsp; &ensp; &ensp;The explosion wiped out much of the Auroran
                Federation's fleet and the entire populace of Io. The native
                Astari people were essentially destroyed, and Io was left devoid
                of life. The five surviving Auroran spaceships made for the now
                uninhabited moon. Though most of their people were lost and
                their resources spent, the remaining Aurorans continued their
                mission, albeit with a new caveat. Rather than they themselves
                taking the planet, they would recreate humanity and let them
                inherit this new world as their home. They thus set about their
                work, permanently landing their spaceships and transforming them
                into terraforming stations to serve as the primary means of
                facilitating their goals.
            </p>
            <p>
                &ensp; &ensp; &ensp;Io was terraformed using Auroran Prime as
                its template and new settlers were artificially created. These
                settlers included all forms of life both mundane and
                fantastical. But the most important for the Aurorans was
                humanity, which now consisted of several different subspecies
                crafted for unique purposes and lifestyles. The Aurorans wanted
                the newly made races to evolve as they had, form their own
                societies, cultures, languages and myths. To this end, the
                Auroran Repopulation Project included a Cultural program, which
                instigated the creation of two godlike beings.
            </p>
            <p>
                &ensp; &ensp; &ensp;Using the magics learned via the Lagos
                Project, the Aurorans created DIV, the God of Radiance, and
                VOID, the God of Nothingness. The two gods were designed to be
                diametrically opposed, which would lead to conflict and force
                humanity to chose sides. The gods would grant power to their
                chosen and humanity would wield magic as the Astari once had.
                The Aurorans envisioned that, once they were powerful enough,
                humanity would tire of the fetters their gods placed on them,
                and rise up to overthrow them. Such an act would see the
                ultimate potential of mortality realized, and the repopulation
                of Io, as per the Aurorans' designs, would be compete.
            </p>
        </Section>
    );
};

export default OriginSection;
