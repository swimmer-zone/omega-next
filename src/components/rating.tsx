import { JSX } from 'react';
import { Star } from 'react-feather';
import './rating.scss';

type Props = {
	value: number;
};

export default function Rating ({value}: Props): JSX.Element {
	const max = 5;
  	const percentage = Math.round((value / max) * 100);

	return (<div className="stars" title={"Rating: " + value + " / 5"}>
		{Array.from(Array(max).keys()).map((_, i) => (
			<Star key={String(i)} className="star" />
		))}
		<div className="star-overlay" style={{ width: `${100 - percentage}%` }} />
	</div>);
}