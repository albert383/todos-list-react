import { ContainerWrapper } from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";

const Author = () => (
    <ContainerWrapper>
        <Header
            title="O autorze" />
        <Section
            title="Albert Cieśla"
            body={
                <><p><strong>O mnie</strong></p>
                    <p>Mam szerokie zainteresowania, które obejmują różnorodne dziedziny.
                        <strong>Motoryzacja</strong> jest jedną z moich największych pasji. Uwielbiam śledzić nowinki techniczne związane z samochodami, a także testować najnowsze modele na drogach. Jazda samochodem sprawia mi ogromną satysfakcję, a możliwość zgłębiania technologii motoryzacyjnych pozwala mi na połączenie przyjemności z nauką.</p>
                    <p>Oprócz motoryzacji, regularnie dbam o swoją formę fizyczną.
                        <strong>Siłownia</strong> to miejsce, gdzie nie tylko wzmacniam ciało, ale i odpoczywam psychicznie. W połączeniu z <em>bieganiem</em>, aktywność fizyczna pozwala mi utrzymywać dobrą kondycję i poczucie spełnienia. W zimie natomiast, <em>jazda na nartach</em> daje mi możliwość aktywnego spędzenia czasu na świeżym powietrzu, co świetnie dopełnia moje sportowe pasje.</p>
                    <p>W chwilach, gdy potrzebuję wyciszenia, sięgam po
                        <strong>książki rozwojowe</strong>. Uwielbiam literaturę, która poszerza horyzonty, inspiruje do działania oraz uczy nowych umiejętności. Czytanie to mój sposób na relaks oraz stały rozwój osobisty. Zawsze szukam nowych pozycji, które pozwalają mi spojrzeć na świat z innej perspektywy.</p>
                </>
            }
        />
    </ContainerWrapper>
);

export default Author;