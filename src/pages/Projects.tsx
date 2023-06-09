const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="projects-title">
        <h3 className="projects-name">PROJECTS</h3>
        <h2>What I Am Great At</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupida non
          proident, sunt in culpa qui officia
        </p>
      </div>
      <div className="projects-list">
        <div className="projects-list__item">
          <img
            alt="alt"
            src="./photo_2023-06-09_02-30-21.jpg"
            className="projects-list__item-img"
          />
          <div className="projects-list__item-name">item-name</div>
        </div>
        <div className="projects-list__item">
          <img
            alt="alt"
            src="./photo_2023-06-09_02-30-16.jpg"
            className="projects-list__item-img"
          />
          <div className="projects-list__item-name">item-name</div>
        </div>
        <div className="projects-list__item">
          <img
            alt="alt"
            src="./photo_2023-06-09_02-30-02.jpg"
            className="projects-list__item-img"
          />
          <div className="projects-list__item-name">item-name</div>
        </div>
        <div className="projects-list__item">
          <img
            alt="alt"
            src="./photo_2023-06-09_02-30-26.jpg"
            className="projects-list__item-img"
          />
          <div className="projects-list__item-name">item-name</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
