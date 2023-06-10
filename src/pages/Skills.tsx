const MySkills = () => {
  return (
    <div id="skills" className="skills">
      <h2>SKILLS</h2>

      <div className="skills__conteyner">
        <div className="skills__conteyner-text">
          <p>
            Как Frontend разработчик на React, Redux и TypeScript я обладаю
            необходимыми знаниями и навыками для создания качественных
            веб-приложений.
          </p>
          Среди них:
          <br />
          <div style={{ paddingLeft: "10px" }}>
            <br /> - Разработка пользовательских интерфейсов с использованием
            компонентов React и роутинга;
            <br /> <br />
            - Управление процессом выполнения приложения с использованием Redux
            и Redux Toolkit;
            <br />
            <br />
            - Использование TypeScript для статической типизации и повышения
            безопасности кода;
            <br /> <br /> - Навыки работы с библиотеками и инструментами: Axios,
            Lodash, Material UI, Styled Components и другие;
            <br /> <br />
            - Оптимизация производительности приложений и работа с серверной
            стороной с помощью REST API;
            <br /> <br />- Работа в команде с использованием Git или другого
            системы контроля версий для совместной разработки;
            <br /> <br />- Создание автотестов с использованием Jest и Enzyme.
          </div>
          <br />
          <p>
            Кроме того, я применяю шаблоны проектирования, такие как
            контейнер-компоненты, хуки и высшего порядка компоненты для
            упрощения создания масштабируемых и поддерживаемых проектов. Такие
            инструменты помогают мне создавать мощные и эффективные
            веб-приложения, при этом улучшая процесс разработки.
          </p>
        </div>
        <div className="skills__conteyner-download">
          <div className="skills__conteyner-download-bg">
            <span>download my portfolio</span>
          </div>
          <img className="download-img" src="download.svg " alt="alt" />
        </div>
      </div>
    </div>
  );
};

export default MySkills;
