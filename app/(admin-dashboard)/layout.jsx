import React from 'react'
import { StyledEngineProvider } from '@mui/material/styles';

const layout = ({children}) => {
  return (
    <div>
     <StyledEngineProvider injectFirst>
     {children}
     </StyledEngineProvider>
 </div>
  )
}

export default layout