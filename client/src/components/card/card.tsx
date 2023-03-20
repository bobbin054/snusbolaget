import React from 'react';
import styles from './card.module.scss';

export function Card({ header, children, footer }: { header?: string; children: React.ReactNode; footer?: string }) {
    return (
        <div className={styles.card}>
            {header && <div className={styles.cardHeader}>{header}</div>}
            <div className={styles.cardBody}>{children}</div>
            {footer && <div className={styles.cardFooter}>{footer}</div>}
        </div>
    );
}
