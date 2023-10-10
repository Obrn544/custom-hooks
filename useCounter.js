import { useState } from 'react';

export const useCounter = (initialValue = 10) => {
	const [counter, setCounter] = useState(initialValue);

	const handleAdd = (value = 1) => {
		setCounter(counter + value);
	};

	const handleReset = () => {
		setCounter(initialValue);
	};

	const handleDelete = (value = 2) => {
		// if (counter === 0) return;
		setCounter(counter - value);
	};

	return {
		counter,
		handleAdd,
		handleDelete,
		handleReset,
	};
};
