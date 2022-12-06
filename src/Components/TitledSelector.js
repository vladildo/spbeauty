import styled from "styled-components";

const Select = styled.select`
    background: rgba(248, 250, 252, 1);
    background-position: calc(100% - 0.75rem) center !important;
    -moz-appearance:none !important;
    -webkit-appearance: none !important; 
    appearance: none !important;
    outline: none;
    border-radius: 24px;
    border: 1px solid #E2E8F0;
    background-color: #D9E2EF;
    color: #666787;
    &:hover {
        background-color: #D9E2EFB8;
    }
`;

function TitledSelector({title, options}) {
    const Title = title === undefined ? 
        (<div></div>) : 
        (<div className='caption'>{title}</div>);
    return (
        <div className='d-flex flex-column gap-2'>
            {Title}
            <Select className='p-2'>
                {options.map(optionName => {
                    return (
                        <option key={optionName}>{optionName}</option>
                    );
                })}
            </Select>
        </div>
    );
}

export default TitledSelector;