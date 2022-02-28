import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieApi from '../../common/api/MovieApi'


export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies', 
    async (term) => {

    const response = await movieApi
    .get(`?apiKey=${process.env.REACT_APP_API_KEY}&s=${term}&type=movie`)

    return response.data
})

export const fetchAsyncShows = createAsyncThunk(
    'movies/fetchAsyncShows', 
    async (term) => {

    const response = await movieApi
    .get(`?apiKey=${process.env.REACT_APP_API_KEY}&s=${term}&type=series`)

    return response.data
})

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    'movies/fetchAsyncMovieOrShowDetail', 
    async (id) => {
    const response = await movieApi.get(`?apiKey=${process.env.REACT_APP_API_KEY}&i=${id}&Plot=full`)

    return response.data
})


const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {}
}

const movieSlice = createSlice({
    name:'movies',
    initialState,
    reducers: {
        // addMovies:(state, { payload }) => {
        //     state.movies = payload;
        // },
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShow = {};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
          console.log("pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log("fetched successfully");
            return {...state, movies: payload}
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("rejected ");
        },
        [fetchAsyncShows.fulfilled]: (state, {payload}) => {
            console.log("fetched successfully");
            return {...state, shows: payload}
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, {payload}) => {
            console.log("fetched successfully");
            return {...state, selectedMovieOrShow: payload}
        },
    }
})

export const { removeSelectedMovieOrShow } = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow
export default movieSlice.reducer