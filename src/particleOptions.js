export const particlesInit = (main) => {
};

export const particlesLoaded = (container) => {
};

export const options = {
    background: {
      color: {
      },
    },
    fpsLimit: 30,
    interactivity: {
      events: {
        onClick: {
            enable: true,
            mode: "repulse"
        },
        onHover: {
          enable: true,
          mode: "bubble",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 1,
          opacity: 0.7,
          size: 20,
        },
        push: {
          quantity: 1,
        },
        repulse: {
          distance: 200,
          duration: 2,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 0.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 900,
        },
        value: 40,
      },
      opacity: {
        value: 0.1,
      },
      shape: {
        type: "square",
      },
      size: {
        random: true,
        value: 2,
      },
    },
    detectRetina: true,
}