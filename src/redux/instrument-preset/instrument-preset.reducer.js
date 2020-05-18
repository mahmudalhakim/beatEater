const INITIAL_STATE = {
  preset: {},
}

const InstrumentPresetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SEND_SLOT_INFO":
      return {
        ...state,
        preset: {
          ...state.preset,
          [`${action.payload.instrument}${action.payload.number}`]: {
            slotNumber: action.payload.number,
            instrument: action.payload.instrument,
            loaded: action.payload.loaded,
          },
        },
      }
    case "REMOVE_SLOT_INFO":
      let newPreset = state.preset
      delete newPreset[action.payload]
      return {
        ...state,
        preset: newPreset,
      }
    default:
      return state
  }
}

export default InstrumentPresetReducer