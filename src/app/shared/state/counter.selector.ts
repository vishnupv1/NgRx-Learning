import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store"
import { counterModel } from "./counter.model"

const getCounterstate = createFeatureSelector<counterModel>('counter')
//const getChannelname = createFeatureSelector<counterModel>('channelname')
export const getCounter = createSelector(getCounterstate, (state) => {
    return state.counter
})
export const getChannel = createSelector(getCounterstate, (state) => {
    return state.channelname
})