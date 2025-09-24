import { Link } from "react-router-dom";
import TextImageBlock from "../components/TextImageBlock";

const Sponsors = () => {
  return (
    <div
      className="w3-content w3-padding-64"
      style={{ maxWidth: 1200, fontFamily: "Raleway, sans-serif" }}
    >
      <TextImageBlock
        title="Platinum Tier"
        text={
          <>
            <p>
              Premium visibility with logo placement on the car, team uniforms,
              pit display, and other key elements. Platinum sponsors are
              recognised as our closest partners, with major exposure across all
              platforms and events.
            </p>
          </>
        }
        image="sponsors/platinum.jpg"
        reverse
      />

      <TextImageBlock
        title="Gold Tier"
        text={
          <>
            <p>
              Recognition at outreach events such as fundraisers, stalls, and
              community activities. Gold sponsors feature prominently in
              promotional materials and receive regular exposure through our
              team presentations.
            </p>
          </>
        }
        image="sponsors/gold.jpg"
        background="w3-light-grey"
      />

      <TextImageBlock
        title="Silver Tier"
        text={
          <>
            <p>
              Strong online presence through our social media channels,
              highlighting your brand to a wide audience with engaging,
              shareable content.
            </p>
          </>
        }
        image="sponsors/silver.jpg"
        reverse
      />

      <TextImageBlock
        title="Bronze Tier"
        text={
          <>
            <p>
              Acknowledgement on our official website, showcasing your logo and
              contribution as part of our growing supporter network.
            </p>
          </>
        }
        image="sponsors/bronze.jpg"
        background="w3-light-grey"
      />

      <TextImageBlock
        title="Sponsors"
        text={
          <>
            <p>
              As a first-year team, we are aiming to start this journey with the
              best chance possible for success. Starting from scratch, our team
              has a great opportunity to innovate, collaborate and build new
              partnerships. This is just the beginning, and we are sure that our
              team’s commitment and dedication will make this a journey one to
              remember.
            </p>
            <p>
              We are looking to partner with businesses and brands to benefit
              both parties and assist funding in our STEM Racing Journey.
            </p>
            <Link to="/contact" className="w3-bold">
              Become a Sponsor
            </Link>
          </>
        }
        image="team/ray.jpg"
        reverse
      />
    </div>
  );
};

export default Sponsors;
