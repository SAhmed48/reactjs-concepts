import React, { useState, useCallback } from 'react'
import Title from './title';
import Button from './button';
import Display from './display';

function ParentComponent() {
    const [age, setAge] = useState(26);
    const [salary, setSalary] = useState(40000);

    const incrementAge = useCallback(() => {
        setAge(prev => prev + 1);

    },[age]);

    const incrementSalary = useCallback(() => {
            setSalary(prev => prev + 4000);
    }, [salary]);


    return (
        <div>
            <h1> USECALL </h1>
            <Title>useCallback Hook</Title>
            <Display showProps={age}>Age:</Display>
            <Button handleInc={incrementAge}>Increment Age</Button>
            <Display showProps={salary}>Salary:</Display>
            <Button handleInc={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default ParentComponent;
