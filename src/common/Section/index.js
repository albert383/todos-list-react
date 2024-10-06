import { SectionContainer, SectionHeader, SectionList, SectionTitle } from "./styled";


const Section = ({ title, body, extraHeaderContent }) => (
    <SectionContainer>
        <SectionHeader>
            <SectionTitle>{title}</SectionTitle>
            {extraHeaderContent}
        </SectionHeader>
        <SectionList>{body}</SectionList>
    </SectionContainer>
);

export default Section;