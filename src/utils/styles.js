export const selectStyles= {
    control: (base, state) => ({
        ...base,
        border: '1px solid #000',
        gridColumn:'span 6',
        // This line disable the blue border
        boxShadow: state.isFocused ? 0 : 0,
        '&:hover': {
            border: '1px solid #000',
        }
    })
}
