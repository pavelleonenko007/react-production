import { useState } from 'react';
import classes from './Counter.module.scss';

export function Counter() {
	const [counter, setCounter] = useState(0);

	const increment = () => {
		setCounter(counter + 1);
	};
	return (
		<div className={classes.button}>
			{counter}
			<button onClick={increment}>Увеличить</button>
		</div>
	);
}
