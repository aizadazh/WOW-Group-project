import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';

 
const Dropdown = () => (
  <div>
    <h1>React Accordion</h1>
    <Accordion atomic={true}>

      <AccordionItem title="Title 1">
        <DummyContent />
      </AccordionItem>

      <AccordionItem title="Title 2">
        <DummyContent />
      </AccordionItem>

      <AccordionItem title="Title 3">
        <DummyContent />
      </AccordionItem>

    </Accordion>
  </div>
);

const DummyContent = () => (
  <p style={{ padding: '18px' }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi.
  </p>
);

export default Dropdown;