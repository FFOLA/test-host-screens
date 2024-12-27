import { occupantTypeData } from "@/data/occupanttypedata";
import { placesData } from "@/data/placesdata";
import { OccupantAction, PlaceAction } from "@/types/actions";
import { Occupants } from "@/types/occupants";
import { OnboardingChecklist } from "@/types/onboardingchecklist";
import { Places } from "@/types/places";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface State {
    onboardingChecklist: OnboardingChecklist;
}

const initialState: State = {
    onboardingChecklist: {
        placeType: null,
        occupantType: null,
        occupantTypeData: [],
        placesData: [],
    }
};

const onboardingSlice = createSlice({
    name: "onboarding",
    initialState,
    reducers: {
        setOccupantType: (state, action: PayloadAction<Occupants>) => {
            state.onboardingChecklist.occupantType = action.payload;
        },
        setPlaceType: (state, action: PayloadAction<Places>) => {
            state.onboardingChecklist.placeType = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(getOcuppantTypeData.fulfilled,
                (state, action) => {
                    state.onboardingChecklist.occupantTypeData = action.payload;
                })
            .addCase(
                getPlacesData.fulfilled,
                (state, action) => {
                    state.onboardingChecklist.placesData = action.payload;
                }
            )
            ;
    },
});

export const getPlacesData = createAsyncThunk(
    "onboarding/getPlacesData",
    async () => {

        await new Promise((resolve) => setTimeout(resolve, 3000));
        return placesData;
    }
);
export const getOcuppantTypeData = createAsyncThunk(
    "onboarding/getOcuppantTypeData",
    async () => {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        return occupantTypeData;
    }
);

export const { setOccupantType, setPlaceType, } = onboardingSlice.actions;

export default onboardingSlice.reducer;