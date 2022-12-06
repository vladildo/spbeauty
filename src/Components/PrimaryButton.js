import Clickable from "./Clickable";
import styled from "styled-components";



function PrimaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '217px' : props.minWidth; 
    const Button = styled.div`
        background: rgba(59, 130, 246, 1);
        min-width: ${minWidth};
        color: white;
        border-radius: 24px;
        &:hover {
            background: rgba(59, 130, 246, 0.8);
        }
        &:active {
            background: rgba(15, 23, 42, 0.6);
        }
    `;
    return (
        <Clickable>
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default PrimaryButton;