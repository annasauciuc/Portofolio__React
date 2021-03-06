import React, { PureComponent } from "react";

import HireCard from "../HireCard/HireCard";
import "./HireCardsList.css";
import { getHireCards } from "./../../services/hire";
import { getText } from "./../../services/translation";

class HireCardsList extends PureComponent {

  render() {
    const { languageSelected } = this.props;
    return (
      <div className="container">
        <div className="row">

          {getHireCards().map((card, i) => {
            return (
              <HireCard
                key={i}
                id={card.id}
                className={card.className}
                text={getText(card.text, languageSelected)}
                title={getText(card.title, languageSelected)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default React.memo(HireCardsList);
