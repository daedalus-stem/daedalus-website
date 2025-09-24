import { useEffect, useState } from "react";
import { TeamCard } from "../components/TeamCard";
import TextImageBlock from "../components/TextImageBlock";

export type TeamMember = {
  name: string;
  role: string;
  img: string;
  bio?: string;
  department: "Engineering" | "Marketing";
};

const mockTeam: TeamMember[] = [
  {
    name: "Xavier De Santis",
    role: "Design Engineer",
    img: "/team/xavier.jpg",
    bio: "Oversees the technical development of the car, specialising in CAD, aerodynamics, and simulation to ensure peak performance.",
    department: "Engineering",
  },
  {
    name: "Josh Munro",
    role: "Manufacturing Engineer",
    img: "/team/josh.jpg",
    bio: "Responsible for precision manufacturing, assembly, and testing, ensuring designs are accurately translated into the final car.",
    department: "Engineering",
  },
  {
    name: "Ray Tiao",
    role: "Graphic Designer and Marketing",
    img: "/team/ray.jpg",
    bio: "Focuses on branding, visuals, and marketing strategy, ensuring the team’s identity is professional, consistent, and engaging.",
    department: "Marketing",
  },
  {
    name: "Bryce Glover",
    role: "Team Manager",
    img: "/team/bryce.jpg",
    bio: "Coordinates team operations, managing timelines, communication, and organisation to keep the team on track and efficient.",
    department: "Marketing",
  },
  {
    name: "Max Pavlinovich",
    role: "Resource and Sponsorship Coordinator",
    img: "/team/max.jpg",
    bio: "Leads sponsorship outreach, resource management, and partnership development to secure the team’s growth and sustainability.",
    department: "Marketing",
  },
];

const Team = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    setTeam(mockTeam);
  }, []);

  const groupedTeam = {
    Engineering: team.filter((m) => m.department === "Engineering"),
    Marketing: team.filter((m) => m.department === "Marketing"),
  };

  return (
    <section
      className="w3-content w3-padding-64"
      style={{ maxWidth: "1200px" }}
    >
      <TextImageBlock
        title="Team"
        text=" We are the STEM Racing team Daedalus, debuting for the 2025-26 season. Comprised of 5 students from Wesley College, Perth, our team enters this competition with an approach centred around craftsmanship, community outreach, and innovation."
        image="team/team2.jpg"
        reverse
      />

      {Object.entries(groupedTeam).map(([department, members]) => (
        <div key={department} style={{ marginTop: "3rem" }}>
          <h3>{department}</h3>
          <div
            className="w3-row"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              gap: "2rem",
            }}
          >
            {members.map((member) => (
              <div key={member.name} style={{ position: "relative" }}>
                <TeamCard member={member} onClick={setSelectedMember} />
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Modal */}
      {selectedMember && (
        <div
          className="w3-modal"
          style={{
            display: "block",
            zIndex: 999,
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="w3-modal-content w3-card-4"
            style={{
              maxWidth: 500,
              margin: "10% auto",
              padding: "1rem",
              borderRadius: "10px",
              backgroundColor: "white",
              overflowY: "auto",
              maxHeight: "80vh",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <header className="w3-container w3-border-bottom">
              <span
                onClick={() => setSelectedMember(null)}
                className="w3-button w3-display-topright"
              >
                &times;
              </span>
              <h2>{selectedMember.name}</h2>
              <p className="w3-text-grey">{selectedMember.role}</p>
            </header>
            <div className="w3-container">
              <img
                src={selectedMember.img}
                alt={selectedMember.name}
                className="w3-image w3-margin-bottom"
                style={{ maxHeight: 200, borderRadius: "6px" }}
              />
              <p>{selectedMember.bio}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;
