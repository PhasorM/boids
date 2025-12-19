class Flock {
  constructor(boids, grpboids) {
    this.boids = boids;
    this.grpboids = grpboids;
  }

  step() {
    for (let b of this.boids) {
      const neighbors = this.boids;
      const groupNeighbors = this.grpboids[b.group];

      const sep = b.separation(neighbors).mult(CONFIG.separationWeight);
      const ali = b.alignment(groupNeighbors).mult(CONFIG.alignmentWeight);
      const coh = b.cohesion(groupNeighbors).mult(CONFIG.cohesionWeight);
      const wan = b.wander(CONFIG.wanderAngle).mult(CONFIG.wanderWeight);

      b.applyForce(sep);
      b.applyForce(ali);
      b.applyForce(coh);
      b.applyForce(wan);
    }
  }
}
