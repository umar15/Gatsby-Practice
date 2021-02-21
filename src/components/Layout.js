import React from "react";
import { Link } from "gatsby";
import styles from "./Layout.module.css";

export default ({ children }) => {
	return (
		<div>
			<div className={styles.navbar}>
				<Link to="/">Home</Link>
				<Link to="/about/">About</Link>
			</div>
			{children}
			<div className={styles.footer}>Copyrights 2020</div>
		</div>
	);
};
