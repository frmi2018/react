import React, { useEffect } from "react";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import { Project1, Project2, Project3, Project4 } from "./pages/Projects";
import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const handleScrollToElement = (e) => {
      const url = window.location.origin + "/";

      const wheelRouter = (after, before) => {
        if (e.wheelDeltaY < 0) {
          setTimeout(() => {
            // si roulette vers le bas
            history.push(after);
          }, 500);
        } else if (e.wheelDeltaY > 0) {
          setTimeout(() => {
            // si roulette vers le haut
            history.push(before);
          }, 500);
        }
      };

      switch (window.location.href.toString()) {
        case url:
          if (e.wheelDeltaY < 0) {
            setTimeout(() => {
              history.push("project-1");
            }, 500);
          }
          break;
        case url + "project-1":
          wheelRouter("project-2", "");
          break;
        case url + "project-2":
          wheelRouter("project-3", "project-1");
          break;
        case url + "project-3":
          wheelRouter("project-4", "project-2");
          break;
        case url + "project-4":
          wheelRouter("contact", "project-3");
          break;
        case url + "contact":
          setTimeout(() => {
            if (e.wheelDeltaY > 0) {
              history.push("project-4");
            }
          }, 500);
          break;
        default:
          console.log("nothing");
      }
    };
    // Récupérer mouvement roulette souris
    window.addEventListener("wheel", handleScrollToElement);
  }, [history]);

  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route exact path="/project-1" component={Project1} />
        <Route exact path="/project-2" component={Project2} />
        <Route exact path="/project-3" component={Project3} />
        <Route exact path="/project-4" component={Project4} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </AnimatePresence>
  );
};

export default App;
