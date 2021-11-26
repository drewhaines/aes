import { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { jsx, Box, Container, Heading, Grid, Text } from "theme-ui";
import SwiperCore, { Lazy, Navigation, Autoplay } from "swiper";
SwiperCore.use([Lazy, Navigation, Autoplay]);
import Swiper from "react-id-swiper";

import "swiper/swiper-bundle.min.css";

const reviews = [
  {
    name: "Dave W.",
    review:
      "Best place in town with great prices along with knowledgeable and friendly staff.  Highly recommend."
  },
  {
    name: "Bert A.",
    review:
      "These guys know their stuff and the prices are very good.  If I could give 100 stars I would."
  },
  {
    name: "Tom M.",
    review:
      "Mark and his team stand behind their work and have the best prices in town. \n\nIf you need a starter or alternator this is the place to go. I've had them rebuild  my rare boat starter, alternator and even an electric motor for an industrial garage door. These guys are good at what they do."
  },
  {
    name: "Marrion O.",
    review:
      "The employees here are super helpful and knowledgeable. Ben went out of his way to help me quickly and efficiently. Thanks guys for running a well managed place!"
  },
  {
    name: "Jacob R.",
    review:
      "Very knowledgable staff! I have brought several alternators and steering gear boxes for rebuild here over the years and have never been disappointed. Prices are very fair."
  },
  {
    name: "Joshua C.",
    review:
      "We've been using these guys for years at Evolve Custom Automotive Restoration, to rebuild our steering boxes, generators, alternators, starters. They're full-service, fast, and very reasonable on cost."
  },
  {
    name: "Ramiro G.",
    review:
      "Had a very difficult time removing a bad alternator out of a 2004 Ford Escape 3.0L.  Did not trust buying a rebuilt replacement from the auto parts stores. Took it here on a rainy day in SD.  \n\nMark took really good care of me and had my alternator professionally rebuilt on the premises in less than an hour. These folks are experts on these matters and always stand behind their work."
  },
  {
    name: "Kevin C.",
    review:
      "I originally went to AES years ago on a recommendation from other professionals in my business, offshore charter fishing. I have always been impressed with the level of service and quality work they provide. \n\nToday one of my alternators malfunctioned and I needed an upgrade and replacement. The new alternator works great and now I can do my job. Thanks to Justin, Greg, Mark and all the friendly staff there at AES."
  }
];

export default function Home() {
  const ref = useRef(null);

  const goNext = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slidePrev();
    }
  };

  return (
    <div>
      <Head>
        <title>AES - Automotive Exchange & Supply Inc., of CA</title>
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
          content="AES - Automotive Exchange & Supply Inc., of CA"
        />
        <meta
          property="og:title"
          content="AES - Automotive Exchange & Supply Inc., of CA"
        />
        <meta property="og:type" content="song" />
        <meta
          property="og:site_name"
          content="AES - Automotive Exchange & Supply Inc., of CA"
        />
        <meta property="og:url" content="https://aesrebuilders.com/" />
        <meta
          property="og:description"
          content="San Diego auto parts exchange and supply with over 100 years experience."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://aesrebuilders.com/aes-outside.jpg"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <div class="nav">
        <div class="logo_wrapper">
          <div class="logo_inner">
            <img src="/logo.png" class="logo" />
          </div>
          <a
            href="https://www.ebay.com/str/aessandiego"
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
          src="/aes-outside.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div class="section_1">
          <h1 class="homepage_headline">
            Automotive Exchange & Supply Inc., of CA
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
              href="https://goo.gl/maps/xbchMMxHsa14QnUN6"
              target="_blank"
              class="aes_info_item"
            >
              303 W 35th St. Suite #D, National City, CA 91950
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
            We offer applications for: <br />
            <span>
              Automotive • Marine • Commercial • Industrial • Light & Heavy Duty
              • Vintage & Obsolete • Hard to Find
            </span>
          </h2>
          <img
            src="/front-counter.jpg"
            alt="aes-workshop"
            className="aes_workshop"
          />
          <h2 class="section_2_subtitle_2">
            HYDRAULIC RAMS • HYDRAULIC MOTORS & PUMPS • RACK & PINION • GEAR
            BOXES • POWER STREERING PUMPS • HYDROBOOSTERS • ALTERNATORS •
            DISTRIBUTORS • BLOWER MOTORS • GENERATORS • HEATER MOTORS •
            REGULATORS • SOLENOIDS • STARTERS • STARTER DRIVES • WINDOW LIFT
            MOTORS • WIPER MOTORS • WINDLASSES
          </h2>
          <h2 class="section_2_subtitle_4">
            If you need help with a motor or related equipment, we can help!
          </h2>
          <a href="#contact" class="contact_us">
            Contact Us
          </a>
          <h2 class="section_2_subtitle_5">Over 100+ Years Experience</h2>
          <div class="image_grid">
            <img src="/shop.jpg" alt="aes-shop" className="image_grid_item" />

            <img
              src="/inventory-2.jpg"
              alt="aes-inventory"
              className="image_grid_item"
            />
            <img
              src="/inventory.jpg"
              alt="aes-inventory"
              className="image_grid_item"
            />
          </div>
        </div>
        <div class="section_wrapper">
          <div class="section_3">
            <h2 id="reviews" class="reviews">
              Reviews
            </h2>
            <Container mt={5} sx={{ maxWidth: "800px" }}>
              <Swiper autoplay={{ delay: 8000 }} loop ref={ref}>
                {reviews.map((review) => (
                  <Box sx={itemStyle}>
                    <Box sx={{ mb: 2, fontSize: 18 }}>{review.name}</Box>
                    <Box sx={{ mb: 2 }}>
                      {[1, 2, 3, 4, 5].map((index) => (
                        <i
                          class="fa fa-star"
                          style={{ fontSize: "24px", color: "#F6CB03" }}
                        ></i>
                      ))}
                    </Box>

                    <Box sx={{ fontSize: 18, whiteSpace: "pre-wrap" }}>
                      {review.review}
                    </Box>
                  </Box>
                ))}
              </Swiper>
            </Container>
            <Grid
              sx={{
                gridTemplateColumns: "1fr auto 1fr auto 1fr",
                mt: 5
              }}
            >
              <span></span>
              <Box
                sx={{
                  background: "white",
                  color: "black",
                  padding: 3,
                  borderRadius: "8px"
                }}
                onClick={goPrev}
              >
                Prev
              </Box>

              <span></span>
              <Box
                sx={{
                  background: "white",
                  color: "black",
                  padding: 3,
                  borderRadius: "8px"
                }}
                onClick={goNext}
              >
                Next
              </Box>

              <span></span>
            </Grid>
            <h2 class="section_2_subtitle_6">
              We appreciate the opportunity to be of service and will do our
              absolute best!
            </h2>
          </div>
        </div>
        <div class="section_wrapper">
          <div class="section_4">
            <h2 id="contact" class="contact">
              Contact
            </h2>
            <Container>
              <Grid
                sx={{
                  gridTemplateColumns: ["1fr", "auto 1fr"],
                  mt: 8,
                  gridGap: ["8px", "15px"],
                  fontSize: ["16px", "18px"],
                  margin: "auto",
                  width: "auto",
                  p: 5
                }}
                className="info-grid"
              >
                <Box>Phone</Box>
                <Box>(619) 282-3207</Box>
                <Box>Email</Box>
                <Box>sales@automotiveexchangesupply.com</Box>
                <Box>Fax</Box>
                <Box>(619) 677-2790</Box>
                <Box>Address</Box>
                <Box>
                  <a
                    href="https://goo.gl/maps/xbchMMxHsa14QnUN6"
                    target="_blank"
                    className="address-link"
                  >
                    303 W 35th St. Suite #D, National City, CA 91950
                  </a>
                </Box>
                <Box>Hours</Box>
                <Box>
                  <Box>Mon - Fri | 8AM - 4PM</Box>
                  <Box>Sat - Sun | Closed</Box>
                </Box>
              </Grid>
              <Grid sx={{ gridTemplateColumns: ["1fr", "1fr 1fr"], mt: 0 }}>
                <Box>
                  <img
                    src="/aes-outside.jpg"
                    alt="aes-workshop"
                    className="aes-outside"
                  />
                </Box>
                <Box>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107498.95859999857!2d-117.17018084179684!3d32.65032989999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d955c722415a15%3A0x19cc56b31a97ff20!2sAutomotive%20Exchange%20%26%20Supply-Ca!5e0!3m2!1sen!2sus!4v1634162338841!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: "none", minHeight: "300px" }}
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </Box>
              </Grid>
              <Grid sx={{ alignItems: "center", justifyContent: "center" }}>
                <img src="/logo.png" alt="aes-logo" className="aes_logo" />
                <p className="winner">Be a Winner</p>
                <p className="rights">
                  {`Automotive Exchange & Supply Inc., of CA `}
                </p>
                <p className="rights">{`All rights reserved `}</p>

                <p className="rights">{`1993-${new Date().getFullYear()}`}</p>
                <p className="happy">
                  🏎️
                  <span>
                    {`   Happy ${new Date().toLocaleString("en-us", {
                      weekday: "long"
                    })}!`}
                  </span>
                  🏁
                </p>
              </Grid>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

const itemStyle = {
  background: "white",
  minHeight: 300,
  borderRadius: "20px",
  padding: "20px"
};
