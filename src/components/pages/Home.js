import React from 'react'
import { Button, ButtonBlue, ReversedButton } from '../Buttons'

const Home = () => {
    return (
        <div>
            <Button>play</Button>
            <Button primary>pause</Button>
            <ButtonBlue>change</ButtonBlue>
            <ReversedButton href="#" loading={false} text={`my name is sandy`}>my name is sandy</ReversedButton>
            <ButtonBlue as={ReversedButton} loading={true} primary text={`naman`}>naman</ButtonBlue>
        </div>
    )
}

export default Home