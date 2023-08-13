import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SidebarState {
  isOpen: boolean;
}

const initialState: SidebarState = {
  isOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    handleClose: (state) => {
      state.isOpen = false;
    },
  },
});

export const { setIsOpen, handleClose } = sidebarSlice.actions;
export default sidebarSlice.reducer;
