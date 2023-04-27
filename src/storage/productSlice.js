import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  value: '',
}


export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    set: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { set } = productSlice.actions

export const productFetch = (filter) => (dispatch) => {
  fetch('http://192.168.0.196:4000/api/v1/product/fetch')
  .then(response => response.json())
  .then(res => dispatch(set(res.products)))
  .catch(error => {
    // handle the error
    console.log(error)
    dispatch(set([]))
});
}

export default productSlice.reducer