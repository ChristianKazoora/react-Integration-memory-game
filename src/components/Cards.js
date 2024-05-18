import { useState } from "react";
import Card from "./Card";
import Current from "./current";
import Score from "./score";
function Cards() {
  const [items, setItems] = useState(
    [
      {
        id: 1,
        stat: "",
        type: true, // true for integrals, false for derivatives
        equation: `\\[\\int x^n \\,dx\\]`,
      },
      {
        id: 1,
        stat: "",
        type: false, // true for integrals, false for derivatives
        equation: `\\[\\frac{x^{n+1}}{n+1} + c\\]`,
      },
      {
        id: 2,
        stat: "",
        type: true, // true for integrals, false for derivatives
        equation: `\\[\\int \\frac{1}{x} \\,dx\\]`,
      },
      {
        id: 2,
        stat: "",
        type: false, // true for integrals, false for derivatives
        equation: `\\[\\ln|x| + c\\]`,
      },
      {
        id: 3,
        stat: "",
        type: true,
        equation: `\\[\\int e^x \\,dx\\]`,
      },
      { id: 3, stat: "", type: false, equation: `\\[e^x + c\\]` },
      { id: 4, stat: "", type: true, equation: `\\[\\int e^{kx} \\,dx\\]` },
      { id: 4, stat: "", type: false, equation: `\\[\\frac{e^{kx}}{k} + c\\]` },
      { id: 5, stat: "", type: true, equation: `\\[\\int \\sin (x) \\,dx\\]` },
      { id: 5, stat: "", type: false, equation: `\\[-\\cos (x) + c\\]` },
      { id: 6, stat: "", type: true, equation: `\\[\\int \\sin (kx) \\,dx\\]` },
      {
        id: 6,
        stat: "",
        type: false,
        equation: `\\[\\frac{-cos(kx)}{k} + c\\]`,
      },
      { id: 7, stat: "", type: true, equation: `\\[\\int \\cos (x) \\,dx\\]` },
      { id: 7, stat: "", type: false, equation: `\\[\\sin (x) + c\\]` },
      { id: 8, stat: "", type: true, equation: `\\[\\int \\cos (kx) \\,dx\\]` },
      {
        id: 8,
        stat: "",
        type: false,
        equation: `\\[\\frac{\\sin(kx)}{k} + c\\]`,
      },
      {
        id: 9,
        stat: "",
        type: true,
        equation: `\\[\\int \\sec^2 (x) \\,dx\\]`,
      },
      { id: 9, stat: "", type: false, equation: `\\[\\tan (x) + c\\]` },
      {
        id: 10,
        stat: "",
        type: true,
        equation: `\\[\\int \\sec (x) \\tan (x) \\,dx\\]`,
      },
      { id: 10, stat: "", type: false, equation: `\\[\\sec (x) + c\\]` },
      { id: 11, stat: "", type: true, equation: `\\[\\int \\tan (x) \\,dx\\]` },
      { id: 11, stat: "", equation: `\\[\\ln|\\sec(x)| + c\\]` },
      {
        id: 12,
        stat: "",
        type: true,
        equation: `\\[\\int \\frac{1}{x^2 + 1} \\,dx\\]`,
      },
      { id: 12, stat: "", type: false, equation: `\\[\\arctan(x) + c\\]` },
      {
        id: 13,
        stat: "",
        type: true,
        equation: `\\[\\int \\frac{1}{x^2 + k^2} \\,dx\\]`,
      },
      {
        id: 13,
        stat: "",
        type: false,
        equation: `\\[\\frac{arctan({x}/{k})}{k}  + c\\]`,
      },
      {
        id: 14,
        stat: "",
        type: true,
        equation: `\\[\\int \\frac{1}{\\sqrt{1-x^2}} \\,dx\\]`,
      },
      {
        id: 14,
        stat: "",
        type: false,
        equation: `\\[\\arcsin(x) + c\\]`,
      },
      {
        id: 15,
        stat: "",
        type: true,
        equation: `\\[\\int \\frac{1}{\\sqrt{k^2-x^2}} \\,dx\\]`,
      },
      {
        id: 15,
        stat: "",
        type: false,
        equation: `\\[\\arcsin({x}/{k}) + c\\]`,
      },
      {
        id: 16,
        stat: "",
        type: true,
        equation: `\\[\\int \\frac{1}{{kx+b}} \\,dx\\]`,
      },
      {
        id: 16,
        stat: "",
        type: false,
        equation: `\\[\\frac{\\ln|kx+b|}{k} + c\\]`,
      },
      {
        id: 17,
        stat: "",
        type: true,
        equation: `\\[\\int k^x \\,dx\\]`,
      },
      {
        id: 17,
        stat: "",
        type: false,
        equation: `\\[\\frac{k^x}{\\ln(k)} + c\\]`,
      },
      {
        id: 18,
        stat: "",
        type: true,
        equation: `\\[\\int sec(x) \\,dx\\]`,
      },
      {
        id: 18,
        stat: "",
        type: false,
        equation: `\\[\\ln|sec(x) + tan(x)| + c\\]`,
      },
    ].sort(() => Math.random() - 0.5)
  );
  const [used, setUsed] = useState([]);
  const [prev, setPrev] = useState(-1);
  const [theCurrent, setCurrent] = useState(-1);
  function check(current) {
    if (
      items[current].id === items[prev].id &&
      items[current].type !== items[prev].type
    ) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      if (!used.includes(items[prev])) used.push(items[prev]);
      setUsed(used);

      setItems([...items]);
      setPrev(-1);
      setCurrent(-1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      used.forEach((usedItem) => {
        if (usedItem.id === items[current].id) {
          //remove from used
          used.splice(used.indexOf(usedItem), 1);
        }
      });

      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
    if (used.length === items.length / 2) {
      alert("You Win, Now try it on paper 🥴");
    }
  }

  function handleClick(id) {
    if (theCurrent === -1) {
      current();
    } else {
      check(id);
    }
  }

  function current() {
    let curr = parseInt(Math.random() * items.length);
    if (theCurrent === -1) {
      while (!items[curr].type && !used.includes(items[curr])) {
        if (curr === items.length - 1) {
          curr = 0;
        } else {
          curr++;
        }
      }
      setCurrent(curr);
      setItems([...items]);
    }

    if (prev === -1) {
      setPrev(theCurrent);
      setItems([...items]);
    }
    return <Current item={items[prev]} />;
  }

  return (
    <div>
      <Score score={used.length} />
      {current()}
      <div className="container">
        {items.map((item, index) =>
          !item.type ? (
            <Card
              key={index}
              item={item}
              id={index}
              handleClick={handleClick}
            />
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}

export default Cards;
