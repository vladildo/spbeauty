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
      <div className='d-flex flex-column justify-content-between'>
        <Option className='flex-row-1 py-2'>{props.children}</Option>
        <div className='d-flex flex-row gap-1'>
          <IconOnlyButton icon={<EditIcon />} />
          <IconOnlyButton icon={<RemoveIcon />} />
        </div>
      </div>
    );
}

export default ListElement;