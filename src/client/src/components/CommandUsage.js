import React from 'react';
import { useParams } from 'react-router-dom';

function CommandUsage() {
    const { commandName } = useParams();
    return (
        <div>
            <h1>{commandName} Command Usage</h1>
			<p>Here is the usage information for the {commandName} command.</p>
			<p>Click on the Learn More button to see more about the {commandName} command.</p>
        </div>
    );
}

export default CommandUsage;