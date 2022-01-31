import React from 'react'
import { Button } from 'semantic-ui-react'

function Submit(props){
    return(
    //button with loading feature when clicked
    <Button type='submit' basic loading {...props} />
    )
}

export default Submit