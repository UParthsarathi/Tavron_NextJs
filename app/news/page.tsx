import { Ask, Doc, Links, Section } from "@/components/Doc";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title="News | Tavron Engineers"
      description="News from Tavron Engineers: Food Pro 2023 and dispatch updates."
      path="news.html"
      image="assets/img/news/foodpro23.png"
      active="menu_news"
    >
      <Doc
        name="News"
        label="News"
        intro="Events and dispatches from Tavron Engineers."
        quote={false}
      >
        <Section id="foodpro" label="Event" title="Food Pro 2023">
          <div className="tv-doc__top">
            <figure className="tv-doc__fig">
              <img src="assets/img/news/foodpro23.png" width="721" height="487" loading="lazy" alt="The Tavron Engineers team at the Food Pro 2023 exhibition stand" data-lightbox="assets/img/news/foodpro23.png" />
            </figure>
            <div>
              <Links
                title="Read more"
                items={[
                  ["Food Pro 2023 on LinkedIn", "https://www.linkedin.com/feed/update/urn:li:activity:7120759094277275648/"],
                ]}
              />
              <Links
                title="Dispatches"
                items={[
                  ["March 2022 dispatch", "news/2022MARCHdispatch.pdf", "1.4 MB"],
                  ["February 2022 dispatch", "news/2022februarydispatch.pdf", "1.5 MB"],
                ]}
              />
            </div>
          </div>
        </Section>
        <Ask
          title="Tell us about your line."
          text="Send your capacity and product mix. We'll come back with a scheme and a budget."
          button="Contact us"
        />
      </Doc>
    </Site>
  );
}
