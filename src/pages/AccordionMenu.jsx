import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import styled from "styled-components";


const AccordionMenu = () => {
  const [currentlyActive, setCurrentlyActive] = useState(1);

  const handleAccordionClick = (newActiveAccordion) => {
    setCurrentlyActive(
      newActiveAccordion === currentlyActive ? null : newActiveAccordion
    );
    console.log(`currently active item: ${currentlyActive}`);
    console.log(
      `newly active item: ${newActiveAccordion} previous active item ${currentlyActive}`
    );
  };

  return (
     <Main>

    <div className="accordion-menu">
      <h1 className="title">Let's clear up some doubts about Online BCA in General </h1>
      <div className="accordion-items">
        <AccordionItem
          title="Is Online BCA good for a career?"
          content="Yes, Online BCA is completely approved by UGC and it is of equal value as a regular BCA degree. Moreover, there are a number of fields like cybersecurity, systems analysis, database management, programming, backend and frontend development etc. which graduates can venture into after completing this course. So the career scope is quite vast and bright."
          isActive={currentlyActive === 1}
          onClick={() => handleAccordionClick(1)}
        />
        <AccordionItem
          title="What is the course duraiton of online General BCA"
          content="The minimum course duration is 3 years and the maximum course duration is 6 years. There are 6 semesters in this program."
          isActive={currentlyActive === 2}
          onClick={() => handleAccordionClick(2)}
        />
        <AccordionItem
          title="What is the full fee for online BCA?"
          content="The full course fee for an online general BCA varies from INR 30,000-INR 60,000 (for government universities) and INR 70,000-INR 2,00,000 (for private universities)."
          isActive={currentlyActive === 3}
          onClick={() => handleAccordionClick(3)}
        />
        <AccordionItem
          title="What is the minimum eligibility criteria for online BCA"
          content="The eligibility criteria may differ from one university to another. Generally, the minimum eligibility criteria for a online BCA degree course is 45-55% marks in aggregate at 10+2 level (or equivalent) with Mathematics as a core subject."
          isActive={currentlyActive === 4}
          onClick={() => handleAccordionClick(4)}
        />
        <AccordionItem
          title="Will there be an entrance examination for admission to online BCA course?"
          content="NO, there are no entrance examination for online BCA admission"
          isActive={currentlyActive === 5}
          onClick={() => handleAccordionClick(5)}
        />          
      </div>
    </div>
    </Main>

  );
};

export default AccordionMenu;
const Main = styled.div`
.accordion-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 30px;
  border-radius: 15px;
  border: 1px solid #bdbdbd;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: auto;
  margin-top: 20px;
}

h1.title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  color: #2f80ed;
  font-size: 2.1rem;
  font-weight: 700;
  text-align: center;
}

.accordion-items {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  align-items: flex-start;
  gap: 15px;
  max-width: 80%;
  margin: auto;
}

.accordion-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* width: 600px; */
  padding: 20px;
  border-radius: 15px;
  padding-left: 72px;
  background-color: white;
  cursor: pointer;
  transition: 0.25s background-color;
}

.accordion-item.active {
  background-color: #f2f8fe;
}

h1.accordion-tile {
  color: #000;
  font-size: 16px;
  font-weight: 600;
}

p.accordion-content {
  max-height: 0;
  overflow: hidden;
  color: #000;
  font-size: 1rem;
  font-weight: 300;
  margin: 0;
  transition: 0.5s max-height, 0.5s margin;
}

p.accordion-content.active {
  max-height: 4.3rem;
  margin: 1rem 0;
}

.icon-container {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  z-index: 2;
  border-radius: 39px;
  transform: translateX(-3rem) translateY(0.25rem);
  padding: 0.5rem;
  transition: background-color 0.5s, box-shadow 0.5s;
}

.icon-container.active {
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.stroke-one,
.stroke-two {
  content: "";
  position: relative;
  z-index: 1;
  transition: 0.5s all;
}

.stroke-one {
  width: 3px;
  height: 12px;
  background-color: #000;
  transform: translateX(calc(12px / 2 - 1.5px)) rotate(0deg);
}
.stroke-one.active {
  transform: translateX(calc(12px / 2 - 1.5px)) rotate(90deg);
}
.stroke-two {
  height: 3px;
  width: 12px;
  background-color: #000;
  transform: translateY(calc(-12px / 2 - 1.5px));
}

@media (max-width: 768px){
  h1.title{
    font-size: 2rem;
    width: 400px;
    text-align: center;
    
  }
}

@media (max-width: 425px){
  h1.title{
    font-size: 1.3rem;
    width: 300px;
    text-align: center;
  }
  .accordion-item{
    padding: 0;
  }
  .accordion-menu {
    padding: 50px 0px;
  }
  h1.accordion-tile {
    color: #000;
    font-size: 12px;
    /* font-weight: 500; */
}
p.accordion-content {
 
  font-size: 0.7rem;
  font-weight: 300;
  
}
.icon-container {
       margin-left: 15px;
       margin-bottom : 19px;
       width: 9px;
       height: 9px;
}
}
@media (max-width: 375px){
  h1.title{
    font-size: 1rem;
    width: 200px;
    text-align: center;
  }
  .accordion-item{
    padding: 0;
  }
  .accordion-menu {
    padding: 50px 0px;
  }
  h1.accordion-tile {
    color: #000;
    font-size: 12px;
    /* font-weight: 500; */
}
p.accordion-content {
 
  font-size: 0.7rem;
  font-weight: 300;
  
}
.icon-container {
       margin-left: 15px;
       margin-bottom : 19px;
       width: 9px;
       height: 9px;
}
}
@media (max-width: 320px){
  h1.title{
    font-size: 1rem;
    width: 200px;
    text-align: center;
  }
  .accordion-item{
    padding: 0;
  }
  .accordion-menu {
    padding: 50px 0px;
  }
  h1.accordion-tile {
    color: #000;
    font-size: 12px;
}
p.accordion-content {
 
  font-size: 0.7rem;
  font-weight: 300;
  
}
.icon-container {
       margin-left: 15px;
       margin-bottom : 19px;
       width: 9px;
       height: 9px;
}
}
`