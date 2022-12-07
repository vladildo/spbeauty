import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";

function Addresses() {
    return (
      <div className='col d-flex justify-content-between m-4'>
        <div className='d-flex flex-column gap-4'>
          <div className='title'>Адреса заведений</div>
          <div className='d-flex flex-column gap-2'>
            <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
            <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>{' '}
          </div>
        </div>
        <SecondaryButton>Добавить филиал</SecondaryButton>
      </div>
    );
  }
  
export default Addresses;