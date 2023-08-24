import { DrawlerCards } from "../ui/components/CardsContainer";
import { Page, PageContainer } from "../ui/styles/Container";
import { PageContent } from "./PageContent";

  
  export const DynamicPage = ({ route }) => {
    const { pageContent } = route;

    return (
      <Page>
        <PageContainer>
          {pageContent.map((content, index) => (
            <PageContent key={index} content={content} />
          ))}
        <div></div>
        <div></div>
        </PageContainer>
        <DrawlerCards/>
      </Page>

    );
  };