import React from 'react';

function CourseListRow(props) {
    const isHeader = (props.isHeader) ? props.isHeader : false;
    const textFirstCell = (props.textFirstCell) ? props.textFirstCell : null;
    const textSecondCell = (props.textSecondCell) ? props.textSecondCell : null;

    if (textFirstCell === null) throw(new Error('textFirstCell is required'));

    if (isHeader) {
        if(textSecondCell === null) {
            return (
                <tr>
                    <th colSpan="2">
                        {textFirstCell}
                    </th>
                </tr>
            );
        } else {
            return (
                <tr>
                    <th style={{textAlign: "start"}}>
                        {textFirstCell}
                    </th>
                    <th style={{textAlign: "start"}}>
                        {textSecondCell}
                    </th>
                </tr>
            );
        }
    } else {
        return (
            <tr>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </tr>
        );
    }
}

export default CourseListRow;
