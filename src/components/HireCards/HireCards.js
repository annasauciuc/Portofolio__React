import React from "react";
import FontAwesome from "react-fontawesome";
import HireCard from "./../HireCard/HireCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./HireCards.css";
const HireCards = () => {
  
  const projects = [{
    id: 1,
    className: 'fas fa-fist-raised',
    text: 'The ability to collaborate with clients and peers is crucial for web development. Respecting the others ideas and space also. Nothing is more rewarding when hard work pays off. Always trying to learn new things or reinforcing what i know.',
    title: 'Hard Worker'
},{
    id: 2,
    className: 'fas fa-fist-raised',
    text: 'The ability to collaborate with clients and peers is crucial for web development. Respecting the others ideas and space also. Nothing is more rewarding when hard work pays off. Always trying to learn new things or reinforcing what i know.',
    title: 'Hard Worker'
},{
    id: 3,
    className: 'fas fa-fist-raised',
    text: 'The ability to collaborate with clients and peers is crucial for web development. Respecting the others ideas and space also. Nothing is more rewarding when hard work pays off. Always trying to learn new things or reinforcing what i know.',
    title: 'Hard Worker'
},{
    id: 4,
    className: 'fas fa-fist-raised',
    text: 'The ability to collaborate with clients and peers is crucial for web development. Respecting the others ideas and space also. Nothing is more rewarding when hard work pays off. Always trying to learn new things or reinforcing what i know.',
    title: 'Hard Worker'
},{
    id: 5,
    className: 'fas fa-fist-raised',
    text: 'The ability to collaborate with clients and peers is crucial for web development. Respecting the others ideas and space also. Nothing is more rewarding when hard work pays off. Always trying to learn new things or reinforcing what i know.',
    title: 'Hard Worker'
},{
    id: 6,
    className: 'fas fa-fist-raised',
    text: 'The ability to collaborate with clients and peers is crucial for web development. Respecting the others ideas and space also. Nothing is more rewarding when hard work pays off. Always trying to learn new things or reinforcing what i know.',
    title: 'Hard Worker'
}

];
console.log("projects :", projects);
  return (
    <div>
      {projects.map((user, i) => {
        return (
          <HireCard
            key={i}
            id={user.id}
            className={user.className}
            text={user.text}
            title={user.title}
          />
        );
      })}
    </div>
  );
};

export default HireCards;

