import React from "react";

function ListofPlayers() {
  const players = [
    { name: "Virat Kohli", score: 85 },
    { name: "Rohit Sharma", score: 95 },
    { name: "Shubman Gill", score: 78 },
    { name: "KL Rahul", score: 60 },
    { name: "Hardik Pandya", score: 72 },
    { name: "Ravindra Jadeja", score: 68 },
    { name: "R. Ashwin", score: 80 },
    { name: "Mohammed Shami", score: 55 },
    { name: "Jasprit Bumrah", score: 88 },
    { name: "Kuldeep Yadav", score: 65 },
    { name: "Mohammed Siraj", score: 75 }
  ];

  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>

      <h3>All Players</h3>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>

      <h3>Players with Score Below 70</h3>
      <ul>
        {below70.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;