import React from "react";
import type { TeamMember } from "../pages/Team";

type Props = {
  member: TeamMember;
  onClick: (member: TeamMember) => void;
};

export const TeamCard: React.FC<Props> = ({ member, onClick }) => {
  return (
    <div
      onClick={() => onClick(member)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick(member)}
      className="w3-hover-opacity"
      style={{
        width: 280,
        margin: "1rem",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%", overflow: "hidden", borderRadius: "8px" }}>
        <img
          src={member.img}
          alt={member.name}
          style={{
            width: "100%",
            objectFit: "cover",
            aspectRatio: "3/4",
            borderRadius: "8px",
          }}
        />
      </div>
      <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
        <div style={{ fontWeight: 600 }}>{member.name}</div>
        <div style={{ color: "#555" }}>{member.role}</div>
      </div>
    </div>
  );
};
