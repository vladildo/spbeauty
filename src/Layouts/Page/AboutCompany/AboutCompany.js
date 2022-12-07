import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
import SecondaryButton from "../../../Components/SecondaryButton";

function AboutCompany() {
  return (
    <div>
      <Heading /> {/* Заголовок и кнопка справа */}
      <div className="d-flex justify-content-between m-5">
        <div className="general">
          <General />
        </div>
        <div className="border-addres d-flex flex-column justify-content-between p-4">
          <Addresses />
          <SecondaryButton>Добавить филиал</SecondaryButton>
        </div>{" "}
        {/* Список доступных адресов заведений */}
      </div>
    </div>
  );
}
  
  export default AboutCompany;