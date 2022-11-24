import React from 'react'
import Button from './Button'
import Center from '../Center/Center'

export default {
    title: "Form/Button",
    component: Button,
    // args at component level
    args: {
        children: "Button"
    },
    // decorators:[story => <Center>{story()}</Center>] // here decorators is basically used to wrap the stories of the button component with a center component
}

// named exports
// stories of button component
export const Primary = () =><Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>

const Template = args => <Button {...args} />

// stories of button component
export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant: "primary",
    // children:"Primary Args"
}

// reusing args of another stories
export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
    ...PrimaryA.args,
    children: "LongPrimaryA" // this children override the component level args
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
    variant: "secondary",
    // children:"Secondary Args"
}

