const CONFIG = {
  boidCount: 240,
  flockCount: 3,
  maxSpeed: 3.5,
  maxForce: 0.1,
  visualRange: 60,

  cohesionWeight: 1.0,
  alignmentWeight: 1.0,
  separationWeight: 1.9,
  wanderWeight: 1.0,

  wanderAngle: Math.PI / 3,

  colors: [
    "#f38ba8",
    "#a6e3a1",
    "#89b4fa",
    "#fddd6bff",
    "#df68fdff",
    "#ffffffff",
  ],

  trailLength: 12,
  trailEnabled: true,

  EDGE_BEHAVIORS: {
    WRAP: "wrap",
    BOUNCE: "bounce",
    AVOID: "avoid",
  },
  edgeBehavior: "avoid",
};
