import React from 'react';
import { Primary } from '../Button/Button.stories';
import { Small } from '../Input/Input.stories';

export default {
    title: "form/Subscription"
}

// Story within story
export const PrimarySubscriptionMessage = () => {
    return (
        <>
            <Small />
            <Primary />
        </>
    )
}

PrimarySubscriptionMessage.storyName = 'PrimarySubscription'