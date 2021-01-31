import React, { useMemo } from 'react';
import { ISource } from '../../services/Tardis/types';
import styles from './styles.module.css';

interface ImageProps {
	srcSet: ISource;
	sizes?: string;
	alt: string;
}

const Image = (props: ImageProps): JSX.Element => {
	const { srcSet, sizes, alt } = props;

	const source = useMemo(
		() =>
			Object.entries(srcSet['image/jpeg'])
				.map(([width, path]) =>
					process.env.NODE_ENV === 'development'
						? `https://pc.stacha.dev${path} ${width}w, `
						: `${path} ${width}w, `
				)
				.join(','),
		[srcSet]
	);

	return <img srcSet={source} sizes={sizes} alt={alt} className={styles.container} />;
};

export default Image;