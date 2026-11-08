import { Ask, Doc } from "@/components/Doc";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title="Videos | Tavron Engineers"
      description="Videos of Tavron Engineers equipment and plants."
      path="videos.html"
      image="assets/img/hero/hero-aisle.jpg"
      active="menu_videos"
    >
      <Doc
        name="Videos"
        label="Videos"
        intro="There are no videos here yet. Our brochures show the equipment and plants we build."
        quote={false}
      >
        <div className="tv-doc__cta">
          <a href="downloads.html" className="tv-btn tv-btn--primary">
            {"Brochures & downloads "}
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
        <Ask
          title="Tell us about your line."
          text="Send your capacity and product mix. We'll come back with a scheme and a budget."
          button="Contact us"
        />
      </Doc>
    </Site>
  );
}
