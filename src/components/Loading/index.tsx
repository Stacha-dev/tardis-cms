import React from 'react';
import styles from './styles.module.css';

const Loading = (): JSX.Element => (
	<div className={styles.container}>
		<div className={styles.wrapper}>
			<div className={styles.item}></div>
		</div>
	</div>
);

export default Loading;
