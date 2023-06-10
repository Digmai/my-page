const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="projects-title">
        <h3 className="projects-name">PROJECTS</h3>
        <h2>Мои достижения в этой области</h2>
        <p>
          Я работал над множеством проектов, и каждый из них был отличной
          возможностью для меня проявить свои навыки и творческий потенциал.
          <br />Я постоянно стремлюсь к улучшению своих навыков, и каждый новый
          проект - это новое испытание для меня, которое позволяет мне
          становиться лучше и лучше.
        </p>
      </div>
      <div className="projects-list">
        <div className="projects-list__item">
          <img
            alt="alt"
            src="./photo_2023-06-09_02-30-21.jpg"
            className="projects-list__item-img"
          />
          <div className="projects-list__item-name-bg"></div>
          <div className="projects-list__item-name">item-name</div>
        </div>
        <div className="projects-list__item">
          <img
            alt="alt"
            src="./photo_2023-06-09_02-30-16.jpg"
            className="projects-list__item-img"
          />
          <div className="projects-list__item-name-bg"></div>
          <div className="projects-list__item-name">item-name</div>
        </div>
        <div className="projects-list__item">
          <img
            alt="alt"
            src="./photo_2023-06-09_02-30-02.jpg"
            className="projects-list__item-img"
          />
          <div className="projects-list__item-name-bg"></div>
          <div className="projects-list__item-name">item-name</div>
        </div>
        <div className="projects-list__item">
          <img
            alt="alt"
            src="./photo_2023-06-09_02-30-26.jpg"
            className="projects-list__item-img"
          />
          <div className="projects-list__item-name-bg"></div>
          <div className="projects-list__item-name">item-name</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
