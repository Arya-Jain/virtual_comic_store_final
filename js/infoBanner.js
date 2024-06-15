AFRAME.registerComponent("info-banner", {
    schema: {
      itemId: { default: "", type: "string" },
    },
    update: function () {
      this.createBanner();
    },
    createBanner: function () {
      postersInfo = {
        superman: {
          banner_url: "./assets/posters/superman-banner.jpg",
          title: "Spider Man",
          released_year: "1962",
          description:
            "Certainly! Spider-Man, also known as Peter Parker, was created by writer Stan Lee and artist Steve Ditko.'Spider-Man's main appeal lies in his relatable struggles, both personal and as a superhero. He has faced a wide array of villains like the Green Goblin, Doctor Octopus, and Venom. The character has been featured in various comic series, movies, TV shows, and merchandise. His stories often explore themes of adolescence, responsibility, and the challenges of everyday life.",
        },
        spiderman: {
          banner_url: "./assets/posters/spiderman-banner.jpg",
          title: "Action Comics ",
          released_year: "1938",
          description:
            "Action Comics is a famous comic book series published by DC Comics.superman, the first major superhero character. Created by writer Jerry Siegel and artist Joe Shuster, Superman's debut in Action Comics #1 marked the beginning of the superhero genre and has since become an iconic part of American culture. It's known for its action-packed stories and has played a significant role in comic book history.",
        },
        "captain-aero": {
          banner_url: "./assets/posters/captain-aero-banner.jpg",
          title: "Batman",
          released_year: "193",
          description:
            "Batman, also known as Bruce Wayne, is a superhero created by artist Bob Kane and writer Bill Finger. He first appeared in *Detective Comics* #27 in 1939. Unlike many superheroes, Batman has no superpowers; instead, he relies on his intellect, physical prowess, detective skills, and technological gadgets. His origin story involves witnessing the murder of his parents as a child, which motivates him to fight crime in Gotham City. He's one of DC Comics' most popular and enduring characters",
        },
        "outer-space": {
          banner_url: "./assets/posters/outer-space-banner.jpg",
          title: "adventures of Unknown",
          released_year: " 1948",
          description:
            "Adventures into the Unknown is recognized as the first ongoing horror comic series, debuting in Fall 1948 and running until August 1967. Published by American Comics Group, it featured tales of ghosts, werewolves, haunted houses, and other supernatural elements. The series was a pioneer in the horror genre during the Golden Age of comics."
        },
      };
      const { itemId } = this.data;
  
      const fadeBackgroundEl = document.querySelector("#fadeBackground");
  
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("id", `${itemId}-banner`);
  
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.9,
        height: 1,
      });
  
      entityEl.setAttribute("material", { color: "#000" });
      entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });
  
      const item = postersInfo[itemId];
  
      const imageEl = this.createImageEl(item);
      const titleEl = this.createTitleEl(item);
      const descriptionEl = this.createDescriptionEl(item);
  
      entityEl.appendChild(imageEl);
      entityEl.appendChild(titleEl);
      entityEl.appendChild(descriptionEl);
  
      fadeBackgroundEl.appendChild(entityEl);
    },
    createImageEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.85,
        height: 0.4,
      });
      entityEl.setAttribute("material", { src: item.banner_url });
      entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
      return entityEl;
    },
    createTitleEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
        width: 1.2,
        height: 2,
        color: "#fff",
        value: `${item.title} (${item.released_year})`,
      });
      entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
      return entityEl;
    },
    createDescriptionEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
        width: 0.75,
        height: 2,
        color: "#fff",
        wrapCount: "40",
        value: item.description,
      });
      entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
      return entityEl;
    },
  });
  