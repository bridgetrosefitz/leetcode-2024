import { useState } from "react";

function ExampleAccordion() {
  return (
    <div>
      <div>
        <div>
          HTML <span aria-hidden={true} className="accordion-icon" />
        </div>
        <div>
          The HyperText Markup Language or HTML is the standard markup language
          for documents designed to be displayed in a web browser.
        </div>
      </div>
      <div>
        <div>
          CSS <span aria-hidden={true} className="accordion-icon" />
        </div>
        <div>
          Cascading Style Sheets is a style sheet language used for describing
          the presentation of a document written in a markup language such as
          HTML or XML.
        </div>
      </div>
      <div>
        <div>
          JavaScript <span aria-hidden={true} className="accordion-icon" />
        </div>
        <div>
          JavaScript, often abbreviated as JS, is a programming language that is
          one of the core technologies of the World Wide Web, alongside HTML and
          CSS.
        </div>
      </div>
    </div>
  );
}

const accordionContent = [
  {
    title: "ABC1",
    text: "The HyperText Markup Language or HTML is the",
    id: 1,
  },
  {
    title: "ABC2",
    text: "The HyperText Markup Language or HTML is the",
    id: 2,
  },
  {
    title: "ABC3",
    text: "The HyperText Markup Language or HTML is the",
    id: 3,
  },
];

const Section = ({ id, title, text, isOpen, onClick }) => {
  // const [isOpen, setIsOpen] = useState(false)

  // const handleClick = () => {
  //   setIsOpen(prev => !prev)
  // }

  return (
    <div>
      <div
        id={id}
        aria-controls={`accordion-panel-${id}`}
        aria-expanded={isOpen}
      >
        <button style={{ cursor: "pointer" }} onClick={onClick}>
          <h3>{title} </h3>
          <span
            aria-hidden={true}
            style={isOpen ? { transform: "rotate(225deg)" } : {}}
          />
        </button>
      </div>
      <div id={`accordion-panel-${id}`} aria-labelledby={id}>
        {isOpen && <p>{text}</p>}
      </div>
    </div>
  );
};

const Accordion = () => {
  const [openSections, setOpenSections] = useState(new Set());

  const handleToggle = id => {
    setOpenSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const sections = accordionContent.map(({ title, text, id }) => (
    <Section
      key={id}
      id={id}
      title={title}
      text={text}
      isOpen={openSections.has(index)}
      onClick={() => handleToggle(index)}
    />
  ));
  return <>{sections}</>;
};

export default Accordion;

/*

COMPONENTS
- Accordion
- Section
-- state: isOpen
--- props: title, content, onClick

TBD
- Does the parent need to know which of its children are open 
- >> if it does, you can have behaviours like ('close all' / 'ensure only one section is open at a time')
- Why can you not write export default const Blah
- >> export default is used to export an expression directly, whereas const MyComponent = ... is a declaration statement. 
- >> export default const attempts to declare a constant (const MyComponent = ...) and export it as default in a single step, which isn't allowed in JavaScript's module syntax.
- What is the most suitable html element to use for text in an accordion
- Why wasn't my onlick firing when it was on the span
- Why can't I do a gate for isOpen && {stylething: blah}

WAYS TO IMPROVE UX
- Make the whole title be clickable
- Animation
- Open to a specific one on load
- cursor pointer
- expand all / collapse all
- search and autoexpand for found results
- change element types
- GPT idea: Allow users to navigate between accordion headers using arrow keys
- GPT idea: Make each header “focusable” (e.g., using a <button> or adding tabIndex to a <div> acting like a button).
- GPT idea: Ensure pressing Enter or Space on the header toggles the panel.

QUESTIONS
- Can you have multiple open at a time
- Where is data coming from
- Can I assume max length content

TO DO: 
- Answer QUESTIONS above
- Look up accordion in UI library

PARKING LOT
- mock data fetching
- handle longer pieces of content (overflow / height etc)
- make contain things other than images
- make key something other than index
*/
