import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    videoList : []
}

export const videoListSlice = createSlice({
    name: "videoList",
    initialState,
    reducers: {
        addAllVideos: (state, action) => {
            action.payload.map((video) => {
                if(!state.videoList.some((v) => v.id === video.id)){
                    state.videoList.push(video)
                }
            })
        },
        updateList: (state, action) => {
            state.videoList = []
            action.payload.map((video) => {
                state.videoList.push(video)
            })
        }
    }
})

export const {addAllVideos, updateList} = videoListSlice.actions

export default videoListSlice.reducer