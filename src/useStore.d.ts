import React, { Dispatch, ReducerAction } from 'react';
export declare const reducer: <T>(state: any, action: Record<string, string>) => T;
declare const useStore: <T>(initValue?: T | undefined) => [T, React.Dispatch<Record<string, string>>];
export default useStore;
