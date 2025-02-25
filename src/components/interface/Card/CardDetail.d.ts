import * as React from 'react';

export type CardDetailChildren = string | React.ReactNode;

export type CardDetailPosition = 'top'| 'bottom';
export type CardDetailClassName = string | Object | any[];

export interface CardDetailProps {
    __TYPE?: any;
    children: CardDetailChildren;
    className?: CardDetailClassName;
    position?: CardDetailPosition;
}

declare const CardDetail: React.FC<CardDetailProps>;

export default CardDetail;

