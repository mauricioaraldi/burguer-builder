import * as React from 'react';

export interface BurguerContext {
	burguer: string[],
	setBurguer: Function
}

const ctxt = React.createContext<BurguerContext | null>(null);

export const BurguerContextProvider = ctxt.Provider;
export const BurguerContextConsumer = ctxt.Consumer;
export const BurguerContext = ctxt;
