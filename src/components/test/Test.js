import React from 'react'
import moment from 'moment';

export default function Test() {

    const a = moment([2021, 0, 5]);
    const b = moment([2021, 0, 10]);
    a.diff(b)

    return (
        <div>
            <input>{a}</input>
            <input>{b}</input>
        </div>
    )
}
