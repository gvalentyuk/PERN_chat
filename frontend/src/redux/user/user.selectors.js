import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.user   
)

export const selectLoading = createSelector(
    [selectUser],
    user => user.isLoading
)

export const selectLogged = createSelector(
    [selectUser],
    user => user.isLogged
)

export const selectError = createSelector(
    [selectUser],
    user => user.error
)
