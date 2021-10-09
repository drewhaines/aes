import Head from "next/head";
import Image from "next/image";
import { jsx, Box, Container, Heading, Grid, Text } from "theme-ui";

export const getStaticProps = async () => {
  let instagramPosts = [];

  try {
    let response = await fetch(IG_URL);
    const responseJson = response ? await response.json() : {};
    const instagram = responseJson.data;

    if (instagram.user.edge_owner_to_timeline_media.count > 0) {
      instagramPosts = instagram.user.edge_owner_to_timeline_media.edges;
    }
  } catch (err) {
    console.log(
      "Something went wrong while fetching content from Instagram",
      err
    );
  }

  return {
    props: {
      instagramPosts
    }
  };
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>AES - San Diego Automotive Exchange & Supply</title>
        <link rel="icon" href="logo.png" />
        <meta
          name="description"
          content="San Diego auto parts exchange and supply with over 100 years experience. "
        />
        <link rel="shortcut icon" href="logo.png" />
        <link rel="apple-touch-icon" href="logo.png" />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        <meta
          name="title"
          content="AES - San Diego Automotive Exchange & Supply"
        />
        <meta
          property="og:title"
          content="AES - San Diego Automotive Exchange & Supply"
        />
        <meta property="og:type" content="song" />
        <meta
          property="og:site_name"
          content="AES - San Diego Automotive Exchange & Supply"
        />
        <meta property="og:url" content="https://aesautosupply.com/" />
        <meta
          property="og:description"
          content="San Diego auto parts exchange and supply with over 100 years experience."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://aesautosupply.com/car-workshop.jpg"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div class="nav">
        <div class="logo_wrapper">
          <div class="logo_inner">
            <img src="/logo.png" class="logo" />
          </div>
          <span></span>
          <a
            href="https://www.ebay.com/usr/automotiveexchangeandsupply"
            target="_blank"
            class="shop_inventory"
          >
            Shop
          </a>
          <a href="#services">Services</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div class="section_wrapper">
        <Image
          alt="aes-workshop"
          src="/car-workshop.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div class="section_1">
          <h1 class="homepage_headline">
            San Diego Automotive Exchange & Supply
          </h1>
          <h2 class="homepage_subtitle">
            Quality remanufactured auto parts & services from a local business
            you can trust
          </h2>
          <a href="#services" class="see_our_services">
            See Our Services
          </a>
          <div class="aes_info">
            <a
              href="https://goo.gl/maps/54PEu17PBdUvZsZ39"
              target="_blank"
              class="aes_info_item"
            >
              4354 Twain Ave, San Diego CA 92120
            </a>
            <p class="aes_info_item_2">(619) 282-3207</p>
            <p class="hours">Mon - Fri | 8AM - 4PM</p>
            <p class="hours_2">Sat - Sun | Closed</p>
          </div>
        </div>
      </div>
      <div class="section_wrapper">
        <div class="section_2">
          <h1 id="services" class="section_2_title">
            Services
          </h1>
          <h2 class="section_2_subtitle">
            We offer applications for Automotive • Marine • Industrial • Light &
            Heavy Duty • Vintage & Obsolete
          </h2>
          <img
            src="/workshop-1-filter.jpg"
            alt="aes-workshop"
            className="aes_workshop"
          />
          <h2 class="section_2_subtitle_2">
            HYDAULIC RAMS • RACK & PINION • GEAR BOXES • POWER STREERING PUMPS •
            TURBOS • HYDRO VACS • ALTERNATORS • BLOWER MOTORS • DISTRIBUTORS •
            GENERATORS • HEATER MOTORS • REGULATORS • SOLENOIDS • STARTERS •
            STARTER DRIVES • WATER PUMPS • WINDOW LIFT MOTORS • WIPER MOTORS
          </h2>
          <h2 class="section_2_subtitle_3">
            Commercial • Industrial • Hard to Find
          </h2>
          <h2 class="section_2_subtitle_4">
            WE WELCOME THE OPPORTUNITY TO BE OF SERVICE
          </h2>
          <h2 class="section_2_subtitle_5">Over 100+ Years Experience</h2>
          <div class="image_grid">
            <img
              src="/mechanic-1.jpg"
              alt="aes-mechanic"
              className="image_grid_item"
            />
            <img src="/tire.jpg" alt="aes-tire" className="image_grid_item" />
            <img
              src="/stock-2.jpg"
              alt="aes-stock-items"
              className="image_grid_item"
            />
          </div>
        </div>
        <div class="section_wrapper">
          <div class="section_3">
            <h2 id="reviews" class="reviews">
              Reviews
            </h2>
          </div>
        </div>
        <div class="section_wrapper">
          <div class="section_4">
            <h2 id="contact" class="contact">
              Contact
            </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13417.048924991348!2d-117.1004229!3d32.7853055!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d955c721699f11%3A0x42e425b42e224100!2s4354%20Twain%20Ave%2C%20San%20Diego%2C%20CA%2092120!5e0!3m2!1sen!2sus!4v1633817526511!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: "none" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
            <img
              src="/outside-3.jpg"
              alt="aes-workshop"
              className="aes_workshop"
            />
            <img src="/logo.png" alt="aes-workshop" className="aes_workshop" />
            <div class="aes_info_2">
              <a
                href="https://goo.gl/maps/54PEu17PBdUvZsZ39"
                target="_blank"
                class="aes_info_item"
              >
                4354 Twain Ave, San Diego CA 92120
              </a>
              <p class="aes_info_item_2">(619) 282-3207</p>
              <p class="hours">Mon - Fri | 8AM - 4PM</p>
              <p class="hours_2">Sat - Sun | Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
