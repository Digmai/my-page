import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  const handleTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    setTouchPosition(e.touches[0].clientX);
  };

  const handleTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (touchPosition === null) {
      return;
    }

    const delta = touchPosition - e.touches[0].clientX;
    if (delta < 100) {
      handleClose();
    }
  };

  function handleClose() {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  }

  function handleToggle() {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "scroll";
  }
  return (
    <header className="header">
      MySite
      <div id="menuToggle">
        <input type="checkbox" checked={isOpen} onChange={handleToggle} />
        <span></span>
        <span></span>
        <span></span>
        <div
          className={`burger-menu__links ${isOpen ? "open" : ""}`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <a href="#about" onClick={handleClose}>
            About
          </a>
          <a href="#projects" onClick={handleClose}>
            Projects
          </a>
          <a href="#skills" onClick={handleClose}>
            Skills
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
