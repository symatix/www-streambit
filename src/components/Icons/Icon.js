import React from 'react';

const Icon = (props) => {
    let { fill, width, height, id, css } = props;

    fill = fill ? fill : 'rgba(0, 0, 0, 1)';
    width = width ? width : "24px";
    height = height ? height : "24px";
    
    return(
        <svg className={css} fill={fill} width={width} height={height}>
            <use xlinkHref={`icons/sprites.svg#${id}`} />
        </svg>
    )
}

export default Icon;