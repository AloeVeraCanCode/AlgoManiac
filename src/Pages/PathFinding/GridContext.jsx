import React, { useState } from "react";
export  const Context = React.createContext();
export const GridContext = ({ children }) => {
	let x=[]
	for(let i=0;i<25;i++)
  {
    let y=[]
    for(let j=0;j<40;j++)
    {
      y.push(0);
    }
    x.push(y);
  }
	const [grid, setGrid] = useState(x);

	return (
		<Context.Provider value={{ grid, setGrid }}>
			{children}
		</Context.Provider>
	);
};