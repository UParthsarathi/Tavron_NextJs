import { Doc, Links, More } from "@/components/Doc";
import { Site } from "@/components/Site";

export default function Page() {
  return (
    <Site
      title="Contact Tavron Engineers | Chennai, India"
      description="Contact Tavron Engineers, Chennai: office in Kolathur, factory in Manali New Town. Call +91 91766 10713 or email sales@tavron.net."
      path="contact.html"
      image="assets/img/hero/hero-aisle.jpg"
      active="menu_contact"
    >
      <Doc
        name="Contact"
        title="Contact Tavron Engineers"
        label="Contact"
        intro="Tell us about your product, capacity and site, and we'll come back with a scheme and a budget. You can also call, email or message us on WhatsApp."
        quote={false}
      >
        <div className="tv-doc__top">
          <form role="form" className="php-email-form tv-form tv-doc__form">
            <div className="form-group">
              <label htmlFor="name">Your name</label>
              <input type="text" name="name" id="name" autoComplete="name" data-rule="minlen:4" data-msg="Please enter at least 4 characters" />
              <div className="validate"></div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" autoComplete="email" data-rule="email" data-msg="Please enter a valid email" />
              <div className="validate"></div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" name="subject" id="subject" placeholder="Product or plant you need" data-rule="minlen:4" data-msg="Please enter at least 4 characters" />
              <div className="validate"></div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows={5} placeholder="Capacity, product mix, site" data-rule="required" data-msg="Please write something for us"></textarea>
              <div className="validate"></div>
            </div>
            <div className="tv-form__actions">
              <div className="loading">Sending</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
              <button type="submit" className="tv-btn tv-btn--primary">
                {"Send enquiry "}
                <i className="ri-send-plane-line"></i>
              </button>
            </div>
          </form>
          <div className="tv-doc__stack">
            <dl className="tv-doc__dl">
              <div>
                <dt>Office</dt>
                <dd>AF-1, Aiswaryam No. 25-A, Redhills Road, Kolathur, Near Kolathur Indian Bank, Chennai – 600 099</dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href="tel:+919176610713">+91 91766 10713</a>
                  <br />
                  <a href="tel:+914442866905">+91 44 4286 6905</a>
                  <br />
                  <a href="tel:+914425567211">+91 44 2556 7211</a>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd><a href="mailto:sales@tavron.net">sales@tavron.net</a></dd>
              </div>
              <div>
                <dt>Factory</dt>
                <dd>38-42, Arulmurugan Nagar, Vichoor Post, Near Infant Jesus Church, Manali New Town, Chennai – 600 103</dd>
              </div>
              <div>
                <dt>Factory phone</dt>
                <dd><a href="tel:+919177610727">+91 91776 10727</a></dd>
              </div>
              <div>
                <dt>Factory email</dt>
                <dd><a href="mailto:factory@tavron.net">factory@tavron.net</a></dd>
              </div>
            </dl>
            <figure className="tv-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d124338.44112280071!2d80.1495901!3d13.1260073!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52645cffffffff%3A0xe003b49ec5d7ab46!2sTavron%20Engineers%20India%20(P)%20Ltd!5e0!3m2!1sen!2sin!4v1631876339798!5m2!1sen!2sin" title="Map showing Tavron Engineers, Chennai" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen></iframe>
            </figure>
          </div>
        </div>
        <More>
          <div>
            <Links
              title="Before you write"
              items={[
                ["Brochures & downloads", "downloads.html"],
                ["Company profile", "about.html"],
              ]}
            />
          </div>
        </More>
      </Doc>
    </Site>
  );
}
