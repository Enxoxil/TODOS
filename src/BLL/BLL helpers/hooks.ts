import {RootDispatch, RootState} from "../store/store";
import {useDispatch, useSelector, TypedUseSelectorHook} from "react-redux";

export const useRootDispatch: () => RootDispatch = useDispatch;
export const useRootSelector: TypedUseSelectorHook<RootState> = useSelector;
