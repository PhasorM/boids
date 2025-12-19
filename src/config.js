const CONFIG = {
  boidCount: 100,
  maxSpeed: 3.5,
  maxForce: 0.1,
  visualRange: 60,
  separationDistance:30,

  baseMass:50,
  massVariation: 100,
  massBasedClusteringFactor: 2.5,


  cohesionWeight: 0.1,
  alignmentWeight: 1.0,
  separationWeight: 1.2,
  wanderWeight: 2,

  wanderAngle: Math.PI / 3,

  trailLength: 12,
  trailEnabled: true,

  EDGE_BEHAVIORS: {
    WRAP: "wrap",
    BOUNCE: "bounce",
    AVOID: "avoid",
  },
  edgeBehavior: "avoid",
};
