import styled from 'styled-components';
import SecondaryButton from '../../../../../Components/SecondaryButton';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';

const Option = styled.div`
    outline: none;
    border-radius: 1px;
    border: solid none;
    background-color: none;
    color: #0f172a;
`;

function ListElement(props) {
    return (
      <div className='d-flex flex-row justify-content-between'>
        <Option className='mr-auto p-2'>{props.children}</Option>
        <IconOnlyButton className='p-2' icon={<EditIcon />} />
        <IconOnlyButton className='p-2' icon={<RemoveIcon />} />
      </div>
    );
}

export default ListElement;