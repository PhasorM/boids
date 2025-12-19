class Controls {
  constructor() {
    this.paused = false;
    this.vectorsEnabled = false;
    this.simulationSpeed = 1;
    this.flockCount = CONFIG.flockCount;
    this.maxSpeed = CONFIG.maxSpeed;

    this.fps = 0;
    this.frameCount = 0;
    this.lastTime = performance.now();

    this.gui = new lil.GUI({ title: "Controls" });
    this.createUI();
    this.addListeners();

    this.startFPSCounter();
  }

  createUI() {
    this.gui.add(this, "paused").name("Pause").listen();

    this.gui.add(this, "vectorsEnabled").name("Show Vectors");

    this.gui
      .add(this, "maxSpeed", 1, 10, 0.05)
      .name("Max Speed")
      .onChange(() => {
        allBoids.forEach((boid) => (boid.maxSpeed = this.maxSpeed));
      });

    this.gui
      .add(this, "flockCount", 1, 6, 1)
      .name("No of Flocks")
      .onChange(() => {
        let newgrpboids = [];
        for (let g = 0; g < this.flockCount; g++) {
          newgrpboids[g] = [];
        }

        for (let i = 0; i < allBoids.length; i++) {
          let b = allBoids[i];
          b.group = i % this.flockCount;
          b.color = CONFIG.colors[i % this.flockCount];
          newgrpboids[i % this.flockCount].push(b);
        }
        flock.grpboids = newgrpboids;
      });

    this.gui.add(this, "simulationSpeed", 1, 20, 1).name("Speed");

    this.gui.add(this, "fps").name("FPS").listen();
  }

  addListeners() {
    window.addEventListener("keydown", (event) => {
      if (event.code === "Space") {
        event.preventDefault();
        this.togglePause();
      }
    });
  }
  startFPSCounter() {
    setInterval(() => {
      const now = performance.now();
      const delta = now - this.lastTime;

      this.fps = Math.round((this.frameCount * 1000) / delta);
      this.frameCount = 0;
      this.lastTime = now;
    }, 1000);
  }

  updateFrame() {
    this.frameCount++;
  }

  shouldDrawVectors() {
    return this.vectorsEnabled;
  }

  getSpeed() {
    return this.simulationSpeed;
  }

  isPaused() {
    return this.paused;
  }

  togglePause() {
    return (this.paused = !this.paused);
  }
}
