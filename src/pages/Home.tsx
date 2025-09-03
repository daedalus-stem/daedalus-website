import { Link } from "react-router-dom";
import TextImageBlock from "../components/TextImageBlock";

const Home = () => {
  return (
    <div className="w3-content w3-padding-64" style={{ maxWidth: "1200px", fontFamily: "Raleway, sans-serif" }}>
      <TextImageBlock
        title="Who are we?"
        text={
          <p>
            We are the <Link to="/team" className="w3-bold">STEM Racing team Daedalus</Link>, a crew debuting for the 2025–26 season.
            Comprised of 5 students from Wesley College, Perth, our team enters this competition with an approach
            centred around craftsmanship, community outreach and innovation. Join us in our journey to world finals.
          </p>
        }
        image="/team/team1.jpg"
      />
      <TextImageBlock
        title="STEM Racing"
        text={
          <p>
            STEM Racing, formerly F1 in Schools, is the most competitive youth STEM competition
            in the world — attracting 400,000 students a year from over 50 countries. Teams collaborate to market,
            design, manufacture and race a miniature CO₂ propelled F1® racing car that can reach speeds of 80km/h
            on a 20m track.
          </p>
        }
        image="/stock/stemracing.png"
        reverse
        background="w3-light-grey"
      />
      <TextImageBlock
        title="Why STEM?"
        text={
          <p>
            STEM (Science, Technology, Engineering, Mathematics) based occupations are one of the fastest growing
            sectors in the world — projected to increase in demand by 10.4% from 2023 to 2033, compared to just 4%
            growth for all other occupations. Projects like STEM racing inspire curiosity, critical thinking and
            passion in subjects that drive technological innovation and solve real-world challenges.
          </p>
        }
        image="/stock/stemfeature.jpg"
      />
      <TextImageBlock
        title="The Competition"
        text={
          <p>
            STEM Racing involves three stages of competition: regional, national, and world finals — with a top
            placement required to progress from one stage to the next. Teams are judged on their race performance,
            design and enterprise portfolios, as well as verbal presentations. Success in these events requires
            innovation, collaboration, and attention to detail in all aspects of the project.
          </p>
        }
        image="/stock/carsracing.jpg"
        reverse
        background="w3-light-grey"
      />
      <TextImageBlock
        title="Our Team"
        text={
          <p>
            Daedalus, a skilled craftsman and inventor in Greek mythology, inspires our ethos.
            We are debuting this season, yet we have a wealth of experience and knowledge.
          </p>
        }
        image="/team/team2.jpg"
      />
      <TextImageBlock
        title="Sponsorships"
        text={
          <p>
            We are looking to partner with businesses and brands to create mutually beneficial collaborations
            and support funding for our STEM Racing journey.
          </p>
        }
        image="/team/ray.jpg"
        reverse
        background="w3-light-grey"
      />
    </div>
  );
};

export default Home;
