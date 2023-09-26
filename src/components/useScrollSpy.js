import { useEffect, useState } from "react";

function useScrollSpy() {
    const [activeId, setActiveId] = useState();
  
    useEffect(() => {
      const handleScroll = () => {
        const sections = document.querySelectorAll('section');
  
        let currentSectionId;
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (rect.top > 0 && rect.top <= rect.height) {
            currentSectionId = section.id;
          }
        });
  
        setActiveId(currentSectionId);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return activeId;
  }
export default useScrollSpy  